import React, { Component } from 'react';
import Logo from '../img/logo/logo3.png';

class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light">
                <Link to="/" class="navbar-brand">
                    <img src={Logo} alt="logo" />
                </Link>

                <button 
                    class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navmenu" 
                >
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="navmenu">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">home</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link 
                                class="nav-link dropdown-toggle" 
                                to="#" 
                                id="navbarDropdown" 
                                role="button" 
                                data-bs-toggle="dropdown"
                            >
                                galleries
                            </Link>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li>
                                    <Link class="dropdown-item" to="/wedding-gallery">weddings/engagements</Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="/family-gallery">families/children</Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="/newborn-gallery">lifestyle newborn</Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="/seniors-gallery">seniors</Link>
                                </li>
                                
                            </ul>
                            
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/pricing">investment</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/aboutme">meet paige</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;