import React from 'react';
import Table from '@/components/table';
import { agents } from '@/lib/dummy-data';

interface IProps {
  searchParams: string;
}

const page = ({ searchParams }: IProps) => {
  return (
    <div>
      <Table title="Agents" data={agents} />
    </div>
  );
};

export default page;
