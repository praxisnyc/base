import React from 'react'
import { Link } from 'gatsby'
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import Layout from '../components/layout'
import Tabs from '../components/bootstrap/tabs'

const IndexPage = () => (
  <Layout>
    <h1>Testing it again</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <hr />
    <Tabs />
    <hr />
    <Example />
  </Layout>
)

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid. Nihil
              anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default IndexPage
