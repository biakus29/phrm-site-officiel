import { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

export const useBlog = (count: number = 6) => {
    const [recentPosts, setRecentPosts] = useState<any[]>([]);
    const [loadingPosts, setLoadingPosts] = useState(true);

    useEffect(() => {
        const fetchRecentPosts = async () => {
            try {
                setLoadingPosts(true);
                const q = query(
                    collection(db, 'blogPosts'),
                    orderBy('createdAt', 'desc'),
                    limit(count)
                );
                const querySnapshot = await getDocs(q);
                const posts = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setRecentPosts(posts);
            } catch (error) {
                console.error('Erreur lors du chargement des articles:', error);
            } finally {
                setLoadingPosts(false);
            }
        };

        fetchRecentPosts();
    }, [count]);

    return { recentPosts, loadingPosts };
};
