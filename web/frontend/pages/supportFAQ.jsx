import {
    Page,
    Layout,
    Banner,
    Card,
    FormLayout,
    TextField,
  } from '@shopify/polaris';
  import React from 'react'

  import FooterLogo from '../components/FooterLogo';
  import Support from '../components/Support';

  import Navbar from '../components/Navbar';

const supportFAQ = () => {
  return (
    <>
    <Navbar/>
    <Page>
      <Layout>
        <Layout.Section>
           <Support/>
          <FooterLogo/>
        </Layout.Section>
      </Layout>
    </Page>
  </>
  )
}

export default supportFAQ