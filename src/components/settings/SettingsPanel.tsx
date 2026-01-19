import React from 'react';
import { Type, Grid3X3, Square, Palette, Image } from 'lucide-react';
import { Accordion, AccordionItem } from '../ui/Accordion';
import { ContentSettings } from './ContentSettings';
import { DotsSettings } from './DotsSettings';
import { CornersSettings } from './CornersSettings';
import { BackgroundSettings } from './BackgroundSettings';
import { LogoSettings } from './LogoSettings';
import { useI18n } from '../../i18n';
import type { QRSettings } from '../../types/qr';

interface SettingsPanelProps {
    settings: QRSettings;
    onSettingsChange: (settings: QRSettings) => void;
}

// Главная панель настроек с аккордеоном
export const SettingsPanel: React.FC<SettingsPanelProps> = ({
    settings,
    onSettingsChange,
}) => {
    const { t } = useI18n();

    // Хелпер для частичного обновления настроек
    const updateSettings = (partial: Partial<QRSettings>) => {
        onSettingsChange({ ...settings, ...partial });
    };

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-100 mb-4">{t.settingsTitle}</h2>

            <Accordion>
                {/* Контент */}
                <AccordionItem
                    title={t.contentTitle}
                    icon={<Type className="w-5 h-5" />}
                    defaultOpen={true}
                >
                    <ContentSettings
                        data={settings.data}
                        onChange={(data) => updateSettings({ data })}
                    />
                </AccordionItem>

                {/* Точки */}
                <AccordionItem
                    title={t.dotsTitle}
                    icon={<Grid3X3 className="w-5 h-5" />}
                >
                    <DotsSettings
                        dots={settings.dots}
                        onChange={(dots) => updateSettings({ dots })}
                    />
                </AccordionItem>

                {/* Углы */}
                <AccordionItem
                    title={t.cornersTitle}
                    icon={<Square className="w-5 h-5" />}
                >
                    <CornersSettings
                        cornerSquare={settings.cornerSquare}
                        cornerDot={settings.cornerDot}
                        onCornerSquareChange={(cornerSquare) => updateSettings({ cornerSquare })}
                        onCornerDotChange={(cornerDot) => updateSettings({ cornerDot })}
                    />
                </AccordionItem>

                {/* Фон */}
                <AccordionItem
                    title={t.backgroundTitle}
                    icon={<Palette className="w-5 h-5" />}
                >
                    <BackgroundSettings
                        background={settings.background}
                        onChange={(background) => updateSettings({ background })}
                    />
                </AccordionItem>

                {/* Логотип */}
                <AccordionItem
                    title={t.logoTitle}
                    icon={<Image className="w-5 h-5" />}
                >
                    <LogoSettings
                        image={settings.image}
                        onChange={(image) => updateSettings({ image })}
                    />
                </AccordionItem>
            </Accordion>
        </div>
    );
};
