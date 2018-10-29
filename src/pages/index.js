import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p>I'm Perry.  Love to learn new things at hackathons.</p>
    <p>Been trying to learn the JAMSTACK, but haven't been able to get the serverless stuff going,</p>
    <p>Hope to get into it at this hackathon</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
