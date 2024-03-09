'use client';

import './style.css';
import { listInputGlobal } from '@/types/types-general';
import React, { useEffect, useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import map from 'lodash.map';

interface IProps {
  listInputGlobal: listInputGlobal[];
  setValueInput?: any;
  register: any;
  errors: any;
  handleOnChangeArea?: (key: string, value: string) => void;
}

interface IPropsItemSelectOption {
  itemSelectOption: any;
  setValueInputSelectOption: any;
  handleOnChangeArea?: (key: string, value: string) => void;
}

function ItemSelectOption(props: IPropsItemSelectOption) {
  const { itemSelectOption, setValueInputSelectOption, handleOnChangeArea } =
    props;
  const [open, setOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState<string | number | undefined>(
    undefined
  );
  const [searchVal, setSearchVal] = useState<string>("")

  const handleSearchVal = (value: any) => {
    setSearchVal(value);
};
  const filteredOptions = itemSelectOption.listOption.filter((itemOption: any) =>
  itemOption.label.toLowerCase().includes(searchVal.toLowerCase())
);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full h-[3.43rem] justify-between max-md:h-[10rem] max-md:text-[4rem] max-md:pl-[10px]"
        >
          {currentValue ? (
            <span className="text-[#414141]">
              {filteredOptions &&
                filteredOptions.find(
                  (item: any) => item.value === currentValue
                )?.label}
            </span>
          ) : (
            <span className="text-[#E3E3E3]">
              {itemSelectOption.placeHolder ?? 'No data found.'}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        style={{
          width:
            window.innerWidth > 767
              ? itemSelectOption.width ?? '25rem'
              : '87.8rem',
        }}
        className={cn('p-0')}
      >
        <Command className="w-full" shouldFilter={false}>
          <CommandInput
            placeholder={itemSelectOption?.placeHolder ?? ''}
            className="h-9 w-full max-md:text-[2.875rem] max-md:leading-[4.25rem] max-md:h-[7rem]"
            onValueChange={(value)=>handleSearchVal(value)}
            value={searchVal}
          />

          {/* <CommandEmpty>No data found.</CommandEmpty> */}
          <CommandGroup className="w-full max-h-[30rem] overflow-y-auto max-md:max-h-[60rem]">
            {filteredOptions.length > 0?
            (filteredOptions.map((itemOption:any)=><CommandItem
            key={itemOption.value}
            value={itemOption.value}
            onSelect={(value: string) => {
              // eslint-disable-next-line no-unused-expressions
              handleOnChangeArea &&
                handleOnChangeArea(itemSelectOption?.name, value);
              setCurrentValue(value === currentValue ? '' : value);
              setValueInputSelectOption(itemSelectOption.name, value);
              setOpen(false);
            }}
            className="w-full"
          >
            <span className="max-md:text-[2.875rem] max-md:leading-[4.25rem]">
              {itemOption.label}
            </span>
            <CheckIcon
              className={cn(
                'ml-auto h-4 w-4',
                currentValue === itemOption.value
                  ? 'opacity-100'
                  : 'opacity-0'
              )}
            />
          </CommandItem>))
            :(<CommandEmpty>No data found.</CommandEmpty>)}
          </CommandGroup>
       
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default function GroupInputGlobal(props: IProps) {
  const {
    listInputGlobal,
    setValueInput,
    register,
    handleOnChangeArea,
    errors,
  } = props;

  return (
    <div className="input-global">
      {listInputGlobal &&
        listInputGlobal.map((item, index) => (
          <div key={index}>
            {item.type === 'input' && (
              <div className="mb-[1rem] max-md:mb-[3rem]">
                <label
                  className=" font-medium py-[0px] px-[4px] text-[#414141] transition-all duration-100 ease-linear max-md:text-[4rem]"
                  htmlFor="input"
                >
                  {item.placeHolder}{' '}
                  {item.require && <span className="text-red-700">*</span>}:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    {...register(item.name, { required: item.require })}
                    name="input"
                    placeholder={item.placeHolder}
                    onChange={(value) =>{
                      setValueInput(item.name, value.target.value)

                    }
                    }
                    className="px-[1rem] font-medium placeholder:text-[#E3E3E3] text-[#414141] border-[1px] border-[#EAEAEA] outline-[#EAEAEA] focus:outline-[#55D5D2] focus:border-[#55D5D2] rounded-[0.3rem] h-[3.43rem]  w-full text-[1rem] transition-all duration-100 ease-linear max-md:h-[10rem] max-md:text-[4rem]"
                  />
             
                </div>
                {errors[item.name] && (
                  <span className="mt-[0.5rem] text-[#ff5660] font-bold text-[0.8rem] pb-[0.4rem] max-md:text-[3rem] max-md:mt-[0.1rem]">
                    {errors[item.name].message}
                  </span>
                )}
              </div>
            )}

            {item.type === 'text-area' && (
              <div className="mb-[1rem] max-md:mb-[3rem]">
                <label
                  className=" font-medium py-[0px] px-[4px] text-[#414141] transition-all duration-100 ease-linear max-md:text-[4rem]"
                  htmlFor="input"
                >
                  {item.placeHolder}{' '}
                  {item.require && <span className="text-red-700">*</span>}:
                </label>
                <div className="relative">
                  <textarea
                    name="comment"
                    rows="3"
                    cols="30"
                    {...register(item.name, { required: item.require })}
                    placeholder={item.placeHolder}
                    onChange={(value) =>
                      setValueInput(item.name, value.target.value)
                    }
                    className="px-[1rem] py-[1rem] border-2 placeholder:text-[#E3E3E3] text-[#414141] border-[#EAEAEA] font-medium
                    outline-[#EAEAEA] focus:outline-[#55D5D2]
                    focus:border-[#55D5D2] rounded-[0.3rem] h-[8rem] w-full
                    text-[1rem] transition-all duration-100 ease-linear max-md:h-[10rem] max-md:text-[4rem]"
                  />
             
                </div>
                {errors[item.name] && (
                  <span className="mt-[0.5rem] text-[#ff5660] font-bold text-[0.8rem] pb-[0.4rem] max-md:text-[3rem]">
                    {errors[item.name].message}
                  </span>
                )}
              </div>
            )}

            {item.type === 'select-option' && (
              <div className="mb-[1rem] max-md:mb-[3rem]">
                <label
                  className=" font-medium py-[0px] px-[4px] text-[#414141] transition-all duration-100 ease-linear max-md:text-[4rem]"
                  htmlFor="input"
                >
                  {item.placeHolder} <span className="text-red-700">*</span>:
                </label>
                <ItemSelectOption
                  itemSelectOption={item}
                  setValueInputSelectOption={setValueInput}
                  handleOnChangeArea={handleOnChangeArea}
                />
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
