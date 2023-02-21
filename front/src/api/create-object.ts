export const createObject = ( accessToken: string, baseDomain: string, objectName: string ): Promise<any> => {
  return fetch('http://localhost:3000/amo/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: accessToken,
      baseDomain,
      objectName,
    })
  });
};
