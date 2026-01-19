import React from 'react';
import { ColorPicker } from '../ui/ColorPicker';
import { Select } from '../ui/Select';
import { useI18n } from '../../i18n';
import type { DotsOptions, DotType } from '../../types/qr';

interface DotsSettingsProps {
    dots: DotsOptions;
    onChange: (dots: DotsOptions) => void;
}

// Настройки точек QR-кода
export const DotsSettings: React.FC<DotsSettingsProps> = ({ dots, onChange }) => {
    const { t } = useI18n();

    const handleColorChange = (color: string) => {
        onChange({ ...dots, color });
    };

    const handleTypeChange = (type: DotType) => {
        onChange({ ...dots, type });
    };

    // Опции с переводами
    const dotTypeOptions: { value: DotType; label: string }[] = [
        { value: 'square', label: t.dotTypeSquare },
        { value: 'dots', label: t.dotTypeDots },
        { value: 'rounded', label: t.dotTypeRounded },
        { value: 'extra-rounded', label: t.dotTypeExtraRounded },
        { value: 'classy', label: t.dotTypeClassy },
        { value: 'classy-rounded', label: t.dotTypeClassyRounded },
    ];

    return (
        <div className="space-y-4">
            <ColorPicker
                label={t.dotsColor}
                value={dots.color}
                onChange={handleColorChange}
            />
            <Select<DotType>
                label={t.dotsShape}
                value={dots.type}
                options={dotTypeOptions}
                onChange={handleTypeChange}
            />
        </div>
    );
};
