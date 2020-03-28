# Solution 1 - recursively build left & right trees

# Approach

First Approach - Create Graph & Do DFS (typescript solution)

- For each email, I created a node if there was not an existing node for that email address
- Connect each email address in the group with the first email address
  - We now have a graph where all 'overlapping' email groups are connected
- To create the result array, for each not visited email
  - add the name if the person to the start of the result set
  - find all emails connected in that graph to the email (I used DFS), also append those emails to the result set
  - return the result set

## Runtime

sum of ai log ai
ai -> the length of accounts at i
We sum this because of each group (accounts[i]) we must create edges for it
Then, for each grup (where group is where n is not visited), we traverse the group and sort

Second Approach - Union Find (python solution)

- Created a Union Find class implementing find & union
  Create the graph:
- For each account in accounts, get the name for the account. Assign the account name to each corresponding email (using the email_to_name map).
- Translate each email to an id (to be able to easily use union find). Union together each email in the account with the first email in the account.
  Get the results:
- Create a result map, where the key is the email id and the values are all emails in that email ids 'group'.
- For each result in the result map, create an array where the first entry is the name corresponding to the email followed by the sorted email group.
