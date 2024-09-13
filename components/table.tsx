'use client';

import React, { useState } from 'react';
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

const DataTable: React.FC<TableProps> = ({ title, data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);

    const sorted = [...sortedData].sort((a, b) => {
      if (newSortOrder === 'asc') {
        return a.key07 - b.key07;
      } else {
        return b.key07 - a.key07;
      }
    });

    setSortedData(sorted);
  };

  const handleDownload = () => {
    const dataStr = JSON.stringify(sortedData, null, 2);
    const dataUri =
      'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileDefaultName = 'table-data.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full bg-white p-4">
      <div className="flex justify-between items-center gap-2 mb-4">
        <h2 className="flex-1 text-xl font-bold">{title}</h2>

        <Tabs defaultValue="daily">
          <TabsList>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
          </TabsList>
        </Tabs>
        <Button variant="outline" size="sm" onClick={handleDownload}>
          <Download className="h-4 w-4" />
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Reviewers</TableHead>
            <TableHead className="text-center">Ratings</TableHead>
            <TableHead className="text-center">Comments</TableHead>
            <TableHead className="text-center">Tone</TableHead>
            <TableHead className="text-center">Service & Reputation</TableHead>
            <TableHead className="text-center">Efficiency</TableHead>
            <TableHead className="text-center">Tone</TableHead>
            <TableHead
              className="text-center cursor-pointer"
              onClick={handleSort}
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
          Showing {indexOfFirstItem + 1} to{' '}
          {Math.min(indexOfLastItem, sortedData.length)} of {sortedData.length}{' '}
          entries
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? 'default' : 'outline'}
              size="sm"
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
