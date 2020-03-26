import * as React from 'react';
import { render } from '@testing-library/react';
import * as Icons from '.';

describe('Without className', () => {
  test.each(Object.keys(Icons))('Icon %s', icon => {
    const Icon = Object.entries(Icons).find(([name]) => name === icon)?.[1];
    if (!Icon) throw new Error(`Icon ${icon} doesn't exists`);
    expect(render(<Icon />).container).toMatchSnapshot();
  });
});

describe('With className', () => {
  describe('string', () => {
    test.each(Object.keys(Icons))('Icon %s', icon => {
      const Icon = Object.entries(Icons).find(([name]) => name === icon)?.[1];
      if (!Icon) throw new Error(`Icon ${icon} doesn't exists`);
      expect(render(<Icon className="w-4 h-4" />).container).toMatchSnapshot();
    });
  });

  describe('object', () => {
    test.each(Object.keys(Icons))('Icon %s', icon => {
      const Icon = Object.entries(Icons).find(([name]) => name === icon)?.[1];
      if (!Icon) throw new Error(`Icon ${icon} doesn't exists`);
      expect(
        render(<Icon className={{ 'w-4': true, 'h-4': false }} />).container
      ).toMatchSnapshot();
    });
  });
});
