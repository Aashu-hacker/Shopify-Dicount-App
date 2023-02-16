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

const index = () => {
  return (
    <>
      <Page>
        <Layout>
          <Layout.Section>
                <BannerExample/>
          </Layout.Section>
        </Layout>
      </Page>


    </>
  )
}

export default index