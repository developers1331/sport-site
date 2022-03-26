export interface ITraniner {
  fullname: string;
  coach: string;
  imgPath: string;
}

export const trainersListConfig: ITraniner[] = [
  {
    fullname: 'Денис Демин',
    coach: 'Все виды спорта',
    imgPath: 'assets/images/trainer-default.jpg',
  },
  {
    fullname: 'Никита Иванов',
    coach: 'Качалка',
    imgPath: 'assets/images/trainer-default.jpg',
  },
  {
    fullname: 'Дмитрий Гаврилов',
    coach: 'Без спорта',
    imgPath: 'assets/images/trainer-default.jpg',
  },
  {
    fullname: 'Леха Журавский',
    coach: 'Наркотики',
    imgPath: 'assets/images/trainer-default.jpg',
  },
];
