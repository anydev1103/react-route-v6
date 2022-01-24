export interface IUser {
  id: number;
  name: string;
  username?: string;
  email?: string;
  address?: object;
  phone?: string;
  website?: string;
  company?: object;
}

export interface IUserListProps {
  redirect?: boolean;
}

export interface IUserProps {
  user: IUser;
  selectedId: number | null;
}

export interface ITask {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface ITaskProps {
  title: string;
  isCompleted: boolean;
  onComplete?: () => void;
}
