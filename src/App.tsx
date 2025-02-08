import { Anchor, Box, List, Title } from "@mantine/core";

function App() {
  return (
    <Box p="sm">
      <Box>
        <Anchor href="/"
          underline="never" c="black" size="1.5rem" fw="bold">Home</Anchor>
      </Box>
      <Box my="sm">
        <Title size="h2">Projects</Title>
        <List>
          <List.Item><Anchor href="https://github.com/ShouvikGhosh2048/3d-cellular-automata">3D cellular automata</Anchor>: 3D cellular automata in Typescript and WebGL.</List.Item>
          <List.Item><Anchor href="https://github.com/ShouvikGhosh2048/3d-geometry-topology-visualizer">3D geometry topology visualizer</Anchor>: A visualizer for 3d geometry and topology in Odin and Raylib.</List.Item>
        </List>
      </Box>
    </Box>
  );
}

export default App;
