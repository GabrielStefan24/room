"use client";

const Section = (props) => {
  const { children } = props;
  return (
    <section className="flex flex-col w-screen h-screen items-start justify-center mx-auto  px-20 pointer-events-auto">
      {children}
    </section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col w-screen ">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

const Home = () => {
  return (
    <Section>
      <h1 className=" text-7xl font-bold text-heroText ">
        Hi,my <br /> name is Gabriel.
      </h1>
      <p className="text-2xl  text-slate-100 mt-8 ">
        I'm passionate about designing captivating user experiences.
      </p>
      <button className=" bg-pink-800 hover:bg-pink-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out mt-8 text-xl">
        Get in touch
      </button>
    </Section>
  );
};
const About = () => {
  return (
    <Section>
      <div className=" w-full flex items-center justify-center flex-col">
        <h1 className=" text-5xl font-bold text-heroText ">
          I'm a self-taught front-end web developer.
        </h1>
        <p className="text-2xl  text-slate-100 mt-8 ">
          Below are some of my hobbies and skills
        </p>
      </div>
    </Section>
  );
};
const Projects = () => {
  return (
    <Section>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla officia
      vitae quidem hic illo incidunt accusantium, explicabo nostrum ab alias
      doloremque delectus eum distinctio reprehenderit odit beatae iure tenetur
      ea. Ad ut ipsa aliquid corporis quibusdam adipisci, accusamus repellendus
      corrupti magni voluptas? At ducimus reiciendis sint, iste consequatur a,
      laborum doloremque minus adipisci suscipit rem quaerat dolore pariatur
      quasi cumque.
    </Section>
  );
};
const Contact = () => {
  return (
    <Section>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, soluta
      aliquam ut culpa velit quam eveniet suscipit distinctio eum nostrum saepe
      aut! Unde sint aliquam iure alias porro possimus molestiae. Adipisci iure
      hic in enim modi doloremque pariatur, non harum perspiciatis, minus
      blanditiis libero, incidunt dolorum! Error impedit recusandae in hic enim.
      Eum blanditiis odit necessitatibus et, facilis veniam odio!
    </Section>
  );
};
