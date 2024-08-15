'use client';

import React, { useState } from 'react';
import { FilterCheckboxProps, FilterCheckbox } from './filter-checkbox';
import { Input, Skeleton } from '../ui';

type Items = FilterCheckboxProps;

interface Props {
  title: string;
  items: Items[];
  defaultItems?: Items[];
  limit?: number;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  loading?: boolean;
  selectedValues?: Set<string>;
  name?: string;
  className?: string;
}

export const CheckboxFilterGroups: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  onClickCheckbox,
  defaultValue,
  loading,
  selectedValues,
  name,
  className,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  if (loading) {
    return (
      <div className={className}>
        <p className='font-bold mb-3'>{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className='h-6 mb-4 rounded-[8px]' />
          ))}
        <Skeleton className='w-28 h-6 mb-3 rounded-[8px]' />
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : (defaultItems || items).slice(0, limit);

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <p className='font-bold mb-3 '>{title}</p>

      {showAll && (
        <div className='mb-5'>
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className='bg-gray-50 border-none'
          />
        </div>
      )}

      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {list.map((item, index) => (
          <FilterCheckbox
            text={item.text}
            value={item.value}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            checked={selectedValues?.has(item.value)}
            key={index}
            endAdornment={item.endAdornment}
            name={name}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t neutral-100 mt-4' : ''}>
          <button
            className='text-primary mt-3'
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  );
};
