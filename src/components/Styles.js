import styled from 'styled-components'; 
  
export const Heading = styled.h1` 
   text-align: center; 
   color: green; 
`; 
  
export const Content = styled.div` 
   overflowY: scroll; 
   height: 2500px; 
`; 
  
export const Button = styled.div` 
   position: fixed;  
   width: 100%; 
   left: 96%; 
   bottom: 40px; 
   height: 20px; 
   font-size: 30px; 
   z-index: 1; 
   cursor: pointer; 
   color: #f64c08; 

   @media (max-width: 430px) {
      position: fixed;  
   width: 100%; 
   left: 90%; 
   bottom: 40px; 
   height: 20px; 
   font-size: 30px; 
   z-index: 1; 
   cursor: pointer; 
   color:  #f64c08; 
    }
`