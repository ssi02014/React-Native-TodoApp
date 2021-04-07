import React from 'react';
import styled from 'styled-components/native';
import { theme } from '../theme';
import { useWindowDimensions } from 'react-native';

const StyledInput = styled.TextInput.attrs(({ theme }) =>({
    placeholderTextColor: theme.main,
}))`
    width: ${({ width }) => width - 40}px;
    height: 60px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.itemBackground};
    font-size: 25px;
    color: ${({ theme }) => theme.text};
`;

const Input = ({ placeholder }) => {
    const width = useWindowDimensions().width;

    return (
    <StyledInput 
        width={width} 
        placeholder={placeholder} 
        maxLength={50}
        autoCapitalize='none'
        autoCorrect={false}
        returnKeyType='done'
        keyboardApperance='dark'
    />
    )
}

export default Input;