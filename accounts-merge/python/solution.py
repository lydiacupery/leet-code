from collections import defaultdict


class Solution:
    def accountsMerge(self, accounts):
        email_to_id = {}
        email_to_name = {}
        i = 0
        uf = UnionFind()

        # build up the graph
        for account in accounts:
            name = account[0]
            for email in account[1:]:
                email_to_name[email] = name
                if email not in email_to_id:
                    email_to_id[email] = i
                    i += 1
                uf.union(email_to_id[email], email_to_id[account[1]])

        # return the results
        result = defaultdict(list)
        for email in email_to_id:
            result[uf.find(email_to_id[email])].append(email)

        return [[email_to_name[email_group[0]]] + sorted(email_group) for email_group in result.values()]


class UnionFind:
    def __init__(self):
        self.parent = list(range(0, 10001))
        self.rank = [0] * 10001

    def find(self, i):
        while(self.parent[i] != i):
            self.parent[i] = self.parent[self.parent[i]]  # path compression
            i = self.find(self.parent[i])
        return i

    def union(self, a, b):  # add find by rank
        # make one that already has highest rank the parent
        parentA = self.find(a)
        parentB = self.find(b)
        if(parentA == parentB):
            return
        if(self.rank[parentA] > self.rank[parentB]):
            self.parent[parentB] = parentA
        elif(self.rank[parentB] > self.rank[parentA]):
            self.parent[parentA] = parentB
        else:
            self.parent[parentA] = parentB
            self.rank[parentB] += 1
