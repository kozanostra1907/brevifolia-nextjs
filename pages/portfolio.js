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

 
    
    </Head>
    <section class="test">
   

        <div class="row">

            <div class="col-sm-6 col-md-4">
                <a target="_blank">
                    <img src="../static/paris/Paris-Roadtrip-Kozanostra_1.jpg" alt="Bridge"/>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox">
                    <img src="../static/paris/Paris-Roadtrip-Kozanostra_2.jpg" alt="Park"/>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" >
                    <img src="../static/paris/Paris-Roadtrip-Kozanostra_5.jpg" alt="Tunnel"/>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" >
                    <img src="../static/paris/Paris-Roadtrip-Kozanostra_4.jpg" alt="Traffic"/>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" >
                    <img src="../static/paris/Paris-Roadtrip-Kozanostra_6.jpg" alt="Coast"/>
                </a>
            </div> 
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" >
                    <img src="../static/paris/Paris-Roadtrip-Kozanostra_8.jpg" alt="Rails"/>
                </a>
            </div>

            <div class="col-sm-6 col-md-4">
                <a class="lightbox" >
                    <img src="../static/paris/Paris-Roadtrip-Kozanostra_9.jpg" alt="Rails" class="hochkant"/>
                </a>
            </div>

            <div class="col-sm-6 col-md-4">
                <a id="test" >
                <img src="../static/paris/Paris-Roadtrip-Kozanostra_9.jpg" alt="Rails"/>
                </a>
            </div>

            <div class="col-sm-6 col-md-4">
                <a class="test" >
                    <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg" alt="Rails"/>
                </a>
            </div>


    </div>


      </section>

      
    
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
