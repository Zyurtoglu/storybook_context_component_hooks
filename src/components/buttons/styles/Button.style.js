import shape from './shape';
import color from './color';
import styled from 'styled-components';


export const ButtonProps=(args)=> {
 
  shape={shape};
  color={color};

};


export const StyledButton= styled.button`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  overflow: hidden;
  appearance: none;
  outline: none;
  white-space: nowrap;
  width: 'auto';
  transition: all 0.3s ease;
  font-size: 1.4rem;
  font-weight: 600;
  font-style: normal;
  line-height: 1.8rem;
  letter-spacing: 0.2px;
  
  shape: ButtonProps.shape;
  color: ButtonProps.color;
  `;


export default StyledButton;