import React from 'react';
import { StyledButton } from './styles/Button.style';




export const Button=({...props})=>
 {
 
  return (
     
      <div>
        <StyledButton  {...props}  > Button
        </StyledButton>
      </div>
   );

};


export default  Button;