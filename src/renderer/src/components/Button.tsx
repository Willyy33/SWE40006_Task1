import React from "react";

interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ value, onClick, className }) => {

  return (
    <button className={className} style={styles.button} onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default Button;

const styles = {

  button: {
    height: "100%",
    fontSize: "1.2rem",
    borderRadius: "8px"
  } as React.CSSProperties

};