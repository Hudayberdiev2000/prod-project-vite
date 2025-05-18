import {describe, expect, it} from "vitest";
import {classNames} from "./classNames";

describe(`classNames`, () => {
    it("should work only with first param(cls)", () => {
        expect(classNames('someClass')).toBe('someClass');
    })

    it("should work with additional param(cls)", () => {
        const expected = 'someClass class1 class2';
        expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expected);
    })

    it("should work with mods", () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames("someClass", {hovered:true, scrollable: true}, ["class1", "class2"])).toBe(expected);
    })

    it("should work with mods false", () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames("someClass", {hovered:true, scrollable: false}, ["class1", "class2"])).toBe(expected);
    })
})