import React, { useState } from 'react';

interface ModalProps {
    title: string;
    content: string;
    isOpen: boolean;
    onClose: () => void;
    onSave: (updatedContent: string) => void;
}

const Modal: React.FC<ModalProps> = ({ title, content, isOpen, onClose, onSave }) => {
    const [editableContent, setEditableContent] = useState(content);

    if (!isOpen) return null;

    const handleSave = () => {
        onSave(editableContent);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-lg w-full">
                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                <textarea
                    value={editableContent}
                    onChange={(e) => setEditableContent(e.target.value)}
                    className="w-full h-40 p-2 border rounded resize-none"
                />
                <div className="flex justify-end mt-4 space-x-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancelar</button>
                    <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">Salvar</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
