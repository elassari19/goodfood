import React from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import MenuItems from '@/components/menu/menu-items';
import { useTranslations } from 'next-intl';

interface MenuItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    href: '/',
    icon: <MdOutlineDashboard />,
  },
  {
    label: 'Agents',
    href: '/agents',
    icon: <MdOutlineDashboard />,
  },
  {
    label: 'Calls',
    href: '/calls',
    icon: <MdOutlineDashboard />,
  },
  {
    label: 'Help',
    href: '/help',
    icon: <MdOutlineDashboard />,
  },
];

const MenuNav: React.FC = () => {
  const t = useTranslations('');

  return (
    <nav className="w-full bg-primary-foreground text-primary h-screen sticky top-0">
      <p className="text-gray-400 pt-28 px-8">{t('menu')}</p>
      <ul className=" text-gray-400 p-4">
        {menuItems.map((item, index) => (
          <MenuItems
            key={index}
            href={item.href}
            icon={item.icon}
            label={t(item.label.toLocaleLowerCase())}
          />
        ))}
      </ul>
    </nav>
  );
};

export default MenuNav;
