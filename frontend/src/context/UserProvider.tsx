import { FC } from "react";
import { UserContext } from "./UserContext";
import { useUser } from "../hooks/useUser";

interface UserProviderProps {
    children: React.ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
    const userContextValue = useUser();

    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    )
};
