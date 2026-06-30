'use client';

import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface ChatBotContextType {
    isChatBotOpen: boolean;
    openChatBot: () => void;
    closeChatBot: () => void;
}

const ChatBotContext = createContext<ChatBotContextType | undefined>(undefined);

export const ChatBotProvider = ({ children }: { children: ReactNode }) => {
    const [isChatBotOpen, setIsChatBotOpen] = useState(false);

    const openChatBot = () => setIsChatBotOpen(true);
    const closeChatBot = () => setIsChatBotOpen(false);

    return (
        <ChatBotContext.Provider value={{ isChatBotOpen, openChatBot, closeChatBot }}>
            {children}
        </ChatBotContext.Provider>
    );
};

export const useChatBot = () => {
    const context = useContext(ChatBotContext);
    if (!context) {
        throw new Error('useChatBot must be used within a ChatBotProvider');
    }
    return context;
};
