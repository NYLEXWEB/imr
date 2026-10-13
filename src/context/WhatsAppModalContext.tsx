"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface WhatsAppModalContextType {
  isOpen: boolean;
  message: string;
  openWhatsAppModal: (options?: { message?: string }) => void;
  closeWhatsAppModal: () => void;
}

const WhatsAppModalContext = createContext<WhatsAppModalContextType | undefined>(undefined);

export function WhatsAppModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const openWhatsAppModal = (options?: { message?: string }) => {
    setMessage(options?.message || "");
    setIsOpen(true);
  };

  const closeWhatsAppModal = () => {
    setIsOpen(false);
  };

  return (
    <WhatsAppModalContext.Provider
      value={{
        isOpen,
        message,
        openWhatsAppModal,
        closeWhatsAppModal,
      }}
    >
      {children}
    </WhatsAppModalContext.Provider>
  );
}

export function useWhatsAppModal() {
  const context = useContext(WhatsAppModalContext);
  if (!context) {
    throw new Error("useWhatsAppModal must be used within a WhatsAppModalProvider");
  }
  return context;
}
