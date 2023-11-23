import { fireEvent, screen } from '@testing-library/react';

import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Test render', () => {
    renderWithTranslations(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    renderWithTranslations(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();

    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(toggleBtn).toBeInTheDocument();
    fireEvent.click(toggleBtn);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
