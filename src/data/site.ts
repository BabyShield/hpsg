export const site = {
  legalName: "Hampstead Property Services Group Limited",
  tradingName: "Hampstead Property Services Group",
  shortName: "HPSG",
  companyNumber: "17404557",
  address: {
    line1: "Unit 3 Palace Court",
    line2: "250 Finchley Road",
    city: "London",
    postcode: "NW3 6DN",
  },
  phoneDisplay: "020 7101 3168",
  phoneTel: "+442071013168",
  email: "contact@hpsg.co.uk",
  url: "https://hpsg.co.uk",
  footerLegal:
    "Hampstead Property Services Group Limited · Company No. 17404557 · Registered in England & Wales · Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN",
  tagline:
    "Kitchen, Bathroom & Refurbishment Specialists for North West London",
  homeH1:
    "Kitchen, Bathroom & Refurbishment Specialists in North West London",
  homeMetaTitle:
    "Kitchen, Bathroom & Refurbishment Specialists North West London | HPSG",
  homeMetaDescription:
    "Kitchen, bathroom and light refurbishment specialists in Hampstead and North West London. 020 7101 3168.",
  sisterBrands: [
    {
      name: "Hampstead Renovations",
      url: "https://hampsteadrenovations.co.uk",
    },
    {
      name: "Hampstead On Demand",
      url: null as string | null, // [TBC: URL]
    },
  ],
  paintingBrands: [] as { name: string; url: string }[], // [TBC: names/URLs]
} as const;

export const addressSingleLine = `${site.address.line1}, ${site.address.line2}, ${site.address.city} ${site.address.postcode}`;
