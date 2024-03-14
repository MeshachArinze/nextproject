"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

import Property from "@/components/Property";
import SearchFilters from "@/components/SearchFilters";
import noresult from "@/public/noresult.svg";

import Action from "@/app/action";
import { baseUrl } from "@/utils/fetchApi";


const Search = () => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  const data = Action(baseUrl)
    .then((res) => res)
    .catch((error) => console.log(error));

  return (
    <Box>
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties {router}
      </Text>
      <Flex flexWrap="wrap">
        {data.hits.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {data?.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          marginTop="5"
          marginBottom="5"
        >
          <Image src={noresult} alt="" width={40} height={40} priority />
          <Text fontSize="xl" marginTop="3">
            No Result Found.
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default Search;
