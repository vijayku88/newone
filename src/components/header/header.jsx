import React from 'react';
import {
    Navbar,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="custom-nav">
            <Navbar color="light" light expand="md">
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink to="/about">ABOUT</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/login">Login</NavLink>
                </NavItem>
            </Nav>
            </Navbar>
        </div>
    );
}

export default Header;