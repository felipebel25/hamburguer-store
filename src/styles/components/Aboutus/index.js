//eslint-ignore
import  styled  from "styled-components";
import { css } from 'styled-components';

export const Button = styled.button`
  width: 30%;
  height: 3%;
  color: white;
  background-color: #491c09;
  font-size: 1em;
  margin: 1em;
  border-radius: 3px;
  border: none;
  display: block;
 
  @media (max-width: 860px) {
    height:10%;
   
  }
 
`

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  
  height: 100vh;
  width: 100%;
  
  @media (max-width: 860px) {
    overflow: scroll;
    flex-direction: column;
    width: 100%;
    padding-top: 10.5rem;
    height: 200vh;
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
      font-size: 2.7rem;
    }
    img{
      display: block;
      width: 90%;
      height: auto;
      padding: 0;
    }
  }
  ${props => props.hidden === true  && css `
   
    button{
      display: none;
    }
    `
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
    img{
      display: block;
      width: 90%;
      height: auto;
      padding: 0;
    }
 `}
  }

`

export const Imagen = styled.img`
    width: 100%;
    display: none;
  
 @media (max-width: 860px) {
    height:100%;
  
      &:hover{

      display: block;

      width: 90%;
      height: auto;
      padding: 0;
      }
  }

`
