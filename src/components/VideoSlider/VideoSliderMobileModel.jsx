import { Modal, VisuallyHidden } from "@telegram-apps/telegram-ui";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import "./VideoSliderMobileModel.css"
function VideoSliderMobileModel({ isOpen, onClose ,modalImage }) {
  return (
    <Modal
      header={<ModalHeader>Service Details</ModalHeader>}
      open={isOpen}
      onOpenChange={(open) => onClose(open)}
      dismissible={true}
      style={{
        backgroundColor: "transparent",
        bottom: "0",
        display: "flex",
        alignContent: "space-between",
        minHeight:"100%",
        justifyContent:"space-between"
        
      }}
    >
      <DialogTitle>
        <VisuallyHidden>{""}</VisuallyHidden>
      </DialogTitle>
      <div className="genn-VideoSliderMobileModel bg-[#fff]">
        <div className="genn-VideoSliderMobileModel-img">
          <img src={modalImage} />
        </div>
        <div className="genn-VideoSliderMobileModel-info">
        <h2 className="genn-VideoSliderMobileModel-head">Заказ на дому</h2>
        <p className="genn-VideoSliderMobileModel-p">
          Для вашего удобства мы предлагаем выезд дизайнера-замерщика в
          кратчайшие сроки. Дата и стоимость выезда зависит от адреса вашего
          местонахождения.
          <br />
          <br />
          Наш профессиональный дизайнер выедет к вам на дом, чтобы воплотить в
          жизнь все ваши идеи и желания.
          <br />С тщательным вниманием к деталям, мы учтем кривизну ваших стен,
          предложим лучшие решения для оптимального использования пространства,
          подберем для вас лучшие материалы, сочетающие в себе качество и стиль.
          <br />
          <br />
          Чтобы замер прошёл быстро и без проблем, заранее подготовьте место,
          куда планируется установка мебели:
          <br />- уберите посторонние предметы и обеспечьте полный доступ к
          месту;
          <br />- материал пола, стен, потолка, расположение обналичек, розеток,
          выступов и других ориентиров должны быть сохранены после замера.
        </p>
        </div>
        <div className="genn-button-container">
          <button className="genn-button-gradient">
            Заказать выезд замерщика
          </button>
        </div>
      </div>
    </Modal>
  );
}
export default VideoSliderMobileModel;
