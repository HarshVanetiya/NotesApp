import React, { useEffect, useState } from "react";
import NotesDashboard from "./pages/NotesDashboard";
import CreateNote from "./pages/CreateNote";
import Loader from "./pages/Loader";
import { ContextProvider } from "./context/ContextStore";

const App = () => {
    const [create, setCreate] = useState(false);
    const [notes, setNotes] = useState(null);
    const [createTitle, setCreateTitle] = useState("");
    const [createBody, setCreateBody] = useState("");
    const [createMode, setCreateMode] = useState("new");
    const [createId, setCreateId] = useState(null);

    useEffect(() => {
        try {
            const noteInLocal = localStorage.getItem("notes");
            console.log(noteInLocal);
            setNotes(noteInLocal ? JSON.parse(noteInLocal) : []);
        } catch (error) {
            console.log(error);
            setNotes([]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    if (!notes) {
        return <Loader />;
    }

    return (
        <>
            <ContextProvider
                value={{
                    notes,
                    setNotes,
                    setCreate,
                    setCreateTitle,
                    setCreateBody,
                    setCreateMode,
                    setCreateId,
                }}
            >
                {!create ? (
                    <NotesDashboard />
                ) : (
                    <CreateNote
                        setNotes={setNotes}
                        setCreate={setCreate}
                        title={createTitle}
                        body={createBody}
                        mode={createMode}
                        id={createId}
                    />
                )}
            </ContextProvider>
        </>
    );
};

export default App;
