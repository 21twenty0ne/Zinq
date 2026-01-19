import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

// Элемент аккордеона с анимацией раскрытия
export const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    icon,
    children,
    defaultOpen = false,
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-slate-700/50 last:border-b-0">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-700/30 transition-smooth"
            >
                <div className="flex items-center gap-3">
                    {icon && <span className="text-violet-400">{icon}</span>}
                    <span className="font-medium text-slate-100">{title}</span>
                </div>
                <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>

            <div
                className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="p-4 pt-0">{children}</div>
            </div>
        </div>
    );
};

interface AccordionProps {
    children: React.ReactNode;
}

// Контейнер для элементов аккордеона
export const Accordion: React.FC<AccordionProps> = ({ children }) => {
    return (
        <div className="glass rounded-xl overflow-hidden">{children}</div>
    );
};
