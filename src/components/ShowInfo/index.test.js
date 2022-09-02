import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import ShowInfo from ".";

describe('FieldInput Component testing', () => {
  it('test props id & info', () => {
    render(<ShowInfo id="test" info="Information" />);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByText(/information/i)).toBeInTheDocument();
  })

  it('test type prop', () => {
    const { container } = render(<ShowInfo id="test" info="Information" type="textarea" />)
    expect(screen.getByText(/information/i)).toHaveClass('text-area');
    expect(container.getElementsByClassName('show-info-container')[0]).not.toHaveClass('display-row');
  })
})