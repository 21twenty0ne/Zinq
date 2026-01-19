import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { Language, Translations } from './translations';
import { getTranslation } from './translations';

interface I18nContextType {
    language: Language;
    t: Translations;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

// Определение языка браузера
const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'ru' ? 'ru' : 'en';
};

// Загрузка сохраненного языка из localStorage
const getSavedLanguage = (): Language => {
    try {
        const saved = localStorage.getItem('zinq-language');
        if (saved === 'ru' || saved === 'en') {
            return saved;
        }
    } catch {
        // localStorage недоступен
    }
    return getBrowserLanguage();
};

interface I18nProviderProps {
    children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(getSavedLanguage);

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
        try {
            localStorage.setItem('zinq-language', lang);
        } catch {
            // localStorage недоступен
        }
    }, []);

    const toggleLanguage = useCallback(() => {
        setLanguage(language === 'ru' ? 'en' : 'ru');
    }, [language, setLanguage]);

    // Обновляем lang атрибут html
    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const value: I18nContextType = {
        language,
        t: getTranslation(language),
        setLanguage,
        toggleLanguage,
    };

    return (
        <I18nContext.Provider value={value}>
            {children}
        </I18nContext.Provider>
    );
};

// Хук для использования переводов
export const useI18n = (): I18nContextType => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within I18nProvider');
    }
    return context;
};
