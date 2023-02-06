import { NextApiRequest } from "next";
import { ReactElement } from "react";

export enum Sender {
  user = 'User',
  ai = 'AI'
}

export interface ConversationItem {
  sender: Sender,
  content: ReactElement | string,
  time?: Date
}

export interface Conversation extends Array<ConversationItem>{}

export interface ConversationContext {
  conversation: Conversation,
  contextualPrompt: string
}

export interface ChatApiRequest extends NextApiRequest {
  body: {
    context: ConversationContext
  }
}