import {fireEvent, screen} from '@testing-library/react'
import {expect} from "vitest";
import {ComponentRender} from "~shared/lib/test/componentRender/componentRender";
import {Counter} from "./Counter";

describe("Counter", () => {
    it("renders correctly", () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        })
        expect(screen.getByTestId("value-title")).toHaveTextContent("10")
    })

    it("increment", () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        })
        fireEvent.click(screen.getByTestId('increment-btn'))
        expect(screen.getByTestId("value-title")).toHaveTextContent("11")
    })

    it("decrement", () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        })
        fireEvent.click(screen.getByTestId('decrement-btn'))
        expect(screen.getByTestId("value-title")).toHaveTextContent("9")
    })


})