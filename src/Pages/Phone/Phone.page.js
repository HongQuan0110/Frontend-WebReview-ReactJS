import React, { Component } from 'react';
import { Row, Col, Table, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Doughnut } from 'react-chartjs-2';
import "./phone.css"

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
                        <img  height="250" width="auto" src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/8/8/637008693100566121_SS-note-10-pl-dd-1.png" ></img>
                    </Col>

                    <Col xs="12" sm="4">
                    
                            <Doughnut data={doughnut} options={options} />
                        <div className="chart-wrapper">
                        </div>
                       
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
                                <Label for="exampleText">
                                    <div className="d-flex">
                                        <span className="d-flex align-items-center mr-4">
                                            Điểm sản phẩm: 
                                        </span>
                                        <div className="score mini bg-Unselect-Score">1</div>
                                        <div className="score mini bg-Low-Score">2</div>
                                        <div className="score mini bg-Low-Score">3</div>
                                        <div className="score mini bg-Medium-Score">4</div>
                                        <div className="score mini bg-Medium-Score">5</div>
                                        <div className="score mini bg-Medium-Score">6</div>
                                        <div className="score mini bg-Hight-Score">7</div>
                                        <div className="score mini bg-Hight-Score">8</div>
                                        <div className="score mini bg-Hight-Score">9</div>
                                        <div className="score mini bg-Hight-Score">10</div>
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
                        <div className="mb-4">
                            <div className="d-flex flex-rơw">
                                <img className="img-avatar mr-2" style={{borderRadius: "50%", height: "50px", width: "50px"}} src="https://sohanews.sohacdn.com/thumb_w/660/2016/7-avatar-1478435729759-0-214-355-786-crop-1478435953995.jpg" />
                                <div className="">
                                    <div>
                                        <b>Lê Văn Hồng Quân</b>
                                    </div>
                                    <span>11/09/2019</span>
                                </div>
                                <div className="ml-auto">
                                    <div  className="score large bg-Hight-Score">9</div>
                                </div>
                            </div>
                            <div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                            <span className="thumbs-up">
                                <i className="fa fa-thumbs-up fa-sm"></i>
                                <span className="count">50</span>
                            </span>

                            <span className="thumbs-down">
                                <i className="fa fa-thumbs-down"></i>
                                <span className="count">50</span>
                            </span>
                        </div>

                        <div className="mb-4">
                            <div className="d-flex flex-rơw">
                                <img className="img-avatar mr-2" style={{borderRadius: "50%", height: "50px", width: "50px"}} src="https://sohanews.sohacdn.com/thumb_w/660/2016/7-avatar-1478435729759-0-214-355-786-crop-1478435953995.jpg" />
                                <div className="">
                                    <div>
                                        <b>Lê Văn Hồng Quân</b>
                                    </div>
                                    <span>11/09/2019</span>
                                </div>
                                <div className="ml-auto">
                                    <div  className="score large bg-Hight-Score">9</div>
                                </div>
                            </div>
                            <div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                            <i className="fa fa-thumbs-up mr-4">5</i>
                            <i className="fa fa-thumbs-down">1</i>
                        </div>

                        
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Phone;