import { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import axios from 'axios';
import UserTable from '../../components/Tables/UserTable';

const Users = () => {
  const [userList, setUserList] = useState<any>([]);

  const fetchUserData = async (pageId: number) => {
    try {
      const response = await axios.get(`/users?page=${pageId}`);
      setUserList(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData(1);
  }, []);

  const handleUsersPagination = (pageLabel: number) => {
    fetchUserData(pageLabel);
  };

  console.log(userList, 'user manage');
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Login History" />
      <div className="flex flex-col gap-10">
        <UserTable users={userList} handlePagination={handleUsersPagination} />
      </div>
    </DefaultLayout>
  );
};

export default Users;
