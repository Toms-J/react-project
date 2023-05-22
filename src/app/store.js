import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postsSlice";
import userReducer from "../features/user/userSlice";
import usersReducer from "../features/users/usersSlice"
import albumReducer from "../features/album/albumSlice"
import coinReducer from "../features/coin/coinSlice"

//APP
// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//     postStore: postsReducer,
//     usersStore: usersReducer,
//     albumStore: albumReducer,
//     coinStore: coinReducer
//   }
// });

// PROJECT
export default configureStore({
  reducer: {
    userStore: userReducer,
    coinStore: coinReducer
  }
})