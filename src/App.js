import React, { useState } from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import Input from './components/Input';
import Task from './components/Task';
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
    const [tasks, setTasks] = useState({
        '1' : {
            id: 1,
            text: 'Minjae',
            completed: true,
        },
        '2' : {
            id: 2,
            text: 'Wooahan',
            completed: false,
        },
        '3' : {
            id: 3,
            text: 'React-Native',
            completed: false,
        },
        '4' : {
            id: 4,
            text: 'TodoApp',
            completed: false,
        },
        '5' : {
            id: 5,
            text: 'Used Market',
            completed: false,
        },
    })

    const _addTask = () => {
        const ID = Date.now().toString();
        const newTaskObject = {
            [ID]: { id: ID, text: newTask, completed: false},
        }
        alert(`Add: ${newTask}`);
        setNewTask('');
        setTasks({...tasks, ...newTaskObject});
    };

    const _deleteTask = id => {
        // Object.assign메소드는 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용
        const currentTasks = Object.assign({}, tasks);
        delete currentTasks[id];
        setTasks(currentTasks);
    };

    const _toggleTask = id => {
        const currentTasks = Object.assign({}, tasks); 
        currentTasks[id]['completed'] = !currentTasks[id]['completed'];
        setTasks(currentTasks);
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
                    {Object.values(tasks).reverse().map(item => (
                        <Task 
                            item={item} 
                            key={item.id} 
                            deleteTask={_deleteTask}
                            toggleTask={_toggleTask}
                        />
                    ))}
                </List>
            </Container>
        </ThemeProvider>
    )
}