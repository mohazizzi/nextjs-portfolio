import { getContent } from "@/lib/content";
import Image from "next/image";

const revalidate = 86400;

export default async function Home() {
  const content = await getContent();

  if (!content) return <p>no content</p>;

  return (
    <main className="home">
      <section className="home__header">
        <h2 className="home__header__title">محمدرضا عزیزی</h2>
        <p className="home__header__text">برنامه نویس وب</p>
      </section>
      <article className="home__about">
        <h2 className="home__about__title">درباره من</h2>
        <p className="home__about__sub--title">{content.about}</p>
        <section className="home__about__profile">
          <Image
            className="home__about__profile__img"
            src={content.image.profile}
            alt="تصویر پروفایل"
            width={150}
            height={150}
          />
          <div className="home__about__profile__info">
            <h3 className="home__about__profile__info__title">
              برنامه نوبس وب
            </h3>
            <p className="home__about__profile__info__text">
              {content.aboutMe.text}
            </p>
            <ul className="home__about__profile__info__list">
              <li className="home__about__profile__info__list__item">
                <span className="home__about__profile__info__list__item__span">
                  سال تولد:{" "}
                </span>
                {content.aboutMe.birth}
              </li>
              <li className="home__about__profile__info__list__item">
                <span className="home__about__profile__info__list__item__span">
                  نظام وظیفه:{" "}
                </span>
                {content.aboutMe.duty}
              </li>
              <li className="home__about__profile__info__list__item">
                <span className="home__about__profile__info__list__item__span">
                  محل سکونت:{" "}
                </span>
                {content.aboutMe.address}
              </li>
              <li className="home__about__profile__info__list__item">
                <span className="home__about__profile__info__list__item__span">
                  فریلنسری:{" "}
                </span>
                {content.aboutMe.freelance ? "در دسترس" : "خارج از دسترس"}
              </li>
            </ul>
          </div>
        </section>
        <section className="home__about__skills">
          <h3 className="home__about__skills__title">مهارت های من</h3>
          <p className="home__about__skills__sub--title">
            {content.skills.text}
          </p>
          <ul className="home__about__skills__list">
            {content.skills.items.map((skill, index) => (
              <li className="home__about__skills__list__item" key={index}>
                <p className="home__about__skills__list__item__title">
                  {skill.name}:
                </p>
                <div className="home__about__skills__list__item__progress">
                  <div
                    className="home__about__skills__list__item__progress__bar"
                    style={{ width: `${skill.percent}%` }}
                  >
                    <div className="home__about__skills__list__item__progress__bar__percent">
                      {skill.percent}%
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
