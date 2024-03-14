"use client";

import React, { useEffect, useState } from "react";
import millify from "millify";
import Link from "next/link";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../../../lib/cryptoApi";
import Loader from "../../../components/Loader";
import Image from "next/image";

type currencyProps = {
  uuid: string;
  rank: string;
  name: string;
  iconUrl: string;
  price: number;
  marketCap: number;
  change: boolean;
};

const crypto = [
  {
    uuid: "4uifjjj404",
    rank: "10",
    name: "crypto",
    iconUrl: "",
    price: 0,
    marketCap: 0,
    change: false,
  },
];

const Cryptocurrencies = ({ simplified }: any) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState<currencyProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter(
      (item: { name: any }) => item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos.map(
          (currency: {
            uuid: string;
            rank: string;
            name: string;
            iconUrl: string;
            price: number;
            marketCap: number;
            change: boolean;
          }) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={currency.uuid}
            >
              {/* Note: Change currency.id to currency.uuid  */}
              <Link key={currency.uuid} href={`/crypto/${currency.uuid}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={
                    <Image
                      className="crypto-image"
                      src={currency.iconUrl}
                      alt=""
                    />
                  }
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {currency.change}%</p>
                </Card>
              </Link>
            </Col>
          )
        )}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
