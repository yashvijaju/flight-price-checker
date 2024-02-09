import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Tracker() {
  async function postRequest() {
    const response = await fetch("/api/check_price", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          "confirmationNumber":"48Y9WE",
          "passengerFirstName":"Yashvi",
          "passengerLastName":"Jaju",
          "application":"air-manage-reservation",
          "site":"southwest"
        })
    });
    console.log(response)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <button onClick={postRequest}>Track Price</button>

      </main>
    </>
  );
}
