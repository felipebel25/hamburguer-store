//eslint-ignore
import  styled  from "styled-components";
import { css } from 'styled-components';

export const Button = styled.button`
  width: 30%;
  height: 4%;
  color: white;
  background-color: #491c09;
  font-size: 1em;
  margin: 1em;
  border-radius: 3px;
  border: none;
  display: block;
  @media (max-width: 860px) {
    height:40%;
   
  }
 
`

export const Main = styled.main`
  display: flex;
  height: 100vh;
  width: 100%;
  
  @media (max-width: 860px) {
    overflow: scroll;
    flex-direction: column;
    width: 100%;
    padding-top: 10.5rem;
    height: 90vh;
    overflow: scroll;
    
  }

`

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 2px solid #fbe3b3;
  border-top: none;
  text-align: center;
  ${props => props.hidden === true  && css `
    width: 150%;
 `}
  
  p{
    display:none;
    margin: 4rem;
    font-size:1.7rem;
  }
  &:hover{
    p{
      display: block;
    }
    h1{
      border-bottom: 3px solid #491c09;
  }
  }
  @media (max-width: 860px) {
    height:100%;
    ${props => props.hidden === true  && css `
    width: 100%;
    height: auto;
    padding: 5rem 0px;
    button{
      display: none;
    }
 `}
  }

`

export const Imagen = styled.img`
    width: 100%;
    display: none;
   ${props => props.hidden === true  && css `
      display: block;
      width: 100%;
      padding: 2rem;

 `}
 @media (max-width: 860px) {
    height:100%;
    ${props => props.hidden === true  && css `
    display: block;

    width: 90%;
    height: auto;
    padding: 0;
    
 `}
  }

`
