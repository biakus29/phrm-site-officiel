import * as React from 'react';
import { formatDate } from '../../utils/date';

interface FormationModalProps {
    formation: any;
    onClose: () => void;
}

export const FormationModal: React.FC<FormationModalProps> = ({ formation, onClose }) => {
    if (!formation) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-gray-100">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <h3 className="text-xl font-semibold text-phrm-dark">{formation.title || 'Détail de la formation'}</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                    >
                        ×
                    </button>
                </div>
                <div className="px-6 py-5 space-y-4">
                    <div className="flex items-center justify-between gap-3">
                        <span className={`px-2 py-0.5 text-xs rounded-full ${((formation.type || '').toLowerCase() === 'initiale') ? 'bg-indigo-100 text-indigo-700' : 'bg-purple-100 text-purple-700'}`}>
                            {(formation.type || '').toString().toLowerCase() === 'initiale' ? 'Formation initiale' : 'Formation continue'}
                        </span>
                        <span className="text-xs text-gray-500">
                            MAJ : {formatDate(formation.updatedAt || formation.createdAt)}
                        </span>
                    </div>
                    <p className="text-sm text-gray-600">
                        <span className="font-medium">Durée :</span> {formation.duree || 'Non précisée'}
                    </p>
                    <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">Description</h4>
                        <p className="text-sm text-gray-700 whitespace-pre-line">{(formation.description || '').toString()}</p>
                    </div>
                    {Array.isArray(formation.prerequis) && formation.prerequis.length > 0 && (
                        <div>
                            <h4 className="text-sm font-semibold text-gray-800 mb-1">Prérequis</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                {formation.prerequis.map((p: any, idx: number) => (
                                    <li key={idx}>{p}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {Array.isArray(formation.contenu) && formation.contenu.length > 0 && (
                        <div>
                            <h4 className="text-sm font-semibold text-gray-800 mb-1">Contenu de la formation</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                {formation.contenu.map((c: any, idx: number) => (
                                    <li key={idx}>{c}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
