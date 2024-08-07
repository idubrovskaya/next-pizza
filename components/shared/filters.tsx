import React from 'react';
import { Title } from './title';
import { FilterCheckbox, RangeSlider } from '.';
import { Input } from '../ui';
import { CheckboxFilterGroups } from './checkbox-filter-groups';

interface Props {}

export const Filters: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      {/* верхние чекбоксы */}

      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Можно собирать' value='1' />
        <FilterCheckbox text='Новинки' value='2' />

        {/* ранжирование цен */}

        <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
          <p className='font-bold mb-3'>Цена от и до:</p>
          <div className='flex gap-3 mb-5'>
            <Input
              type='number'
              placeholder='0'
              min={0}
              max={1000}
              defaultValue={0}
            />
            <Input type='number' placeholder='1000' min={100} max={1000} />
          </div>
          <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
        </div>

        {/* ингредиенты */}

        <CheckboxFilterGroups
          className='mt-5'
          title='Ингредиенты'
          limit={6}
          defaultItems={[
            { text: 'Tomato', value: '6' },
            { text: 'Mozarella', value: '6' },
          ]}
          items={[
            { text: 'Tomato', value: '6' },
            { text: 'Mozarella', value: '6' },
          ]}
        />
      </div>
    </div>
  );
};
