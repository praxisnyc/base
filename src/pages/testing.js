import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { Button, UncontrolledAlert, Badge, Breadcrumb, BreadcrumbItem } from 'reactstrap'

const IndexPage = () => (
  <Layout>
    <hr />
<Button color="secondary">
  Nothing
</ Button>
    <hr />
<UncontrolledAlert color="success">
  Title
</ UncontrolledAlert>
<hr />
<h2>Testing <Badge color="primary">New</ Badge></h2>
  <hr />
      <Breadcrumb>
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem active>Test</BreadcrumbItem>
      </Breadcrumb>
  </Layout>

)


export default IndexPage
