import { getContent } from "@/lib/content";
import HeaderContent from "./HeaderContent";

export default async function Header() {
  const content = await getContent();

  if (!content) return <p>no content</p>;

  return <HeaderContent content={content} />;
}
