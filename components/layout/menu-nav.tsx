import React from 'react';
import Link from 'next/link';
// Import your icon components here, for example:
// import { DashboardIcon, ProjectsIcon, TasksIcon, MessagesIcon, SettingsIcon } from '../icons';

interface MenuItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  { label: 'Dashboard', href: '/', icon: <DashboardIcon /> },
  { label: 'Projects', href: '/projects', icon: <ProjectsIcon /> },
  { label: 'Tasks', href: '/tasks', icon: <TasksIcon /> },
  { label: 'Messages', href: '/messages', icon: <MessagesIcon /> },
  { label: 'Settings', href: '/settings', icon: <SettingsIcon /> },
];

const MenuNav: React.FC = () => {
  return (
    <nav className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Your App Name</h1>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-2">
              <Link href={item.href}>
                <a className="flex items-center p-2 hover:bg-gray-700 rounded">
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MenuNav;
