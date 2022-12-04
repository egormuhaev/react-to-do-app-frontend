export interface IStateAutorization {
  successUserData: {
    id: string;
    email: string;
    username: string;
    password: string;
  };

  signIn: {
    title: string;
    isLoading: {
      status: boolean;
      textBtn: string;
    };

    warring: {
      status: boolean;
      message: string;
    };
    inputForm: {
      usernameOrEmailValue: string;
      password: string;

      status: {
        wStatusUsernameOrEmailValue: boolean;
        wStatusPassword: boolean;
      };
    };
  };

  signUp: {
    title: string;

    isLoading: {
      status: boolean;
      textBtn: string;
    };

    registration: {
      formEmail: {
        email: string;
        success: boolean;
        status: boolean;
      };
      formPassword: {
        password: string;
        confirmPassword: string;
        success: boolean;
        status: boolean;
      };
      formUsername: {
        username: string;
        success: boolean;
        status: boolean;
      };
    };

    warring: {
      status: boolean;
      message: string;
    };
  };
}
