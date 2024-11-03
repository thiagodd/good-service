import React, {useState} from 'react';
import Modal from './Modal';
import SearchBar from './SearchBar';
import AddScriptForm from './AddScriptForm';
import ScriptCard from './ScriptCard';
import scriptsData from '../../data/scripts.json';

import Image from "next/image";
import ConfirmForm from "@/components/custom/ConfirmForm";


interface Script {
    id: number;
    title: string;
    category: string;
    content: string;
}

const categories: string[] = ['Todas', 'Saudação', 'Quiropraxia', 'Fisioterapia', 'Acupuntura', 'Massoterapia'];

const Dashhome: React.FC = () => {
    const [scripts, setScripts] = useState<Script[]>(scriptsData as Script[]);
    const [search, setSearch] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
    const [selectedScript, setSelectedScript] = useState<Script | null>(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);

    const filteredScripts = scripts.filter((script) =>
        (selectedCategory === 'Todas' || script.category === selectedCategory) &&
        (script.title.toLowerCase().includes(search.toLowerCase()) ||
            script.content.toLowerCase().includes(search.toLowerCase()))
    );

    const handleSaveScript = (updatedContent: string): void => {
        setScripts((prevScripts) =>
            prevScripts.map((script) =>
                script.id === selectedScript?.id ? { ...script, content: updatedContent } : script
            )
        );
        setSelectedScript(null);
    };

    const handleAddScript = (newScript: Omit<Script, 'id'>): void => {
        setScripts([...scripts, { id: scripts.length + 1, ...newScript }]);
    };

    return (

        <div className="bg-gray-100 rounded-lg p-8">
            <nav className="flex justify-between items-center border-b-0 border-neutral-50 mb-10">
                <Image src="/logo.svg" height={56} width={152} alt="Logo"/>
                <button onClick={() => setIsConfirmModalOpen(true)}
                        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Confirmar Agendamento
                </button>
            </nav>

            <div className="bg-white rounded-lg p-8">
                <SearchBar value={search} onChange={setSearch}/>
                <div className="flex justify-between items-center border-b-0 border-neutral-50 mb-10">
                    <div className="flex space-x-2 my-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded ${
                                    selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <button onClick={() => setIsAddModalOpen(true)}
                            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Adicionar Script
                    </button>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredScripts.map((script) => (
                        <ScriptCard
                            key={script.id}
                            title={script.title}
                            category={script.category}
                            content={script.content}
                            onView={() => setSelectedScript(script)}
                            onCopy={() => navigator.clipboard.writeText(script.content)}
                        />
                    ))}
                </div>

                {selectedScript && (
                    <Modal
                        title={selectedScript.title}
                        content={selectedScript.content}
                        isOpen={!!selectedScript}
                        onClose={() => setSelectedScript(null)}
                        onSave={handleSaveScript}
                    />
                )}

                <AddScriptForm
                    isOpen={isAddModalOpen}
                    onClose={() => setIsAddModalOpen(false)}
                    onAdd={handleAddScript}
                />
                <ConfirmForm
                    isOpen={isConfirmModalOpen}
                    onClose={() => setIsConfirmModalOpen(false)}
                    baseContent="Deseja agendar uma consulta?"
/>
            </div>

        </div>
    );
};

export default Dashhome;
