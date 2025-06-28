import React from "react";
import { useContextStore } from "../../../ExpenseTracker/src/context/ContextStore";

const NoNotes = () => {
    const {
        setCreate,
        setCreateTitle,
        setCreateBody,
        setCreateMode,
        setCreateId,
        notes,
    } = useContextStore();

    return (
        <>
            <div
                style={{
                    minHeight: "87vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    background: "#181c23",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: "40vh",
                        background:
                            "radial-gradient(ellipse at bottom, #3b82f6 0%, #22d3ee 40%, transparent 100%)",
                        filter: "blur(32px)",
                        zIndex: 0,
                    }}
                />
                <div
                    style={{
                        // position: "relative",
                        zIndex: 1,
                        // textAlign: "center",
                    }}
                >
                    <h1
                        style={{
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: "5rem",
                            marginBottom: 8,
                            marginTop: "-7vh",
                        }}
                    >
                        Welcome to NotesApp
                    </h1>
                    <h2
                        style={{
                            color: "#ccc",
                            fontWeight: 400,
                            fontSize: "1.2rem",
                            marginBottom: 24,
                        }}
                    >
                        <button
                            style={{
                                border: "none",
                                padding: "12px",
                                fontSize: "1.1rem",
                                cursor: "pointer",
                                borderRadius: "10px",
                                color: "#7ee6fa",
                                background: "#3a7e8c",
                                fontWeight: 700,
                                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                                transition: "background 0.2s, transform 0.2s",
                                outline: "none",
                            }}
                            onMouseOver={(e) =>
                                (e.currentTarget.style.background = "#2e5e6b")
                            }
                            onMouseOut={(e) =>
                                (e.currentTarget.style.background = "#3a7e8c")
                            }
                            onClick={() => {
                                setCreateId(notes.length);
                                setCreateMode("new");
                                setCreateTitle("");
                                setCreateBody("");
                                setCreate(true);
                            }}
                        >
                            Create
                        </button>{" "}
                        your first note, your ideas are waiting.
                    </h2>
                </div>
            </div>
            <style>{`
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(12px); }
                }
            `}</style>
        </>
    );
};

export default NoNotes;
