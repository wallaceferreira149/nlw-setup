import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockHabitProps } from './Habit.mocks';
import { Habit, IHabit } from './index';

export default {
  title: 'templates/Habit',
  component: Habit,
  args: {},
} as ComponentMeta<typeof Habit>;

const Template: ComponentStory<typeof Habit> = (args) => <Habit {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockHabitProps.base,
} as IHabit;
