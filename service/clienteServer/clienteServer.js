const getDade = () => {
  return fetch("http://localhost:3000/profile").then((response) => {
    return response.json();
  });
};

const createClient = (nome, email) => {
  return fetch("http://localhost:3000/profile", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  }).then((response) => {
    return response.body;
  });
};

export const clientServer = {
  getDade,
  createClient,
};
