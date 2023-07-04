import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const addTodos = (userId: number, todo: Todo) => {
  return client.post<Todo[]>(`/todos?userId=${userId}`, todo);
};

export const deleteTodo = (id: number) => {
  return client.delete(`/todos/${id}`);
};

export const updateTodos = (
  ids: number[],
  updates: Partial<Todo>,
) => {
  const updateRequests = ids.map(id => client.patch<Todo>(`/todos/${id}`, updates));

  return Promise.all(updateRequests);
};