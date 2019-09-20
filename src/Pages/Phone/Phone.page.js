import { connect } from "react-redux";
import React, { Component } from 'react';
import { Row, Col, Table, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Doughnut } from 'react-chartjs-2';
import { Redirect } from "react-router-dom";

import { appConfig } from "../../configs/app.config";
import { getProductById } from "../../actions/phone.action";
import Comment from "../../components/common/comment";
import Score from '../../components/common/score';
import Modal from "../../components/modals/modal.info";

class Phone extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
            isOpenModal: false,
            doughnut: {
                labels: [
                  'Số điểm',
                ],
                datasets: [
                {
                    data: [5, 5],
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

    componentDidMount(){
        this.props.getProductById(this.props.match.params.id);
    }


    render() {
        const {doughnut, options, isOpenModal} = this.state;
        const { phoneInfo} = this.props;
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
                    
                        <Doughnut data={doughnut} options={options} />
                        
                       
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
                        <Form>
                            <FormGroup>
                                <Label for="">
                                    <div className="d-flex">
                                        <span className="d-flex align-items-center mr-4">
                                            Điểm sản phẩm: 
                                        </span>
                                        <div>
                                            <Score sizeScore="mini" select={false}>1</Score>
                                        </div>
                                        <Score sizeScore="mini" select={false}>2</Score>
                                        <Score sizeScore="mini" select={false}>3</Score>
                                        <Score sizeScore="mini" select={false}>4</Score>
                                        <Score sizeScore="mini" select={false}>5</Score>
                                        <Score sizeScore="mini" select={false}>6</Score>
                                        <Score sizeScore="mini" select={false}>7</Score>
                                        <Score sizeScore="mini" select={false}>8</Score>
                                        <Score sizeScore="mini" select={false}>9</Score>
                                        <Score sizeScore="mini" select={false}>10</Score>
                      
                                    </div>
                                </Label>
                                <Input onClick={this.checkLogin}  style={{height: "100px", maxHeight: "250px", minHeight: "56px"}} type="textarea" name="text" id="exampleText" />
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