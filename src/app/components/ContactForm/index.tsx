"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  phnumber: string;
  Message: string;
};

const ContactForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phnumber: "",
    Message: "",
  });
  const [showThanks, setShowThanks] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== "",
    );
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as keyof FormData]: value,
    }));
  };

  const reset = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phnumber: "",
      Message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/ishkhankostanyan@gmail.com",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            Name: formData.firstname,
            LastName: formData.lastname,
            Email: formData.email,
            PhoneNo: formData.phnumber,
            Message: formData.Message,
          }),
        },
      );

      const data = await response.json();
      if (data.success) {
        setShowThanks(true);
        reset();
        setTimeout(() => setShowThanks(false), 5000);
      }
      reset();
    } catch (error: any) {
      console.error(error?.message || "Unknown error");
    } finally {
      setLoader(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-12">
      <div className="container">
        <div className="relative">
          <h2 className="mb-9 text-center">{t(`contact.get_in`)}</h2>
          <div className="relative border px-6 py-2 rounded-lg border-black/20 dark:border-white/20">
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap w-full m-auto justify-between"
            >
              <div className="sm:flex gap-6 w-full">
                {["firstname", "lastname"].map((field) => (
                  <div key={field} className="mx-0 my-2.5 flex-1">
                    <label
                      htmlFor={field}
                      className="pb-3 inline-block text-base"
                    >
                      {t(`contact.${field.replace("name", "_name")}`)}
                    </label>
                    <input
                      id={field}
                      type="text"
                      name={field}
                      value={formData[field as keyof FormData]}
                      onChange={handleChange}
                      className="w-full text-base px-4 rounded-lg border-black/20 dark:border-white/20 py-2.5 border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                    />
                  </div>
                ))}
              </div>
              <div className="sm:flex gap-6 w-full">
                {["email", "phnumber"].map((field) => (
                  <div key={field} className="mx-0 my-2.5 flex-1">
                    <label
                      htmlFor={field}
                      className="pb-3 inline-block text-base"
                    >
                      {t(`contact.${field === "phnumber" ? "phone" : field}`)}
                    </label>
                    <input
                      id={field}
                      type={field === "email" ? "email" : "tel"}
                      name={field}
                      value={formData[field as keyof FormData]}
                      onChange={handleChange}
                      className="w-full text-base px-4 py-2.5 rounded-lg border-black/20 dark:border-white/20 border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                    />
                  </div>
                ))}
              </div>
              <div className="w-full mx-0 my-2.5 flex-1">
                <label htmlFor="Message" className="text-base inline-block">
                  {t(`contact.message`)}
                </label>
                <textarea
                  id="Message"
                  name="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  className="w-full mt-2 px-5 py-3 rounded-lg border-black/20 dark:border-white/20 border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                />
              </div>
              <div className="mx-0 my-2.5 w-full">
                <button
                  type="submit"
                  disabled={!isFormValid || loader}
                  className={`border leading-none px-6 text-lg font-medium py-4 rounded-lg 
                  ${
                    !isFormValid || loader
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-primary border-primary text-white hover:bg-transparent hover:text-primary cursor-pointer"
                  }`}
                >
                  {t(`contact.submit`)}
                </button>
              </div>
            </form>
          </div>
          {showThanks && (
            <div className="text-white bg-primary rounded-full px-4 text-lg mb-4.5 mt-1 absolute flex items-center gap-2">
              Thank you for contacting us! We will get back to you soon.
              <div className="w-3 h-3 rounded-full animate-spin border-2 border-solid border-white border-t-transparent"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
