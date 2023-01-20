import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ISummaryTable, SummaryTable } from './index';
import { mockSummaryTableProps } from './SummaryTable.mocks';

export default {
  title: 'application/SummaryTable',
  component: SummaryTable,
  args: {},
} as ComponentMeta<typeof SummaryTable>;

const Template: ComponentStory<typeof SummaryTable> = (args) => (
  <SummaryTable {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSummaryTableProps.base,
} as ISummaryTable;
