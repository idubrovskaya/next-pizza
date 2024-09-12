'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token='51950bec82f5253df35dc61f7bce006c1b984935'
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
