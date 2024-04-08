import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import FooterMain from "../../components/footers/FooterMain";
import { useTranslation } from "react-i18next";
import AboutButton from "../../components/Buttons/AboutButton";
import CopyEmailButton from "../../components/Buttons/CopyEmailButton";
import SendMessageForms from "../../components/forms/SendMessageForms";

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HeaderTitle title="Contact" description="Get in touch for inquiries" />

      <div>
        <hr />

        <div className="mt-20">
          <div className="flex text-[#111111] mb-7 flex-col gap-5 lg:flex-row lg:gap-0">
            <div className="lg:w-[50%]">
              <p>jjuly8julianur@gmail.com</p>
              <p>E-mail</p>
            </div>
            <div>
              <p>+57 320 452 4545</p>
              <p>{t("Phone")}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <AboutButton />
            <CopyEmailButton />
          </div>
        </div>

        <SendMessageForms />
      </div>
      <FooterMain />
    </div>
  );
};

export default ContactPage;
