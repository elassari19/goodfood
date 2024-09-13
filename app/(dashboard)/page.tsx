import DashboardCard from '@/components/dashboard-card';
import LineChart from '@/components/line-chart';
import DataTable from '@/components/table';
import { table1, table2 } from '@/lib/dummy-data';

interface IProps {
  params: string;
}

export default async function Home({ params }: IProps) {
  return (
    <div>
      <h1 className="font-bold text-xl py-2">Dashboard</h1>
      <div className="bg-primary-foreground w-full rounded-sm grid grid-cols-10 gap-2 p-2">
        {/* cards */}
        <div className="col-span-4 grid grid-cols-2 gap-2">
          {[
            {
              title: 'IQS',
              value: '96%',
              average: -1,
              score: 242,
              scoreNmae: 'reviews',
            },
            {
              title: 'SCAT',
              value: '84%',
              average: '+4',
              score: 242,
              scoreNmae: 'reviews',
            },
            {
              title: 'Conversations',
              value: 184,
            },
            {
              title: 'Comments',
              value: 296,
            },
          ].map((item) => (
            <DashboardCard
              key={item.title}
              title={item.title}
              value={item.value}
              average={item.average}
              score={item.score}
              scoreName={item.scoreNmae}
            />
          ))}
        </div>
        <div className="col-span-6">
          <LineChart />
        </div>
        <div className="col-span-full">
          <DataTable title="Scores by category" data={table1} />
        </div>
      </div>
      <div className="col-span-full">
        <DataTable title="Scores by reviews" data={table2} />
      </div>
    </div>
  );
}
