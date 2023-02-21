export const fetchSkills = async(): Promise<Skill[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  return res.json();
};
