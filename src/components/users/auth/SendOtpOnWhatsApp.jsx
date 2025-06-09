import { showNotification } from '@/store/slices/Notification';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'


function SendOtpOnWhatsApp({secondstep}) {
    const dispatch = useDispatch();
    const [phoneNumber,setPhoneNumber]=useState()
    const [countryCode, setCountryCode] = useState('+91')
    const handleOtpRequest = async() => {
        if (phoneNumber.length !== 10) {
           return dispatch(showNotification({
                message: 'Please enter a valid 10-digit phone number',
                type: 'error',
            }))}
          secondstep(`${countryCode}${phoneNumber}`)
          
          const sendOtp = async(phoneNumbe)=>{
            try {
              const response = await fetch('http://localhost:3004/send-otp', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({phoneNumber: `${countryCode}${phoneNumbe}`})
              });
              
              if (!response.ok) {
                const errorData = await response.json();
               
                return dispatch(showNotification({
                  message: errorData.message || 'Failed to send OTP. Please try again.',
                  type: 'error',
                }));
              }
              
              const data = await response.json();
              console.log(data);
              dispatch(showNotification({
                message: data.message || 'OTP sent successfully!',
                type: 'success',
              }));
            } catch (error) {
              console.error('Error sending OTP:', error);
              dispatch(showNotification({
                message: 'An error occurred while sending OTP. Please try again.',
                type: 'error',
              }));
            }
          }
          try {
            
            sendOtp(`${phoneNumber}`)
          } catch (error) {
            return dispatch(showNotification({
              message: 'An error occurred while sending OTP. Please try again.',
              type: 'error',
            }))
          }

          }
  return (
    <>
         <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 mb-4 bg-white shadow-sm">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="bg-white text-sm outline-none"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone number"
                  typeof="number"
                  pattern="[0-9]*"
                  maxLength={10}
                  // value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 ml-3 outline-none text-sm bg-white"
                />
              </div>

              <button
                onClick={handleOtpRequest}
                className="bg-green-900 hover:bg-green-800 text-white font-medium rounded-full w-full py-2 text-sm mb-4 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon style={{ color: 'white' }} />
                Get OTP on WhatsApp
              </button>
    
    
    </>
  )
}

export default SendOtpOnWhatsApp