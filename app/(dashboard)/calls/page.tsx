import React from 'react';
import Table from '@/components/table';
import { calls } from '@/lib/dummy-data';

const page = () => {
  return (
    <div className="p-4">
      <h1>Calls</h1>
      <Table title="Calls" data={calls} />
    </div>
  );
};

export default page;
