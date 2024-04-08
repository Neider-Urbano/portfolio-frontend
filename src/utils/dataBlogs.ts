import { Blogs } from "../models/blogs.model";

export const blogsData: Blogs = [
  {
    id: 1,
    title: "Introduction to Property Based Testing",
    description:
      "Property based testing has become quite famous in the functional world. Mainly introduced by QuickCheck framework in Haskell, it suggests another way to test software.",
    img: "https://www.nextu.com/blog/wp-content/uploads/sites/4/2022/05/post_thumbnail-d76661ce9445293d1c8eb49ac09c4c9d.jpeg",
    link: "https://medium.com/criteo-engineering/introduction-to-property-based-testing-f5236229d237",
    date: new Date(),
  },
  {
    id: 2,
    title: "Weighted Decision Matrix: A Tool for Pro-level Prioritization",
    description:
      "It's never as simple as writing down a list of pros and cons. Numerous aspects have to be considered. Their varying importance has to be taken into account. ",
    img: "https://images.ctfassets.net/h6luvadnbip0/I7yg8EDhpt0eQXKLChQQh/748ef89fa94c6bf30135a9ec133657f9/05.png?w=1366&h=489&q=90&fm=webp",
    link: "https://airfocus.com/blog/weighted-decision-matrix-prioritization/",
    date: new Date(),
  },
  {
    id: 3,
    title: "Developer Roadmaps",
    description:
      "roadmap.sh is a community effort to create roadmaps, guides and other educational content to help guide developers in picking up a path and guide their learnings.",
    img: "https://scoreapps.com/blog/wp-content/uploads/desarrollo-web.png",
    link: "https://roadmap.sh/",
    date: new Date(),
  },
  {
    id: 4,
    title: "Clean code: What are good programming practices?",
    description:
      "Do you know how to create clean code? Learn now what good programming practices are and understand everything about the concept of clean code.",
    img: "https://acerkate.com/storage/2021/05/Desarrollo-y-diseno-web-1080x675.jpg",
    link: "https://www.sydle.com/es/blog/clean-code-602bef23da4d09680935509b",
    date: new Date(),
  },
];
