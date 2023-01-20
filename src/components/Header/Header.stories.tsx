import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockHeaderProps } from './Header.mocks';
import { Header, IHeader } from './index';

export default {
  title: 'application/Header',
  component: Header,
  args: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockHeaderProps.base,
} as IHeader;
