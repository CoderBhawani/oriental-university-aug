import React, { createContext, useContext, useState } from 'react';
import EnquiryModal from './EnquiryModal';

const EnquiryContext = createContext();

export const useEnquiry = () => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
};

export const EnquiryProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEnquiryModal = () => {
    setIsModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsModalOpen(false);
  };

  return (
    <EnquiryContext.Provider value={{ openEnquiryModal, closeEnquiryModal }}>
      {children}
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={closeEnquiryModal} 
      />
    </EnquiryContext.Provider>
  );
};

export default EnquiryContext;
