import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { Button, UncontrolledAlert, Badge, ButtonGroup, ButtonToolbar, Breadcrumb, BreadcrumbItem, Popover, PopoverHeader, PopoverBody } from 'reactstrap'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

const IndexPage = () => (
  <Layout>
    <hr />
     <Button id="Popover1" onClick={this.toggle}>
          Launch Popover
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>
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
