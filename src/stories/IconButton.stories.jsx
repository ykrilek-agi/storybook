import React from 'react';

import { IconButton } from './IconButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/IconButton',
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
  icon: "favorite"
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  icon: "favorite"
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  icon: "favorite"
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  icon: "favorite"
};
