import { Typography, Space } from "antd";
import React from "react";
import Link from "next/link"

const Footer = () => {
  return (
    <div className="footer">
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        Copyright © 2021
        <Link href="/">Cryptoverse Inc.</Link> <br />
        All Rights Reserved.
      </Typography.Title>
      <Space>
        <Link href="/">Home</Link>
        <Link href="/exchanges">Exchanges</Link>
        <Link href="/news">News</Link>
      </Space>
    </div>
  );
};

export default Footer;
