import React, { createContext, useState } from "react";

export const PasswordContext = createContext();

export default function WrapplerPasswordProvider({ children }) {
    const [passwords, setPasswords] = useState("");

    return (
        <PasswordContext.Provider value={{ passwords, setPasswords }}>
            {children}
        </PasswordContext.Provider>
    );
}
