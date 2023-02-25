import styled from 'styled-components';

export const ContactContainer = styled.div`
  li {
    font-size: 25px;
    padding: 5px;
    border-radius: 5px;
    :nth-child(2n + 1) {
      padding: 5px;
      background-color: #8387d186;
    }
    :nth-child(2n + 2) {
      background-color: #babcdc86;
    }
    :not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;
