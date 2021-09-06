import {css} from 'styled-components';

const primary = css`
    color:white;
    background-color: #1ea7fd;
`;

const warning = css`
    color:white;
    background-color:orange;
`;
const success = css`
    color:white;
    background-color: green;
`;

const error = css`
    color:white;
    background-color: red;
`;

const color= {
    primary,
    warning,
    success,
    error
};

export default color;