import React from 'react';
import { Page, PageHeader, PageSidebar, PageSection, PageSectionVariants } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class VerticalPage extends React.Component {
  static title = 'Vertical Page Layout';
  static getContainerProps = getContainerProps;

  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: true
    };
  }

  onNavToggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };

  render() {
    const { isNavOpen } = this.state;

    const Header = (
      <PageHeader logo="Logo" toolbar="Toolbar" avatar=" | Avatar" showNavToggle onNavToggle={this.onNavToggle} />
    );
    const Sidebar = <PageSidebar nav="Navigation" isNavOpen={isNavOpen} />;

    return (
      <Page header={Header} sidebar={Sidebar}>
        <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
        <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
        <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
      </Page>
    );
  }
}

export default VerticalPage;
