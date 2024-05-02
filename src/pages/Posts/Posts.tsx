import { useState, useEffect } from 'react';
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";

import DefaultLayout from "../../layout/DefaultLayout";
import Loader from '../../common/Loader';
import TableOne from '../../components/Tables/TableOne';
import Pagination from "../../components/Pagination/Pagination"; 

const Posts = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemOffset, setItemOffset] = useState(0);

  
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


  // pagination code logic .....

  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = postData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(postData.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % postData.length;
    setItemOffset(newOffset);
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Posts" />
      <div className="flex flex-col gap-10">
        {loading ? (
          <Loader /> // Render a loader while data is being fetched
        ) : (
        <>
          <TableOne data={currentItems} />
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount}/>
        </>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Posts;
