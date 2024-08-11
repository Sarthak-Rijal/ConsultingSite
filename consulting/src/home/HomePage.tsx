import React from "react";

import { AppLayout, AppLayoutProps, Box, Button, Container, ContentLayout, Grid, Header, Link, SpaceBetween } from "@cloudscape-design/components";
import { PageLayout } from "../components/Pagelayout";

type HomePageProps = AppLayoutProps;

export function HomePage({}: HomePageProps): React.ReactElement {
    return (
       <AppLayout contentType="default" toolsHide content={
    <ContentLayout
      defaultPadding
      disableOverlap
      headerBackgroundStyle={mode =>
        `center center/cover url("https://preview.redd.it/why-didnt-they-take-the-ring-to-mordor-on-a-skate-are-they-v0-az7me5yv9mzb1.png?auto=webp&s=cd68338945c79360335df93db5f8aefae799110b")`
      }
      header={
        <Box padding={{ vertical: "xxxl" }}>
          <Grid
            gridDefinition={[
              { colspan: { default: 12, s: 8 } }
            ]}
          >
            <Container>
              <Box padding="s">
                <Box
                  fontSize="display-l"
                  fontWeight="bold"
                  variant="h1"
                  padding="n"
                >
                  Software Consulting 
                </Box>
                <Box
                  fontSize="display-l"
                  fontWeight="light"
                >
                  Industry solutions to unlock innovation
                </Box>
                <Box
                  variant="p"
                  color="text-body-secondary"
                  margin={{ top: "xs", bottom: "l" }}
                >
                  Shorten procurement times, implement the
                  controls you need to operate with
                  confidence, and enable your organization
                  to unlock innovation.
                </Box>
                <SpaceBetween
                  direction="horizontal"
                  size="xs"
                >
                  <Button variant="primary">
                    Browse by Solution Category
                  </Button>
                  <Button>
                    Browse by Solution Industry
                  </Button>
                </SpaceBetween>
              </Box>
            </Container>
          </Grid>
        </Box>
      }
    />
    }/> 
    )
}