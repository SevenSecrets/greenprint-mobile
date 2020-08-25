import { render } from '@testing-library/react-native';
import 'react-native';
import React from 'react';
import AppText from '../components/AppText';

test('it renders text', () => {
    const { getByText } = render(<AppText>Test Text</AppText>);
    expect(getByText(/test text/i)).toBeTruthy();
})