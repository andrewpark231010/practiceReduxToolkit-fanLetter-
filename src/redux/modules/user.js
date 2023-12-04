// import { createSlice } from "@reduxjs/toolkit";

// const loginSlice = createSlice({
//   name: "user",
//   initialState: {
//     isLoggedIn: false,
//     username: "",
//     password: "",
//   },
//   reducers: {
//     login: (state, action) => {
//       state.isLoggedIn = true;
//       state.username = action.payload.username;
//       state.password = action.payload.password;

//       localStorage.setItem("user", JSON.stringify(state));
//     },
//     logout: (state) => {
//       state.isLoggedIn = false;
//       state.username = "";
//       state.password = "";

//       localStorage.removeItem("user");
//     },
//   },
// });

// export const { login, logout } = loginSlice.actions;
// export default loginSlice.reducer;
