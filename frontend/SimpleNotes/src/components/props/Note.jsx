import { Box, Button, Card, CardDescription, Heading } from "@chakra-ui/react";


export default function Note() {
    return (
        <Box mx={500} my={10}>
            <Card.Root>
                <Card.Header>
                    <Heading>Название</Heading>
                </Card.Header>
                <Card.Body>
                    <Heading>This is the card body. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
            Curabitur nec odio vel dui euismod fermentum.</Heading>
                </Card.Body>
                <Card.Footer>
                    <Button colorPalette={"red"}>Удалить</Button>
                </Card.Footer>
            </Card.Root>
        </Box>
    )
}