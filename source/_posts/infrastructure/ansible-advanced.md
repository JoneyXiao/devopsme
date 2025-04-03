---
title: Advanced Ansible Interview Questions
date: 2023-07-10 15:00:00
categories:
  - infrastructure
tags:
  - ansible
  - devops
  - infrastructure-as-code
  - automation
  - advanced
---

## Question 1: Explain Ansible Galaxy and its importance in the Ansible ecosystem

**Answer:**
Ansible Galaxy is a repository for Ansible roles that allows users to share and reuse Ansible roles. It's similar to Docker Hub for Docker or npm for JavaScript.

Key aspects of Ansible Galaxy:
- **Role Sharing**: Central hub for community-contributed roles
- **Role Management**: Commands to install, create, and manage roles
- **Quality Scores**: Provides quality metrics for roles
- **Versioning**: Supports versioning of roles for consistency
- **Search Functionality**: Helps find appropriate roles for specific use cases

Common Galaxy commands:
```bash
# Install a role
ansible-galaxy install username.role_name

# Initialize a new role structure
ansible-galaxy init my_new_role

# Search for a role
ansible-galaxy search database

# List installed roles
ansible-galaxy list
```

Galaxy is important because it promotes reusability, standardization, and collaboration in the Ansible community.

## Question 2: What are Ansible Handlers and when should they be used?

**Answer:**
Handlers are special tasks in Ansible that only run when notified by another task. They're typically used for actions that should only happen once, regardless of how many tasks might trigger them.

Common use cases:
- Restarting services after configuration changes
- Rebuilding caches
- Running operations that should only happen once per playbook execution

Example:
```yaml
tasks:
  - name: Copy Apache configuration file
    copy:
      src: httpd.conf
      dest: /etc/httpd/conf/httpd.conf
    notify: Restart Apache

  - name: Copy SSL configuration
    copy:
      src: ssl.conf
      dest: /etc/httpd/conf.d/ssl.conf
    notify: Restart Apache

handlers:
  - name: Restart Apache
    service:
      name: httpd
      state: restarted
```

In this example, Apache will be restarted only once at the end of the play, even though two tasks notify the handler.

## Question 3: Explain strategies in Ansible and when to use different strategies

**Answer:**
Ansible strategies determine how tasks are executed across multiple hosts. They control the flow of task execution in a play.

Main strategies in Ansible:

1. **Linear (default)**: 
   - Runs each task on all hosts before moving to the next task
   - Ensures consistency across infrastructure

2. **Free**:
   - Allows each host to run through tasks as fast as possible
   - Doesn't wait for all hosts to complete the current task
   - Useful for independent systems or to speed up playbook execution

3. **Debug**:
   - Stops execution when a task fails, allowing interactive debugging
   - Useful during playbook development

4. **Host Pinned**:
   - Pins each host to a specific worker process for the entire play
   - Helps with module consistency and resource usage

Example of setting a strategy:
```yaml
- name: Example play with free strategy
  hosts: all
  strategy: free
  tasks:
    - name: Long-running task
      command: /opt/long_running_script.sh
```

## Question 4: How can you optimize Ansible performance?

**Answer:**
Ansible performance can be optimized in several ways:

1. **Increase parallelism**:
   - Use `forks` parameter in ansible.cfg or command-line to increase parallel executions
   - Example: `ansible-playbook playbook.yml -f 30`

2. **Use the right strategy**:
   - Use `free` strategy for independent tasks
   - Use `host_pinned` for consistent resource allocation

3. **Minimize facts gathering**:
   - Use `gather_facts: no` when facts aren't needed
   - Implement fact caching: 
     ```ini
     [defaults]
     gathering = smart
     fact_caching = jsonfile
     fact_caching_timeout = 86400  # seconds
     fact_caching_connection = /path/to/cache/dir
     ```

4. **Utilize pipelining**:
   - Enable in ansible.cfg: `pipelining = True`
   - Reduces SSH operations

5. **Use asynchronous actions**:
   - For long-running tasks:
     ```yaml
     - name: Long-running operation
       command: /path/to/script.sh
       async: 3600  # timeout in seconds
       poll: 0      # fire and forget
     ```

6. **Optimize module usage**:
   - Use `command`/`shell` only when necessary
   - Prefer specialized modules over generic ones
   - Use `with_items` to batch operations

## Question 5: What are Ansible Collections and why are they important?

**Answer:**
Ansible Collections are a distribution format for Ansible content that can include playbooks, roles, modules, and plugins. Introduced in Ansible 2.9, collections provide a new way to package and distribute Ansible content.

Key aspects:

1. **Modular Content**: Collections group related Ansible content together
   
2. **Version Control**: Collections have their own versioning, independent from Ansible core
   
3. **Distribution**: Can be shared via Ansible Galaxy or private repositories
   
4. **Namespacing**: Uses `namespace.collection` format to avoid conflicts
   
5. **Dependencies**: Collections can depend on other collections

Example of using a collection:
```yaml
- name: Using AWS collection
  hosts: localhost
  collections:
    - amazon.aws
  tasks:
    - name: Start an EC2 instance
      ec2_instance:
        name: "example-instance"
        instance_type: t2.micro
        key_name: my_key
        vpc_subnet_id: subnet-123456
        state: running
```

Collections are important because they allow:
- Content creators to develop and release independently from Ansible core
- Users to install only the collections they need
- Organizations to create custom, reusable content
- Better separation between community content and Ansible core
