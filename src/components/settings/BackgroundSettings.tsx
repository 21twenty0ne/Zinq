import React from 'react';
import { ColorPicker } from '../ui/ColorPicker';
import { useI18n } from '../../i18n';
import type { BackgroundOptions } from '../../types/qr';

interface BackgroundSettingsProps {
    background: BackgroundOptions;
    onChange: (background: BackgroundOptions) => void;
}

// Настройки фона QR-кода
export const BackgroundSettings: React.FC<BackgroundSettingsProps> = ({
    background,
    onChange,
}) => {
    const { t } = useI18n();

    const handleTransparentToggle = () => {
        onChange({ ...background, transparent: !background.transparent });
    };

    const handleColorChange = (color: string) => {
        onChange({ ...background, color });
    };

    return (
        <div className="space-y-4">
            {/* Переключатель прозрачности */}
            <div className="flex items-center justify-between">
                <label className="text-sm text-slate-300">{t.transparentBackground}</label>
                <button
                    type="button"
                    onClick={handleTransparentToggle}
                    className={`w-12 h-6 rounded-full transition-colors duration-200 ${background.transparent
                        ? 'bg-violet-500'
                        : 'bg-slate-600'
                        }`}
                >
                    <div
                        className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 ${background.transparent
                            ? 'translate-x-6'
                            : 'translate-x-0.5'
                            }`}
                    />
                </button>
            </div>

            {/* Выбор цвета фона, скрыт при прозрачном режиме */}
            {!background.transparent && (
                <ColorPicker
                    label={t.backgroundColor}
                    value={background.color}
                    onChange={handleColorChange}
                />
            )}
        </div>
    );
};
