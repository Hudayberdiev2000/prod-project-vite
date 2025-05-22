import {fireEvent, screen} from '@testing-library/react'
import {expect} from "vitest";
import {Sidebar} from "~widgets/Sidebar";
import {ComponentRender} from "~shared/lib/test/componentRender/componentRender";

describe("Sidebar", () => {
    it("renders correctly", () => {
        ComponentRender(<Sidebar />)
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    })

    it('should toggle sidebar', () => {
        ComponentRender(<Sidebar />)
        const sidebar = screen.getByTestId("sidebar")
        expect(sidebar).toBeInTheDocument()
        fireEvent.click(screen.getByTestId('sidebar-toggle'))
        expect(sidebar.className).toContain('collapsed')
    })
})