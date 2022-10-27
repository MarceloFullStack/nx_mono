import { render } from '@testing-library/react';

import Soteste from './soteste';

describe('Soteste', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Soteste />);
    expect(baseElement).toBeTruthy();
  });
});
