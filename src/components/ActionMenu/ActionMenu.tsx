import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import toast, { Toaster } from 'react-hot-toast';
import { AiFillDelete } from 'react-icons/ai';
import { FaEye, FaLock, FaPause, FaRegEdit } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';
import { apis } from '../../apis/apis';
import Modal from '../Modal/Modal';
import { AxiosError } from 'axios';
import { IUser } from '../../types/types.adminPanel';

interface ActionMenuProps {
  user: IUser;
  fetchUserDataHandler: (pageId: number) => void;
  currentPage: number;
}

const ActionMenu: React.FC<ActionMenuProps> = ({
  user,
  fetchUserDataHandler,
  currentPage,
}) => {
  const { id, userName } = user;
  let [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
  };

  const deleteUserHandler = async () => {
    try {
      const response = await apis.deleteUser(id);
      if (response?.data.status_code == 200) {
        fetchUserDataHandler(currentPage);
        toast.success(response?.data.message);
        close();
      }
    } catch (error) {
      toast.error((error as AxiosError).message);
      close();
    }
  };

  return (
    <>
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-black dark:text-white dark:shadow-inner dark:shadow-white/10 shadow-sm shadow-black/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Actions
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
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/80 dark:data-[focus]:bg-white/10">
                <FaEye />
                View
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/80 dark:data-[focus]:bg-white/10">
                <FaRegEdit />
                Edit
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/80 dark:data-[focus]:bg-white/10">
                <FaPause />
                License
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/80 dark:data-[focus]:bg-white/10">
                <FaRegEdit />
                InActive
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/80 dark:data-[focus]:bg-white/10">
                <FaLock />
                Enable OTP
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/80 dark:data-[focus]:bg-white/10">
                <FaLock />
                Enable Email Verification
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/80 dark:data-[focus]:bg-white/10">
                <FaLock />
                Enable Contact Verification
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/80 dark:data-[focus]:bg-white/10">
                <FaRegEdit />
                Reset Password
              </button>
            </MenuItem>
            <MenuItem>
              <button
                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/80 dark:data-[focus]:bg-white/10"
                onClick={() => setIsOpen(true)}
              >
                <AiFillDelete />
                Delete
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
      <Modal isOpen={isOpen} close={close}>
        <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
          <DialogTitle as="h3" className="text-base/7 font-medium text-white">
            Alert
          </DialogTitle>
          <p className="mt-2 text-sm/6 text-white/50">
            Do you really want to delete,{' '}
            <span className="text-white font-normal">{userName}</span>
          </p>
          <div className="mt-4 text-end flex justify-end gap-2 items-center">
            <Button className="btn-primary" onClick={close}>
              Close
            </Button>
            <Button className="btn-danger" onClick={deleteUserHandler}>
              Confirm
            </Button>
          </div>
        </DialogPanel>
      </Modal>
      <Toaster />
    </>
  );
};

export default ActionMenu;
