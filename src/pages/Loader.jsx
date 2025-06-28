import React from "react";

const Loader = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#181A1B",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.5rem",
                }}
            >
                <div
                    style={{
                        width: "56px",
                        height: "56px",
                        border: "6px solid #232526",
                        borderTop: "6px solid #00bcd4",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                    }}
                />
                <span
                    style={{
                        color: "#eee",
                        fontSize: "1.2rem",
                        letterSpacing: "1px",
                        fontFamily: "inherit",
                        opacity: 0.85,
                    }}
                >
                    Loading NotesApp...
                </span>
                <style>
                    {`
                        @keyframes spin {
                            0% { transform: rotate(0deg);}
                            100% { transform: rotate(360deg);}
                        }
                    `}
                </style>
            </div>
        </div>
    );
};

export default Loader;
