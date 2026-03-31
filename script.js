let isArabic = false;

const translations = {
  en: {
    navHome: "Home",
    navStory: "My Story",
    navEducation: "Education",
    navSkills: "Skills",
    navProjects: "Projects",
    navRecognition: "Recognition",
    navContact: "Contact",

    heroLabel: "Computer Science Student",
    heroTitle: `Hi, I'm <span>Meshari Naif</span>`,
    heroDescription:
      "I am a Computer Science student at George Washington University with a strong interest in software engineering, backend systems, security, and building practical technology that solves real-world problems.",
    heroSubline:
      "Washington, DC • Software Development • Security • Problem Solving",
    viewProjectsBtn: "View Projects",
    resumeBtn: "Download Resume",

    storyLabel: "My Story",
    storyHeading: "From Foundation to Growth",
    storyP1:
      "My academic journey began at Mount St. Mary’s University, where I built a strong foundation in Computer Science and developed important skills in programming, systems, security, and problem solving.",
    storyP2:
      "During my time there, I studied courses that helped shape my technical background, including Introduction to Computer Science, Computer Security, Operating Systems, Computer Architecture, Data Structures and Algorithms, UNIX and Windows Operating Systems, and Calculus.",
    storyP3:
      "Outside the classroom, I was also active in campus and cultural events. One of the most meaningful experiences was helping represent Saudi National Day. During that experience, I met Dr. Timothy E. Trainor, the president of Mount St. Mary’s University, and he was happy to see the event and the way Saudi culture was being represented.",
    storyP4:
      "Later, I transferred to George Washington University to continue my Computer Science degree. That move marked a new chapter in my journey, where I began focusing more deeply on advanced coursework, team-based software development, and real-world technical projects.",
    storyCard1Title: "Where My Journey Started",
    storyCard1Text:
      "Mount St. Mary’s University was the place where I began building my academic foundation in Computer Science.",
    storyCard2Title: "Representing Saudi National Day",
    storyCard2Text:
      "This photo was taken with Dr. Timothy E. Trainor when I was taking part in a Saudi National Day event. It reflects an important part of my journey, where I represented my culture, met the president of the university, and took part in campus life in a meaningful way.",

    educationLabel: "Education",
    educationHeading: "Academic Progress",
    mountDate: "2022 – 2024",
    mountTitle: "Mount St. Mary’s University",
    mountDegree: "<strong>Computer Science Major • Cyber Security Minor</strong>",
    mountText1:
      "At Mount St. Mary’s, I built my technical foundation through coursework in computing, systems, and security. This was the beginning of my path in Computer Science and an important stage in my academic growth.",
    mountText2:
      "My studies there included courses such as Introduction to Computer Science I and II, Computer Security, Operating Systems, Computer Architecture, Data Structures and Algorithms, and Calculus I.",
    mountText3:
      "It was also a place where I grew personally, became more involved in events, and gained experiences that shaped the way I present myself as both a student and a future professional.",
    gwuDate: "2025 – Present",
    gwuTitle: "George Washington University",
    gwuDegree: "<strong>B.S. in Computer Science</strong>",
    gwuText1:
      "After transferring to George Washington University, I continued my Computer Science degree and moved into more advanced and project-based work. My completed coursework includes Software Engineering, Algorithms, Systems Programming, Linear Algebra, Capstone Design Project I, and Computer Game Design.",
    gwuText2:
      "My current path continues with courses such as Database Systems, Foundations of Computing, Capstone Design Project II, Machine Learning, and Calculus II.",
    gwuHighlight: "Expected Graduation: 2026",
    gwuStartTitle: "Starting at GWU",
    gwuStartText:
      "This photo shows when I received my George Washington University student ID. For me, it represents more than just a card. It marks the start of a new stage in my academic journey, where I continued growing in Computer Science and pushed myself toward more advanced technical work.",

    skillsLabel: "Skills",
    skillsHeading: "Technical Skills",
    skillJava: "Java",
    skillPython: "Python",
    skillJS: "JavaScript",
    skillHTML: "HTML / CSS",
    skillGit: "Git & GitHub",
    skillSecurity: "Security & Authentication",
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
    locasTech: "Web Development • UI Design • Sensor Data • Team Collaboration • GitHub",
    bankTitle: "Secure Mobile Banking Application",
    bankText1:
      "This project focused on building a secure mobile banking application with strong attention to privacy, safe access, and user protection. It was designed around the idea that users must be able to trust the system they are using.",
    bankText2:
      "I worked on security-related features such as two-factor authentication, encrypted user data, and backend communication through REST APIs. It gave me direct experience with how software security is applied in real systems, especially in financial technology.",
    bankText3:
      "This project reflects the area I am strongly interested in: building software that is both useful and secure. It strengthened my interest in backend development, secure design, and cybersecurity-focused work.",
    bankTech: "Java • Firebase • REST APIs • Authentication • 2FA • Encryption",

    recognitionLabel: "Recognition",
    recognitionHeading: "Awards & Achievements",
    recognitionTitle: "Embassy Recognition – Passport DC",
    recognitionText1:
      "This recognition reflects my contribution to community and cultural events and my role in representing Saudi culture in a professional setting. During this experience, I had the honor of meeting Ambassador Reema bint Bandar Al Saud.",
    recognitionText2:
      "I attended and supported the event each year in 2022, 2023, and 2024, and those experiences helped me grow in communication, leadership, responsibility, and public engagement.",

    contactLabel: "Contact",
    contactHeading: "Get In Touch",
    contactNameLabel: "Name:",
    contactEmailLabel: "Email:",
    contactUSLabel: "US Phone:",
    contactSaudiLabel: "Saudi Phone:",
    contactGitHubLabel: "GitHub:",
    contactLinkedInLabel: "LinkedIn:",
    contactLocationLabel: "Location:",
    contactLocation: "Virginia / Washington, DC",

    footerText: "© 2026 Meshari Naif. All rights reserved.",
    langToggle: "AR"
  },

  ar: {
    navHome: "الرئيسية",
    navStory: "قصتي",
    navEducation: "التعليم",
    navSkills: "المهارات",
    navProjects: "المشاريع",
    navRecognition: "الإنجازات",
    navContact: "التواصل",

    heroLabel: "طالب علوم حاسب",
    heroTitle: `مرحبًا، أنا <span>مشاري نايف</span>`,
    heroDescription:
      "أنا طالب علوم حاسب في جامعة جورج واشنطن، ولدي اهتمام قوي بهندسة البرمجيات، والأنظمة الخلفية، والأمن، وبناء تقنيات عملية تحل مشكلات واقعية.",
    heroSubline:
      "واشنطن العاصمة • تطوير البرمجيات • الأمن • حل المشكلات",
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
    mountDegree: "<strong>تخصص علوم حاسب • تخصص فرعي أمن سيبراني</strong>",
    mountText1:
      "في جامعة ماونت سانت ماري، بنيت أساسًا تقنيًا من خلال دراسة الحوسبة والأنظمة والأمن. وكانت هذه المرحلة بداية طريقي في علوم الحاسب ومرحلة مهمة في نموي الأكاديمي.",
    mountText2:
      "شملت دراستي هناك مقررات مثل مقدمة في علوم الحاسب 1 و2، وأمن الحاسب، وأنظمة التشغيل، وبنية الحاسب، وهياكل البيانات والخوارزميات، والتفاضل 1.",
    mountText3:
      "كما كانت أيضًا مرحلة تطورت فيها على المستوى الشخصي، وشاركت أكثر في الفعاليات، واكتسبت تجارب ساعدت في تشكيل شخصيتي كطالب ومهني مستقبلي.",
    gwuDate: "2025 – حتى الآن",
    gwuTitle: "جامعة جورج واشنطن",
    gwuDegree: "<strong>بكالوريوس في علوم الحاسب</strong>",
    gwuText1:
      "بعد انتقالي إلى جامعة جورج واشنطن، واصلت دراسة علوم الحاسب وانتقلت إلى أعمال أكثر تقدمًا واعتمادًا على المشاريع. تشمل المقررات التي أنهيتها هندسة البرمجيات، والخوارزميات، وبرمجة الأنظمة، والجبر الخطي، ومشروع التخرج الأول، وتصميم وبرمجة الألعاب.",
    gwuText2:
      "ويستمر مساري الحالي مع مقررات مثل أنظمة قواعد البيانات، وأسس الحوسبة، ومشروع التخرج الثاني، وتعلم الآلة، والتفاضل 2.",
    gwuHighlight: "التخرج المتوقع: 2026",
    gwuStartTitle: "البداية في GWU",
    gwuStartText:
      "تظهر هذه الصورة لحظة استلامي للبطاقة الجامعية في جامعة جورج واشنطن. وبالنسبة لي، فهي تمثل أكثر من مجرد بطاقة، بل بداية مرحلة جديدة في رحلتي الأكاديمية، ومرحلة واصلت فيها النمو في علوم الحاسب والتوجه نحو أعمال تقنية أكثر تقدمًا.",

    skillsLabel: "المهارات",
    skillsHeading: "المهارات التقنية",
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
    locasTech: "تطوير ويب • تصميم واجهات • بيانات حساسات • عمل جماعي • GitHub",
    bankTitle: "تطبيق بنكي آمن للهواتف",
    bankText1:
      "ركز هذا المشروع على بناء تطبيق بنكي آمن للهواتف مع اهتمام كبير بالخصوصية والوصول الآمن وحماية المستخدم. وتم تصميمه على أساس أن المستخدم يجب أن يثق بالنظام الذي يستخدمه.",
    bankText2:
      "عملت على خصائص أمنية مثل التحقق الثنائي، وتشفير بيانات المستخدم، والتواصل الخلفي عبر REST APIs. وقد منحتني هذه التجربة فهمًا مباشرًا لكيفية تطبيق الأمن البرمجي في الأنظمة الواقعية.",
    bankText3:
      "يعكس هذا المشروع المجال الذي أهتم به بشدة: بناء برمجيات مفيدة وآمنة في الوقت نفسه. كما عزز اهتمامي بالتطوير الخلفي والتصميم الآمن والعمل المرتبط بالأمن السيبراني.",
    bankTech: "Java • Firebase • REST APIs • Authentication • 2FA • Encryption",

    recognitionLabel: "الإنجازات",
    recognitionHeading: "الجوائز والإنجازات",
    recognitionTitle: "تكريم السفارة – Passport DC",
    recognitionText1:
      "يعكس هذا التكريم مساهمتي في الفعاليات المجتمعية والثقافية ودوري في تمثيل الثقافة السعودية بشكل مهني. وخلال هذه التجربة، كان لي شرف لقاء سمو السفيرة ريما بنت بندر آل سعود.",
    recognitionText2:
      "شاركت وحضرت هذا الحدث في الأعوام 2022 و2023 و2024، وقد ساعدتني هذه التجارب على التطور في التواصل والقيادة وتحمل المسؤولية والمشاركة المجتمعية.",

    contactLabel: "التواصل",
    contactHeading: "تواصل معي",
    contactNameLabel: "الاسم:",
    contactEmailLabel: "البريد الإلكتروني:",
    contactUSLabel: "رقم أمريكا:",
    contactSaudiLabel: "رقم السعودية:",
    contactGitHubLabel: "جيت هب:",
    contactLinkedInLabel: "لينكدإن:",
    contactLocationLabel: "الموقع:",
    contactLocation: "فرجينيا / واشنطن العاصمة",

    footerText: "© 2026 مشاري نايف. جميع الحقوق محفوظة.",
    langToggle: "EN"
  }
};

const ids = Object.keys(translations.en);

document.getElementById("langToggle").addEventListener("click", () => {
  isArabic = !isArabic;
  const lang = isArabic ? "ar" : "en";

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    if (
      id.includes("Title") ||
      id.includes("Degree") ||
      id === "heroTitle"
    ) {
      el.innerHTML = translations[lang][id];
    } else {
      el.textContent = translations[lang][id];
    }
  });

  if (lang === "ar") {
    document.body.classList.add("rtl");
    document.documentElement.lang = "ar";
  } else {
    document.body.classList.remove("rtl");
    document.documentElement.lang = "en";
  }
});