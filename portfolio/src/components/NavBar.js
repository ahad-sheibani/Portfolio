import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar(props) {
    return (
        <div className="NavBar">


            <nav className="nav">
                <div className="profile">
                    <img src="/images/avatar.jpeg" alt="profile image" />
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>

                </ul>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About me
                        </NavLink>
                    </li>

                </ul>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/portfolio" exact activeClassName="active">
                            Projects
                        </NavLink>
                    </li>

                </ul>
                {/* <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/blog" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>

                </ul> */}
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>
                        @2021 Ahad Sheibani
                    </p>

                </footer>
            </nav>

        </div>
    );
}

export default NavBar;