import React, { useEffect } from "react";
import NotesHeader from "../components/NotesHeader";
import { useContextStore } from "../../../ExpenseTracker/src/context/ContextStore";
import NoNotes from "../components/NoNotes";
import AllNotes from "../components/AllNotes";

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
