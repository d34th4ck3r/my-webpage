import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { ReactTinyLink } from 'react-tiny-link'
import SEO from "../components/seo"

const shortcodes = { Link, ReactTinyLink }

export default function BlogPost({data}) {
  const post = data.mdx
  return (
    <Layout
    headerData={
      <div>
        <div className="clearfix mx-5">
          <h1 style={{
            margin: "0 auto",
            maxWidth: "1000px",
            fontFamily: "Julius Sans One, sans-serif",
          }}>
            {post.frontmatter.title}
          </h1>
          <div style={{
            color: `#AAA`,
            fontFamily: "Julius Sans One, sans-serif",
          }}>
            {post.fields.lastUpdated}
        </div>
        </div>
      </div>
    }
    >
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div style={{
        maxWidth: "800px",
        fontFamily: "Noto Serif TC, serif",
        fontSize: "18px",
        }} className="my-5 mx-3 mx-md-auto">
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        tags
      }
      timeToRead
      fields {
        lastUpdated(formatString: "MMMM Do, YYYY")
      }
      excerpt(pruneLength: 400)
    }
  }
`
