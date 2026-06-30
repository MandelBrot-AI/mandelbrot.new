'use client';

import ChatBot from './ChatBot';
import { useChatBot } from './ChatBotContext';

/**
 * Client component that renders the ChatBot.
 * Separated from layout.tsx because layout is a Server Component
 * and these need client-side hooks (useChatBot).
 */
export const ChatBotLayout = () => {
    const { isChatBotOpen, closeChatBot } = useChatBot();

    return (
        <>
            <ChatBot isOpen={isChatBotOpen} onClose={closeChatBot} />
        </>
    );
};
