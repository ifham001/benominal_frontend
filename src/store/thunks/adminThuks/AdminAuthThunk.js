import { login } from "@/store/slices/admin/AdminAuth"
import { showNotification } from "@/store/slices/Notification"






export const adminAuthThunk =(userData,usedispatch,router)=>{
 
 return  async (dispatch)=>{
        try {
          const response =  await fetch('http://localhost:3004/admin-login',{
            method:'POST',
            body:JSON.stringify(userData),
            headers:{
                "Content-type":"application/json",
                
            }
          })
          
          const data = await response.json()
          if(!response){
            return  dispatch(showNotification({
              type: 'error',
              message: data.message || 'Login failed. Please try again.',
            }))
          }
          if(data.token){
            return dispatch(showNotification({
              type: 'success',
              message: 'Login successful!',
            })) && dispatch(login({token:data.token})) && router.push('/admin/dashboard')
          }
          

          
        } catch (error) {
            return console.log(error)
        }
    }
}