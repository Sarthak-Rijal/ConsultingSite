import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  ContentLayout,
  Grid,
  SpaceBetween,
  TextContent,
  ColumnLayout,
} from "@cloudscape-design/components";
import "./HomePage.css";
import frodo from "../assets/frodo.png";
import gandalf from "../assets/gandalf.jpg";
import { ContactForm } from "../components/ContactForm";

export function HomePage(): React.ReactElement {
  // State to control animations
  const [animationsLoaded, setAnimationsLoaded] = useState(false);

  // Trigger animations after component mounts
  useEffect(() => {
    setAnimationsLoaded(true);
  }, []);

  // Sample projects for the showcase section
  const projects = [
    {
      title: "Deep Dive on Business Needs",
      description:
        "We start by thoroughly understanding your business challenges, goals, and requirements before proposing any technical solutions. This foundation ensures we build exactly what you need.",
    },
    {
      title: "Implement & Continuously Iterate",
      description:
        "Our agile development process delivers working solutions quickly, then refines them based on your feedback. This iterative approach ensures the final product perfectly aligns with your evolving needs.",
    },
    {
      title: "User Metrics & Service Health",
      description:
        "We implement comprehensive analytics and monitoring systems that provide real-time insights into user behavior and system performance, helping you make data-driven decisions.",
    },
    {
      title: "Proactive Support & Development",
      description:
        "Our relationship doesn't end at deployment. We provide ongoing maintenance, proactive error monitoring, and continuous improvements to ensure your solution evolves with your business.",
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      quote:
        "Their AI implementation transformed our business operations completely. Highly recommended!",
      author: "Sarah Johnson",
      position: "CTO, Enterprise Retail Corp",
      image: frodo,
    },
    {
      quote:
        "The team delivered beyond our expectations, with measurable ROI within just 3 months.",
      author: "Michael Chen",
      position: "Director of Innovation, Tech Solutions",
      image: gandalf,
    },
  ];

  return (
    <ContentLayout>
      {/* Hero Section */}
      <Container
        className={`hero-container ${animationsLoaded ? "animate-hero" : ""}`}
      >
        <Grid
          gridDefinition={[
            { colspan: { default: 12, xxs: 12, xs: 6 } },
            { colspan: { default: 12, xxs: 12, xs: 6 } },
          ]}
        >
          <div
            className={`hero-image ${animationsLoaded ? "animate-hero-image" : ""}`}
          >
            <div className="ascii-art-container">
              {/* eslint-disable no-useless-escape */}
              <pre className="ascii-art">
                {`
                                                              
 ███████╗██╗   ██╗███╗   ██╗ █████╗ ██████╗ ████████╗██╗ ██████╗ 
 ██╔════╝╚██╗ ██╔╝████╗  ██║██╔══██╗██╔══██╗╚══██╔══╝██║██╔════╝ 
███████╗ ╚████╔╝ ██╔██╗ ██║███████║██████╔╝   ██║   ██║██║     
╚════██║  ╚██╔╝  ██║╚██╗██║██╔══██║██╔═══╝    ██║   ██║██║     
 ███████║   ██║   ██║ ╚████║██║  ██║██║        ██║   ██║╚██████╗ 
 ╚══════╝   ╚═╝   ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝        ╚═╝   ╚═╝ ╚═════╝ 
                                                              
 ███████╗ ██████╗ ██╗     ██╗   ██╗████████╗██╗ ██████╗ ███╗   ██╗███████╗    
 ██╔════╝██╔═══██╗██║     ██║   ██║╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝    
 ███████╗██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║██╔██╗ ██║███████╗    
 ╚════██║██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║██║╚██╗██║╚════██║    
 ███████║╚██████╔╝███████╗╚██████╔╝   ██║   ██║╚██████╔╝██║ ╚████║███████║    
 ╚══════╝ ╚═════╝ ╚══════╝ ╚═════╝    ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝    
`}
              </pre>
              <pre className="lightbulb-art">
                {`
  ..---..
 /       \\
|         |
:         ;
 \\  \\~/  /
  \`, Y ,\'
   |_|_|
   |===|
   |===|
    \\_/
  `}
              </pre>
              {/* eslint-enable no-useless-escape */}
            </div>
          </div>
          <div
            className={`hero-content ${animationsLoaded ? "animate-hero-content" : ""}`}
          >
            <SpaceBetween size="l">
              <TextContent>
                <p className="hero-description">
                  Our team of ex-Amazon and ex-Microsoft software engineers and
                  product managers brings 10+ years of industry experience to
                  your AI challenges. We specialize in:
                </p>
                <ul className="hero-list">
                  <li>
                    <span className="highlight">
                      Deep Requirements Analysis
                    </span>{" "}
                    — Understanding your business needs before writing a single
                    line of code
                  </li>
                  <li>
                    <span className="highlight">Continuous Delivery</span> —
                    Implementing feedback loops that ensure your solution
                    evolves with your needs
                  </li>
                  <li>
                    <span className="highlight">
                      Enterprise-grade Monitoring
                    </span>{" "}
                    — Proactive error detection and alerting systems that
                    prevent downtime
                  </li>
                  <li>
                    <span className="highlight">Dedicated Support</span> —
                    Ongoing maintenance and optimization to maximize your ROI
                  </li>
                </ul>
              </TextContent>
              <div className="cta-buttons right-aligned">
                <Button variant="primary">Schedule a Consultation</Button>
              </div>
            </SpaceBetween>
          </div>
        </Grid>
      </Container>

      {/* Featured Projects/Services */}
      <Container
        className={`projects-container ${animationsLoaded ? "animate-projects" : ""}`}
      >
        <Grid
          gridDefinition={[
            { colspan: { default: 12, xxs: 12, xs: 6, m: 3 } },
            { colspan: { default: 12, xxs: 12, xs: 6, m: 3 } },
            { colspan: { default: 12, xxs: 12, xs: 6, m: 3 } },
            { colspan: { default: 12, xxs: 12, xs: 6, m: 3 } },
          ]}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`service-project-card ${animationsLoaded ? `animate-project-card animate-project-${index + 1}` : ""}`}
            >
              <div className="service-project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </Grid>
      </Container>

      {/* Testimonials */}
      <Container
        className={`testimonials-container ${animationsLoaded ? "animate-testimonials" : ""}`}
      >
        <ColumnLayout columns={testimonials.length} variant="text-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${animationsLoaded ? `animate-project-card animate-testimonial-${index + 1}` : ""}`}
            >
              <div className="testimonial-content">
                <p className="quote">{testimonial.quote}</p>
                <div className="author-info">
                  <img src={testimonial.image} className="author-image" />
                  <div>
                    <p className="author-name">{testimonial.author}</p>
                    <p className="author-position">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ColumnLayout>
      </Container>

      {/* Call to Action */}
      <Container
        className={`cta-container ${animationsLoaded ? "animate-cta" : ""}`}
      >
        <div className="cta-content">
          <h2>Ready to transform your business with AI?</h2>
          <p>Get in touch with our team to discuss your project.</p>

          <ContactForm />
        </div>
      </Container>
    </ContentLayout>
  );
}
