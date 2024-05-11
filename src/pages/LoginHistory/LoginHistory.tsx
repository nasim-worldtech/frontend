import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { apis } from '../../apis/apis';
import HistoryTable from '../../components/Tables/HistoryTable';

const LoginHistory = () => {
  const [loginHistory, setLoginHistory] = useState<any>([]);
  
  const fetchLoginHistoryDataHandler = async (pageId: number) => {
    try {
      const response = await apis.fetchLoginHistoryData(pageId);
      setLoginHistory(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLoginHistoryDataHandler(1);
  }, []);

  const handleHistoriesPagination = (pageLabel: number) => {
    fetchLoginHistoryDataHandler(pageLabel);
  };

  return (
    <>
      <Breadcrumb pageName="Login History" />
      <div className="flex flex-col gap-10">
        <HistoryTable
          histories={loginHistory}
          handlePagination={handleHistoriesPagination}
        />
      </div>
    </>
  );
};

export default LoginHistory;
