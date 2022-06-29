import React, { useState } from "react";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import LayoutPage from "../../components/LayoutPage/LayoutPage";
import Textarea from "../../components/Textarea/Textarea";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";
import cogoToast from "cogo-toast";
import ReactLoading from "react-loading";

const PageContactUs = ({ className = "" }) => {
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail(e) {
    setIsLoading(true);
    e.preventDefault();
    // if(e.target[0].value == null)
    emailjs
      .sendForm(
        "service_02drkv7",
        "template_ecdt8re",
        e.target,
        "YHAG69cOGEnL9uMzS"
      )
      .then(
        (result) => {
          if (result.status == 200) {
            cogoToast.success("Email sent successfully", { hideAfter: 3 });
          }
          setIsLoading(false);
        },
        (error) => {
          cogoToast.error(
            "Sorry something went wrong while sending email. Please try again.",
            { hideAfter: 5 }
          );
          setIsLoading(false);
        }
      );
  }

  return (
    <div className={`nc-PageContact ${className}`} data-nc-id="PageContact">
      <Helmet>
        <title>Contentgizmo</title>
      </Helmet>

      <LayoutPage
        subHeading="Drop us message and we will get back for you."
        headingEmoji=""
        heading="Contact us"
        className=""
      >
        <div className="">
          <p className="text-xl md:text-2xl font-normal text-center pb-16">
            Contact us
          </p>
          <div className="grid grid-cols-1 px-2 sm:px-32 md:px-62 lg:px-96">
            {/* <div className="border border-neutral-100 dark:border-neutral-700 lg:hidden"></div> */}
            <div>
              <form className="grid grid-cols-1 gap-6" onSubmit={sendEmail}>
                <label className="block">
                  <Label>Full name</Label>

                  <Input
                    placeholder="Example Doe"
                    name="name"
                    type="text"
                    className="mt-1"
                    required
                  />
                </label>
                <label className="block">
                  <Label>Email address</Label>

                  <Input
                    type="email"
                    placeholder="example@example.com"
                    className="mt-1"
                    name="email"
                    required
                  />
                </label>
                <label className="block">
                  <Label>Message</Label>

                  <Textarea className="mt-1" name="message" required rows={6} />
                </label>
                <ButtonPrimary type="submit">
                  {isLoading ? (
                    <div className="flex justify-center items-center">
                      <p>Loading...</p>&nbsp;&nbsp;
                      <ReactLoading
                        type="spin"
                        color={"white"}
                        height={24}
                        width={24}
                      />
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </ButtonPrimary>
              </form>
            </div>
          </div>
        </div>
      </LayoutPage>

      {/* OTHER SECTIONS */}
      {/* <div className="container pb-16 lg:pb-28">
        <SectionSubscribe2 />
      </div> */}
    </div>
  );
};

export default PageContactUs;
