import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  DivForgot,
  FormReg,
  Input,
  InputContainer,
  LeftLabel,
  Paragraph,
  Titleh2,
} from "../styles/styled.home.module";
import { useContext } from "react";
import { SessionContext } from "../context/sessionProvider";
import { forgotPassword } from "../utils/mutations";
import { useRouter } from "next/router";
import Link from "next/link";

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .required("Este dato es obligatorio")
    .email("El email no es correcto"),
});

const ForgotForm = ({setCurrent}:any) => {
  const { sessionData, setSessionData } :any= useContext(SessionContext);
  const Router = useRouter();

  return (
    <div>
      <br />
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={registerSchema}
        validateOnChange
        validateOnBlur
        //validateOnSubmit
        onSubmit={async () => {
          console.log(sessionData.email);
          await forgotPassword(sessionData);
        }}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
        }) => {
          return (
            <>
              <FormReg action="POST" onSubmit={handleSubmit}>
                <Titleh2>Recuperar Contraseña</Titleh2>

                <InputContainer>
                  <Input
                    name="email"
                    placeholder="Ingrese su email"
                    onChange={handleChange("email")}
                    value={values.email}
                    onBlur={handleBlur("email")}
                  />
                  <i className="bi bi-person-circle"></i>
                  {touched.email && errors.email && (
                    <Paragraph>{errors.email}</Paragraph>
                  )}
                </InputContainer>
                <DivForgot>
                <Button
                    onClick={() => {
                      setCurrent(1);
                    }}
                  >
                    Volver
                  </Button>
                  <Button
                    type="submit"
                    onClick={() => {
                      setSessionData({
                        email: values.email,
                        password: "",
                        jwt: "",
                        isLoggedIn: false,
                      }),
                        console.log(sessionData.email);
                    }}
                  >
                    Ingresar
                  </Button>
                </DivForgot>
                
                  
                
              </FormReg>
            </>
          );
        }}
      </Formik>
      <br />
    </div>
  );
};

export default ForgotForm;
