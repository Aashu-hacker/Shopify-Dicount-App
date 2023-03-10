import {
    Page,
    Layout,
    Banner,
    Card,
    FormLayout,
    TextField,
  } from '@shopify/polaris';
  import React from 'react'
  import BannerExample from '../components/Banner'
  import Navigation from '../components/Navigation';
  import CardInfo from '../components/CardInfo';
  import CardTable from '../components/CardTable';
  import FooterLogo from '../components/FooterLogo';
  import Support from '../components/Support';
  import Setting from '../components/Setting';
  import DiscountCampaign from '../components/DiscountCampaign';
  import Navbar from '../components/Navbar';

const Campaign = () => {
  return (
    <>
    <Navbar/>
    <Page>
      <Layout>
        <Layout.Section>
           <DiscountCampaign/>
          <FooterLogo/>
        </Layout.Section>
      </Layout>
    </Page>
  </>
  )
}

export default Campaign