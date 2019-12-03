import React, { Component } from 'react';
import {
    Button, Col, Row, Form,
    Label, Input, FormGroup, CardHeader
} from 'reactstrap';

import phoneApi from "../../api/phone.api"
import Modal from "../../components/modals/modal"

class PhoneSettings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenModal: false,
            phoneItem: {}
        }
    }

    toggleModalAdd = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }

    onHandleChange = (event) => {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        let phoneItem = Object.assign({}, this.state.phoneItem);
        phoneItem[inputName] = inputValue;
        this.setState({
            phoneItem
        })
    }

    FileOnChange = (event) => {
        let phoneItem = Object.assign({}, this.state.phoneItem);
        var name = event.target.name;
        var value = event.target.files[0];
        phoneItem[name] = value;
        this.setState({
            phoneItem
        });
    }

    savePhone = () => {
        const {id} = this.state.phoneItem;
        if(id){

        }
        else{
            this.addPhone();
        }
    }

    addPhone = () => {
        const {image} = this.state.phoneItem;
        let phone = Object.assign({}, this.state.phoneItem);
        try {
            phone.image = this.uploadImage(image); 
        } catch (error) {
            
        }
    }

    uploadImage = async (image) => {
        try {
            let imageResult = await phoneApi.uploadFile(image);
            console.log(imageResult)
        } catch (error) {
            
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.savePhone();
    }

    render() {
        const { isOpenModal, phoneItem } = this.state;
        console.log(phoneItem)
        return (
            <div>
                <Modal
                    isOpen={isOpenModal}
                    toggle={this.toggleModalAdd}
                    title="Thêm mới"
                    hiddenFooter={true}
                >
                    <Form onSubmit={e => this.onSubmit(e)}
                        ref={c => {
                            this.form = c;
                        }}
                    >
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="name">Tên sản phẩm</Label>
                                    <Input type="text" name="name" id="name" 
                                        value={phoneItem.name || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                                <Col>
                                    <Label for="image">Image</Label>
                                    <Input type="file" name="image" id="image" 
                                        onChange={this.FileOnChange}
                                    />
                                </Col>

                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="label">Nhãn hiệu</Label>
                                    <Input type="text" name="label" id="label" 
                                        value={phoneItem.label || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                                <Col>
                                    <Label for="price">Giá</Label>
                                    <Input type="number" name="price" id="price" 
                                        value={phoneItem.price || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>

                        <CardHeader className="header-product-detail">Màn hình</CardHeader>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="screenTechnology">Công nghệ màn hình</Label>
                                    <Input type="text" name="screenTechnology" id="screenTechnology" 
                                        value={phoneItem.screenTechnology || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                                <Col>
                                    <Label for="screenResolution">Độ phân giải</Label>
                                    <Input type="text" name="screenResolution" id="screenResolution" 
                                        value={phoneItem.screenResolution || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="size">Màn hình rộng</Label>
                                    <Input type="text" name="size" id="size" 
                                        value={phoneItem.size || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                                <Col>
                                    <Label for="touchScreen">Mặt kính cảm ứng</Label>
                                    <Input type="text" name="touchScreen" id="touchScreen" 
                                        value={phoneItem.touchScreen || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>

                        <CardHeader className="header-product-detail">Camera sau</CardHeader>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="mainCameraResolution">Độ phân giải</Label>
                                    <Input type="text" name="mainCameraResolution" id="mainCameraResolution" 
                                        value={phoneItem.mainCameraResolution || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                                <Col>
                                    <Label for="mainCameraVideo">Quay phim</Label>
                                    <Input type="text" name="mainCameraVideo" id="mainCameraVideo" 
                                        value={phoneItem.mainCameraVideo || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="flash">Đèn Flash</Label>
                                    <Input type="text" name="flash" id="flash" 
                                        value={phoneItem.flash || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                                <Col></Col>
                            </Row>
                        </FormGroup>


                        <CardHeader className="header-product-detail">Camera trước</CardHeader>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="selfieCameraResolution">Độ phân giải</Label>
                                    <Input type="text" name="selfieCameraResolution" id="selfieCameraResolution" 
                                        value={phoneItem.selfieCameraResolution || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                                <Col>
                                    <Label for="selfieCameraVideo">Quay phim</Label>
                                    <Input type="text" name="selfieCameraVideo" id="selfieCameraVideo" 
                                        value={phoneItem.selfieCameraVideo || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>


                        <CardHeader className="header-product-detail">Hệ điều hành - CPU</CardHeader>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="os">Hệ điều hành</Label>
                                    <Input type="text" name="os" id="os" 
                                        value={phoneItem.os || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                                <Col>
                                    <Label for="chipset">Chipset (hãng SX CPU)</Label>
                                    <Input type="text" name="chipset" id="chipset" 
                                        value={phoneItem.chipset || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="cpu">Tốc độ CPU</Label>
                                    <Input type="text" name="cpu" id="cpu" 
                                        value={phoneItem.cpu || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                                <Col>
                                    <Label for="gpu">Chip đồ họa (GPU)</Label>
                                    <Input type="text" name="gpu" id="gpu" 
                                        value={phoneItem.gpu || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>


                        <CardHeader className="header-product-detail">Bộ nhớ & Lưu trữ</CardHeader>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="ram">RAM</Label>
                                    <Input type="text" name="ram" id="ram" 
                                        value={phoneItem.ram || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                                <Col>
                                    <Label for="rom">Bộ nhớ trong</Label>
                                    <Input type="text" name="rom" id="rom" 
                                        value={phoneItem.rom || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="cardSlot">Thẻ nhớ ngoài</Label>
                                    <Input type="text" name="cardSlot" id="cardSlot" 
                                        value={phoneItem.cardSlot || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                                <Col></Col>
                            </Row>
                        </FormGroup>


                        <CardHeader className="header-product-detail">Kết nối</CardHeader>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="sim">SIM</Label>
                                    <Input type="text" name="sim" id="sim" 
                                        value={phoneItem.sim || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                                <Col>
                                    <Label for="wifi">Wifi</Label>
                                    <Input type="text" name="wifi" id="wifi" 
                                        value={phoneItem.wifi || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="gps">GPS</Label>
                                    <Input type="text" name="gps" id="gps" 
                                        value={phoneItem.gps || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                                <Col>
                                    <Label for="bluetooth">Bluetooth</Label>
                                    <Input type="text" name="bluetooth" id="bluetooth" 
                                        value={phoneItem.bluetooth || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="jack">Jack tai nghe</Label>
                                    <Input type="text" name="jack" id="jack" 
                                        value={phoneItem.jack || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                                <Col></Col>
                            </Row>
                        </FormGroup>


                        <CardHeader className="header-product-detail">Thiết kế & Trọng lượng</CardHeader>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="build">Thiết kế</Label>
                                    <Input type="text" name="build" id="build" 
                                        value={phoneItem.build || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                                <Col>
                                    <Label for="dimensions">Kích thước</Label>
                                    <Input type="text" name="dimensions" id="dimensions" 
                                        value={phoneItem.dimensions || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="weight">Trọng lượng</Label>
                                    <Input type="text" name="weight" id="weight" 
                                        value={phoneItem.weight || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                                <Col></Col>
                            </Row>
                        </FormGroup>


                        <CardHeader className="header-product-detail">Thông tin pin</CardHeader>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="type">Dung lượng pin</Label>
                                    <Input type="text" name="type" id="type" 
                                        value={phoneItem.type || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                                <Col>
                                    <Label for="capacity">Loại pin</Label>
                                    <Input type="text" name="capacity" id="capacity" 
                                        value={phoneItem.capacity || ""} onChange={this.onHandleChange}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <div className="text-center border-top pt-2">
                            <Button color="primary" type="submit"> Thêm </Button>{" "}
                            <Button className="btn-danger" onClick={this.toggleModalAdd}> Hủy </Button>
                        </div>
                    </Form>

                </Modal>
                <Row className="mt-2 pb-2 border-bottom">
                    <Col lg="2" className="mb-3 mb-xl-0">
                        <Button onClick={this.toggleModalAdd} block color="primary">Thêm mới</Button>
                    </Col>
                    <Col className="mb-3 mb-xl-0 d-flex align-items-center">
                        <div className=" ml-auto">sadsa</div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PhoneSettings;