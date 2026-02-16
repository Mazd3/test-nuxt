import { formatPrice } from './formatPrice';

export const halfPrice = (price: number) => formatPrice(Math.ceil(price / 2));