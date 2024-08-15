'use client';

import React from 'react';
import { Title } from './title';
import { RangeSlider } from '.';
import { Input } from '../ui';
import { CheckboxFilterGroups } from './checkbox-filter-groups';
import { useIngredients } from '@/hooks/use-ingredients';
import { useFilters } from '@/hooks/use-filters';
import { useQueryFilters } from '@/hooks/use-query-filters';

interface Props {}

export const Filters: React.FC<Props> = ({}) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  };

  useQueryFilters(filters);

  const items = ingredients.map((ingredient) => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));

  return (
    <div>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      {/* верхние чекбоксы */}

      <CheckboxFilterGroups
        className='mt-5'
        title='Тип теста'
        selectedValues={filters.pizzaTypes}
        onClickCheckbox={filters.setPizzaTypes}
        items={[
          { text: 'Тонкое', value: '1' },
          { text: 'Традиционное', value: '2' },
        ]}
        name='pizzaTypes'
      />

      <CheckboxFilterGroups
        className='mt-5'
        title='Размеры'
        selectedValues={filters.selectedSizes}
        onClickCheckbox={filters.setSizes}
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
        name='sizes'
      />

      {/* ранжирование цен */}

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={1000}
            value={String(filters.prices.priceFrom)}
            onChange={(event) =>
              filters.setPrices('priceFrom', Number(event.target.value))
            }
          />
          <Input
            type='number'
            placeholder='1000'
            min={100}
            max={1000}
            value={String(filters.prices.priceTo)}
            onChange={(event) =>
              filters.setPrices('priceTo', Number(event.target.value))
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 1000,
          ]}
          onValueChange={updatePrices}
        />
      </div>

      {/* ингредиенты */}

      <CheckboxFilterGroups
        className='mt-5'
        title='Ингредиенты'
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selectedValues={filters.selectedIngredients}
        name='ingredients'
      />
    </div>
  );
};
