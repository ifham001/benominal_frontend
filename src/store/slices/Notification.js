const { createSlice } = require("@reduxjs/toolkit");

const notification = createSlice({
    name: "notification",
    initialState: {
        message: "",
        type: "",
     },
     reducers:{
        showNotification: (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
        },
        hideNotification: (state) => {
            
            state.message = "";
            state.type = "";
        }
       
     }


     
})
export const notificationSlice = notification;
export const { showNotification, hideNotification } = notification.actions;