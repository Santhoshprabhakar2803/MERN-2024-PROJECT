import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './pages/Home';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Unit testing for Home.js file
test('test for home js',()=>{
  render(<Home/>);
  const heading = screen.getByText(/Shirts/i);
  expect(heading).toBeInTheDocument();
});

// npm run test
test('test2 for home.js',()=>{
  render(<Home/>);
  const element = screen.getAllByTestId(/test2/i);
  expect(element[0]).toBeInTheDocument();
})