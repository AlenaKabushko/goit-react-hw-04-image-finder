import styled from 'styled-components';

export const ContactsListStyled = styled.ul`
display: flex;
flex-direction: column;
gap: 5px;
margin: 15px 0 0 0;
padding: 0;
width: 500px;
list-style: none;
`

export const ContactsItemStyled = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
gap: 35px;
`

export const TextStyle = styled.p`
margin: 0;
    font-size: 20px;
    `

export const ButtonStyle = styled.button`
    font-size: 14px;
    padding: 5px;
    border: none;
    cursor: pointer;

    border: 1px solid grey;
    box-shadow: rgb(128 128 128 / 28%) 0px 0px 3px 5px;
    background-color: #b3c6e5;
`