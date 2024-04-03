import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ children, dark, transparent, ...rest }) => {
  return (
    <StyledButton $dark={dark} {...rest}>
      {children}
    </StyledButton>
  );
}; 

export default Button; 
