const baseUrl =
  "https://strangers-things.herokuapp.com/api/2206-FTB-PT-WEB-PT ";

export async function addPost(body, token) {
  const result = await fetch(baseUrl + "/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: body.title,
        description: body.description,
        price: body.price,
        willDeliver: body.willDeliver,
      },
    }),
  });
  const data = await result.json();
}

export async function deletePost(postId, token) {
  const result = await fetch(baseUrl + "/posts/" + postId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await result.json();
}

export async function register(username, password) {
  const result = await fetch(baseUrl + "/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const data = await result.json();
}

export async function login(username, password) {
  const result = await fetch(baseUrl + "/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer TOKEN_STRING_HERE",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const data = await result.json();
  return data;
}

export const fetchPosts = async (token) => {
  const response = await fetch(baseUrl + "/posts", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};
