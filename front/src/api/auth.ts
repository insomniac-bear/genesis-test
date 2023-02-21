export const fetchAuth = (): Promise<any> => {
  return fetch('http://localhost:3000/auth/token', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
