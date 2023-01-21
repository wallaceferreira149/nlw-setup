import { ComponentMeta, ComponentStory } from '@storybook/react';
import { INewHabitForm, NewHabitForm } from './index';
import { mockNewHabitFormProps } from './NewHabitForm.mocks';

export default {
  title: 'application/NewHabitForm',
  component: NewHabitForm,
  args: {},
} as ComponentMeta<typeof NewHabitForm>;

const Template: ComponentStory<typeof NewHabitForm> = (args) => (
  <NewHabitForm {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockNewHabitFormProps.base,
} as INewHabitForm;
