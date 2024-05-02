import { useState, useEffect } from 'react';
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";

import DefaultLayout from "../../layout/DefaultLayout";
import Loader from '../../common/Loader';
import TableOne from '../../components/Tables/TableOne';

const Posts = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        setPostData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Posts" />
      <div className="flex flex-col gap-10">
        {loading ? (
          <Loader /> // Render a loader while data is being fetched
        ) : (
          <TableOne data={postData} />
        )}
      </div>
    </DefaultLayout>
  );
};

export default Posts;
