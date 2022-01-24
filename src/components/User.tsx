import { FC } from "react";
import { Link } from "react-router-dom";

import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IUserProps } from "./CommonInterface";

const User: FC<IUserProps> = (props) => {
  return (
    <div>
      <Link to={`/users/${props.user.id}`} className="btn">
        {props.user.name}
        {props.selectedId == props.user.id && (
          <span className="float-right">
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="float-right"
            />
          </span>
        )}
      </Link>
    </div>
  );
};
export default User;
