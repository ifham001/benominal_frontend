import { showNotification } from '@/store/slices/Notification';
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';


function WhatsAppOtpHandler({firstStep,phoneNumber}) {
    const [otp, setOtp] = useState('');
    const dispatch = useDispatch();
    const handleEditPhone = () => {
        firstStep(); 
        setOtp(''); 
    };
    const handleVerifyOtp = () => {
        if (otp.length !== 6) {
            return dispatch(showNotification({
                message: 'Please enter a valid 6-digit OTP',
                type: 'error',
            }));
        }

      const verifyOtp = async (otp,phoneNumber) => {
            try {
                const response = await fetch('http://localhost:3004/verify-otp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ phoneNumber, otp }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    return dispatch(showNotification({
                        message: errorData.message || 'Failed to verify OTP. Please try again.',
                        type: 'error',
                    }));
                }

                const data = await response.json();
                console.log(data);
                dispatch(showNotification({
                    message: data.message || 'OTP verified successfully!',
                    type: 'success',
                }));
            } catch (error) {
                console.error('Error verifying OTP:', error);
                dispatch(showNotification({
                    message: 'An error occurred while verifying OTP. Please try again.',
                    type: 'error',
                }));
            }
        }
        try {
            verifyOtp(otp, phoneNumber);
        } catch (error) {
            return dispatch(showNotification({
                message: 'An error occurred while verifying OTP. Please try again.',
                type: 'error',
            }));
        }
        

    }
  return (
    <>
         <button
                onClick={handleEditPhone}
                className="text-sm text-green-700 underline mb-4"
              >
                Edit Number
              </button>

              <input
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border border-gray-300 rounded-full px-4 py-2 mb-4 text-sm outline-none text-center"
              />
              <button
                onClick={handleVerifyOtp}
                className="bg-green-900 hover:bg-green-800 text-white font-medium rounded-full w-full py-2 text-sm"
              >
                Verify OTP
              </button>
    
    </>
  )
}

export default WhatsAppOtpHandler