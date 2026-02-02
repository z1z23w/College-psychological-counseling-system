export const maxDuration = 60; // 允许最长60秒超时

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = "sk-orhmsgawpwhkkovvadvsgcsduzbvizntknaewcvfpvmraokm";

    if (!apiKey) {
      return new Response("Error: 未找到 API Key，请检查 .env 文件", { status: 500 });
    }

    // 1. 直接向硅基流动发起请求
    const response = await fetch('https://api.siliconflow.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'Qwen/Qwen2.5-7B-Instruct', // 确保模型名正确
        messages: [
          { role: 'system', content: '你是一个温柔的高校心理咨询助手"小暖"。' },
          ...messages
        ],
        stream: true, // 开启流式
        temperature: 0.6,
      }),
    });

    // 2. 检查错误
    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI API Error:", errorText);
      return new Response(`API Error: ${response.status} - ${errorText}`, { status: response.status });
    }

    // 3. 直接透传流数据
    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error: any) {
    console.error("Server Error:", error);
    return new Response(`Internal Error: ${error.message}`, { status: 500 });
  }
}