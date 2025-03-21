import React from "react";
import { TopNavigation, AppLayout } from "@cloudscape-design/components";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../home/HomePage";
import "./RootPage.css";

export function RootPage(): React.ReactElement {
  const identity = {
    href: "/",
    title: "",
  };

  return (
    <>
      <TopNavigation
        identity={identity}
        utilities={[
          {
            type: "menu-dropdown",
            text: "Contact Us",
            items: [
              { id: "email", text: "Email: info@aiconsulting.com" },
              { id: "phone", text: "Phone: +1 (555) 123-4567" },
            ],
          },
        ]}
      />
      <AppLayout
        navigationHide={true}
        content={
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ConsultingSite" element={<HomePage />} />
          </Routes>
        }
        tools={null}
        toolsHide={true}
        notifications={null}
        contentType="default"
        headerSelector="#header"
        disableContentPaddings={false}
      />
    </>
  );
}
