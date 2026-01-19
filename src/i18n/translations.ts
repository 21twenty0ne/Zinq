// Поддерживаемые языки
export type Language = 'ru' | 'en';

// Структура переводов
export interface Translations {
    // Header
    appName: string;
    appDescription: string;

    // Settings Panel
    settingsTitle: string;

    // Content
    contentTitle: string;
    contentPlaceholder: string;
    contentHint: string;
    contentDescription: string;

    // Dots
    dotsTitle: string;
    dotsColor: string;
    dotsShape: string;
    dotTypeSquare: string;
    dotTypeDots: string;
    dotTypeRounded: string;
    dotTypeExtraRounded: string;
    dotTypeClassy: string;
    dotTypeClassyRounded: string;

    // Corners
    cornersTitle: string;
    cornerFrameTitle: string;
    cornerFrameColor: string;
    cornerFrameShape: string;
    cornerCenterTitle: string;
    cornerCenterColor: string;
    cornerCenterShape: string;
    cornerSquareTypeSquare: string;
    cornerSquareTypeDot: string;
    cornerSquareTypeExtraRounded: string;
    cornerDotTypeSquare: string;
    cornerDotTypeDot: string;

    // Background
    backgroundTitle: string;
    transparentBackground: string;
    backgroundColor: string;

    // Logo
    logoTitle: string;
    uploadLogo: string;
    logoSize: string;
    logoMargin: string;

    // Preview & Download
    previewTitle: string;
    downloadPng: string;
    pngFormat: string;
    pngDescription: string;
    svgFormat: string;
    svgDescription: string;

    // Footer
    createdWith: string;
}

// Русские переводы
export const ru: Translations = {
    appName: 'Zinq',
    appDescription: 'QR Code Generator',

    settingsTitle: 'Настройки QR-кода',

    contentTitle: 'Контент',
    contentPlaceholder: 'https://example.com',
    contentHint: 'Введите ссылку или текст для кодирования',
    contentDescription: 'Поддерживаются ссылки, текст, номера телефонов, email и другие данные',

    dotsTitle: 'Точки',
    dotsColor: 'Цвет точек',
    dotsShape: 'Форма точек',
    dotTypeSquare: 'Квадрат',
    dotTypeDots: 'Точки',
    dotTypeRounded: 'Скругленные',
    dotTypeExtraRounded: 'Очень скругленные',
    dotTypeClassy: 'Классические',
    dotTypeClassyRounded: 'Классические скругленные',

    cornersTitle: 'Углы',
    cornerFrameTitle: 'Внешняя рамка углов',
    cornerFrameColor: 'Цвет рамки',
    cornerFrameShape: 'Форма рамки',
    cornerCenterTitle: 'Центр углов',
    cornerCenterColor: 'Цвет центра',
    cornerCenterShape: 'Форма центра',
    cornerSquareTypeSquare: 'Квадрат',
    cornerSquareTypeDot: 'Точка',
    cornerSquareTypeExtraRounded: 'Скругленный',
    cornerDotTypeSquare: 'Квадрат',
    cornerDotTypeDot: 'Точка',

    backgroundTitle: 'Фон',
    transparentBackground: 'Прозрачный фон',
    backgroundColor: 'Цвет фона',

    logoTitle: 'Логотип',
    uploadLogo: 'Загрузить логотип',
    logoSize: 'Размер логотипа',
    logoMargin: 'Отступ',

    previewTitle: 'Превью',
    downloadPng: 'Скачать PNG',
    pngFormat: 'PNG формат',
    pngDescription: 'Растровое изображение',
    svgFormat: 'SVG формат',
    svgDescription: 'Векторное изображение',

    createdWith: 'Создано с использованием',
};

// Английские переводы
export const en: Translations = {
    appName: 'Zinq',
    appDescription: 'QR Code Generator',

    settingsTitle: 'QR Code Settings',

    contentTitle: 'Content',
    contentPlaceholder: 'https://example.com',
    contentHint: 'Enter a link or text to encode',
    contentDescription: 'Supports links, text, phone numbers, email and other data',

    dotsTitle: 'Dots',
    dotsColor: 'Dot color',
    dotsShape: 'Dot shape',
    dotTypeSquare: 'Square',
    dotTypeDots: 'Dots',
    dotTypeRounded: 'Rounded',
    dotTypeExtraRounded: 'Extra rounded',
    dotTypeClassy: 'Classy',
    dotTypeClassyRounded: 'Classy rounded',

    cornersTitle: 'Corners',
    cornerFrameTitle: 'Corner frame',
    cornerFrameColor: 'Frame color',
    cornerFrameShape: 'Frame shape',
    cornerCenterTitle: 'Corner center',
    cornerCenterColor: 'Center color',
    cornerCenterShape: 'Center shape',
    cornerSquareTypeSquare: 'Square',
    cornerSquareTypeDot: 'Dot',
    cornerSquareTypeExtraRounded: 'Rounded',
    cornerDotTypeSquare: 'Square',
    cornerDotTypeDot: 'Dot',

    backgroundTitle: 'Background',
    transparentBackground: 'Transparent background',
    backgroundColor: 'Background color',

    logoTitle: 'Logo',
    uploadLogo: 'Upload logo',
    logoSize: 'Logo size',
    logoMargin: 'Margin',

    previewTitle: 'Preview',
    downloadPng: 'Download PNG',
    pngFormat: 'PNG format',
    pngDescription: 'Raster image',
    svgFormat: 'SVG format',
    svgDescription: 'Vector image',

    createdWith: 'Created with',
};

// Словарь переводов
export const translations: Record<Language, Translations> = { ru, en };

// Получить перевод по языку
export const getTranslation = (lang: Language): Translations => translations[lang];
