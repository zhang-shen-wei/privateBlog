const endpoint = 'http://webchat-bot-10ew.fcv3.1428716596858384.cn-hangzhou.fc.devsapp.net/chat'
window.CHATBOT_CONFIG = {
    endpoint: endpoint, // 可以替换为 https://{your-fc-http-trigger-domain}/chat
    displayByDefault: false, // 默认不显示 AI 助手对话框
    title: 'AI 助手', // 自定义 AI 助手标题
    draggable: false, // 是否开启拖拽
    aiChatOptions: { // 自定义取值参考：https://docs.nlkit.com/nlux/reference/ui/ai-chat#conversation-options
        conversationOptions: { // 自定义取值参考：https://docs.nlkit.com/nlux/reference/ui/ai-chat#conversation-options
            conversationStarters: [
                {prompt: '哪款手机续航最长？'},
                {prompt: '你们有哪些手机型号？'},
                {prompt: '有折叠屏手机吗?'},
            ]
        },
        displayOptions: { // 自定义取值参考：https://docs.nlkit.com/nlux/reference/ui/ai-chat#display-options
            height: 600,
            // width: 400,
        },
        personaOptions: { // 自定义取值参考：https://docs.nlkit.com/nlux/reference/ui/ai-chat#chat-personas
            assistant: {
                name: '你好，我是你的 AI 助手',
                // AI 助手的图标
                avatar: 'https://img.alicdn.com/imgextra/i2/O1CN01Pda9nq1YDV0mnZ31H_!!6000000003025-54-tps-120-120.apng',
                tagline: '您可以尝试点击下方的快捷入口开启体验！',
            }
        },
        messageOptions: { // 自定义取值参考：https://docs.nlkit.com/nlux/reference/ui/ai-chat#message-options
            waitTimeBeforeStreamCompletion: 'never'
        }
    },
    dataProcessor: {
        /**
         * 在向后端大模型应用发起请求前改写 Prompt。
         * 比如可以用于总结网页场景，在发送前将网页内容包含在内，同时避免在前端显示这些内容。
         * @param {string} prompt - 用户输入的 Prompt
         * @param {string}  - 改写后的 Prompt
         */
        rewritePrompt(prompt) {
            return prompt;
        }
    }
};
