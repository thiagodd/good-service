import React, { useState, useEffect } from 'react';

interface AddScriptFormProps {
   isOpen: boolean;
   onClose: () => void;
   baseContent: string;
}

const ConfirmForm: React.FC<AddScriptFormProps> = ({ isOpen, onClose }) => {
   const [dateAndTime, setDateAndTime] = useState('00/11/2024 00:00');
   const [profissional, setProfissional] = useState('');
   const [content, setContent] = useState('');

   useEffect(() => {
      const template = `
          Seu agendamento está confirmado! Aqui estão os detalhes:
          *📅 Data:* ${dateAndTime}
          *Profissional:* ${profissional}
          *📍 Endereço:* Rua Vicente Romano, 16, Mooca – São Paulo – SP - CEP 03124-050
          *Atenção:*
          Trazer exames;
          Vir com roupas confortáveis que permitam movimento;
          A consulta de avaliação dura cerca de 1 hora.
          Alterações de horário serão bem-vindas com mais de 24 horas de antecedência!
          Estamos ansiosos para te receber!
    `;
      setContent(template);
   }, [dateAndTime, profissional]);

   if (!isOpen) return null;

   return (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
             <h2 className="text-xl font-semibold mb-4">Confirmar Agendamento</h2>
             <input
                 type="text"
                 placeholder="Data e Hora"
                 value={dateAndTime}
                 onChange={(e) => setDateAndTime(e.target.value)}
                 className="w-full mb-2 p-2 border rounded"
             />
             <select
                 value={profissional}
                 onChange={(e) => setProfissional(e.target.value)}
                 className="w-full mb-2 p-2 border rounded"
             >
                <option value="" disabled hidden>
                   Selecione um profissional
                </option>
                <option value="Dr. Pablo Blas Valverde">Dr. Pablo Blas Valverde</option>
                <option value="Wellington Matos">Wellington Matos</option>
                <option value="Cibele Ferreira">Cibele Ferreira</option>
                <option value="Vitoria Ferraz">Vitoria Ferraz</option>
             </select>
             <textarea
                 placeholder="Conteúdo"
                 value={content}
                 onChange={(e) => setContent(e.target.value)}
                 className="w-full h-40 p-2 border rounded resize-none"
             />
             <div className="flex justify-end mt-4 space-x-2">
                <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
                   Cancelar
                </button>
                {/*<button onClick={} className="px-4 py-2 bg-green-500 text-white rounded">Adicionar</button>*/}
             </div>
          </div>
       </div>
   );
};

export default ConfirmForm;