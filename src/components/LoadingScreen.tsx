'use client';

interface LoadingScreenProps {
  isVisible: boolean;
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  if (!isVisible) return null;

  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark"
      style={{ zIndex: 9999 }}
    >
      <div className="text-center">
        <div className="mb-4">
          <h1 className="display-4 fw-bold text-danger">K.Consulting</h1>
        </div>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </div>
      </div>
    </div>
  );
} 