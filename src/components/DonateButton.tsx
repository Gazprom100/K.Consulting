'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DonateModal from './DonateModal';

export default function DonateButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 0 15px rgba(80, 210, 255, 0.8)',
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      boxShadow: '0 0 5px rgba(80, 210, 255, 0.5)'
    }
  };

  return (
    <>
      <motion.button
        onClick={openModal}
        className="fixed bottom-6 right-6 z-20 cyber-button-small py-2 px-4 flex items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Поддержать проект
      </motion.button>
      
      <DonateModal onClose={closeModal} isOpen={isModalOpen} />
    </>
  );
} 