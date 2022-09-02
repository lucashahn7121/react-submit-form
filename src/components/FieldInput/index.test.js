import { fireEvent, render, screen } from "@testing-library/react";
import FieldInput from ".";

describe('FieldInput Component testing', () => {
  it('test input change', () => {
    const mockOnChange = jest.fn();
    render(<FieldInput type="text" id="inputTest" onChange={mockOnChange} />);
    const testInput = screen.getByLabelText('Input Test');
    expect(testInput).toBeInTheDocument();
    fireEvent.change(testInput, { target: { value: '1' } });
    expect(mockOnChange).toBeCalled();
  });

  it('test select change', () => {
    const mockOnChange = jest.fn();
    render(<FieldInput type="select" id="selectTest" onChange={mockOnChange} />);
    const testSelect = screen.getByLabelText('Select Test');
    expect(testSelect).toBeInTheDocument();
    fireEvent.change(testSelect, { target: { value: '1' } });
    expect(mockOnChange).toBeCalled();
  });

  it('test textarea change', () => {
    const mockOnChange = jest.fn();
    render(<FieldInput type="textarea" id="textareaTest" onChange={mockOnChange} />);
    const testTextarea = screen.getByLabelText('Textarea Test');
    expect(testTextarea).toBeInTheDocument();
    fireEvent.change(testTextarea, { target: { value: '1' } });
    expect(mockOnChange).toBeCalled();
  });

  it('test props-1', () => {

    const mockOnChange = jest.fn();
    render(<FieldInput
      type="text"
      id="inputTest"
      onChange={mockOnChange}
      placeholder = 'Write something'
      required = {true}
      inputVal = 'inputVal'
    />);
    const testInput = screen.getByLabelText('Input Test*');
    expect(testInput).toBeInTheDocument();
    fireEvent.change(testInput, { target: {value: '1'} });
    expect(mockOnChange).toBeCalled();
    expect(testInput.placeholder).toBe('Write something');
    expect(testInput.value).toBe('inputVal');
  })

  it('test props-2', () => {
    const { container } = render(<FieldInput
      type="textarea"
      id="test"
    />);
    expect(container.querySelector('input')).not.toBeInTheDocument();
    expect(container.querySelector('textarea')).toBeInTheDocument();
    expect(container.querySelector('select')).not.toBeInTheDocument();
  })

  it('test props-3', () => {
    const { container } = render(<FieldInput
      type="select"
      id="test"
    />);
    expect(container.querySelector('input')).not.toBeInTheDocument();
    expect(container.querySelector('textarea')).not.toBeInTheDocument();
    expect(container.querySelector('select')).toBeInTheDocument();
  })

  it('test props-4', () => {
    const { container } = render(<FieldInput
      type="notValidType"
      id="test"
    />);
    expect(container.querySelector('input')).not.toBeInTheDocument();
    expect(container.querySelector('textarea')).not.toBeInTheDocument();
    expect(container.querySelector('select')).not.toBeInTheDocument();
  })
})