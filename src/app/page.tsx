// components

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
// import Testimonial from "./testimonial";
// import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Hero />
      <Clients />
      <Skills />
      <Projects />
      <Resume />
      {/* <Testimonial /> */}
      {/* <PopularClients /> */}
      <ContactForm />
    </>
  );
}

