import Layout from '../components/Layout'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'

export default function Info({ frontmatter, markdownBody, title }) {
  return (
    
    <Layout
      pathname="portfolio"
      bgColor={frontmatter.background_color}
      siteTitle={title}
    >
    <Head>
      <title>portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700" rel="stylesheet"/>
    <link rel="stylesheet" href="https://rawgit.com/LeshikJanz/libraries/master/Bootstrap/baguetteBox.min.css"/>
    </Head>
    <section className="info_blurb">
    <div class="container gallery-container">
      <div class="tz-gallery">

        <div class="row">

            <div class="col-sm-12 col-md-4">
                <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg">
                    <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg" alt="Bridge"/>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg">
                    <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg" alt="Park"/>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg">
                    <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg" alt="Tunnel"/>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg">
                    <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg" alt="Traffic"/>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg">
                    <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg" alt="Coast"/>
                </a>
            </div> 
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg">
                    <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg" alt="Rails"/>
                </a>
            </div>

            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg">
                    <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg" alt="Rails"/>
                </a>
            </div>

            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg">
                    <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg" alt="Rails"/>
                </a>
            </div>

            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg">
                    <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg" alt="Rails"/>
                </a>
            </div>

        </div>

    </div>
    </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js"></script>
<script>
    baguetteBox.run('.tz-gallery');
</script>
        
      </section>

      
      <style jsx>{`
      body {
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

      `}</style>
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
