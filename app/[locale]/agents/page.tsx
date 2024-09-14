import React from 'react';
import Table from '@/components/table';
import { agents } from '@/lib/dummy-data';

interface IProps {}

const page = ({}: IProps) => {
  return (
    <div>
      <Table title="Agents" data={agents} />
    </div>
  );
};

export default page;
