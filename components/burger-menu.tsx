'use client';
import React from 'react';
import { BurgerMenu } from './ui/navigation-menu';
import { BellDot } from 'lucide-react';

const burgerMenu = () => {
  return (
    <BurgerMenu
      navigationMenuTrigger={
        <div className="border-b p-4 pt-6 flex justify-end items-center gap-2">
          <div className="p-3 rounded-full bg-yellow-400" />
          <p>Delicios Burger</p>
        </div>
      }
      navigationMenuLink={[
        'Hamburger',
        'Lamb Burger',
        'Chicken Burger',
        'Specialty Burger',
        'Cheese Burger',
      ]}
    />
  );
};

export default burgerMenu;
