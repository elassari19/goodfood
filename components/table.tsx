'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Download,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import useSortedData from '@/hooks/use-sorted-data';
import { handleDownload } from '@/lib/download';
import usePagination from '@/hooks/use-pagination';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface TableProps {
  title: string;
  data: Array<{
    name: string;
    key01: number;
    key02: number;
    key03: number;
    key04: number;
    key05: number;
    key06: number;
    key07: number;
    id?: string;
  }>;
}

const DataTable = ({ title, data }: TableProps) => {
  const pathName = usePathname();

  const t = useTranslations('');
  const itemsPerPage = 10;
  const { sortedData, sortOrder, handleSort } = useSortedData(data, 'key07');
  const { currentPage, totalPages, nextPage, prevPage, setPage, getPageItems } =
    usePagination({
      totalItems: data.length,
      itemsPerPage: 10,
      initialPage: 1,
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="w-full bg-white p-4">
      <div className="flex justify-between items-center gap-2 mb-4">
        <h2 className="flex-1 text-xl font-bold">{title}</h2>

        <Tabs defaultValue="daily">
          <TabsList>
            <TabsTrigger value="daily">{t('Daily')}</TabsTrigger>
            <TabsTrigger value="weekly">{t('Weekly')}</TabsTrigger>
          </TabsList>
        </Tabs>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleDownload(data)}
        >
          <Download className="h-4 w-4" />
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="" onClick={() => handleSort('name')}>
              Reviewers
            </TableHead>
            <TableHead className="text-center">Ratings</TableHead>
            <TableHead className="text-center">Comments</TableHead>
            <TableHead className="text-center">Tone</TableHead>
            <TableHead className="text-center">Service & Reputation</TableHead>
            <TableHead className="text-center">Efficiency</TableHead>
            <TableHead className="text-center">Tone</TableHead>
            <TableHead
              className="text-center cursor-pointer"
              onClick={() => handleSort('key07')}
            >
              Score
              {sortOrder === 'asc' && (
                <ArrowUp className="inline ml-1 h-4 w-4" />
              )}
              {sortOrder === 'desc' && (
                <ArrowDown className="inline ml-1 h-4 w-4" />
              )}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((row, index) => (
            <TableRow
              key={index}
              onClick={() => (window.location.href = `/agents/${row.id}`)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <TableCell className="p-0 max-w-52">
                <div className="flex items-center justify-start">
                  <div className="w-8 h-8 p-0 rounded-full bg-gray-200 mr-2"></div>
                  {row.name.split('-')[0]}
                </div>
              </TableCell>
              <TableCell className="text-center">{row.key01}</TableCell>
              <TableCell className="text-center">{row.key02}</TableCell>
              <TableCell
                className={`text-center ${
                  row.key03 < 50
                    ? 'bg-red-50'
                    : row.key03 < 80
                    ? 'bg-green-50'
                    : 'bg-green-200'
                }`}
              >
                {row.key03} %
              </TableCell>
              <TableCell
                className={`text-center ${
                  row.key04 < 50
                    ? 'bg-red-50'
                    : row.key04 < 80
                    ? 'bg-green-50'
                    : 'bg-green-200'
                }`}
              >
                {row.key04} %
              </TableCell>
              <TableCell
                className={`text-center ${
                  row.key05 < 50
                    ? 'bg-red-50'
                    : row.key05 < 80
                    ? 'bg-green-50'
                    : 'bg-green-200'
                }`}
              >
                {row.key05} %
              </TableCell>
              <TableCell
                className={`text-center ${
                  row.key06 < 50
                    ? 'bg-red-50'
                    : row.key06 < 80
                    ? 'bg-green-50'
                    : 'bg-green-200'
                }`}
              >
                {row.key06} %
              </TableCell>
              <TableCell
                className={`text-center ${
                  row.key07 < 50
                    ? 'bg-red-50'
                    : row.key07 < 80
                    ? 'bg-green-50'
                    : 'bg-green-200'
                }`}
              >
                {row.key07} %
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between mt-4">
        <div>
          {t('Showing')} {indexOfFirstItem + 1} {t('to')}{' '}
          {Math.min(indexOfLastItem, sortedData.length)} {t('of')}{' '}
          {sortedData.length}{' '}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            {pathName?.split('/')[1] == 'en' ? (
              <ChevronLeft className="h4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? 'default' : 'outline'}
              size="sm"
              onClick={() => setPage(page)}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            {pathName?.split('/')[1] == 'en' ? (
              <ChevronRight className="h4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
