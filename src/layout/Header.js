import { Flex, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

import { navLinks } from "../constants";

const Header = () => {
  return (
    <Flex
      className="header"
      alignItems="center"
      justifyContent="space-between"
      mx="auto"
      maxW="70%"
    >
      <Link
        as={NextLink}
        href="/"
        style={{ textDecoration: "none" }}
        display="flex"
        placeItems="center"
        gap="1rem"
      >
        <Image src="/pokebola.png" alt="logo" width={35} height={35} />
        <Text fontSize="18px" fontWeight="700">
          PokemonBag
        </Text>
      </Link>

      <Flex className="navLinks" gap="25px" fontSize="16px" fontWeight="500">
        {navLinks.map((navLink) => (
          <Link
            as={NextLink}
            key={navLink.href}
            href={navLink.href}
            style={{ textDecoration: "none" }}
            _hover={{ opacity: ".7" }}
          >
            {navLink.title}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;
