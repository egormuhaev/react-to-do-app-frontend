export interface IGroup {
  id: number | string;
  name: string | undefined;
  user_id: string | undefined;
}

export interface ITask {
  id: number | undefined;
  name: string | number;
  description: string | undefined;
  deadline: string;
  notification: boolean;
  tags: string;
  important: boolean;
  status: boolean;
  group_id: number;
  user_id: string;
}

export interface IStateMainApp {
  userData: {
    id: string | number;
    email: string;
    username: string;
    password: string;
  };

  header: {
    text: string;
  };

  activeSection: {
    today: boolean;
    important: boolean;
    all: boolean;
    planned: boolean;
    tasks: boolean;
    group: boolean;
    dashboard: boolean;
  };

  group: {
    createGroup: {
      newGroupName: string;
      status: boolean;
      errorStatus: boolean;
      errorMessage: string;
    };
    selectGroup: string | number;
    groupAll: IGroup[];
  };

  task: ITask[];
}
