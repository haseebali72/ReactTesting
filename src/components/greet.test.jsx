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

// NOTE : The above methods can also be used with describe() method below.


// GROUPING TESTS

// One can group tests of the same suite by describe method as below
// The describe function accepts 2 parameters i.e describe(name, fn)


describe('Greet', ()=>{
    test('Greet renders correctly', ()=>{
        render(<Greet/>)
        const text = screen.getByText("Hello")
        expect(text).toBeInTheDocument()
    })

    // One can also perform Nested grouping of tests

    describe("Nested grouped test", ()=>{
       
        test("Greet name", ()=>{
            render(<Greet name="haseeb"/>)
            const textinside = screen.getByText("Hello haseeb")
            expect(textinside).toBeInTheDocument()
        })
        
    })
})


// We can also create multiple groups in a single test suite.Below is another group|

describe("Greet Age", ()=>{
    test('Age notified', ()=>{
        render(<Greet age={29}/>)
        const textinside = screen.getByText("Your age is 29")
        expect(textinside).toBeInTheDocument()
    })
})