import {
  Container,
  Filters,
  ProductsGroupList,
  Stories,
  Title,
  TopBar,
} from '@/shared/components/shared';
import { findPizzas, GetSearchParams } from '@/shared/lib/find-pizzas';

export default async function Home({
  searchParams,
}: {
  searchParams: GetSearchParams;
}) {
  const categories = await findPizzas(searchParams);

  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' className='font-extrabold' />
      </Container>
      <TopBar
        categories={categories.filter(
          (category) => category.products.length > 0
        )}
      />

      <Stories />

      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          {/* Фильтрация */}
          <div className='w-[250px]'>
            <Filters />
          </div>

          {/* Список товаров */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      items={category.products}
                      categoryId={category.id}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
