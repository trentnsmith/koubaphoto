import React, { Component } from 'react';
import Logo from '../img/logo/logo3.png';

class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light">
                <a href="/" class="navbar-brand">
                <img src={Logo} alt="logo" />
                
                </a>

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
                            <a class="nav-link" href="/">home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a 
                                class="nav-link dropdown-toggle" 
                                href="#" 
                                id="navbarDropdown" 
                                role="button" 
                                data-bs-toggle="dropdown"
                            >
                                galleries
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li>
                                    <a class="dropdown-item" href="/wedding-gallery">weddings/engagements</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/family-gallery">families/children</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">lifestyle newborn</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">seniors</a>
                                </li>
                                
                            </ul>
                            
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/pricing">investment</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/aboutme">meet paige</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;