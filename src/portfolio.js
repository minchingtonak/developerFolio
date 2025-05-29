/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Alec Minchington",
  title: "Hey, I'm Alec :)",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience building scalable web applications and AI-powered solutions. I love creating efficient, user-focused products that make a real impact."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1kfM8ZamzVGnWSFmSdl44Eh4LEW5CK8q1m3YOdW6k0zI/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/minchingtonak",
  linkedin: "https://www.linkedin.com/in/alec-minchington-92985a179",
  gmail: "alec@minch.cc",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Michigan College of Engineering",
      logo: require("./assets/images/uofm.png"),
      subHeader: "Bachelor of Science in Engineering — Computer Science",
      duration: "September 2018 - April 2022",
      desc: "GPA: 3.811/4.000",
      descBullets: [
        "Coursework: Web Systems, Operating Systems, Compilers, Programming Languages, Computer Security"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer I",
      company: "Amazon Web Services",
      companylogo: require("./assets/images/aws.jpg"),
      date: "September 2022—Present",
      desc: "AWS App Studio & Unannounced Generative AI product",
      descBullets: [
        "Developed a new, simplified onboarding feature for AWS App Studio, a generative AI-powered, low-code web application builder for business users. The feature increased the onboarding completion rate by 30% and decreased the abandon rate by 6%. The application UI integrated with the AWS Management Console and was written using TypeScript and React. The backend used TypeScript, Lambda, Step Functions, and DynamoDB",
        "Designed and implemented a framework to allow App Studio engineers to securely and quickly scrub Personally Identifiable Information from service logs stored in CloudWatch. The framework was used to clean log data across two production instances and successfully redacted 90GB of log data. The framework was implemented in TypeScript and took advantage of a stream-based architecture which allowed the processing of large sets of data while maintaining low memory usage",
        "Optimized App Studio's code generation engine by migrating the existing state management implementation to use a more efficient state management library and by simplifying rendering algorithms. The optimization resulted in a 90% decrease in code generation render latency across all use cases. The work required knowledge of the Recoil and Jotai state management libraries, and the React render process"
      ]
    },
    {
      role: "Software Development Engineer Intern",
      company: "Amazon",
      companylogo: require("./assets/images/Amazon-Logo.png"),
      date: "May 2021—August 2021",
      desc: "Consumables Shopping Experience",
      descBullets: [
        "Developed web application to simplify the complex process of onboarding internal customers' new A/B feature experiments on amazon.com",
        "The application was written with TypeScript and React, and integrated several internal Amazon services into a unified process flow"
      ]
    },
    {
      role: "Instructional Aide",
      company: "University of Michigan",
      companylogo: require("./assets/images/uofm.png"),
      date: "May 2021—August 2021",
      desc: "Web Systems & Programming Paradigms",
      descBullets: [
        "Instructed students in web programming concepts and helped solve code issues during office hours",
        "Created, validated, and graded exams and quizzes with fellow course staff",
        "Guided students through implementation of a programming language interpreter via lab sessions & office hours"
      ]
    },
    {
      role: "Software Development Engineer Intern",
      company: "Amazon",
      companylogo: require("./assets/images/Amazon-Logo.png"),
      date: "July 2020—September 2020",
      desc: "Consumables Customer Experience",
      descBullets: [
        "Created a web application to query Amazon product listing data from Elasticsearch and allow internal customers to gain insights into the data via dynamic visualizations",
        "The application leveraged TypeScript and React, using Cloudscape for visualizations"
      ]
    },
    {
      role: "Instructional Aide and Cheat Checking Lead",
      company: "University of Michigan",
      companylogo: require("./assets/images/uofm.png"),
      date: "January 2019—May 2020, August 2021—December 2021",
      desc: "Programming and Introductory Data Structures",
      descBullets: [
        "Bolstered students' understanding of C++ programming concepts by hosting a weekly lab session",
        "Helped students solve their software & programming problems in office hours",
        "Analyzed student code submissions to find evidence of cheating",
        "Wrote programming problems for midterm and final exams with other staff members"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Repl.it Lang Jam Winner",
      subtitle:
        "Won first place for my partner and I's work on Basil, a new programming language exploring partial evaluation, context-sensitive parsing, and metaprogramming",
      image: require("./assets/images/replit.png"),
      imageAlt: "Repl.it Logo",
      footerLink: [
        {
          name: "Final Results Blog Post",
          url: "https://blog.replit.com/pljamresults"
        },
        {
          name: "Basil GitHub Repo",
          url: "https://github.com/basilTeam/basil"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to say hi?",
  number: "+1-586-383-4191",
  email_address: "contact@minch.cc"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
