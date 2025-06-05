'use client'
import React, { useState } from 'react'
import PopUpModal from '@/ui/PopUpModal'
import LoginByGoogle from './LoginByGoogle'
import SendOtpOnWhatsApp from './SendOtpOnWhatsApp'
import WhatsAppOtpHandler from './WhatsAppOtpHandler'
import img from  '../../../../public/collection/necklace.jpg'
import Image from 'next/image'


function AuthForms({ onClose, isOpen }) {

  const [phone, setPhone] = useState('')
  const [step, setStep] = useState(1) // 1 = phone, 2 = otp

 const editPhoneNumber = () => {
    setStep(1)}
 
  const secondStep = (phoneNumber) => {
    setPhone(phoneNumber)
    setStep(2)
  }

 

  return (
    <>
      <PopUpModal onClose={onClose} isOpen={isOpen}>
        <Image src={img} alt="Banner" className="w-full h-36 object-cover rounded-xl mb-6" />
        <h1 className="text-lg sm:text-xl font-semibold text-center mb-6 text-green-900">Login</h1>

        <div className="relative w-full h-[190px] overflow-hidden">
          <div
            className="absolute top-0 left-0 w-[200%] flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${step === 1 ? '0%' : '-50%'})` }}
          >
            {/* Step 1: Phone Form */}
            <div className="w-1/2 pr-2">
             <SendOtpOnWhatsApp  secondstep={secondStep} />

              <div className="text-xs text-gray-500 mb-4 text-center">or</div>

              <div className="flex justify-center">
                <LoginByGoogle/>
              </div>
            </div>

            {/* Step 2: OTP Form */}
            <div className="w-1/2 pl-2">
              <div className="mb-2 text-sm text-gray-800">
                OTP sent to <strong> {phone}</strong>
              </div>

             <WhatsAppOtpHandler firstStep={editPhoneNumber}/>
            </div>
          </div>
        </div>
      </PopUpModal>
    </>
  )
}

export default AuthForms
