import React, { Component } from 'react';
import { Row, Col, Table, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Doughnut } from 'react-chartjs-2';
import Comment from "../../components/common/comment";
import Score from '../../components/common/score';

class Phone extends Component {
    constructor(props){
        super(props);
        this.state = {
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
    render() {
        const {doughnut, options} = this.state;
        return (
            <div>
                <h3 className="border-bottom d-flex align-items-center pt-2">Samsung Galaxy</h3>
                <Row>
                    <Col xs="12" sm="4">
                        <img alt="" height="250" width="auto" src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/8/8/637008693100566121_SS-note-10-pl-dd-1.png" ></img>
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
                                <Input  style={{height: "100px", maxHeight: "250px", minHeight: "56px"}} type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs="12" sm="4">
                        <h4>Thông số kỹ thuật</h4>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td style={{width: "150px"}}>Màn hình</td>
                                        <td>Chính 12 MP & Phụ 12 MP, 16 MP</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>Chính 12 MP & Phụ 12 MP, 16 MP</td>
                                    </tr>
                                    <tr>
                                        <td>Camera trước</td>
                                        <td>Chính 12 MP & Phụ 12 MP, 16 MP</td>
                                    </tr>
                                </tbody>
                            </Table>
                    </Col>

                    <Col xs="12" sm="8">
                        <h4>Đánh giá khác</h4>
                        <Comment score={9} sizeScore="large"></Comment>
                        <Comment score={6} sizeScore="large"></Comment>
                        <Comment score={3} sizeScore="large"></Comment>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Phone;