"use client";

import Image from "next/image";
import styles from "./page.module.css";
import data from "./data.json";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [listData, useListData] = useState(data);

  const modifyList = (e) => {
    const search = e.target.value;

    const filteredData = data.nfts.filter((nft) => {
      return nft.name.toLowerCase().includes(search.toLowerCase());
    });

    useListData({ nfts: filteredData });
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>NFT Store</h1>
      <p className={styles.description}>Welcome to the NFT Store</p>
      <button className={styles.eth_btn}>Connect Ethereum Wallet</button>
      <input
        onChange={(e) => modifyList(e)}
        type="text"
        placeholder="Search..."
      />
      <ul>
        {listData.nfts.map((nft) => (
          <li key={nft.id} className={styles.card}>
            <Link href={`/products/${nft.id}`}>
              <Image
                src={nft.image_link}
                alt={nft.name}
                width={300}
                height={300}
              />
              <h2>{nft.name}</h2>
              <p>{nft.description}</p>
              <p>{nft.price} USD</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
