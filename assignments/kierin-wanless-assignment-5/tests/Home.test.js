import Home from "../pages"
import {render, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom'
import 'isomorphic-fetch'

import { BASE_URL } from "../utils/api/base";

import { rest } from 'msw'
import { setupServer } from 'msw/node'

const TEST_URL = `${BASE_URL}/api/breeds/image/random`

const server = setupServer(
  rest.get(`${TEST_URL}`, (req, res, ctx) => {
    return res(
      ctx.json({
        status: "success",
        "message": TEST_URL
      })
    )
  })
)

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

describe('test the "Home component', () => {
  test('title renders correctly', async () => {
    await act(() => {
      render(<Home />)
    })

    let title = screen.getByText("Welcome to Dinder")

    expect(title).toBeInTheDocument()
  })

  test('buttons are rendered correctly', async () => {
    await act(() => {
      render(<Home />)
    })

    let likeBtn = screen.getByText("Like")
    let nopeBtn = screen.getByText("Nope")

    expect(likeBtn).toBeInTheDocument()
    expect(nopeBtn).toBeInTheDocument()
  })

  test('image loaded successfully', async () => {
    await act(() => {
      render(<Home />)
    })

    let image = screen.getByTestId("dog-image")

    expect(image).toBeInTheDocument()
    expect(image.src).toBe(TEST_URL)
  })

  test('new image loaded on click of like button', async () => {
    await act(() => {
      render(<Home />)
    })

    const NEW_TEST_URL = `Image reloaded`

    server.use(
      rest.get(`${TEST_URL}`, (req, res, ctx) => {
        return res(
          ctx.json({
            status: "success",
            "message": NEW_TEST_URL
          })
        )
      })
    )

    let likeBtn = screen.getByText("Like")
    let image = screen.getByTestId("dog-image")

    await act(() => {
      likeBtn.click()
    })

    let newimage = screen.getByTestId("dog-image")

    expect(newimage).toBeInTheDocument()
    expect(image).not.toBe(newimage)
    expect(image.src).toBe(NEW_TEST_URL)
  })
})