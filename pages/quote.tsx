import React from "react";
import PageTemplate from "../components/templates/PageTemplate";
import PageSentence from "../components/molecules/PageSentence";
import ButtonLink from "../components/atoms/Button/ButtonLink";
import InputGroup from "../components/molecules/FormGroup/InputGroup";
import SelectGroup from "../components/molecules/FormGroup/SelectGroup";
import TextAreaGroup from "../components/molecules/FormGroup/TextAreaGroup";
import Button from "../components/atoms/Button";
import { useState } from "react";
import Alert from "../components/molecules/alert";
const Quote = () => {
  const [isAlert, setIsAlert] = useState<boolean>(false);
  const handleSubmit = () => {
    setIsAlert(!isAlert);
  };
  return (
    <>
      <PageTemplate title="Send Quote - Collosal">
        <section className="grid grid-cols-1 place-items-center gap-5 lg:grid-cols-2">
          <aside
            className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 place-items-center gap-12 lg:w-full lg:place-items-start"
            data-aos="fade-down-right"
          >
            <div className="text-center lg:text-left">
              <PageSentence
                title="Tell us about your problem and how we can help"
                description="We are happy to help you, tell us what is the problem with your company, and we are ready to answer these problems. It usually takes a few minutes for us to respond."
                badge="SEND QUOTE"
              />
            </div>
            <div className="w-fit">
              <ButtonLink
                value="Ask Us"
                href="/faq"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside
            className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end"
            data-aos="fade-up-left"
          >
            <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
              <Alert 
                isAlert={isAlert}
                badge="Thank You!"
                description="Thank You For Submit Your Quote"
              />
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Name" />
                <InputGroup label="Email" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Company" />
                <SelectGroup
                  label="Company Size"
                  options={[
                    { label: "Small", value: "small" },
                    { label: "Medium", value: "medium" },
                    { label: "Large", value: "large" },
                  ]}
                />
              </div>
              <TextAreaGroup label="Tell Us Your Problem" />
              <Button value="Send Quote" onClick={handleSubmit} />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  );
};

export default Quote;
