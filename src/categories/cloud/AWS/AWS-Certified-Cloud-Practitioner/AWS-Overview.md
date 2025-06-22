---
title: AWS Overview
date: 2025-06-19 10:00:00
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
</style>

This page is a collection of resources for the AWS Certified Cloud Practitioner exam.

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
