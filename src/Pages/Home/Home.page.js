import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import { FormattedNumber } from "react-intl";
import { NavLink } from "react-router-dom";
import Score from "../../components/common/score";
import axios from "axios";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    axios
    .post("http://localhost:3001/login", {
      email: "lvhquan0110@gmail.com",
      password: "quan12345"
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const a = this.props.data;
    a.then(e => console.log(e))
    return (
      <div className="animated fadeIn">
        <h3 className="text-primary border-bottom d-flex align-items-center pt-2">Mới nhất</h3>
        <Row>
          <Col className="" xs="12" sm="6" lg="3">
            <NavLink to="/dien-thoai/123">
              <img alt="" height="250" width="auto" src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/8/8/637008693100566121_SS-note-10-pl-dd-1.png" ></img>
            </NavLink>
              <h4 className="pt-2">Samsung galaxy</h4>
              <span><FormattedNumber value={800000} /> - <FormattedNumber value={1000000} /></span>
          </Col>

          <Col className="" xs="12" sm="6" lg="3">
              <img alt="" height="250px" width="auto" src="https://cdn.tgdd.vn/Products/Images/42/207641/samsung-galaxy-a50s-green-400x400.jpg" ></img>
              <h4 className="pt-2">Card Title</h4>
              <span><FormattedNumber value={800000} /> - <FormattedNumber value={1000000} /></span>
          </Col>

          <Col xs="12" sm="6" lg="3">.col</Col>
          <Col xs="12" sm="6" lg="3">.col</Col>
        </Row>

        <h3 className="text-primary border-bottom d-flex align-items-center pt-2">Điểm cao nhất</h3>
        <Row>
          <Col className="" xs="12" sm="6" lg="3">
            <NavLink to="/dien-thoai/123">
              <div className="wrap-score">
                <img  alt="" height="250" width="auto" src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/8/8/637008693100566121_SS-note-10-pl-dd-1.png" ></img>
                  <div className="attach-score">
                    <Score sizeScore="large" select={true}>10</Score>
                  </div>
              </div>
            </NavLink>
              <h4 className="pt-2">Samsung galaxy</h4>
              <span><FormattedNumber value={800000} /> - <FormattedNumber value={1000000} /></span>
          </Col>

          <Col className="" xs="12" sm="6" lg="3">
          <div className="wrap-score">
                <img  alt="" height="250" width="auto" src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/8/8/637008693100566121_SS-note-10-pl-dd-1.png" ></img>
                  <div className="attach-score">
                    <Score sizeScore="large" select={true}>8</Score>
                  </div>
              </div>
              <h4 className="pt-2">Card Title</h4>
              <span><FormattedNumber value={800000} /> - <FormattedNumber value={1000000} /></span>
          </Col>

          <Col xs="12" sm="6" lg="3">.col</Col>
          <Col xs="12" sm="6" lg="3">.col</Col>
        </Row>
        
        <h3 className="text-primary border-bottom d-flex align-items-center pt-2">Quan tâm nhất</h3>
        <Row>
          <Col className="" xs="12" sm="6" lg="3">
            <NavLink to="/dien-thoai/123">
              <img  alt="" height="250" width="auto" src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/8/8/637008693100566121_SS-note-10-pl-dd-1.png" ></img>
            </NavLink>
              <h4 className="pt-2">Samsung galaxy</h4>
              <span><FormattedNumber value={800000} /> - <FormattedNumber value={1000000} /></span>
          </Col>

          <Col className="" xs="12" sm="6" lg="3">
              <img alt="" height="250px" width="auto" src="https://cdn.tgdd.vn/Products/Images/42/207641/samsung-galaxy-a50s-green-400x400.jpg" ></img>
              
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

const mapStateToProps = (state, ownProps) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps)(Dashboard);