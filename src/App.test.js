import { render, screen } from '@testing-library/react';
import Logo from './components/logo';

describe('Logo', () => {
  test('Logo must have src = "/astral_logo.png" and alt = "astral logo"', () => {
    render(<Logo/>);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', '/astral_logo.png');
    expect(logo).toHaveAttribute('alt', 'astral logo');
  });
});

