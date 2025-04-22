'use client';

import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="container py-5 mt-5">
      <h1 className="mb-4">Условия использования</h1>
      <div className="card bg-dark border border-secondary mb-4">
        <div className="card-body">
          <p>Данная страница находится в разработке.</p>
          <p>Здесь будут размещены условия использования сервиса K.Consulting.</p>
        </div>
      </div>
      <Link href="/" className="btn btn-outline-danger">
        Вернуться на главную
      </Link>
    </div>
  );
} 