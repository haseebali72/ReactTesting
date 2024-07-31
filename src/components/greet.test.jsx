import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test('Greet renders correctly', ()=>{
    render(<Greet/>)
    const text = screen.getByText("Hello")
    expect(text).toBeInTheDocument()
})


test("Greet with name", ()=>{
    render(<Greet name="haseeb"/>)
    const textinside = screen.getByText("Hello haseeb")
    expect(textinside).toBeInTheDocument()
})