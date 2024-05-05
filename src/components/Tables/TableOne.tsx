import { FaEye, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { parseIdFromUrl } from '../../utills/parseUrl';

const TableOne = ({ data, handleHistoriesPagination }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Sl. No
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Email
              </th>
              <th className=" py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white">
                Agent
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.length &&
              data?.data?.map((loginHistory: any, index: number) => {
                return (
                  <tr key={loginHistory.id}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {index + 1}
                      </h5>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {loginHistory?.email}
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {loginHistory?.status}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {loginHistory?.userAgent}
                      </p>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button className="hover:text-primary">
                          <FaEye />
                        </button>
                        <button className="hover:text-primary">
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
        <ul className="pagination mx-auto justify-end mt-6 mb-2">
          {data?.meta?.links.map((link: any, index) => (
            <li key={index}>
              {link.url ? (
                <Link
                  to="#"
                  onClick={() =>
                    handleHistoriesPagination(parseIdFromUrl(link.url))
                  }
                  dangerouslySetInnerHTML={{ __html: link.label }}
                  className={`${
                    link.active
                      ? 'font-bold text-red-500'
                      : 'text-black dark:text-white'
                  } text-md px-1`}
                ></Link>
              ) : (
                <span
                  dangerouslySetInnerHTML={{ __html: link.label }}
                  className="text-black dark:text-white"
                ></span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TableOne;
