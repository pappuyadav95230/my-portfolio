"use client";

// Re-export the state-of-the-art ExperiencePage component
// ensuring both /work (Navbar & Footer link) and /experience render the identical premium dark UI
import ExperiencePage from "../experience/page";

export default function WorkPage() {
  return <ExperiencePage />;
}