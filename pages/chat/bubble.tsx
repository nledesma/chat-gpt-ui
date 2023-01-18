import { ConversationItem, Sender } from "../../interfaces/interfaces";

const Bubble = (conversationItem: ConversationItem) => {
  const style = bubbleStyle[conversationItem.sender];
  return (
      <div className={`flex w-full ${style.justify} my-4`}>
        <div className={`flex p-4 ${style.color} rounded-lg`}>
          <div className="text-white">{conversationItem.content}</div>
        </div>
      </div>
  );
}

const bubbleStyle = {
  [Sender.user]: {
    justify: "justify-end",
    color: "bg-indigo-300"
  },
  [Sender.ai]: {
    justify: "justify-start",
    color: "bg-indigo-500"
  },
}

export default Bubble;
