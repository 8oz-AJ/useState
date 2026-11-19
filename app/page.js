import Pizza from "./components/Pizza";

export default function Home() {
  return (
    // <main className="min-h-screen p-8 bg-gray-50 flex flex-col items-center gap-8">
    //   <h1 className="text-3xl font-bold text-gray-800">useState</h1>
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
    //     <Counter />
    //     <LightSwitch />
    //     <SecretMessage />
    //   </div>
    // </main>
    <div className="min-h-screen py-10 px-4">
      <Pizza />
    </div>
  );
}
