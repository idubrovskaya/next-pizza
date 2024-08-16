'use client';

import { cn } from '@/lib/utils';

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface GroupVariantsProps {
  items: readonly Variant[];
  onClick?: (value: Variant['value']) => void;
  className?: string;
  selectedValue?: Variant['value'];
}

export const GroupVariants: React.FC<GroupVariantsProps> = ({
  items,
  onClick,
  className,
  selectedValue,
}) => {
  return (
    <div
      className={cn(
        'flex justify-between bg-[#f3f3f7] rounded-3xl p-1 select-none'
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            'flex items-center justify-center h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm cursor-pointer',
            {
              'bg-white shadow': item.value === selectedValue,
              'text-gray-500 opacity-50 pointer-events-none': item.disabled,
            }
          )}
        >
          {item.name}{' '}
        </button>
      ))}
    </div>
  );
};
