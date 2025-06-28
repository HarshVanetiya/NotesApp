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
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "32px",
                    padding: "32px",
                    maxWidth: "900px",
                    margin: "0 auto",
                }}
            >
                {notes.map((note) => (
                    <div
                        key={note.id}
                        style={{
                            minHeight: "20vh",
                            background: "#23272f",
                            borderRadius: "12px",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                            color: "#3b82f6",
                            padding: "10px 31px",
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.background =
                                "linear-gradient(45deg, #3b82f6 0%, #22d3ee 60%,rgb(1, 172, 199) 100%)";
                            e.currentTarget.style.color = "black";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.background = "#23272f";
                            e.currentTarget.style.color = "#3b82f6";
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
