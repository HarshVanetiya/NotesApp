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
        <div>
            <h3
                style={{
                    marginBottom: "54px",
                    fontSize: "1.6rem",
                }}
            >
                {note.title}
            </h3>
            <div
                style={{
                    display: "flex",
                    gap: "8px",
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
                    Edit
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
