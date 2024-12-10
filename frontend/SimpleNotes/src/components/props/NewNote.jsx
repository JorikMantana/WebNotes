import { Box, Button, Card, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";

export default function NewNote({onCreate}) {
    const [note, setNote] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        setNote(null);
        onCreate(note);
    }

    return (
        <section>
            <Box mx={500} my={10} borderColor={"black"} borderWi>
                <form onSubmit={onSubmit}>
                    <Text fontWeight={"bold"} fontSize={"2xl"} m={1} justifySelf={"center"}>Новая заметка</Text>
                    <Input m={1} placeholder="Название" value={note?.title ?? ""} onChange={(e) => setNote({...note, title: e.target.value})} />
                    <Textarea m={1} placeholder="Основной контент" value={note?.content ?? ""} onChange={(e) => setNote({...note, content: e.target.value})} />
                    <Button type="submit" display={"flex"} justifySelf={"center"} m={1} colorPalette={"blue"}>Добавить</Button>
                </form>
            </Box>
        </section>
    );
}