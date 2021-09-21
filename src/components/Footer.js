import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer class="text-center text-black" >
                <div class="container pt-4">
                    <section class="mb-4">

                    <a
                        class="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.facebook.com/paigekoubaphoto/"
                        target="_blank"
                        rel="noreferrer"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i class="fab fa-facebook-f"></i>
                    </a>

                    <a
                        class="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.instagram.com/paigekoubaphoto/"
                        target="_blank"
                        rel="noreferrer"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i class="fab fa-instagram"></i>
                    </a>
                    </section>
                </div>
                <div class="text-center text-dark p-3" >
                    &copy; Copyright: Paige Kouba Photography
                </div>
            </footer>
        );
    }
}

export default Footer;