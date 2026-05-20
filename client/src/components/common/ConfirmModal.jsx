import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

const ConfirmModal = ({
  isOpen,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  isDanger = false
}) => {
  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onCancel();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onCancel]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={onCancel}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white shadow-2xl rounded-[32px] w-full max-w-sm p-8 md:p-10 flex flex-col items-center border border-gray-100"
          >
            {/* Warning/Trash Icon */}
            <div 
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shrink-0 ${
                isDanger ? 'bg-red-50 text-red-500' : 'bg-brand-50 text-brand-600'
              }`}
            >
              <AlertTriangle className="w-7 h-7" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-black font-heading mb-3 text-gray-900 tracking-tight text-center">
              {title}
            </h2>

            {/* Message */}
            <p className="text-gray-500 text-sm font-medium text-center mb-8 leading-relaxed max-w-[280px]">
              {message}
            </p>

            {/* Actions */}
            <div className="flex gap-3.5 w-full">
              <button
                onClick={onCancel}
                className="flex-1 h-12 border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full font-bold text-sm transition-all duration-300"
              >
                {cancelText}
              </button>
              <button
                onClick={onConfirm}
                className={`flex-1 h-12 text-white rounded-full font-bold text-sm transition-all duration-300 shadow-md ${
                  isDanger 
                    ? 'bg-red-500 hover:bg-red-600 shadow-red-500/10' 
                    : 'bg-brand-600 hover:bg-brand-700 shadow-brand-500/10'
                }`}
              >
                {confirmText}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmModal;
