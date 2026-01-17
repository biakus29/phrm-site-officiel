import * as React from 'react';
import { useState } from 'react';

type TruncatedTextProps = {
    text: string;
    maxChars?: number;
};

export const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxChars = 380 }) => {
    const [expanded, setExpanded] = useState(false);
    const isLong = text.length > maxChars;
    const displayText = expanded || !isLong ? text : text.slice(0, maxChars) + '…';
    return (
        <div>
            <p className="text-gray-700 leading-relaxed">{displayText}</p>
            {isLong && (
                <button
                    className="mt-3 text-phrm-dark font-semibold hover:underline"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? 'Voir moins' : 'Lire plus'}
                </button>
            )}
        </div>
    );
};
