import { useEffect, useRef, useCallback } from 'react';
import QRCodeStyling, { type Options } from 'qr-code-styling';
import type { QRSettings, ExportFormat } from '../types/qr';

// Конвертация настроек приложения в формат библиотеки
const convertToQROptions = (settings: QRSettings): Options => {
    const options: Options = {
        width: settings.width,
        height: settings.height,
        data: settings.data,
        dotsOptions: {
            color: settings.dots.color,
            type: settings.dots.type,
        },
        cornersSquareOptions: {
            color: settings.cornerSquare.color,
            type: settings.cornerSquare.type,
        },
        cornersDotOptions: {
            color: settings.cornerDot.color,
            type: settings.cornerDot.type,
        },
        backgroundOptions: settings.background.transparent
            ? undefined
            : { color: settings.background.color },
    };

    // Добавляем настройки изображения только если есть логотип
    if (settings.image.src) {
        options.image = settings.image.src;
        options.imageOptions = {
            crossOrigin: 'anonymous',
            imageSize: settings.image.size,
            margin: settings.image.margin,
            hideBackgroundDots: true,
        };
    }

    return options;
};

// Генерация имени файла на основе контента и текущей даты
const generateFileName = (data: string, format: ExportFormat): string => {
    const date = new Date();
    const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD

    // Берем начало ссылки или текста для имени
    let prefix = 'qr';
    try {
        const url = new URL(data);
        prefix = url.hostname.replace(/\./g, '_').slice(0, 20);
    } catch {
        // Если не URL, берем первые 20 символов текста
        prefix = data
            .replace(/[^a-zA-Zа-яА-Я0-9]/g, '_')
            .slice(0, 20) || 'qr';
    }

    return `${prefix}_${dateStr}.${format}`;
};

interface UseQRCodeResult {
    qrRef: React.RefObject<HTMLDivElement | null>;
    download: (format: ExportFormat) => void;
}

export const useQRCode = (settings: QRSettings): UseQRCodeResult => {
    const qrRef = useRef<HTMLDivElement | null>(null);
    const qrCode = useRef<QRCodeStyling | null>(null);

    // Инициализация QR-кода при первом рендере
    useEffect(() => {
        if (!qrCode.current) {
            qrCode.current = new QRCodeStyling(convertToQROptions(settings));
        }

        if (qrRef.current) {
            qrRef.current.innerHTML = '';
            qrCode.current.append(qrRef.current);
        }
    }, []);

    // Обновление QR-кода при изменении настроек с debounce для производительности
    useEffect(() => {
        const timer = setTimeout(() => {
            if (qrCode.current) {
                qrCode.current.update(convertToQROptions(settings));
            }
        }, 100); // 100ms задержка для плавности

        return () => clearTimeout(timer);
    }, [settings]);

    // Функция скачивания
    const download = useCallback(
        (format: ExportFormat) => {
            if (qrCode.current) {
                const fileName = generateFileName(settings.data, format);
                qrCode.current.download({
                    name: fileName.replace(`.${format}`, ''),
                    extension: format,
                });
            }
        },
        [settings.data]
    );

    return { qrRef, download };
};
