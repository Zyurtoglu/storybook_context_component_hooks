
import React from 'react';
import StyledButton from './styles/Button.style';




export const Button=({
  
  shape="rectangle",
  ...rest
})=>{
     
        return(
          <div>
            <StyledButton 
              
               shape='rectangle'
               { ...rest}
            >
              Save
            </StyledButton>
          </div>
        );
     
    
}

  
export default  Button;