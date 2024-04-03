"use client";
import React from "react";
import {
  IconWrapper,
  InputWrap,
  StyledInput,
  StyledTexfield,
  StyledTextarea,
  StyledTextareaWrap,
} from "./Texfield.styles";

const TextField = ({
  hasIcon,
  placeholder,
  type,
  onChange,
  value,
  label,
  field_Name,
  height,
  variant = "input",
  ...props
}) => {
  return (
    <InputWrap>
      <label htmlFor={field_Name}>{label}</label>
      <StyledTexfield $hasIcon={hasIcon} $variant={variant}>
        <IconWrapper>{hasIcon}</IconWrapper>
        {variant == "input" && (
          <StyledInput
            {...props}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            id={field_Name}
          />
        )}

        {variant == "textarea" && (
          <textarea
            {...props}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            id={field_Name}
          ></textarea>
        )}
      </StyledTexfield>
    </InputWrap>
  );
};

export default TextField;
