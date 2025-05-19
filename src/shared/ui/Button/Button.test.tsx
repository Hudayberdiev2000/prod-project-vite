import {render, screen} from '@testing-library/react'
import {Button, ThemeButton} from "~shared/ui/Button/Button";
import {expect} from "vitest";

describe("Button", () => {
    it("renders correctly", () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText("TEST")).toBeInTheDocument()
    })

    it("should have clear class", () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        const button = screen.getByText("TEST")
        expect(button).toBeInTheDocument()
        expect(button.className).toContain(ThemeButton.CLEAR);
        screen.debug()
    })
})