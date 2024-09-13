'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface IProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const menuItems = ({ href, icon, label }: IProps) => {
  const pathname = usePathname();

  let isActiveRoute = false;
  if (
    (pathname == '/' && href == '/') ||
    (pathname.includes(href) && href != '/')
  )
    isActiveRoute = true;

  return (
    <li className="mb-2 group">
      <Link href={href}>
        <div
          className={cn(
            'flex items-center p-2 group-hover:bg-primary/40 group-hover:text-primary font-bold rounded',
            isActiveRoute && 'bg-primary/40 text-primary'
          )}
        >
          <div
            className={cn(
              'group-hover:text-primary-foreground group-hover:bg-primary p-1 rounded-sm',
              isActiveRoute && 'text-primary-foreground bg-primary'
            )}
          >
            {icon}
          </div>
          <span className="ml-2">{label}</span>
        </div>
      </Link>
    </li>
  );
};

export default menuItems;
