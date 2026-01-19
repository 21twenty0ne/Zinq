import React from 'react';
import { useQRCode } from '../hooks/useQRCode';
import type { QRSettings } from '../types/qr';

interface QRCodePreviewProps {
    settings: QRSettings;
}

// Компонент превью QR-кода
export const QRCodePreview: React.FC<QRCodePreviewProps> = ({ settings }) => {
    const { qrRef } = useQRCode(settings);

    return (
        <div className="flex flex-col items-center justify-center">
            {/* Контейнер с белым фоном для лучшей видимости QR */}
            <div
                className="p-6 rounded-2xl shadow-2xl"
                style={{
                    // Фон превью зависит от настроек
                    backgroundColor: settings.background.transparent
                        ? 'transparent'
                        : settings.background.color,
                    // Добавляем шахматный паттерн для прозрачного фона
                    backgroundImage: settings.background.transparent
                        ? `linear-gradient(45deg, #374151 25%, transparent 25%),
               linear-gradient(-45deg, #374151 25%, transparent 25%),
               linear-gradient(45deg, transparent 75%, #374151 75%),
               linear-gradient(-45deg, transparent 75%, #374151 75%)`
                        : 'none',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                }}
            >
                <div ref={qrRef} />
            </div>
        </div>
    );
};
