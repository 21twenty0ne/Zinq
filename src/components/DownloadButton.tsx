import React, { useState } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { useI18n } from '../i18n';
import type { ExportFormat } from '../types/qr';

interface DownloadButtonProps {
    onDownload: (format: ExportFormat) => void;
}

// Кнопка скачивания с выбором формата
export const DownloadButton: React.FC<DownloadButtonProps> = ({ onDownload }) => {
    const { t } = useI18n();
    const [isOpen, setIsOpen] = useState(false);

    const handleDownload = (format: ExportFormat) => {
        onDownload(format);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {/* Основная кнопка */}
            <div className="flex">
                <button
                    type="button"
                    onClick={() => handleDownload('png')}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3
                     bg-violet-600 hover:bg-violet-500 text-white font-medium
                     rounded-l-xl transition-smooth glow"
                >
                    <Download className="w-5 h-5" />
                    <span>{t.downloadPng}</span>
                </button>

                {/* Кнопка раскрытия меню */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="px-3 py-3 bg-violet-700 hover:bg-violet-600 text-white
                     rounded-r-xl border-l border-violet-500 transition-smooth"
                >
                    <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                            }`}
                    />
                </button>
            </div>

            {/* Выпадающее меню */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 z-10">
                    <div className="glass rounded-xl overflow-hidden shadow-xl">
                        <button
                            type="button"
                            onClick={() => handleDownload('png')}
                            className="w-full px-4 py-3 text-left text-slate-100 
                         hover:bg-slate-700/50 transition-smooth flex items-center gap-3"
                        >
                            <span className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center text-xs font-bold text-violet-400">
                                PNG
                            </span>
                            <div>
                                <div className="font-medium">{t.pngFormat}</div>
                                <div className="text-xs text-slate-400">{t.pngDescription}</div>
                            </div>
                        </button>
                        <button
                            type="button"
                            onClick={() => handleDownload('svg')}
                            className="w-full px-4 py-3 text-left text-slate-100 
                         hover:bg-slate-700/50 transition-smooth flex items-center gap-3
                         border-t border-slate-700/50"
                        >
                            <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-xs font-bold text-emerald-400">
                                SVG
                            </span>
                            <div>
                                <div className="font-medium">{t.svgFormat}</div>
                                <div className="text-xs text-slate-400">{t.svgDescription}</div>
                            </div>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
