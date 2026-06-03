import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGraphQL } from "../services/graphql";

function Header() {
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
    <nav>
      <Link to="/">Home</Link>

      {pages.map((page) => (
        <Link
          key={page.slug}
          to={`/${page.slug}`}
          style={{ marginLeft: "15px" }}
        >
          {page.title}
        </Link>
      ))}
    </nav>
  );
}

export default Header;