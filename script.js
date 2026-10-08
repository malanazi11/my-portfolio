/* ==========================================================================
   Content: translations (element id -> text). Arrays render as chip lists.
   Strings are static and trusted, so they are set with innerHTML, which keeps
   inline markup such as <strong> and <span> intact across language switches.
   ========================================================================== */
const RESUME = {
  en: "files/Meshari_Naif_Resume_EN_2026.pdf",
  ar: "files/Meshari_Naif_Resume_AR_2026.pdf"
};

// Client project copy is shared by the Career sub-block and the Projects card
const CLIENT_PROJECT = {
  en: {
    text: "Part of the Innovation Support team delivering a new, modern notification platform for stc, built on a microservices architecture to send customer notifications at large scale across channels such as SMS, push notifications, email and WhatsApp. I work on the gateway service that receives, authorizes and routes notification requests.",
    note: "Details limited due to client confidentiality."
  },
  ar: {
    text: "ضمن فريق Innovation Support في تطوير منصة إشعارات حديثة لشركة stc، مبنية على معمارية الخدمات المصغّرة (Microservices) لإرسال إشعارات العملاء على نطاق واسع عبر قنوات متعددة مثل الرسائل النصية والإشعارات الفورية والبريد الإلكتروني وواتساب. أعمل على خدمة البوابة التي تستقبل طلبات الإشعارات وتتحقق من صلاحياتها وتوجّهها.",
    note: "التفاصيل محدودة احترامًا لسرية العميل."
  },
  tech: ["Java", "Spring Boot", "Kafka", "Redis", "Microservices"]
};

const translations = {
  en: {
    navHome: "Home",
    navStory: "My Story",
    navEducation: "Education",
    navCareer: "Career",
    navSkills: "Skills",
    navProjects: "Projects",
    navRecognition: "Recognition",
    navContact: "Contact",

    heroLabel: "Software Engineer",
    heroTitle: `Hi, I'm <span>Meshari Naif</span>`,
    heroDescription:
      "I graduated from George Washington University with a B.S. in Computer Science in May 2026, and I am now a Software Engineer at Innovation Support in Riyadh, starting October 2026. I care about software engineering, building practical products, and technology that makes a real difference.",
    heroMeta1: "B.S. Computer Science, GWU",
    heroMeta2: "Software Engineer at Innovation Support",
    heroMeta3: "Riyadh, Saudi Arabia",
    viewProjectsBtn: "View Projects",
    resumeBtn: "Download Resume",

    storyLabel: "My Story",
    storyHeading: "From Foundation to Growth",
    storyP1:
      "My academic journey began at Mount St. Mary's University, where I built a strong foundation in Computer Science and developed important skills in programming, systems, security, and problem solving.",
    storyP2:
      "During my time there, I studied courses that helped shape my technical background, including Introduction to Computer Science, Computer Security, Operating Systems, Computer Architecture, Data Structures and Algorithms, UNIX and Windows Operating Systems, and Calculus.",
    storyP3:
      "Outside the classroom, I was also active in campus and cultural events. One of the most meaningful experiences was helping represent Saudi National Day. During that experience, I met Dr. Timothy E. Trainor, the president of Mount St. Mary's University, and he was happy to see the event and the way Saudi culture was being represented.",
    storyP4:
      "Later, I transferred to George Washington University to continue my Computer Science degree. That move marked a new chapter in my journey, where I began focusing more deeply on advanced coursework, team-based software development, and real-world technical projects.",
    storyCard1Title: "Where My Journey Started",
    storyCard1Text:
      "Mount St. Mary's University was the place where I began building my academic foundation in Computer Science.",
    storyCard2Title: "Representing Saudi National Day",
    storyCard2Text:
      "This photo was taken with Dr. Timothy E. Trainor when I was taking part in a Saudi National Day event. It reflects an important part of my journey, where I represented my culture, met the president of the university, and took part in campus life in a meaningful way.",

    educationLabel: "Education",
    educationHeading: "Academic Progress",
    mountDate: "2022 – 2024",
    mountTitle: "Mount St. Mary's University",
    mountDegree: "Computer Science Major • Cyber Security Minor",
    mountText1:
      "At Mount St. Mary's, I built my technical foundation through coursework in computing, systems, and security. This was the beginning of my path in Computer Science and an important stage in my academic growth.",
    mountText2:
      "My studies there included courses such as Introduction to Computer Science I and II, Computer Security, Operating Systems, Computer Architecture, Data Structures and Algorithms, and Calculus I.",
    mountText3:
      "It was also a place where I grew personally, became more involved in events, and gained experiences that shaped the way I present myself as both a student and a future professional.",
    gwuDate: "2025 – May 2026",
    gwuTitle: "George Washington University",
    gwuDegree: "B.S. in Computer Science",
    gwuText1:
      "After transferring to George Washington University, I completed my B.S. in Computer Science in May 2026. My coursework covered Software Engineering, Algorithms, Systems Programming, Linear Algebra, Database Systems, Machine Learning, Computer Game Design, and a two-semester Capstone Design Project.",
    gwuText2:
      "My senior design project, LoCAS, was entered in the Pelton Senior Design Competition at GWU's School of Engineering and Applied Science, where our team received recognition for the work we built together.",
    gwuHighlight: "Graduated · May 2026",
    gwuGradTitle: "Graduation · May 2026",
    gwuGradText:
      "Walking across the stage at George Washington University in May 2026 marked an important milestone in my journey. It reflected years of hard work, transferring schools, completing advanced Computer Science coursework, and building meaningful projects alongside an incredible team.",
    gwuGradP2:
      "I was especially honored and happy that Ambassador Reema bint Bandar Al Saud attended my graduation ceremony, making the moment even more memorable and meaningful to me and my family.",
    gwuGradP3:
      "This photo was taken during the graduation ceremony at GWU in May 2026.",
    gwuStartTitle: "Starting at GWU",
    gwuStartText:
      "This photo shows when I received my George Washington University student ID — the start of a new chapter that ended with graduation two years later.",

    careerLabel: "Career",
    careerHeading: "Professional Journey",

    innovationDate: "October 2026 – Present",
    innovationBadge: "Current Role",
    innovationTitle: "Innovation Support",
    innovationDegree: "Software Engineer",
    innovationLoc: "Riyadh, Saudi Arabia",
    innovationText1:
      "I joined Innovation Support in Riyadh in October 2026 as a Software Engineer on the company's core development team, developing and maintaining internal software systems.",
    innovationText2:
      "I contribute to the full software development lifecycle, from requirements gathering through deployment and support, and collaborate with cross-functional teams to deliver reliable, scalable software solutions.",
    innovationTech: ["Software Engineering", "Internal Systems", "Full SDLC", "Cross-functional Teams", "Riyadh"],
    clientLabel: "Current Client Project",
    clientTitle: "Enterprise Notification Platform — stc",
    clientText: CLIENT_PROJECT.en.text,
    clientTech: CLIENT_PROJECT.tech,
    clientNote: CLIENT_PROJECT.en.note,

    unstuckDate: "April 2026 – September 2026",
    unstuckTitle: "Unstuck Labs",
    unstuckDegree: "Junior Product Specialist",
    unstuckLoc: "Washington, D.C.",
    unstuckText1:
      "Started my professional journey at Unstuck Labs as a Junior Product Specialist in April 2026, working in a startup-focused environment centered around innovation, product development, and emerging technologies.",
    unstuckText2:
      "Working within a small and focused team has given me hands-on experience in product thinking, feature development, and the kind of fast-paced collaboration that defines the startup environment. It is my first professional role in tech, and it has already pushed me to grow in meaningful ways.",
    unstuckText3:
      "My work there covered product development, business development, social media content, and client outreach, including driving product development and client outreach for Summon, an AI-powered website builder that helps small businesses launch their online presence in minutes, and leading business development efforts focused on the Saudi market.",
    unstuckTech: ["Product Development", "Business Development", "Social Media Content", "Client Outreach", "AI", "Startup", "Team Collaboration", "Washington D.C."],

    albiladDate: "November 2024 – January 2025",
    albiladTitle: "Albilad Bank",
    albiladDegree: "Security Application Developer Intern",
    albiladLoc: "Riyadh, Saudi Arabia",
    albiladText1:
      "At Albilad Bank, I developed and tested security-focused internal applications within a regulated banking environment.",
    albiladText2:
      "I worked alongside senior engineers to identify vulnerabilities and implement secure coding practices across existing systems, and gained firsthand experience with enterprise software standards in a major Saudi financial institution.",
    albiladTech: ["Application Security", "Secure Coding", "Vulnerability Assessment", "Banking", "Riyadh"],

    skillsLabel: "Skills",
    skillsHeading: "Technical Skills",
    skillCatLang: "Languages",
    skillCatTools: "Tools &amp; Platforms",
    skillCatSecurity: "Security &amp; Data",
    skillJava: "Java",
    skillPython: "Python",
    skillJS: "JavaScript",
    skillHTML: "HTML / CSS",
    skillGit: "Git &amp; GitHub",
    skillSecurity: "Security &amp; Authentication",
    skillDB: "Databases (SQL)",

    projectsLabel: "Projects",
    projectsHeading: "Featured Work",
    locasTitle: "LoCAS – Greenhouse Monitoring System",
    locasText1:
      "LoCAS is a team-based greenhouse monitoring project built to help users track environmental conditions in real time. The system is designed to work with sensor data such as temperature and humidity and present that information through a web platform.",
    locasText2:
      "This project was especially meaningful because it was built as a team effort. I worked alongside Nate Dixon, Dylan O'Neill, and Thomas Schmidt, and the project gave me valuable experience in teamwork, communication, task organization, and contributing to a larger software system.",
    locasText3:
      "My contribution focused on improving the web experience, making the system easier to use, and helping organize how information is presented to users. This project helped me better understand real-world software development and building tools around practical needs.",
    locasTech: ["Web Development", "UI Design", "Sensor Data", "Team Collaboration", "GitHub"],
    bankTitle: "Secure Mobile Banking Application",
    bankText1:
      "This project focused on building a secure mobile banking application with strong attention to privacy, safe access, and user protection. It was designed around the idea that users must be able to trust the system they are using.",
    bankText2:
      "I worked on security-related features such as two-factor authentication, encrypted user data, and backend communication through REST APIs. It gave me direct experience with how software security is applied in real systems, especially in financial technology.",
    bankText3:
      "This project reflects the area I am strongly interested in: building software that is both useful and secure. It strengthened my interest in backend development, secure design, and cybersecurity-focused work.",
    bankTech: ["Java", "Firebase", "REST APIs", "Authentication", "2FA", "Encryption"],
    stcBadge: "Confidential · Client Project",
    stcTitle: "Enterprise Notification Platform (stc)",
    stcText: CLIENT_PROJECT.en.text,
    stcTech: CLIENT_PROJECT.tech,
    stcNote: CLIENT_PROJECT.en.note,

    recognitionLabel: "Recognition",
    recognitionHeading: "Awards &amp; Achievements",
    peltonDate: "May 2026",
    peltonBadge: "3rd Place",
    peltonTitle: "Pelton Senior Design Competition",
    peltonText1:
      "Our team received 3rd place recognition at the Pelton Senior Design Competition hosted by the George Washington University School of Engineering &amp; Applied Science for the LoCAS project — a localized AI and IoT monitoring system for smart greenhouses.",
    peltonText2:
      "The award was presented on May 13, 2026, by Dean Jason M. Zara. I built LoCAS alongside teammates Nate Dixon, Dylan O'Neill, and Thomas Schmidt as part of our senior capstone project.",
    embassyDates: "2022 · 2023 · 2024",
    recognitionTitle: "Embassy Recognition – Passport DC",
    recognitionText1:
      "This recognition reflects my contribution to community and cultural events and my role in representing Saudi culture in a professional setting. During this experience, I had the honor of meeting <strong>Ambassador Reema bint Bandar Al Saud</strong>.",
    recognitionText2:
      "I attended and supported the event each year in 2022, 2023, and 2024, and those experiences helped me grow in communication, leadership, responsibility, and public engagement.",

    contactLabel: "Contact",
    contactHeading: "Get In Touch",
    contactIntro: "Open to software engineering opportunities and collaborations. I usually reply within a day.",
    emailMeBtn: "Email Me",
    contactName: "Meshari Naif",
    contactRole: "Software Engineer · Riyadh, Saudi Arabia",
    contactEmailLabel: "Email",
    contactPhone1Label: "Saudi Phone 1",
    contactPhone2Label: "Saudi Phone 2",
    contactGitHubLabel: "GitHub",
    contactLinkedInLabel: "LinkedIn",
    contactLocationLabel: "Location",
    contactLocation: "Riyadh, Saudi Arabia",
    contactResumeLabel: "Resume",

    footerTagline: "Software Engineer · Riyadh, Saudi Arabia",
    footerLinksTitle: "Quick Links",
    footerResumeTitle: "Resume",
    footStory: "My Story",
    footEducation: "Education",
    footCareer: "Career",
    footSkills: "Skills",
    footProjects: "Projects",
    footRecognition: "Recognition",
    footContact: "Contact",
    footResumeEN: "English Resume (PDF)",
    footResumeAR: "Arabic Resume (PDF)",
    footerText: "© 2026 Meshari Naif. All rights reserved.",
    skipLink: "Skip to content",
    langToggle: "AR"
  },

  ar: {
    navHome: "الرئيسية",
    navStory: "قصتي",
    navEducation: "التعليم",
    navCareer: "المسيرة المهنية",
    navSkills: "المهارات",
    navProjects: "المشاريع",
    navRecognition: "الإنجازات",
    navContact: "التواصل",

    heroLabel: "مهندس برمجيات",
    heroTitle: `مرحبًا، أنا <span>مشاري نايف</span>`,
    heroDescription:
      "تخرجت من جامعة جورج واشنطن بدرجة البكالوريوس في علوم الحاسب في مايو 2026، وأعمل الآن مهندس برمجيات في Innovation Support بالرياض منذ أكتوبر 2026. أهتم بهندسة البرمجيات، وبناء منتجات عملية، والتقنية التي تُحدث فرقًا حقيقيًا.",
    heroMeta1: "بكالوريوس علوم حاسب، GWU",
    heroMeta2: "مهندس برمجيات في Innovation Support",
    heroMeta3: "الرياض، المملكة العربية السعودية",
    viewProjectsBtn: "عرض المشاريع",
    resumeBtn: "تحميل السيرة الذاتية",

    storyLabel: "قصتي",
    storyHeading: "من البداية إلى التطور",
    storyP1:
      "بدأت رحلتي الأكاديمية في جامعة ماونت سانت ماري، حيث بنيت أساسًا قويًا في علوم الحاسب وطورت مهارات مهمة في البرمجة والأنظمة والأمن وحل المشكلات.",
    storyP2:
      "خلال تلك الفترة، درست مقررات ساعدت في تشكيل خلفيتي التقنية، مثل مقدمة في علوم الحاسب، وأمن الحاسب، وأنظمة التشغيل، وبنية الحاسب، وهياكل البيانات والخوارزميات، وأنظمة يونكس وويندوز، والتفاضل.",
    storyP3:
      "وخارج القاعة الدراسية، كنت نشطًا أيضًا في الفعاليات الجامعية والثقافية. ومن أكثر التجارب التي أعتز بها مشاركتي في تمثيل اليوم الوطني السعودي. وخلال تلك التجربة، التقيت بالدكتور تيموثي إي. ترينور، رئيس جامعة ماونت سانت ماري، وكان سعيدًا برؤية الفعالية وطريقة تمثيل الثقافة السعودية.",
    storyP4:
      "بعد ذلك، انتقلت إلى جامعة جورج واشنطن لإكمال دراسة علوم الحاسب. وكانت هذه الخطوة بداية فصل جديد في رحلتي، حيث بدأت أركز بشكل أكبر على المقررات المتقدمة، والعمل الجماعي في تطوير البرمجيات، والمشاريع التقنية الواقعية.",
    storyCard1Title: "بداية الرحلة",
    storyCard1Text:
      "كانت جامعة ماونت سانت ماري المكان الذي بدأت فيه بناء أساس أكاديمي قوي في علوم الحاسب.",
    storyCard2Title: "تمثيل اليوم الوطني السعودي",
    storyCard2Text:
      "التقطت هذه الصورة مع الدكتور تيموثي إي. ترينور أثناء مشاركتي في فعالية تمثل اليوم الوطني السعودي. وهي تعكس جزءًا مهمًا من رحلتي، حيث مثلت ثقافتي والتقيت برئيس الجامعة وشاركت في الحياة الجامعية بشكل مميز.",

    educationLabel: "التعليم",
    educationHeading: "التقدم الأكاديمي",
    mountDate: "2022 – 2024",
    mountTitle: "جامعة ماونت سانت ماري",
    mountDegree: "تخصص علوم حاسب • تخصص فرعي أمن سيبراني",
    mountText1:
      "في جامعة ماونت سانت ماري، بنيت أساسًا تقنيًا من خلال دراسة الحوسبة والأنظمة والأمن. وكانت هذه المرحلة بداية طريقي في علوم الحاسب ومرحلة مهمة في نموي الأكاديمي.",
    mountText2:
      "شملت دراستي هناك مقررات مثل مقدمة في علوم الحاسب 1 و2، وأمن الحاسب، وأنظمة التشغيل، وبنية الحاسب، وهياكل البيانات والخوارزميات، والتفاضل 1.",
    mountText3:
      "كما كانت أيضًا مرحلة تطورت فيها على المستوى الشخصي، وشاركت أكثر في الفعاليات، واكتسبت تجارب ساعدت في تشكيل شخصيتي كطالب ومهني مستقبلي.",
    gwuDate: "2025 – مايو 2026",
    gwuTitle: "جامعة جورج واشنطن",
    gwuDegree: "بكالوريوس في علوم الحاسب",
    gwuText1:
      "بعد انتقالي إلى جامعة جورج واشنطن، أتممت درجة البكالوريوس في علوم الحاسب في مايو 2026. غطّت دراستي مجالات هندسة البرمجيات، والخوارزميات، وبرمجة الأنظمة، والجبر الخطي، وأنظمة قواعد البيانات، وتعلم الآلة، وتصميم الألعاب، ومشروع التخرج على مدار فصلين دراسيين.",
    gwuText2:
      "مشروع التخرج الخاص بي، LoCAS، شارك في مسابقة Pelton للتصميم الهندسي في كلية الهندسة والعلوم التطبيقية بجامعة GWU، حيث حصل فريقنا على المركز الثالث.",
    gwuHighlight: "تخرّج · مايو 2026",
    gwuGradTitle: "التخرج · مايو 2026",
    gwuGradText:
      "المشي عبر مسرح جامعة جورج واشنطن في مايو 2026 كان محطة مهمة في رحلتي. جاء ذلك ثمرةً لسنوات من العمل الجاد، والانتقال بين الجامعتين، وإتمام مقررات علوم الحاسب المتقدمة، وبناء مشاريع ذات معنى مع فريق رائع.",
    gwuGradP2:
      "كنت ممتنًا ومسرورًا بشكل خاص بحضور السفيرة ريما بنت بندر آل سعود حفل تخرجي، مما جعل اللحظة أكثر تميزًا ومعنى بالنسبة لي ولعائلتي.",
    gwuGradP3:
      "هذه الصورة التُقطت خلال حفل التخرج في جامعة GWU في مايو 2026.",
    gwuStartTitle: "البداية في GWU",
    gwuStartText:
      "تظهر هذه الصورة لحظة استلامي للبطاقة الجامعية في جامعة جورج واشنطن — بداية فصل جديد انتهى بالتخرج بعد عامين.",

    careerLabel: "المسيرة المهنية",
    careerHeading: "رحلتي المهنية",

    innovationDate: "أكتوبر 2026 – حتى الآن",
    innovationBadge: "الدور الحالي",
    innovationTitle: "Innovation Support",
    innovationDegree: "مهندس برمجيات",
    innovationLoc: "الرياض، المملكة العربية السعودية",
    innovationText1:
      "انضممت إلى Innovation Support في الرياض في أكتوبر 2026 بوصفي مهندس برمجيات ضمن فريق التطوير الأساسي في الشركة، حيث أعمل على تطوير وصيانة الأنظمة البرمجية الداخلية.",
    innovationText2:
      "أساهم في دورة تطوير البرمجيات الكاملة من جمع المتطلبات وحتى النشر والدعم، وأتعاون مع فرق متعددة التخصصات لتقديم حلول برمجية موثوقة وقابلة للتوسع.",
    innovationTech: ["هندسة البرمجيات", "الأنظمة الداخلية", "دورة التطوير الكاملة", "فرق متعددة التخصصات", "الرياض"],
    clientLabel: "مشروع العميل الحالي",
    clientTitle: "منصة الإشعارات المؤسسية — stc",
    clientText: CLIENT_PROJECT.ar.text,
    clientTech: CLIENT_PROJECT.tech,
    clientNote: CLIENT_PROJECT.ar.note,

    unstuckDate: "أبريل 2026 – سبتمبر 2026",
    unstuckTitle: "Unstuck Labs",
    unstuckDegree: "متخصص منتجات مبتدئ",
    unstuckLoc: "واشنطن العاصمة",
    unstuckText1:
      "بدأت مسيرتي المهنية في Unstuck Labs بوصفي متخصصًا مبتدئًا في المنتجات في أبريل 2026، أعمل في بيئة شركة ناشئة تتمحور حول الابتكار وتطوير المنتجات والتقنيات الناشئة.",
    unstuckText2:
      "العمل ضمن فريق صغير ومركّز منحني خبرة عملية في التفكير المنتجي وتطوير الميزات والتعاون السريع الوتيرة الذي يميّز بيئة الشركات الناشئة. هذا هو دوري المهني الأول في مجال التقنية، وقد دفعني بالفعل للنمو بطرق ذات معنى حقيقي.",
    unstuckText3:
      "شمل عملي هناك تطوير المنتجات، وتطوير الأعمال، ومحتوى التواصل الاجتماعي، والتواصل مع العملاء، ومن ذلك قيادة تطوير المنتج والتواصل مع العملاء لمنصة Summon، وهي أداة تعتمد على الذكاء الاصطناعي لمساعدة الشركات الصغيرة على إطلاق حضورها الرقمي في دقائق، وقيادة جهود تطوير الأعمال الموجهة نحو السوق السعودية.",
    unstuckTech: ["تطوير المنتجات", "تطوير الأعمال", "محتوى التواصل الاجتماعي", "التواصل مع العملاء", "الذكاء الاصطناعي", "الشركات الناشئة", "العمل الجماعي", "واشنطن العاصمة"],

    albiladDate: "نوفمبر 2024 – يناير 2025",
    albiladTitle: "بنك البلاد",
    albiladDegree: "متدرب مطور تطبيقات أمنية",
    albiladLoc: "الرياض، المملكة العربية السعودية",
    albiladText1:
      "في بنك البلاد، طورت واختبرت تطبيقات داخلية تركز على الأمن ضمن بيئة مصرفية منظمة.",
    albiladText2:
      "عملت مع مهندسين متخصصين لتحديد الثغرات وتطبيق ممارسات البرمجة الآمنة على الأنظمة القائمة، واكتسبت خبرة مباشرة بمعايير البرمجيات المؤسسية في إحدى كبرى المؤسسات المالية السعودية.",
    albiladTech: ["أمن التطبيقات", "البرمجة الآمنة", "تقييم الثغرات", "القطاع المصرفي", "الرياض"],

    skillsLabel: "المهارات",
    skillsHeading: "المهارات التقنية",
    skillCatLang: "لغات البرمجة",
    skillCatTools: "الأدوات والمنصات",
    skillCatSecurity: "الأمن والبيانات",
    skillJava: "جافا",
    skillPython: "بايثون",
    skillJS: "جافاسكربت",
    skillHTML: "HTML / CSS",
    skillGit: "Git و GitHub",
    skillSecurity: "الأمن والمصادقة",
    skillDB: "قواعد البيانات (SQL)",

    projectsLabel: "المشاريع",
    projectsHeading: "أبرز الأعمال",
    locasTitle: "LoCAS – نظام مراقبة البيت الزراعي",
    locasText1:
      "LoCAS هو مشروع جماعي لمراقبة البيئة داخل البيت الزراعي في الوقت الحقيقي. يعتمد النظام على بيانات الحساسات مثل درجة الحرارة والرطوبة ويعرض هذه المعلومات عبر منصة ويب.",
    locasText2:
      "كان هذا المشروع مهمًا بالنسبة لي لأنه بُني كعمل جماعي. عملت مع نيت ديكسون، وديلان أونيل، وتوماس شميت، وقد منحني المشروع خبرة قيمة في العمل الجماعي، والتواصل، وتنظيم المهام، والمساهمة في نظام برمجي أكبر.",
    locasText3:
      "ركزت مساهمتي على تحسين تجربة الويب، وجعل النظام أسهل في الاستخدام، والمساعدة في تنظيم طريقة عرض المعلومات للمستخدمين. وقد ساعدني هذا المشروع على فهم تطوير البرمجيات الواقعي بشكل أفضل.",
    locasTech: ["تطوير ويب", "تصميم واجهات", "بيانات حساسات", "عمل جماعي", "GitHub"],
    bankTitle: "تطبيق بنكي آمن للهواتف",
    bankText1:
      "ركز هذا المشروع على بناء تطبيق بنكي آمن للهواتف مع اهتمام كبير بالخصوصية والوصول الآمن وحماية المستخدم. وتم تصميمه على أساس أن المستخدم يجب أن يثق بالنظام الذي يستخدمه.",
    bankText2:
      "عملت على خصائص أمنية مثل التحقق الثنائي، وتشفير بيانات المستخدم، والتواصل الخلفي عبر REST APIs. وقد منحتني هذه التجربة فهمًا مباشرًا لكيفية تطبيق الأمن البرمجي في الأنظمة الواقعية.",
    bankText3:
      "يعكس هذا المشروع المجال الذي أهتم به بشدة: بناء برمجيات مفيدة وآمنة في الوقت نفسه. كما عزز اهتمامي بالتطوير الخلفي والتصميم الآمن والعمل المرتبط بالأمن السيبراني.",
    bankTech: ["Java", "Firebase", "REST APIs", "Authentication", "2FA", "Encryption"],
    stcBadge: "سري · مشروع عميل",
    stcTitle: "منصة الإشعارات المؤسسية (stc)",
    stcText: CLIENT_PROJECT.ar.text,
    stcTech: CLIENT_PROJECT.tech,
    stcNote: CLIENT_PROJECT.ar.note,

    recognitionLabel: "الإنجازات",
    recognitionHeading: "الجوائز والإنجازات",
    peltonDate: "مايو 2026",
    peltonBadge: "المركز الثالث",
    peltonTitle: "مسابقة Pelton للتصميم الهندسي",
    peltonText1:
      "حصل فريقنا على المركز الثالث في مسابقة Pelton للتصميم الهندسي التي نظّمتها كلية الهندسة والعلوم التطبيقية في جامعة جورج واشنطن، عن مشروع LoCAS — نظام مراقبة ذكي موضعي للبيوت الزراعية يعتمد على الذكاء الاصطناعي وإنترنت الأشياء.",
    peltonText2:
      "قُدِّمت الجائزة في 13 مايو 2026 من قِبَل العميد جيسون م. زارا. بنيت LoCAS مع زملائي نيت ديكسون وديلان أونيل وتوماس شميت كجزء من مشروع التخرج.",
    embassyDates: "2022 · 2023 · 2024",
    recognitionTitle: "تكريم السفارة – Passport DC",
    recognitionText1:
      "يعكس هذا التكريم مساهمتي في الفعاليات المجتمعية والثقافية ودوري في تمثيل الثقافة السعودية بشكل مهني. وخلال هذه التجربة، كان لي شرف لقاء <strong>سمو السفيرة ريما بنت بندر آل سعود</strong>.",
    recognitionText2:
      "شاركت وحضرت هذا الحدث في الأعوام 2022 و2023 و2024، وقد ساعدتني هذه التجارب على التطور في التواصل والقيادة وتحمل المسؤولية والمشاركة المجتمعية.",

    contactLabel: "التواصل",
    contactHeading: "تواصل معي",
    contactIntro: "منفتح على فرص هندسة البرمجيات والتعاون. أرد عادةً خلال يوم واحد.",
    emailMeBtn: "راسلني",
    contactName: "مشاري نايف",
    contactRole: "مهندس برمجيات · الرياض، المملكة العربية السعودية",
    contactEmailLabel: "البريد الإلكتروني",
    contactPhone1Label: "الجوال 1",
    contactPhone2Label: "الجوال 2",
    contactGitHubLabel: "جيت هب",
    contactLinkedInLabel: "لينكدإن",
    contactLocationLabel: "الموقع",
    contactLocation: "الرياض، المملكة العربية السعودية",
    contactResumeLabel: "السيرة الذاتية",

    footerTagline: "مهندس برمجيات · الرياض، المملكة العربية السعودية",
    footerLinksTitle: "روابط سريعة",
    footerResumeTitle: "السيرة الذاتية",
    footStory: "قصتي",
    footEducation: "التعليم",
    footCareer: "المسيرة المهنية",
    footSkills: "المهارات",
    footProjects: "المشاريع",
    footRecognition: "الإنجازات",
    footContact: "التواصل",
    footResumeEN: "السيرة الذاتية بالإنجليزية (PDF)",
    footResumeAR: "السيرة الذاتية بالعربية (PDF)",
    footerText: "© 2026 مشاري نايف. جميع الحقوق محفوظة.",
    skipLink: "تخطَّ إلى المحتوى",
    langToggle: "EN"
  }
};

/* UI strings used for attributes, toasts and dynamic labels */
const uiText = {
  en: {
    langToggle: "Switch to Arabic",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    copyEmail: "Copy email",
    copyPhone1: "Copy Saudi phone number 1",
    copyPhone2: "Copy Saudi phone number 2",
    openLinkedIn: "Open LinkedIn profile in a new tab",
    openGitHub: "Open GitHub profile in a new tab",
    albiladAlt: "Bank Albilad, Riyadh",
    copied: "Copied!",
    copyFailed: "Couldn't copy. Please copy it manually.",
    close: "Close",
    toTop: "Back to top",
    viewCert: "View certificate",
    resumeVersions: "Resume versions",
    focusAreas: "Focus areas",
    technologies: "Technologies"
  },
  ar: {
    langToggle: "التبديل إلى الإنجليزية",
    menuOpen: "فتح القائمة",
    menuClose: "إغلاق القائمة",
    copyEmail: "نسخ البريد الإلكتروني",
    copyPhone1: "نسخ رقم الجوال 1",
    copyPhone2: "نسخ رقم الجوال 2",
    openLinkedIn: "فتح حساب لينكدإن في نافذة جديدة",
    openGitHub: "فتح حساب جيت هب في نافذة جديدة",
    albiladAlt: "بنك البلاد، الرياض",
    copied: "تم النسخ!",
    copyFailed: "تعذّر النسخ، يرجى النسخ يدويًا.",
    close: "إغلاق",
    toTop: "العودة إلى الأعلى",
    viewCert: "عرض الشهادة",
    resumeVersions: "نسخ السيرة الذاتية",
    focusAreas: "مجالات التركيز",
    technologies: "التقنيات"
  }
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function currentLang() {
  return document.documentElement.lang === "ar" ? "ar" : "en";
}

function t(key) {
  return uiText[currentLang()][key];
}

/* ==========================================================================
   Language toggle
   ========================================================================== */
function renderChips(el, items) {
  el.innerHTML = items.map(item => `<li class="chip">${item}</li>`).join("");
}

function applyLanguage(lang) {
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";

  const strings = translations[lang];
  Object.keys(strings).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const value = strings[id];
    if (Array.isArray(value)) renderChips(el, value);
    else el.innerHTML = value;
  });

  // Resume button follows the language; the EN/AR pills mark the current one
  document.querySelectorAll(".js-resume-current").forEach(a => { a.href = RESUME[lang]; });
  document.querySelectorAll(".resume-switch a").forEach(a => {
    a.classList.toggle("is-current", a.getAttribute("lang") === lang);
  });

  // Attribute labels
  document.getElementById("langToggle").setAttribute("aria-label", t("langToggle"));
  document.getElementById("scrollTopBtn").setAttribute("aria-label", t("toTop"));
  document.getElementById("lightboxClose").setAttribute("aria-label", t("close"));
  document.getElementById("resumeSwitchLabel").textContent = t("resumeVersions");
  document.querySelectorAll(".js-copy, .js-open").forEach(btn => {
    btn.setAttribute("aria-label", t(btn.dataset.labelKey));
    btn.setAttribute("title", t(btn.dataset.labelKey));
  });
  document.getElementById("albiladImg").alt = t("albiladAlt");
  document.querySelectorAll(".js-view-cert").forEach(el => { el.textContent = t("viewCert"); });
  document.querySelectorAll(".js-lightbox").forEach(btn => {
    const title = document.getElementById(btn.dataset.captionId);
    btn.setAttribute("aria-label", `${t("viewCert")}: ${title ? title.textContent : ""}`);
  });
  document.querySelectorAll('.chips[aria-label]').forEach(list => {
    const isTech = ["locasTech", "bankTech", "clientTech", "stcTech"].includes(list.id);
    list.setAttribute("aria-label", t(isTech ? "technologies" : "focusAreas"));
  });

  const menuBtn = document.getElementById("mobileMenuBtn");
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-label", t(isOpen ? "menuClose" : "menuOpen"));
}

function initLanguageToggle() {
  const toggle = document.getElementById("langToggle");

  // The inline <head> script already set lang/dir from storage; sync the content
  if (currentLang() === "ar") applyLanguage("ar");
  else applyLanguage("en");

  toggle.addEventListener("click", () => {
    const next = currentLang() === "ar" ? "en" : "ar";
    applyLanguage(next);
    try { localStorage.setItem("lang", next); } catch (e) { /* storage unavailable */ }
  });
}

/* ==========================================================================
   Navigation: scrolled state + mobile menu
   ========================================================================== */
function initNav() {
  const header = document.getElementById("siteHeader");
  const menu = document.getElementById("navLinks");
  const btn = document.getElementById("mobileMenuBtn");
  const desktop = window.matchMedia("(min-width: 1180px)");

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function setOpen(open, { restoreFocus = false } = {}) {
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", t(open ? "menuClose" : "menuOpen"));
    menu.classList.toggle("is-open", open);
    header.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    if (open) {
      // Flush styles so the menu is visible (and focusable) before moving focus
      const first = menu.querySelector("a");
      void menu.offsetHeight;
      if (first) first.focus({ preventScroll: true });
    } else if (restoreFocus) {
      btn.focus();
    }
  }

  const isOpen = () => btn.getAttribute("aria-expanded") === "true";

  btn.addEventListener("click", () => setOpen(!isOpen()));

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => { if (isOpen()) setOpen(false); });
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && isOpen()) setOpen(false, { restoreFocus: true });
  });

  // Outside click: anything that isn't a menu link or the toggle button
  document.addEventListener("click", e => {
    if (!isOpen()) return;
    if (btn.contains(e.target) || e.target.closest("#navLinks li")) return;
    setOpen(false);
  });

  desktop.addEventListener("change", e => { if (e.matches && isOpen()) setOpen(false); });
}

/* ==========================================================================
   Active nav link based on the section in view
   ========================================================================== */
function initActiveLink() {
  const links = Array.from(document.querySelectorAll(".nav__link"));
  const byId = new Map(links.map(link => [link.getAttribute("href").slice(1), link]));
  const sections = Array.from(byId.keys()).map(id => document.getElementById(id)).filter(Boolean);
  if (!("IntersectionObserver" in window) || !sections.length) return;

  const setActive = id => {
    links.forEach(link => {
      const active = link === byId.get(id);
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   Scroll reveal (fade + slide, staggered per batch, runs once)
   ========================================================================== */
function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window) || prefersReducedMotion.matches) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting);
    visible.forEach((entry, i) => {
      entry.target.style.setProperty("--rd", `${Math.min(i, 6) * 90}ms`);
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
      // Drop the delay once revealed so hover transitions aren't delayed
      setTimeout(() => entry.target.style.removeProperty("--rd"), 1400);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  items.forEach(el => observer.observe(el));
}

/* ==========================================================================
   Scroll progress bar
   ========================================================================== */
function initProgressBar() {
  const bar = document.getElementById("progressBar");
  let ticking = false;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    bar.style.transform = `scaleX(${progress})`;
    ticking = false;
  };

  update();
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener("resize", update);
}

/* ==========================================================================
   Back to top
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById("scrollTopBtn");
  const onScroll = () => btn.classList.toggle("is-visible", window.scrollY > 600);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? "auto" : "smooth" });
    document.getElementById("home").focus({ preventScroll: true });
  });
}

/* ==========================================================================
   Certificate lightbox (Esc closes, focus trapped, focus restored)
   ========================================================================== */
function initLightbox() {
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");
  let lastTrigger = null;

  function open(trigger) {
    lastTrigger = trigger;
    const thumb = trigger.querySelector("img");
    const title = document.getElementById(trigger.dataset.captionId);
    img.src = trigger.dataset.full;
    img.alt = thumb ? thumb.alt : "";
    caption.textContent = title ? title.textContent : "";
    box.hidden = false;
    document.body.classList.add("menu-open");
    requestAnimationFrame(() => box.classList.add("is-open"));
    closeBtn.focus();
  }

  function close() {
    box.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    const finish = () => { box.hidden = true; img.src = ""; };
    if (prefersReducedMotion.matches) finish();
    else setTimeout(finish, 300);
    if (lastTrigger) lastTrigger.focus();
  }

  document.querySelectorAll(".js-lightbox").forEach(trigger => {
    trigger.addEventListener("click", () => open(trigger));
  });

  closeBtn.addEventListener("click", close);
  box.addEventListener("click", e => { if (e.target === box || e.target.classList.contains("lightbox__figure")) close(); });

  box.addEventListener("keydown", e => {
    if (e.key === "Escape") { e.preventDefault(); close(); }
    // Only one focusable control inside, so Tab stays on it
    if (e.key === "Tab") { e.preventDefault(); closeBtn.focus(); }
  });
}

/* ==========================================================================
   Copy buttons + toast
   ========================================================================== */
let toastTimer;

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function legacyCopy(text) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  let ok = false;
  try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
  document.body.removeChild(area);
  return ok;
}

// Clipboard API first; fall back to execCommand if it's missing, refuses or stalls
function copyText(text) {
  const fallback = () => (legacyCopy(text) ? Promise.resolve() : Promise.reject(new Error("copy failed")));
  if (!navigator.clipboard || !window.isSecureContext) return fallback();
  const stall = new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), 800));
  return Promise.race([navigator.clipboard.writeText(text), stall]).catch(fallback);
}

function initCopyButtons() {
  document.querySelectorAll(".js-copy").forEach(btn => {
    const use = btn.querySelector("use");
    btn.addEventListener("click", () => {
      copyText(btn.dataset.copy)
        .then(() => {
          showToast(t("copied"));
          use.setAttribute("href", "#i-check");
          setTimeout(() => use.setAttribute("href", "#i-copy"), 1800);
        })
        .catch(() => showToast(t("copyFailed")));
    });
  });
}

/* ==========================================================================
   Boot
   ========================================================================== */
document.getElementById("home").setAttribute("tabindex", "-1");
initLanguageToggle();
initNav();
initActiveLink();
initReveal();
initProgressBar();
initBackToTop();
initLightbox();
initCopyButtons();
