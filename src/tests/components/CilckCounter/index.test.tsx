import React from 'react';
import { render } from 'enzyme';
import ClickCounter from '@/components/ClickCounter';

describe('Click counter render check', () => {
  it('should render to static HTML', () => {
    expect(render(<ClickCounter />).text()).toEqual('Clicked 0 times!');
  });
});
