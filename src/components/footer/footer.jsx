import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti"

function Footer() {
  return (
    <div id="footer" className=" footer">
      <div class="container">
        <div class="row">
        <div class="col-12 col-sm-6 col-md-3 section">
            <h1>Head office</h1>
            <ol>
              <li>Primary. Electra Street, Behind Honda Showroom. 703. Abu Dhabi, Abu Dhabi 72973, AE. <br />
              Phone: +971 2 443 3113 <br />
              
              <a href="info@tranetech.com">mail: info@tranetech.com</a>
              </li>
            </ol>
          </div>
          
          <div class="col-12 col-sm-6 col-md-3 section">
            <h1>regional office</h1>
            <ol>
              <li>115, Second floor, Lakshmanaswamy Salai, Sector 1,K. K. Nagar, Chennai, Tamil Nadu 600078 <br/>
              Phone: +91 44 4958 5658 <br />
              info-india@tranetech.com <br />
              </li>
              <li>Supermall: 2. 213. Ghandinagar, Gujarat 382009, IN.</li>
              <li>Kaloor. 114. cochin, kerala 682017, IN.</li>
              
            </ol>
          </div>
          
          
        </div>
      </div>
      <div className="social-links">
        <h1>connect with us</h1>
        <div>
        <a href="https://www.instagram.com/tranetech_uae/?hl=en">
          <BsInstagram className="social" />
        </a>
        <a href="https://www.facebook.com/tranetechsoftwaresolutions/?ref=page_internal">
          {" "}
          <FaFacebookF className="social" />
        </a>
        <a href="https://www.linkedin.com/company/tranetech-software-solutions/?originalSubdomain=in">
          {" "}
          <TiSocialLinkedin className="social" />
        </a>
        <a href="https://twitter.com/tranetech_uae?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          {" "}
          <TiSocialTwitter className="social" />
        </a>

        </div>
      </div>
    </div>
  );
}
export default Footer;
