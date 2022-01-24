import { FC, useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";

import { IUser, IUserListProps } from "./CommonInterface";
import User from "./User";
import { fetchUserList } from "./Api";

const UserList: FC<IUserListProps> = (props) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loadedOnce, setLoadedOnce] = useState<boolean>(true);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  let navigate = useNavigate();

  const urlMatch = useMatch("/users/:filterUserId");

  const getUserList = async () => {
    const data = await fetchUserList();
    return data;
  };

  useEffect(() => {
    if (urlMatch !== null && urlMatch.params !== undefined) {
      const currentUser: number | null =
        urlMatch.params.filterUserId !== undefined
          ? parseInt(urlMatch.params.filterUserId)
          : null;

      if (currentUser != null && currentUser != selectedUserId) {
        setSelectedUserId(currentUser);
      }
    }
    if (loadedOnce) {
      getUserList()
        .then((response) => {
          if (
            props.redirect !== undefined &&
            props.redirect &&
            response.length > 0
          ) {
            //You should redirect to show users;
            navigate(`/users/${response[0].id}`);
          } else {
            setUsers(response);
            setLoadedOnce(false);
          }
        })
        .catch((error) => {
          setUsers([]);
          //TODO: You should do something when there are errors
        });
    }
  }, [urlMatch]);

  return (
    <div>
      <h2>Users</h2>
      {loadedOnce && <div>Loading ...</div>}
      {!loadedOnce && (
        <ul className="user-group">
          {users.map((user) => (
            <li key={user.id}>
              <User user={user} selectedId={selectedUserId} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
