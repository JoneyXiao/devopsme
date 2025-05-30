# DevOps Interview Questions

A comprehensive collection of DevOps interview questions and answers to help you prepare for technical interviews.

## Overview

This repository contains a VuePress-based website with theme hope dedicated to DevOps interview preparation. It covers a wide range of topics including:

- General DevOps concepts
- CI/CD pipelines
- Containers (Docker, Kubernetes)
- Cloud platforms (AWS, Azure, GCP)
- Infrastructure as Code
- Monitoring and observability
- And more...

## Website

Visit the website at: https://joneyxiao.github.io/devopsme

## Features

- Clean, responsive design using VuePress theme hope
- Categorized questions and answers
- Modern UI with tons of features✨
- Custom DevOps-themed design
- Search functionality
- Mobile-friendly interface
- Syntax highlighting for code snippets
- Social links and GitHub integration
- Extended markdown features (tabs, hints, alerts, etc.)

## Requirements

- **Env**: LTS Versions of Node.js (>=18.19.0, 20.x)
- **Package Manager**: npm >= 8, yarn >= 2, pnpm >= 7
- **Git**: For version control

## Development

### Prerequisites

Make sure you have the required Node.js version and package manager installed.

### Setup

1. Clone the repository

    ```bash
    git clone https://github.com/JoneyXiao/devopsme.git
    cd devopsme
    ```

2. Install dependencies

    ```bash
    # Using pnpm (recommended)
    pnpm install

    # Or using yarn
    yarn install

    # Or using npm
    npm install
    ```

3. Run the development server

    ```bash
    # Using pnpm
    pnpm docs:dev

    # Or using yarn
    yarn docs:dev

    # Or using npm
    npm run docs:dev
    ```

The site will be available at http://localhost:8080

### Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy-docs.yml → GitHub Actions deployment
├── src/                    → Source directory
│   ├── .vuepress/          → VuePress configuration
│   │   ├── config.ts       → Main VuePress configuration
│   │   ├── theme.ts        → Theme configuration
│   │   ├── navbar.ts       → Navigation bar configuration
│   │   ├── sidebar.ts      → Sidebar configuration
│   │   ├── public/         → Static assets
│   │   │   ├── assets/     → Additional assets
│   │   │   ├── favicon.ico → Site favicon
│   │   │   ├── logo.png    → Site logo
│   │   │   └── logo.svg    → SVG logo
│   │   └── styles/         → Custom styles
│   ├── categories/         → DevOps interview questions by category
│   │   ├── ci-cd/          → CI/CD questions
│   │   ├── cloud/          → Cloud platform questions
│   │   ├── containers/     → Docker/Kubernetes questions
│   │   ├── general/        → General DevOps questions
│   │   ├── infrastructure/ → Infrastructure questions
│   │   ├── monitoring/     → Monitoring questions
│   │   ├── scripting/      → Scripting questions
│   │   ├── splunk/         → Splunk courses and questions
│   │   └── terraform/      → Terraform questions
│   ├── demo/               → Theme demo pages
│   ├── guide/              → User guides
│   ├── README.md           → Homepage content
│   └── portfolio.md        → Portfolio page
├── package.json            → Dependencies and scripts
├── pnpm-lock.yaml          → Package lock file
├── tsconfig.json           → TypeScript configuration
├── .gitignore              → Git ignore rules
├── .nojekyll               → GitHub Pages configuration
└── LICENSE                 → License file
```

### Adding new content

To add a new interview question, create a new markdown file in the appropriate category folder `src/categories/`. Don't forget to provide page info using *[frontmatter](https://theme-hope.vuejs.press/config/frontmatter/layout.html)*:

[More markdown features](https://theme-hope.vuejs.press/guide/markdown/intro.html).

### Configuration

This site uses VuePress with theme hope. The main configuration is in `src/.vuepress/`.

### Building the site

```bash
# Using pnpm
pnpm docs:build

# Or using yarn
yarn docs:build

# Or using npm
npm run docs:build
```

The generated site will be in the `src/.vuepress/dist` directory.

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch. The workflow configuration is in `.github/workflows/deploy-docs.yml`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-question`)
3. Commit your changes (`git commit -m 'Add a new question about Docker'`)
4. Push to the branch (`git push origin feature/amazing-question`)
5. Open a Pull Request

### Content Guidelines

When contributing new questions and answers:
- Focus on practical, interview-relevant content
- Include real-world examples where possible
- Utilize VuePress theme hope's extended markdown features (tabs, hints, alerts)
- For code examples, use proper syntax highlighting and code tabs
- Keep explanations clear and concise
- Categorize questions appropriately using frontmatter
- Add relevant tags to make questions discoverable

### Extended Markdown Features

VuePress theme hope provides many enhanced markdown features:

- **Hint boxes**: Use `:::tip`, `:::warning`, `:::danger` for styled content
- **Code tabs**: Group similar code examples with `@tab`
- **Custom alignment**: Align content as needed
- **GFM alerts**: GitHub-flavored markdown alerts
- **And much more**: Check the theme documentation for all features

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [VuePress](https://vuepress.vuejs.org/) for the static site generator
- [VuePress Theme Hope](https://theme-hope.vuejs.press/) for the amazing theme with tons of features
- Contributors who have added questions and answers
