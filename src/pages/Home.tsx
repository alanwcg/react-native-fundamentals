import React, { useState } from 'react';
import { View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkTheme, setDarkTheme] = useState(false);

  function handleToggleTheme() {
    setDarkTheme(!darkTheme);
  }

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle === '') return;

    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks(oldState => [...oldState, data]);
  }

  function handleMarkTaskAsDone(id: number) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        const updatedTask = task;

        updatedTask.done = !task.done;

        return updatedTask;
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter(task => task.id !== id);

    setTasks(newTasks);
  }

  return (
    <View style={
      darkTheme
      ? { flex: 1, backgroundColor: '#10101E' }
      : { flex: 1 }}
    >
      <Header darkTheme={darkTheme} />

      <TodoInput darkTheme={darkTheme} addTask={handleAddTask} />

      <MyTasksList
        darkTheme={darkTheme}
        toggleTheme={handleToggleTheme}
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}