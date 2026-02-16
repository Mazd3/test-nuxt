const priceFormatter = new Intl.NumberFormat('ru-RU');

export const formatPrice = (price: number) => `${priceFormatter.format(price)} ₽`;
