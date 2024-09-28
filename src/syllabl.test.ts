import { describe, it, expect } from "vitest";
import { Syllabl } from "./app/Syllabl";
import { cleanup } from "@testing-library/react";

describe('Syllabl', () => {
    it('Should instantiate', () => {
        const testSyl = new Syllabl("test")
        expect(testSyl.getIsCorrect() == false)
        expect(testSyl.getSyllableString() == "test")
        expect(testSyl.getSelected() == false)
        cleanup()
    })
})

describe('Syllabl', () => {
    it('Should change fields of syl', () => {
        const testSyl = new Syllabl("test")
        expect(testSyl.setIsCorrect(true))
        expect(testSyl.setSelected(true))
        expect(testSyl.setSyllableString("alm"))
        
        expect(testSyl.getIsCorrect() == true)
        expect(testSyl.getSyllableString() == "alm")
        expect(testSyl.getSelected() == true)
        cleanup()
    })
})