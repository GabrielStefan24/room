"use client";

import { skills } from "@/Data/data";

const Section = (props) => {
  const { children } = props;
  return (
    <section
      className="  h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start justify-center mb-40"
    >
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
      <div className="flex flex-col gap-20 justify-center h-full w-full">
        <div className=" w-full flex flex-col items-center mt-20">
          <h1 className=" text-5xl font-bold text-slate-900 ">
            I'm a self-taught front-end web developer.
          </h1>
          <p className="text-2xl  text-slate-900 mt-8 font-bold ">
            Below are some of my hobbies and skills
          </p>
        </div>
        <div className=" w-1/3 flex flex-col  rounded-md p-6 ">
          <div className="flex flex-col ">
            <h1 className=" text-slate-900 w-full border-b border-slate-900 text-3xl italic">
              WEB
            </h1>
            <div className="flex flex-wrap p-6 gap-2">
              {skills.map((el) => (
                <div
                  key={el.name}
                  className="flex items-center justify-center flex-col gap-2"
                >
                  <img src={el.icon.src} alt={el.name} className="w-10 h-10 " />
                  <p className="text-center text-sm text-white">{el.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col ">
            <h1 className=" text-slate-900 w-full border-b border-slate-900 text-3xl italic">
              OTHER
            </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            corporis temporibus eveniet recusandae officiis excepturi at
            quaerat, possimus quidem consectetur nihil quos saepe velit, ipsa
            iure iste ab hic sequi?
          </div>
        </div>
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
