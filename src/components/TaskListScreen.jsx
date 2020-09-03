import React from 'react';
import TaskList from './TaskList';
import NewTaskInputField from './NewTaskInputField';
import '../styles/TaskListScreen.css';

export default function TaskListScreen() {
  return (
    <div className="taskListScreen">
      <NewTaskInputField />
      <TaskList />
    </div>
  );
}