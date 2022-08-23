import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: black;
  margin: 0px;
`;

export const DivHeaderContainer = styled.div`
  display: flex;
  
  height: 120px;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  margin: 0%;
  padding: 0%;
  //border: 1px black solid;
  //border-radius: 20px 20px 20px 20px;
`;

export const DivVar= styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  //background: rgba(9, 93, 89, 0.8);
  margin-top: 15px;
  padding: 0%;
  border-radius: 0px 0px 10px 0px;
  `

export const DivLogo = styled.div`
  
 
height:100%;
  width:200;
 
`;

export const HButton = styled.button`
  background: #FDB731;
  border: 1px #FDB731 solid;
  //border-radius: 5px;
  margin:1px;
  cursor: pointer;
  width: 120px;
  text-transform:uppercase;
  &:hover {
    background: #4D163D;
    border: 1px #4D163D solid;
  }
  &:active {
    background: 	 #BD0034;
;
  }
`;
//Controla el tamañ abusivo del titulo animado
export const MyDivTest=styled.div`
width:auto;
`

