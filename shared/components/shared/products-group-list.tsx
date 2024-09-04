'use client';

import React, { useEffect } from 'react';
import { useIntersection } from 'react-use';
import { Title } from './title';
import { cn } from '@/shared/lib/utils';
import { ProductCard } from './product-card';
import { useCategoryStore } from '@/shared/store/category';
import { Product } from '@prisma/client';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
  title: string;
  items: ProductWithRelations[];
  categoryId: number;
  listClassName?: string;
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  listClassName,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, title, intersection?.isIntersecting]);

  return (
    <div id={title} ref={intersectionRef}>
      <Title text={title} size='lg' className='font-extrabold mb-5' />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((item, index) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.productItems[0].price}
            imageUrl={item.imageUrl}
            ingredients={item.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
