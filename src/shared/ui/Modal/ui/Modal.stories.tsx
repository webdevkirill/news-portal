import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse repellat vero modi ullam, dignissimos enim culpa a explicabo quasi veritatis officia sunt amet nobis magnam aut atque tempore non suscipit illum. Laboriosam eum in sapiente distinctio minima excepturi tenetur, corporis sed quo? Obcaecati maiores distinctio aliquam quos fuga doloremque provident ut quia earum! Aliquam cumque quam eligendi nesciunt facere dolores perferendis corrupti mollitia assumenda commodi similique, libero, veniam iste quae quod quibusdam enim provident ipsa? Quam, hic dolorum? Nisi quos atque earum fugiat provident, laboriosam quis aliquid aliquam hic a corrupti facilis. Commodi, quidem necessitatibus placeat autem adipisci ab laborum.',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
