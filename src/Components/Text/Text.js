import styled from 'styled-components';

const PText = styled.p`
  font-family: 'Gaegu';
  margin: 0;
`;

const Text = styled(PText)`
  font-size: ${({ fontSize = '20px' }) => fontSize};
  font-size: ${({ fontWeight = '600' }) => fontWeight};
`;

export default Text;
