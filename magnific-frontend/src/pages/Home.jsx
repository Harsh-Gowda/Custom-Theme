import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetch("http://localhost/Custom_Web/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        {
          pages {
            nodes {
              title
              slug
            }
          }
        }
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPages(data.data.pages.nodes);
      });
  }, []);

  return (
    <div>
      <h1>All Pages</h1>

      {pages.map((page) => (
        <div key={page.slug}>
          <Link to={`/${page.slug}`}>
            {page.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;