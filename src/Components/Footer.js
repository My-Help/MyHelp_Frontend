import React from 'react'

function Footer() {
    return (
        <footer className="container-fluid" id="footer">
            <div className="row">
                <div className="row mr-auto ml-auto ">

                    <a href="#" className="social-icon" target="_blank" ><i class="fa fa-globe fa-2x   "></i></a>

                    <a href="#" className="social-icon" target="_blank" ><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>

                    <a href="#" className="social-icon" target="_blank" ><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>

                    <a href="mailto:#" className="social-icon"><i className="fa fa-envelope fa-2x" target="_blank"></i></a>

                </div>
            </div>
            <p className="col-12 copyright">Copyright © 2021</p>
        </footer>
    )
}

export default Footer;