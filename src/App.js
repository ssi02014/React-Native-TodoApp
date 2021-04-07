import React, { useState } from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from './components/Input';
import Task from './components/Task';
import {theme} from './theme';
import AppLoading from 'expo-app-loading';

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
    const [tasks, setTasks] = useState({});
    const [isReady, setIsReady] = useState(false);

    const _saveTasks = async tasks => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
            setTasks(tasks);
        } catch (e) {
            console.error(e);
        }
    }

    const _loadTasks = async () => {
        const loadedTasks = await AsyncStorage.getItem('tasks');
        setTasks(JSON.parse(loadedTasks || {}));
    };

    const _onBlur = () => {
        setNewTask('');
    }

    const _addTask = () => {
        const ID = Date.now().toString();
        const newTaskObject = {
            [ID]: { id: ID, text: newTask, completed: false},
        }
        alert(`Add: ${newTask}`);
        setNewTask('');
        _saveTasks({...tasks, ...newTaskObject});
    };

    const _deleteTask = id => {
        // Object.assign메소드는 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용
        const currentTasks = Object.assign({}, tasks);
        delete currentTasks[id];
        _saveTasks(currentTasks);
    };

    const _toggleTask = id => {
        const currentTasks = Object.assign({}, tasks); 
        currentTasks[id]['completed'] = !currentTasks[id]['completed'];
        _saveTasks(currentTasks);
    };

    const _updateTask = item => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[item.id] = item;
        _saveTasks(currentTasks);
    }

    const _handleTextChange = text => {
        setNewTask(text);
    };

    return isReady ? (
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
                    onBlur={_onBlur}
                />
                <List width={width}>
                    {Object.values(tasks).reverse().map(item => (
                        <Task 
                            item={item} 
                            key={item.id} 
                            deleteTask={_deleteTask}
                            toggleTask={_toggleTask}
                            updateTask={_updateTask}
                        />
                    ))}
                </List>
            </Container>
        </ThemeProvider>
    ) : (
        <AppLoading 
            startAsync={_loadTasks}
            onFinish={() => setIsReady(true)}
            onError={console.error}
        />
    )
}