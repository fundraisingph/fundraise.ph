import type { Metadata } from 'next'
import Link from 'next/link'
import { ShoppingCart, Package, CreditCard, Truck, FileText, Lightbulb, CheckCircle2, ArrowRight, ClipboardList, Clock, Wallet } from 'lucide-react'
import { AnswerBlock } from '@/components/shared/answer-block'
import { ProofBlock } from '@/components/shared/proof-block'
import { AuthorBox } from '@/components/shared/author-box'
import { InternalLinks } from '@/components/shared/internal-links'
import { SchemaMarkup } from '@/components/shared/schema-markup'
import { CopyButton } from '@/components/shared/copy-button'
import { SEOBlock } from '@/components/shared/seo-block'

export const metadata: Metadata = {
  title: 'Free Product Fundraising Order Form Template | Fundraise.ph',
  description: 'Use our free product fundraising order form template. Includes order tracking, payment methods, and delivery sections. Perfect for school and community product-based fundraisers in the Philippines.',
  openGraph: {
    title: 'Free Product Fundraising Order Form Template | Fundraise.ph',
    description: 'Use our free product fundraising order form template. Includes order tracking, payment methods, and delivery sections.',
    siteName: 'Fundraise.ph',
    type: 'article',
  },
}

const orderFormTemplate = `╔══════════════════════════════════════════════════════════════╗
║                    PRODUCT ORDER FORM                        ║
║              [Your Organization / Campaign Name]              ║
║           [Organization Address / Contact Information]        ║
╚══════════════════════════════════════════════════════════════╝

ORDER DETAILS
─────────────────────────────────────────────────────────────
Order Number:    [ORD-XXXXX]
Order Date:      [MM/DD/YYYY]
Salesperson:     [Name of person taking the order]

CUSTOMER INFORMATION
─────────────────────────────────────────────────────────────
Full Name:       ___________________________________________
Contact Number:  ___________________________________________
Email Address:   ___________________________________________
Delivery Address:___________________________________________
                 ___________________________________________
                 ___________________________________________
Barangay/City:   ___________________________________________
Province/Zip:    ___________________________________________

PRODUCT CATALOG
─────────────────────────────────────────────────────────────
┌────┬──────────────────┬─────────────────┬──────────┬───────┬──────────┐
│ #  │ Item             │ Description     │ Unit     │ Qty   │ Subtotal │
│    │                  │                 │ Price    │       │ (PHP)    │
├────┼──────────────────┼─────────────────┼──────────┼───────┼──────────┤
│ 1  │ [Product Name 1] │ [Size/Variant]  │ PHP XXX  │  ___  │ PHP ___  │
├────┼──────────────────┼─────────────────┼──────────┼───────┼──────────┤
│ 2  │ [Product Name 2] │ [Size/Variant]  │ PHP XXX  │  ___  │ PHP ___  │
├────┼──────────────────┼─────────────────┼──────────┼───────┼──────────┤
│ 3  │ [Product Name 3] │ [Size/Variant]  │ PHP XXX  │  ___  │ PHP ___  │
├────┼──────────────────┼─────────────────┼──────────┼───────┼──────────┤
│ 4  │ [Product Name 4] │ [Size/Variant]  │ PHP XXX  │  ___  │ PHP ___  │
├────┼──────────────────┼─────────────────┼──────────┼───────┼──────────┤
│ 5  │ [Product Name 5] │ [Size/Variant]  │ PHP XXX  │  ___  │ PHP ___  │
├────┼──────────────────┼─────────────────┼──────────┼───────┼──────────┤
│ 6  │ [Product Name 6] │ [Size/Variant]  │ PHP XXX  │  ___  │ PHP ___  │
└────┴──────────────────┴─────────────────┴──────────┴───────┴──────────┘

ORDER SUMMARY
─────────────────────────────────────────────────────────────
Subtotal:                        PHP ___________
Delivery Fee:                    PHP ___________
Discount (if applicable):       (PHP ___________)
                                ─────────────────
TOTAL AMOUNT DUE:                PHP ___________

PAYMENT METHOD
─────────────────────────────────────────────────────────────
Please check (✓) your preferred payment method:

[ ] GCash
    Account Name:   [Your Organization Name]
    GCash Number:   [09XX-XXX-XXXX]
    Reference:      [Customer to send proof of payment]

[ ] Bank Transfer (BPI / BDO / Metrobank / [Your Bank])
    Account Name:   [Your Organization Name]
    Account Number: [XXXX-XXXX-XXXX]
    Bank/Branch:    [Bank Name — Branch]
    Reference:      [Customer to send deposit slip or screenshot]

[ ] Maya (PayMaya)
    Account Name:   [Your Organization Name]
    Maya Number:    [09XX-XXX-XXXX]

[ ] Cash on Delivery (COD)
    Note: Exact amount required. Please prepare payment upon delivery.

[ ] Over-the-Counter
    Location:       [Pick-up point address]
    Operating Hours:[Days and hours of operation]

Proof of Payment:
☐ Attached   ☐ Sent via Messenger/Viber   ☐ Sent via SMS

DELIVERY / PICKUP DETAILS
─────────────────────────────────────────────────────────────
Delivery Method:
[ ] Delivery (via courier / volunteer / organizer)
[ ] Pick-up at [Location]: ___________________________________

Preferred Delivery/Pickup Date:    [MM/DD/YYYY]
Preferred Delivery/Pickup Time:    [HH:MM AM/PM]

Special Instructions:
_________________________________________________________________
_________________________________________________________________

Delivery Status:
☐ Pending    ☐ Processing    ☏ In Transit    ☑ Delivered    ☐ Picked Up

Date Delivered:     [MM/DD/YYYY]
Received by:        _________________________
Signature:          _________________________

TERMS AND CONDITIONS
─────────────────────────────────────────────────────────────
1. All orders are final. No cancellations once payment is confirmed.
2. Payment must be received within [X] days of placing the order.
   Unpaid orders will be automatically cancelled.
3. Delivery times are estimates and may vary depending on location
   and courier availability.
4. For product quality concerns, please report within 24 hours
   of receipt with photo evidence.
5. All proceeds from this product fundraiser go to [Campaign Name]
   benefiting [Beneficiary/Purpose].
6. Official receipts will be issued for all payments received.
7. [Organization Name] reserves the right to substitute products
   of equal or greater value if original items are unavailable.
8. By placing this order, the customer agrees to these terms.

SIGNATURES
─────────────────────────────────────────────────────────────

Customer:
Printed Name: _______________________
Signature:    _______________________
Date:         _______________________

Authorized Representative:
Printed Name: _______________________
Signature:    _______________________
Date:         _______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Thank you for supporting [Campaign Name]!
Your purchase makes a difference in [Beneficiary/Purpose].
For inquiries: [Phone] | [Email] | [Facebook Page]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`

const faqs = [
  {
    question: 'What products work best for product-based fundraising?',
    answer: 'The best products for fundraising in the Philippines are those with wide appeal and good margins: baked goods (cookies, brownies, cakes), school supplies bundles, handmade crafts, t-shirts and tote bags, food products (dried fish, coffee, tablea), plants and seedlings, and seasonal items (Christmas decors, Valentine\'s flowers). Choose products that your team can source reliably and that match your community\'s preferences.',
  },
  {
    question: 'How do I handle payments and delivery for product fundraisers?',
    answer: 'Offer multiple payment options: GCash, bank transfer, Maya, and cash on delivery. For delivery, use volunteer couriers for local orders and established couriers (J&T, LBC, Grab) for provincial orders. Always confirm payment before shipping, send tracking information to customers, and keep a delivery log for your records.',
  },
  {
    question: 'Do I need a permit for product-based fundraising?',
    answer: 'It depends on your location and the scale of your fundraiser. For school-based fundraisers, you typically need approval from the school administration. For community or public fundraisers, check with your Barangay or LGU for any required permits. If you\'re selling food products, ensure compliance with FDA/health regulations. Registered nonprofits should also check their organizational bylaws.',
  },
  {
    question: 'How do I track orders effectively?',
    answer: 'Use a simple tracking system: assign a unique order number to each form, maintain a master order log (spreadsheet or ledger) with order status columns (Pending, Paid, Processing, Shipped, Delivered), reconcile payments daily, and keep all signed order forms as records. For larger fundraisers, consider using Google Sheets shared among team members for real-time tracking.',
  },
  {
    question: 'What are the best payment methods for Philippine fundraisers?',
    answer: 'GCash is the most widely used and accessible payment method in the Philippines. Bank transfers (BPI, BDO, Metrobank) are preferred for larger orders. Maya is also popular, especially among younger demographics. Always offer cash on delivery for local orders, and over-the-counter payment for pick-up orders. Include clear payment instructions and send confirmation once payment is received.',
  },
]

const internalLinks = [
  { label: 'Campaign Description Template', page: '/templates/campaign-description' },
  { label: 'Medical Fundraising Letter', page: '/templates/medical-letter' },
  { label: 'School Fundraising Letter', page: '/templates/school-letter' },
  { label: 'Church Fundraising Letter', page: '/templates/church-letter' },
  { label: 'Sponsorship Request Letter', page: '/templates/sponsorship-request' },
  { label: 'Donor Thank You Message', page: '/templates/donor-thank-you' },
  { label: 'Campaign Update Template', page: '/templates/campaign-update' },
  { label: 'Donation Acknowledgment', page: '/templates/donation-acknowledgment' },
  { label: 'Beneficiary Checklist', page: '/templates/beneficiary-checklist' },
  { label: 'Campaign Budget Template', page: '/templates/campaign-budget' },
  { label: 'Payout Checklist', page: '/templates/payout-checklist' },
]

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Product Fundraising Order Form Template',
    description: 'Free product fundraising order form template with order tracking, payment methods, and delivery sections for Philippine fundraisers.',
    author: {
      '@type': 'Organization',
      name: 'Fundraise.ph',
      url: 'https://fundraise.ph',
    },
    datePublished: '2026-06-10',
    dateModified: '2026-06-10',
    license: 'https://fundraise.ph/terms',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Free Product Fundraising Order Form Template',
    description: 'Use our free product fundraising order form template. Includes order tracking, payment methods, and delivery sections.',
    author: {
      '@type': 'Organization',
      name: 'Fundraise.ph',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Fundraise.ph',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fundraise.ph/logo.png',
      },
    },
    datePublished: '2026-06-10',
    dateModified: '2026-06-10',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://fundraise.ph/templates/product-order-form',
    },
  },
]

export default function ProductOrderFormPage() {
  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A1F44] to-[#2B4C7E] flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-[#C8A951] uppercase tracking-wider">Free Template</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-navy leading-tight mb-6">
            Product Fundraising Order Form Template
          </h1>
          <p className="text-[#4A5568] text-lg md:text-xl leading-relaxed">
            A complete product fundraising order form template with order tracking, payment options, delivery sections, and terms and conditions. Perfect for school and community product-based fundraisers in the Philippines.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <AnswerBlock
            question="How do I create a product fundraising order form?"
            answer="A product fundraising order form should include customer information, a product catalog with prices and quantities, an order summary with totals, payment method options (GCash, bank transfer, COD), delivery or pickup details, terms and conditions, and signature fields. Keep it simple, professional, and easy to fill out by hand or digitally."
          />
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-6">Order Form Template</h2>
          <div className="bg-slate-900 text-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-[#C8A951]" />
                <span className="text-sm font-medium text-slate-300">product-order-form.txt</span>
              </div>
              <CopyButton text={orderFormTemplate} label="Copy Form" />
            </div>
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-200 font-mono overflow-x-auto max-h-[600px] overflow-y-auto">
              {orderFormTemplate}
            </pre>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-8">How to Use This Order Form</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0A1F44]/10 flex items-center justify-center shrink-0">
                <Package className="h-5 w-5 text-[#0A1F44]" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-1">Fill In Your Product Catalog</h3>
                <p className="text-[#4A5568] leading-relaxed">Replace the product names, descriptions, and prices with your actual fundraising products. Keep descriptions short but clear. If you have more than 6 products, add rows following the same format.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0A1F44]/10 flex items-center justify-center shrink-0">
                <CreditCard className="h-5 w-5 text-[#0A1F44]" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-1">Set Up Payment Methods</h3>
                <p className="text-[#4A5568] leading-relaxed">Update the payment section with your actual GCash number, bank account details, and other payment options. Remove payment methods you don't offer. Always confirm payment before processing orders.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0A1F44]/10 flex items-center justify-center shrink-0">
                <Truck className="h-5 w-5 text-[#0A1F44]" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-1">Configure Delivery Options</h3>
                <p className="text-[#4A5568] leading-relaxed">Set your delivery areas, fees, and timelines. For local deliveries, use volunteers or riders. For provincial orders, partner with couriers like J&T, LBC, or Grab Express. Clearly state estimated delivery times.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0A1F44]/10 flex items-center justify-center shrink-0">
                <FileText className="h-5 w-5 text-[#0A1F44]" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-1">Print or Share Digitally</h3>
                <p className="text-[#4A5568] leading-relaxed">Print copies for in-person sales or share as a PDF/Google Form for online orders. For digital versions, consider creating a Google Form that auto-populates a spreadsheet for easier tracking and order management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-8">Tips for Product Fundraising</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Keep the Form Simple</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">A complicated order form reduces sales. Limit your product catalog to 5-10 items, use clear product names, and make the form easy to fill out by hand. Include photos of products when possible.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <Wallet className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Offer Multiple Payment Options</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">Accept GCash, bank transfer, Maya, and cash. The more payment options you offer, the more customers can buy. Always send payment confirmation to customers within 24 hours of receiving their payment.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <Package className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Track Inventory Carefully</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">Maintain a real-time inventory log to avoid overselling. Update stock levels after each order. Set a cut-off date for orders and communicate it clearly to all customers and team members.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Set Clear Deadlines</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">Set a firm order deadline, payment deadline, and delivery date. Communicate these dates prominently on the order form and in all promotional materials. Stick to your deadlines to maintain credibility.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <Truck className="h-5 w-5 text-[#C8A951]" />
                <h3 className="font-bold text-navy">Include a Delivery Timeline</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">Clearly state when customers can expect their orders. For local deliveries, specify the delivery day. For provincial orders, provide an estimated delivery window (e.g., 3-5 business days). Send delivery notifications with tracking information when available. Proactive communication about delivery status reduces customer complaints and builds trust for future fundraising campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <ProofBlock variant="compliance">
            Product-based fundraising in the Philippines may require local government permits depending on your location and scale. For school fundraisers, obtain approval from school administration. For public sales, check with your Barangay or LGU for required permits. Food products must comply with FDA Philippines regulations and local health ordinances. Maintain complete sales records including order forms, payment receipts, and delivery confirmances for financial transparency and potential BIR reporting obligations. Issue official receipts for all transactions.
          </ProofBlock>
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <SEOBlock items={faqs} />
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <AuthorBox lastUpdated="2026-06-10" />
        </div>
      </section>

      <section className="bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <InternalLinks title="More Templates" links={internalLinks} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0A1F44] to-[#1A3A6B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <ShoppingCart className="h-12 w-12 text-[#C8A951] mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4">Ready to Start Your Fundraiser?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Launch your verified fundraising campaign on Fundraise.ph and use these templates to run a professional, transparent product fundraiser.</p>
          <Link href="https://fundraising.ph/start" className="inline-flex items-center gap-2 bg-[#C8A951] text-[#0A1F44] font-bold px-8 py-4 rounded-full hover:bg-[#B8943F] transition-colors text-lg">
            Start Your Campaign
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
