import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <span className="font-mono text-sm uppercase tracking-widest text-accent">404</span>
      <h1 className="font-display mt-4 text-6xl font-extrabold uppercase tracking-tight sm:text-8xl">
        Page not found.
      </h1>
      <p className="mt-6 max-w-md text-ink-dim">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-10">
        <Button href="/" variant="primary">
          Back to Home →
        </Button>
      </div>
    </Container>
  );
}
