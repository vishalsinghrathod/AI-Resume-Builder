import { Suspense } from "react";
import FormContent from "./FormContent";

export const dynamic = "force-dynamic";

export default function Page() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FormContent />
    </Suspense>
  );
}