import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <a href="#" className="navbar-brand">PKP LOGO</a>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navmenu" 
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link">ONE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">TWO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">THREE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">FOUR</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">FIVE</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;