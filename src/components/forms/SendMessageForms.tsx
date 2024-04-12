import { Button, Input, Textarea } from "@nextui-org/react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { SendMessage } from "../../models/sendMessage.model";
import validator from "validator";
import { Bounce, toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { config } from "../../config";
import { useTheme } from "../../providers/theme/useTheme";

const SendMessageForms = () => {
  const { t } = useTranslation();
  const [dataMessage, setDataMessage] = useState<SendMessage>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isSelected } = useTheme();

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataMessage({ ...dataMessage, [name]: value });
  };

  const isInvalidEmail = useMemo(() => {
    if (!dataMessage?.email) return true;

    return !validator.isEmail(dataMessage.email);
  }, [dataMessage]);

  const isInvalidName = useMemo(() => {
    if (!dataMessage?.name) return true;

    return !validator.isLength(dataMessage?.name, { min: 6, max: 20 });
  }, [dataMessage]);

  const isInvalidTextArea = useMemo(() => {
    if (!dataMessage?.message) return true;

    return !validator.isLength(dataMessage?.message, { min: 3, max: 200 });
  }, [dataMessage]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsLoading(true);
    e.preventDefault();

    if (!isInvalidName && !isInvalidEmail && !isInvalidTextArea) {
      axios
        .post(config.API_URL + "/message/send", dataMessage)
        .then(() => {
          toast.success(t("Message sent successfully"), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: isSelected ? "dark" : "light",
            transition: Bounce,
          });

          setDataMessage({
            email: "",
            message: "",
            name: "",
          });
        })
        .catch(() => {
          toast.error(t("Error sending email"), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: isSelected ? "dark" : "light",
            transition: Bounce,
          });
        });
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col gap-5 mt-28">
      <h1 className="font-medium text-[13pt] text-[#111] dark:text-[#ffff]">
        {t("Send me a message")}
      </h1>
      <div className="flex gap-5 flex-col lg:flex-row">
        <Input
          type="text"
          label={t("Name")}
          name="name"
          value={dataMessage?.name}
          onChange={(e) => handleInputs(e)}
          isRequired
          isInvalid={isInvalidName}
          color={isInvalidName && dataMessage?.name ? "danger" : "default"}
          errorMessage={isInvalidName && dataMessage?.name && "Invalid name"}
        />
        <Input
          type="email"
          label={t("Email")}
          name="email"
          value={dataMessage?.email}
          onChange={(e) => handleInputs(e)}
          isRequired
          isInvalid={isInvalidEmail}
          color={isInvalidEmail && dataMessage?.email ? "danger" : "default"}
          errorMessage={isInvalidEmail && dataMessage?.email && "Invalid email"}
        />
      </div>
      <Textarea
        label={t("Message")}
        name="message"
        placeholder={t("Description")}
        className="w-full"
        value={dataMessage?.message}
        onChange={(e) => handleInputs(e)}
        isRequired
        isInvalid={isInvalidTextArea}
        color={isInvalidTextArea && dataMessage?.message ? "danger" : "default"}
        errorMessage={
          isInvalidTextArea && dataMessage?.message && "Invalid message"
        }
      />
      <Button
        color="success"
        className="font-bold"
        onClick={(e) => handleSubmit(e)}
        isDisabled={
          isInvalidName || isInvalidEmail || isInvalidTextArea || isLoading
        }
      >
        {t("Send")}
      </Button>
      <ToastContainer />
    </div>
  );
};

export default SendMessageForms;
