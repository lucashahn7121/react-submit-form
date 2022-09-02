import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from '../../features/store';
import { createMemoryHistory } from 'history';
import SuccessPage from ".";

const history = createMemoryHistory();

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <Router history={history}>
      {children}
    </Router>
  </Provider>
)

describe('success page testing', () => {
  it('i am on correct page', () => {
    render(<SuccessPage />, { wrapper: Wrapper });
    expect(screen.getByText(/thank you/i)).toBeInTheDocument();
  })
  
  it('test entering url manually', () => {
    expect(history.location.pathname).toBe("/");
  })

  it('all elements are rendered correctly', () => {
    render(<SuccessPage />, { wrapper: Wrapper });

    const firstName = screen.getByText(/first name/i);
    expect(firstName).toBeInTheDocument();
    const lastName = screen.getByText(/last name/i);
    expect(lastName).toBeInTheDocument();
    const email = screen.getByText(/email/i);
    expect(email).toBeInTheDocument();
    const phone = screen.getByText(/phone/i);
    expect(phone).toBeInTheDocument();
    const address = screen.getByText(/address/i);
    expect(address).toBeInTheDocument();
    const city = screen.getByText(/city/i);
    expect(city).toBeInTheDocument();
    const state = screen.getByText(/state/i);
    expect(state).toBeInTheDocument();
    const jobTitle = screen.getByText(/job title/i);
    expect(jobTitle).toBeInTheDocument();
    const reason = screen.getByText(/reason/i);
    expect(reason).toBeInTheDocument();
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  })

  it('move to another page when click back button', () => {
    render(<SuccessPage />, { wrapper: Wrapper });
    const backButton = screen.getByRole('button');
    fireEvent.click(backButton);
    expect(history.location.pathname).toBe("/");
  })
})