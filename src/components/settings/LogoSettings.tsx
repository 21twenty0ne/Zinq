import React, { useRef } from 'react';
import { Upload, X } from 'lucide-react';
import { Slider } from '../ui/Slider';
import { useI18n } from '../../i18n';
import type { ImageOptions } from '../../types/qr';

interface LogoSettingsProps {
    image: ImageOptions;
    onChange: (image: ImageOptions) => void;
}

// Настройки логотипа для QR-кода
export const LogoSettings: React.FC<LogoSettingsProps> = ({ image, onChange }) => {
    const { t } = useI18n();
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Обработка загрузки файла
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Проверка типа файла
        if (!file.type.startsWith('image/')) {
            alert('Please select an image');
            return;
        }

        // Конвертация в base64 для передачи в библиотеку
        const reader = new FileReader();
        reader.onload = (event) => {
            const result = event.target?.result as string;
            onChange({ ...image, src: result });
        };
        reader.readAsDataURL(file);
    };

    // Удаление логотипа
    const handleRemove = () => {
        onChange({ ...image, src: '' });
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSizeChange = (size: number) => {
        onChange({ ...image, size });
    };

    const handleMarginChange = (margin: number) => {
        onChange({ ...image, margin });
    };

    return (
        <div className="space-y-4">
            {/* Область загрузки */}
            <div className="relative">
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    id="logo-upload"
                />

                {image.src ? (
                    // Превью загруженного логотипа
                    <div className="relative group">
                        <div className="w-full h-24 bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden">
                            <img
                                src={image.src}
                                alt="Logo preview"
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleRemove}
                            className="absolute top-2 right-2 p-1 bg-red-500/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <X className="w-4 h-4 text-white" />
                        </button>
                    </div>
                ) : (
                    // Кнопка загрузки
                    <label
                        htmlFor="logo-upload"
                        className="flex flex-col items-center justify-center w-full h-24 
                       bg-slate-800 border-2 border-dashed border-slate-600 rounded-lg
                       hover:border-violet-500 hover:bg-slate-700/50 cursor-pointer transition-smooth"
                    >
                        <Upload className="w-6 h-6 text-slate-400 mb-2" />
                        <span className="text-sm text-slate-400">{t.uploadLogo}</span>
                    </label>
                )}
            </div>

            {/* Настройки размера и отступов, показываем только если есть логотип */}
            {image.src && (
                <>
                    <Slider
                        label={t.logoSize}
                        value={image.size}
                        min={0.1}
                        max={0.5}
                        step={0.05}
                        onChange={handleSizeChange}
                    />
                    <Slider
                        label={t.logoMargin}
                        value={image.margin}
                        min={0}
                        max={20}
                        step={1}
                        unit="px"
                        onChange={handleMarginChange}
                    />
                </>
            )}
        </div>
    );
};
