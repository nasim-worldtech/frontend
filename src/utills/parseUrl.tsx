export const parseIdFromUrl = (url: string) => {
  // Split the URL by '?' and '&'
  const params = url.split('?')[1].split('&');
  // Find the parameter containing 'page'
  const pageParam = params.find((param) => param.includes('page'));
  // Split the parameter to get the value after '='
  const id = pageParam.split('=')[1];
  return id;
};
