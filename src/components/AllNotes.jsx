import React from "react";
import Card from "./Card";
import { useContextStore } from "../context/ContextStore";

const AllNotes = () => {
    const {
        notes,
        setCreateTitle,
        setCreate,
        setCreateBody,
        setCreateMode,
        setCreateId,
    } = useContextStore();
    return (
        <>
            <div
                className="notes-grid-responsive"
                style={{
                    display: "grid",
                    gap: "32px",
                    padding: "32px",
                    maxWidth: "1000px",
                    margin: "0 auto",
                }}
            >
                {notes.map((note) => (
                    <div
                        key={note.id}
                        style={{
                            minHeight: "20vh",
                            background: "rgb(32,32,32)",
                            borderRadius: "12px",
                            boxShadow: "0 4px 16px 0 rgba(0,0,0,0.18)",
                            color: "#e5e7eb",
                            padding: "10px 31px",
                        }}
                    >
                        <Card note={note} />
                    </div>
                ))}
                <div
                    style={{
                        minHeight: "20vh",
                        background: "rgba(0,0,0,0.01)",
                        borderRadius: "12px",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                        color: "#3b82f6",
                        padding: "10px 31px",
                        border: "2px dashed rgba(255,255, 255, 0.1)",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        setCreateMode("new");
                        setCreateId(notes.length);
                        setCreateTitle("");
                        setCreateBody("");
                        setCreate(true);
                    }}
                >
                    <h1 style={{ margin: "auto 0" }}>➕</h1>
                </div>
            </div>
        </>
    );
};

export default AllNotes;
