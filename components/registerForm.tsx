import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { RegisterData } from "../models/registerData";
import { Register } from "../utils/mutations";
import {
  Mydiv,
  Button,
  FormReg,
  Input,
  InputContainer,
  Paragraph,
  PointerImage,
  Titleh2,
} from "../styles/styled.home.module";


const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required("Este dato es obligatorio")
    .matches(/^[a-zA-Z\s]*$/, "Este campo solo acepta letras"),
  email: Yup.string()
    .required("Este dato es obligatorio")
    .email("El email no es correcto"),
  password: Yup.string()
    .required("Este dato es obligatorio")
    .min(8, "Debe tener al menos 8 caracteres")
    .matches(
      /(^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?",{}|¿¡=+/;:_~<>]).*$)/,
      "Al menos 1 mayúscula, minúscula y caracter"
    ),
  repeatPassword: Yup.string()
    .required("Este dato es obligatorio")
    .oneOf([Yup.ref("password")], "Las contraseñas no son iguales"),
});

const RegisterComponent = ({ setCurrent }: any) => {
  const [registerData, setRegisterdata] = useState<RegisterData>({
    fullName: "",
    email: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);

  return (
    <>
    <br />
      <Titleh2>Datos para el Registro</Titleh2>
    <Mydiv>
      <Formik
        initialValues={{
          name: "",
          password: "",
          email: "",
          repeatPassword: "",
        }}
        validationSchema={registerSchema}
        validateOnChange
        validateOnBlur
        //validateOnSubmit
        onSubmit={(values) => {
          setCurrent(1);
          setRegisterdata({
            fullName: values.name,
            email: values.email,
            password: values.password,
          });
          console.log(registerData);
          Register(registerData);
        }}

        /* Tambien se puede validar al final, al darle al submit */
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
                <div>
                <InputContainer>
                  <Input
                    name="name"
                    placeholder="Ingrese el nombre completo"
                    onChange={handleChange("name")}
                    value={values.name}
                    onBlur={handleBlur("name")}
                    />
                  <i className="bi bi-person-plus-fill"></i>
                  {touched.name && errors.name && (
                    <Paragraph>{errors.name}</Paragraph>
                    )}
                  {/* Si lo toco al campo y hay algun error, lo manda */}
                </InputContainer>

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
                    </div>
                <div>

                <InputContainer>
                  <Input
                    name="password"
                    placeholder="Creá tu contraseña"
                    onChange={handleChange("password")}
                    value={values.password}
                    type={visible ? "text" : "password"}
                    onBlur={handleBlur("password")}
                    />
                  <PointerImage onClick={() => setVisible(!visible)}>
                    {visible ? (
                      <i className="bi bi-unlock-fill"></i>
                      ) : (
                        <i className="bi bi-lock-fill"></i>
                        )}
                  </PointerImage>

                  {touched.password && errors.password && (
                    <Paragraph>{errors.password}</Paragraph>
                    )}
                </InputContainer>
                <InputContainer>
                  <Input
                    name="repeatPassword"
                    placeholder="Repetí la contraseña"
                    onChange={handleChange("repeatPassword")}
                    value={values.repeatPassword}
                    type={visible ? "text" : "password"}
                    onBlur={handleBlur("repeatPassword")}
                    />
                  <PointerImage onClick={() => setVisible(!visible)}>
                    {visible ? (
                      <i className="bi bi-unlock-fill"></i>
                      ) : (
                        <i className="bi bi-lock-fill"></i>
                        )}
                  </PointerImage>
                  {touched.repeatPassword && errors.repeatPassword && (
                    <Paragraph>{errors.repeatPassword}</Paragraph>
                    )}
                </InputContainer>
               
                  </div>
                <div>
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
                      setRegisterdata({
                        fullName: values.name,
                        email: values.email,
                        password: values.password,
                      });
                    }}
                  >
                    Registrarse
                  </Button>
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

export default RegisterComponent;
