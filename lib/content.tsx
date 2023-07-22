import { compileMDX } from "next-mdx-remote/rsc";
// import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
// import rehypeHighlight from "rehype-highlight/lib";
// import rehypeSlug from "rehype-slug";

export async function getContent(): Promise<PortfolioContent | undefined> {
  const res = await fetch(
    "https://raw.githubusercontent.com/mohazizzi/portfolio-content/main/content.mdx",
    {
      headers: {
        Accept: "application/vnd.github+jason",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;

  const rawMDX = await res.text();

  if (rawMDX === "404: Not Found") return undefined;

  const { frontmatter } = await compileMDX<{
    about: string;
    aboutMe: {
      text: string;
      birth: string;
      duty: string;
      address: string;
      freelance: boolean;
    };
    skills: {
      text: string;
      items: Items[];
    };
    image: {
      backGround: string;
      profile: string;
    };
    socialLink: socialLink[];
    works: work[];
  }>({
    source: rawMDX,
    options: {
      parseFrontmatter: true,
      //   mdxOptions: {
      //     rehypePlugins: [
      //       rehypeHighlight,
      //       rehypeSlug,
      //       [
      //         rehypeAutolinkHeadings,
      //         {
      //           behavior: "wrap",
      //         },
      //       ],
      //     ],
      //   },
    },
  });

  const content: PortfolioContent = {
    about: frontmatter.about,
    aboutMe: frontmatter.aboutMe,
    skills: frontmatter.skills,
    image: frontmatter.image,
    socialLink: frontmatter.socialLink,
    works: frontmatter.works,
  };
  return content;
}
