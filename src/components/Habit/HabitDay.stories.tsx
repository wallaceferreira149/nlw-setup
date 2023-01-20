import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockHabitDayProps } from './HabitDay.mocks';
import { HabitDay, IHabitDay } from './index';

export default {
  title: 'application/HabitDay',
  component: HabitDay,
  args: {},
} as ComponentMeta<typeof HabitDay>;

const Template: ComponentStory<typeof HabitDay> = (args) => (
  <HabitDay {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockHabitDayProps.base,
} as IHabitDay;
