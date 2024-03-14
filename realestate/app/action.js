"use server";
import { baseUrl, fetchApi } from "@/utils/fetchApi";
import { revalidateTag } from "next/cache";

export default async function Action() {
  revalidateTag("collection");
  const query = {
    purpose: "for sale",
    rentFrequency: "monthly",
    minPrice: "0",
    maxPrice: "100000",
    roomsMin: "0",
    bathsMin: "0",
    sort: "desc",
    areaMax: "1000",
    locationExternalIDs: "1002",
    categoryExternalID: "2",
  };

  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const properties = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );
  return properties;
}
