import { FC, useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import { ITask } from "./CommonInterface";
import Task from "./Task";
import { fetchTaskList } from "./Api";

const TaskList: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loadingNow, setLoadingNow] = useState<boolean>(true);

  let { filterUserId } = useParams<{ filterUserId?: string }>();

  function markComplete(taskId: number): void {
    const updatedTask = tasks.map((task: ITask) => {
      if (task.id === taskId) {
        task.completed = true;
        axios
          .post(`https://jsonplaceholder.typicode.com/todos`, task)
          .then((res) => {
            console.log("completed");
            setTasks(updatedTask);
          });
      }
      return task;
    });
  }

  const getTaskList = async () => {
    setLoadingNow(true);
    const data = await fetchTaskList();
    setLoadingNow(false);
    return data;
  };

  useEffect(() => {
    getTaskList()
      .then((response) => {
        const filteredTasks = response.filter((task: ITask) => {
          if (
            filterUserId !== undefined &&
            task.userId === parseInt(filterUserId)
          )
            return true;
          else return false;
        });

        setTasks(filteredTasks);
      })
      .catch((error) => {
        setTasks([]);
        //TODO: You should do something when there are errors
      });
  }, [filterUserId]);

  return (
    <div>
      <h2>Tasks List</h2>
      {loadingNow && <div>Loading ...</div>}
      {!loadingNow && (
        <ul className="task-group">
          {tasks.map((task) => (
            <li key={task.id}>
              {!task.completed && (
                <Task
                  title={task.title}
                  isCompleted={task.completed}
                  onComplete={() => markComplete(task.id)}
                />
              )}
              {task.completed && (
                <Task title={task.title} isCompleted={task.completed} />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
