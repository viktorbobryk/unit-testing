import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Search from './Search'
const onChange = jest.fn();

describe('Search component', () => {
    test('renders Search component', () => {
        render(
            <Search value='' onChange={onChange}>
                Find:
            </Search>
        )
        expect(screen.getByText(/find/i)).toBeInTheDocument()
    })

    test('renders Search without children', () => {
        render(
            <Search value='' onChange={onChange}/>
        )
        expect(screen.getByText(/search/i)).toBeInTheDocument()
    })

    test('renders Search without placeholder', () => {
        render(
            <Search value='' onChange={onChange}/>
        )
        expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument()
    })

    test('custom placeholder works correctly', () => {
        render(
            <Search value='' onChange={onChange} placeholder='find post'/>
        )
        expect(screen.getByPlaceholderText(/find post/i)).toBeInTheDocument()
    })

    test('onChange works ', () => {
        render(
            <Search value='' onChange={onChange}>
                Find:
            </Search>
        )
        userEvent.type(screen.getByRole('textbox'), 'React');

        expect(onChange).toHaveBeenCalledTimes(5)
    })

    test('dynamic styles works', () => {
        render(
            <Search value='qwerty' onChange={onChange}/>
        )

        expect(screen.getByRole('textbox')).toHaveClass('input')
        expect(screen.getByRole('textbox')).toHaveClass('filled')
        expect(screen.getByText('Search')).toHaveClass('label')
    })

    test('Search snapshot', () => {
      const search = render(
          <Search value='' onChange={onChange}>
              Find:
          </Search>
      )
      expect(search).toMatchSnapshot();
    })

})