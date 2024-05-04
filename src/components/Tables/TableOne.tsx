import { useState } from 'react';
import { HandleDeleteFunction, IPost } from '../../types/types.adminPanel';
import Modal from '../Modal/Modal';
import { FaEye, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

const TableOne = ({
  data,
  handleDelete,
}: {
  data: IPost[];
  handleDelete: HandleDeleteFunction;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [postIdToDelete, setPostIdToDelete] = useState<number | null>(null);

  const handleOpenModal = (postId: number) => {
    setOpen(true);
    setPostIdToDelete(postId);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setPostIdToDelete(null);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Index
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Comments
              </th>
              <th className=" py-4 px-4 font-medium text-black dark:text-white">
                Email
              </th>
              <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white">
                Post
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length &&
              data.map((post: IPost) => {
                return (
                  <tr key={post.id}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {post.id}
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {post.name}
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">{post.email}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">{post.body}</p>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button className="hover:text-primary">
                          <FaEye />
                        </button>
                        <button
                          className="hover:text-primary"
                          onClick={() => handleOpenModal(post.id)}
                        >
                          <FaRegTrashAlt />
                        </button>
                        <button className="hover:text-primary">
                          <FaRegEdit />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {open && (
          <Modal open={open} onClose={handleCloseModal}>
            <div className="text-center w-60">
              <div className="mx-auto my-4 w-52">
                <h3 className="text-lg font-black text-gray-800">
                  Confirm Delete
                </h3>
                <p className="text-sm text-gray-500">
                  Are you sure you want to delete this item?
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  className="btn btn-danger w-full"
                  onClick={() => {
                    if (postIdToDelete !== null) {
                      handleDelete(postIdToDelete);
                      handleCloseModal();
                    }
                  }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary w-full"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default TableOne;
