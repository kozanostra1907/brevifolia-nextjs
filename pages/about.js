
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function Info({ frontmatter, markdownBody, title }) {
  return (
    
    <Layout
      pathname="about"
      bgColor={frontmatter.background_color}
      siteTitle={title}
    >
 
      <Head><link rel="icon" type="image/x-icon" href="../static/favicon.ico" /></Head>
    
      <section class="about-me">
       
<div class="about-me">

        <p>im..fdfsdfsdfsfsdfsdfs sdfsf  sdfsdfsdf sdfsf s..</p>
        </div>

      </section>
      <style jsx>
      {`

      #test {
        width:5px;
      }

.test {
  top:50px;
  position:absolute;
  max-width: 800px;
  background-color:pink;
  padding: 1.5rem 1.25rem;
  font-size:50px;
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
        top:500px;
        padding-top:500px;
        position:absolute;
        
      }
  
      .info_blurb {
        padding-top:50px;
        max-width: 800px;
        padding: 1.5rem 1.25rem;
      }
  
      
      .container.gallery-container {
          background-color: #fff;
          color: #35373a;
          min-height: 100vh;
          padding: 30px 50px;
      }
      
      .gallery-container h1 {
          text-align: center;
          margin-top: 50px;
          font-family: 'Droid Sans', sans-serif;
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
          border-radius: 0;
          position: relative;
          
      }

    .test {

      width:40px;
      height:20px;
    }

    .a {
      width: 40px;
      height: 25px;
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
    </Layout>
    

    
  )
}

export async function getStaticProps() {
  const content = await import(`../data/portfolio.md`)
  const config = await import(`../data/config.json`)
  const data = matter(content.default)

  return {
    props: {
      title: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}
