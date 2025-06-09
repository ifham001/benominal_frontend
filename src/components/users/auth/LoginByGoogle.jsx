import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { GoogleLogin } from '@react-oauth/google'
import { showNotification } from '@/store/slices/Notification'

function LoginByGoogle({ onClose }) {
  const dispatch = useDispatch()
  

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      setClickedGoogleBtn(true)

      const res = await fetch("http://localhost:3004/google-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ credential: credentialResponse.credential }),
      })

      const data = await res.json()
      console.log(data)

      if (!res.ok) {
        dispatch(
          showNotification({
            message: data.message || 'Login failed. Please try again.',
            type: 'error',
          })
        )
        return
      }

      dispatch(
        showNotification({
          message: data.message || 'Login successful!',
          type: 'success',
        })
      )

      // Assuming you have a login action to handle the user data

      if (onClose) onClose()
    } catch (err) {
      dispatch(
        showNotification({
          message: err.message || 'Unexpected error during login',
          type: 'error',
        })
      )
    } finally {
      
    }
  }

  return (
    <GoogleLogin
      onSuccess={handleGoogleSuccess}
      onError={() =>
        dispatch(
          showNotification({
            message: 'Google login failed',
            type: 'error',
          })
        )
      }
      useOneTap={false}
      shape="pill"
      size="medium"
      text="continue_with"
    />
  )
}

export default LoginByGoogle
