import styled from 'styled-components';


export const primary = styled.button`
    color:white;
    background-color:blue;
`;

export const warning = styled.button`
    color:white;
    background-color:orange;
`;
export const success = styled.button`
    color:white;
    background-color: green;
`;

export const error = styled.button`
    color:white;
    background-color: red;
`;

export const color={
    primary, 
    warning,
    error,
    success
}

export const setColor=()=>{
    switch (color) {
        case 'primary':
            return <primary/>;         
    
        case 'warning':
            return <warning />;         
    
        case 'success':
            return <success />;         
  
        case 'error':
            return <error />;         
            
        default:
             return null
    }
};



export default setColor;