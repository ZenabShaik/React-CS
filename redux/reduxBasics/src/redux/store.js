import { configureStore } from "@reduxjs/toolkit";  
import counterSlice from "./counterSlice.jsx";
import userSlice from "./userSlice.jsx";

//import thunkMiddleware from "redux-thunk";
const store = configureStore({
  reducer: {  
    counterState : counterSlice.reducer,
    userState: userSlice.reducer,
  },
  //middleware:[thunkMiddleware]
})

export default store;
