let chatsHistory = {
  conversations: [
    {
      chatID: 0,
      contact: "Kevin Martell",
      messages: [
        {
          date: "11.15.21",
          time: "9:34AM",
          type: "Sent",
          text: "Hello!",
          attachment: undefined,
        },
        {
          date: "11.15.21",
          time: "9:34AM",
          type: "Sent",
          text: "How are you?!",
          attachment: undefined,
        },
        {
          date: "11.15.21",
          time: "9:34AM",
          type: "Received",
          text: "Hi! I'm fine. How are you doing?\n\nCamdon is doing well although he had another incident at the mall if you know what I mean",
          attachment: undefined,
        },
      ],
    },
    {
      chatID: 1,
      contact: "Kevin Martell",
      messages: [
        {
          date: "11.15.21",
          time: "9:34AM",
          type: "Sent",
          text: "Hello!",
          attachment: undefined,
        },
        {
          date: "11.15.21",
          time: "9:34AM",
          type: "Sent",
          text: "How are you?!",
          attachment: undefined,
        },
        {
          date: "11.15.21",
          time: "9:34AM",
          type: "Received",
          text: "Hi! I'm fine. How are you doing?",
          attachment: undefined,
        },
      ],
    },
    {
      chatID: 2,
      contact: "Kevin Martell",
      messages: [
        {
          date: "11.15.21",
          time: "9:34AM",
          type: "Sent",
          text: "Hello!",
          attachment: undefined,
        },
        {
          date: "11.15.21",
          time: "9:34AM",
          type: "Sent",
          text: "How are you?!",
          attachment: undefined,
        },
        {
          date: "11.15.21",
          time: "9:34AM",
          type: "Received",
          text: "Hi! I'm fine. How are you doing?",
          attachment: undefined,
        },
      ],
    },
    {
      chatID: 3,
      contact: "Kevin Martell",
      messages: [
        {
          date: "11.15.21",
          time: "9:34AM",
          type: "Sent",
          text: "Hello!",
          attachment: undefined,
        },
        {
          date: "11.15.21",
          time: "9:34AM",
          type: "Sent",
          text: "How are you?!",
          attachment: undefined,
        },
        {
          date: "11.15.21",
          time: "9:34AM",
          type: "Received",
          text: "Hi! I'm fine. How are you doing?",
          attachment: undefined,
        },
      ],
    },
  ],
};

window.onload = initialize;

function initialize() {
  console.log("initializing");
  document.getElementById("newButton").addEventListener("click", createNewChat);
  for (let conversation of chatsHistory.conversations) {
    console.log(conversation);
    let lastMessage = conversation.messages.length
      ? conversation.messages[conversation.messages.length - 1]
      : null;
    let innerText = lastMessage ? lastMessage.text : "No messages";
    innerText = innerText.replace(/(?:\r\n|\r|\n)/g, "<br>");
    let bubbleDiv = document.createElement("div");
    bubbleDiv.innerHTML = innerText;
    bubbleDiv.classList.add("chat-bubble");
    let labelDiv = document.createElement("div");
    labelDiv.innerHTML = conversation.contact;
    labelDiv.classList.add("chat-label");
    let containerDiv = document.createElement("div");
    containerDiv.addEventListener("click", () => {
      window.location.href = `../chat/index.html?chatID=${conversation.chatID}`;
    });
    containerDiv.appendChild(labelDiv);
    containerDiv.appendChild(bubbleDiv);
    let chatsDiv = document.getElementById("chats-div");
    chatsDiv.appendChild(containerDiv);
  }
  //need to loop through sample data and create a new div for every data set and append to chats page
  //TODO - let obj = JSON.parse()
}

function createNewChat() {
  //create a new sample data file like in chat.js
  //append to sample data, and manually create new div for this new chat data
  //does 2 things: add new chat to list of chats stored in data, add it to visible page
  let lastConversation = chatsHistory.conversations.length
    ? chatsHistory.conversations[chatsHistory.conversations.length - 1]
    : null;
  let newConversation = {
    chatID: lastConversation ? lastConversation.chatID + 1 : 0,
    contact: "Em Dawg",
    messages: [],
  };
  chatsHistory.conversations.push(newConversation);
  saveFile(chatsHistory, "chats.json");
  window.location.href = `../chat/index.html?chatID=${newConversation.chatID}`;
}

function saveFile(obj, outFileName) {
  postData("../chat/chat.html");
  // let json = JSON.stringify(obj);
  // let a = document.createElement("a");
  // a.href = window.URL.createObjectURL(new Blob([json], { type: "text/plain" }));
  // a.download = outFileName;
  // a.click();
}

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}
