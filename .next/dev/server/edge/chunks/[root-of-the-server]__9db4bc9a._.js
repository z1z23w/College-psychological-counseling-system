(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__9db4bc9a._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/app/api/chat/route.ts [app-edge-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
const runtime = 'edge'; // 使用 Edge Runtime 获得更好的流式性能
async function POST(req) {
    try {
        // 1. 读取前端发来的消息
        const { messages } = await req.json();
        // 2. 准备请求头
        const apiKey = process.env.SILICON_API_KEY;
        if (!apiKey) {
            return new Response("Error: 缺少 API Key", {
                status: 500
            });
        }
        // 3. 直接使用原生 fetch 请求硅基流动 (绝对不会错的地址)
        const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'Qwen/Qwen2.5-7B-Instruct',
                messages: [
                    {
                        role: 'system',
                        content: '你是一个温柔的高校心理咨询助手"小暖"。请用温暖、共情的语气与同学交流。'
                    },
                    ...messages
                ],
                stream: true,
                temperature: 0.6
            })
        });
        // 4. 检查上游是否报错
        if (!response.ok) {
            const errorText = await response.text();
            console.error("SiliconCloud Error:", errorText);
            return new Response(`AI Provider Error: ${response.status} ${errorText}`, {
                status: response.status
            });
        }
        // 5. 直接转发流 (Pass-through)
        // 这一步把 AI 的原始数据流直接扔给前端，效率最高
        return new Response(response.body, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive'
            }
        });
    } catch (error) {
        console.error("Server Error:", error);
        return new Response(`Server Error: ${error.message}`, {
            status: 500
        });
    }
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__9db4bc9a._.js.map