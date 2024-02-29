import { ApolloProvider } from "@apollo/client";
import Page from "./testpage/page";
import client from "@/components/providers";
import LoginButton from "@/components/loginbutton";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <Page></Page>
          <LoginButton></LoginButton>
        </div>
      </main>
  );
}
