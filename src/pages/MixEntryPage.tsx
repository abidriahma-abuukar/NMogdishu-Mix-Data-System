import React from 'react';
import Header from '../components/Layout/Header';
import MixEntryForm from '../components/Forms/MixEntryForm';

const MixEntryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mix Entry</h1>
          <p className="mt-2 text-gray-600">
            Enter concrete mix data with precise measurements and specifications.
          </p>
        </div>
        <MixEntryForm />
      </main>
    </div>
  );
};

export default MixEntryPage;