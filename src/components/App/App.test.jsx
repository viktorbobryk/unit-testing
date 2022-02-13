import {cleanup, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  afterEach(cleanup)
  test('App renders', async () => {
    render(<App />);

    expect(await screen.findAllByRole('list')).not.toHaveLength(0);
    expect(screen.getByText('Find course:')).toBeInTheDocument();
  });

  // integrated tests

  test('typing in Searchbox works', () => {
    render(<App/>)

    expect(screen.queryByDisplayValue(/React/)).toBeNull();
    userEvent.type(screen.getByRole('textbox'), 'React');
    expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument();
  })

  test('search filter is working', () => {
    render(<App/>)

    expect(screen.getByText(/Vue/)).toBeInTheDocument();
    expect(screen.getByText(/JavaScript/)).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), 'script');

    expect(screen.queryByText(/Vue/)).toBeNull();
    expect(screen.queryByText(/JavaScript/)).toBeInTheDocument();

  })
})


