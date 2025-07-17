import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="loading-text">Loading Portfolio...</p>
      </div>
      
      <style jsx>{`
        .loading-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        
        .loading-spinner {
          text-align: center;
          animation: fadeIn 0.5s ease-in;
        }
        
        .spinner-ring {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
          margin-bottom: 2rem;
        }
        
        .spinner-ring div {
          box-sizing: border-box;
          display: block;
          position: absolute;
          width: 64px;
          height: 64px;
          margin: 8px;
          border: 8px solid #3b82f6;
          border-radius: 50%;
          animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          border-color: #3b82f6 transparent transparent transparent;
        }
        
        .spinner-ring div:nth-child(1) {
          animation-delay: -0.45s;
        }
        
        .spinner-ring div:nth-child(2) {
          animation-delay: -0.3s;
        }
        
        .spinner-ring div:nth-child(3) {
          animation-delay: -0.15s;
        }
        
        .loading-text {
          font-size: 1.2rem;
          font-weight: 500;
          color: #475569;
          margin: 0;
          animation: pulse 1.5s ease-in-out infinite;
        }
        
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;