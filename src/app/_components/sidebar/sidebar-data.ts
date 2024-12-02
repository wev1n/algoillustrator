import {
  ArrowDownAZ,
  ChartNoAxesColumnIncreasing,
  Divide,
  Ellipsis,
  Hash,
  Layers,
  List,
  Repeat,
  Search,
  Text,
  Zap,
  Network,
} from "lucide-react";

export const sidebarData = {
  user: {
    name: "johndoe",
    email: "john.doe@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  algorithms: [
    {
      title: "Sorting",
      url: "#",
      icon: ArrowDownAZ,
      isActive: true,
      items: [
        {
          title: "Bubble sort",
          url: "#",
        },
        {
          title: "Selection sort",
          url: "#",
        },
        {
          title: "Insertion sort",
          url: "#",
        },
        {
          title: "Merge sort",
          url: "#",
        },
        {
          title: "Quick sort",
          url: "#",
        },
        {
          title: "Heap sort",
          url: "#",
        },
        {
          title: "Radix sort",
          url: "#",
        },
        {
          title: "Counting sort",
          url: "#",
        },
      ],
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
      items: [
        {
          title: "Linear search",
          url: "#",
        },
        {
          title: "Binary search",
          url: "#",
        },
        {
          title: "Interpolation search",
          url: "#",
        },
      ],
    },
    {
      title: "String",
      url: "#",
      icon: Text,
      items: [
        {
          title: "Pattern matching",
          url: "#",
        },
        {
          title: "Longest common subsequence(LCS)",
          url: "#",
        },
        {
          title: "Longest palindromic subsequence(LPS)",
          url: "#",
        },
      ],
    },
    {
      title: "Graph",
      url: "#",
      icon: ChartNoAxesColumnIncreasing,
      items: [
        {
          title: "Shortest path",
          url: "#",
        },
        {
          title: "Minimum spanning tree",
          url: "#",
        },
        {
          title: "Topological sort",
          url: "#",
        },
        {
          title: "Strongly connected components(Tarjan's algorithm)",
          url: "#",
        },
        {
          title: "A* pathfinding",
          url: "#",
        },
      ],
    },
    {
      title: "Dynamic programming",
      url: "#",
      icon: Repeat,
      items: [
        {
          title: "Fibonacci sequence",
          url: "#",
        },
        {
          title: "0/1 Knapsack problem",
          url: "#",
        },
        {
          title: "Longest increasing subsequence(LIS)",
          url: "#",
        },
        {
          title: "Edit distance",
          url: "#",
        },
        {
          title: "Matrix chain multiplication",
          url: "#",
        },
        {
          title: "Subset sum problem",
          url: "#",
        },
      ],
    },
    {
      title: "Divide and conquer",
      url: "#",
      icon: Divide,
      items: [
        {
          title: "Binary search",
          url: "#",
        },
        {
          title: "Merge sort",
          url: "#",
        },
        {
          title: "Quick sort",
          url: "#",
        },
        {
          title: "Closest pair of points",
          url: "#",
        },
      ],
    },
    {
      title: "Greedy algorithms",
      url: "#",
      icon: Zap,
      items: [
        {
          title: "Activity selection",
          url: "#",
        },
        {
          title: "Huffman coding",
          url: "#",
        },
        {
          title: "Fractional knapsack",
          url: "#",
        },
      ],
    },
    {
      title: "Others",
      url: "#",
      icon: Ellipsis,
      items: [
        {
          title: "Bit manipulation",
          url: "#",
        },
        {
          title: "Fast exponentiation",
          url: "#",
        },
        {
          title: "GCD using Euclid's algorithm",
          url: "#",
        },
        {
          title: "Reservoir sampling",
          url: "#",
        },
      ],
    },
  ],
  dataStructures: [
    {
      title: "Linear",
      url: "#",
      icon: List,

      items: [
        {
          title: "Array",
          url: "#",
        },
        {
          title: "Linked list",
          url: "#",
        },
        {
          title: "Stack",
          url: "#",
        },
        {
          title: "Queue",
          url: "#",
        },
      ],
    },
    {
      title: "Hierarchical",
      url: "#",
      icon: Network,
      items: [
        {
          title: "Binary tree",
          url: "#",
        },
        {
          title: "Binary search tree",
          url: "#",
        },
        {
          title: "Heap",
          url: "#",
        },
        {
          title: "Trie",
          url: "#",
        },
        {
          title: "Graph",
          url: "#",
        },
      ],
    },
    {
      title: "Hashing",
      url: "#",
      icon: Hash,

      items: [
        {
          title: "Hash table with open addressing or separate chaining",
          url: "#",
        },
        {
          title: "Collision resolution techniques",
          url: "#",
        },
      ],
    },
    {
      title: "Advanced",
      url: "#",
      icon: Layers,

      items: [
        {
          title: "Segment tree",
          url: "#",
        },
        {
          title: "Fenwick tree",
          url: "#",
        },
        {
          title: "Disjoint set union",
          url: "#",
        },
        {
          title: "Red-black tree",
          url: "#",
        },
        {
          title: "Suffix array",
          url: "#",
        },
      ],
    },
  ],
};
