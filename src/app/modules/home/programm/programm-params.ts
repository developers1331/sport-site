export interface Iprogramms {
    img_webp: string;
    img_jpg: string;
    title: string;
    description: string;
}

export interface IprogrammsConfig {
    id: number;
    programms: Iprogramms[];
}

export const programmsConfig: IprogrammsConfig[] = [
    {
        id: 0,
        programms: [
            {
                img_webp: 'assets/images/programm-1.webp',
                img_jpg: 'assets/images/programm-1.jpg',
                title: 'Тренировка трицепсов: максимальный результат с минимумом оборудования',
                description:
                    'В день трицепса долго ждете своей очереди у тренажера? Для этой простой тренировки трицепсов хватит пары снарядов, и вы получите максимальный результат за минимум времени!',
            },
            {
                img_webp: 'assets/images/programm-2.webp',
                img_jpg: 'assets/images/programm-2.jpg',
                title: 'Убийственная грудь всего за 3 упражнения',
                description:
                    'День груди не должен быть архисложным. Проверьте эту убийственную тренировку из 3 упражнений для наполненных и мощных грудных мышц!',
            },
            {
                img_webp: 'assets/images/programm-3.webp',
                img_jpg: 'assets/images/programm-3.jpg',
                title: 'Тренируемся дома: 2 круговые тренировки для женщин',
                description:
                    'Нет времени ходить в тренажерный зал или нет желания покупать абонемент? Эти 2 круговые тренировки — именно то, что вы ищите, чтобы привести тело в форму!',
            },
            {
                img_webp: 'assets/images/programm-4.webp',
                img_jpg: 'assets/images/programm-4.jpg',
                title: 'Тренировка ягодиц',
                description:
                    'Ягодицы — первое на что мы обращаем внимание когда смотрим на незнакомого человека и оцениваем его «потенциал». Как накачать мышцы ягодиц — программа тренировок.',
            },
            {
                img_webp: 'assets/images/programm-5.webp',
                img_jpg: 'assets/images/programm-5.jpg',
                title: 'Программа тренировок с собственным весом',
                description:
                    'Только начинаете тренироваться или хотите отдохнуть от свободных весов? Этот 3-дневный сплит включает базовые упражнения с собственным ыесом и создает прочный фундамент.',
            },
            {
                img_webp: 'assets/images/programm-6.webp',
                img_jpg: 'assets/images/programm-6.jpg',
                title: 'Круговая тренировка «400-повторений»',
                description:
                    'Уникальная круговая тренировка Майка Васкеса из выносливого человека превратит вас в настоящего робота. Упражнения с массой тела и гантелями умножены на запредельную интенсивность!',
            },
        ],
    },
    {
        id: 1,
        programms: [
            {
                img_webp: 'assets/images/programm-1.webp',
                img_jpg: 'assets/images/programm-1.jpg',
                title: 'Тут типа бицепс',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-2.webp',
                img_jpg: 'assets/images/programm-2.jpg',
                title: 'Тут трицепс',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-3.webp',
                img_jpg: 'assets/images/programm-3.jpg',
                title: 'Сииииськи',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-4.webp',
                img_jpg: 'assets/images/programm-4.jpg',
                title: 'Ноооожки',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-6.webp',
                img_jpg: 'assets/images/programm-6.jpg',
                title: 'Спина',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-5.webp',
                img_jpg: 'assets/images/programm-5.jpg',
                title: 'Еще ножки, а нет, попа',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
        ],
    },
    {
        id: 2,
        programms: [
            {
                img_webp: 'assets/images/programm-1.webp',
                img_jpg: 'assets/images/programm-1.jpg',
                title: 'Тут типа бицепс',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-2.webp',
                img_jpg: 'assets/images/programm-2.jpg',
                title: 'Тут трицепс',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-6.webp',
                img_jpg: 'assets/images/programm-6.jpg',
                title: 'Сииииськи',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-4.webp',
                img_jpg: 'assets/images/programm-4.jpg',
                title: 'Ноооожки',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-5.webp',
                img_jpg: 'assets/images/programm-5.jpg',
                title: 'Спина',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-3.webp',
                img_jpg: 'assets/images/programm-3.jpg',
                title: 'Еще ножки, а нет, попа',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
        ],
    },
    {
        id: 3,
        programms: [
            {
                img_webp: 'assets/images/programm-1.webp',
                img_jpg: 'assets/images/programm-1.jpg',
                title: 'Тут типа бицепс',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-4.webp',
                img_jpg: 'assets/images/programm-4.jpg',
                title: 'Тут трицепс',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-3.webp',
                img_jpg: 'assets/images/programm-3.jpg',
                title: 'Сииииськи',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-2.webp',
                img_jpg: 'assets/images/programm-2.jpg',
                title: 'Ноооожки',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-5.webp',
                img_jpg: 'assets/images/programm-5.jpg',
                title: 'Спина',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-6.webp',
                img_jpg: 'assets/images/programm-6.jpg',
                title: 'Еще ножки, а нет, попа',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
        ],
    },
    {
        id: 4,
        programms: [
            {
                img_webp: 'assets/images/programm-3.webp',
                img_jpg: 'assets/images/programm-3.jpg',
                title: 'Тут типа бицепс',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-2.webp',
                img_jpg: 'assets/images/programm-2.jpg',
                title: 'Тут трицепс',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-1.webp',
                img_jpg: 'assets/images/programm-1.jpg',
                title: 'Сииииськи',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-4.webp',
                img_jpg: 'assets/images/programm-4.jpg',
                title: 'Ноооожки',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-5.webp',
                img_jpg: 'assets/images/programm-5.jpg',
                title: 'Спина',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
            {
                img_webp: 'assets/images/programm-6.webp',
                img_jpg: 'assets/images/programm-6.jpg',
                title: 'Еще ножки, а нет, попа',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod, expedita nobis.',
            },
        ],
    },
];
