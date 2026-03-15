import React from "react";
import Button from "./Button";

interface ButtonGridProps {
  buttons: string[];
  onClick: (value: string) => void;
  getButtonClass: (value: string) => string;
}

const ButtonGrid: React.FC<ButtonGridProps> = ({ buttons, onClick, getButtonClass }) => {

  return (
    <div style={styles.grid}>
      <div className="container-fluid">
        <div className="row g-2">
          {buttons.map((btn) => (

            <div className={btn === "0" ? "col-9" : "col-3"} style={styles.cell} key={btn}>
              <Button value={btn} onClick={onClick} className={getButtonClass(btn)}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonGrid;

const styles = {

  grid: {
    flexGrow: 1
  } as React.CSSProperties,

  cell: {
    height: "50px"
  } as React.CSSProperties

};