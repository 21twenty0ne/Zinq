// Типы форм для точек QR-кода
export type DotType =
    | 'square'
    | 'dots'
    | 'rounded'
    | 'extra-rounded'
    | 'classy'
    | 'classy-rounded';

// Типы форм для внешних углов (квадратные маркеры)
export type CornerSquareType =
    | 'square'
    | 'dot'
    | 'extra-rounded';

// Типы форм для внутренних точек углов
export type CornerDotType =
    | 'square'
    | 'dot';

// Форматы экспорта
export type ExportFormat = 'png' | 'svg';

// Настройки точек
export interface DotsOptions {
    color: string;
    type: DotType;
}

// Настройки внешних углов
export interface CornerSquareOptions {
    color: string;
    type: CornerSquareType;
}

// Настройки внутренних точек углов
export interface CornerDotOptions {
    color: string;
    type: CornerDotType;
}

// Настройки фона
export interface BackgroundOptions {
    color: string;
    transparent: boolean;
}

// Настройки логотипа
export interface ImageOptions {
    src: string;
    size: number; // от 0 до 1, доля от размера QR
    margin: number; // отступ в пикселях
}

// Главный интерфейс настроек QR-кода
export interface QRSettings {
    data: string;
    width: number;
    height: number;
    dots: DotsOptions;
    cornerSquare: CornerSquareOptions;
    cornerDot: CornerDotOptions;
    background: BackgroundOptions;
    image: ImageOptions;
}

// Дефолтные настройки
export const defaultQRSettings: QRSettings = {
    data: 'https://github.com/21twenty0ne',
    width: 300,
    height: 300,
    dots: {
        color: '#8b5cf6',
        type: 'rounded',
    },
    cornerSquare: {
        color: '#8b5cf6',
        type: 'extra-rounded',
    },
    cornerDot: {
        color: '#8b5cf6',
        type: 'dot',
    },
    background: {
        color: '#ffffff',
        transparent: false,
    },
    image: {
        src: '',
        size: 0.4,
        margin: 5,
    },
};

// Опции для селектов с русскими названиями
export const dotTypeOptions: { value: DotType; label: string }[] = [
    { value: 'square', label: 'Квадрат' },
    { value: 'dots', label: 'Точки' },
    { value: 'rounded', label: 'Скругленные' },
    { value: 'extra-rounded', label: 'Очень скругленные' },
    { value: 'classy', label: 'Классические' },
    { value: 'classy-rounded', label: 'Классические скругленные' },
];

export const cornerSquareTypeOptions: { value: CornerSquareType; label: string }[] = [
    { value: 'square', label: 'Квадрат' },
    { value: 'dot', label: 'Точка' },
    { value: 'extra-rounded', label: 'Скругленный' },
];

export const cornerDotTypeOptions: { value: CornerDotType; label: string }[] = [
    { value: 'square', label: 'Квадрат' },
    { value: 'dot', label: 'Точка' },
];
