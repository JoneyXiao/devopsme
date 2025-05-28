# Transforming Commands

If you are doing search in smart mode, the mode that will toggle the search behavior based on if the search contains a transforming command. If it does, then it's going to act like fast mode, 

- top: `index=web | top file`, `index=security "fail*" | top src showperc=f`
- rare: `index=web |rare categoryId`
- stats:

`index=web | stats sum(bytes)`

`index=web | stats count by categoryId`

`index=web | stats dc(categoryId)` or `index=web categoryId=* | dedup categoryId` or `index=web categoryId=* | dedup categoryId | stats list(categoryId)` or `index=web | stats values(categoryId)`

`index=web | stats count by referer_domain, action`

`index=web | stats count by referer_domain, action | stats sum(count) by referer_domain`

`index=security | stats count by src, user, action`

`index=security | stats values(user) as "Login Name", count(user) as "Attempts" by src | fillnull value="N/A"`

`index=web OR index=security | stats sum(bytes) as Total_Bytes | eval Total_Bytes=tostring(Total_Bytes, "commas")`

---

`index=web | table clientip, action, categoryId, status | where isnotnull(action)`

`index=web | table clientip, action, categoryId, status | where isnotnull(action) | rename action as "ACTION", clientip as "Shoppers IP" | fields - status`

`index=security user=admin vendor_action=Failed host=web1 src_ip="87.194.216.51" earliest=0 latest=now`

# Transaction Commands

- `maxspan`: Max time between all related events, e.g. `maxspan=15m`.

- `maxpause`: Max time between each individual event, e.g. `maxpause=1m`.

- `startswith` & `endswith`: Set your variables for keywords.


## Investigate the events

- Events that span time: Can come from multiple hosts, relate to one host of interest.
- Grouping of events: Show the entire conversation, from start to finish in one view.
- Aid investigations: Relate user activity for logins, session lengths, browsing history, etc.
- Log validation: Check to see if data is related to network logs of interest, website traffic, emails, etc.

## Transaction vs. stats

| Transaction                                                 | Stats                                              |
|-------------------------------------------------------------|----------------------------------------------------|
| Slow abd will tax your environment                          | Faster, more efficient searching                   |
| Granular analysis(logs, user behavior, conversations, etc,) | Looking at larger pool of events for trend analysis(no limit on number of events returned) |
| Small scope on one item of interest                         | Broad searching and grouping of events             |
| Correlations need to be found from start to end             | Mathematical functions needed                      |

## Demo

```spl
index=web 
| search status=404
| transaction JSESSIONID maxspan=10m maxpause=3s
```

```spl
index=security failed
| transaction src maxspan=3m maxpause=3s 
| eval duration=tostring(duration, "duration") # evaluate a new field
| table src, duration
```

```spl
index=web
| transaction clientip maxspan=10m maxpause=3s endswith=purchase
| eval duration=tostring(duration, "duration") 
| table clientip, duration, action
```

# Manipulating Your Data

## eval

- Calculates fields: Does the math you ask: +, -, *, /, AND, XOR, >=, ==
- Functions friendly: Just like stats, it takes plenty of functional arguments: `if, null, true, cidrmatch, like, lookup, tostring, md5, now, strftime`
- Create new fields: Eval will take the results of the SPL into a field that is existing, or create a new one
- Coverting data: Tell Splunk to display a field value of bytes to megabytes by providing the math in an eval statement: `strftime, strptime`.

## where & search

| where                                                 | search                                 |
|-------------------------------------------------------|----------------------------------------|
| Can not place before first | in the SPL               | Place it anywhere in the SPL           |
| Comparing values, or searching for a matching value   | Search on a keyword, or matching value |
| Use with functions                                    | Search with wildcards                  |
| *think boolean operators=where                        | *think expressional searches=search    |

## Demo

```spl
index=_internal 
| eval epoch_time=strptime(_time, "%s")
| eval human_readable_time=strftime(epoch_time, "%m/%d/%y") 
| table _time, epoch_time, human_readable_time
```

```spl
index=_internal 
| eval DayOfTheYear=strftime(_time, "%j") 
| search DayOfTheYear=141
```

```spl
index=web
| eval status_codes=case((status==404), "Not Found", (status==400), "Bad Request Response", (status==200), "Success")
| stats count by status, status_codes
```

```spl
index=web
| stats count(eval(status==404)) as "Number of not founds"
```

```spl
index=web
| eval hash=md5(file)
| table file, hash
| dedup file
```

```spl
index=security
| table src, user, action
| where like(src, "50.%") AND user="mail" # boolean logic
```

```spl
index=security
| table src, user, action
| where like(src, "50.%")
| search user=mail
```

# Field Extractions

- Regex: Unstructured data
- Delimiters: Structured data
- Commands: Work with `rex` and `erex` in your SPL.

`rex` uses a regex to create a new field out of a filed that already exists.

`erex` helps to generate the regex as long as you provide example of what you want to extract.

3 ways to navigate to Field Extractor:

- Settings > Fields > Fields Extractions > Open Field Extractor
- From the "Event Actions" dropdown menu
- The bottom of the left panel, under the "INTERESTING FIELDS"

## Demo

[Regular Expressions 101](https://regex101.com)

```spl
index=cisco 
| rex field=_raw (?<email>"\S+@\S+\.com")
```

```spl
index=cisco 
| erex files examples="text/css", "image/gif"
| stats values(files), values(http_content_type)
```

# Lookups

What's a lookup?

- A file. Mostly static data that is not in an index. e.g. csv of all employees.
- A tool. Add additional fields to search for. Fields will be added to the fields bar menu.

How to use?

- Data enrichment. Add information and store it in a table/file format to then search.
- Commands: lookup, inputlookup, outputlookup, OUTPUT, OUTPUTNEW.
- Create or Upload. Select a file to upload or make one to reference. Lookups can be configured to run automatically.

## Demo

### Demo1
1. Create a "Lookup table files"

    ```spl
    | inputlookup peopleinfo.csv where (state="New York")
    ```

2. Create a "Lookup definitions" using the created lookup table `peopleinfo.csv`(file-based).

3. Update permissions.

### Demo2

1. Export the product ids as csv.

    ```spl
    index=web | table productId | dedup productId
    ```

    Then and additional information in the exported csv.

2. Create a "Lookup table files" using the updated csv.

3. Update permissions.

4. Search

    ```spl
    index=web action=purchase
    | lookup productinfo.csv productId OUTPUT description
    | table productId descrition
    | where isnotnull(productId)
    ```

    ```spl
    index=web action=purchase
    | lookup productinfo.csv productId OUTPUT description
    | stats count by productId description
    | where isnotnull(productId)
    | sort - count
    ```


# Visualization

```spl
index=web | timechart avg(bytes) by host
```

Chart doesn't give you data over time.

```spl
index=web | chart avg(bytes) by host
```

```spl
index=web | where isnotnull(action) | timechart count by action
```

`useother=f` means takes the OTHER value off the chart. It displays the top 10 values by default, `limit=0` means no limitation to return all values.

```spl
index=web action=purchase
| lookup productinfo.csv productId OUTPUT description
| where isnotnull(productId)
| chart count over host by description useother=f limit=0
```

Line chart

```spl
index=security Failed
| timechart count by user useother=f usenull=f limit=5
```


