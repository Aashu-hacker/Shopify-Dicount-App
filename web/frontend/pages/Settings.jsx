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

import Setting from '../components/Setting';

import Navbar from '../components/Navbar';

const Settings = () => {
  return (
    <>
      <Navbar />
      <Page>
        <Layout>
          <Layout.Section>
            <Setting />
            <FooterLogo />
          </Layout.Section>
        </Layout>
      </Page>
    </>
  )
}

export default Settings