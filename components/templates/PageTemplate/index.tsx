import React, { ReactNode, useEffect } from "react";
import Head from "next/head";
import Container from "../Container/index";
import CallOut from "../../organisms/CallOut/index";
import Footer from "../../organisms/Footer";
import NavBar from "../../organisms/NavBar";
interface PageTemplateProps {
  children: ReactNode[] | JSX.Element;
  title?: string;
}
const PageTemplate = ({ children, title = "Collosal" }: PageTemplateProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {/* Navbar Fixed on top */}
      <NavBar />
      {/* Background */}
      <div className="w-full h-fit min-h-screen bg-dark overflow-x-hidden">
        <div className="w-full h-full min-h-screen relative bg-[url('/images/page-background.svg')] bg-cover">
          <div className="w-full h-full min-h-screen relative backdrop-blur-[175px] bg-dark/[.80] overflow-visible">
            {/* Space for navbar, because navbar is absolute */}
            <div className="h-[105px]"></div>
            {/* Padding */}
            <Container>
              {children}
              <div data-aos="fade-right">
                <CallOut />
              </div>
              <Footer />
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTemplate;
