import { render, screen } from '@testing-library/react';
import BookingForm from '../src/pages/BookingForm';

describe("BookingForm component", () => {
  test("should render the username input with correct attributes", () => {
    render(<BookingForm />);
    const usernameInput = screen.getByLabelText("book-name");
    
    expect(usernameInput).toBeInTheDocument();
    expect(usernameInput).toHaveAttribute("type", "text");
    expect(usernameInput).toHaveAttribute("id", "name");
    expect(usernameInput).toHaveAttribute("required");
  });
});
