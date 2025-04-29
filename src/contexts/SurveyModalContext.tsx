
import React, { createContext, useContext, useState } from 'react';

interface SurveyModalContextType {
  isSurveyOpen: boolean;
  openSurvey: () => void;
  closeSurvey: () => void;
}

const SurveyModalContext = createContext<SurveyModalContextType | undefined>(undefined);

export const SurveyModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);

  const openSurvey = () => setIsSurveyOpen(true);
  const closeSurvey = () => setIsSurveyOpen(false);

  return (
    <SurveyModalContext.Provider value={{ isSurveyOpen, openSurvey, closeSurvey }}>
      {children}
    </SurveyModalContext.Provider>
  );
};

export const useSurveyModal = () => {
  const context = useContext(SurveyModalContext);
  if (context === undefined) {
    throw new Error('useSurveyModal must be used within a SurveyModalProvider');
  }
  return context;
};
