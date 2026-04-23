export const profile = {
  name: "Suswin Palanisamy",
  title: "Software Developer | ERP Systems | Backend | Linux",
  tagline: "Building systems that power real-world operations",
  location: "Tamil Nadu, India",
  email: "suswinpalanswamy@gmail.com",
  github: "https://github.com/SIWNUS",
  linkedin: "https://www.linkedin.com/in/suswin-palanisamy/",
  summary:
    "Software developer focused on ERP delivery, backend systems, Linux operations, and practical engineering improvements that make production teams more reliable and effective.",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const aboutPoints = [
  "I work at the intersection of ERP product delivery and backend engineering, building modules that support daily operations rather than isolated demos.",
  "My experience includes contributing to the centralized Blue Planet ERP environment, where reliability, shared system thinking, and production awareness matter as much as feature delivery.",
  "Alongside Python, PHP, and MySQL development, I have worked with Linux systems, server setup, port forwarding, and monitoring workflows that keep applications usable in real deployments.",
  "I have also taken on client-facing responsibilities, translating operational needs into software changes and helping teams adopt better engineering habits such as Git-based workflows and Linux-first environments.",
];

export const highlights = [
  { value: "ERP", label: "Module ownership across operations" },
  { value: "Blue Planet", label: "Centralized system contribution" },
  { value: "Backend + Infra", label: "Delivery across app and system layers" },
  { value: "Process", label: "Git, Linux, and migration initiatives" },
];

export const experiences = [
  {
    role: "Junior Developer",
    company: "Zigma Global",
    period: "Current Role",
    summary:
      "Contributed to ERP modules and platform improvements supporting operational teams, while taking growing ownership over system reliability and engineering workflows.",
    achievements: [
      "Developed and supported ERP modules such as GRN/SRN, Attendance, and Payroll for day-to-day business operations.",
      "Contributed to the centralization of the Blue Planet ERP system so multiple teams could work from a more consistent production setup.",
      "Introduced Git and GitHub practices into the development workflow to improve collaboration, change tracking, and safer releases.",
      "Advocated for Linux-based development and server environments to improve consistency between local work and deployed systems.",
      "Handled server-oriented tasks including setup support, port forwarding, and operational troubleshooting where application delivery depended on infrastructure decisions.",
      "Supported monitoring visibility with tools such as Zabbix to help surface operational issues earlier.",
      "Pushed a Django migration initiative to modernize parts of the stack and create a clearer path for maintainable backend development.",
    ],
    tags: ["Python", "PHP", "MySQL", "Linux", "Git", "Zabbix", "ERP"],
  },
  {
    role: "Junior Developer Trainee",
    company: "Zigma Global",
    period: "Earlier Role",
    summary:
      "Built foundational product and backend knowledge through hands-on ERP work, internal tools, and close exposure to production-facing requirements.",
    achievements: [
      "Learned the ERP domain through real implementation work rather than isolated training exercises.",
      "Supported backend features and issue resolution across PHP, Python, and MySQL-based workflows.",
      "Worked with client-facing requirements and operational feedback loops, helping convert business pain points into actionable feature work.",
      "Built confidence in Linux-based execution, deployment awareness, and production support responsibilities.",
    ],
    tags: ["Backend", "ERP", "Client Communication", "Linux"],
  },
];

export const projects = [
  {
    name: "Student Registration System",
    category: "Academic / Web Application",
    description:
      "Built a registration workflow for handling student records with a focus on reliable CRUD operations, clean data storage, and straightforward administration.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "",
  },
  {
    name: "PlasmaPS",
    category: "Backend / Internal Tooling",
    description:
      "Created a Flask-based system backed by MySQL, emphasizing application structure, database integration, and practical backend delivery.",
    stack: ["Flask", "Python", "MySQL"],
    link: "",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "PHP", "JavaScript", "SQL"],
  },
  {
    title: "Frameworks",
    items: ["Flask", "Django Migration", "REST-style Backend Development"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Linux", "Zabbix", "MySQL", "Server Administration"],
  },
  {
    title: "Concepts",
    items: ["ERP Systems", "Backend Development", "APIs", "Production Support", "Process Improvement"],
  },
];

export const certifications = [
  {
    title: "ITSMS ISO Internal Auditor",
    issuer: "Bureau Veritas",
  },
];

export const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "github.com/suswin-z", href: profile.github },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/suswin-palanisamy",
    href: profile.linkedin,
  },
];
