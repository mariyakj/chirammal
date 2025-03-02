"use client";
import { useState } from 'react';
import { Download } from 'lucide-react';

const DownloadBrochureButton = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleDownload = async () => {
    try {
      const response = await fetch('/brochures/chirammel-construction-brochure.pdf');
      
      if (!response.ok) {
        throw new Error('Failed to download brochure');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'chirammel-construction-brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setNotificationMessage('Brochure downloaded successfully!');
      setIsError(false);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } catch (error) {
      setNotificationMessage('Failed to download brochure. Please try again later.');
      setIsError(true);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  return (
    <>
      <button
        onClick={handleDownload}
        className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
      >
        <Download className="w-5 h-5 mr-2" />
        Download Brochure
      </button>

      {showNotification && (
        <div className={`fixed bottom-20 right-6 max-w-md p-4 rounded-lg shadow-lg transition-all duration-300 ${
          isError ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
        }`}>
          <p className="text-sm font-medium">{notificationMessage}</p>
        </div>
      )}
    </>
  );
};

export default DownloadBrochureButton;