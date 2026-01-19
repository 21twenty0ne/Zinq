import React from 'react';

interface ColorPickerProps {
    label: string;
    value: string;
    onChange: (color: string) => void;
}

// Компонент выбора цвета с превью и текстовым вводом
export const ColorPicker: React.FC<ColorPickerProps> = ({
    label,
    value,
    onChange,
}) => {
    return (
        <div className="flex items-center justify-between gap-4">
            <label className="text-sm text-slate-300">{label}</label>
            <div className="flex items-center gap-2">
                {/* Текстовый инпут для HEX кода */}
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-24 px-2 py-1 text-sm bg-slate-800 border border-slate-600 rounded-lg 
                     text-slate-100 focus:outline-none focus:border-violet-500 transition-smooth"
                    placeholder="#000000"
                />
                {/* Нативный color picker */}
                <input
                    type="color"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="cursor-pointer"
                />
            </div>
        </div>
    );
};
