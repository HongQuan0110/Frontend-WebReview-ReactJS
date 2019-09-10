import React, { Component } from 'react';
import { Row, Col, Table } from "reactstrap";
import { Doughnut } from 'react-chartjs-2';


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
                    <Col xs="4" sm="3">
                        <img  height="250" width="100%" src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/8/8/637008693100566121_SS-note-10-pl-dd-1.png" ></img>
                    </Col>

                    <Col xs="5">
                    
                        <div className="chart-wrapper">
                            <Doughnut data={doughnut} options={options} />
                        </div>
                       
                    </Col>

                    <Col xs="8" sm="4">
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
                </Row>
            </div>
        );
    }
}

export default Phone;