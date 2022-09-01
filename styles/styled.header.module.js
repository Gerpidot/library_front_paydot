import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: black;
  margin: 0px;
`;

export const DivHeaderContainer = styled.div`
  display: flex;
  font-size:150px ;
  color:lightblue;
  font-family:'Courier New', Courier, monospace;
  align-items:center;

  height: 120px;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  margin: 0%;
  padding: 0%;
  //border: 1px black solid;
  //border-radius: 20px 20px 20px 20px;
  @media (max-width: 500px) {
      //flex-direction: column;
    display:block;
    }
`;


