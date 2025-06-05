
const { createSlice } = require("@reduxjs/toolkit");

let token = null;
if (typeof window !== 'undefined') {
  token = localStorage.getItem('token');
}
  // Set an empty token for initial state

const AdminAuthSlice = createSlice({
  name: 'auth',
  initialState: {
    admin:false,
    token: token,
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.admin = true;
      localStorage.setItem('adminToken', action.payload.token);
      state.token? state.admin = true : state.admin = false;


      console.log(action.payload)
    //   if (typeof window !== 'undefined') {
    //     localStorage.setItem('token', action.payload.token);
    //   }
    },
    signOut(state) {
      state.token = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
      }
    }
  }
});

export const { login, signOut } = AdminAuthSlice.actions;
export default AdminAuthSlice;
