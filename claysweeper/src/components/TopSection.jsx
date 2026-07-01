import "../styles/ClayBoard.css";

const TopSection = () => {
  return (
    <div className="top-section">
      <p>Tiempo: 00:00</p>
      <div className="btn-container">
        <button type="button" className="btn-reinicio">
          😀
        </button>
      </div>
      <p>Minas: 20</p>
    </div>
  );
};

export default TopSection;
