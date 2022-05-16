import "./contact.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Us</h1>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/company/tranetech-software-solutions/?originalSubdomain=in"
          className="contact linkedin"
          target={"blank"}
        >
          <AiOutlineLinkedin className="icon" />
          <h2>
          LinkedIn <span>Tranetech Software Solutions</span>
          </h2>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=971528111627&app=facebook&entry_point=page_cta"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
          WhatsApp <span> +971 2 443 3113</span>
          </h2>
        </a>

        <a href="https://www.instagram.com/tranetech_uae/?hl=en" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2 >
          Instagram <span>@tranetech_uae</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
