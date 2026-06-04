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
     <div className = "max-w-4xl" >
       <h1 className="text-2xl font-bold">Welcome to Magnific</h1>
      < p className="text-lg text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
     </div>

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