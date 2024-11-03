import React from 'react';

interface ScriptCardProps {
    title: string;
    category: string;
    content: string;
    onView: () => void;
    onCopy: () => void;
}

const getCategoryBgColor = (category: string) => {
    switch (category.toLowerCase()) {
        case 'quiropraxia':
            return 'bg-green-50';
        case 'fisioterapia':
            return 'bg-blue-100';
        case 'acupuntura':
            return 'bg-purple-100';
        case 'massoterapia':
            return 'bg-pink-100';
        default:
            return 'bg-white';
    }
};

const ScriptCard: React.FC<ScriptCardProps> = ({ title, category, content, onView, onCopy }) => (
    <div className={`p-4 shadow-lg rounded-lg max-w-xl min-h-[300px] flex flex-col justify-between ${getCategoryBgColor(category)}`}>
        <div>
            <h3 className="text-xl font-semibold truncate">{title}</h3>
            <p className="text-sm text-gray-500">{category}</p>
            <p className="mt-2 text-gray-700 line-clamp-6">{content}</p>
        </div>
        <div className="flex justify-end space-x-2 mt-4">
            <button onClick={onView} className="mb-2 px-2 py-1 text-blue-500 rounded">Visualizar</button>
            <button onClick={onCopy} className="mb-2 px-2 py-1 bg-green-500 text-white rounded">Copiar</button>
        </div>
    </div>
);

export default ScriptCard;