import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: crimson;
  margin: 0%;
`;
export const Button = styled.button`
  background: rgb(189, 0, 52);
  border: none;
  border-radius: 10px;
  text-transform: uppercase;
  cursor: pointer;
  padding: 15px;
  margin: 5px;
  width: 120px;
  &:hover {
    background: rgb(150, 0, 52);
  }
`;

export const FormReg = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  margin: auto;
  border: 5px solid gray;
  border-radius: 10px;
  background-color: rgba(77, 22, 61, 0.936);
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 350px;
  height: 40px;
  padding: 4px;
  color: rgba(250, 25, 25);
  background: transparent;
  border: none;
  font-size: 18px;
  border-bottom: 1px solid green;
  margin-top: 5px;
  outline: none; /*quita el marco que aparece cuando se hace foco en el input*/
  /*sirve para que a la hora de seleccionar una opcion guardada no muestre color de fondo y el color de la letra sea parecida a la anterior  */
  transition: background-color 10000s ease-in-out 0s;
  box-shadow: 0 0 0px 1000px unset;
  -webkit-text-fill-color: yellowgreen; //color del input
`;

export const InputContainer = styled.div`
  height: 80px;
`;

export const Paragraph = styled.p`
  color: green;
  font-size: 12px;
  font-weight: bold;
`;
export const Titleh2 = styled.h2`
  margin: 0px;
  padding: 0px;
  font-size: 30px;
  text-align: center;
  color: rgb(0, 0, 85);
`;

export const DivForgot = styled.div`
  //display: flex;
  //flex-direction: column;
  //justify-content: space-around;
  //align-items: center;
`;

export const LeftLabel = styled.label`
  text-align: left;
  text-decoration: underline;
  color: blue;
  cursor: pointer;
`;

export const RightLabel = styled.label`
  text-align: right;
  text-decoration: underline;
  color: yellowgreen;
  cursor: pointer;
`;

export const PointerImage = styled.i`
  cursor: pointer;
`;
export const Mydiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 400px;
  flex-wrap: wrap;
  align-content: flex-start;
  @media (max-width: 500px) {
    display: block;
    height: auto;
    width: 100%;
  }
`;
//navBarIndext.tsx
export const DivVar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 25%;
  text-align: center;
  //background: rgba(9, 93, 89, 0.8);
  margin-top: 0px;
  padding: 0%;
  border-radius: 0px 0px 10px 0px;
  @media (max-width: 500px) {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const HButton = styled.button`
  background: #fdb731;
  border: 1px #fdb731 solid;
  //border-radius: 5px;
  margin-top: 5px;
  cursor: pointer;
  width: 100%;
  height: 80px;
  text-transform: uppercase;
  &:hover {
    background: #4d163d;
    border: 1px #4d163d solid;
  }
  &:active {
    background: #bd0034;
  }
`;

//Index.tsx

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 450px;
  width: 100%;
  @media (max-width: 500px) {
    display: block;
    
  }
`;

export const EmptyDivSeparator = styled.div`
  width: 190px;
  height: 100%;
  background: #fdb731;
  @media (max-width: 500px) {
    display: none;
  }
`;
