import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
     <div style={{height:"3000px"}}>
      </div>
      <main>{children}</main>
    </>
  );  
}

export default Layout;