import React from "react";

import {
  AppLayout,
  AppLayoutProps,
  ContentLayout,
  Header,
} from "@cloudscape-design/components";

export interface PageLayout extends AppLayoutProps {
  pageTitle?: string;
  pageDescription?: string;
}

export function PageLayout({
  navigationHide,
  toolsHide,
  pageTitle,
  contentType,
  pageDescription,
  ...appLayoutProps
}: PageLayout): React.ReactElement {
  return (
    <AppLayout
      {...appLayoutProps}
      navigationHide={navigationHide}
      contentType={contentType}
      toolsHide={toolsHide}
      headerVariant="high-contrast"
      content={
        <ContentLayout
          headerVariant="high-contrast"
          disableOverlap
          header={
            <Header description={pageDescription} variant="awsui-h1-sticky">
              {pageTitle}
            </Header>
          }
        ></ContentLayout>
      }
    />
  );
}
