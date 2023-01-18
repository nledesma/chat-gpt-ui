import { ConversationContext, ConversationItem } from "../interfaces/interfaces"

export const updateContext = (context: ConversationContext, message: ConversationItem): ConversationContext => {
  context.conversation.push(message);
  context.contextualPrompt = context.contextualPrompt.concat(`${message.sender}: ${message.content}\n`);
  return context;
}