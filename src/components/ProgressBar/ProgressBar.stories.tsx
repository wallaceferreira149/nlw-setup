import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IProgressBar, ProgressBar } from './index';
import { mockProgressBarProps } from './ProgressBar.mocks';

export default {
  title: 'application/ProgressBar',
  component: ProgressBar,
  args: {},
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockProgressBarProps.base,
} as IProgressBar;
