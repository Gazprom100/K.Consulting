'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface DonateModalProps {
  onClose: () => void;
  isOpen?: boolean;
}

export default function DonateModal({ onClose, isOpen = true }: DonateModalProps) {
  const [donationAmount, setDonationAmount] = useState<number | ''>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.3,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      transition: { 
        duration: 0.2,
        when: "afterChildren"
      }
    }
  };

  const contentVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.4,
        type: "spring", 
        stiffness: 500, 
        damping: 25 
      }
    },
    exit: { 
      y: 50, 
      opacity: 0,
      transition: { 
        duration: 0.3
      }
    }
  };

  // Close modal when pressing ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleAmountClick = (amount: number) => {
    setDonationAmount(amount);
    setError(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setDonationAmount('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue >= 0) {
      setDonationAmount(numValue);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!donationAmount || donationAmount < 1) {
      setError('Сумма должна быть не менее 1 ₽');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: donationAmount }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Ошибка создания платежа');
      }
      
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        throw new Error('Не получена ссылка на оплату');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Произошла ошибка при создании платежа');
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleBackdropClick}
        >
          <motion.div 
            className="w-full max-w-md bg-gray-900 rounded-lg shadow-xl border border-blue-500/20"
            variants={contentVariants}
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-white">Поддержать проект</h2>
                <button 
                  onClick={onClose} 
                  className="text-gray-400 hover:text-white transition-colors"
                  disabled={isSubmitting}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    {[100, 500, 1000].map(amount => (
                      <button
                        key={amount}
                        type="button"
                        className={`py-2 px-4 rounded-md transition-all ${
                          donationAmount === amount 
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50' 
                            : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                        }`}
                        onClick={() => handleAmountClick(amount)}
                        disabled={isSubmitting}
                      >
                        {amount} ₽
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Другая сумма
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={donationAmount === '' ? '' : donationAmount}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white"
                        placeholder="Введите сумму"
                        disabled={isSubmitting}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span className="text-gray-400">₽</span>
                      </div>
                    </div>
                  </div>
                  
                  {error && (
                    <div className="text-red-500 text-sm mt-2">{error}</div>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full py-2 px-4 mt-4 cyber-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Обработка...
                      </div>
                    ) : 'Отправить'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 