---
title: AWS Overview
date: 2025-06-19 10:00:00
order: 1
category:
  - cloud
tag:
  - cloud
  - aws
  - aws-overview
---

<style>
h1 {
  font-size: 28px;
}

h2 {
  font-size: 24px;
}

h3 {
  font-size: 20px;
}

h4 {
  font-size: 16px;
}

body {
  font-size: 15px;
}

highlight-orange {
  color: #FF8906;
  font-weight: bold;
}

highlight-purple {
  color: #FF00FF;
  font-weight: bold;
}

img {
  border-radius:10px;
}

figcaption {
  margin-bottom: 30px;
}
</style>

This page is a collection of resources for the <highlight-orange>AWS Certified Cloud Practitioner (CLF-C02)</highlight-orange> exam.

To get familiar with the structure, format, and style of questions on the exam, check [Official Practice Question Set: AWS Certified Cloud Practitioner (CLF-C02 - English)](https://skillbuilder.aws/learn/E4W52ZKK6P/exam-prep-official-question-set-aws-certified-cloud-practitioner-clf-c02-english/RJSZKD3MG3).

## [AWS Pricing](https://aws.amazon.com/pricing/) - Quick Overview

You can read more about the [AWS Free Tier](https://aws.amazon.com/free/).

AWS has 3 pricing fundamentals, following the <highlight-orange>pay-as-you-go</highlight-orange> pricing model:
- Compute: Pay for compute time
- Storage: Pay for data stored in the Cloud
- Outbound data transfer: Data transfer OUT of the Cloud, data transfer IN is free

## [AWS Global Infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

### AWS Regions

- AWS has Regions all around the world
- Names can be us-east-1, eu-west-3 ...
- A region is a cluster of data centers
- Most AWS services are region-scoped, check the [Region Table](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services)

#### How to choose an AWS Region?

- <highlight-orange>Compliance with data governance and legal requirements</highlight-orange>: data never leaves a region without your explicit permission
- <highlight-orange>Proximity to customers</highlight-orange>: reduced latency
- <highlight-orange>Available services within a Region</highlight-orange>: new services and new features aren't available in every Region
- <highlight-orange>Pricing</highlight-orange>: pricing varies region to region and is transparent in the service pricing page

#### AWS Availability Zones

- Each region has many availability zones(usually 3, min is 3, max is 6). Example:
    - ap-southeast-2a
    - ap-southeast-2b
    - ap-southeast-2c
- Each availability zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity
- They're separate from each other, so that they're isolated from disasters
- They're connected with high bandwidth, ultra-low latency networking

### AWS Edge Locations / Points of Presence

- Amazon has <highlight-purple>400+</highlight-purple> [Points of Presence](https://aws.amazon.com/cloudfront/features/) (400+ Edge Locations & 10+ Regional Caches) in <highlight-purple>90+</highlight-purple> cities across <highlight-purple>40+</highlight-purple> countries
- Content is delivered to end users with lower latency

### Tour of the AWS Console

- AWS has Global Services:
    - Identity and Access Management (IAM)
    - Route 53 (DNS service)
    - CloudFront (Content Delivery Network)
    - WAF (Web Application Firewall)

- Most AWS services are Region-scoped:
    - Amazon EC2 (Infrastructure as a Service)
    - Elastic Beanstalk (Platform as a Service)
    - Lambda (Function as a Service)
    - Rekognition (Software as a Service)

## Shared Responsibility Model

Security and Compliance is a shared responsibility between AWS and the customer. Please check the [Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/).

![Shared Responsibility Model Diagram](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/security-identity-compliance/compliance/approved/images/7a404923-5572-409c-b30e-6d44706bcd89.01bb8af3d4f9cae73c5543f1884a0bb6b5a1d187.jpeg)

## AWS Acceptable Use Policy

More details, please check the [AWS Acceptable Use Policy](https://aws.amazon.com/aup/).
