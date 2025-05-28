# Coding, string reverse

Write a function that takes some string as an input and reverse it. (e.g. 'How are you?" -> "you? are How"). Any language.

Focus: We are trying to figure out if candidate understands even simplest concepts, like arrays, loops, functions.

## Your Answers

### Solution 1:

```python
def reverse_string(input_str):
    words = input_str.split()
    return ' '.join(words[::-1])

# Example usage
print(reverse_string("How are you?"))  # Output: "you? are How"
```

### Solution 2:

```python
def reverse_string(input_str):
    words = input_str.split()
    reversed_list = []
    for item in words:
        reversed_list.insert(0, item)
    
    return ' '.join(reversed_list)

print(reverse_string("How are you?"))
```

### Solution 3:

```python
def reverse_string(input_str):
    words = input_str.split()
    words.reverse()
    return ' '.join(words)

print(reverse_string("How are you?")) 
```

### Solution 4:

```python
def reverse_string(input_str):
    words = input_str.split()
    reversed_list = list(reversed(words))
    return ' '.join(reversed_list)

print(reverse_string("How are you?")) 
```

# Scripting, logs parsing

You have the following lines in logs:

```bash
Other line
Other line
You utilized 26177445 inodes from 50000000 max allowed. Current disk space consumed 653521 from 1234567.
Other line
Other line
You utilized 26199445 inodes from 50000000 max allowed. Current disk space consumed 653821 from 1234567.
Other line
You utilized 26219445 inodes from 50000000 max allowed. Current disk space consumed 654121 from 1234567.
Other line
You utilized 26239445 inodes from 50000000 max allowed. Current disk space consumed 654321 from 1234567.
Other line
```

You need to write script (bash/python/powershell/etc) that would produce the following output:

```bash
Inodes utilization is 52.47%
Disk space utilization is 4.40%
```

Focus: We want to understand if candidate understands scripting. Only last line should be processed, log also contains other lines. Solution should be based on grep/other_text_processor. Plus it's good to see how string itself would be parsed.

## Your Answers

```bash
#!/bin/bash

# Extract the last line containing "You utilized"
last_line=$(grep "You utilized" logs.txt | tail -n 1)

# Extract values using awk
inodes=$(echo "$last_line" | awk '{print $3}')
max_inodes=$(echo "$last_line" | awk '{print $5}')
disk_space=$(echo "$last_line" | awk '{print $11}')
max_disk=$(echo "$last_line" | awk '{print $13}')

# Calculate percentages
inodes_percent=$(awk "BEGIN {printf \"%.2f\", ($inodes/$max_inodes)*100}")
disk_percent=$(awk "BEGIN {printf \"%.2f\", ($disk_space/$max_disk)*100}")

# Print results
echo "Inodes utilization is $inodes_percent%"
echo "Disk space utilization is $disk_percent%"
```

### Simpler Solution:

```bash
#!/bin/bash
# One-liner solution
grep "You utilized" logs.txt | tail -n 1 | awk '{printf "Inodes utilization is %.2f%%\nDisk space utilization is %.2f%%\n", $3/$5*100, $11/$13*100}'
```

Or using Python:

```python
import re

# Read the last line with "You utilized"
with open('logs.txt', 'r') as file:
    utilized_lines = [line for line in file if 'You utilized' in line]
    last_line = utilized_lines[-1]

# Extract values with regex
match = re.search(r'You utilized (\d+) inodes from (\d+) .* consumed (\d+) from (\d+)', last_line)
inodes, max_inodes, disk_space, max_disk = map(int, match.groups())

# Calculate and display percentages
print(f"Inodes utilization is {inodes/max_inodes*100:.2f}%")
print(f"Disk space utilization is {disk_space/max_disk*100:.2f}%")
```
