const GRAPHQL_URL = "http://localhost/Custom_Web/graphql";

export async function fetchGraphQL(query) {
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();

  return data;
}