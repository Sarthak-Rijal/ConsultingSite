import React from "react";

import { AppLayout, AppLayoutProps, Container, ContentLayout, Header, Link } from "@cloudscape-design/components";

export interface PageLayout extends AppLayoutProps{    
    pageTitle?: string
    pageDescription?: string
}

export function PageLayout({navigationHide, toolsHide, pageTitle, contentType, pageDescription, ...appLayoutProps}: PageLayout): React.ReactElement {
    return (
        <AppLayout 
            {...appLayoutProps} 
            navigationHide={true} 
            contentType={contentType}
            toolsHide={true} 
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
                >

                </ContentLayout>
              }
            />
    )
}