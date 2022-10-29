import styled from 'styled-components';

export const FormStyle = styled.form`
display: flex;
flex-direction: column;
align-items: start;
padding: 10px;
gap: 10px;
width: 500px;

border: 1px solid black;
box-shadow: rgb(128 128 128 / 28%) 0px 0px 3px 10px;

`;

export const LabelStyle = styled.label`
display: flex;
flex-direction: column;
font-size: 14px;

`


export const InputStyle = styled.input`
font-size: 14px;
    margin-top: 5px;
    padding: 5px;
`

export const ButtonStyle = styled.button`
    font-size: 12px;
    padding: 5px;
    border: none;
    font-weight: 700;
    cursor: pointer;

    border: 1px solid grey;
    box-shadow: rgb(128 128 128 / 28%) 0px 0px 3px 5px;
    background-color: #b3c6e5;
`