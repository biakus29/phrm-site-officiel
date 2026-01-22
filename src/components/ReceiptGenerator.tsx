import React, { useState, useRef } from 'react';
import { Download, Printer } from 'lucide-react';

interface ReceiptData {
    clientName: string;
    clientAddress: string;
    amount: string;
    description: string;
    paymentMethod: string;
    receiptNumber: string;
    date: string;
}

const ReceiptGenerator: React.FC = () => {
    const [receiptData, setReceiptData] = useState<ReceiptData>({
        clientName: '',
        clientAddress: '',
        amount: '',
        description: '',
        paymentMethod: 'Espèces',
        receiptNumber: `REC-${Date.now()}`,
        date: new Date().toLocaleDateString('fr-FR'),
    });

    const receiptRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setReceiptData(prev => ({ ...prev, [name]: value }));
    };

    const handlePrint = () => {
        window.print();
    };

    const handleDownload = () => {
        const receiptElement = receiptRef.current;
        if (!receiptElement) return;

        // Créer un nouveau fenêtre pour l'impression
        const printWindow = window.open('', '_blank');
        if (!printWindow) return;

        printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Reçu ${receiptData.receiptNumber}</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              padding: 20px;
              max-width: 800px;
              margin: 0 auto;
            }
            .receipt {
              border: 2px solid #333;
              padding: 30px;
              background: white;
            }
            .header {
              text-align: center;
              border-bottom: 3px solid #4F46E5;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .company-name {
              font-size: 32px;
              font-weight: bold;
              color: #4F46E5;
              margin-bottom: 5px;
            }
            .receipt-title {
              font-size: 24px;
              color: #333;
              margin-top: 10px;
            }
            .info-row {
              display: flex;
              justify-content: space-between;
              margin-bottom: 15px;
              padding: 10px;
              background: #f9fafb;
            }
            .info-label {
              font-weight: bold;
              color: #666;
            }
            .amount-section {
              background: #4F46E5;
              color: white;
              padding: 20px;
              margin: 20px 0;
              text-align: center;
              border-radius: 8px;
            }
            .amount {
              font-size: 36px;
              font-weight: bold;
            }
            .footer {
              margin-top: 40px;
              padding-top: 20px;
              border-top: 2px solid #e5e7eb;
              text-align: center;
              color: #666;
            }
          </style>
        </head>
        <body>
          ${receiptElement.innerHTML}
        </body>
      </html>
    `);
        printWindow.document.close();
        printWindow.print();
    };

    const handleReset = () => {
        setReceiptData({
            clientName: '',
            clientAddress: '',
            amount: '',
            description: '',
            paymentMethod: 'Espèces',
            receiptNumber: `REC-${Date.now()}`,
            date: new Date().toLocaleDateString('fr-FR'),
        });
    };

    return (
        <div className="receipt-generator">
            <style>{`
        .receipt-generator {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .generator-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .generator-header h1 {
          font-size: 2.5rem;
          color: #1e40af;
          margin-bottom: 10px;
        }

        .generator-header p {
          color: #64748b;
          font-size: 1.1rem;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        @media (max-width: 968px) {
          .content-wrapper {
            grid-template-columns: 1fr;
          }
        }

        .form-section {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .form-section h2 {
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: #1e293b;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #334155;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 10px 15px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #4F46E5;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .button-group {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .btn {
          flex: 1;
          padding: 12px 20px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s;
        }

        .btn-primary {
          background: #4F46E5;
          color: white;
        }

        .btn-primary:hover {
          background: #4338CA;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
        }

        .btn-secondary {
          background: #64748b;
          color: white;
        }

        .btn-secondary:hover {
          background: #475569;
          transform: translateY(-2px);
        }

        .btn-reset {
          background: #ef4444;
          color: white;
        }

        .btn-reset:hover {
          background: #dc2626;
        }

        .preview-section {
          background: #f8fafc;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .preview-section h2 {
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: #1e293b;
        }

        .receipt {
          background: white;
          border: 2px solid #333;
          padding: 30px;
          border-radius: 8px;
        }

        .receipt-header {
          text-align: center;
          border-bottom: 3px solid #4F46E5;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }

        .company-name {
          font-size: 2rem;
          font-weight: bold;
          color: #4F46E5;
          margin-bottom: 5px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .company-tagline {
          color: #64748b;
          font-size: 0.9rem;
          margin-bottom: 15px;
        }

        .receipt-title {
          font-size: 1.5rem;
          color: #333;
          margin-top: 10px;
          font-weight: 600;
        }

        .receipt-info {
          margin-bottom: 20px;
        }

        .info-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          padding: 10px;
          background: #f9fafb;
          border-radius: 6px;
        }

        .info-label {
          font-weight: bold;
          color: #64748b;
        }

        .info-value {
          color: #1e293b;
          text-align: right;
        }

        .amount-section {
          background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
          color: white;
          padding: 25px;
          margin: 25px 0;
          text-align: center;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
        }

        .amount-label {
          font-size: 0.9rem;
          margin-bottom: 10px;
          opacity: 0.9;
        }

        .amount {
          font-size: 2.5rem;
          font-weight: bold;
        }

        .receipt-footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 2px solid #e5e7eb;
          text-align: center;
        }

        .footer-text {
          color: #64748b;
          font-size: 0.9rem;
          margin-bottom: 10px;
        }

        .signature-line {
          margin-top: 40px;
          padding-top: 10px;
          border-top: 2px solid #333;
          width: 200px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          color: #64748b;
          font-size: 0.85rem;
        }

        @media print {
          .form-section,
          .preview-section h2,
          .button-group {
            display: none !important;
          }
          
          .preview-section {
            box-shadow: none;
            background: white;
            padding: 0;
          }
          
          .receipt {
            box-shadow: none;
          }
        }
      `}</style>

            <div className="generator-header">
                <h1>🧾 Générateur de Reçus</h1>
                <p>Tony-Tech - Solutions Professionnelles</p>
            </div>

            <div className="content-wrapper">
                {/* Formulaire */}
                <div className="form-section">
                    <h2>📝 Informations du Reçu</h2>

                    <div className="form-group">
                        <label>Numéro de reçu</label>
                        <input
                            type="text"
                            name="receiptNumber"
                            value={receiptData.receiptNumber}
                            onChange={handleInputChange}
                            placeholder="REC-123456"
                        />
                    </div>

                    <div className="form-group">
                        <label>Date</label>
                        <input
                            type="text"
                            name="date"
                            value={receiptData.date}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Nom du client</label>
                        <input
                            type="text"
                            name="clientName"
                            value={receiptData.clientName}
                            onChange={handleInputChange}
                            placeholder="Jean Dupont"
                        />
                    </div>

                    <div className="form-group">
                        <label>Adresse du client</label>
                        <input
                            type="text"
                            name="clientAddress"
                            value={receiptData.clientAddress}
                            onChange={handleInputChange}
                            placeholder="123 Rue Example, Ville"
                        />
                    </div>

                    <div className="form-group">
                        <label>Montant (FCFA)</label>
                        <input
                            type="text"
                            name="amount"
                            value={receiptData.amount}
                            onChange={handleInputChange}
                            placeholder="50000"
                        />
                    </div>

                    <div className="form-group">
                        <label>Description du paiement</label>
                        <textarea
                            name="description"
                            value={receiptData.description}
                            onChange={handleInputChange}
                            placeholder="Description du service ou produit..."
                        />
                    </div>

                    <div className="form-group">
                        <label>Mode de paiement</label>
                        <select
                            name="paymentMethod"
                            value={receiptData.paymentMethod}
                            onChange={handleInputChange}
                        >
                            <option value="Espèces">Espèces</option>
                            <option value="Virement bancaire">Virement bancaire</option>
                            <option value="Chèque">Chèque</option>
                            <option value="Mobile Money">Mobile Money</option>
                            <option value="Carte bancaire">Carte bancaire</option>
                        </select>
                    </div>

                    <div className="button-group">
                        <button className="btn btn-primary" onClick={handlePrint}>
                            <Printer size={20} />
                            Imprimer
                        </button>
                        <button className="btn btn-secondary" onClick={handleDownload}>
                            <Download size={20} />
                            Télécharger
                        </button>
                        <button className="btn btn-reset" onClick={handleReset}>
                            Réinitialiser
                        </button>
                    </div>
                </div>

                {/* Prévisualisation du reçu */}
                <div className="preview-section">
                    <h2>👁️ Prévisualisation</h2>

                    <div ref={receiptRef} className="receipt">
                        <div className="receipt-header">
                            <div className="company-name">Tony-Tech</div>
                            <div className="company-tagline">Solutions Technologiques Professionnelles</div>
                            <div className="receipt-title">REÇU DE PAIEMENT</div>
                        </div>

                        <div className="receipt-info">
                            <div className="info-row">
                                <span className="info-label">Numéro de reçu:</span>
                                <span className="info-value">{receiptData.receiptNumber || '—'}</span>
                            </div>

                            <div className="info-row">
                                <span className="info-label">Date:</span>
                                <span className="info-value">{receiptData.date}</span>
                            </div>

                            <div className="info-row">
                                <span className="info-label">Client:</span>
                                <span className="info-value">{receiptData.clientName || '—'}</span>
                            </div>

                            <div className="info-row">
                                <span className="info-label">Adresse:</span>
                                <span className="info-value">{receiptData.clientAddress || '—'}</span>
                            </div>

                            <div className="info-row">
                                <span className="info-label">Mode de paiement:</span>
                                <span className="info-value">{receiptData.paymentMethod}</span>
                            </div>
                        </div>

                        <div className="amount-section">
                            <div className="amount-label">MONTANT PAYÉ</div>
                            <div className="amount">
                                {receiptData.amount ? `${parseInt(receiptData.amount).toLocaleString('fr-FR')} FCFA` : '0 FCFA'}
                            </div>
                        </div>

                        {receiptData.description && (
                            <div className="info-row">
                                <span className="info-label">Description:</span>
                                <span className="info-value" style={{ maxWidth: '70%', textAlign: 'right' }}>
                                    {receiptData.description}
                                </span>
                            </div>
                        )}

                        <div className="receipt-footer">
                            <div className="footer-text">
                                Merci pour votre confiance !
                            </div>
                            <div className="footer-text">
                                📧 contact@tony-tech.com | 📱 +XXX XXX XXX XXX
                            </div>
                            <div className="signature-line">
                                Signature autorisée
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReceiptGenerator;
