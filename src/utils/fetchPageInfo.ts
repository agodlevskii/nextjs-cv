export const fetchPageInfo = async(): Promise<PageInfo> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
  return res.json();
};
