import { useState } from 'react';
import Button from '../Button/Button';
import { TodoFormProps } from './TodoForm.props';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }: TodoFormProps): JSX.Element {
  const [text, setText] = useState<string>('');

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text) return;
    addTodo(text);
    setText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
