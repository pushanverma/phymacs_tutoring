/* ============================================================
   Central data store for the PhyMacs site.
   Every dummy/static value used by a component is exported from
   here so components stay presentation-only.
   ============================================================ */

export const CHIP_COLORS = [
  "var(--pm-chip-1)",
  "var(--pm-chip-2)",
  "var(--pm-chip-3)",
  "var(--pm-chip-4)",
  "var(--pm-chip-5)",
  "var(--pm-chip-6)",
];

export const TICKER_ITEMS = [
  "GCSE Maths · Enrolling now",
  "A-Level Physics · Limited slots",
  "Degree-Level Maths · Available",
  "Chemistry · Online worldwide",
  "Biology · Home tuition UK",
  "Free consultation · Book today",
];

export const NAV_LINKS = [
  { key: "home", label: "Home", to: "/" },
  { key: "about", label: "About Us", to: "/about" },
  {
    key: "services",
    label: "Our Services",
    to: "/services",
    children: [
      { key: "service-online", label: "Online Classes", to: "/services/online" },
      { key: "service-home", label: "Home Educates", to: "/services/home" },
    ],
  },
  { key: "teachers", label: "Know Our Teachers", to: "/teachers" },
  { key: "tutor", label: "Become a Tutor", to: "/become-a-tutor" },
  { key: "pricing", label: "Pricing", to: "/pricing" },
  { key: "contact", label: "Contact", to: "/contact" },
];

export const HERO_CONTENT = {
  badge: "Online Worldwide · In-person across the UK",
  titleLine1: "Master Science & Maths with",
  titleAccent: "PhyMacs",
  subtitle:
    "Expert one-to-one tuition in Physics, Chemistry, Maths and Biology — from Grade 6 to degree level.",
};

export const HERO_HIGHLIGHTS = [
  { icon: "chart", title: "Concept-First", body: "Understanding built before memorisation" },
  { icon: "handshake", title: "Personalised", body: "Plans shaped around every student's goals" },
  { icon: "trophy", title: "Proven Results", body: "Confidence that lasts beyond the exam" },
];

export const ABOUT_CONTENT = {
  heading: { lead: "More Than Tutors.", accent: "We're Partners in Progress." },
  paragraphs: [
    "At PhyMacs, we believe learning is not just about grades — it's about understanding, confidence, and curiosity that lasts. We teach Physics, Chemistry, Maths and Biology for Grades 6-12, GCSE, A-Level and up to degree-level Mathematics.",
    "Our tutors are highly qualified subject specialists with years of experience, including support for students with special educational needs such as ADHD. Whether online or in person, our approach is always personalised, patient and student-first.",
  ],
  mission: "To help every student build genuine understanding rather than just learn how to answer a question.",
  vision: "To be the tutoring partner families trust most — known for patience, expertise, and results that last.",
  pillarsIntro: "At the heart of PhyMacs lies a commitment to:",
};

export const PILLARS = [
  { icon: "handshake", title: "Patience & Care", body: "Every student moves at their own pace." },
  { icon: "user", title: "Personalised Teaching", body: "Plans built around individual goals." },
  { icon: "bulb", title: "Concept-First Learning", body: "Understanding before memorisation." },
  { icon: "trophy", title: "Long-Term Progress", body: "Confidence that lasts beyond exams." },
];

export const SERVICES = {
  online: {
    key: "online",
    slug: "online",
    title: "Online Classes",
    tagline: "Learn from anywhere in the world",
    icon: "globe",
    accent: CHIP_COLORS[0],
    intro:
      "Live, interactive one-to-one and small-group sessions delivered over a secure video classroom. Available to students worldwide, on any timezone.",
    features: [
      "Live interactive whiteboard & screen sharing",
      "Recorded sessions you can revisit anytime",
      "Digital notes, worksheets & past-paper banks",
      "Flexible scheduling across timezones",
      "Progress tracking and parent updates",
    ],
    steps: [
      { t: "Book a free consultation", d: "We assess the student's level and goals." },
      { t: "Get a tailored plan", d: "A personalised roadmap per subject and exam board." },
      { t: "Join live sessions", d: "Interactive classes with instant doubt-solving." },
      { t: "Track & improve", d: "Regular assessments and progress reports." },
    ],
  },
  home: {
    key: "home",
    slug: "home",
    title: "Home Educates",
    tagline: "Face-to-face tuition at your home",
    icon: "house",
    accent: CHIP_COLORS[1],
    intro:
      "In-person tutoring at the comfort of your home across the UK. Ideal for students who thrive with face-to-face guidance and a structured environment.",
    features: [
      "One-to-one attention in a familiar setting",
      "Physical notes, practice papers & apparatus",
      "Structured routine that builds discipline",
      "Direct parent-tutor communication",
      "Available across the UK (Abingdon & surrounding areas)",
    ],
    steps: [
      { t: "Enquire with your location", d: "Tell us your address and requirements." },
      { t: "Meet your tutor", d: "An introductory visit to align on goals." },
      { t: "Weekly home sessions", d: "Consistent in-person teaching at your home." },
      { t: "Review & progress", d: "Ongoing feedback and exam preparation." },
    ],
  },
};

export const SUBJECT_ROWS = [
  {
    title: "Physics",
    sub: "Understand the why, not just the formula.",
    icon: "atom",
    accent: CHIP_COLORS[0],
    body:
      "From mechanics to electromagnetism, we build intuition first and equations second — so students can attack unfamiliar problems with confidence.",
    points: [
      "Mechanics — forces, motion and energy from first principles",
      "Electricity & Magnetism — circuits, fields and induction",
      "Waves & Optics — light, sound and the behaviour of waves",
      "Modern Physics — quantum ideas and nuclear physics",
    ],
    cardTitle: "Concept-First Physics",
    cardSub: "Intuition built before the equations are introduced.",
  },
  {
    title: "Chemistry",
    sub: "Making reactions make sense.",
    icon: "flask",
    accent: CHIP_COLORS[1],
    body:
      "Organic, inorganic and physical chemistry taught through mechanisms and patterns rather than memorisation, with plenty of worked past-paper examples.",
    points: [
      "Organic Chemistry — mechanisms, not memorisation",
      "Physical Chemistry — energetics, rates and equilibria",
      "Inorganic Chemistry — periodicity and reactions",
      "Practical Skills — required practicals and exam technique",
    ],
    cardTitle: "Mechanism-Led Chemistry",
    cardSub: "Patterns and reasoning that transfer to any question.",
  },
  {
    title: "Mathematics",
    sub: "From GCSE right through to degree level.",
    icon: "compass",
    accent: CHIP_COLORS[2],
    body:
      "Algebra, calculus, trigonometry and geometry taught with countless examples drawn from different past papers and universities — up to degree level.",
    points: [
      "Algebra & Functions — the language of everything else",
      "Calculus — differentiation, integration and applications",
      "Trigonometry & Geometry — visual, intuitive approaches",
      "Degree-Level Support — research-oriented problem solving",
    ],
    cardTitle: "Maths to Degree Level",
    cardSub: "Rigorous, research-oriented problem solving.",
  },
  {
    title: "Biology",
    sub: "Connecting the systems of life.",
    icon: "dna",
    accent: CHIP_COLORS[5],
    body:
      "Botany, zoology and human physiology taught as connected systems, so students can reason across topics instead of learning them in isolation.",
    points: [
      "Cell Biology — structure, transport and division",
      "Human Physiology — the body as connected systems",
      "Genetics & Evolution — inheritance and variation",
      "Ecology — organisms and their environment",
    ],
    cardTitle: "Systems-Based Biology",
    cardSub: "Topics taught as one connected whole.",
  },
];

export const AUDIENCES = [
  {
    title: "GCSE Students",
    accent: CHIP_COLORS[0],
    icon: "user",
    sub: "Building the foundations that count.",
    body: "Structured support across Maths and the sciences, focused on closing gaps in fundamentals and building genuine exam confidence.",
  },
  {
    title: "A-Level Students",
    accent: CHIP_COLORS[1],
    icon: "chart",
    sub: "Stepping up to the next level.",
    body: "Deeper problem-solving practice with past papers from multiple exam boards, preparing students for university-level expectations.",
  },
  {
    title: "Degree-Level Students",
    accent: CHIP_COLORS[2],
    icon: "crown",
    sub: "Research-oriented and rigorous.",
    body: "Advanced Mathematics support that digs deep into complicated questions, drawing examples from different universities and past papers.",
  },
  {
    title: "Students with Special Needs",
    accent: CHIP_COLORS[3],
    icon: "heart",
    sub: "Patient, personalised, proven.",
    body: "Proven experience supporting children with ADHD, anxiety and other special educational needs, with patience and a personalised approach.",
  },
  {
    title: "Home-Educated Learners",
    accent: CHIP_COLORS[4],
    icon: "house",
    sub: "A full curriculum at home.",
    body: "In-person tuition across the UK for families educating at home, with a structured routine and physical resources provided.",
  },
  {
    title: "International Students",
    accent: CHIP_COLORS[5],
    icon: "globe",
    sub: "Any timezone, any country.",
    body: "Live online classes available worldwide, with flexible scheduling that works around your timezone and school commitments.",
  },
  {
    title: "11+ Entrance Exam Preparation",
    accent: CHIP_COLORS[0],
    icon: "compass",
    sub: "Maths, non-verbal & verbal reasoning.",
    body: "Track record of 100% success with past students securing places at Wilmington, Reading and Tunbridge Wells Grammar Schools.",
  },
  {
    title: "International Baccalaureate",
    accent: CHIP_COLORS[1],
    icon: "trophy",
    sub: "IB Maths, Physics & Chemistry.",
    body: "Track record of securing excellent grades in Maths, Physics and Chemistry IB.",
  },
];

export const DIFFERENTIATORS = [
  {
    title: "Expert Tutors",
    accent: CHIP_COLORS[0],
    icon: "eye",
    sub: "Qualified specialists, every subject.",
    body: "Our tutors are highly qualified subject specialists with years of experience, including support for students with special educational needs such as ADHD.",
  },
  {
    title: "Personalised Plans",
    accent: CHIP_COLORS[1],
    icon: "user",
    sub: "Built around the student.",
    body: "Every student gets a personalised roadmap per subject and exam board, with sessions adapted to solve the exact problems they're facing.",
  },
  {
    title: "Complete Resources",
    accent: CHIP_COLORS[3],
    icon: "book",
    sub: "Notes, papers and practice.",
    body: "Every student gets access to structured lecture notes, practice questions and past-paper banks tailored to their exam board.",
  },
  {
    title: "Proven Results",
    accent: CHIP_COLORS[2],
    icon: "trophy",
    sub: "Confidence that shows in grades.",
    body: "Students who arrived disengaged or anxious have gone on to sit their GCSEs with assurance and continue into college and university.",
  },
  {
    title: "Flexible Delivery",
    accent: CHIP_COLORS[4],
    icon: "clock",
    sub: "Online worldwide, in-person UK-wide.",
    body: "Online classes are available worldwide, and our Home Educates service offers face-to-face tuition across the UK.",
  },
  {
    title: "Genuine Care",
    accent: CHIP_COLORS[5],
    icon: "handshake",
    sub: "Tutors invested in your journey.",
    body: "A tutor who genuinely cares about their students' success — responsive, patient, and always willing to help.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Anonymous",
    subjects: "Maths, Physics, Chemistry & Biology",
    rating: 5,
    quote:
      "When my son started, he was initially reluctant but after some sessions he realised it was very helpful with his grasp of school work and he could get on with a range of complex science problems.",
    highlight: "He is flexible and makes learning something to look forward to.",
  },
  {
    name: "Sebastian Evans Reeves",
    subjects: "Degree-level Mathematics",
    rating: 5,
    quote:
      "I worked with Sudeep throughout my degree, and his support made a huge difference to both my understanding and confidence. He has a real talent for breaking down difficult concepts using countless examples from different past papers and universities, making sure you genuinely understand the material. He's incredibly responsive and always willing to adapt sessions. I couldn't recommend him highly enough.",
    highlight: "Teaches degree-level students in a research-oriented way.",
  },
  {
    name: "Zara Tearney",
    subjects: "Maths, Physics, Chemistry & Biology",
    rating: 5,
    quote:
      "Dr Sudeep Chatterji tutored my granddaughter for more than a year. When he started, she was not in school and completely disengaged from learning. His patience, kindness and skill enabled her to sit her GCSEs in Maths and Science and continue onto a college course. I would highly recommend him for anyone needing specialist one-to-one support.",
    highlight: "Expertise in handling children with special needs.",
  },
  {
    name: "Samuel Dooley",
    subjects: "Maths, Physics, Chemistry & Biology",
    rating: 5,
    quote:
      "Sudeep has been tutoring my son Sam in Maths and Science for the past three years. Sam struggled with a great deal of anxiety around learning, but under Sudeep's patient and clear tutorage he has grown in confidence and ability. He sat his GCSE Maths with assurance this Summer. I would recommend Sudeep very highly.",
    highlight: "Tackled my son's ADHD in a supportive, patient way.",
  },
  {
    name: "Naif",
    subjects: "Mathematics, Physics, Chemistry & Biology",
    rating: 5,
    quote:
      "My son is a good student, but his basics were not clear. With the help of lecture notes from PhyMacs, Naif's performance has improved significantly. He has now started taking real interest in his studies thanks to the motivation given by Sudeep.",
    highlight: "Highly educated and motivates students towards excellence.",
  },
];

export const NEWS_ITEMS = [
  { tag: "STUDY TIPS", title: "How to revise Physics without memorising formulas", excerpt: "Building intuition first makes equations far easier to recall under exam pressure. Here's the approach we use with every student.", accent: CHIP_COLORS[0] },
  { tag: "EXAM BOARDS", title: "AQA, Edexcel and OCR: what actually differs", excerpt: "The specifications overlap more than most students expect. We break down where the real differences lie and how to prepare.", accent: CHIP_COLORS[1] },
  { tag: "PARENTS", title: "Supporting an anxious learner through GCSEs", excerpt: "Confidence is built session by session. Practical guidance for parents helping a child who finds exams overwhelming.", accent: CHIP_COLORS[3] },
  { tag: "MATHS", title: "Making the jump from A-Level to degree-level maths", excerpt: "University maths asks different questions. Here's how we prepare students for that shift in expectation and rigour.", accent: CHIP_COLORS[2] },
];

export const FAQS = [
  { q: "Which subjects and grades do you teach?", a: "We teach Physics, Chemistry, Maths and Biology for Grades 6-13, GCSE, A-Level and up to degree-level Mathematics." },
  { q: "Do you offer both online and in-person classes?", a: "Yes. Online classes are available worldwide, and our Home Educates service offers face-to-face tuition across the UK." },
  { q: "How are the tutors qualified?", a: "Our tutors are highly qualified subject specialists with years of experience, including support for students with special educational needs such as ADHD." },
  { q: "How do I get started?", a: "Simply use the 'Let's Talk' enquiry form or contact us directly. We'll arrange a free consultation to understand your needs." },
  { q: "Do you provide study materials?", a: "Absolutely. Every student gets access to structured lecture notes, practice questions and past-paper banks tailored to their exam board." },
  { q: "Can you support students with special needs?", a: "Yes. We have proven experience supporting children with ADHD, anxiety and other special educational needs with patience and a personalised approach." },
];

export const PRICING_PLANS = [
  { name: "GCSE", price: "£40", period: "/session", features: ["Daily Homework", "Weekly worksheets", "Mock tests"], highlight: false },
  { name: "A-level", price: "£50", period: "/session", features: ["Daily Homework", "Weekly worksheets", "Mock tests"], highlight: false },
  { name: "Degree level", price: "£75", period: "/session", features: ["Practise sheets", "Weekly worksheets", "Regular mock exam"], highlight: false },
];

export const PRICING_NOTE = "Discount for multiple sessions (all of them)";

export const TEACHERS = [
  { name: "Dr Sudeep Chatterji", role: "Founder & Lead Tutor", subjects: "Physics · Maths · Chemistry · Biology", bio: "A research-oriented educator with a doctorate and years of experience teaching from Grade 6 to degree level. Known for breaking down complex concepts and supporting students with special educational needs.", initials: "SC", accent: CHIP_COLORS[0] },
  { name: "PhyMacs Science Team", role: "Subject Specialists", subjects: "Physics · Chemistry · Biology", bio: "A team of dedicated specialists focused on building strong fundamentals and exam confidence through structured notes and countless worked examples.", initials: "PS", accent: CHIP_COLORS[1] },
  { name: "PhyMacs Maths Team", role: "Mathematics Mentors", subjects: "Mathematics (GCSE - Degree)", bio: "Passionate maths mentors who make abstract topics intuitive using real past-paper problems from different universities and exam boards.", initials: "PM", accent: CHIP_COLORS[2] },
];

export const TUTOR_PERKS = [
  { icon: "chart", accent: CHIP_COLORS[0], t: "Competitive pay", d: "Fair, timely compensation for your expertise." },
  { icon: "clock", accent: CHIP_COLORS[1], t: "Flexible hours", d: "Teach online or in-person on a schedule that suits you." },
  { icon: "book", accent: CHIP_COLORS[2], t: "Ready-made resources", d: "Access our notes, worksheets and past-paper banks." },
  { icon: "heart", accent: CHIP_COLORS[3], t: "Real impact", d: "Help students build confidence and achieve their goals." },
];

export const SOCIALS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/phymacstutoring/", color: "#0A66C2", icon: "linkedin" },
  { name: "Instagram", href: "https://www.instagram.com/phymacstutoring/", color: "#E1306C", icon: "instagram" },
  { name: "WhatsApp", href: "https://wa.me/447404113025", color: "#25D366", icon: "whatsapp" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61593262797283", color: "#1877F2", icon: "facebook" },
];

export const CONTACT_INFO = {
  address: "5, The Chambers, Vineyard, Abingdon OX14 3PX, United Kingdom",
  mapSrc: "https://maps.google.com/maps?q=5%20The%20Chambers%2C%20Vineyard%2C%20Abingdon%20OX14%203PX&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

export const FOOTER_LINKS = {
  explore: [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Our Services" },
    { to: "/pricing", label: "Pricing" },
  ],
  learn: [
    { to: "/services/online", label: "Online Classes" },
    { to: "/services/home", label: "Home Educates" },
    { to: "/teachers", label: "Our Teachers" },
    { to: "/become-a-tutor", label: "Become a Tutor" },
  ],
};
