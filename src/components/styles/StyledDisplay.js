import styled from 'styled-components';

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
    padding: 20px;
    border: 4px solid #F8F8FF;
    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    color: ${props => (props.gameOver ? 'red' : '#F8F8FF')};
    background: #000;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
`