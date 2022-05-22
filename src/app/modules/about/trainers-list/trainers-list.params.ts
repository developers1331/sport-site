export interface ITraniner {
    fullname: string;
    coach: string;
    imgPath: string;
    slogan: string;
    description: string;
}

export const trainersListConfig: ITraniner[] = [
    {
        fullname: 'Вин Дизель',
        coach: 'Бодибилдинг',
        imgPath:
            'https://belradio.net/wp-content/uploads/2012/09/QQSZZHHK.jpeg',
        slogan: 'Индивидуальный  подход  ко  всем.',
        description:
            'На сайте имеется множество программ тренировок от меня. Также помогу составить индивидуальную программу.',
    },
    {
        fullname: 'Арнольд Шварценеггер',
        coach: 'Профессиональный бодибилдинг',
        imgPath: 'https://www.shkolazhizni.ru/img/content/i189/189795_or.jpg',
        slogan: 'Профессиональный подход к соревновательному бодибилдингу.',
        description:
            'Составлю индивидуальный план тренировок, питания и прочего для выхода на проф. сцену бодибилдинга.',
    },
    {
        fullname: 'Игорь Войтенко',
        coach: 'Воркаут',
        imgPath:
            'https://sun9-77.userapi.com/impf/c845521/v845521339/27117/NglPMoVcelc.jpg?size=604x604&quality=96&sign=3e619b1f067283c7864e82be610c4386&type=album',
        slogan: 'Мотивирую достигать поставленные цели.',
        description:
            'Помогаю добиваться целей не только в спорте. Провожу воркаут тренировки.',
    },
    {
        fullname: 'Юрий Спасокукоцкий',
        coach: 'Пауэрлифтинг',
        imgPath:
            'http://force-man.ru/uploads/posts/2018-12/1545769800_3aivpk1qwls1.jpg',
        slogan: 'Провожу силовые тренировки.',
        description:
            'Расскажу и покажу как правильно наращивать мышечную массу вместе с силовыми.',
    },
    {
        fullname: 'Максим Марцинкевич',
        coach: 'Единоборства',
        imgPath:
            'https://avatars.mds.yandex.net/get-zen_doc/3645545/pub_5f62ad315477ff281e703daf_5f62b0425477ff281e7109ce/scale_1200',
        slogan: 'Единоборства и спортивная деятельность.',
        description: 'Тренировки с элементами ОФП, воркаута и единоборств.',
    },
];
