import { Box, Button, Card, Heading, Input, Text, Textarea } from "@chakra-ui/react";

export default function NewNote() {
    return (
        <section>
            <Box mx={500} my={10} borderColor={"black"} borderWi>
                <form>
                    <Text fontWeight={"bold"} fontSize={"2xl"} m={1} justifySelf={"center"}>Новая заметка</Text>
                    <Input m={1} placeholder="Название"/>
                    <Textarea m={1} placeholder="Основной контент" />
                    <Button display={"flex"} justifySelf={"center"} m={1} colorPalette={"blue"}>Добавить</Button>
                </form>
            </Box>
        </section>
    );
}