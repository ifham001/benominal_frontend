"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Ananya, Mumbai',
        review: "It hasn't tarnished at all – and I wear it daily. Truly stunning.",
        avatar: '/avatars/avatar1.jpg', // Ensure these paths are correct (e.g., in your public/avatars/ folder)
    },
    {
        name: 'Sana, Delhi',
        review: 'Elegant and affordable. Goes with every outfit.',
        avatar: '/avatars/avatar2.jpg',
    },
    {
        name: 'Meera, Bangalore',
        review: 'Subtle sparkle, perfect for daily wear.',
        avatar: '/avatars/avatar3.jpg',
    },
    {
        name: 'Riya, Kolkata',
        review: 'Impressed with the quality and packaging.',
        avatar: '/avatars/avatar4.jpg',
    },
];

// Use a regular img tag instead of next/image
const CustomImage = ({ src, alt, width, height, className, style }) => (
    <img src={src} alt={alt} width={width} height={height} className={className} style={style} />
);

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="px-4 md:px-10 lg:px-20 py-16 bg-white text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1d3c2e] mb-12">Testimonials</h2>

            <div className="flex justify-center flex-wrap gap-6 mb-10 relative">
                {testimonials.map((t, index) => (
                    <div key={index} className="relative"> {/* Container for button and hand icon */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }} // Slightly adjusted tap scale
                            animate={{ scale: activeIndex === index ? 1.05 : 1 }} // Active avatar is slightly larger
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            onClick={() => setActiveIndex(index)}
                            className={`relative transition-opacity duration-300 hover:opacity-100 ${
                                activeIndex === index ? 'opacity-100' : 'opacity-60'
                            }`}
                        >
                            <CustomImage
                                src={t.avatar}
                                alt={t.name}
                                width={80}
                                height={80}
                                className={`rounded-full border-2 transition-colors duration-300 ${
                                    activeIndex === index ? 'border-[#1d3c2e]' : 'border-transparent'
                                }`}
                            />
                        </motion.button>
                        
                        {/* Enhanced Hand Interaction Animation */}
                        {activeIndex === index && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, y: 10, x: 10 }} // Start small, slightly offset and transparent
                                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}    // Animate to full size, original position, and opaque
                                exit={{ opacity: 0, scale: 0.5, y: 10, x: 10 }}     // Animate out smoothly
                                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                                style={{
                                    position: 'absolute',
                                    // Position to slightly overlap the bottom-right of the avatar
                                    // Avatar is 80x80. Hand is 35x35.
                                    right: '0px',  // Adjust these values to fine-tune position
                                    bottom: '0px', // e.g., 5px from right, 5px from bottom
                                    zIndex: 10,    // Ensure it's above the avatar image if overlapping heavily
                                }}
                            >
                                <CustomImage
                                    src="/hand-cursor.png" // Ensure this path is correct (e.g., in your public/ folder)
                                    alt="Selected Avatar Hand"
                                    width={35}  // Adjusted size for better balance
                                    height={35}
                                    style={{ filter: 'drop-shadow(2px 2px 3px rgba(0,0,0,0.3))' }} // Subtle shadow for depth
                                />
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>

            <div className="max-w-2xl mx-auto bg-[#f2f9f5] px-6 py-6 rounded-xl shadow-md">
                {/* Animate the content of the testimonial card for a smoother transition */}
                <motion.div
                    key={activeIndex} // Ensures animation runs when activeIndex changes
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <CustomImage
                            src={testimonials[activeIndex].avatar}
                            alt="avatar"
                            width={60}
                            height={60}
                            className="rounded-full"
                        />
                        <div>
                            <h4 className="font-semibold">{testimonials[activeIndex].name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{testimonials[activeIndex].review}</p>
                        </div>
                    </div>
                    <div className="text-[#b18b2c] text-lg">★★★★★</div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;