import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-display text-7xl font-bold text-crust-ember">404</span>
      <h1 className="mt-4 font-display text-2xl font-semibold">This page got eaten before we could serve it.</h1>
      <p className="mt-2 max-w-sm text-crust-black/60">
        The page you're looking for doesn't exist. Let's get you back to something delicious.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </section>
  );
}
