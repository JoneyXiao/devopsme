---
title: Splunk Architecture
date: 2025-04-03 17:17:00
categories:
  - splunk
tags:
  - splunk
  - splunk-architecture
  - splunk-deployment-architecture
---

# [Splunk Data Pipeline](https://docs.splunk.com/Documentation/Splunk/latest/Deploy/Datapipeline)

![Splunk Data Pipeline](data-pipeline.png)

## Input

- collects and consumes data from a variety of sources
- the sources can be forwarded data, uploaded data, network data, scripts, api ...
- splunk doesn't look at the contents of the data, it just passes it to the parsing phase

## Parsing

- happens on the indexer or heavy forwarder
- examines, analyzes and transforms the data, identifies timestamps in the data, and annotates the data with metadata

## Indexing

- writes the data to indices on disk in the form of flat files stored in buckets which are just directories on the filesystem
- Data divided into events. Writes the data to the disk in "buckets"

## Search

- User ineteraction with the data, including searching, building reports, alerting, graphing, and dashboarding

# Splunk Platform

Keep in mind, though, that Splunk has other products for IT Service Intelligence, SOAR (Security Orchestration, Automation, and Response), and more.

## Splunk Enterprise

With Splunk Enterprise, you either install Splunk on-premises or datacenter in your facility, or in the cloud without specificlly using Splunk Cloud. This works very well for organizations that have both on-premises and cloud based systems, as well as for multi-cloud solutions. A Splunk Enterprise deployment is made up of Splunk components.

**Splunk Components: Installations of Splunk Enterprise that are configured to perform specific actions on the Splunk Data Pipeline.**

- Search Head: The main interface for searching and analyzing data.
- Indexer: Indexes and stores data on disk.
- Forwarder: Forwards data from source systems to either indexers or search heads.

In a small deployment of Splunk, the search head and indexer can be the same component.

**Two main types of forwarders:**

- Universal Forwarder: a very lightweight agent, sits on a data source and forwards data
- Heavy Forwarder: a more powerful agent, sits on a data source and forwards data, and also indexes data

### Splunk Architecture

#### [S1/S11 Architecture](https://docs.splunk.com/Documentation/SVA/current/Architectures/S1)(small deployment)

![Splunk S1/S11 Architecture](s1.png)

- Search Head and Indexer are the same Splunk component
- Daily data ingest up to 500GB
- Small number of users
- recommends S1 for non-critical data, there is no data replication or any kind of fault tolerance or load balancing

s1(single server deployment) with three tiers:

- Searching and Indexing tier: search head / indexer combination
- Collection tier: the data gets collected and forwarded
- Management tier

#### [C1/C11 Architecture](https://docs.splunk.com/Documentation/SVA/current/Architectures/C1C11)(Distributed Clustered Deployment - Single Site)

![Splunk C1/C11 Architecture](c1.png)

- decouple the search head and indexer
- One or more stand-alone(not clustered) search heads
- an indexer cluster with data replication, and an indexer cluster manager which manages data replication among all the indexers in a cluster
- multiple, load balanced collection inputs
- good for disaster recovery and search speed


The distributed clustered architecture environment for a single site.

- search tier
- indexing tier
- collection tier
- management tier

#### [C3/C13 Architecture](https://docs.splunk.com/Documentation/SVA/current/Architectures/C3C13)(Distributed Clustered Deployment with search head clustering - Single-Site)

![Splunk C3/C13 Architecture](c3.png)

It's the same basic architecture as C1/C11, but with the addition of search head clustering.

- Search head cluster, and a **deployer** governs the members of the search head cluster which distributes apps, files and configuration updates  to all of the members of the cluster through a configuration bundle
- one of the members of the cluster is assigned to be the search head cluster **captain**, it schedules jobs and replication activities among the cluster
- others are the same as in C1/C11

More Splunk Validated Architectures can be found [here](https://docs.splunk.com/Documentation/SVA/current/Architectures/About).

## [Splunk Cloud Platform](https://docs.splunk.com/Documentation/SVA/current/Architectures/SCPExperience)

![Splunk Cloud Platform with Victoria Experience](victoria-arch.png)

Splunk Cloud Platform is a cloud-based service where Splunk manages the infrastructure, providing most of the benefits of a Splunk Enterprise deployment, with a few key differences(collection tier).

There are two cloud experiences:

- Classic
- Victoria: new customers will be on Victoria which is hosted on AWS

Splunk cloud is licensed through subscription types(subscription based):

- workload-based subscription is the default, it's based on resource capacity used, not data volume ingested, doesn't meter ingestion, can purchase additional capacity to increase performance, can purchase units of storage blocks for different data retention needs
- ingest-based subscription, It requires an exception, similar to the Splunk Enterprise license, it's based on the volume of uncompressed data to index on a daily basis, it includes a fixed amount of data storage and can purchase additional storage as needed

### [Apps in Splunk Cloud](https://splunkbase.splunk.com/)

- Only vetted and compatible apps
- Some apps can be self installed through the app browser; others require a support ticket to be submitted
- Private apps are supported, but are vetted by Splunk

You do not have access to the Command Line Interface (CLI) or the underlying infrastructure. This means you will not be able to edit configuration files (.conf) or perform any CLI functions without submitting a support ticket to Splunk.

Direct data ingestion, such as TCP or syslog, is not allowed. However, you can still ingest this data; you just need to use a forwarder.

# How Splunk Stores Data

## Index

- Index is a repository for splunk data, when splunk processes raw incoming data, it adds that data to indices, indicies map to places on the disk which calls buckets. Splunk has several built-in indices, the `$SPLUNK_HOME/var/lib/splunk/defaultdb` is called main index, `_internal` index stores internal logs, we can create additional indices as needed.

- Splunk transforms incoming data into events, and stores it in indexes.

- An event is just a single row of data with a bunch of key value pairs or fields.

## Event

- An event is a single row of data, made up of fields
- Events have fields, which are key=value pairs. Splunk automatically looks for clear “key=value” entries in the data and creates fields. Splunk also looks for common key/value pairings that don’t necessarily have an equal sign
- Splunk adds default fields to all events, the default fields are all required
    - `_time`: a timestamp value to events in Unix time regardless of how the time is already stored in the original data, it converts it to Unix time. If the data doesn't have time information, then splunk uses the time that the data was indexed for the time field.
    - `index`: the index in which splunk is storing the data
    - `host`: the hostname or ip address of the source system
    - `source`: the name of the file, stream, or other input from which the event originates
    - `sourcetype`: the format of the data, for example, a cisco syslog will come in as a source type `cisco_syslog`, a csv file will come in as a source type `csv`.

## Bucket

An index contains compressed raw data and associated index files. These index files are spread out into different directories depending on their age, we can set their age in a configuration file. Splunk calls these directories buckets, there are five types of buckets in addition to a fishbucket:

- Hot bucket: newly indexed data, it's actively written to and searched, it's the data that's most available to a search head. After a certain amount of time, the data ages out into the warm bucket. An index has one or more hot buckets.
- Warm bucket: The warm bucket has no active writing, then the data is aged and rolled to a cold bucket. An index has many warm buckets.
- Cold bucket: Buckets rolled from warm and moved to a different location. An index has many cold buckets.
- Frozen bucket: splunk deletes frozen buckets by default, but we can choose a different place to store them for archival purposes.
- Thawed bucket: when restoring from a frozen bucket(archive), the data is thawed into a thawed bucket.

The bucket ages can be set by modifying the configuration file `index.conf`.

The default directories of the buckets are:

- Hot bucket: `$SPLUNK_HOME/var/lib/splunk/defaultdb/db/*`
- Warm bucket: `$SPLUNK_HOME/var/lib/splunk/defaultdb/db/*`
- Cold bucket: `$SPLUNK_HOME/var/lib/splunk/defaultdb/colddb/*`
- Frozen bucket: *location that you specify for archival purposes*
- Thawed bucket: `$SPLUNK_HOME/var/lib/splunk/defaultdb/thaweddb/*`

## SmartStore

As the data volume of a deployment increases, the demand for storage often exceeds the demand for compute resources. SmartStore enables you to manage your indexer storage and compute resources cost-effectively by allowing you to scale these resources independently.

- SmartStore allows you to use remote object stores like AWS S3, Azure Blob Storage, GCP Cloud Storage, etc
- Most data resides on remote storage while the indexer maintains a local cache(hot buckets)

