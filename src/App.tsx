import { useCallback } from 'react';
import { QrCode } from 'lucide-react';
import { SettingsPanel } from './components/settings/SettingsPanel';
import { QRCodePreview } from './components/QRCodePreview';
import { DownloadButton } from './components/DownloadButton';
import { LanguageSwitcher } from './components/ui/LanguageSwitcher';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useQRCode } from './hooks/useQRCode';
import { useI18n } from './i18n';
import type { QRSettings, ExportFormat } from './types/qr';
import { defaultQRSettings } from './types/qr';

function App() {
  const { t } = useI18n();

  // Сохраняем настройки в localStorage для персистентности
  const [settings, setSettings] = useLocalStorage<QRSettings>(
    'zinq-qr-settings',
    defaultQRSettings
  );

  // Хук для управления QR-кодом и скачивания
  const { download } = useQRCode(settings);

  // Мемоизируем обработчик изменения настроек
  const handleSettingsChange = useCallback((newSettings: QRSettings) => {
    setSettings(newSettings);
  }, [setSettings]);

  // Мемоизируем обработчик скачивания
  const handleDownload = useCallback((format: ExportFormat) => {
    download(format);
  }, [download]);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-violet-500/20 rounded-xl">
              <QrCode className="w-6 h-6 text-violet-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-100">{t.appName}</h1>
              <p className="text-xs text-slate-400">{t.appDescription}</p>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Левая колонка - Настройки */}
          <div className="order-2 lg:order-1">
            <SettingsPanel
              settings={settings}
              onSettingsChange={handleSettingsChange}
            />
          </div>

          {/* Правая колонка - Превью */}
          <div className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-8 space-y-6">
              {/* Превью QR-кода */}
              <div className="glass rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-slate-100 mb-6 text-center">
                  {t.previewTitle}
                </h2>
                <QRCodePreview settings={settings} />
              </div>

              {/* Кнопка скачивания */}
              <DownloadButton onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-slate-500 text-sm space-y-2">
          <p>
            {t.createdWith}{' '}
            <a
              href="https://github.com/kozakdenys/qr-code-styling"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 transition-smooth"
            >
              qr-code-styling
            </a>
          </p>
          <p>
            <a
              href="https://github.com/21twenty0ne"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-violet-400 transition-smooth"
            >
              @21twenty0ne
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
