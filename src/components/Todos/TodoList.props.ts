import { TypeTodoApp } from 'components/App';
export interface TodoListProps {
  todos: TypeTodoApp[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}
