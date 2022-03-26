export interface Isidebar {
  id: number;
  direction: string;
  open: boolean;
}

export const dataSidebar: Isidebar[] = [
  {
    id: 0,
    direction: 'Bodybuilding',
    open: true,
  },
  {
    id: 1,
    direction: 'Powerlifting',
    open: false,
  },
  {
    id: 2,
    direction: 'Crossfit',
    open: false,
  },
  {
    id: 3,
    direction: 'Workout',
    open: false,
  },
];
