import { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import axios from 'axios';
import TableOne from '../../components/Tables/TableOne';
import Loader from '../../common/Loader';

const LoginHistory = () => {
  const [loginHistory, setLoginHistory] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false); // State for loading status

  const fetchLoginHistoryData = async (pageId: number) => {
    try {
      setLoading(true); // Set loading to true when fetching data
      const response = await axios.get(`/login-histories?page=${pageId}`);
      setLoginHistory(response?.data?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLoginHistoryData(1);
  }, []);

  const handleHistoriesPagination = (pageLabel: number) => {
    fetchLoginHistoryData(pageLabel);
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Login History" />
      <div className="flex flex-col gap-10">
        {loading ? ( // Render loader if loading is true
          <div className="loader flex items-center justify-center h-[60vh]">
            <Loader />
          </div>
        ) : (
          <TableOne
            data={loginHistory}
            handlePagination={handleHistoriesPagination}
          />
        )}
      </div>
    </DefaultLayout>
  );
};

export default LoginHistory;
