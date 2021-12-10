let chatHistory = {
  chatID: 0,
  contactName: "Kevin Martell",
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
};

window.onload = initialize;

function initialize() {
  console.log("initializing");
  // let params = (new URL(location)).searchParams;
  // console.log(params.toString());
  let queryString = window.location.search;
  console.log(queryString);
  let urlParams = new URLSearchParams(queryString);
  let id = Number(urlParams.get("chatID"));
  console.log(id);
  document
    .getElementById("backButton")
    .addEventListener("click", returnToChats);
  document
    .getElementById("sendButton")
    .addEventListener("click", createMessage);
  document.getElementById("identifier-div").innerHTML = history.contactName;
  for (let message of chatHistory.messages) {
    let innerText = message.text;
    innerText = innerText.replace(/(?:\r\n|\r|\n)/g, "<br>");
    let div = document.createElement("div");
    div.innerHTML = innerText;
    div.classList.add(
      message.type === "Sent"
        ? "sent-message-bubble"
        : "received-message-bubble"
    );
    let messagesDiv = document.getElementById("messages-div");
    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
  setInterval(function () {
    let innerText = "Hello";
    innerText = innerText.replace(/(?:\r\n|\r|\n)/g, "<br>");
    let div = document.createElement("div");
    div.innerHTML = innerText;
    div.classList.add("received-message-bubble");
    let messagesDiv = document.getElementById("messages-div");
    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }, 5000);
}

function createMessage() {
  console.log("message sent");
  let textEl = document.getElementById("text");
  let innerText = textEl.value;
  innerText = innerText.replace(/(?:\r\n|\r|\n)/g, "<br>");
  let div = document.createElement("div");
  div.innerHTML = innerText;
  div.classList.add("sent-message-bubble");
  let messagesDiv = document.getElementById("messages-div");
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
  textEl.value = "";
  //where i create a message-bubble div and attach it to the messages-div
  //document.getElementById("text") - how do i display the input in the div
}

function returnToChats() {
  window.location.href = "../chats/chats.html";
}
