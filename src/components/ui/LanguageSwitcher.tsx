import React from 'react';
import { useI18n } from '../../i18n';

// Переключатель языка RU/EN
export const LanguageSwitcher: React.FC = () => {
    const { language, toggleLanguage } = useI18n();

    return (
        <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg
                 bg-slate-800 hover:bg-slate-700 border border-slate-600
                 text-sm font-medium transition-smooth"
        >
            <span className={language === 'ru' ? 'text-violet-400' : 'text-slate-400'}>
                RU
            </span>
            <span className="text-slate-600">/</span>
            <span className={language === 'en' ? 'text-violet-400' : 'text-slate-400'}>
                EN
            </span>
        </button>
    );
};
