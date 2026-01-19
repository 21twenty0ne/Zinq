

interface Option<T extends string> {
    value: T;
    label: string;
}

interface SelectProps<T extends string> {
    label: string;
    value: T;
    options: Option<T>[];
    onChange: (value: T) => void;
}

// Кастомный селект в темной теме
export function Select<T extends string>({
    label,
    value,
    options,
    onChange,
}: SelectProps<T>) {
    return (
        <div className="flex items-center justify-between gap-4">
            <label className="text-sm text-slate-300">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value as T)}
                className="px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg
                   text-slate-100 text-sm cursor-pointer
                   focus:outline-none focus:border-violet-500 transition-smooth
                   appearance-none bg-no-repeat bg-right pr-8"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundSize: '16px',
                    backgroundPosition: 'right 8px center',
                }}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
