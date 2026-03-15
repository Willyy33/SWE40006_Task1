import React from "react";

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <input className="form-control fs-1" style={styles.display} value={value} readOnly/>
  );
};

export default Display;

const styles = {

  display: {
    height: "80px",
    textAlign: "right",
    marginBottom: "10px"
  } as React.CSSProperties

};