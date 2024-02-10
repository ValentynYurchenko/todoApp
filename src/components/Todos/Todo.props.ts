import { TypeTodoApp } from 'components/App';
export interface TodoProps {
  todo: TypeTodoApp;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}
