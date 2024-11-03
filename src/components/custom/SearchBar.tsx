import React from 'react';

interface SearchBarProps {
    value: string;
    onChange: (newValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
    <input
        type="text"
        placeholder="Buscar scripts..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded-lg mb-4"
    />
);

export default SearchBar;
