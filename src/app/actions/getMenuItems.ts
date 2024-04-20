'use server';

import { unstable_cache } from 'next/cache';

import { getMenuItems as getMenuItemsCall } from '@/api/getMenuItems';

export const getMenuItems = unstable_cache(getMenuItemsCall, [
  'fp__menu-items',
]);
