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

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
      title: "AI-Powered Document Summarization",
      description:
        "Developed an AI model that automatically summarizes lengthy documents into concise summaries, improving information accessibility and workflow efficiency for legal and research teams. Our solution uses advanced NLP techniques to identify key information and maintain context while reducing document length by up to 85%.",
      demoUrl: "#document-summarization-demo", // Stub URL
      imageUrl:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Example image URL
    },
    {
      title: "Predictive Maintenance for Industrial Equipment",
      description:
        "Implemented a predictive maintenance system using machine learning to analyze sensor data from industrial equipment, predicting potential failures and reducing downtime. By combining real-time monitoring with historical analysis, we've helped clients achieve a 75% reduction in unexpected equipment failures.",
      demoUrl: "#predictive-maintenance-demo", // Stub URL
      imageUrl:
        "https://images.unsplash.com/photo-1581092921461-7d65ca45c268?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Example image URL
    },
    {
      title: "Personalized Learning Platform",
      description:
        "Created a personalized learning platform driven by AI, adapting educational content to individual student needs and learning styles, enhancing engagement and learning outcomes. Our adaptive algorithm continuously refines content delivery based on performance metrics and interaction patterns.",
      demoUrl: "#personalized-learning-demo", // Stub URL
      imageUrl:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Example image URL
    },
    {
      title: "AI-Driven Customer Service Chatbot",
      description:
        "Built an intelligent chatbot for customer service using natural language processing, providing instant support, answering frequently asked questions, and improving customer satisfaction. Our solution integrates with existing knowledge bases and can handle complex, multi-turn conversations.",
      demoUrl: "#chatbot-demo", // Stub URL
      imageUrl:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Example image URL
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

  const currentProject = projects[currentPageIndex];
  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === projects.length - 1;

  const handlePrevious = () => {
    if (isFirstPage || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPageIndex(currentPageIndex - 1);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300); // Match this with the CSS animation duration
  };

  const handleNext = () => {
    if (isLastPage || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPageIndex(currentPageIndex + 1);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300); // Match this with the CSS animation duration
  };

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
                {/* eslint-enable no-useless-escape */}
              </div>
            </div>
            <div
              className={`hero-content ${sectionsInView.hero ? "in-view" : "scroll-animate"}`}
            >
              <SpaceBetween size="l">
                <TextContent>
                  <p className="hero-description">
                    We are a team of seasoned software engineers dedicated to
                    crafting bespoke AI solutions for your business. With over
                    10 years of industry experience, we specialize in
                    developing, deploying, and maintaining cutting-edge AI
                    applications, including Retrieval-Augmented Generation (RAG)
                    systems, fine-tuned models, and intelligent agents with tool
                    calling capabilities. Let us help you leverage the power of
                    AI to drive innovation and efficiency in your organization.
                  </p>

                  <h2 className="tenets-header">
                    <span className="highlight">Our</span>{" "}
                    <span className="highlight">Core Principles</span>
                  </h2>

                  <ul className="hero-list">
                    <li>
                      <span className="highlight">Client-Centric Approach</span>{" "}
                      — We prioritize understanding your unique business
                      objectives and challenges to deliver AI solutions that are
                      perfectly aligned with your strategic goals.
                    </li>
                    <li>
                      <span className="highlight">Engineering Excellence</span>{" "}
                      — We adhere to the highest standards of software
                      engineering, ensuring robust, scalable, and maintainable
                      AI systems through rigorous testing and best practices.
                    </li>
                    <li>
                      <span className="highlight">User-Focused Design</span> —
                      We are committed to creating intuitive and effective user
                      experiences, ensuring that our AI solutions are not only
                      powerful but also user-friendly and seamlessly integrated
                      into your workflows.
                    </li>
                    <li>
                      <span className="highlight">Sustainable Partnership</span>{" "}
                      — Our commitment extends beyond initial deployment. We
                      offer continuous support, proactive monitoring, and
                      ongoing development to ensure the long-term success and
                      evolution of your AI investments.
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
      <div ref={projectsRef} className="our-approach-section">
        <h2 className="section-title">Projects</h2>

        <div className="projects-navigation-container">
          <Button
            className="pagination-button cloudscape-button"
            disabled={isFirstPage || isTransitioning}
            variant="inline-icon"
            iconName="angle-left"
            onClick={handlePrevious}
          >
            Previous
          </Button>

          <div
            className={`projects-container ${sectionsInView.projects ? "in-view" : "scroll-animate"}`}
          >
            <div
              className={`paginated-project-card ${isTransitioning ? "dissolve-out" : "dissolve-in"}`}
            >
              <div className="project-card-content">
                <div className="project-text-content">
                  <h3>{currentProject.title}</h3>
                  <p>{currentProject.description}</p>
                  <div className="project-actions">
                    <Button href={currentProject.demoUrl} variant="primary">
                      Demo
                    </Button>
                  </div>
                </div>
                <div className="project-image-container">
                  <img
                    src={currentProject.imageUrl}
                    alt={currentProject.title}
                    className="project-hero-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <Button
            className="pagination-button cloudscape-button"
            disabled={isLastPage || isTransitioning}
            variant="inline-icon"
            iconName="angle-right"
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>

      {/* Testimonials */}
      <div ref={testimonialsRef}>
        <h2 className="section-title">Client Experiences</h2>
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
