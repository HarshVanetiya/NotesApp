import React from "react";
import { useContextStore } from "../context/ContextStore";

const cardBtnStyle = {
    border: "none",
    padding: "12px",
    fontSize: "0.8rem",
    cursor: "pointer",
    borderRadius: "10px",
    color: "#7ee6fa",
    background: "#3a7e8c",
    fontWeight: 700,
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    transition: "background 0.2s, transform 0.2s",
    outline: "none",
};

const Card = ({ note }) => {
    const {
        setCreateTitle,
        setCreateBody,
        setCreate,
        setCreateMode,
        setNotes,
        setCreateId,
    } = useContextStore();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "160px",
                maxHeight: "190px",
                overflow: "visible",
                justifyContent: "space-between",
            }}
        >
            <div>
                <h3
                    style={{
                        marginBottom: "1.1rem",
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "#fff",
                        letterSpacing: "0.5px",
                        lineHeight: 1.3,
                        wordBreak: "break-word",
                    }}
                >
                    {note.title}
                </h3>
                <div
                    style={{
                        color: "#cbd5e1",
                        fontSize: "1.01rem",
                        lineHeight: 1.5,
                        wordBreak: "break-word",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxHeight: "50px",
                        marginBottom: "0.5rem",
                    }}
                >
                    {note.body}
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "8px",
                    marginTop: "1.2rem",
                }}
            >
                <button
                    style={cardBtnStyle}
                    onMouseOver={(e) =>
                        (e.currentTarget.style.background = "#2e5e6b")
                    }
                    onMouseOut={(e) =>
                        (e.currentTarget.style.background = "#3a7e8c")
                    }
                    onClick={() => {
                        setCreateId(note.id);
                        setCreateMode("edit");
                        setCreateTitle(note.title);
                        setCreateBody(note.body);
                        setCreate(true);
                    }}
                >
                    Open
                </button>
                <button
                    style={{
                        ...cardBtnStyle,
                        background: "#c0392b",
                        color: "#ffaaaa",
                    }}
                    onMouseOver={(e) =>
                        (e.currentTarget.style.background = "#922b21")
                    }
                    onMouseOut={(e) =>
                        (e.currentTarget.style.background = "#c0392b")
                    }
                    onClick={() => {
                        setNotes((prev) =>
                            prev.filter((item) => item.id !== note.id)
                        );
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Card;
