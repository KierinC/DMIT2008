// we get fetch errors on the backend
import 'isomorphic-fetch'

// tools from react testing library
import { render, screen, act } from '@testing-library/react'

//import our matchers for expect in hest dom
import '@testing-library/jest-dom'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { BASE_URL } from '../utils/api/base'
import Home from '../pages/index.js'

const QUOTE = "Every great story seems to begin with a snake"
const AUTHOR = "Nicholas Cage"

// we are going to set up out server
const server = setupServer(
  rest.get(`${BASE_URL}/random`, (req, res, ctx) => {
    return res(
      ctx.json({
        content: QUOTE,
        author: AUTHOR
      })
    )
  })
)

// before our tests we are going to "launch" server
beforeAll(() => {
  // this is going to launch our server during our tests
  server.listen()
})

// we clean this after
afterAll(() => {
  server.close()
})

describe('test the "Home component', () => {
  // write a test that nicholas cage is loaded with when the component is loaded
  test('test home component loads a quote on mount', async () => {
    // render the component
    await act(() => {
      render(<Home />)
    })
    // get the quote and author elements
    let quote = screen.getByTestId("quote")
    let author = screen.getByTestId("author")
  
    // check that they're what we expect them to be
    expect(quote).toHaveTextContent(QUOTE)
    expect(author).toHaveTextContent(AUTHOR)
  })
  
  // write a test for when we click the button (a new quote should be loaded)
  test('new quote loaded on click', async () => {
    // render the component
    await act(() => {
      render(<Home/>)
    })
  
    // wisdom
    const NEW_QUOTE = "It doesn't matter if you win by an inch or a mile, winning is winning."
    const NEW_AUTHOR = "Vin Diesel"
  
    // create a new request for the server to use
    server.use(
      rest.get(`${BASE_URL}/random`, (req, res, ctx) => {
        return res(
          ctx.json({
            content: NEW_QUOTE,
            author: NEW_AUTHOR
          })
        )
      })
    )
  
    // get the quote and author elements
    let quote = screen.getByTestId("quote")
    let author = screen.getByTestId("author")
  
    // button element
    let button = screen.getByTestId("new-quote-button")
  
    // click the button
    await act(() => {
      button.click()
    })
  
    // check if its right
    expect(quote).toHaveTextContent(NEW_QUOTE)
    expect(author).toHaveTextContent(NEW_AUTHOR)
  })
})
