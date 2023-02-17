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
import Rule from '../components/Rule';
const index = () => {
  return (
    <>
      <Navigation/>
      <Page>
        <Layout>
          <Layout.Section>
            {/* <BannerExample/>
            <CardInfo/>
            <CardTable/> */}
             {/* <Support/> */}
             <Setting/>
             {/* <Rule/> */}
            <FooterLogo/>
          </Layout.Section>
        </Layout>
      </Page>


    </>
  )
}

export default index