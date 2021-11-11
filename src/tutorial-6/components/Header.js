import React from "react";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <h2>
                <Link to="/">React Blog</Link>
            </h2>
            <Nav variant="pills" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link as={NavLink} eventKey="/" to="/">
                        Главная
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} eventKey="/about" to="/about">
                        Обо мне
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} eventKey="/profile" to="/profile">
                        Профиль
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </header>
    )
}