import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockBasePageProps } from './BasePage.mocks';
import BasePage, { BasePageProps } from './page';

export default {
  title: 'page/BasePage',
  component: BasePage,
  args: {},
} as ComponentMeta<typeof BasePage>;

const Template: ComponentStory<typeof BasePage> = (args) => (
  <BasePage {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBasePageProps.base,
} as BasePageProps;
