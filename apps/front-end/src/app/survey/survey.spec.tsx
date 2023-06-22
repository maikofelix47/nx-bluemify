import { render } from '@testing-library/react';

import Survey from './survey';

describe('Survey', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Survey />);
    expect(baseElement).toBeTruthy();
  });
});
