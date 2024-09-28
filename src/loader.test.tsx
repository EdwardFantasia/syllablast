import { expect, test } from 'vitest'
import { render, fireEvent, cleanup } from "@testing-library/react"
import SyllablastLoader from './app/SyllablastLoader'

test("SyllablastLoader", async() => {
    const { getByText } = render(<SyllablastLoader setConfig={() => {}}/>)
    const checkTitle = getByText("Syllablast")
    expect(checkTitle === undefined).toBe(false)
    cleanup()
})