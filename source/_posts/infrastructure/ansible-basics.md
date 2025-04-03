---
title: Essential Ansible Interview Questions
date: 2025-04-03 14:30:00
categories:
  - infrastructure
tags:
  - ansible
  - devops
  - infrastructure-as-code
  - automation
---

## Question 1: What is Ansible and what are its key features?

**Answer:**
Ansible is an open-source automation tool that enables infrastructure as code. It's agentless, requiring only SSH and Python on the target hosts.

Key features include:
- **Agentless Architecture**: No need to install agents on managed nodes
- **YAML-Based Playbooks**: Human-readable automation scripts
- **Idempotent Execution**: Can safely run multiple times without changing the result
- **Large Module Library**: 3000+ built-in modules for various systems
- **Simple Learning Curve**: Uses straightforward YAML syntax
- **Parallel Execution**: Can operate on multiple hosts simultaneously
- **Inventory Management**: Flexible grouping of target systems

## Question 2: Explain Ansible Playbooks, Roles, and Tasks

**Answer:**
- **Playbooks**: YAML files that define automation tasks. They are Ansible's configuration, deployment, and orchestration language, containing one or more plays.
  
- **Plays**: Groups of tasks that are executed against specific hosts.
  
- **Tasks**: Individual units of work in Ansible, such as installing a package or restarting a service.
  
- **Roles**: Ways to organize playbooks and related files to make them reusable and shareable. A role has a defined directory structure containing tasks, variables, handlers, defaults, and other elements.

Example playbook structure:
```yaml
---
- name: Install and configure web server
  hosts: webservers
  become: yes
  roles:
    - common
    - webserver
  tasks:
    - name: Ensure Apache is installed
      yum:
        name: httpd
        state: present
    - name: Start Apache service
      service:
        name: httpd
        state: started
        enabled: yes
```

## Question 3: What are Ansible Inventory files and how do they work?

**Answer:**
Inventory files in Ansible define the hosts and groups of hosts upon which commands, modules, and tasks are performed. By default, Ansible uses a file called `/etc/ansible/hosts`, but you can specify a different inventory file using the `-i` option.

Inventory files can be in INI or YAML format and can include:
- Individual hosts
- Groups and subgroups of hosts
- Variables for those hosts and groups

Example inventory file:
```ini
[webservers]
web1.example.com
web2.example.com

[dbservers]
db1.example.com
db2.example.com

[datacenter:children]
webservers
dbservers

[webservers:vars]
http_port=80
```

Dynamic inventories are also supported, allowing Ansible to pull host information from external sources like cloud providers or CMDB systems.

## Question 4: How does Ansible handle variables and what are the different variable precedence levels?

**Answer:**
Ansible uses variables to manage differences between systems. Variables can be defined at various levels:

- In inventory files
- In playbooks
- In roles (defaults, vars)
- In separate variable files (group_vars, host_vars)
- Through command-line parameters
- In registered task outputs

Variable precedence (from lowest to highest):
1. Command line values (e.g., `-e "user=john"`)
2. role defaults (defined in role/defaults/main.yml)
3. inventory file or script group vars
4. playbook group_vars
5. inventory file or script host vars
6. playbook host_vars
7. host facts / cached set_facts
8. play vars
9. play vars_prompt
10. play vars_files
11. role and include vars
12. block vars (only for tasks in block)
13. task vars (only for the task)
14. role (and include_role) params
15. include params
16. extra vars (always win precedence)

## Question 5: What is Ansible Vault and how is it used to manage sensitive data?

**Answer:**
Ansible Vault is a feature that allows users to encrypt sensitive data such as passwords or private keys so they can be stored securely in source control.

Key Ansible Vault commands:
- `ansible-vault create file.yml`: Create a new encrypted file
- `ansible-vault edit file.yml`: Edit an encrypted file
- `ansible-vault encrypt file.yml`: Encrypt an existing file
- `ansible-vault decrypt file.yml`: Decrypt an encrypted file
- `ansible-vault view file.yml`: View an encrypted file without decrypting it

When running playbooks with vaulted files, you need to provide the vault password:
```bash
ansible-playbook playbook.yml --ask-vault-pass
# or
ansible-playbook playbook.yml --vault-password-file=vault-password-file
```

You can also use different vault IDs to encrypt different files with different passwords, which is useful in complex environments with different security requirements.

## Question 6: What are Ansible Ad Hoc commands and when should you use them?

**Answer:**
Ansible Ad Hoc commands are one-liners that allow you to perform quick tasks without writing a full playbook. They're useful for simple operations you need to perform rarely or just once.

Basic syntax:
```bash
ansible [pattern] -m [module] -a "[module arguments]"
```

Examples of Ad Hoc commands:

1. **Ping all hosts to verify connectivity**:
   ```bash
   ansible all -m ping
   ```

2. **Execute a command on target hosts**:
   ```bash
   ansible webservers -m command -a "uptime"
   ```

3. **Install a package**:
   ```bash
   ansible webservers -m yum -a "name=httpd state=present" -b
   ```

4. **Copy a file to multiple servers**:
   ```bash
   ansible all -m copy -a "src=/etc/hosts dest=/tmp/hosts"
   ```

5. **Gather facts about hosts**:
   ```bash
   ansible all -m setup
   ```

Ad Hoc commands are best used for:
- Simple, one-time tasks
- Quick checks or validations
- System maintenance activities
- Testing connectivity to hosts
- Gathering information about your infrastructure

For complex, repeatable tasks, playbooks are more appropriate as they provide better organization, documentation, and repeatability.

## Question 7: What is the 'ask_pass' parameter in Ansible and how is it used?

**Answer:**
The `ask_pass` parameter in Ansible controls whether Ansible prompts for a password when making SSH connections to target hosts. 

Key points about `ask_pass`:

1. **Configuration options**:
   - Can be set in ansible.cfg: `ask_pass = True/False`
   - Can be provided as a command line option: `--ask-pass` or `-k`
   - Default value is `False` (Ansible assumes SSH key-based authentication)

2. **When to use it**:
   - When SSH key authentication is not set up
   - When connecting to hosts that require password authentication
   - For initial setup before deploying SSH keys

3. **Example usage**:
   ```bash
   # Ad hoc command with password prompt
   ansible webservers -m ping --ask-pass
   
   # Playbook execution with password prompt
   ansible-playbook site.yml --ask-pass
   ```

4. **Related parameters**:
   - `ask_become_pass` (or `--ask-become-pass`, `-K`): Prompt for privilege escalation password
   - `--ask-vault-pass`: Prompt for vault password
   
5. **Best practices**:
   - For security and automation, SSH key-based authentication is preferred over password authentication
   - In production environments, avoid password-based authentication when possible
   - Consider using Ansible Vault to store sensitive credentials securely
   - Use `no_log: true` in tasks that handle sensitive information to prevent password exposure in logs
