import {fireEvent, screen} from '@testing-library/react'
import {expect} from "vitest";
import {Sidebar} from "~widgets/Sidebar";
import {renderWithTranslation} from "~shared/lib/test/renderWithTranslation";

describe("Sidebar", () => {
    it("renders correctly", () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    })

    it('should toggle sidebar', () => {
        renderWithTranslation(<Sidebar />)
        const sidebar = screen.getByTestId("sidebar")
        expect(sidebar).toBeInTheDocument()
        fireEvent.click(screen.getByTestId('sidebar-toggle'))
        expect(sidebar.className).toContain('collapsed')
    })
})