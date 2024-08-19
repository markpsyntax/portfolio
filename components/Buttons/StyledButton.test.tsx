// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { StyledButton } from './StyledButton';
// import '@testing-library/jest-dom';

// describe('StyledButton', () => {
//   test('renders the button with children', () => {
//     render(<StyledButton>Click me</StyledButton>);
//     expect(
//       screen.getByRole('button', { name: /click me/i })
//     ).toBeInTheDocument();
//   });

//   test('calls onClick prop when clicked', () => {
//     const handleClick = jest.fn();
//     render(<StyledButton onClick={handleClick}>Click me</StyledButton>);
//     fireEvent.click(screen.getByRole('button', { name: /click me/i }));
//     expect(handleClick).toHaveBeenCalledTimes(1);
//   });
// });
