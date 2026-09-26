# Other services integration

The owner requested publication on the HPSG website with Other services in the
footer. The four main service links remain in the desktop and mobile menus.

## What is connected

- `/other-services/` is the entry point from the footer's Services column.
- Eight category pages contain the 87 reviewed services from ai-leads-nw.
  `src/data/other-services.json` matches its `content/other-services.json`.
- Search, category links and service-specific enquiry links use HPSG routes.
- Enquiries carry the selected service into the HPSG contact form. WhatsApp
  keeps `https://wa.me/447459345456` and includes the service in the draft text.
- The four main services remain on their established HPSG pages.

The catalogue is integrated into HPSG. It does not embed or reactivate the
withdrawn website, its historical generated pages, or its old automation.
The retired domain must continue returning 410.

The separate enquiry Worker remains inactive. The public form prepares an
email to `office@hpsg.co.uk`, which the visitor must send in their email app.
Direct submission, storage and automatic office notification require the
configuration described in [ENQUIRY_SERVICE.md](ENQUIRY_SERVICE.md).

## Release checks

- Production webpack build and TypeScript passed locally.
- Publication checks passed: 87 services, 12 key routes, 165 catalogue/policy
  links, no leaked marked claims and no orphaned pages across 121 built pages.
- The primary-menu spacing is restored to match the existing HPSG website.
- The release checks also cover single-pass HTML entity decoding, mixed-case
  script/style extraction and exact provider/link URL matching. All 14 tests
  passed with `node --test tests/built-text.test.mjs tests/enquiries.test.mjs`.
- Hosted deployment status and live verification are recorded in
  [pull request 1](https://github.com/BabyShield/hpsg/pull/1).
