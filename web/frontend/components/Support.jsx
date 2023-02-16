import {
  Page,
  Layout,
  Card,
  ResourceList,
  Thumbnail,
} from '@shopify/polaris';
import React from 'react';

const Support = () => {
  const questions = [
    {
      title: "Contact | How can I contact a member of your team?",
      description: "Email us at activecartapp@gmail.com or fill in your information on the bottom right of our app with our chat widget. We will get back to you as fast as possible."
    },
    {
      title: "Pricing | Will I be charged? If so, how much?",
      description: `We use a 30 day billing cycle, similar to Shopify. Your first 14-days are guaranteed free as part of our free trial. Following your 14-day trial you will then automatically be charged for the "Premium Plan". Premium plan costs $17.99/month no matter how many sales we bring you or what Shopify plan you are on!`
    },
    {
      title: "Pricing | Difference Between Free and Premium Plans",
      description: `The Free Plan allows you to offer one campaign in total. The free plan allow you to you Buy X Get Y offer type, only.
     The Premium Plan allows unlimited campaigns and flexibility for you the store owner to offer customers on your site. Every product can have an incentive attached to it if you so choose. Premium plan also grants you access to Spend X Get Y Free offer type, too!`
    },
    {
      title: `FAQ | Can a customer "lose" a promotional item?`,
      description: `Simply put, Yes. If a customer decides to remove an item (while on the cart page) that they received automatically from an active cart campaign, they will be unable to add that item back with the same promotional price. What this means is, if they remove a Free item while in cart, they will be unable to add it back to cart with the Free price tag.

     For any % off products from active cart campaigns that may have been removed and then decided to they would want the product back. Customers can add a % off active cart product manually back. This will not work for the free ones.`
    },
    {
      title: `FAQ | Can you create "tiered" promotions/campaigns with the Spend Offer Type?`,
      description: `Yes! Premium Plan store owners can!
     A tiered campaign could look something like, Spend $50 get Free Shipping (Shopify Offer).
     Spend $75 get Product X
     Spend $100 get Product Y
     Spend $150 get Product Z
     
     IMPORTANT NOTE!
     A customer can only receive one item via Spend X Get Y offer type. A customer will be prompted to choose between the items you offer for your tiers on the cart page. Customers may only select one of the "tiered" options as they purchase more on your site.
     `
    },
    {
      title: "How-To | Add New Offer (Buy X Get Y)",
      description: `
     1. Head into the Active Cart App Dashboard
     2. Click "Create Active Cart Offer"
     3. Title Your Campaign
     4. Pick "Buy X Get Y" Offer Type from dropdown menu
     5. Choose the Product Your Customer Needs to Buy
     6. Choose the Product Your Customer will receive
     7. Choose the % OFF the Product Your Customer will receive automatically (100% Off = FREE)
     8. Click Save
     `
    },
    {
      title: "How-To | Add New Offer (Spend X Amount Get Y)",
      description: `
      1. Head into the Active Cart App Dashboard
      2. Click "Create Active Cart Offer"
      3. Title Your Campaign
      4. Pick "Spend X Amount Get Y Free" Offer Type from dropdown menu
      5. Choose the Spend the customer needs to surpass
      6. Choose the Product(s) Your Customer will receive upon spending threshold being met
      7. Click Save
     `
    },
    {
      title: "Can a customer select a different variant of a gift/product?)",
      description: `
      No. This is important to note that whatever the product you offer the customer in any campaign type (Buy X Get Y or Spend X Get Y Free), will be the product they are shown on their checkout screen. We suggest utilizing an item that would not normally have a variance to it.
      `
    },
    {
      title: "Can I add multiple items for a customer to choose from?",
      description: `
      At this current time, no. If you select more than one item for a customer to receive in any campaign type (Buy X Get Y or Spend X Get Y Free), the customer will receive all items in "Get Y" section.
      `
    },
  ]

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section oneHalf>
          <Card sectioned>
            <p>Quick Guide</p>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <p>Spend X amount Get Y Free</p>
                <iframe style={{ width: "100%" }} height="315"
                  src="https://www.youtube.com/embed/ZECv8QFFNT4?controls=0">
                </iframe>
              </div>
              <div className='col-12 col-md-6'>
                <p>Buy X Get Y</p>
                <iframe style={{ width: "100%" }} height="315"
                  src="https://www.youtube.com/embed/zTxYJWQsa38?controls=0">
                </iframe>
              </div>
            </div>
          </Card>
        </Layout.Section>
        <Layout.Section oneHalf>
          <Card sectioned>
            <p>FAQ & Support</p>
            {questions.map((item, index) => {
              return (
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id={`heading${index}`}>
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target= {`#collapse${index}`} aria-expanded="false" aria-controls="collapseTwo">
                        {item.title}
                      </button>
                    </h2>
                    <div id={`collapse${index}`} class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  )
}

export default Support