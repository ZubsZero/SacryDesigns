<template>
    <NavBarComp/>
    <div class="terms-and-conditions">
      <h1>TERMS AND CONDITIONS</h1>
  
      <section>
        <h2 class="section-title">PAYMENT AND PRICING</h2>
        <div class="section-content">
          <p>All of our prices are given in US Dollar.</p>
          <p>EFT Direct Deposit is currently an effective and secure way to make payment.</p>
          <p>Please transfer the given amount in its entirety to our account and we will send your parcel within 2 working days once the amount is cleared in our account. No cheque payments please.</p>
          <p>Our Banking Details:</p>
          <ul>
            <li>Bank:</li>
            <li>Account name: Sacry Design</li>
            <li>Branch code:</li>
            <li>SWIFT Code:</li>
            <li>Account number:</li>
          </ul>
          <p>Please use your order number as reference.</p>
        </div>
      </section>
  
      <section>
        <h2 class="section-title">CARE AND CLEANING</h2>
        <div class="section-content">
          <h3>Beads and Charms</h3>
          <p>Natural tarnishing of the beads and charms may occur due to wear and tear, as well as by the acidity of your skin. Avoid contact with water, perfumes, body lotions and other chemicals. Use a liquid or gel based cleaner instead of abrasive cleaners or polishes to restore its natural.</p>
          <h3>Fabric and Ribbon Cleaning</h3>
          <p>The ribbons and fabric used in some pieces are easy to clean. Pull all the charms and beads to one side, wet the area that is soiled, squeeze a small amount of detergent into your hands and gently rub over the wet area, rinse with warm water until all the detergent has gone, take care not to get water over the remainder of the jewelry piece. Hang up to dry. If needed, iron on low heat.</p>
        </div>
      </section>
  
      <section>
        <h2 class="section-title">ORDERS AND RETURNS</h2>
        <div class="section-content">
          <h3>ORDER POLICY</h3>
          <p>Ordering online has become easy at your convenience; just follow the ordering instructions online. However, if you would like to call in your order, please call +1(315)9916904</p>
          <h3>Orders not received</h3>
          <p>Be sure to indicate the complete and correct shipping address when you are placing your order. Sacry Design will not be held responsible for items that have not been received due to an incorrect address or change of address. If you have not received your order and would like to check the status, please contact via email (be sure to note your order number and email address, and verify the correct mailing address). We will check our records to determine when your order was processed and shipped.</p>
          <p><strong>Damaged or Incomplete Order:</strong></p>
          <p>If you have received a damaged or incorrect item, or if part of your order is missing, please notify us immediately by emailing. Do not discard the original shipment box or packaging. In your message, please include your name, order number, email address and provide as much detail as possible about the situation.</p>
          <p>We will be happy to replace any damaged/incorrect items, assuming a comparable replacement is available, or provide you with a full refund including all shipping costs. Any products that might be missing from your order will be shipped as soon as possible at no additional charge to you.</p>
          <p>Please send your return using a reliable carrier that offers tracking (such as UPS, FedEx, or Priority Mail). It is strongly recommended that you ensure the package, as you will be responsible for ensuring that all items arrive in their original condition.</p>
          <h3>RETURN POLICY</h3>
          <p>Sacry Design wants clients to be completely satisfied with each and every purchase.</p>
          <p>We are proud of the quality our products. However, all of our items are handmade might have variations from the item pictured occasionally. Please keep in mind the unique nature of your purchase when evaluating a product for a return or exchange; for example, we do not consider slight variations in color and pattern valid reasons for returns.</p>
          <p>You are guaranteed to be 100% satisfied with anything that you order. If you are unsatisfied with the product(s) you receive, we will accept returned merchandise within 7 days of receipt. We will refund the purchase price or exchange it, whichever you prefer. Original processing/shipping fees are non-refundable.</p>
          <p>Once we have received approved returned merchandise, a full refund of the merchandise cost will be applied to your credit card. Items damaged in return transit due to improper packaging will not be refunded. We will send you a confirmation email once the returned merchandise has been received.</p>
          <p>No refunds will be available after the 14-day returns period has expired. By clicking the checkout button, you are agreeing to the terms of our return & exchange policies.</p>
          <p><strong>Receiving a refund:</strong></p>
          <p>Credit for returned products will be issued within 7 business days of receipt of the returned merchandise using the same form of payment originally used for the order (except where other arrangements have been made, as in the case of gift orders).</p>
          <p><strong>Important Notes and Restrictions:</strong></p>
          <ul>
            <li>Refunds will not be available if the returned products have been damaged, worn, or altered in any way.</li>
            <li>For hygienic purposes, earrings cannot be returned or exchanged.</li>
          </ul>
          <p><strong>Pricing Errors and Cancellation of Orders:</strong></p>
          <p>A product may on occasion be listed with the incorrect price. If a product is purchased at a price that is lower than the correct price, we will, at our discretion, contact you for instructions prior to shipping the order or notify you of the outright cancellation of the order. In the event that the correct price should be lower than the price paid, we will adjust your charge and give you the lower price.</p>
          <p>Billing information provided for the credit card does not match the information on file with the card issuing bank.</p>
          <p>Credit card declined by the financial institution.</p>
        </div>
      </section>
  
      <section>
        <h2 class="section-title">SHIPPING AND HANDLING</h2>
        <div class="section-content">
          <p>Taxes apply to some orders. Our Shipping charges are based on shipping UPS, FEDEX Ground or a similar courier to the 48 Contiguous U.S States.</p>
          <p>Please call +1(315)9916904 or email us to verify shipping charges to your location if not sure. If you choose to place your order via our website, please note that shipments outside of the 48 contiguous U.S. will have additional processing/shipping charges not immediately reflected on your internet order receipt total. You will be contacted within 2 to 3 business days with an accurate processing/shipping quote.</p>
          <p>International Shipping will incur additional shipping charges. To find out the total shipping charges to your destination, please email or call us.</p>
          <p>We cannot ship to P.O. Boxes.</p>
          <p>Orders usually ship 24-48 hours from when you placed your order. We will notify you during this period if an item is out of stock. Please allow 5-10 business days to receive your order. Please email us or call us at +1(315)9916904 to arrange quicker delivery.</p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import NavBarComp from "@/components/NavBarComp.vue"
  
  export default {
    name: "HomeView",
    components: {
      NavBarComp,
    },
  };
  </script>
  
  <style scoped>
  .terms-and-conditions {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }
  
  .section-title {
    font-size: 2em;
    color: #000;
    margin-bottom: 20px;
  }
  
  .section-content {
    color: #000;
  }
  
  h3 {
    font-size: 1.4em;
    color: #000;
    margin-bottom: 15px;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  li {
    margin-bottom: 5px;
    color: #000;
  }
  
  p {
    margin-bottom: 15px;
    color: #000;
  }
  
  strong {
    font-weight: bold;
  }
  
  @media (min-width: 768px) {
    .terms-and-conditions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 40px;
    }
  }
  </style>
  