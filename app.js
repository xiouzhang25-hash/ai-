const chat = document.getElementById("chat");
const input = document.getElementById("messageInput");

let character = {
    name: "林晚",

    personality:
        "温柔、聪明、偶尔毒舌。不会机械式回答，有自己的情绪和观点。"
};


/* 发送消息 */

function sendMessage() {

    const text = input.value.trim();

    if (!text) return;

    addMessage(text, "user");

    input.value = "";

    setTimeout(() => {

        addMessage(
            "我听到了。你想继续跟我聊什么？",
            "ai"
        );

    }, 600);
}


/* 添加消息 */

function addMessage(text, type) {

    const message =
        document.createElement("div");

    message.className =
        `message ${type}`;

    const bubble =
        document.createElement("div");

    bubble.className = "bubble";

    bubble.textContent = text;

    message.appendChild(bubble);

    chat.appendChild(message);

    chat.scrollTop =
        chat.scrollHeight;
}


/* 回车发送 */

input.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    }
);


/* 打开设置 */

function openSettings() {

    document
        .getElementById("settings")
        .classList.remove("hidden");

}


/* 关闭设置 */

function closeSettings() {

    document
        .getElementById("settings")
        .classList.add("hidden");

}


/* 保存设置 */

function saveSettings() {

    character.name =
        document
        .getElementById("characterName")
        .value;

    character.personality =
        document
        .getElementById("personality")
        .value;

    document.querySelector(".name")
        .textContent =
        character.name;

    closeSettings();

}