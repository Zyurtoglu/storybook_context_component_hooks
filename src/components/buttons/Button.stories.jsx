
import React from 'react';
import  Button  from './Button';
import  Story from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        labels: {
          primary: 'primary',
          warning: 'warning',
          success: 'success',
          error: 'error',
        },
      },
      options: ['primary', 'warning', 'success', 'error'],
    },
    shape: {
      control: {
        type: 'select',
        labels: {
          rectangle: 'rectangle',
          circular: 'circular',
        },
      },
      options: ['rectangle', 'circular'],
    },
  },
};

const Template = (args) => <Button {...args} />;




export const Rectangle = Template.bind({});
Rectangle.args = {
  shape: 'rectangle'
};

export const Circular = Template.bind({});
Circular.args = {
  shape: 'circular'
};
