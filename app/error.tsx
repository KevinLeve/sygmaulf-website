"use client";

import { useEffect } from "react";
import { Button, Container } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <span className="font-mono text-sm uppercase tracking-widest text-live">Error</span>
      <h1 className="font-display mt-4 text-5xl font-extrabold uppercase tracking-tight sm:text-6xl">
        Something went wrong.
      </h1>
      <p className="mt-6 max-w-md text-ink-dim">
        That request didn&apos;t go through. Try again, or head back to the homepage.
      </p>
      <div className="mt-10 flex gap-4">
        <Button onClick={reset} variant="primary">
          Try Again
        </Button>
        <Button href="/" variant="outline">
          Back to Home
        </Button>
      </div>
    </Container>
  );
}
