import type { Metadata } from "next";
import DeleteAccountContent from "./delete-account-content";

export const metadata: Metadata = {
  title: "Delete Account",
  description:
    "Request deletion of your Proofrr account. All account data and associated workspace assets are permanently purged after a 30-day grace period.",
  openGraph: {
    title: "Delete Account | Proofrr",
    description:
      "Request deletion of your Proofrr account. All account data and associated workspace assets are permanently purged after a 30-day grace period.",
  },
};

export default function DeleteAccountPage() {
  return <DeleteAccountContent />;
}
