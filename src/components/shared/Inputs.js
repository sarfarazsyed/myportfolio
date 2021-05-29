import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0.5px 0.5px;
  margin: 0.8px 0.8px;
  width: 100%;
  justify-content: space-evenly;
  box-sizing: border-box;
  @media (max-width: 600px) {
    flex-flow: column wrap;
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0.5px 0.5px;
  margin: 0.8px 0.8px;
  width: 100%;
  justify-content: flex-end;
  box-sizing: border-box;
`;

const Label = styled.label`
  width: 15%;
  padding: 1px 1px;
  font-size: smaller;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const ErrorLabel = styled.label`
  width: 75%;
  font-size: smaller;
  padding: 1px 1px;
  color: rgba(219, 120, 120, 0.8);
  align-items: flex-end;
  justify-content: flex-end;
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: flex-start;
    font-size: small;
  }
`;

const Input = styled.input`
  background-color: #000017;
  width: 70%;
  padding: 1px 1px;
  color: #aaaaa9;
  outline: none;
  border: none;
  border-bottom: 1px solid #aaaaa9;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Select = styled.select`
  background-color: #000017;
  width: 70%;
  padding: 1px 1px;
  color: #aaaaa9;
  outline: none;
  border: none;
  border-bottom: 1px solid #aaaaa9;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const TextArea = styled.textarea`
  background-color: #000017;
  width: 70%;
  padding: 1px 1px;
  color: #aaaaa9;
  outline: none;
  border: none;
  border-bottom: 1px solid #aaaaa9;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ErrorMessage = ({ label, name, errors, rules }) => {
  return (
    <>
      {errors ? (
        <>
          <ErrorContainer>
            <ErrorLabel>
              {errors[label] && errors[label].type === "required" && (
                <>{name} is required</>
              )}
              {errors[label] && errors[label].type === "maxLength" && (
                <>
                  {name} should be have maximum of {rules.maxLength} characters
                </>
              )}
              {errors[label] && errors[label].type === "minLength" && (
                <>
                  {name} should be have minimum of {rules.minLength} characters
                </>
              )}
              {errors[label] && errors[label].type === "min" && (
                <>
                  {name} should be contain atleast {rules.min} characters
                </>
              )}
              {errors[label] && errors[label].type === "max" && (
                <>
                  {name} should be contain atmost {rules.max} characters
                </>
              )}
              {errors[label] && errors[label].type === "pattern" && (
                <>{name} is invalid</>
              )}
            </ErrorLabel>
          </ErrorContainer>
        </>
      ) : (
        <> </>
      )}
    </>
  );
};

export const TextField = ({
  label,
  register,
  rules,
  placeholder,
  errors,
  name,
  type,
}) => {
  return (
    <>
      <InputContainer>
        <Label htmlFor={label}>{name}</Label>
        <Input
          name={label}
          placeholder={placeholder}
          type={type}
          {...register(label, { ...rules })}
        />
      </InputContainer>
      <ErrorMessage label={label} name={name} errors={errors} rules={rules} />
    </>
  );
};

export const TextAreaField = ({
  label,
  register,
  rules,
  placeholder,
  errors,
  name,
}) => {
  return (
    <>
      <InputContainer>
        <Label htmlFor={label}>{name}</Label>
        <TextArea
          name={label}
          placeholder={placeholder}
          {...register(label, { ...rules })}
        />
      </InputContainer>
      <ErrorMessage label={label} name={name} errors={errors} rules={rules} />
    </>
  );
};
export const SelectField = ({ label, register, options, name }) => {
  return (
    <>
      <InputContainer>
        <Label htmlFor={label}>{name}</Label>
        <Select name={label} {...register(label)}>
          {options.map((option, key) => (
            <option key={key} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </InputContainer>
    </>
  );
};
