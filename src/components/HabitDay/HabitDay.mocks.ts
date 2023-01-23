import { IHabitDay } from './index';

const base: IHabitDay = {
  date: new Date(),
  defaultCompleted: 4,
  amount: 5,
};

export const mockHabitDayProps = {
  base,
};
