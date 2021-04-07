import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import IconButton from './components/IconButton';
import Input from './components/Input';
import { images } from './Images';
import {theme} from './theme';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    justify-content: flex-start;
`;

const Title = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: ${({ theme }) => theme.main};
    align-self: flex-start;
    margin: 0px 20px;
`;


export default function App() {
    const [newTask, setNewTask] = useState('');

    const _addTask = () => {
        alert(`Add: ${newTask}`);
        setNewTask('');
    };

    const _handleTextChange = text => {
        setNewTask(text);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={theme.background}
                />

                <Title>TODO List</Title>
                
                <Input 
                    placeholder="+ Add a Task"
                    value={newTask}
                    onChangeText={_handleTextChange}
                    onSubmitEditing={_addTask}
                />

                <IconButton type={images.uncompleted} />
                <IconButton type={images.completed} />
                <IconButton type={images.delete} />
                <IconButton type={images.update} />
            </Container>
        </ThemeProvider>
    )
}