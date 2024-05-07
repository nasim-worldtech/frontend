import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import userActionMenus from '../../utills/menus/userActionMenus';
import { IoChevronDown } from 'react-icons/io5';
const ActionMenu = () => {
  return (
    <>
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-black dark:text-white dark:shadow-inner dark:shadow-white/10 shadow-sm shadow-black/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Actions
          {/* <ChevronDownIcon  /> */}
          <IoChevronDown className="size-4 text-black dark:text-white" />
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className="w-62 origin-top-right rounded-xl border bg-gray-2 dark:bg-boxdark border-white/5 p-1 text-sm/6 dark:text-white text-black [--anchor-gap:var(--spacing-1)] focus:outline-none"
          >
            {userActionMenus.map((link) => (
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/80 dark:data-[focus]:bg-white/10">
                  {link.icon}
                  {link.label}
                </button>
              </MenuItem>
            ))}
          </MenuItems>
        </Transition>
      </Menu>
    </>
  );
};

export default ActionMenu;
