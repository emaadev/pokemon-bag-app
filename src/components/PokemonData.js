import {
  Box,
  AspectRatio,
  Image,
  Stack,
  Progress,
  Text,
  Badge,
  HStack,
  Button,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PokemonData({
  pokemon,
  capturePokemon,
  releasePokemon,
  catchedPokemons,
}) {
  const [catched, setCatched] = useState(false);

  // TODO: Comprobar si el pokemon ya está capturado ☑️
  useEffect(() => {
    const captured = catchedPokemons.some((item) => item.id === pokemon.id);

    if (captured) {
      setCatched(true);
    } else {
      setCatched(false);
    }

    console.log(pokemon);
  }, []);

  function handleCapture() {
    if (capturePokemon) {
      capturePokemon(pokemon);
      setCatched(true);
    }
  }

  function handleRelease() {
    if (releasePokemon) {
      releasePokemon(pokemon);
      setCatched(false);
    }
  }

  return (
    <Stack spacing="5" pb="5">
      <Stack
        spacing="5"
        backgroundImage="url(/cine.png)"
        backgroundPosition="20px 10px"
        backgroundRepeat="no-repeat"
        position="relative"
      >
        <Flex flexDirection="column" right="0" gap="10px" zIndex="99">
          <Box className="cardData">
            {pokemon?.types.map((type) => (
              <Badge className="details" key={type.slot}>
                {type?.type.name}
              </Badge>
            ))}
          </Box>

          <Flex gap="10px">
            <Button
              display={`${catched ? "flex" : "none"}`}
              onClick={handleRelease}
              colorScheme="red"
            >
              Release
            </Button>

            <button
              onClick={handleCapture}
              disabled={catched}
              style={{
                padding: "8px 20px",
                backgroundColor: "#3182ce",
                borderRadius: "7px",
                color: "#fff",
                fontWeight: "600",
              }}
            >
              {catched ? "Captured" : "Capture Pokemon"}
            </button>
          </Flex>
        </Flex>

        <AspectRatio margin="auto" width="250px" ratio={1}>
          <Image
            objectFit="contain"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
          />
        </AspectRatio>
      </Stack>

      <Flex
        flexDirection="column"
        backgroundColor="#fff"
        p="15px"
        borderRadius="5px"
      >
        <Stack
          direction="row"
          textAlign="center"
          margin="auto"
          mb="15px"
          spacing="5"
          fontSize="sm"
          fontWeight="500"
        >
          <Stack>
            <Text>Weight</Text>
            <Text fontSize="18px" fontWeight="600">
              {pokemon?.weight}
            </Text>
          </Stack>
          <Stack>
            <Text>Height</Text>
            <Text fontSize="18px" fontWeight="600">
              {pokemon?.height}
            </Text>
          </Stack>
          <Stack>
            <Text>Movements</Text>
            <Text fontSize="18px" fontWeight="600">
              {pokemon?.moves.length}
            </Text>
          </Stack>
        </Stack>

        <Stack spacing="5" p="5" bg="gray.100" borderRadius="5px">
          <Stack>
            <Text fontSize="xs">HP</Text>
            <Progress
              colorScheme={`${
                pokemon?.stats[0].base_stat < 50 ? "red" : "green"
              }`}
              bg="gray.300"
              height="5px"
              borderRadius="5px"
              value={pokemon?.stats[0].base_stat}
            />
          </Stack>
          <Stack>
            <Text fontSize="xs">Attack</Text>
            <Progress
              colorScheme={`${
                pokemon?.stats[1].base_stat < 50 ? "red" : "green"
              }`}
              bg="gray.300"
              height="5px"
              borderRadius="5px"
              value={pokemon?.stats[1].base_stat}
            />
          </Stack>
          <Stack>
            <Text fontSize="xs">Defense</Text>
            <Progress
              colorScheme={`${
                pokemon?.stats[2].base_stat < 50 ? "red" : "green"
              }`}
              bg="gray.300"
              height="5px"
              borderRadius="5px"
              value={pokemon?.stats[2].base_stat}
            />
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
