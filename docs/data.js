/*
  ============================================================
  🎀 YOUR PORTFOLIO DATA — edit this file to update the site 🎀
  ============================================================
  You never need to touch index.html. Just change things here.

  status options:  "done"  |  "in-progress"  |  "todo"
  When you finish something, change its status to "done" and
  (optionally) add a date like "2026-12" and a link to proof
  (a Credly badge, a GitHub write-up, a TryHackMe room, etc.).
*/

const PORTFOLIO = {
  name: "Amma",
  title: "Cybersecurity Student · Aspiring Healthcare IT & Security Analyst",
  tagline:
    "First-semester cybersecurity student documenting every cert, lab, and project on the way from help desk to healthcare security, with DevSecOps as the long game.",
  links: {
    github: "https://github.com/ammakwarteng",
    linkedin: "", // paste your LinkedIn URL here
    email: "",    // optional: add a contact email if you want one public
  },

  // ---------- Roadmap: the big picture ----------
  // Each phase is a stepping stone. Mark the one you're on as "in-progress".
  roadmap: [
    {
      phase: "Phase 1",
      name: "IT Foundations & Help Desk",
      status: "in-progress",
      goal: "Land a help desk / service desk role, ideally at a hospital.",
      targetRoles: ["Help Desk Technician", "Hospital Service Desk Analyst", "Desktop Support"],
    },
    {
      phase: "Phase 2",
      name: "Healthcare IT & Epic",
      status: "todo",
      goal: "Move into an Epic team from inside the hospital. Epic certs are employer-sponsored, so getting hired first is the key.",
      targetRoles: ["Epic Security Coordinator", "Epic Analyst", "Clinical Applications Analyst"],
    },
    {
      phase: "Phase 3",
      name: "Identity & Access Management (IAM)",
      status: "todo",
      goal: "Use Epic security / access provisioning experience to step into IAM: least privilege, role-based access, HIPAA access audits.",
      targetRoles: ["IAM Analyst", "IAM Engineer", "Healthcare Security Analyst"],
    },
    {
      phase: "Phase 4",
      name: "DevSecOps (long-term)",
      status: "todo",
      goal: "Automate security in pipelines and the cloud. Identity skills carry straight over to cloud IAM.",
      targetRoles: ["Cloud Security Engineer", "DevSecOps Engineer"],
    },
  ],

  // ---------- Certifications ----------
  certifications: [
    { name: "TCM Security — Practical Help Desk", issuer: "TCM Security", status: "in-progress", date: "", link: "" },
    { name: "CompTIA A+", issuer: "CompTIA", status: "todo", date: "", link: "" },
    { name: "CompTIA Network+", issuer: "CompTIA", status: "todo", date: "", link: "" },
    { name: "CompTIA Security+", issuer: "CompTIA", status: "todo", date: "", link: "" },
    { name: "Microsoft SC-900 (Security, Compliance & Identity Fundamentals)", issuer: "Microsoft", status: "todo", date: "", link: "" },
    { name: "Epic Certification (employer-sponsored)", issuer: "Epic Systems", status: "todo", date: "", link: "" },
    { name: "Microsoft SC-300 (Identity & Access Administrator)", issuer: "Microsoft", status: "todo", date: "", link: "" },
  ],

  // ---------- Labs & hands-on practice ----------
  // category is used for the filter buttons on the site.
  labs: [
    { name: "Build a home lab (VirtualBox/VMware + Windows Server + Windows 10/11 client)", category: "Help Desk", status: "todo", link: "" },
    { name: "Set up Active Directory: users, groups, OUs, password resets", category: "Help Desk", status: "todo", link: "" },
    { name: "Create a ticketing system (osTicket or Freshdesk free) and log mock tickets", category: "Help Desk", status: "todo", link: "" },
    { name: "Group Policy: map drives, enforce screen lock, push a wallpaper", category: "Help Desk", status: "todo", link: "" },
    { name: "TryHackMe: Pre Security path", category: "Fundamentals", status: "todo", link: "" },
    { name: "Networking: subnetting practice + Wireshark packet capture", category: "Fundamentals", status: "todo", link: "" },
    { name: "Linux basics: OverTheWire Bandit levels 0–10", category: "Fundamentals", status: "todo", link: "" },
    { name: "Write a HIPAA Security Rule summary (admin, physical, technical safeguards)", category: "Healthcare", status: "todo", link: "" },
    { name: "Role-based access design for a mock clinic (nurse vs. doctor vs. billing)", category: "IAM", status: "todo", link: "" },
    { name: "Microsoft Entra ID free tenant: MFA, conditional access, user lifecycle", category: "IAM", status: "todo", link: "" },
    { name: "Git + GitHub basics: commit, branch, pull request", category: "DevSecOps", status: "in-progress", link: "" },
    { name: "GitHub Actions: run a secret scanner on a repo", category: "DevSecOps", status: "todo", link: "" },
  ],

  // ---------- Projects ----------
  projects: [
    {
      name: "Risk Register Excel Template",
      status: "done",
      description:
        "Excel risk register with Likelihood × Impact scoring, colour-coded High / Medium / Low levels, and a legend tab. The same risk-assessment approach used in HIPAA security risk analysis.",
      tags: ["GRC", "Risk Assessment", "Excel"],
      link: "https://github.com/ammakwarteng/risk-register",
    },
    {
      name: "This Portfolio Site",
      status: "in-progress",
      description: "A static site hosted on GitHub Pages that tracks my certs, labs, and projects.",
      tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      link: "https://github.com/ammakwarteng/risk-register",
    },
  ],

  // ---------- Journal / learning log ----------
  // Newest first. Short and honest entries are perfect.
  journal: [
    {
      date: "2026-11",
      title: "Starting the journey",
      body: "First semester of cybersecurity. Built a risk register, started TCM's help desk course, and set up this portfolio to track everything.",
    },
  ],
};
