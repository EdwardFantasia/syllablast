import { expect, test } from 'vitest'
import { screen, render, fireEvent, cleanup } from "@testing-library/react"
import Page from './app/page'

test("Page", async() => {
    const { getByText, getByTestId } = render(<Page />)
    const checkTitle = getByText("Syllablast")
    expect(checkTitle === undefined).toBe(false)

    const button0 = getByTestId(0)

    fireEvent.click(button0)

    await getByTestId("app")

    expect(checkTitle === undefined)
    cleanup()
})

test("Page", async() => {
    const { getByText, getByTestId } = render(<Page />)
    const checkTitle = getByText("Syllablast")
    expect(checkTitle === undefined).toBe(false)

    fireEvent.click(getByTestId(0))

    await getByTestId("app")

    fireEvent.click(getByTestId('exit'))

    expect(checkTitle === undefined)
})

test("Page", async() => {
    const { getByText, getByTestId } = render(<Page />)
    const checkTitle = getByText("Syllablast")
    expect(checkTitle === undefined).toBe(false)

    fireEvent.click(getByTestId(0))

    await getByTestId("app")

    fireEvent.click(screen.getByTestId("ter"))

    fireEvent.click(screen.getByTestId("in"))

    const checkScore = getByText("Score: 1")

    expect(checkScore === undefined).toBe(false)
})