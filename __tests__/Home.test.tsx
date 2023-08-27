import {render, screen} from '@testing-library/react';
import Home from '@/app/page';

// random test just to make sure it works
describe('Home', () => {

it('should have a Docs text', () => {
    render(<Home />);

    const myElement = screen.getByText(/Docs/i); // ACT
    expect(myElement).toBeInTheDocument(); // ASSERT
});

});