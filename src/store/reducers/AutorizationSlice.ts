import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStateAutorization } from "../../models/IStateAutorization";
import { fetchSignInUsers, fetchSignUpNewUsers } from "./ActionCreator";
import { responseJsonSignIn, responseJsonSignUp } from "../../models/IResponse";

const initialState: IStateAutorization = {
  successUserData: {
    id: "",
    email: "",
    username: "",
    password: "",
  },

  signIn: {
    title: "Sign In",

    isLoading: {
      status: false,
      textBtn: "Sign In",
    },

    warring: {
      status: false,
      message: "default",
    },

    inputForm: {
      usernameOrEmailValue: "",
      password: "",

      status: {
        wStatusUsernameOrEmailValue: false,
        wStatusPassword: false,
      },
    },
  },

  signUp: {
    title: "Sign Up",

    isLoading: {
      status: false,
      textBtn: "Create",
    },

    registration: {
      formEmail: {
        email: "",
        success: false,
        status: true,
      },
      formPassword: {
        password: "",
        confirmPassword: "",
        success: false,
        status: false,
      },
      formUsername: {
        username: "",
        success: false,
        status: false,
      },
    },

    warring: {
      status: false,
      message: "default",
    },
  },
};

export const autorizationSlice = createSlice({
  name: "autorization",
  initialState,
  reducers: {
    setStatusEmailSingUp(state) {
      state.signUp.registration.formEmail.status = true;
      state.signUp.registration.formPassword.status = false;
      state.signUp.registration.formUsername.status = false;
      state.signUp.warring.status = false;
    },
    setStatusPasswordSingUp(state) {
      state.signUp.registration.formEmail.status = false;
      state.signUp.registration.formPassword.status = true;
      state.signUp.registration.formUsername.status = false;
      state.signUp.warring.status = false;
    },
    setStatusUsernameSingUp(state) {
      state.signUp.registration.formEmail.status = false;
      state.signUp.registration.formPassword.status = false;
      state.signUp.registration.formUsername.status = true;
      state.signUp.warring.status = false;
    },
    setWarringSignUp(state, action: PayloadAction<string>) {
      state.signUp.warring = { status: true, message: action.payload };
    },

    setPasswordValue(state, action: PayloadAction<string>) {
      state.signUp.registration.formPassword.password = action.payload;
    },
    setConfirmPasswordValue(state, action: PayloadAction<string>) {
      state.signUp.registration.formPassword.confirmPassword = action.payload;
    },
    setEmailValue(state, action: PayloadAction<string>) {
      state.signUp.registration.formEmail.email = action.payload;
    },
    setUsernameValue(state, action: PayloadAction<string>) {
      state.signUp.registration.formUsername.username = action.payload;
    },

    setFalseStatusWarring(state) {
      state.signIn.warring.status = false;
      state.signUp.warring.status = false;
    },
    setUsernameOrEmailValueSignIn(state, action: PayloadAction<string>) {
      state.signIn.inputForm.usernameOrEmailValue = action.payload;
    },
    setPasswordSignIn(state, action: PayloadAction<string>) {
      state.signIn.inputForm.password = action.payload;
    },
  },

  extraReducers: {
    [fetchSignUpNewUsers.pending.type]: (state) => {
      state.signUp.isLoading = { status: true, textBtn: "..." };
    },
    [fetchSignUpNewUsers.fulfilled.type]: (
      state,
      action: PayloadAction<responseJsonSignUp>
    ) => {
      if (action.payload.status) {
        state.signUp.isLoading = { status: false, textBtn: "GO" };
        state.successUserData = {
          id: action.payload.id,
          email: action.payload.email,
          password: action.payload.password,
          username: action.payload.username,
        };
     
      } else {
        state.signUp.isLoading = { status: false, textBtn: "Create" };
        state.signUp.warring = {
          status: true,
          message: action.payload.message,
        };
      }
    },
    [fetchSignUpNewUsers.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.signUp.warring = {
        status: true,
        message: action.payload,
      };
      state.signUp.isLoading = {
        status: false,
        textBtn: "Create",
      };
    },

    [fetchSignInUsers.pending.type]: (state) => {
      state.signIn.isLoading = {
        status: true,
        textBtn: "Sign In...",
      };
    },
    [fetchSignInUsers.fulfilled.type]: (
      state,
      action: PayloadAction<responseJsonSignIn>
    ) => {
      state.signIn.isLoading = {
        status: false,
        textBtn: "Sign In",
      };

      if (
        !(
          action.payload.invalidPassword &&
          action.payload.invalidUsername &&
          action.payload.id !== ""
        )
      ) {
        state.signIn.warring = {
          status: true,
          message: action.payload.message,
        };
      } else {
      
        state.signIn.warring = { status: false, message: "" };
        state.successUserData = {
          id: action.payload.id,
          email: action.payload.email,
          password: action.payload.password,
          username: action.payload.username,
        };
   
      }
    },
    [fetchSignInUsers.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.signIn.isLoading = { status: false, textBtn: "Sign In" };
      state.signIn.warring = { status: true, message: action.payload };
    },
  },
});

export default autorizationSlice.reducer;
