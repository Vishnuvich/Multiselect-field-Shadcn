import { MultipleSelector } from "@/components/ui/multipleselector";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-lg">
          Let's create the multiple select field with search function
        </h1>
        <div className="py-5 flex justify-center">
          <MultipleSelector />
        </div>
      </div>
    </main>
  );
}
