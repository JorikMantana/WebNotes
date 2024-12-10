import { Box, Button, Card, CardDescription, Heading } from "@chakra-ui/react";


export default function Note({title, content}) {
    return (
        <Box mx={500} my={10}>
            <Card.Root>
                <Card.Header>
                    <Heading>{title}</Heading>
                </Card.Header>
                <Card.Body>
                    <Heading>{content}</Heading>
                </Card.Body>
                <Card.Footer>
                    <Button colorPalette={"red"}>Удалить</Button>
                </Card.Footer>
            </Card.Root>
        </Box>
    )
}