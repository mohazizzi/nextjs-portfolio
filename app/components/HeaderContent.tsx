"use client";

import { FaTelegramPlane } from "react-icons/fa";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type props = {
  content: PortfolioContent;
};

export default function HeaderContent({ content }: props) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const onMenuTogglerClick = () => {
    setMobileMenu((prevState) => !prevState);
  };

  const handleNavigate = () => {
    setMobileMenu(false);
  };

  function linkIcon(iconName: string) {
    if (iconName === "github") return <AiFillGithub />;
    if (iconName === "instagram") return <AiOutlineInstagram />;
    if (iconName === "telegram") return <FaTelegramPlane />;
    if (iconName === "youtube") return <AiFillYoutube />;
    if (iconName === "linkedin") return <GrLinkedinOption />;
  }

  return (
    <>
      <div
        className="bg_img"
        style={{
          background: `url(${content.image.backGround}) top center`,
          backgroundSize: "cover",
        }}
      ></div>
      <button className="menu--toggler" onClick={onMenuTogglerClick}>
        {mobileMenu ? <RiCloseLine /> : <RiMenu4Line />}
      </button>
      <header className={`header ${mobileMenu && "mobile--menu--open"}`}>
        <section className="header__profile">
          <Image
            src={content.image.profile}
            alt="عکس پروفایل"
            width={150}
            height={150}
            className="header__profile__image"
          />
          <h1 className="header__profile__title">محمدرضاعزیزی</h1>
          <div className="header__profile__social">
            {content.socialLink.map(
              (social) =>
                social.linkAddress !== "" && (
                  <a
                    key={social.id}
                    className="header__profile__social__links"
                    href={social.linkAddress || "#"}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {linkIcon(social.icon)}
                  </a>
                )
            )}
          </div>
        </section>
        <nav className="header__navbar">
          <Link
            href="/"
            className="header__navbar__item"
            onClick={handleNavigate}
          >
            درباره من
          </Link>
          <Link
            href="/works"
            className="header__navbar__item"
            onClick={handleNavigate}
          >
            نمونه کارها
          </Link>
          <Link
            href="/contact"
            className="header__navbar__item"
            onClick={handleNavigate}
          >
            ارتباط بامن
          </Link>
        </nav>
      </header>
    </>
  );
}
