import styled from 'styled-components';

export const Container = styled.div<{borderBottom?: boolean}>`
  display: flex;
  padding: 50px;
  height: 52px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${props => props.borderBottom && "1px solid rgb(210, 210, 210)"} 
`;

export const EnterButton = styled.button`
    padding: 8px 10px;
    border-radius: 5px;
    background-color: rgb(220, 5, 17);
    
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
`

export const LogoContainer = styled.div`
  width: 133px;
  fill: #e50914;
`