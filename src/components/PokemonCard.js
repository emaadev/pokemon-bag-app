import { Stack, Text, Image, Badge, Box, Flex } from "@chakra-ui/react";

export default function PokemonCard({ pokemon }) {
  return (
    <Stack
      className="card"
      display="flex"
      flexDirection="row-reverse"
      justifyContent="space-between"
      alignItems="center"
      spacing="5"
      p="4"
      w="250px"
      h="150px"
      borderRadius="xl"
    >
      <Box width="100%">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
          objectFit="contain"
          height="150px"
          className="cardImg"
        />
      </Box>

      <Flex flexDirection="column" textAlign="left" gap="8px">
        <Text
          textAlign="left"
          fontSize="18px"
          fontWeight="700"
          textTransform="Capitalize"
        >
          {pokemon.name}
        </Text>
        {pokemon.types.map((type) => (
          <Badge className="details" key={type.slot}>
            {type.type.name}
          </Badge>
        ))}
      </Flex>
    </Stack>
  );
}
