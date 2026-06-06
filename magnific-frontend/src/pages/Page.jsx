import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Page() {
  const { slug } = useParams();

  const [page, setPage] = useState(null);

  useEffect(() => {
    fetch("http://localhost/Custom_Web/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        {
          page(id: "${slug}", idType: URI) {
            title
            content
          }
        }
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPage(data.data.page);
      });
  }, [slug]);

  if (!page) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{page.title}</h1>+  

      <div
        dangerouslySetInnerHTML={{
          __html: page.content,
        }}
      />
    </div>
  );
}

export default Page;