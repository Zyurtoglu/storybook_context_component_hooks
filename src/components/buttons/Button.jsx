import React from 'react';
import StyledButton from './styles/Button.style';



export const Button=({
  
  color="primary",
  shape="rectangle"

})=>{
      
          return(
            <div>
              <StyledButton 
                  color={color}
                  shape={shape}
              
              >
                Save
              </StyledButton>
            </div>
          );
      
      
}

  
export default  Button;