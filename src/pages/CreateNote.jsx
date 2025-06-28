import React, { useEffect, useState } from "react";

const CreateNote = ({ title, body, mode, setCreate, setNotes, id }) => {
    const [Ltitle, setLtitle] = useState(title);
    const [Lbody, setLbody] = useState(body);
    const handelSave = () => {
        if (mode === "new") {
            setNotes((prev) => [
                ...prev,
                { id: id, title: Ltitle, body: Lbody },
            ]);
        } else {
            setNotes((prev) => [
                ...prev.filter((note) => note.id !== id),
                { id: id, title: Ltitle, body: Lbody },
            ]);
        }
        setCreate(false);
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#181A1B", // dark mode bg
            }}
        >
            <form
                style={{
                    background: "rgba(30,32,34,0.95)",
                    borderRadius: "18px",
                    boxShadow: "0 4px 32px #000a",
                    padding: "2.5rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: "350px",
                    width: "40vw",
                    maxWidth: "600px",
                }}
                onSubmit={(e) => e.preventDefault()}
            >
                <label
                    htmlFor="title"
                    style={{
                        color: "#eee",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        marginBottom: "0.5rem",
                        alignSelf: "flex-start",
                    }}
                >
                    Title
                </label>
                <input
                    type="text"
                    value={Ltitle}
                    id="title"
                    onChange={(e) => setLtitle(e.target.value)}
                    style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        borderBottom: "2px solid #444",
                        color: "#fff",
                        fontSize: "1.3rem",
                        marginBottom: "1.5rem",
                        outline: "none",
                        padding: "0.5rem 0",
                        fontWeight: 500,
                        letterSpacing: "0.5px",
                        transition: "border 0.2s",
                    }}
                    autoComplete="off"
                />
                <label
                    htmlFor="body"
                    style={{
                        color: "#eee",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        marginBottom: "0.5rem",
                        alignSelf: "flex-start",
                    }}
                >
                    Body
                </label>
                <textarea
                    value={Lbody}
                    id="body"
                    onChange={(e) => setLbody(e.target.value)}
                    style={{
                        width: "100%",
                        minHeight: "320px",
                        resize: "vertical",
                        background: "rgba(24,26,27,0.92)",
                        border: "none",
                        color: "#f8f8f2",
                        fontSize: "1.15rem",
                        fontFamily: "'Fira Mono', 'Consolas', 'monospace'",
                        padding: "1.2rem 1rem",
                        borderRadius: "12px",
                        marginBottom: "2rem",
                        boxShadow: "0 2px 12px #0004",
                        outline: "none",
                        lineHeight: 1.7,
                        letterSpacing: "0.2px",
                        transition: "box-shadow 0.2s",
                    }}
                    placeholder="Start typing your note..."
                />
                <div
                    style={{
                        display: "flex",
                        gap: "1.2rem",
                        width: "100%",
                        justifyContent: "flex-end",
                    }}
                >
                    <button
                        type="button"
                        style={{
                            background: "transparent",
                            color: "#aaa",
                            border: "1px solid #333",
                            borderRadius: "8px",
                            padding: "0.6rem 1.5rem",
                            fontSize: "1rem",
                            cursor: "pointer",
                            transition: "background 0.2s, color 0.2s",
                        }}
                        onClick={() => {
                            setCreate(false);
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        style={{
                            background:
                                "linear-gradient(90deg, #232526 0%, #414345 100%)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "8px",
                            padding: "0.6rem 1.5rem",
                            fontSize: "1rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            boxShadow: "0 2px 8px #0003",
                            transition: "background 0.2s, color 0.2s",
                        }}
                        onClick={handelSave}
                    >
                        {mode === "edit" ? "Edit" : "Save"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateNote;
