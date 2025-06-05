import React, { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { useDispatch } from 'react-redux'
import { showNotification } from '@/store/slices/Notification'

function LoginByGoogle({ onClose }) {
  const dispatch = useDispatch()
  const [clickedGoogleBtn, setClickedGoogleBtn] = useState(false)

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      setClickedGoogleBtn(true)

      const res = await fetch('/api/google-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credential: credentialResponse.credential }),
      })

      const data = await res.json()

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

      // localStorage.setItem('token', data.token)
      if (onClose) onClose()
    } catch (err) {
      dispatch(
        showNotification({
          message: err.message || 'Unexpected error during login',
          type: 'error',
        })
      )
    } finally {
      setClickedGoogleBtn(false)
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
      shape="pill"
      size="medium"
      text="continue_with"
    />
  )
}

export default LoginByGoogle
