export const fetchExperience = async(): Promise<Experience[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
  return res.json();
};
