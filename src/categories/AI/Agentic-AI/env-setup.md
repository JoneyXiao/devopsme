---
title: Environment Setup
date: 2025-07-07 17:17:00
order: 1
category:
  - ai
  - agentic-ai
tag:
  - ai
  - agentic-ai
  - environment setup
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

figcaption {
  margin-bottom: 30px;
}
</style>

[The Complete Agentic AI Engineering Course](https://edwarddonner.com/2025/04/21/the-complete-agentic-ai-engineering-course/)

[Linkin](https://www.linkedin.com/in/eddonner/)

[GitHub Repo](https://github.com/ed-donner/agents)

## Environment Setup

We will be using the [GitHub Repo](https://github.com/ed-donner/agents) to setup our environment. And make sure you have the following installed:

- [Git](https://git-scm.com/downloads/)
- [Cursor](https://www.cursor.com)
- [UV package manager](https://docs.astral.sh/uv/)
- LLM - either API key of [OpenAI](https://platform.openai.com) or [Anthropic](https://www.anthropic.com) or [OpenRouter](https://openrouter.ai/), or open-source LLM running locally using [ollama](https://ollama.co).

::: tabs#env

@tab Windows#Windows

Make sure you have the [Windows PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started?view=powershell-7.5) installed.

```powershell
git clone https://github.com/ed-donner/agents.git
cd agents

# Install dependencies from pyproject.toml
uv sync
```

Create a `.env` file in the root of the project and add your API key.

```bash title=".env"
OPENAI_API_KEY=sk-proj-1234567890
```

@tab Mac & Linux#Mac & Linux

For myself, I git clone the repo to `~/Documents/Git_Repo/agents`.

```bash
git clone https://github.com/ed-donner/agents.git
cd agents

# Install dependencies from pyproject.toml
uv sync
```

Create a `.env` file in the root of the project and add your API key.

```bash title=".env"
OPENAI_API_KEY=sk-proj-1234567890
```

:::

## sth

::: tabs#env

@tab Windows



@tab Mac & Linux

:::
