import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ButtonSize, ButtonTheme } from '..';
import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'button',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Clear = Template.bind({});
Clear.args = {
  theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  theme: ButtonTheme.OUTLINE,
};

export const OutlineL = Template.bind({});
OutlineL.args = {
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
};

export const OutlineXL = Template.bind({});
OutlineXL.args = {
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearDark = Template.bind({});
ClearDark.args = {
  theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  theme: ButtonTheme.BACKGROUND,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
  square: true,
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareL = Template.bind({});
SquareL.args = {
  square: true,
  children: '>',
  size: ButtonSize.L,
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  square: true,
  children: '>',
  size: ButtonSize.XL,
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareDark = Template.bind({});
SquareDark.args = {
  square: true,
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
SquareDark.decorators = [ThemeDecorator(Theme.DARK)];
