import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { Button, UncontrolledAlert, Badge, ButtonGroup, ButtonToolbar, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import Popover from '../components/bootstrap/Popover'
import PopoverMulti from '../components/bootstrap/PopoverMulti'

const IndexPage = () => (
  <Layout>
    <hr />
        <Popover />
    <hr />
    <PopoverMulti />
    <hr />
<ButtonToolbar>
  <ButtonGroup>
  <Button color="secondary">Nothing</ Button>
<Button color="link">Nothing</ Button>
<Button color="danger">Other</ Button>
<Button outline color="danger">Other</ Button>
</ButtonGroup>
<ButtonGroup>
  <Button color="secondary">Nothing</ Button>
<Button color="link">Nothing</ Button>
<Button color="danger">Other</ Button>
<Button outline color="danger">Other</ Button>
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
      <hr />
  </Layout>

)


export default IndexPage
