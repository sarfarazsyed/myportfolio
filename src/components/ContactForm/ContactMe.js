import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { SelectField, TextAreaField, TextField } from "../shared/Inputs";

const FormContainer = styled.form`
  display: flex;
  flex-flow: column wrap;
  overflow-wrap: anywhere;
  /* border: 1px solid #120136; */
  margin: 10px 0px 0px 10px;
  flex-grow: 1;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0.8px 0.8px;
  box-sizing: border-box;
  justify-content: space-evenly;
  @media (max-width: 600px) {
    flex-flow: column wrap;
    align-content: center;
  }
`;

const Button = styled.input`
  background: rgba(120, 219, 120, 0.9);
  padding: 12px 12px;
  margin: 2px 2px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  color: #010017;
  @media (max-width: 600px) {
    width: 50%;
  }
  &:hover {
    color: #aaaaa9;
    background-color: #000017;
    border: 1px solid #aaaaa9;
  }
`;

const ResetButton = styled.input`
  background: rgba(219, 120, 120, 0.9);
  color: #010017;
  padding: 12px 12px;
  margin: 3px 3px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  border: none;
  @media (max-width: 600px) {
    width: 50%;
  }
  &:hover {
    background-color: #000017;
    border: 1px solid #aaaaa9;
  }
`;

export const ContactMe = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <FormContainer>
        <TextField
          label="name"
          register={register}
          rules={{
            required: true,
            pattern: /^[\w]+[\w'\-,. ]*[^_!¡?÷?¿\\+=@#$%ˆ&*(){}|~<>;:[\][/]]*$/,
            minLength: 3,
          }}
          placeholder="Your sweet name..."
          errors={errors}
          name="Name"
          type="text"
        />
        <TextField
          label="email"
          register={register}
          rules={{
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          }}
          placeholder="Your email id..."
          errors={errors}
          name="Email"
          type="email"
        />
        <TextField
          label="role"
          register={register}
          rules={{
            required: true,
            pattern: /^[\w]+[\w'\-,. ]*[^_!¡?÷?¿\\+=@#$%ˆ&*(){}|~<>;:[\][/]]*$/,
          }}
          placeholder="Current Role"
          errors={errors}
          name="Role"
          type="text"
        />
        <TextField
          label="organization"
          register={register}
          rules={{
            required: true,
            pattern: /^[\w]+[\w'\-,. ]*[^_!¡?÷?¿\\+=@#$%ˆ&*(){}|~<>;:[\][/]]*$/,
            minLength: 3,
          }}
          placeholder="Current Working/Studying Org"
          errors={errors}
          name="Organization"
          type="text"
        />
        <SelectField
          label="messageType"
          register={register}
          options={[
            "Personal",
            "Appraisal",
            "Hire Request",
            "Tutor",
            "Free Lance",
          ]}
          name="Message Type"
        />
        <TextAreaField
          label="message"
          register={register}
          rules={{ required: true }}
          placeholder="Enter message..."
          errors={errors}
          name="Message"
          type="message"
        />
        <ButtonContainer>
          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            value="Submit"
          />
          <ResetButton
            onClick={() => clearErrors()}
            type="reset"
            value="Reset"
          />
        </ButtonContainer>
      </FormContainer>
    </>
  );
};
