import axios from "axios"

export const fetchNotes = async () => {
    var response = await axios.get("http://localhost:5127/notes");

    return response.data;
}

export const createNote = async (note) => {
    var response = await axios.post("http://localhost:5127/notes", note);

    return response.status;
}