import PageHead from "@/components/commons/PageHead";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <PageHead title="Hello"/>
      <Button color="primary">Hello</Button>
    </main>
  );
}
