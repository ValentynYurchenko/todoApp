import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './Todos/TodoForm';
import TodoList from './Todos/TodoList';

export interface TypeTodoApp {
  text: string;
  isCompleted: boolean;
  id: string;
}

function App(): JSX.Element {
  const [todos, setTodos] = useState<TypeTodoApp[] | []>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4()
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="mx-auto my-0 max-w-xl text-center">
      <h1 className="mb-10 mt-6 text-3xl font-bold">Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />

      {completedTodosCount > 0 && (
        <h2>
          {`You have completed ${completedTodosCount} ${
            completedTodosCount > 1 ? 'todos' : 'todo'
          }`}
        </h2>
      )}
    </div>
  );
}

export default App;
