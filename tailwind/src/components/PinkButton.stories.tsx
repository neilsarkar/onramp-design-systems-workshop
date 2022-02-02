import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PinkButton } from './PinkButton';

export default {
  title: 'Example/PinkButton',
  component: PinkButton
} as ComponentMeta<typeof PinkButton>;

const Template: ComponentStory<typeof PinkButton> = (args) => <PinkButton {...args} />;

export const Big = Template.bind({});
Big.args = {
  label: 'Big Button',
  size: 'big'
};

export const Little = Template.bind({});
Little.args = {
  label: 'Little Button',
  size: 'little'
};