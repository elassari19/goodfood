import React from 'react';
import PieCharts from '@/components/pie-charts';
import { agents } from '../../../../lib/dummy-data';
import Table from '@/components/table';

interface IProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: IProps) => {
  const agent = agents.filter((item) => item.id == params.id)[0];
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl mb-6">Agent Details: {params.id}</h1>

      {/* Cards Section */}
      <div className="bg-primary-foreground py-2 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold text-lg mb-2">
            Agent Name: <span>{agent?.name || ''}</span>
          </h2>
          <h2 className="font-semibold text-lg mb-2">
            Agent Date: <span>{new Date().toLocaleDateString()}</span>
          </h2>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold text-xl mb-2">Reviewed conversations</h2>
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-bold">Auto</p>
              <div className="flex items-center gap-2">
                <p className="font-bold text-4xl">2.5M</p>
                <p className="text-sm">+2</p>
              </div>
              <p className="text-gray-700">Coverge 97%</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">ManualQA</p>
              <div className="flex items-center gap-2">
                <p className="font-bold text-4xl">2.5M</p>
                <p className="text-sm">-2</p>
              </div>
              <p className="text-gray-700">7%</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <PieCharts />
      </div>

      <div>
        <Table title="" data={agents} />
      </div>
    </div>
  );
};

export default Page;
