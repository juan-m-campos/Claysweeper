import TopSection from "./TopSection";
import Cells from "./Cells";
import "../styles/ClayBoard.css";

const ClayBoard = () => {
  return (
    <div className="board">
      <TopSection />
      <div className="celdas">
        <Cells />
      </div>
    </div>
  );
};

export default ClayBoard;
