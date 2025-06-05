"use client"
import React, { useState } from 'react'
import benominal_logo from '../../public/header/Benominal_logo.svg'
import wishlist_icon from '../../public/header/wishlist.svg'
import cart_icon from '../../public/header/cart.svg'
import burger_nav from '../../public/header/menu.svg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Image from 'next/image'
import Link from 'next/link'
import Button from '@/ui/button/Button'
import AuthForms from '@/components/users/auth/AuthForms'


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const loginHandler = () => {
    console.log('Login button clicked');
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const isLoggedIn = false; // Replace with actual authentication logic

  return (
    <>
    <div className="flex items-center justify-between px-4 py-2 m-4 relative">
      {/* Logo */}
      <Image
        src={benominal_logo}
        alt="Benominal logo"
        className="h-6 md:h-8 w-auto cursor-pointer"
      />

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <Link href="/" className="hover:text-gray-700 cursor-pointer">Home</Link>
        <Link href="/collection" className="hover:text-gray-700 cursor-pointer">Collections</Link>
        <Link href="/about-us" className="hover:text-gray-700 cursor-pointer">About Us</Link>
        <Link href="/contact-us" className="hover:text-gray-700 cursor-pointer">Contact</Link>
        {!isLoggedIn ? <Button onClick={loginHandler} children="Login" /> : <AccountCircleIcon />}
      </div>

      {/* Icons + Burger */}
      <div className="flex items-center space-x-4">
        {/* Wishlist and Cart (shown on all screens) */}
        <Image src={wishlist_icon} alt="Wishlist" className="h-6 w-6 cursor-pointer" />
        <Image src={cart_icon} alt="Cart" className="h-6 w-6 cursor-pointer" />
        
        {/* Show avatar if logged in */}
        {isLoggedIn && (
          <div className="block md:hidden">
            <AccountCircleIcon />
          </div>
        )}

        {/* Burger Menu Icon (only on mobile) */}
        <div className="md:hidden">
          <Image
            src={burger_nav}
            alt="Menu"
            className="h-6 w-6 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
  <div className="md:hidden absolute top-10 left-0 right-0 bg-black rounded-2xl rounded-tr-none opacity-85 shadow-lg py-4 px-6 z-50">
    <Link
      href="/"
      onClick={toggleMenu}
      className="block py-2 text-white hover:text-gray-300 transition duration-150 ease-in-out active:scale-95"
    >
      Home
    </Link>
    <Link
      href="/collection"
      onClick={toggleMenu}
      className="block py-2 text-white hover:text-gray-300 transition duration-150 ease-in-out active:scale-95"
    >
      Collection
    </Link>
    <Link
      href="/about-us"
      onClick={toggleMenu}
      className="block py-2 text-white hover:text-gray-300 transition duration-150 ease-in-out active:scale-95"
    >
      About Us
    </Link>
    <Link
      href="/contact-us"
      onClick={toggleMenu}
      className="block py-2 text-white hover:text-gray-300 transition duration-150 ease-in-out active:scale-95"
    >
      Contact
    </Link>
    {!isLoggedIn && (
      <div className="mt-2" onClick={toggleMenu}>
        <Button onClick={loginHandler} children="Login" />
      </div>
    )}
  </div>
)}


    </div>
   {isLoginModalOpen&& <AuthForms isOpen={loginHandler} onClose={()=>setIsLoginModalOpen(init=>!init)} />}
    </>
  );
}

export default Header;
