import { Banner,Page, Layout } from '@shopify/polaris';
import React from 'react';

function SupportBanner() {
    return (
        <Page>
            <Layout>
                <Layout.Section>
                    <Banner
                        title="Need any other help?"
                        status="info"
                    >
                        <p>We are always here to help you. Please email us on activecartapp@gmail.com.</p>
                    </Banner>
                </Layout.Section>
            </Layout>
        </Page>
    );
}
export default SupportBanner