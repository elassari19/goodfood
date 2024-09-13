import React from 'react';
import { cn } from '../lib/utils';

interface IProps {
  title: string;
  value: string | number;
  average?: string | number;
  score?: string | number;
  scoreName?: string;
}

const dashboardCard = ({ title, value, average, score, scoreName }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4 bg-white text-center min-h-[8rem]">
      <h4 className="font-bold text-lg">{title}</h4>
      {average ? (
        <div className="flex flex-col gap-4 ">
          <div className="flex justify-center items-center gap-2">
            <div
              className={cn(
                'rounded-full px-4 font-bold text-2xl',
                +average < 0
                  ? 'bg-red-50 text-red-700'
                  : 'bg-green-50 text-green-700'
              )}
            >
              {value}
            </div>
            <div
              className={cn(
                'rounded-full px-2',
                +average < 0
                  ? 'bg-red-50 text-red-700'
                  : 'bg-green-50 text-green-700'
              )}
            >
              {average}
            </div>
          </div>
          <div>
            <span className="font-bold">{score}</span> {scoreName}
          </div>
        </div>
      ) : (
        <div className="w-fit rounded-full px-4 font-bold text-2xl bg-blue-50 text-blue-700">
          {value}
        </div>
      )}
    </div>
  );
};

export default dashboardCard;
