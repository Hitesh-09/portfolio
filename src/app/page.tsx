import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-full pt-4">
        <Hero />
      </div>
    </main>
  );
}
