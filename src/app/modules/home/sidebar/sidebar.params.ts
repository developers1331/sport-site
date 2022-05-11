export interface Isidebar {
    id: number;
    direction: string;
    open: boolean;
}

export const dataSidebar: Isidebar[] = [
    {
        id: 0,
        direction: 'Бодибилдинг',
        open: true,
    },
    {
        id: 1,
        direction: 'Пауэрлифтинг',
        open: false,
    },
    {
        id: 2,
        direction: 'Кроссфит',
        open: false,
    },
    {
        id: 3,
        direction: 'Воркаут',
        open: false,
    },
    {
        id: 4,
        direction: 'Домашняя',
        open: false,
    },
];
