import {configureStore} from '@reduxjs/toolkit'
import { notificationSlice } from '../slices/Notification'
import AdminAuthSlice from '../slices/admin/AdminAuth'




export const store = configureStore({
    reducer:{
        auth:AdminAuthSlice.reducer,
        notification: notificationSlice.reducer
    }
})