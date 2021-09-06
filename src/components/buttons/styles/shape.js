import styled from 'styled-components';

const rectangle = styled.button`
  padding: 0 rem;
  height: 4.8rem;
  border-radius: 0.8rem;
`;

const circular = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

const shape = {
  rectangle,
  circular
};

export default shape;