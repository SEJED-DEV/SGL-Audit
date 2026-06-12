import type { Metadata } from "next";
import { LangNotFound } from "./not-found-client";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <LangNotFound />;
}
