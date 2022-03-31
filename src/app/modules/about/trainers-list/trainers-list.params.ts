export interface ITraniner {
    fullname: string;
    coach: string;
    imgPath: string;
    slogan: string;
    description: string;
}

export const trainersListConfig: ITraniner[] = [
    {
        fullname: 'Денис Демин',
        coach: 'Все виды спорта',
        imgPath: 'assets/images/trainers/trainer-1.png',
        slogan: 'Помогу в любом вопросе',
        description: 'Слава ВДВ! Слава ВДВ! Слава ВДВ! Слава ВДВ!',
    },
    {
        fullname: 'Никита Иванов',
        coach: 'Качалка',
        imgPath: 'assets/images/trainers/trainer-2.png',
        slogan: 'Помогу накачаться',
        description: 'Какой то мотивационный текст про качалку или мышцы...',
    },
    {
        fullname: 'Дмитрий Гаврилов',
        coach: 'Без спорта',
        imgPath: 'assets/images/trainers/trainer-3.png',
        slogan: 'Дед инсайд',
        description:
            '1000-7? 1000-7? 1000-7? 1000-7? 1000-7? 1000-7? 1000-7? 1000-7? 1000-7? 1000-7? 1000-7? 1000-7? 1000-7? 1000-7? 1000-7? 1000-7? 1000-7? 1000-7? ',
    },
    {
        fullname: 'Леха Журавский',
        coach: 'Наркотики',
        imgPath: 'assets/images/trainers/trainer-4.png',
        slogan: 'Употребляю всякое',
        description: 'В основном глицин, но иногда то за что можно сесть',
    },
    {
        fullname: 'Давид',
        coach: 'Гонки',
        imgPath: 'assets/images/trainers/trainer-5.png',
        slogan: 'Гоняю на мотике',
        description: 'Тебя давно не было в уличных гонках, заходи!',
    },
];
