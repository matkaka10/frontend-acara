import PageHead from "@/components/commons/PageHead";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <PageHead title="Hello"/>
      <div className="flex">
      <Button color="secondary">Hello</Button>
      <Button color="primary">Wok</Button>
      <Button color="primary" size="sm">tertiary</Button>
      </div>
    </main>
  );
}
