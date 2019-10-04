import React from 'react';
import './Footer.css'

const Footer = () => {

    return (
        <footer className="page-footer grey darken-2">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="grey-text text-lighten-1">React + echarts + .NET core + MongoDB sample</h5>
                        <p className="grey-text text-lighten-1">Enjoy your testing</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li>
                                <a className="light-green-text" href="mailto:e.krishtapovich@gmail.com;jaroslav.godunov@gmail.com">Mail us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright grey darken-2">
                <div className="container" >
                    <div className="row">
                        <div className="col s12 white-text">
                            © 2019 All rights reserved :)
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;