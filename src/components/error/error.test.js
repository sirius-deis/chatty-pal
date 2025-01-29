import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './error';

describe('Error component', () => {
  it('should render error message', () => {
    render(<Error>Test error message</Error>);
    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });

  it('should apply custom font size', () => {
    render(<Error fSize={16}>Custom size error</Error>);
    const errorElement = screen.getByText('Custom size error');
    expect(errorElement).toHaveStyle('font-size: 16rem');
  });

  it('should render without font size prop', () => {
    render(<Error>Default size error</Error>);
    expect(screen.getByText('Default size error')).toBeInTheDocument();
  });

  it('should render with children as a node', () => {
    render(
      <Error>
        <span>Nested error message</span>
      </Error>
    );
    expect(screen.getByText('Nested error message')).toBeInTheDocument();
  });
});