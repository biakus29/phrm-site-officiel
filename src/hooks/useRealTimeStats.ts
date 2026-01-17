import { useState, useEffect } from 'react';

export const useRealTimeStats = () => {
    const [realTimeStats, setRealTimeStats] = useState({
        totalEmployees: 1247,
        activeEmployees: 1180,
        totalCompanies: 523,
        contractsGenerated: 98.5,
        uptime: 99.9
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setRealTimeStats(prev => ({
                ...prev,
                totalEmployees: prev.totalEmployees + Math.floor(Math.random() * 3),
                activeEmployees: prev.activeEmployees + Math.floor(Math.random() * 2),
                totalCompanies: prev.totalCompanies + Math.floor(Math.random() * 2),
                contractsGenerated: Math.min(99.9, prev.contractsGenerated + (Math.random() * 0.1)),
                uptime: Math.max(99.0, Math.min(99.9, prev.uptime + (Math.random() * 0.02 - 0.01)))
            }));
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    return realTimeStats;
};
