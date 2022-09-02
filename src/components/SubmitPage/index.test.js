import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import SubmitPage from ".";
import store from '../../features/store';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <Router history={history}>
      {children}
    </Router>
  </Provider>
)

describe('submit page testing', () => {
  it('i am on correct page', () => {
    render(<SubmitPage />, { wrapper: Wrapper });
    expect(screen.getByText(/please enter your information/i)).toBeInTheDocument();
  })

  it('all elements are rendered correctly', () => {
    render(<SubmitPage />, { wrapper: Wrapper });
    const firstName = screen.getByLabelText('First Name*');
    expect(firstName).toBeInTheDocument();
    const lastName = screen.getByLabelText('Last Name*');
    expect(lastName).toBeInTheDocument();
    const email = screen.getByLabelText('Email*');
    expect(email).toBeInTheDocument();
    const phone = screen.getByLabelText('Phone*');
    expect(phone).toBeInTheDocument();
    const address = screen.getByLabelText('Address');
    expect(address).toBeInTheDocument();
    const city = screen.getByLabelText('City');
    expect(city).toBeInTheDocument();
    const state = screen.getByLabelText('State');
    expect(state).toBeInTheDocument();
    const jobTitle = screen.getByLabelText('Job Title');
    expect(jobTitle).toBeInTheDocument();
    const reason = screen.getByLabelText('Reason');
    expect(reason).toBeInTheDocument();
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  })

  it('check required fields', () => {
    render(<SubmitPage />, { wrapper: Wrapper });
    const firstName = screen.getByLabelText('First Name*');
    const lastName = screen.getByLabelText('Last Name*');
    const email = screen.getByLabelText('Email*');
    const phone = screen.getByLabelText('Phone*');
    const address = screen.getByLabelText('Address');
    const city = screen.getByLabelText('City');
    const state = screen.getByLabelText('State');
    const jobTitle = screen.getByLabelText('Job Title');
    const reason = screen.getByLabelText('Reason');
    const submitButton = screen.getByRole('button');

    fireEvent.change(firstName, { target: { value: '' } });
    fireEvent.change(lastName, { target: { value: '' } });
    fireEvent.change(email, { target: { value: '' } });
    fireEvent.change(phone, { target: { value: '' } });
    fireEvent.change(address, { target: { value: '' } });
    fireEvent.change(city, { target: { value: '' } });
    fireEvent.change(state, { target: { value: '' } });
    fireEvent.change(jobTitle, { target: { value: '' } });
    fireEvent.change(reason, { target: { value: '' } });

    fireEvent.click(submitButton);
    expect(screen.getAllByText(/this field is required/i)).toHaveLength(4);

    fireEvent.change(firstName, { target: { value: 'Lucas Hahn' } });
    fireEvent.change(lastName, { target: { value: 'Lucas Hahn' } });
    fireEvent.change(email, { target: { value: 'lucas.hahn7121' } });
    fireEvent.change(phone, { target: { value: '123456abc' } });
    fireEvent.change(address, { target: { value: '' } });
    fireEvent.change(city, { target: { value: '' } });
    fireEvent.change(state, { target: { value: '' } });
    fireEvent.change(jobTitle, { target: { value: '' } });
    fireEvent.change(reason, { target: { value: '' } });

    fireEvent.click(submitButton);
    expect(screen.getAllByText(/invalid/i)).toHaveLength(4);
  })

  it('move to another page when click submit button', () => {
    render(<SubmitPage />, { wrapper: Wrapper });
    const firstName = screen.getByLabelText('First Name*');
    const lastName = screen.getByLabelText('Last Name*');
    const email = screen.getByLabelText('Email*');
    const phone = screen.getByLabelText('Phone*');
    const address = screen.getByLabelText('Address');
    const city = screen.getByLabelText('City');
    const state = screen.getByLabelText('State');
    const jobTitle = screen.getByLabelText('Job Title');
    const reason = screen.getByLabelText('Reason');

    fireEvent.change(firstName, { target: { value: 'Lucas' } });
    fireEvent.change(lastName, { target: { value: 'Hahn' } });
    fireEvent.change(email, { target: { value: 'lucas.hahn7121@gmail.com' } });
    fireEvent.change(phone, { target: { value: '+17327017474' } });
    fireEvent.change(address, { target: { value: '215 SHERRY STREET' } });
    fireEvent.change(city, { target: { value: 'Woodbridge' } });
    fireEvent.change(state, { target: { value: 'NJ' } });
    fireEvent.change(jobTitle, { target: { value: 'Engineer - front end focused' } });
    fireEvent.change(reason, { target: { value: 'I love software engineering.' } });

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);
    expect(history.location.pathname).toBe("/success");
  })
})