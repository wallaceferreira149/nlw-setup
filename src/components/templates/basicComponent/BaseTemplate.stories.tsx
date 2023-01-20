import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';
import { BaseTemplate, IBaseTemplate } from './index';

export default {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  args: {},
} as ComponentMeta<typeof BaseTemplate>;

const Template: ComponentStory<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBaseTemplateProps.base,
} as IBaseTemplate;
