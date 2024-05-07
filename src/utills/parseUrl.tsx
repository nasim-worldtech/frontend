export const parseIdFromUrl = (url: string): number => {
  // Split the URL by '?' and '&'
  const params = url.split('?')[1].split('&');
  // Find the parameter containing 'page'
  const pageParam = params.find((param) => param.includes('page'));

  ('"!" it is a non null asssetion to tell ts that my pageparams will be undefined');

  const id = parseInt(pageParam!.split('=')[1]);
  return id;
};
