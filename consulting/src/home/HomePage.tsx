import React from "react";

import {
  AppLayout,
  Box,
  Button,
  Container,
  ContentLayout,
  Grid,
  SpaceBetween,
} from "@cloudscape-design/components";

export function HomePage(): React.ReactElement {
  return (
    <AppLayout
      contentType="default"
      toolsHide
      navigationHide
      content={
        <SpaceBetween size="xxl">
          <ContentLayout
            defaultPadding
            disableOverlap
            headerBackgroundStyle={() =>
              `center center/cover url("https://preview.redd.it/why-didnt-they-take-the-ring-to-mordor-on-a-skate-are-they-v0-az7me5yv9mzb1.png?auto=webp&s=cd68338945c79360335df93db5f8aefae799110b")`
            }
            header={
              <Box padding={{ vertical: "xxxl" }}>
                <Grid gridDefinition={[{ colspan: { default: 12, s: 8 } }]}>
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
                      <Box fontSize="display-l" fontWeight="light">
                        Industry solutions to unlock innovation
                      </Box>
                      <Box
                        variant="p"
                        color="text-body-secondary"
                        margin={{ top: "xs", bottom: "l" }}
                      >
                        Shorten procurement times, implement the controls you
                        need to operate with confidence, and enable your
                        organization to unlock innovation.
                      </Box>
                      <SpaceBetween direction="horizontal" size="xs">
                        <Button variant="primary">
                          Browse by Solution Category
                        </Button>
                        <Button>Browse by Solution Industry</Button>
                      </SpaceBetween>
                    </Box>
                  </Container>
                </Grid>
              </Box>
            }
          />
          <ContentLayout
            defaultPadding
            disableOverlap
            headerBackgroundStyle={() =>
              `center center/cover url("https://preview.redd.it/why-didnt-they-take-the-ring-to-mordor-on-a-skate-are-they-v0-az7me5yv9mzb1.png?auto=webp&s=cd68338945c79360335df93db5f8aefae799110b")`
            }
            header={
              <Box padding={{ vertical: "xxxl" }}>
                <Grid
                  gridDefinition={[
                    { colspan: { default: 4, s: 4 }, offset: 8 },
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
                      <Box fontSize="display-l" fontWeight="light">
                        Industry solutions to unlock innovation
                      </Box>
                      <Box
                        variant="p"
                        color="text-body-secondary"
                        margin={{ top: "xs", bottom: "l" }}
                      >
                        Shorten procurement times, implement the controls you
                        need to operate with confidence, and enable your
                        organization to unlock innovation.
                      </Box>
                      <SpaceBetween direction="horizontal" size="xs">
                        <Button variant="primary">
                          Browse by Solution Category
                        </Button>
                        <Button>Browse by Solution Industry</Button>
                      </SpaceBetween>
                    </Box>
                  </Container>
                </Grid>
              </Box>
            }
          />
        </SpaceBetween>
      }
    />
  );
}
