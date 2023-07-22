"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsEnvelopeCheckFill, BsFillEnvelopeXFill } from "react-icons/bs";

import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/fonts/iran-sans/IRANSans-Medium-web.woff",
});

const revalidate = 86400;

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isEmailSemded, setIsEmailSended] = useState("");

  const current = form.current;

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (current !== null) {
      emailjs
        .sendForm(
          `${process.env.EMAILJS_SERVICE_ID}`,
          `${process.env.EMAILJS_TEMPLATE_ID}`,
          current,
          `${process.env.EMAILJS_PUBLIC_KEY}`
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsEmailSended("seccess");
          },
          (error) => {
            console.log(error.text);
            setIsEmailSended("error");
          }
        );
    }
  };

  return (
    <>
      <section className="contact">
        <div className="contact__title">
          <h1 className="contact__title__header">به من پیام بدید</h1>
          <h3 className="contact__title__subheader">
            اگر دنبال یه برنامه نویس خوب میگردی به من پیام بده
          </h3>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form__group">
            <label className="contact__form__group__label">اسمتون:</label>
            <input
              className="contact__form__group__input"
              type="text"
              name="name"
              style={myFont.style}
              required
            />
          </div>
          <div className="contact__form__group">
            <label className="contact__form__group__label">ایمیلتون:</label>
            <input
              className="contact__form__group__input"
              type="email"
              name="email"
              style={myFont.style}
              required
            />
          </div>
          <div className="contact__form__group">
            <label className="contact__form__group__label">پیامتون:</label>
            <textarea
              className="contact__form__group__input"
              name="message"
              rows={5}
              style={myFont.style}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="contact__form__btn"
            style={myFont.style}
          >
            ارسال پیام
          </button>
        </form>
      </section>
      {isEmailSemded === "" ? (
        ""
      ) : (
        <div className="popup">
          <button className="popup__btn" onClick={() => setIsEmailSended("")}>
            X
          </button>
          {isEmailSemded === "seccess" ? (
            <>
              <BsEnvelopeCheckFill
                className="popup__icon"
                style={{ color: "#14a44d" }}
              />
              <p className="popup__text">
                پیام شما با موفقیت ارسال شد،
                <br /> در اسرع وقت به شما پیام میدهم.
              </p>
            </>
          ) : (
            <>
              <BsFillEnvelopeXFill
                className="popup__icon"
                style={{ color: "#dc4c64" }}
              />
              <p className="popup__text">
                ارسال پیام با مشکل مواجه شده،
                <br /> لطفا دوباره امتحان کنید.
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
}
