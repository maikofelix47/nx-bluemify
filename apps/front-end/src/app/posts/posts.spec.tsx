import { render } from '@testing-library/react';

import Posts from './posts';

describe('Posts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Posts />);
    expect(baseElement).toBeTruthy();
  });
});
