import "./ModelWindow.css";

function ModelWindow({ setCloseModelHandler ,menu8}) {
  return (
    <div
      id="ModelWindow"
      className="gemm-ModelWindow overlay"
      onClick={setCloseModelHandler}
    >
      <div className="conteniner" onClick={(e) => e.stopPropagation()}>
   
        <button className="close"onClick={setCloseModelHandler}>
              &times;
            </button>
        <div className="content">
        <h3 className="ModelWindow-1">Рабочие зоны доступны <br/> для заказа</h3>
        <div className="ModelWindow-2">Страница в процессе разработки, <br/>следите за обновлениями сайта.</div>
        <div className="ModelWindow-3"><img src={menu8} alt="Рабочие зоны"/></div>
        <div className="ModelWindow-4">
        <button className="ModelWindow-5">Делайте быстрее</button>
        <button className="ModelWindow-6">Заказать звонок</button>
        </div>

        </div>
      </div>
    </div>
  );
}
export default ModelWindow;
