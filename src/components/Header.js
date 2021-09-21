import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                <a href="#" class="navbar-brand">PKP LOGO</a>

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
                            {/* <a class="nav-link">galleries</a> */}
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
                                    <a class="dropdown-item" href="#">weddings/engagements</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">families/children</a>
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
                            <a class="nav-link">investment</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">meet paige</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;