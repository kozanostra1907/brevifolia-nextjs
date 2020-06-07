import Link from "next/link";


export default function Header(props) {
  return (
    <header className="header">
      <nav
        className="nav"
        role="navigation"
        aria-label="main navigation"
      >

        
<div>
        <Link href="/">

        <img src="../static/icons/kozanostra.png" id="logo" />
        </Link>

        <Link href={`${typeof window !== "undefined" &&
          window.location.pathname == "/portfolio" ?
          "/portfolio" : "/portfolio"}`}>
            <h1>portfolio</h1>
          </Link>

        <Link href={`${typeof window !== "undefined" &&
          window.location.pathname == "/blog" ?
          "/blog" : "/blog"}`}>
            <h1>blog</h1>
          </Link>

          <Link href={`${typeof window !== "undefined" &&
          window.location.pathname == "/about" ?
          "/about" : "/about"}`}>
            <h1>about me</h1>
          </Link>
        
        
          </div>

        
       
      </nav>
      <style jsx>
        {`
          h1 {
            margin-bottom: 0;
            font-weight:900;
            font-size:18px;
          }
          h1:hover {
            cursor: pointer;
            font-color:#e6000;
            
          }
          nav {
            padding: 1.5rem 1.25rem;
            border-bottom: 1px solid #ebebeb;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;
          }
          @media (min-width: 768px) {
            .header {
              height: 100vh;
              position: fixed;
              left: 0;
              top: 0;
            }
            .nav {
              padding: 2rem;
              width: 30vw;
              height: 100%;
              border-right: 1px solid #ebebeb;
              border-bottom: none;
              flex-direction: column;
              align-items: flex-start;
            }
          }
        `}
      </style>
    </header>
  );
}

