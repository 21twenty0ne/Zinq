import React from 'react';
import { Link } from 'lucide-react';
import { useI18n } from '../../i18n';

interface ContentSettingsProps {
    data: string;
    onChange: (data: string) => void;
}

// Настройки контента QR-кода (ссылка или текст)
export const ContentSettings: React.FC<ContentSettingsProps> = ({
    data,
    onChange,
}) => {
    const { t } = useI18n();

    return (
        <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                <Link className="w-4 h-4" />
                <span>{t.contentHint}</span>
            </div>
            <textarea
                value={data}
                onChange={(e) => onChange(e.target.value)}
                placeholder={t.contentPlaceholder}
                rows={3}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg
                   text-slate-100 placeholder-slate-500 resize-none
                   focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500
                   transition-smooth"
            />
            <p className="text-xs text-slate-500">
                {t.contentDescription}
            </p>
        </div>
    );
};
