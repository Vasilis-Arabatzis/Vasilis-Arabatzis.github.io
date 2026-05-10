import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function About() {

    const skills = [
    "Java",
    "Matlab",
    "PHP",
    "Python",
    "C++",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Tailwind",
    "Git",
    "MySQL",
    "Oracle SQL",
    "HTML",
    "CSS",
    ];

    const hobbies = [
    "Traveling",
    "Outdoor Cooking (Grilling & BBQ)",
    "Hiking & Nature Walks",
    "Tennis",
    "Basketball",
    "Watching Movies & TV Shows & Anime",
    "Playing Video Games",
    "Exploring New Technologies",
    "Driving",
    ];

    const education = [
    "Democritus University of Thrace – Computer Engineering (2018–Present) | GPA: 7.09 ",
    "2nd General High School of Xanthi | Grade: 17", 
    ];

    const additional = [
    "Military Service – Reserve Second Lieutenant (Leadership & personnel management)",
    "Recommendation letter from Battalion Commander ",
    "Driving License (Car & Motorcycle)", 
    ];

  
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center px-6 py-20"
    >
       <div className="w-full max-w-4xl mx-auto"> 
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CARD 1 Who I am*/}
        <Card className="mt-5 shadow-xl border-muted ">
          <CardHeader>
            <CardTitle className="text-2xl">
              Who I am
            </CardTitle>
          </CardHeader>

          <CardContent className="text-muted-foreground text-lg leading-relaxed">
            <p>
              I am a Computer Engineering student with a strong interest in
              backend development, software architecture, and modern web
              technologies.
            </p>

            <p>
              I have hands-on experience building applications using Java,
              PHP, React, and Next.js, focusing on clean code and scalable
              systems.
            </p>

            <p>
              I enjoy working in team environments, using Git workflows, and
              continuously improving my skills through real-world projects.
            </p>

            <p>
              My goal is to grow into a full-stack developer and build
              efficient, user-focused applications.
            </p>
          </CardContent>
        </Card>

        {/* CARD 2 Skills */}
        <Card className="mt-5 shadow-lg ">
            <CardHeader>
            <CardTitle className="mt-15 text-center md:text-left">
                Skills
            </CardTitle>
            </CardHeader>

            <CardContent>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {skills.map((skill) => (
                        <span
                        key={skill}
                        className="px-4 py-2 rounded-full border text-sm hover:bg-muted transition"
                        >
                        {skill}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>

         {/* CARD 3 - Additional */}
        <Card className="shadow-xl border-muted">
          <CardHeader>
            <CardTitle className="text-2xl">Education</CardTitle>
          </CardHeader>

          <CardContent className="text-muted-foreground text-lg leading-relaxed space-y-2">
            <ul className="space-y-2 list-disc pl-5">
            {education.map((item) => (
            <li key={item}>{item}</li>
            ))}
            </ul>
          </CardContent>

          <CardHeader>
            <CardTitle className="text-2xl">Additional</CardTitle>
          </CardHeader>

          <CardContent className="text-muted-foreground text-lg leading-relaxed space-y-2">
            <ul className="space-y-2 list-disc pl-5">
            {additional.map((item) => (
            <li key={item}>{item}</li>
            ))}
            </ul>
          </CardContent>
        </Card>

        {/* CARD 4 - HOBBIES */}
        <Card className="shadow-xl border-muted">
          <CardHeader>
            <CardTitle className="text-2xl">Hobbies</CardTitle>
          </CardHeader>

          <CardContent className="text-muted-foreground text-lg leading-relaxed space-y-2">
            <ul className="space-y-2 list-disc pl-5">
            {hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
            ))}
            </ul>
          </CardContent>
        </Card>
    </div>  
    </div>    
    </section>
  );
}