import React from "react";
import { Input, TopNavigation } from "@cloudscape-design/components";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../home/HomePage";

export function RootPage(): React.ReactElement {
  const identity = {
    href: "/",
    title: "Software Consulting Site",
  };

  return (
    <>
      <TopNavigation
        search={
          <Input
            value=""
            type="search"
            placeholder="Search"
            ariaLabel="Search"
          />
        }
        utilities={[
          {
            type: "button",
            text: "Link",
            href: "https://example.com/",
            external: true,
            externalIconAriaLabel: " (opens in a new tab)",
          },
          {
            type: "button",
            iconName: "notification",
            title: "Notifications",
            ariaLabel: "Notifications (unread)",
            badge: true,
            disableUtilityCollapse: false,
          },
          {
            type: "menu-dropdown",
            iconName: "settings",
            ariaLabel: "Settings",
            title: "Settings",
            items: [
              {
                id: "settings-org",
                text: "Organizational settings",
              },
              {
                id: "settings-project",
                text: "Project settings",
              },
            ],
          },
          {
            type: "menu-dropdown",
            text: "Customer Name",
            description: "email@example.com",
            iconName: "user-profile",
            items: [
              { id: "profile", text: "Profile" },
              { id: "preferences", text: "Preferences" },
              { id: "security", text: "Security" },
              {
                id: "support-group",
                text: "Support",
                items: [
                  {
                    id: "documentation",
                    text: "Documentation",
                    href: "#",
                    external: true,
                    externalIconAriaLabel: " (opens in new tab)",
                  },
                  { id: "support", text: "Support" },
                  {
                    id: "feedback",
                    text: "Feedback",
                    href: "#",
                    external: true,
                    externalIconAriaLabel: " (opens in new tab)",
                  },
                ],
              },
              { id: "signout", text: "Sign out" },
            ],
          },
        ]}
        identity={identity}
      ></TopNavigation>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ConsultingSite" element={<HomePage />} />
      </Routes>
    </>
  );
}
