import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('App renders', () => {
    render(<App />);

    expect(screen.getByRole('list')).toBeInTheDocument()
  });
})


