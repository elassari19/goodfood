import React from 'react';
import BurgerMenu from '@/components/burger-menu';
import { BellDot } from 'lucide-react';

const TopMenuNav = () => {
  return (
    <div className="col-span-full grid grid-cols-12 border-b fixed top-0 left-0 w-screen bg-white z-50">
      <div className="col-span-2 bg-primary-foreground font-bold text-xl text-primary pt-6 text-center">
        GOODFOOD
      </div>
      <div className="col-span-10">
        <div className="flex justify-end items-center gap-2 px-4">
          <BurgerMenu />
          <BellDot />
        </div>
      </div>
    </div>
  );
};

export default TopMenuNav;
