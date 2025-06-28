import React, { useEffect } from "react";
import NotesHeader from "../components/NotesHeader";
import NoNotes from "../components/NoNotes";
import AllNotes from "../components/AllNotes";
import { useContextStore } from "../context/ContextStore";

const NotesDashboard = () => {
    const { notes } = useContextStore();
    return (
        <>
            <NotesHeader />
            {notes.length ? <AllNotes /> : <NoNotes />}
        </>
    );
};

export default NotesDashboard;
