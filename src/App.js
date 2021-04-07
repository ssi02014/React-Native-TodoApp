import React, { useState } from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import IconButton from './components/IconButton';
import Input from './components/Input';
import Task from './components/Task';
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

//ScrollView를 이용하면, 스크롤이 가능해진다.
const List = styled.ScrollView`
    flex: 1;
    width: ${({ width }) => width - 40}px;
`;


export default function App() {
    const width = useWindowDimensions().width;

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
                <List width={width}>
                    <Task text="Minjae" />
                    <Task text="React Native" />
                    <Task text="React Native TodoApp" />
                    <Task text="Edit Todo Item" />
                    <Task text="Edit Todo Item" />
                    <Task text="Edit Todo Item" />
                    <Task text="Edit Todo Item" />
                    <Task text="Edit Todo Item" />
                    <Task text="Edit Todo Item" />
                    <Task text="Edit Todo Item" />
                    <Task text="Edit Todo Item" />
                </List>
            </Container>
        </ThemeProvider>
    )
}