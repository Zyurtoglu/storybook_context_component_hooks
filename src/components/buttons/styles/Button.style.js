import shape from './shape';
import color from './color';
import styled from 'styled-components';


export const StyledButton= styled.button.attrs(props=> ({color:props.color, shape:props.shape }))`
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
  
  color: ${props => props.color};
  shape: ${props => props.shape};


  `;


export default StyledButton;