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
import Logo from "../Module/Logo/LogoTip";

function FooterW() {
  return (
    <>
      <div className="h-[1px] bg-gray-300"></div>
      <div className="flex flex-col items-center text-black bg-[#EEECEA] px-4 py-6">
        <div className="text-xl mb-4">{LocalText.footer.title1}</div>
        <div className="flex gap-6 mb-8">
          <img
            src={telegram}
            alt={LocalText.footer.title1}
            className="w-12 h-12"
          />
          <img
            src={youtube}
            alt={LocalText.footer.title1}
            className="w-12 h-12"
          />
          <img
            src={whatsapp}
            alt={LocalText.footer.title1}
            className="w-12 h-12"
          />
          <img src={vk} alt={LocalText.footer.title1} className="w-12 h-12" />
        </div>
        <div className="text-center text-sm mb-8">
          {LocalText.footer.description}
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <img
            src={mir}
            alt={LocalText.footer.description}
            className="w-16 h-12"
          />
          <img
            src={mastercard}
            alt={LocalText.footer.description}
            className="w-16 h-12"
          />
          <img
            src={cber}
            alt={LocalText.footer.description}
            className="w-16 h-12"
          />
          <img
            src={visa}
            alt={LocalText.footer.description}
            className="w-16 h-12"
          />
          <img
            src={cbp}
            alt={LocalText.footer.description}
            className="w-16 h-12"
          />
          <img
            src={tinkoff}
            alt={LocalText.footer.description}
            className="w-16 h-12"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center bg-black text-white px-10 py-8">
        <div className="text-sm">{LocalText.footer.email}</div>
        <div className="flex flex-col items-center">
          <Logo logo={logo} />
          <span className="text-xs hidden md:block">
            {LocalText.footer.subLogo}
          </span>
        </div>
        <div className="text-sm">{LocalText.footer.phoneNumber}</div>
      </div>
    </>
  );
}

export default FooterW;
