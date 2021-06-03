import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <footer class= "footer navbar-fixed-bottom footer-dark-bg-dark">
            <div class="container">
            
                <a href="https://github.com/gracee19" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
                <i class="fab fa-linkedin" as={Link} to="https://www.linkedin.com/in/gracepal/" target="_blank"></i>
                <p class="font-weight-bolder">Made By Grace</p>
                <p>&copy; 2020 Grace Palenzuela Portfolio</p>
                <p><a href="/">Back to Home</a></p>
            </div>
        </footer>
    )
};

export default Footer;