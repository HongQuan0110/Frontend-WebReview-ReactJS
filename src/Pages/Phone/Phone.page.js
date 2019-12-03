import { connect } from "react-redux";
import React, { Component } from 'react';
import { Row, Col, Table, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { toast } from "react-toastify";

import CommentApi from "../../api/comment.api";
import { appConfig } from "../../configs/app.config";
import { getProductById } from "../../actions/phone.action";
import Comment from "../../components/common/comment";
import Score from '../../components/common/score';
import Modal from "../../components/modals/modal.info";
import Chart from "../../components/common/chart";

class Phone extends Component {
    constructor(props){
        super(props);
        this.state = {
            comment: {
                productId: this.props.match.params.id,
                score: 0,
                content: ""
            },
            listSore: [1,2,3,4,5,6,7,8,9,10],
            nodeScore: 0,
            isOpenModal: false,
            doughnut: {
                labels: [
                  'Số điểm',
                ],
                datasets: [
                {
                    data: [0, 5],
                    backgroundColor: [
                        '#FF6384',
                    ],
                }],
                
            },
            options: {
                title: {
                    display: true,
                    text: '5.0/10',
                    position: 'bottom'
                },
                tooltips: {
                    enabled: false
                }
            }
        }
    }

    toggleModalInfo = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }

    checkLogin = () => {
        if(this.props.user.msg) {
            return this.props.history.push("/login", this.props.match.url);
        }
    }

    onChange = (e) => {
        const {comment} = this.state;
        comment.content = e.target.value;
        this.setState({
            comment
        })
    }

    onSubmitComment = async (e) => {
        const {comment} = this.state;
        e.preventDefault();
        if(this.props.user.msg) {
            return this.props.history.push("/login", this.props.match.url);
        }
        if(!comment.content.trim()){
            return toast.error("Bạn phải nhập nhận xét");
        }
        // else if (comment.score === 0){
        //     return toast.error("Bạn phải chọn điểm dánh giá");
        // }
        else{
            let kq = await CommentApi.SentimentAnalysis(comment.content);
            comment.analysis = kq[0]
            await CommentApi.AddComment(comment);
            await this.props.getProductById(this.props.match.params.id);
            comment.content = "";
            comment.score = 0;
            this.setState({
                comment
            })
        }
    }

    onMouseOver = (e, val) => {
        this.setState({
            nodeScore: val
        })
    }

    onMouseLeave = (e, val) => {
        this.setState({
            nodeScore: 0
        })
    }

    onClick = (e, val) => {
        if(this.props.user.msg) {
            return this.props.history.push("/login", this.props.match.url);
        }
        
        const {comment} = this.state;
        comment.score = val;
        this.setState({
            comment
        })
    }

    componentDidMount(){
        this.props.getProductById(this.props.match.params.id);
    }

    showChart = (comments) => {
        if(comments){
            let countPositive = 0;
            let countNegative = 0;
            let countNeutral = 0;
            comments.map(val => {
                if(val.analysis === 'Tích cực'){
                    countPositive++
                }
                else if(val.analysis === 'Tiêu cực'){
                    countNegative++
                }
                else{
                    countNeutral++
                }
            })
            this.setState({
                doughnut: {
                    labels: [
                      'Tích cực',
                      'Tiêu cực',
                      'Bình thường'
                    ],
                    datasets: [
                    {
                        data: [countPositive, countNegative, countNeutral],
                        backgroundColor: [
                            '#28a745',
                            '#f00',
                            '#fc3'
                        ],
                    }],
                    
                },
                options: {
                    title: {
                        display: false,
                        text: '5.0/10',
                        position: 'bottom'
                    },
                    tooltips: {
                        enabled: false
                    }
                }
            })
        }
    }
    

    render() {
        const {doughnut, options, isOpenModal, comment, listSore, nodeScore} = this.state;
        const { phoneInfo, user} = this.props;
        const {phone} = phoneInfo;
        return (
            <div >
                {
                    phone && 
                    <Modal 
                        isOpen={isOpenModal}
                        name={phone.product.name}
                        productDetail={phone.productDetail}
                        toggle={this.toggleModalInfo}
                    />
                }

                
                <h3  className="border-bottom d-flex align-items-center pt-2">{phone ? phone.product.name : ""}</h3>
                <Row>
                    <Col xs="12" sm="4">
                        <img alt="" height="250" width="auto" src={phone ? `${appConfig.apiProductImage}/${phone.product.image}` : ""} ></img>
                    </Col>

                    <Col xs="12" sm="4">
                        {
                            phone && <Chart dataComments={phone.comments} ></Chart>                        
                        }
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0 ">
                        <Button color="secondary" className="btn-pill">
                            <i className="fa fa-plus-circle"></i>&nbsp;Muốn mua
                        </Button>
                    </Col>

                    <Col xs="12" sm="8">
                        <h4>Nhận xét</h4>
                        <Form onSubmit={e => this.onSubmitComment(e)}>
                            <FormGroup className="form-group-comment">
                                {/* <Label for="">
                                    <div className="d-flex">
                                        <span className="d-flex align-items-center mr-4">
                                            Điểm sản phẩm: 
                                        </span>
                                        {
                                            listSore.map((val, idx) => {
                                                return <Score 
                                                onMouseOver={(e) => this.onMouseOver(e, val)}  
                                                onMouseLeave={(e) => this.onMouseLeave(e, val)}
                                                onClick={(e) => this.onClick(e, val)}
                                                key={idx} 
                                                sizeScore="mini"
                                                classname="score-hover"
                                                select={val <= nodeScore || val <= comment.score}>{val}</Score>
                                            })
                                        }
                                    </div>
                                </Label> */}
                                <Input value={comment.content} onChange={e => this.onChange(e)} onClick={this.checkLogin}  style={{height: "100px", maxHeight: "250px", minHeight: "56px"}} type="textarea" name="text" id="exampleText" />
                                <Button className="btn-send-comment" outline color="dark">Gửi</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs="12" sm="4">
                        <h4>Thông số kỹ thuật</h4>
                        {phone && phone.productDetail && 
                        <div>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td style={{width: "150px"}}>Màn hình</td>
                                        <td>{phone.productDetail.screen.screenTechnology}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>{phone.productDetail.platform.os}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera trước</td>
                                        <td>{phone.productDetail.selfieCamera.resolution}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera sau</td>
                                        <td>{phone.productDetail.mainCamera.resolution}</td>
                                    </tr>
                                    <tr>
                                        <td>CPU</td>
                                        <td>{phone.productDetail.platform.cpu}</td>
                                    </tr>
                                    <tr>
                                        <td>RAM</td>
                                        <td>{phone.productDetail.memory.ram}</td>
                                    </tr>
                                    <tr>
                                        <td>Bộ nhớ trong</td>
                                        <td>{phone.productDetail.memory.rom}</td>
                                    </tr>
                                    <tr>
                                        <td>Thẻ nhớ</td>
                                        <td>{phone.productDetail.memory.cardSlot}</td>
                                    </tr>
                                    <tr>
                                        <td>Thẻ SIM</td>
                                        <td>{phone.productDetail.comms.sim}</td>
                                    </tr>
                                    <tr>
                                        <td>Dung lượng pin</td>
                                        <td>{phone.productDetail.battery.capacity}</td>
                                    </tr>
                                </tbody>
                                
                            </Table>
                            <Button className="mb-2" outline color="primary" size="lg" onClick={this.toggleModalInfo} block>Xem cấu hình chi tiết</Button>
                            </div>
                        }
                    </Col>

                    <Col xs="12" sm="8">
                        <h4>Đánh giá khác</h4>
                        {phone && phone.comments && phone.comments.map((val, idx) => {
                           return <Comment key={idx} user={phone.users[idx]} comment={val} sizeScore="large"></Comment>
                        })}
                        
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        phoneInfo: state.phone,
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getProductById: (id) => {
            dispatch(getProductById(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Phone);