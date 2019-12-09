import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import {appConfig} from "../../configs/app.config"

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props){
    super(props);
  }

  

  render() {

    // eslint-disable-next-line
    const { children, user, login, profile, changePassword } = this.props;
    
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/" className="nav-link" >Trang chủ</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/dien-thoai" className="nav-link">Điện thoại</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/them" className="nav-link">Settings</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-location-pin"></i></NavLink>
          </NavItem>

          {
            user && user.msg === "Token không hợp lệ" && 
            <div>
              <Button onClick={login} type="button" outline color="primary"><i className="fa fa-user "></i>  Đăng nhập</Button>
            </div>
          }
          {
            user && user._id && 

          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={user.avatar ? `${appConfig.apiAvatar}/${user.avatar}` : `${appConfig.defaultAvatar}`} className="img-avatar" alt="" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={profile} ><i className="fa fa-user"></i> Thông tin</DropdownItem>
              <DropdownItem onClick={changePassword}><i className="fa fa-key"></i> Đổi mật khẩu</DropdownItem>
              
              <DropdownItem divider />
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          }
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

// DefaultHeader.propTypes = propTypes;
// DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
