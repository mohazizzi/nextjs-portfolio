import { getContent } from "@/lib/content";
import Image from "next/image";

const revalidate = 86400;

export default async function Works() {
  const content = await getContent();

  if (!content) return <p>no content</p>;

  return (
    <section className="works">
      <div className="works__title">
        <h1 className="works__title__header">نمونه کارهای من</h1>
        <h3 className="works__title__subheader">
          نمونه کارهای بیشتر من در پروفایل{" "}
          <a
            className="works__title__subheader__links"
            href="https://github.com/mohazizzi"
            rel="noreferrer"
            target="_blank"
          >
            گیت هاب
          </a>{" "}
          هستش
        </h3>
      </div>
      <div className="works__list">
        {content.works.map((work, index) => (
          <div className="works__list__item" key={index}>
            <div
              className={`works__list__item__image ${
                work.smallImage && "small-image"
              }`}
            >
              <Image
                src={work.image}
                alt={work.title}
                className="works__list__item__image__img"
                fill
                objectFit="cover"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div className="works__list__item__info">
              <h4 className="works__list__item__info__title">{work.title}</h4>
              <div className="works__list__item__info__skills">
                {work.tags.map((tag) => (
                  <p
                    className="works__list__item__info__skills__item"
                    key={tag}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
            <div className="works__list__item__links">
              <a
                href={work.githubLink || "#"}
                rel="noreferrer"
                target="__blank"
                className="works__list__item__links__cta"
              >
                سورس کد
              </a>
              <a
                href={work.demoLink || "#"}
                rel="noreferrer"
                target="__blank"
                className="works__list__item__links__cta works__list__item__links__cta--demo"
              >
                لینک وبسایت
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
