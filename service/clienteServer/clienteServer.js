const getDade = () => {
  return fetch("http://localhost:3000/profile").then((response) => {
    return response.json();
  });
};

export const clientServer = {
  getDade,
};