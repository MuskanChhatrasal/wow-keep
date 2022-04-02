import { createContext, useContext } from "react";
import { useAuth } from "./authContext";
import axios from "axios";


const NoteContext = createContext();

const NoteProvider = ({children}) =>{
    
    const {authDispatch} = useAuth();
     const config = {
       headers: {
           authorization: localStorage.getItem("tokenNotesApp")
       }
    }

    const getNotes = async() => {
        try {
            const response = await axios.get(
                "/api/notes",
                config
                )
            if(response.status === 200) {
                authDispatch({type: "GET_ALL_NOTES", payload:{data: response.data.notes}})
            }
        }catch(error) {
            console.log(error)
        }
    }

     const addNote = async(note) => {
        try {
            const response = await axios.post(
                "/api/notes",
                {note: note},
                config
            )
            if(response.status === 201){
                authDispatch({type: "ADD_NOTE", payload:{toastMessage: "Note Added", data: response.data.notes}})
            }
        }catch(error) {
            console.log(error)
        }      
    }

    const archiveNote = async(_id, note) => {
        console.log(_id, note)
        try {
            const response = await axios.post(
                `/api/notes/archives/${_id}`,
                { note: note},
                config
            )
            if(response.status === 201) {
                authDispatch({type: "ARCHIVE_NOTE", payload:{toastMessage: "Note Archived", notesData: response.data.notes, archivedData: response.data.archives}})
            }
        }catch(error) {
            console.log(error)
        }
    }
    return (
        <NoteContext.Provider value={{getNotes, addNote, archiveNote}}>{children}</NoteContext.Provider>
    )
}


const useNotes = () => useContext(NoteContext);

export {useNotes, NoteProvider}