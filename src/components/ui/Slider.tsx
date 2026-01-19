import React from 'react';

interface SliderProps {
    label: string;
    value: number;
    min: number;
    max: number;
    step?: number;
    unit?: string;
    onChange: (value: number) => void;
}

// Слайдер с отображением текущего значения
export const Slider: React.FC<SliderProps> = ({
    label,
    value,
    min,
    max,
    step = 1,
    unit = '',
    onChange,
}) => {
    // Форматирование значения для отображения
    const displayValue = step < 1
        ? (value * 100).toFixed(0) + '%'
        : value + unit;

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <label className="text-sm text-slate-300">{label}</label>
                <span className="text-sm text-violet-400 font-medium">{displayValue}</span>
            </div>
            <input
                type="range"
                value={value}
                min={min}
                max={max}
                step={step}
                onChange={(e) => onChange(parseFloat(e.target.value))}
                className="w-full"
            />
        </div>
    );
};
