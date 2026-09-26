import { PolicyPage } from "@/components/ui/PolicyPage";
import policies from "@/data/site-policies.json";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({title:"Website terms | HPSG",description:"Website and enquiry terms for Hampstead Property Services Group Limited.",path:"/terms/",index:false,follow:true});
export default function TermsPage() {
  return <PolicyPage title="Website terms" path="/terms/" revised={policies.revised} sections={policies.terms} />;
}
