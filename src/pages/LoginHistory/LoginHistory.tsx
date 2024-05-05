import { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import axios from 'axios';
import TableOne from '../../components/Tables/TableOne';

const LoginHistory = () => {
  const [loginHistory, setLoginHistory] = useState<any>([]);

  const fetchLoginHistoryData = (pageId: number) => {
    axios
      .get(`/login-histories?page=${pageId}`)
      .then((response) => {
        setLoginHistory(response?.data?.data);
      })
      .catch((error) => {
        // Handle error
        console.error('Error fetching login history:', error);
      });
  };

  useEffect(() => {
    fetchLoginHistoryData(1);
  }, []);

  const handleHistoriesPagination = (pageLabel: number) => {
    fetchLoginHistoryData(pageLabel);
  };

  console.log(loginHistory, 'sms manage');
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Login History" />
      <div className="flex flex-col gap-10">
        <TableOne
          data={loginHistory}
          handleHistoriesPagination={handleHistoriesPagination}
        />
      </div>
    </DefaultLayout>
  );
};

export default LoginHistory;
