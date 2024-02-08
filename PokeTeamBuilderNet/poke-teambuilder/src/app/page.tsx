import Image from "next/image";
import Page from "./testpage/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Page></Page>
        <div className="btn btn-primary"></div>
      </div>
    </main>
  );
}
