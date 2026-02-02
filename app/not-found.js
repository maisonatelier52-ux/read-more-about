import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-6">
      <div className="max-w-xl w-full text-center bg-white border-4 border-zinc-900 shadow-xl p-10">
        
        <p className="uppercase tracking-widest text-xs text-zinc-500 mb-2">
          Breaking News
        </p>

        <h1 className="text-7xl font-black mb-4 font-serif">404</h1>

        <h2 className="text-2xl font-bold mb-4 font-serif">
          Page Not Found
        </h2>

        <p className="text-zinc-600 mb-8">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <Link
          href="/"
          className="inline-block bg-zinc-900 text-white px-8 py-4 font-bold hover:bg-red-600 transition"
        >
          ← Back to Homepage
        </Link>
      </div>
    </div>
  );
}
