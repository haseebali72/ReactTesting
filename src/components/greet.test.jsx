import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

// test('Greet renders correctly', ()=>{
//     render(<Greet/>)
//     const text = screen.getByText("Hello")
//     expect(text).toBeInTheDocument()
// })


// test("Greet name", ()=>{
//     render(<Greet name="haseeb"/>)
//     const textinside = screen.getByText("Hello haseeb")
//     expect(textinside).toBeInTheDocument()
// })


// test.only is the method use to test only that partuicular test instead of whole suite(s)
// test.skip is use to skip that particular test on which this method is used


// One can group tests of the same suite by describe method as below

// The describe function accepts 2 parameters i.e describe(name, fn)


describe('Greet', ()=>{
    test('Greet renders correctly', ()=>{
        render(<Greet/>)
        const text = screen.getByText("Hello")
        expect(text).toBeInTheDocument()
    })
    
    
    test("Greet name", ()=>{
        render(<Greet name="haseeb"/>)
        const textinside = screen.getByText("Hello haseeb")
        expect(textinside).toBeInTheDocument()
    })
    
})