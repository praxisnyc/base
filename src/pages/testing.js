import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { Button, UncontrolledAlert, Badge, ButtonGroup, ButtonToolbar, Breadcrumb, BreadcrumbItem } from 'reactstrap'

const IndexPage = () => (
  <Layout>
    <hr />
<ButtonToolbar>
  <ButtonGroup>
  <Button color="secondary">
  Nothing
</ Button>
<Button color="link">
  Nothing
</ Button>
<Button color="danger">
  Other
</ Button>
<Button outline color="danger">
  Other
</ Button>
</ButtonGroup>
<ButtonGroup>
  <Button color="secondary">
  Nothing
</ Button>
<Button color="link">
  Nothing
</ Button>
<Button color="danger">
  Other
</ Button>
<Button outline color="danger">
  Other
</ Button>
</ButtonGroup>
</ButtonToolbar>

<Button close />

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
