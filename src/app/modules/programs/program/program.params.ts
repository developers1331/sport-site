export interface IProgramm {
    id: number;
    name: string;
    imgFront: string;
    imgBack: string;
}

export const programmData: IProgramm[] = [
    {
        id: 0,
        name: 'Начинающий',
        imgFront: 'assets/images/programms/programms-home-frontend.jpg',
        imgBack: 'assets/images/programms/programms-home-backend.jpg',
    },
    {
        id: 1,
        name: 'Продвинутый',
        imgFront: 'assets/images/programms/programms-home-frontend.jpg',
        imgBack: 'assets/images/programms/programms-home-backend.jpg',
    },
    {
        id: 2,
        name: 'Профессионал',
        imgFront: 'assets/images/programms/programms-home-frontend.jpg',
        imgBack: 'assets/images/programms/programms-home-backend.jpg',
    },
];
