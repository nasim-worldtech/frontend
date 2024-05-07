import { Link } from 'react-router-dom';
import { parseIdFromUrl } from '../../utills/parseUrl';
import { IUser, handlePagination } from '../../types/types.adminPanel';

type UserTableProps = {
  users: any;
  handlePagination: handlePagination;
};

const UserTable: React.FC<UserTableProps> = ({ users, handlePagination }) => {
  console.log(users, 'users table');
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="table-header">Sl. No</th>
              <th className="table-header">Name</th>
              <th className="table-header">User Name</th>
              <th className="table-header">Email</th>
              <th className="table-header">Contact</th>
              <th className="table-header">Status</th>
            </tr>
          </thead>
          <tbody>
            {(users?.data as IUser[])?.map((user: IUser, index: number) => {
              return (
                <tr key={user?.id}>
                  <td className="table-details">
                    <h5 className="font-medium text-black dark:text-white">
                      {index + 1}
                    </h5>
                  </td>
                  <td className="table-details">
                    <h5 className="font-medium text-black dark:text-white">
                      {user?.name}
                    </h5>
                  </td>
                  <td className="table-details">
                    <h5 className="font-medium text-black dark:text-white">
                      {user?.userName}
                    </h5>
                  </td>
                  <td className="table-details">
                    <h5 className="font-medium text-black dark:text-white">
                      {user?.email}
                    </h5>
                  </td>
                  <td className="table-details">
                    <h5 className="font-medium text-black dark:text-white">
                      {user?.contact}
                    </h5>
                  </td>
                  <td className="table-details">
                    <p className="text-black dark:text-white">
                      {user?.status ? 'Active' : 'In Active'}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ul className="pagination mx-auto justify-end mt-6 mb-2">
          {users?.meta?.links.map((link: any) => (
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

export default UserTable;
