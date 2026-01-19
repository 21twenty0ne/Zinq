import { useState, useEffect, useCallback } from 'react';

// Хук для сохранения и загрузки данных из localStorage
export function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
    // Ленивая инициализация - читаем из localStorage только при первом рендере
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn(`Ошибка чтения localStorage для ключа "${key}":`, error);
            return initialValue;
        }
    });

    // Обновление localStorage при изменении значения
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.warn(`Ошибка записи в localStorage для ключа "${key}":`, error);
        }
    }, [key, storedValue]);

    // Мемоизированный сеттер
    const setValue = useCallback((value: T | ((prev: T) => T)) => {
        setStoredValue((prev) => {
            const nextValue = value instanceof Function ? value(prev) : value;
            return nextValue;
        });
    }, []);

    return [storedValue, setValue];
}
