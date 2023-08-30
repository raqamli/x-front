import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// random test just to make sure it works
describe('Home', () => {
  it('should have a "Docs" text', () => {
    render(<Home />);
    const myElement = screen.getByText(/Docs/i); // ACT
    expect(myElement).toBeInTheDocument(); // ASSERT
  });

  it('should contain the text "information"', () => {
    render(<Home />);
    const myElement = screen.getByText(/info/i); // ACT
    expect(myElement).toBeInTheDocument(); // ASSERT
  });

  it('should have a heading', () => {
    render(<Home />);
    const myElement = screen.getByRole('heading', {
      name: 'Learn'
    }); // ACT
    expect(myElement).toBeInTheDocument(); // ASSERT
  });
});
