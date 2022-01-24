import axios from "axios";
import { IUser, ITask } from "./CommonInterface";

export const UserFetchURL: string = `https://jsonplaceholder.typicode.com/users`;
export const TaskFetchURL: string = `https://jsonplaceholder.typicode.com/todos`;

export const fetchUserList = async () => {
  const { data } = await axios.get<IUser[]>(UserFetchURL);
  return data;
};

export const fetchTaskList = async () => {
  const { data } = await axios.get<ITask[]>(TaskFetchURL);
  return data;
};
