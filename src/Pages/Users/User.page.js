import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    Button, Col, Row, Form, Table,
    Label, Input, FormGroup, CardHeader,
    InputGroup, InputGroupAddon,
    Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
    Pagination, PaginationItem, PaginationLink
} from 'reactstrap';
import { toast } from "react-toastify";

import ModalConfirm from "../../components/modals/modal.comfirm";

class User extends Component {
    render() {
        return (
            <div>
                <ModalConfirm
                    isShowModal={isShowModalConfirm}
                    clickOk={this.deleteLabel}
                    toggleModal={this.toggleDeleteModal}
                />
                <Row className="mt-2 mb-4 pb-2 border-bottom">
                    <Col className="mb-3 mb-xl-0 d-flex align-items-center">
                        <div className="ml-auto d-flex">
                            <Dropdown isOpen={isOpenDropdownSort} toggle={this.toggleDropdownSort}>
                                <DropdownToggle caret>
                                    {params.sort > 0 ? "Cũ nhất" : "Mới nhất"}
                                </DropdownToggle>
                                <DropdownMenu className="">
                                    <DropdownItem onClick={e => this.onClickSelectSort(-1)}>Mới nhất</DropdownItem>
                                    <DropdownItem onClick={e => this.onClickSelectSort(1)}>Cũ nhất</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>

                            <InputGroup>
                                <Input onChange={this.onSearchChange} className="input-search" type="text" id="input1-group2" name="search" placeholder="Nhập tên hãng điện thoại" />
                                <InputGroupAddon addonType="prepend">
                                    <Button onClick={this.onClickSearch} type="button" color="primary"><i className="fa fa-search"></i> Search</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Table hover bordered responsive >

                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên</th>
                                    <th>Chỉnh sửa / Xóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    labelList && labelList.map((val, idx) =>
                                        <tr key={idx}>
                                            <td>{++idx}</td>
                                            <td>{val.name}</td>
                                            <td width="20%">
                                                <Button
                                                    className="btn btn-primary fa fa-pencil"
                                                    onClick={() => this.showUpdateModal(val)} />
                                                <Button
                                                    className="btn btn-danger fa fa-trash"
                                                    onClick={() => this.showConfirmDelete(val._id)} />
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                {/* <Row>
                    {labelTotal > currentList &&
                        <Col className="d-flex">
                            <div className="ml-auto">
                                <Pagination >
                                    <PaginationItem>
                                        <PaginationLink previous tag="button" />
                                    </PaginationItem>
                                    <PaginationItem active={params.skip === 0}>
                                        <PaginationLink onClick={e => this.onClickPagination(indexPagination + 1, "-")} tag="button">
                                            {indexPagination + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                    {
                                        labelTotal > limit_labels &&
                                        <PaginationItem active={(params.skip > 0 && params.skip + limit_labels < labelTotal) || (params.skip > 0 && labelTotal <= limit_labels * 2)}>
                                            <PaginationLink onClick={e => this.onClickPagination(indexPagination + 2)} tag="button">
                                                {indexPagination + 2}
                                            </PaginationLink>
                                        </PaginationItem>
                                    }
                                    {
                                        labelTotal > limit_labels * 2 &&
                                        <PaginationItem active={params.skip + limit_labels >= labelTotal}>
                                            <PaginationLink onClick={e => this.onClickPagination(indexPagination + 3, "+")} tag="button">
                                                {indexPagination + 3}
                                            </PaginationLink>
                                        </PaginationItem>
                                    }
                                    <PaginationItem>
                                        <PaginationLink next tag="button" />
                                    </PaginationItem>
                                </Pagination>
                            </div>
                        </Col>
                    }
                </Row> */}
            </div>
        );
    }
}

export default User;