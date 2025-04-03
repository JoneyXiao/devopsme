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

Visit the website at: https://joneyxiao.github.io/devopsme

## Features

- Clean, responsive design using the Butterfly theme
- Categorized questions and answers
- Full-screen responsive background image on the homepage
- Custom DevOps-themed logo and favicon
- Search functionality
- Mobile-friendly interface
- Syntax highlighting for code snippets
- Social links and GitHub integration

## Development

### Prerequisites

- Node.js (v14+)
- npm or yarn
- Git

### Setup

1. Clone the repository
```bash
git clone https://github.com/JoneyXiao/devopsme.git
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

Use the following format for your post:

```markdown
---
title: Your Question Title
date: YYYY-MM-DD HH:MM:SS
categories:
  - category-name
tags:
  - tag1
  - tag2
---

## Question

What is your question?

## Answer

Your comprehensive answer goes here.
```

### Building the site

```bash
hexo clean && hexo generate
```

The generated site will be in the `public` directory.

## Customization

### Theme Configuration

This site uses the Butterfly theme. The main configuration file is `_config.butterfly.yml`.

Key customizations include:
- Custom DevOps SVG logo and favicon
- Full-screen gradient background
- Customized sidebar with author card, recent posts, categories, and tags
- Syntax highlighting with the "mac" theme

### Custom CSS

Custom CSS is located in `source/css/custom.css`. This includes:
- Custom color variables
- Card styling
- Post title styling
- Homepage layout enhancements
- Responsive design adjustments

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch. The workflow configuration is in `.github/workflows/pages.yml`.

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
- For code examples, use proper syntax highlighting
- Keep explanations clear and concise
- Categorize questions appropriately
- Add relevant tags to make questions discoverable

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Hexo](https://hexo.io/) for the static site generator
- [Butterfly Theme](https://github.com/jerryc127/hexo-theme-butterfly) for the beautiful theme
- Contributors who have added questions and answers