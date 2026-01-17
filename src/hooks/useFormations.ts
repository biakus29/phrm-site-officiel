import { useState, useEffect } from 'react';
import { collection, query, limit, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

export const useFormations = (count: number = 200) => {
    const [formations, setFormations] = useState<any[]>([]);
    const [loadingFormations, setLoadingFormations] = useState(true);

    useEffect(() => {
        const fetchFormations = async () => {
            try {
                setLoadingFormations(true);
                const q = query(
                    collection(db, 'formations'),
                    limit(count)
                );
                const snap = await getDocs(q);
                const rows = snap.docs.map(d => ({ id: d.id, ...d.data() }));
                const activeRows = rows.filter((r: any) => {
                    const v = r.isActive;
                    return !(v === false || v === 'false' || v === 0 || v === '0');
                });

                const getDateVal = (v: any) => {
                    if (!v) return 0;
                    try {
                        const dt = v.toDate ? v.toDate() : new Date(v);
                        return dt?.getTime?.() || 0;
                    } catch {
                        return 0;
                    }
                };

                activeRows.sort((a: any, b: any) =>
                    getDateVal(b.updatedAt || b.createdAt) - getDateVal(a.updatedAt || a.createdAt)
                );

                setFormations(activeRows);
            } catch (e) {
                console.error('Erreur chargement formations:', e);
            } finally {
                setLoadingFormations(false);
            }
        };
        fetchFormations();
    }, [count]);

    return { formations, loadingFormations };
};
