import React, {FC} from 'react';
import './Button.scss';

interface ButtonProps {
  children: string;
  onClick: () => void;
}
const Button: FC<ButtonProps> = ({children, onClick}) => {
  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
