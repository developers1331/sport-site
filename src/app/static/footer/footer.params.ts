interface btn {
  text: string;
  linkHref?: string;
  routerLink?: string;
  target?: string;
  test?: boolean;
}

export interface btns {
  exploreBtns: btn[];
  infoBtns: btn[];
}

export const dataBtn: btns = {
  exploreBtns: [
    {
      text: 'Блог',
      routerLink: '/posts',
      test: false,
    },
    {
      text: 'О нас',
      routerLink: '/about',
      test: false,
    },
    {
      text: 'Программы',
      routerLink: '/programs',
      test: false,
    },
  ],

  infoBtns: [
    {
      text: 'ВК',
      linkHref: 'https://vk.com/',
      target: '_blank',
    },
    {
      text: 'ФБ',
      linkHref: 'https://vk.com/',
      target: '_blank',
    },
  ],
};
