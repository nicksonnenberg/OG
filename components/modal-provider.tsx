"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Modal } from "./modal";

interface ModalContextType {
  openModal: (id: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
  modals: Array<{
    id: string;
    title: string;
    content: Array<{
      type: string;
      value: string;
    }>;
  }>;
}

export const ModalProvider = ({ children, modals }: ModalProviderProps) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (id: string) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      
      {modals.map((modal) => (
        <Modal
          key={modal.id}
          id={modal.id}
          title={modal.title}
          content={modal.content}
          isOpen={activeModal === modal.id}
          onClose={closeModal}
        />
      ))}
    </ModalContext.Provider>
  );
}; 