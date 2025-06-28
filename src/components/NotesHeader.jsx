import React from "react";
import { useContextStore } from "../context/ContextStore";

const NotesHeader = () => {
    const {
        setCreate,
        setCreateTitle,
        setCreateBody,
        setCreateMode,
        notes,
        setCreateId,
    } = useContextStore();

    const btn = {
        border: "none",
        padding: "12px",
        fontSize: "1.1rem",
        cursor: "pointer",
        borderRadius: "5px",
        color: "#ffffff",
        background: "#292929",
    };
    return (
        <>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.5vh 4vw",
                    background:
                        "linear-gradient(90deg, #202020 60%, #353535 100%)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    minHeight: "10vh", // 70px is roughly 10vh on most screens
                }}
            >
                <h1
                    style={{
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        letterSpacing: "2px",
                        color: "#fff",
                        margin: 0,
                    }}
                >
                    NotesApp
                </h1>
                <div
                    style={{
                        display: "flex",
                        gap: "16px",
                    }}
                >
                    <button
                        style={{
                            ...btn,
                            transition: "background 0.2s, transform 0.2s",
                        }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.background = "#444")
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.background = "#292929")
                        }
                    >
                        Mode
                    </button>
                    <button
                        style={{
                            ...btn,
                            background: "#444",
                            transition: "background 0.2s, transform 0.2s",
                        }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.background = "#222")
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.background = "#444")
                        }
                        onClick={() => {
                            setCreateMode("new");
                            setCreateTitle("");
                            setCreateBody("");
                            setCreate(true);
                            setCreateId(notes.length);
                        }}
                    >
                        Create
                    </button>
                </div>
            </div>
        </>
    );
};

export default NotesHeader;
