"use client";

import React from "react";

import { Row, Col } from "antd";


import { useGetExchangesQuery } from "../../../lib/cryptoApi";
import Loader from "../../../components/Loader";



const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery<any>(100);
  const exchangesList = data?.data?.exchanges;
  // Note: To access this endpoint you need premium plan
  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        
      </Row>
    </>
  );
};

export default Exchanges;
