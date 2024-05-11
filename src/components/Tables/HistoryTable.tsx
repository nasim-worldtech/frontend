import { Link } from 'react-router-dom';
import { parseIdFromUrl } from '../../utills/parseUrl';
import { handlePagination } from '../../types/types.adminPanel';
import React from 'react';

interface IHistoryTableProps {
  histories: any;
  handlePagination: handlePagination;
}

const HistoryTable: React.FC<IHistoryTableProps> = ({
  histories,
  handlePagination,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="table-header">Sl. No</th>
              <th className="table-header">User Name</th>
              <th className="table-header">Request Ip</th>
              <th className="min-w-[200px] table-header">User Agent</th>
              <th className="table-header">Email</th>
              <th className="table-header">Request For</th>
              <th className="table-header">Remark</th>
              <th className="table-header">Status</th>
              <th className="table-header">Request At</th>
            </tr>
          </thead>
          <tbody>
            {histories?.data?.map((loginHistory: any, index: number) => {
              return (
                <tr key={loginHistory?.id}>
                  <td className="table-details">
                    <h5 className="font-medium text-black dark:text-white">
                      {index + 1}
                    </h5>
                  </td>
                  <td className="table-details">
                    <h5 className="font-medium text-black dark:text-white">
                      {loginHistory?.user?.name}
                    </h5>
                  </td>
                  <td className="table-details">
                    <h5 className="font-medium text-black dark:text-white">
                      {loginHistory?.requestIp}
                    </h5>
                  </td>
                  <td className="table-details">
                    <h5 className="font-medium text-black dark:text-white">
                      {loginHistory?.userAgent}
                    </h5>
                  </td>
                  <td className="table-details">
                    <h5 className="font-medium text-black dark:text-white">
                      {loginHistory?.email}
                    </h5>
                  </td>
                  <td className="table-details">
                    <h5 className="font-medium text-black dark:text-white">
                      {loginHistory?.requestFor}
                    </h5>
                  </td>
                  <td className="table-details">
                    <h5 className="font-medium text-black dark:text-white">
                      {loginHistory?.remark}
                    </h5>
                  </td>
                  <td className="table-details">
                    <p className="text-black dark:text-white">
                      {loginHistory?.status}
                    </p>
                  </td>
                  <td className="table-details">
                    <p className="text-black dark:text-white">
                      {loginHistory?.requestAt}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ul className="pagination mx-auto justify-end mt-6 mb-2">
          {histories?.meta?.links.map((link: any) => (
            <li key={link?.id}>
              {link.url ? (
                <Link
                  to="#"
                  onClick={() => handlePagination(parseIdFromUrl(link.url))}
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

export default HistoryTable;
