import { Coupon } from './Coupon.type';

export enum EventType {
  ONLINE = 'Remoto',
  PRESENTIAL = 'Presencial',
}

export type EventItem = {
  id: string;
  title: string;
  remote: boolean;
  description: string;
  date: string;
  city?: string;
  state?: string;
  eventUrl: string;
  coupons?: Coupon[];
};
