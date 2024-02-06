import { useRouter } from "next/router";
import Data from "../../app/data.json";
import { useEffect, useState } from "react";
import Image from "next/image";
import "../../app/globals.css";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [nft, useNft] = useState(undefined);

  useEffect(() => {
    if (id) {
      useNft((_) => Data.nfts.filter((nft) => nft.id == id)[0]);
    }
  }, [id]);

  if (!nft) {
    return <>loading...</>;
  }

  return (
    <div>
      {" "}
      <Image src={nft.image_link} alt={nft.name} width={300} height={300} />
      <h1>{nft.name}</h1>
      <p>{nft.description}</p>
      <p>{nft.price} USD</p>
      <button>BUY</button>
    </div>
  );
}
