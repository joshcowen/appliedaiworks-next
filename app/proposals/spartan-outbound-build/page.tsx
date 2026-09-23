import type { Metadata } from "next";
import "./proposal.css";
import { heroHtml, sectionsHtml } from "./content";
import SignForm from "./SignForm";

export const metadata: Metadata = {
  title: "Outbound Build Proposal | Spartan Marketing | Applied AI Works",
  description: "Phase one outbound client acquisition build proposal for Spartan Marketing.",
  robots: { index: false, follow: false, nocache: true },
};

export default function SpartanOutboundBuildProposal() {
  return (
    <div className="prop">
      <div dangerouslySetInnerHTML={{ __html: heroHtml }} />
      <div className="main">
        <div dangerouslySetInnerHTML={{ __html: sectionsHtml }} />
        <SignForm />
      </div>
    </div>
  );
}
