'use client';

import { useState } from 'react';
import { getMenuItems } from '@/app/actions/getMenuItems';
import { Button } from '@/components/ui/button';
import Heart from '@/assets/heart.svg';

export default function Home() {
  const [menuItems, setMenuItems] = useState<
    {
      id: string;
      name: string;
      price: string;
    }[]
  >();

  return (
    <>
      <Button
        className="gap-1"
        onClick={async () => {
          const fetchedMenuItems = await getMenuItems();
          setMenuItems(fetchedMenuItems);
        }}
      >
        <Heart className="w-4 stroke-current fill-danger" />
        <span>Love button</span>
      </Button>
      {JSON.stringify(menuItems)}
    </>
  );
}
