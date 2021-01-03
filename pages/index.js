import Layout from '../components/Layout'
import matter from 'gray-matter'

import Head from 'next/head'
import Link from 'next/link'

export default function FirstPost({ frontmatter, markdownBody, title }) {
  return (
    <Layout
      pathname="portfolio"
      bgColor={frontmatter.background_color}
      siteTitle={title}
    >

      <h1>Titel</h1>
      <h2>
        <Link href="/blog">
          <a>Back to home</a>
        </Link>
      </h2>
 <Head>
      <title>teststart</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
    </Head>
      
     
      <section className="info_blurb">
       

        <p>Thats my Home</p>
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

