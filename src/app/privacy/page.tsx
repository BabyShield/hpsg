import { PolicyPage } from "@/components/ui/PolicyPage";
import policies from "@/data/site-policies.json";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({title:"Privacy notice | HPSG",description:"How Hampstead Property Services Group Limited handles website enquiries and contact information.",path:"/privacy/",index:false,follow:true});
export default function PrivacyPage() {
  return <PolicyPage title="Privacy notice" path="/privacy/" revised={policies.revised} sections={policies.privacy} />;
}
