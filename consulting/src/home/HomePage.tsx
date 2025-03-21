/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from "react";
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

// Define a type for the sections
type SectionKey = "hero" | "projects" | "testimonials" | "cta";

export function HomePage(): React.ReactElement {
  // State to control animations
  const [animationsLoaded, setAnimationsLoaded] = useState(false);
  const [sectionsInView, setSectionsInView] = useState<{
    [key in SectionKey]: boolean;
  }>({
    hero: false,
    projects: false,
    testimonials: false,
    cta: false,
  });

  // Refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Trigger initial animations after component mounts
  useEffect(() => {
    setAnimationsLoaded(true);
    // Set hero section to visible immediately
    setSectionsInView((prev) => ({ ...prev, hero: true }));
  }, []);

  // Handle scroll to detect when sections come into view
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight * 0.8; // Trigger animation a bit earlier

    // Check each section
    [
      { ref: projectsRef, key: "projects" as SectionKey },
      { ref: testimonialsRef, key: "testimonials" as SectionKey },
      { ref: ctaRef, key: "cta" as SectionKey },
    ].forEach(({ ref, key }) => {
      if (ref.current && !sectionsInView[key]) {
        const element = ref.current;
        const position = element.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition > position) {
          setSectionsInView((prev) => ({ ...prev, [key]: true }));
        }
      }
    });

    // Remove scroll listener if all sections are in view
    if (Object.values(sectionsInView).every((value) => value)) {
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount to check initial positions
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionsInView]);

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
        "When I thought all hope was lost on our impossible journey, this team carried the burden when I could not. They guided us through the darkest paths of Mount Deployment with unwavering dedication.",
      author: "Frodo Baggins",
      position: "Ring Bearer, Fellowship of the Ring",
      image: frodo,
    },
    {
      quote:
        "A wizard arrives precisely when he means to, but your team delivered the solution earlier than expected! In the face of great peril and complex challenges, they illuminated the way forward with both wisdom and practical magic.",
      author: "Gandalf the Grey",
      position: "Chief Magical Advisor, White Council",
      image: gandalf,
    },
  ];

  return (
    <ContentLayout>
      {/* Hero Section */}
      <div ref={heroRef}>
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
     :
 '.  _  .'
-=  (~)  =-   
 .'  #  '.
  `}
                </pre>
                {/* eslint-enable no-useless-escape */}
              </div>
            </div>
            <div
              className={`hero-content ${sectionsInView.hero ? "in-view" : "scroll-animate"}`}
            >
              <SpaceBetween size="l">
                <TextContent>
                  <p className="hero-description">
                    Our small team of 10+ years of working in the MAANG
                    experienced in shipping high quality bespoke software
                    solutions to help your business needs. We specialize in
                    building high quality AI software solutions to help your
                    business needs.
                  </p>

                  <h2 className="tenets-header">
                    <span className="highlight">Our</span>{" "}
                    <span className="highlight">Tenets</span>
                  </h2>

                  <ul className="hero-list">
                    <li>
                      <span className="highlight">
                        Deep Requirements Analysis
                      </span>{" "}
                      — Understanding your business needs before writing a
                      single line of code
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
      </div>

      {/* Featured Projects/Services */}
      <div ref={projectsRef}>
        <Container
          className={`projects-container ${sectionsInView.projects ? "in-view" : "scroll-animate"}`}
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
                className={`service-project-card ${sectionsInView.projects ? `animate-project-${index + 1}` : ""}`}
              >
                <div className="service-project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </Grid>
        </Container>
      </div>

      {/* Testimonials */}
      <div ref={testimonialsRef}>
        <Container
          className={`testimonials-container ${sectionsInView.testimonials ? "in-view" : "scroll-animate"}`}
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
      </div>

      {/* Call to Action */}
      <div ref={ctaRef}>
        <Container
          className={`cta-container ${sectionsInView.cta ? "in-view" : "scroll-animate"}`}
        >
          <div className="cta-content">
            <h2>Ready to transform your business with AI?</h2>
            <p>Get in touch with our team to discuss your project.</p>

            <ContactForm />
          </div>
        </Container>
      </div>
    </ContentLayout>
  );
}
