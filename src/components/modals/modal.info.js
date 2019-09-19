import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';

function ModalInfo(props) {
  const { isOpen, name, productDetail } = props;
  return (
    <Modal isOpen={isOpen} >
      <ModalHeader>Thông số kỹ thuật chi tiết {name}</ModalHeader>
      <ModalBody>
        {productDetail && 
        <Table>
          <tbody>
            <tr>
              <td style={{ width: "150px" }}>Màn hình</td>
              <td>{productDetail.screen.screenTechnology}</td>
            </tr>
            <tr>
              <td>Hệ điều hành</td>
              <td>{productDetail.platform.os}</td>
            </tr>
            <tr>
              <td>Camera trước</td>
              <td>{productDetail.selfieCamera.resolution}</td>
            </tr>
            <tr>
              <td>Camera sau</td>
              <td>{productDetail.mainCamera.resolution}</td>
            </tr>
            <tr>
              <td>CPU</td>
              <td>{productDetail.platform.cpu}</td>
            </tr>
            <tr>
              <td>RAM</td>
              <td>{productDetail.memory.ram}</td>
            </tr>
            <tr>
              <td>Bộ nhớ trong</td>
              <td>{productDetail.memory.rom}</td>
            </tr>
            <tr>
              <td>Thẻ nhớ</td>
              <td>{productDetail.memory.cardSlot}</td>
            </tr>
            <tr>
              <td>Thẻ SIM</td>
              <td>{productDetail.comms.sim}</td>
            </tr>
            <tr>
              <td>Dung lượng pin</td>
              <td>{productDetail.battery.capacity}</td>
            </tr>
          </tbody>
        </Table>
        }
      </ModalBody>
      <ModalFooter>
        <Button color="primary" >Do Something</Button>{' '}
        <Button color="secondary" >Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalInfo;
