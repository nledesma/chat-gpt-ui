// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai' 

import { ChatApiRequest, ConversationContext, Sender } from '../../interfaces/interfaces'
import { updateContext } from '../../model/context';

const getAiResponse = async (prompt: string) => {
  const config = new Configuration({
    apiKey: process.env.OPENAI_KEY,
    organization: process.env.OPENAI_ORG
  });

  const openAi = new OpenAIApi(config);

  const completion = await openAi.createCompletion({
    model: 'text-davinci-003',
    temperature: 0,
    max_tokens: 1000,
    prompt,
  });

  return completion.data.choices[0].text;
};

export default async function handler(
  req: ChatApiRequest,
  res: NextApiResponse<ConversationContext>
) {
  const { context } = req.body;

  const aiResponse = await getAiResponse(context.contextualPrompt);

  const aiUpdatedContext = aiResponse ? updateContext(context, {
    sender: Sender.ai,
    time: new Date(),
    content: aiResponse
  }) : context;


  res.status(200).json(aiUpdatedContext);
}
