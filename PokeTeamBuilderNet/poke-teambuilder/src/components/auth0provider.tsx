"use client"
import { Auth0Provider } from "@auth0/auth0-react";

export default function Auth0ProviderWrapper({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <Auth0Provider
        domain= "dev-5livkq8v04ng4gxc.us.auth0.com"
        clientId= "gNStGk9zxk7fl8x7h0BQf0V07O98G4fR"
        authorizationParams={{
          redirect_uri:"http://localhost:3000",
        }}>
            {children}
        </Auth0Provider>
    )
}