export interface FooterLinkItem {
    label: string;
    href: string;
}

export interface FooterSectionItem {
    label: string;
    items: FooterLinkItem[];
}

export const footerItems: FooterSectionItem[] = [
    {
        label: 'Каталог',
        items: [
            {
                label: 'Все бренды',
                href: '#',
            },
            {
                label: 'Nike',
                href: '#',
            },
            {
                label: 'Adidas',
                href: '#',
            },
            {
                label: 'Puma',
                href: '#',
            },
            {
                label: 'New Balance',
                href: '#',
            },
        ],
    },
    {
        label: 'Помощь',
        items: [
            {
                label: 'Доставка',
                href: '#',
            },
            {
                label: 'Заказ и оплата',
                href: '#',
            },
            {
                label: 'Обмен и Возврат ',
                href: '#',
            },
            {
                label: 'F. A. Q.',
                href: '#',
            },
        ],
    },
    {
        label: 'Информация',
        items: [
            {
                label: 'Преимущества',
                href: '#',
            },
            {
                label: 'Гарантия и безопасность',
                href: '#',
            },
            {
                label: 'Индивидуальный заказ',
                href: '#',
            },
            {
                label: 'Акции',
                href: '#',
            },
        ],
    },
    {
        label: 'Компания',
        items: [
            {
                label: 'О нас',
                href: '#',
            },
            {
                label: 'Блог',
                href: '#',
            },
            {
                label: 'Отзывы',
                href: '#',
            },
            {
                label: 'Контакты',
                href: '#',
            },
        ],
    },
];
