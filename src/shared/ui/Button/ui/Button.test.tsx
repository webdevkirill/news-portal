import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('Test render', () => {
    const btnText = 'Test';
    render(<Button>{btnText}</Button>);
    expect(screen.getByText(btnText)).toBeInTheDocument();
  });

  test('Test clear theme', () => {
    const btnText = 'Test';
    render(<Button theme={ButtonTheme.CLEAR}>{btnText}</Button>);
    expect(screen.getByText(btnText)).toHaveClass('clear');
  });
});
