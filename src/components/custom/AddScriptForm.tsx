import React, { useState } from 'react';

interface AddScriptFormProps {
   isOpen: boolean;
   onClose: () => void;
   onAdd: (newScript: { title: string; category: string; content: string }) => void;
}

const AddScriptForm: React.FC<AddScriptFormProps> = ({ isOpen, onClose, onAdd }) => {
   const [title, setTitle] = useState('');
   const [category, setCategory] = useState('');
   const [content, setContent] = useState('');

   const handleAdd = () => {
      onAdd({ title, category, content });
      onClose();
   };

   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
         <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4">Adicionar Novo Script</h2>
            <input
               type="text"
               placeholder="Título"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               className="w-full mb-2 p-2 border rounded"
            />
            <input
               type="text"
               placeholder="Categoria"
               value={category}
               onChange={(e) => setCategory(e.target.value)}
               className="w-full mb-2 p-2 border rounded"
            />
            <textarea
               placeholder="Conteúdo"
               value={content}
               onChange={(e) => setContent(e.target.value)}
               className="w-full h-40 p-2 border rounded resize-none"
            />
            <div className="flex justify-end mt-4 space-x-2">
               <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancelar</button>
               <button onClick={handleAdd} className="px-4 py-2 bg-green-500 text-white rounded">Adicionar</button>
            </div>
         </div>
      </div>
   );
};

export default AddScriptForm;
