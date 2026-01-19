import React from 'react';
import { ColorPicker } from '../ui/ColorPicker';
import { Select } from '../ui/Select';
import { useI18n } from '../../i18n';
import type {
    CornerSquareOptions,
    CornerDotOptions,
    CornerSquareType,
    CornerDotType,
} from '../../types/qr';

interface CornersSettingsProps {
    cornerSquare: CornerSquareOptions;
    cornerDot: CornerDotOptions;
    onCornerSquareChange: (options: CornerSquareOptions) => void;
    onCornerDotChange: (options: CornerDotOptions) => void;
}

// Настройки углов QR-кода (внешняя рамка и внутренняя точка)
export const CornersSettings: React.FC<CornersSettingsProps> = ({
    cornerSquare,
    cornerDot,
    onCornerSquareChange,
    onCornerDotChange,
}) => {
    const { t } = useI18n();

    // Опции с переводами
    const cornerSquareTypeOptions: { value: CornerSquareType; label: string }[] = [
        { value: 'square', label: t.cornerSquareTypeSquare },
        { value: 'dot', label: t.cornerSquareTypeDot },
        { value: 'extra-rounded', label: t.cornerSquareTypeExtraRounded },
    ];

    const cornerDotTypeOptions: { value: CornerDotType; label: string }[] = [
        { value: 'square', label: t.cornerDotTypeSquare },
        { value: 'dot', label: t.cornerDotTypeDot },
    ];

    return (
        <div className="space-y-6">
            {/* Внешние углы (рамки) */}
            <div className="space-y-4">
                <h4 className="text-sm font-medium text-slate-200">{t.cornerFrameTitle}</h4>
                <ColorPicker
                    label={t.cornerFrameColor}
                    value={cornerSquare.color}
                    onChange={(color) => onCornerSquareChange({ ...cornerSquare, color })}
                />
                <Select<CornerSquareType>
                    label={t.cornerFrameShape}
                    value={cornerSquare.type}
                    options={cornerSquareTypeOptions}
                    onChange={(type) => onCornerSquareChange({ ...cornerSquare, type })}
                />
            </div>

            <div className="border-t border-slate-700/50" />

            {/* Внутренние точки углов */}
            <div className="space-y-4">
                <h4 className="text-sm font-medium text-slate-200">{t.cornerCenterTitle}</h4>
                <ColorPicker
                    label={t.cornerCenterColor}
                    value={cornerDot.color}
                    onChange={(color) => onCornerDotChange({ ...cornerDot, color })}
                />
                <Select<CornerDotType>
                    label={t.cornerCenterShape}
                    value={cornerDot.type}
                    options={cornerDotTypeOptions}
                    onChange={(type) => onCornerDotChange({ ...cornerDot, type })}
                />
            </div>
        </div>
    );
};
