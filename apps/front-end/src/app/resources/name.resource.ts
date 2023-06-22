export const saveName = async (payload: any) => {
  const resp = await fetch('http://localhost:3000/api', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  return resp.json();
};
