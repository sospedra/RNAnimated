import 'react-native';
import React from 'react';
import Index from '../index.ios.js';
import Box from '../box';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});

it('renders the box', () => {
  const tree = renderer.create(
    <Box />
  );
});
