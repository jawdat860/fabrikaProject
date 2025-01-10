import whatsapp from "../../assets/images/ico/Social/whatsapp-b.svg";
import telegram from "../../assets/images/ico/Social/tg-b.svg";
import vk from "../../assets/images/ico/Social/vk-b.svg";
import tinkoff from "../../assets/images/ico/pay/T-bank-b.svg";
import mastercard from "../../assets/images/ico/pay/Mastercard-b.svg";
import mir from "../../assets/images/ico/pay/mir-b.svg";
import visa from "../../assets/images/ico/pay/visa-b.svg";
import youtube from "../../assets/images/ico/Social/YouTube.svg";
import cbp from "../../assets/images/ico/pay/sbp-b.svg";
import cber from "../../assets/images/ico/pay/sber-b.svg";
import logo from "../../assets/images/ico/logo.svg";
import { LocalText } from "../LocalText/LocalText";
import "./Footer.css";
import Logo from "../Module/Logo/LogoTip";
function FooterW() {
  return (
    <>
      <div className="line footer-w">
        <div></div>
      </div>
      <div className="genn-Footer-firstSection">
        <div className="genn-Footer-ico-contact-container genn-fl-row">
          <img src={telegram} alt={LocalText.footer.title1} />
          <img src={youtube} alt={LocalText.footer.title1} />
          <img src={whatsapp} alt={LocalText.footer.title1} />
          <img src={vk} alt={LocalText.footer.title1} />
          {/* <div className="genn-Footer-">11-3</div> */}
        </div>
        <div className="genn-Footer-description">
          {LocalText.footer.description}
        </div>
        <div className="genn-Footer-ico-bay-conatiner genn-fl-row">
          <img src={mir} alt={LocalText.footer.description} />
          <img src={mastercard} alt={LocalText.footer.description} />
          <img src={cber} alt={LocalText.footer.description} className="cber" />
          <img src={visa} alt={LocalText.footer.description} />
          <img src={cbp} alt={LocalText.footer.description} />
          <img src={tinkoff} alt={LocalText.footer.description} />
          {/* <div className="genn-Footer-">11-5</div>
          <div className="genn-Footer-">11-6</div> */}
        </div>
      </div>
      <div className="genn-Footer-logo-container genn-fl-row">
        <div className="genn-Footer-email">{LocalText.footer.email}</div>
        <div className="genn-Footer-logo">
          <Logo logo={logo} />
          <span className="genn-footer-subLogo">
            {LocalText.footer.subLogo}
          </span>
        </div>
        <div className="genn-Footer-phone">{LocalText.footer.phoneNumber}</div>
      </div>
    </>
  );
}
export default FooterW;
