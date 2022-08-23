import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  DivForgot,
  FormReg,
  Input,
  InputContainer,
  Mydiv,
  Paragraph,
  RightLabel,
  Titleh2,
} from "../styles/styled.home.module";

import { useContext } from "react";
import { SessionContext } from "../context/sessionProvider";
import { Login } from "../utils/mutations";
import { useRouter } from "next/router";


const registerSchema = Yup.object().shape({
  email: Yup.string()
    .required("Este dato es obligatorio")
    .email("El email no es correcto"),
  password: Yup.string()
    .required("Este dato es obligatorio")
    .min(8, "Debe tener al menos 8 caracteres")
    .matches(
      /(^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*_<>,.| ]).*$)/,
      "Al menos 1 mayúscula, minúscula y caracter"
    ),
});

const LoginForm = ({ setCurrent }: any) => {
  const [visible, setVisible] = useState(false);
  const { sessionData, setSessionData }: any = useContext(SessionContext);
 const Router = useRouter();
  return (
    <>
    <br />
    <Titleh2>Iniciar Sesión</Titleh2>
    <Mydiv>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={registerSchema}
        validateOnChange
        validateOnBlur
        //validateOnSubmit
        onSubmit={async () => {
          const loginResponse = await Login(sessionData);
          const jwt = loginResponse;
          sessionData.jwt = jwt;
          setSessionData(sessionData);

          if (sessionData.jwt.length < 10) {
            //lol
            return;
          } else {
            sessionData.isLoggedIn = true;
            setSessionData(sessionData);
           // console.log(sessionData);
            Router.push("/library");
            return;
          }
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
                <InputContainer>
                  <Input
                    name="email"
                    type="email"
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
                <InputContainer>
                  <Input
                    name="password"
                    placeholder="Ingrese su contraseña"
                    onChange={handleChange("password")}
                    value={values.password}
                    type={visible ? "text" : "password"}
                    onBlur={handleBlur("password")}
                    />
                  <i id="showHide" onClick={() => setVisible(!visible)}>
                    {visible ? (
                      <i className="bi bi-eye-fill"></i>
                      ) : (
                        <i className="bi bi-eye-slash-fill"></i>
                        )}
                  </i>

                  {touched.password && errors.password && (
                    <Paragraph>{errors.password}</Paragraph>
                    )}
                </InputContainer>

                <DivForgot>
                  <Button
                    type="submit"
                    onClick={() =>
                      setSessionData({
                        email: values.email,
                        password: values.password,
                        jwt: "",
                        isLoggedIn: false,
                      })
                    }
                    >
                    Ingresar
                  </Button>
                </DivForgot>
                <div>
                  <RightLabel
                    onClick={() => {
                      setCurrent(2);
                    }}
                    >
                    Olvidó su contraseña?
                  </RightLabel>
                </div>
              </FormReg>
            </>
          );
        }}
        
      </Formik>
      <br />
      </Mydiv>
    </>
  );
};

export default LoginForm;
