import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import FluidJumbotron from '../components/FluidJumbotron'
import Tabs from '../components/tabs'

const IndexPage = () => (
  <Layout>
 <FluidJumbotron />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Tabs />
  </Layout>
)

export default IndexPage
