import { render } from '@testing-library/react';

import { PageLayoutPersistentDrawer } from './PageLayoutPersistentDrawer';

describe('PageLayoutPersistentDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageLayoutPersistentDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
