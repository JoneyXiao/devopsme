---
title: Real-time 2D
date: 2025-06-21 18:30:00
category:
  - ai
  - digital-human
tag:
  - ai
  - digital-human
  - real-time-2d
  - live 2D
  - adh
  - ai agent
---

<style>
h1 {
  font-size: 24px;
}

h2 {
  font-size: 20px;
}

h3 {
  font-size: 16px;
}

h4 {
  font-size: 14px;
}

body {
  font-size: 14px;
}

highlight-orange {
  color: #FF8906;
  font-weight: bold;
}

highlight-purple {
  color: #FF00FF;
  font-weight: bold;
}

blockquote {
  font-size: 14px;
}

img {
  border-radius:10px;
}
</style>

LLM 开源社区现有状态，非常活跃，大家开发 AI 原生应用时，可以参考选择。请以最新数据为准。

带着兴趣和疑问来听这个分享。分享完后，期待能够动手实践。

## 开源 LM

### 国内

- 阿里云 <highlight-orange>Qwen3</highlight-orange>，多模态 Qwen 2.5 VL, Qwen2.5-Omni
- <highlight-orange>DeepSeek-R1(0528)</highlight-orange>, DeepSeek-V3, 多模态目前还未有
- 智谱 AI GLM-4，多模态 VisualGLM-6B, CogVLM-17B
- 腾讯云 Hunyuan-MoE-A52B，多模态 Hunyuan-DiT，Hunyuan3D 2.0

### 国外

- Meta Llama4, 多模态 Llama4, Llama 4 Scout, Llama 4 Maverick
- Mistral Small 3.1, 多模态 Mistral Small 3.1
- Google Gemma3, 多模态 Gemma3
- xAI Grok-1, Grok-2, 多模态目前还未有

## 开源 LM 发布平台

- [Hugging Face Hub](https://huggingface.co/models)
- [ModelScope](https://www.modelscope.cn/models)
- [Ollama](https://ollama.com/search)

## 开源 LM 部署工具

| 主流 LM 部署工具                                 | 其它 LM 部署工具                                           |
| :--------------------------------------------- | :------------------------------------------------------- |
| - [Ollama](https://github.com/ollama/ollama)   | - [llama.cpp](https://github.com/ggml-org/llama.cpp)     |
| - [vLLM](https://github.com/vllm-project/vllm) | - [llamafile](https://github.com/Mozilla-Ocho/llamafile) |
| - [Hugging Face Transformers](https://github.com/huggingface/transformers) | - [GPT4All](https://github.com/nomic-ai/gpt4all)         |
|                                                | - [SGLang](https://github.com/sgl-project/sglang)        |
|                                                | - [WebLLM](https://github.com/mlc-ai/web-llm)            |
|                                                | - [LightLLM](https://github.com/ModelTC/lightllm)        |
|                                                | - [BitNet](https://github.com/microsoft/BitNet)          |

## 开源 AI Agent 开发框架

| 通⽤ AI Agent 开发框架 |          RAG 开发框架    |  低代码开发⼯具            |   类 Manus 开发框架   |
| :--------------------| :---------------------- | :---------------------- | :------------------ |
| - [LangChain + LangGraph](https://github.com/langchain-ai/langgraph) | - [LlamaIndex](https://github.com/run-llama/llama_index) | - [Dify](https://github.com/langgenius/dify) | - [OpenManus](https://github.com/FoundationAgents/OpenManus) |
| - [CrewAI](https://github.com/crewAIInc/crewAI) | - [GraphRAG](https://github.com/microsoft/graphrag) | - [FastGPT](https://github.com/labring/FastGPT) | - [OWL](https://github.com/camel-ai/owl) |
| - [Agent SDK](https://github.com/openai/openai-agents-python) | - [LangChain-Chatchat](https://github.com/chatchat-space/Langchain-Chatchat) | - [Flowise](https://github.com/FlowiseAI/Flowise) | - [Minion-Agent](https://github.com/femto/minion-agent) |
| - [AutoGPT Platform](https://github.com/Significant-Gravitas/AutoGPT) |    | - [n8n](https://github.com/n8n-io/n8n) |
| - [AutoGen](https://github.com/microsoft/autogen)                     |    |   |   |
| - [MetaGPT](https://github.com/FoundationAgents/MetaGPT)              |    |   |   |
| - [Camel](https://github.com/camel-ai/camel)                          |    |   |   |
| - [BabyAGI](https://github.com/yoheinakajima/babyagi)                 |    |   |   |
| - [AutoAgents](https://github.com/Link-AGI/AutoAgents)                |    |   |   |

## 开源数字人项目

| ⾮实时数字⼈               | 2D 实时数字人   | 3D 实时数字人 |
| :----------------------- | :------------ | :---------- |
| - [EchoMimic V2](https://github.com/antgroup/echomimic_v2) | - [ADH](https://github.com/wan-h/awesome-digital-human-live2d) | - [阿里达摩院 OpenAvatarChat](https://github.com/HumanAIGC-Engineering/OpenAvatarChat)<br>[Playground](https://www.openavatarchat.ai/playground) |
| - [Heygem](https://github.com/duixcom/Duix.Heygem)         | - [LiveTalking](https://github.com/lipku/livetalking) | - [VideoChat](https://github.com/Henry-23/VideoChat) |
| - [Sonic](https://github.com/jixiaozhong/Sonic)            | - [Ultralight-Digital-Human](https://github.com/anliyuan/Ultralight-Digital-Human)<br>(2.5D - AI 模型实时生成) |
| - [LivePortrait](https://github.com/KwaiVGI/LivePortrait)  |  |  |
| - [Fay](https://github.com/xszyou/fay)                     |  |  |
| - [SadTalker](https://github.com/OpenTalker/SadTalker)     |  |  |
| - [LatentSync](https://github.com/bytedance/LatentSync)    |  |  |
| - [JoyGen](https://github.com/JOY-MM/JoyGen)               |  |  |

## 商业 3D 数字人

- [Nvidia ACE](https://blogs.nvidia.cn/blog/digital-humans-ace-generative-ai-microservices/)

    <highlight-orange>Nvidia ACE</highlight-orange> 是目前最为逼真的数字人服务，支持实时交互。当然，价格不菲。视频中展示了非常多的应用场景，还有 [在线 demo](https://build.nvidia.com/nvidia/digital-humans-for-customer-service) 可以体验。

    [B 站上更完整的 Nvidia 数字人演示视频](https://www.bilibili.com/video/BV1Dz42187yB/)

    <BiliBili bvid="BV1Dz42187yB" />

## <highlight-orange>ADH 2D 实时数字人</highlight-orange>

开源项目 [awesome-digital-human-live2d](https://github.com/wan-h/awesome-digital-human-live2d)，缩写为 ADH，是国内优秀开发者<highlight-orange>一力辉</highlight-orange>老师在 2024 年开发的。ADH 项目分成后端和前端两部分。<highlight-orange>后端使用 Python 开发，开发框架是 FastAPI。前端使用 TypeScript 开发，开发框架是 Next.js + React + HeroUI</highlight-orange>。可以本地部署开源大模型，也可以使用[阿里云百炼模型广场](https://bailian.console.aliyun.com/?tab=model#/model-market)。

### 部署 ADH 前后端

<highlight-purple>后端 (Ubuntu 22.04/24.04):</highlight-purple>

```bash
# Python 3.10 on 22.04 and Python 3.12 on 24.04 by default
sudo apt install python3 python3-pip python3-dev
curl -LsSf https://astral.sh/uv/install.sh | sh

# FFmpeg
sudo apt update
sudo apt install ffmpeg

# Clone ADH
cd ~
git clone https://github.com/wan-h/awesome-digital-human-live2d.git
cd awesome-digital-human-live2d
# Init a uv project
uv init --python 3.10

# Update `pyproject.toml` to use Tsinghua University's PyPI mirror
# Add the following section at the beginning of the file:
# [[tool.uv.index]]
# url = "https://pypi.tuna.tsinghua.edu.cn/simple"
# default = true

# Install dependencies
uv add $(cat requirements.txt)

# Create the main config file (port: 8002)
cd configs
cp config_template.yaml config.yaml

# Run the ADH backend server
cd ~/awesome-digital-human-live2d
uv run python main.py
```

<highlight-purple>前端 (MacOS):</highlight-purple>

ADH 前端是一个标准的 H5 页面，而且支持被内嵌在其他 H5 页面中。

```bash
# Install Node.js(v22.16.0) https://nodejs.org/en/download

npm install -g next
npm install -g heroui-cli
corepack enable pnpm

# Clone ADH
cd
git clone https://github.com/wan-h/awesome-digital-human-live2d.git
cd awesome-digital-human-live2d/web

# Install dependencies
pnpm install

# Update frontend configs
# NEXT_PUBLIC_SERVER_IP="<ADH backend server IP>"
# NEXT_PUBLIC_SERVER_PORT="<ADH backend server port>"
copy .env_template .env

# Run the ADH frontend server
pnpm run build
pnpm run start
```

<highlight-purple>测试 ADH 2D 实时数字人:</highlight-purple>

在 UI 设置界面配置 AI Agent，我选择的是阿里云百炼模型广场的 `qwen3-8b`。

![ADH UI](./assets/adh-ui.png)

### 使用 Agent SDK 开发 AI Agent 对接 ADH

[Agent SDK](https://openai.github.io/openai-agents-python/) 是 OpenAI 在 [2025 年 3 月 11 号](https://openai.com/index/new-tools-for-building-agents/)发布的轻量级 AI Agent 开发框架。

在后端服务器上面创建一个新的 Python 项目，该项目作为一个 Python 库，添加为 ADH 的依赖。这是一种最简单的实现方式，还可以使用 RESTful API 调用的方式。

```bash
cd
uv init --python 3.10 adh-ai-agent
cd adh-ai-agent

# Add agent sdk as a dependency
uv add openai-agents

# This is the name of the Python package
mkdir adh_ai_agent
```

更新 `pyproject.toml` 文件，使用 `setuptools` 作为构建系统，以便于通过 pip 安装。

```toml
[[tool.uv.index]]
url = "https://pypi.tuna.tsinghua.edu.cn/simple"
default = true

[build-system]
requires = ["setuptools>=42"]
build-backend = "setuptools.build_meta"
```

切换到 ADH 项目的根目录，更新 ADH 项目的 `pyproject.toml` 文件，添加 `editable_mode` 配置，以便于在开发过程中，自动更新依赖的包。

```toml
[tool.uv]
config-settings = { editable_mode = "compat" }
```

添加 `adh-ai-agent` 作为 ADH 的依赖。

```bash
cd ~/awesome-digital-human-live2d
uv pip install -e "../adh-ai-agent"
```

到这里，一个 AI Agent 项目的初始化工作就完成了。接下来开发一个 ADH agent 来支持调用上一步创建的外部 AI Agent。`digitalHuman/agent/core/repeaterAgent.py` 是一个最简单的 ADH Agent 实现，它重复输出用户输入的内容，可以作为模板开发一个新的 ADH Agent `digitalHuman/agent/core/externalAgent.py`。

> 在 `run()` 函数中，使用 `importlib` 动态加载外部 AI Agent 的模块，调用了模块的 `chat_with_agent()` 函数。
> 
> 还需要把新创建的 ADH Agent 添加到 `digitalHuman/agent/core/__init__.py` 文件中。然后在 `configs/agents/` 目录下创建一个新文件 `externalAgent.yaml`，添加新 ADH Agent 的配置。
> 
> 最后，在主配置文件 `configs/config.yaml` 中，把新的 ADH Agent 配置文件名 `outsideAgent.yaml` 添加到 `SERVER.AGENTS.SUPPORT_LIST` 列表中。

实现外部 AI Agent。



