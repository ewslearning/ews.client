"use client";

import { createContext, useContext, useState } from "react";

type FormContextType = {
  showForm: boolean;
  openForm: () => void;
  closeForm: () => void;
};

const FormContext = createContext<FormContextType | null>(null);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <FormContext.Provider value={{ showForm, openForm, closeForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
