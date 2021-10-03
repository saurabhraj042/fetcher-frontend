import React from "react"
import { GoMarkGithub} from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";

function Footer(){
    return (
        <div class="footer-basic centered">
            <footer>
                <div class="social">
                    <a href="https://github.com/saurabhraj042/fetcher-frontend">
                        <i> <GoMarkGithub /> </i>
                    </a>
                    <a href="https://www.linkedin.com/in/saurabh-r-07709b100/">
                        <i> <FaLinkedin /> </i>
                    </a>
                </div>
                <p class="copyright">Made with love by Saurabh Raj</p>
            </footer>
    </div>

    )
}

export default Footer