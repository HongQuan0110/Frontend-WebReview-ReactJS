import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import { FormattedNumber } from "react-intl";
import { NavLink } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);

  }

  

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <h3 className="text-primary border-bottom d-flex align-items-center pt-2">Mới nhất</h3>
        <Row>
          <Col className="border-bottom border-warning" xs="12" sm="6" lg="3">
            <NavLink to="/dien-thoai/123">
              <img  height="250" width="100%" src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/8/8/637008693100566121_SS-note-10-pl-dd-1.png" ></img>
            </NavLink>
              <h4 className="pt-2">Samsung galaxy</h4>
              <span><FormattedNumber value={800000} /> - <FormattedNumber value={1000000} /></span>
          </Col>

          <Col className="border-bottom border-warning" xs="12" sm="6" lg="3">
              <img height="250px" width="100%" src="https://cdn.tgdd.vn/Products/Images/42/207641/samsung-galaxy-a50s-green-400x400.jpg" ></img>
              <h4 className="pt-2">Card Title</h4>
              <span><FormattedNumber value={800000} /> - <FormattedNumber value={1000000} /></span>
          </Col>

          <Col xs="12" sm="6" lg="3">.col</Col>
          <Col xs="12" sm="6" lg="3">.col</Col>
        </Row>
        
      </div>
    );
  }
}

export default Dashboard;