import React,{useState} from 'react'

function WhatsAppOtpHandler({firstStep}) {
    const [otp, setOtp] = useState('');
    const handleEditPhone = () => {
        // Logic to handle phone number editing
        console.log('Edit phone number clicked');
        firstStep(); // Call the first step function to go back to phone input
        setOtp(''); // Clear the OTP input
    };
    const handleVerifyOtp = () => {
        // Logic to verify OTP
        console.log(`Verify OTP: ${otp}`);
        if (otp.length !== 6) {
            alert('Please enter a valid 6-digit OTP');
            return;
        }
        // Add your verification logic here
        console.log('OTP verified successfully');

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