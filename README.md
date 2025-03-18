# DevOps Interview Questions

A comprehensive collection of DevOps interview questions and answers to help you prepare for technical interviews.

## Overview

This repository contains a Hexo-based website dedicated to DevOps interview preparation. It covers a wide range of topics including:

- General DevOps concepts
- CI/CD pipelines
- Containers (Docker, Kubernetes)
- Cloud platforms (AWS, Azure, GCP)
- Infrastructure as Code
- Monitoring and observability
- And more...

## Website

Visit the website at: https://YOUR_GITHUB_USERNAME.github.io/devopsme

## Features

- Clean, responsive design using the Butterfly theme
- Categorized questions and answers
- Search functionality
- Mobile-friendly interface
- Syntax highlighting for code snippets

## Development

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Setup

1. Clone the repository
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/devopsme.git
cd devopsme
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
hexo server
```

The site will be available at http://localhost:4000

### Adding new content

To add a new interview question:

```bash
hexo new post "category/your-question-title"
```

Then edit the file created in `source/_posts/category/your-question-title.md`.

### Building the site

```bash
hexo clean && hexo generate
```

The generated site will be in the `public` directory.

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-question`)
3. Commit your changes (`git commit -m 'Add a new question about Docker'`)
4. Push to the branch (`git push origin feature/amazing-question`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.