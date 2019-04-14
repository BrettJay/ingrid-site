import React from 'react'
import Helmet from 'react-helmet'

function Metatags(props) {
  return (
    <Helmet
      title={props.title}
      meta={[
        { name: 'title', content: props.title },
        { name: 'description', content: props.description },
        {
          property: 'og:title',
          content: props.title,
        },
        {
          property: 'og:url',
          content: props.pathname ? props.url + props.pathname : props.url,
        },
        {
          property: 'og:image',
          content: props.thumbnail && props.thumbnail,
        },
        {
          property: 'og:image:secure_url',
          content: props.thumbnail && props.thumbnail,
        },
        {
          property: 'og:description',
          content: props.description,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'og:locale',
          content: 'en',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: props.title },
        {
          name: 'twitter:description',
          content: props.description,
        },
        {
          name: 'twitter:image',
          content: props.thumbnail && props.thumbnail,
        },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index, follow' },
        
        { name: 'twitter:creator', content: '@brett_jay' },
        { property: 'og:site_name', content: 'Ingrid' }
      ]}
      >
      <html lang="en" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#d7005a"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
    </Helmet>
  )
}
  
export default Metatags
