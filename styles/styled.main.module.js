import styled from "styled-components";

export const DivMainContainer = styled.div`
  min-height: 300px;
  margin: 0;
  display: flex;
  flex-direction: column;
`;
export const DivMainMenu = styled.div`
  width: 100%;
  background-color: #fdb731;
  /*display: flex;
  flex-direction: column;*/
`;
export const SearchBarInput = styled.input`
  flex-grow: 2;
  margin-left: 10px;
  padding-right: 3px;
  border: none;
  line-height: 45px;
  background: #fff no-repeat right 0px top;
  &:active,
  :focus {
    outline: none;
  }
  font-size: 16px;
`;
export const MyForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 51px;
  font-size: 18px;
  border-radius: 10px 15px 15px 10px;
  line-height: 45px;
  background: #fff no-repeat right 0px top;
  border: 1px black solid;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom:20px;
`;

export const BtnSearch = styled.button`
  padding-left: -65px;
  border: none;
  //background-color: blue;
  color: blue;
  border: 1px darkblue solid;
  -webkit-appearance: none;
  border-radius: 0px 15px 15px 0px;
  width: 50px;
  cursor: pointer;
  &:hover {
    background-color: blue;
    color: white;
  }
  margin: 1px;
`;

export const Button = styled.button`
  background: #fdb731;
  border: none;
  margin: 0px;
  cursor: pointer;
  width: 190px;
  height: 45px;
  text-transform: uppercase;
  &:hover {
    background: #4d163d;
   
  }
  &:active {
    background: #bd0034;
  }
`;
