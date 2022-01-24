import { FC } from "react";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ITaskProps } from "./CommonInterface";

const Task: FC<ITaskProps> = (props) => {
  return (
    <div
      className={`task ${props.isCompleted ? "completed" : ""}`}
      onClick={() => {
        props.onComplete !== undefined && props.onComplete();
      }}
    >
      <span>
        {props.isCompleted && <FontAwesomeIcon icon={faCheck} />}
        {!props.isCompleted && <FontAwesomeIcon icon={faSquare} />}
      </span>
      <span className="ml-3">{props.title}</span>
    </div>
  );
};
export default Task;
