import {Banner, Link} from '@shopify/polaris';
import React from 'react';
import {
    CircleDisabledMajor
  } from '@shopify/polaris-icons';

import {SITE_ADMIN_EMAIL} from "../config.js"


function BannerExample() {
  return (
    <Banner
      status="critical"
      icon={CircleDisabledMajor}
    >
      <p>Using a Drawer / Popup cart type of theme? Go to Themes > Customize Theme > Theme settings > Cart page and set cart type to Page (or ask your theme developer how to disable the popup cart). App work only in full cart page. Contact us on live support (icon in bottom right corner) or <a href={`mailto: ${SITE_ADMIN_EMAIL}`} target="_top">click here</a> to email us.</p>
    </Banner>
  );
}
export default BannerExample