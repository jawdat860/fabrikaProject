import Baner from "../Baner/Baner";
import contact from "../../assets/images/bg-image/contact.png";
import "./Kontakty.css";
import IconsBox from "../IconsBox/IconsBox";
import CommentsModal from "../CommentsModal/CommentsModal";

function Kontakty() {
  return (
    <div id="contact" className="genn-contact">
      <div
        className="genn-contact-landing "
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="genn-contactInfo">
          <div className="genn-contact-landing-location">
            <div className="genn-location-1">
              <i className="fa-solid fa-location-dot icon-location"></i>
              <div className="genn-location-des">
                г. Краснодар,
                <br />
                ул. Фрунзе 186/1, 1 этаж
              </div>
            </div>
            <div className="genn-location-1">
              <i className="fa-solid fa-location-dot icon-location"></i>
              <div className="genn-location-des">
                г. Подольск,
                <br /> Домодедовское шоссе 1Б
              </div>
            </div>
            <div className="genn-location-1">
              <i className="fa-solid fa-location-dot icon-location"></i>
              <div className="genn-location-des">
                г. Санкт-Петербург,
                <br />
                Колпинский район, 3 посёлок <br />
                Сапёрный, территория <br /> предприятия Балтика
              </div>
            </div>
          </div>
          <div className="genn-contact-landing-contactInfo">
            <div className="genn-contact-whatsApp genn-media">
              <i className="fa-brands fa-whatsapp"></i>
              <div className="number">+7 958 500 85 56</div>
            </div>
            <div className="genn-contact-phone genn-media">
              <i className="fa-solid fa-phone"></i>
              <div className="number">8 800 300 85 56</div>
            </div>
            <div className="genn-contact-email genn-media">
              <i className="fa-solid fa-envelope"></i>
              <div className="number">darinameb@mail.ru</div>
            </div>
          </div>
        </div>
      </div>
      <div className="genn-contact-videoDes">
        <div className="genn-contact-videoDes-title">
          Современное производство
        </div>
        <div className="relative genn-contact-col-6-6 ">
          <div className="max-h[1099px] max-w-[800px] relative">
            <Baner
              videoBg={" https://l.okdeal.ru/video/SliderVideo4.mp4"}
              videoBg2={" https://l.okdeal.ru/video/SliderVideo4.mp4"}
            />
          </div>
          {/* <TextComponentbottom/> */}
          <div className="Kontakty-0 flex-[1]">
            <div className="Kontakty-1">
              <div className="Kontakty-1-0">
                <h3 className="Kontakty-1-1">Современное производство</h3>
                <div className="Kontakty-1-2">Запишитесь на экскурсию</div>
                <div className="Kontakty-1-3">
                  Посетите фабрику с которой мы работаем - посмотрите как Darina
                  делает мебель и получите скидку 5%
                </div>
                <button className="Kontakty-1-4">Записаться</button>
              </div>
            </div>
            <div className="Kontakty-3 n2">
              <div className="Kontakty-3-1">Миссия Darina</div>
              <div className="Kontakty-3-2">
                Делаем жизнь <br /> комфортнее
              </div>
            </div>
            <div className="Kontakty-2">
              <div className="Kontakty-2-0">
                <h3 className="Kontakty-2-1">О нас</h3>
                <p>
                  Более двух десятилетий компания Darina изготавливает мебель,
                  которая становятся пространством для творчества в любом доме.
                  Мы создаем оригинальные проекты, точно соответствующие
                  индивидуальным требованиям и отличающиеся свободой сочетаний
                  цветов и форм. Воплощая свои индивидуальные мечты, наши
                  обученные специалисты по мебели будут рядом с вами с лучшими
                  советами.{" "}
                </p>
                <p>
                  Darina — это высокое качество изготовления, компетентное
                  планирование и инновации.
                </p>
              </div>
            </div>
            <div className="Kontakty-3 n3">
              <div className="Kontakty-3-1">Миссия Darina</div>
              <div className="Kontakty-3-2">
                Делаем жизнь <br /> комфортнее
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="genn-IconsBox" className="genn-IconsBox">
        <IconsBox />
      </div>
      <div id="genn-CommentsModal" className="genn-CommentsModal">
        <CommentsModal />
      </div>
    </div>
  );
}
export default Kontakty;
