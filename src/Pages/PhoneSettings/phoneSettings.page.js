import React, { Component } from 'react';
import {
    Button, Col, Row, Form,
    Label, Input, FormGroup, CardHeader
} from 'reactstrap';

import { connect } from "react-redux";
import { FormattedNumber } from "react-intl";

import { appConfig } from "../../configs/app.config";
import { getProducts } from "../../actions/phone.action";
import phoneApi from "../../api/phone.api";
import Modal from "../../components/modals/modal";

class PhoneSettings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenModal: false,
            phoneItem: {
                flash: true
            },
        }
    }

    toggleModal = (title = "", phoneItem = {}) => {
        this.setState({
            isOpenModal: !this.state.isOpenModal,
            title,
            phoneItem
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

    showAddNew = () => {
        let title = "Thêm mới";
        this.toggleModal(title, {flash: true})
    }

    savePhone = () => {
        const { id } = this.state.phoneItem;
        if (id) {
            this.updatePhone()
        }
        else {
            this.addPhone();
        }
    }

    handlePhoneData = (phoneItem) => {
        let phone = {};
        phone.name = phoneItem.name;
        phone.label = phoneItem.label;
        phone.price = phoneItem.price;
        phone.screen = {
            screenTechnology: phoneItem.screenTechnology,
            resolution: phoneItem.screenResolution,
            size: phoneItem.size,
            touchScreen: phoneItem.touchScreen
        }
        phone.mainCamera = {
            resolution: phoneItem.mainCameraResolution,
            video: phoneItem.mainCameraVideo,
            flash: phoneItem.flash
        }
        phone.selfieCamera = {
            resolution: phoneItem.selfieCameraResolution,
            video: phoneItem.selfieCameraVideo,
        }
        phone.platform = {
            os: phoneItem.os,
            chipset: phoneItem.chipset,
            cpu: phoneItem.cpu,
            gpu: phoneItem.gpu
        }
        phone.memory = {
            ram: phoneItem.ram,
            rom: phoneItem.rom,
            cardSlot: phoneItem.cardSlot
        }
        phone.comms = {
            sim: phoneItem.sim,
            wifi: phoneItem.wifi,
            gps: phoneItem.gps,
            bluetooth: phoneItem.bluetooth,
            jack: phoneItem.jack
        }
        phone.body = {
            dimensions: phoneItem.dimensions,
            weight: phoneItem.weight,
            build: phoneItem.build
        }
        phone.battery = {
            type: phoneItem.type,
            capacity: phoneItem.capacity
        }
        console.log(phone)
        return phone;
    }

    addPhone = async () => {
        const { image } = this.state.phoneItem;
        let phoneItem = Object.assign({}, this.state.phoneItem);
        try {
            let phone = this.handlePhoneData(phoneItem);
            phone.image = await this.uploadImage(image);
            
            await phoneApi.addPhone(phone);
            this.setState({
                phoneItem: {
                    flash: true
                }
            })
            this.props.getProducts();
            this.toggleModal("", {})
        } catch (error) {

        }
    }

    updatePhone = async () => {
        try {
            const { phoneItem } = this.state;
            let phoneUpdate = this.handlePhoneData(phoneItem);
            await phoneApi.updateProductById(phoneItem.id, phoneUpdate);
            this.toggleModal();
        } catch (error) {
            
        }
    }

    uploadImage = async (image) => {
        try {
            let imageResult = await phoneApi.uploadFile(image);
            return imageResult.filename;
        } catch (error) {
            console.log(error.message);
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.savePhone();
    }

    componentDidMount(){
        this.props.getProducts();
    }

    onClickPhone = async (id) => {
        try {
            const { phoneItem } = this.state;
            let phoneResult = await phoneApi.getProductById(id);
            phoneItem.id = id;
            phoneItem.name = phoneResult.product.name;
            phoneItem.label = phoneResult.product.label;
            phoneItem.price = phoneResult.product.price;
            phoneItem.image = phoneResult.product.image;
            const { productDetail } = phoneResult;
            if(productDetail.screen){
                phoneItem.screenTechnology = productDetail.screen.screenTechnology;
                phoneItem.screenResolution = productDetail.screen.resolution;
                phoneItem.size = productDetail.screen.size;
                phoneItem.touchScreen = productDetail.screen.touchScreen;
            }
            if (productDetail.mainCamera){
                phoneItem.mainCameraResolution = productDetail.mainCamera.resolution;
                phoneItem.mainCameraVideo = productDetail.mainCamera.video;
                phoneItem.flash = productDetail.mainCamera.flash;
            }
            if (productDetail.selfieCamera){
                phoneItem.selfieCameraResolution = productDetail.selfieCamera.resolution;
                phoneItem.selfieCameraVideo = productDetail.selfieCamera.video;
            }
            if (productDetail.platform){
                phoneItem.os = productDetail.platform.os;
                phoneItem.chipset = productDetail.platform.chipset;
                phoneItem.cpu = productDetail.platform.cpu;
                phoneItem.gpu = productDetail.platform.gpu;
            }
            if (productDetail.memory){
                phoneItem.rom = productDetail.memory.rom;
                phoneItem.ram = productDetail.memory.ram;
                phoneItem.cardSlot = productDetail.memory.cardSlot;
            }
            if (productDetail.comms){
                phoneItem.sim = productDetail.comms.sim;
                phoneItem.wifi = productDetail.comms.wifi;
                phoneItem.gps = productDetail.comms.gps;
                phoneItem.bluetooth = productDetail.comms.bluetooth;
                phoneItem.jack = productDetail.comms.jack;
            }
            if (productDetail.body){
                phoneItem.dimensions = productDetail.body.dimensions;
                phoneItem.weight = productDetail.body.weight;
                phoneItem.build = productDetail.body.build;
            }
            if (productDetail.battery){
                phoneItem.type = productDetail.battery.type;
                phoneItem.capacity = productDetail.battery.capacity;
            }
            
            this.toggleModal("Chỉnh sửa", phoneItem);
        } catch (error) {
            
        }
    }

    render() {
        const { isOpenModal, phoneItem, title } = this.state;
        const { data } = this.props;
        const { phoneList } = data;
        return (
            <div>
                <Modal
                    isOpen={isOpenModal}
                    toggle={e => this.toggleModal()}
                    title={title}
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
                                    <Input type="select" name="flash" id="flash"
                                        value={phoneItem.flash} onChange={this.onHandleChange}
                                    >
                                        <option value={true}>Có</option>
                                        <option value={false}>Không</option>
                                    </Input>
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
                            <Button color="primary" type="submit"> Xác nhận </Button>{" "}
                            <Button className="btn-danger" onClick={e => this.toggleModal()}> Hủy </Button>
                        </div>
                    </Form>

                </Modal>
                <Row className="mt-2 mb-4 pb-2 border-bottom">
                    <Col lg="2" className="mb-3 mb-xl-0">
                        <Button onClick={this.showAddNew} block color="primary">Thêm mới</Button>
                    </Col>
                    <Col className="mb-3 mb-xl-0 d-flex align-items-center">
                        <div className=" ml-auto">sadsa</div>
                    </Col>
                </Row>

                <Row>
                    {phoneList && phoneList.map((val, idx) => 
                        <Col key={idx} className="" xs="12" sm="6" lg="3">
                            <img onClick={e => this.onClickPhone(val._id)} alt="" height="250" width="auto" src={`${appConfig.apiProductImage}/${val.image}`} ></img>
                            <h5 className="pt-2">{val.name}</h5>
                            <span><FormattedNumber value={val.price} /></span>
                        </Col>
                    )}
                    
                    
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.phoneList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getProducts: () => {
            dispatch(getProducts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneSettings);