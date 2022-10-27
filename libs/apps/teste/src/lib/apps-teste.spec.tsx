import { render } from '@testing-library/react';

import AppsTeste from './apps-teste';

describe('AppsTeste', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppsTeste />);
    expect(baseElement).toBeTruthy();
  });
});
