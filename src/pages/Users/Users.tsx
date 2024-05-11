import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import UserTable from '../../components/Tables/UserTable';
import { apis } from '../../apis/apis';

const Users = () => {
  const [userList, setUserList] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchUserDataHandler = async (pageId: number) => {
    try {
      const response = await apis.fetchUserData(pageId);
      setUserList(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserDataHandler(currentPage);
  }, []);

  const handleUsersPagination = (pageLabel: number) => {
    setCurrentPage(pageLabel);
    fetchUserDataHandler(pageLabel);
  };

  return (
    <>
      <Breadcrumb pageName="User list" />
      <div className="flex flex-col gap-10">
        <UserTable
          users={userList}
          handlePagination={handleUsersPagination}
          fetchUserDataHandler={fetchUserDataHandler}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default Users;
