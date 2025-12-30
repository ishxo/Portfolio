import ContactForm from "./components/ContactForm";
import Project from "./components/Home/Project";
import Companies from "./components/Home/Companies";
import Hero from "./components/Home/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Project />
      <ContactForm />
    </main>
  );
}
