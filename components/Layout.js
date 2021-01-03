import Header from "./Header";
import Meta from './Meta'

export default function Layout(props) {
  return (
    <section
    className={`layout ${
      props.pathname == "info" &&
      "info_page"}`
    }
    style={{
      backgroundColor: `${props.bgColor && props.bgColor}`,
      color: `${props.pathname == "info" && 'white'}`
    }}
  >
    <Meta
      siteTitle={props.siteTitle}
      siteDescription={props.siteDescription}
    />

    <Header siteTitle={props.siteTitle} />
    <div className="content">{props.children}</div>

    <style jsx>
      {`


.test {
  top:50px;
  position:absolute;
  max-width: 800px;
  background-color:pink;
  padding: 1.5rem 1.25rem;
  font-size:50px;
  padding-top:50px;
}

.lightbox {
  background-color:pink;
  padding-top:500px;
}

.info_blurb {
  
  max-width: 800px;
  padding: 1.5rem 1.25rem;
}


@media (min-width: 768px) {
  .info_blurb {
    padding: 2rem;
    
  }
}

@media (min-width: 1440px) {
  .info_blurb {
    padding: 3rem;
    
  }
}



        .layout {
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .layout .info_page {
          color: #ebebeb;
        }
        .content {
          flex-grow: 1;
        }
        @media (min-width: 768px) {
          .layout {
            display: block;
          }
          .content {
            flex-grow: none;
            width: 70vw;
            margin-left: 30vw;
          }
        }

        .body {
          background-color: #434c50;
          min-height: 100vh;
          font: normal 16px sans-serif;
          padding: 40px 0;
      }
  
      .row {
        top:5px;
        padding-top:50px;
        position:absolute;
        background-color:pink;
        
      }
  
      .info_blurb {
        padding-top:50px;
        max-width: 800px;
        padding: 1.5rem 1.25rem;
      }
  
      
      .container.gallery-container {
          background-color: #fff;
          color: pink;
          min-height: 100vh;
          padding: 30px 50px;
      }
      
      .gallery-container h1 {
          text-align: center;
          margin-top: 50px;
          font-family: ;
          font-weight: bold;
      }
      
      .gallery-container p.page-description {
          text-align: center;
          margin: 25px auto;
          font-size: 18px;
          color: #999;
      }
      
      .tz-gallery {
          padding-top:50px;
          top:50px;
          position:absolute;
      }
      
      /* Override bootstrap column paddings */
      .tz-gallery .row > div {
          padding: 2px;
      }
      
      .tz-gallery .lightbox img {
          width: 100%;
          height:20px;
          border-radius: 0;
          position: relative;
      }
      
      .tz-gallery .lightbox:before {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -13px;
          margin-left: -13px;
          opacity: 0;
          color: #fff;
          font-size: 26px;
          font-family: 'Glyphicons Halflings';
          content: '\e003';
          pointer-events: none;
          z-index: 9000;
          transition: 0.4s;
      }
      
      
      .tz-gallery .lightbox:after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          background-color: rgba(46, 132, 206, 0.7);
          content: '';
          transition: 0.4s;
      }

      
      
      .tz-gallery .lightbox:hover:after,
      .tz-gallery .lightbox:hover:before {
          opacity: 1;
      }
      
      .baguetteBox-button {
          background-color: transparent !important;
      }
      
      @media(max-width: 768px) {
          body {
              padding: 0;
          }
      }
  

      
      `}
    </style>
  </section>
  );
}