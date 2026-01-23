// Translation System
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            education: "Education",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            cv: "CV",
            contact: "Contact"
        },
        hero: {
            greeting: "Hello, I'm",
            role1: "IT Student",
            role2: "Web / APP Developer",
            role3: "System Developer",
            description: "Currently studying IT in Japan. Focused on building a strong career in IT sector.",
            btnProjects: "Projects",
            btnResume: "Resume(Japanese)",
            btnContact: "Get In Touch"
        },
        about: {
            title: "About Me",
            para1: "Hi! I'm Hemant, an IT student currently studying in Japan. I'm really into software development, especially web technologies and mobile app development. My goal is to become a skilled full-stack developer and build a strong career in IT.",
            para2: "When I'm not studying, I spend my time working on personal projects and practicing different programming languages. I enjoy learning new technologies and always try to improve my coding skills. Currently working with PHP for web development and Unity with C# for game development projects."
        },
        education: {
            title: "Education",
            activities: "Activities and societies:",
            grade: "Grade:",
            act1: "create different type of project || learn deeply Programming Language",
            act2: "Study N2 LEVEL of Japanese || Learn Japanese Culture ||",
            act3: "Fundamental of Computer || Programming Language",
            grade2: "Fundamental of Computer || Advance of Computer",
            act4: "Learn Basic & Diploma of computer || Web Design || Programming"
        },
        experience: {
            title: "Experience",
            viewPage: "View Page",
            location: "On-site",
            job1: {
                title: "Receptionist & Computer Instructor",
                resp1: "Front desk management, student inquiry handling, and daily administrative support",
                resp2: "Student registration, fee records, and basic office documentation management",
                resp3: "Taught Basic Computer Skills (MS Word, Excel, PowerPoint, Internet & Email)",
                resp4: "Conducted Computer Diploma Classes for beginner-level students",
                resp5: "Assisted students with practical computer usage and problem-solving"
            }
        },
        skills: {
            title: "Skills",
            webdev: "Web Development",
            jsdesc: "Frontend & Backend",
            pydesc: "Programming Language",
            phpdesc: "Server-Side Development",
            csharpdesc: "Object-Oriented Programming",
            git: "Version Control",
            flutterdesc: "Mobile App Development",
            nodedesc: "Backend Development",
            selflearning: "Self Learning"
        },
        projects: {
            title: "Projects",
            roomfinder: "A web application for Connect Room Owner and Room finder. Built with PHP and mysql for server-side functionality.",
            trading: "A trading website built with PHP. Features modern web development practices.",
            candy1: "A simple game created using Unity to practice C# scripting, game logic, and basic gameplay systems.",
            candy2: "This project is developed by me. Project name is Candycrush gaming app which is created from UNITY.",
            candy3: "This is a Unity-based game project created to practice game development concepts such as C# scripting, gameplay mechanics, and user interaction.",
            webapp: "Web App",
            tradingtag: "Trading",
            gamedev: "Game Development",
            mobilegame: "Mobile Game",
            viewgithub: "View on GitHub"
        },
        cv: {
            title: "Resume / CV",
            intro: "View or download my resume and career history documents.",
            resume: "(Resume)",
            resumeDesc: "Japanese Resume",
            career: "(Career History)",
            careerDesc: "Japanese Career History",
            view: "View",
            download: "Download",
            modalTitle: "CV Viewer"
        },
        contact: {
            title: "Get In Touch with me",
            intro: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
            email: "Email",
            location: "Location"
        },
        footer: {
            text: "Built with my passion and dedication."
        }
    },
    ja: {
        nav: {
            home: "ホーム",
            about: "私について",
            education: "学歴",
            experience: "経験",
            skills: "スキル",
            projects: "プロジェクト",
            cv: "履歴書",
            contact: "連絡先"
        },
        hero: {
            greeting: "こんにちは、私は",
            role1: "IT学生",
            role2: "Web / APP開発者",
            role3: "システム開発者",
            description: "現在、日本でITを勉強しています。IT分野でのキャリア構築に焦点を当てています。",
            btnProjects: "プロジェクト",
            btnResume: "履歴書（日本語）",
            btnContact: "お問い合わせ"
        },
        about: {
            title: "私について",
            para1: "こんにちは！私はヘマントです。現在、日本でITを勉強している学生です。ソフトウェア開発、特にWeb技術とモバイルアプリ開発に興味があります。目標は、スキルのあるフルスタック開発者になり、IT分野で強いキャリアを築くことです。",
            para2: "勉強していないときは、個人プロジェクトに取り組んだり、さまざまなプログラミング言語を練習したりしています。新しい技術を学ぶことを楽しみ、常にコーディングスキルを向上させようとしています。現在、Web開発にはPHP、ゲーム開発プロジェクトにはUnityとC#を使用しています。"
        },
        education: {
            title: "学歴",
            activities: "活動と社会:",
            grade: "成績:",
            act1: "さまざまなタイプのプロジェクトを作成 || プログラミング言語を深く学ぶ",
            act2: "日本語N2レベルを勉強 || 日本文化を学ぶ ||",
            act3: "コンピューターの基礎 || プログラミング言語",
            grade2: "コンピューターの基礎 || コンピューターの応用",
            act4: "コンピューターの基礎とディプロマを学ぶ || Webデザイン || プログラミング"
        },
        experience: {
            title: "経験",
            viewPage: "ページを見る",
            location: "オンサイト",
            job1: {
                title: "受付 & コンピューター講師",
                resp1: "フロントデスク管理、学生の問い合わせ対応、日常的な管理サポート",
                resp2: "学生登録、料金記録、基本的な事務書類管理",
                resp3: "基本的なコンピュータースキル（MS Word、Excel、PowerPoint、インターネット & メール）を教える",
                resp4: "初心者レベルの学生向けにコンピューターディプロマクラスを実施",
                resp5: "実践的なコンピューターの使用と問題解決で学生を支援"
            }
        },
        skills: {
            title: "スキル",
            webdev: "Web開発",
            jsdesc: "フロントエンド & バックエンド",
            pydesc: "プログラミング言語",
            phpdesc: "サーバーサイド開発",
            csharpdesc: "オブジェクト指向プログラミング",
            git: "バージョン管理",
            flutterdesc: "モバイルアプリ開発",
            nodedesc: "バックエンド開発",
            selflearning: "自己学習"
        },
        projects: {
            title: "プロジェクト",
            roomfinder: "ルームオーナーとルームファインダーを接続するWebアプリケーション。サーバーサイド機能にPHPとmysqlを使用して構築。",
            trading: "PHPで構築された取引ウェブサイト。モダンなWeb開発手法を特徴としています。",
            candy1: "C#スクリプト、ゲームロジック、基本的なゲームプレイシステムを練習するためにUnityを使用して作成されたシンプルなゲーム。",
            candy2: "これは私が開発したプロジェクトです。プロジェクト名はCandycrushゲームアプリで、UNITYから作成されました。",
            candy3: "C#スクリプト、ゲームプレイメカニクス、ユーザーインタラクションなどのゲーム開発概念を練習するために作成されたUnityベースのゲームプロジェクト。",
            webapp: "Webアプリ",
            tradingtag: "取引",
            gamedev: "ゲーム開発",
            mobilegame: "モバイルゲーム",
            viewgithub: "GitHubで見る"
        },
        cv: {
            title: "履歴書 / CV",
            intro: "履歴書と職務経歴書を閲覧またはダウンロードできます。",
            resume: "（履歴書）",
            resumeDesc: "日本語履歴書",
            career: "（職務経歴書）",
            careerDesc: "日本語職務経歴書",
            view: "閲覧",
            download: "ダウンロード",
            modalTitle: "CVビューア"
        },
        contact: {
            title: "お問い合わせ",
            intro: "新しいプロジェクト、創造的なアイデア、またはあなたのビジョンの一部になる機会について、いつでも議論する準備ができています。",
            email: "メール",
            location: "場所"
        },
        footer: {
            text: "情熱と献身で構築されました。"
        }
    },
    ne: {
        nav: {
            home: "घर",
            about: "मेरो बारेमा",
            education: "शिक्षा",
            experience: "अनुभव",
            skills: "कौशल",
            projects: "परियोजनाहरू",
            cv: "CV",
            contact: "सम्पर्क"
        },
        hero: {
            greeting: "नमस्ते, म हुँ",
            role1: "IT विद्यार्थी",
            role2: "Web / APP डेभलपर",
            role3: "सिस्टम डेभलपर",
            description: "हाल जापानमा IT पढिरहेको छु। IT क्षेत्रमा मजबुत करियर निर्माण गर्न केन्द्रित छु।",
            btnProjects: "परियोजनाहरू",
            btnResume: "रेजुमे (जापानी)",
            btnContact: "सम्पर्क गर्नुहोस्"
        },
        about: {
            title: "मेरो बारेमा",
            para1: "नमस्ते! म हेमन्त हुँ, हाल जापानमा IT पढिरहेको विद्यार्थी हुँ। म सफ्टवेयर विकासमा धेरै रुचि राख्छु, विशेष गरी वेब प्रविधि र मोबाइल एप विकास। मेरो लक्ष्य एक कुशल फुल-स्ट्याक डेभलपर बन्नु र IT क्षेत्रमा मजबुत करियर निर्माण गर्नु हो।",
            para2: "जब म पढाइ गर्दिन, म व्यक्तिगत परियोजनाहरूमा काम गर्न र विभिन्न प्रोग्रामिङ भाषाहरू अभ्यास गर्न समय बिताउँछु। म नयाँ प्रविधिहरू सिक्न रोचाउँछु र सधैं मेरो कोडिङ कौशल सुधार गर्न प्रयास गर्छु। हाल वेब विकासको लागि PHP र खेल विकास परियोजनाहरूको लागि Unity र C# संग काम गर्दैछु।"
        },
        education: {
            title: "शिक्षा",
            activities: "गतिविधिहरू र समाज:",
            grade: "ग्रेड:",
            act1: "विभिन्न प्रकारका परियोजनाहरू सिर्जना गर्नुहोस् || प्रोग्रामिङ भाषा गहिरो सिक्नुहोस्",
            act2: "जापानीको N2 स्तर अध्ययन गर्नुहोस् || जापानी संस्कृति सिक्नुहोस् ||",
            act3: "कम्प्युटरको आधारभूत || प्रोग्रामिङ भाषा",
            grade2: "कम्प्युटरको आधारभूत || कम्प्युटरको उन्नत",
            act4: "कम्प्युटरको आधारभूत र डिप्लोमा सिक्नुहोस् || वेब डिजाइन || प्रोग्रामिङ"
        },
        experience: {
            title: "अनुभव",
            viewPage: "पृष्ठ हेर्नुहोस्",
            location: "साइटमा",
            job1: {
                title: "रिसेप्शनिस्ट र कम्प्युटर प्रशिक्षक",
                resp1: "फ्रन्ट डेस्क व्यवस्थापन, विद्यार्थीको जिज्ञासा सम्हाल्ने, र दैनिक प्रशासनिक सहयोग",
                resp2: "विद्यार्थी दर्ता, शुल्क रेकर्ड, र आधारभूत कार्यालय कागजात व्यवस्थापन",
                resp3: "आधारभूत कम्प्युटर कौशल (MS Word, Excel, PowerPoint, इन्टरनेट र इमेल) सिकाउने",
                resp4: "सुरुवाती स्तरका विद्यार्थीहरूको लागि कम्प्युटर डिप्लोमा कक्षाहरू आयोजना गर्ने",
                resp5: "व्यावहारिक कम्प्युटर प्रयोग र समस्या समाधानमा विद्यार्थीहरूलाई सहयोग गर्ने"
            }
        },
        skills: {
            title: "कौशल",
            webdev: "वेब विकास",
            jsdesc: "फ्रन्टएन्ड र ब्याकएन्ड",
            pydesc: "प्रोग्रामिङ भाषा",
            phpdesc: "सर्भर-साइड विकास",
            csharpdesc: "अब्जेक्ट-ओरिएन्टेड प्रोग्रामिङ",
            git: "संस्करण नियन्त्रण",
            flutterdesc: "मोबाइल एप विकास",
            nodedesc: "ब्याकएन्ड विकास",
            selflearning: "आत्म-अध्ययन"
        },
        projects: {
            title: "परियोजनाहरू",
            roomfinder: "रूम मालिक र रूम फाइन्डर जोड्नको लागि वेब अनुप्रयोग। सर्भर-साइड कार्यक्षमताको लागि PHP र mysql संग निर्माण गरिएको।",
            trading: "PHP संग निर्माण गरिएको ट्रेडिङ वेबसाइट। आधुनिक वेब विकास अभ्यासहरूको विशेषताहरू।",
            candy1: "C# स्क्रिप्टिङ, खेल तर्क, र आधारभूत खेलप्ले प्रणालीहरू अभ्यास गर्न Unity प्रयोग गरेर सिर्जना गरिएको सरल खेल।",
            candy2: "यो परियोजना मैले विकास गरेको हुँ। परियोजनाको नाम Candycrush गेमिङ एप हो जुन UNITY बाट सिर्जना गरिएको छ।",
            candy3: "C# स्क्रिप्टिङ, खेलप्ले मेकानिक्स, र प्रयोगकर्ता अन्तरक्रिया जस्ता खेल विकास अवधारणाहरू अभ्यास गर्न सिर्जना गरिएको Unity-आधारित खेल परियोजना।",
            webapp: "वेब एप",
            tradingtag: "ट्रेडिङ",
            gamedev: "खेल विकास",
            mobilegame: "मोबाइल खेल",
            viewgithub: "GitHub मा हेर्नुहोस्"
        },
        cv: {
            title: "रेजुमे / CV",
            intro: "मेरो रेजुमे र करियर इतिहास कागजातहरू हेर्न वा डाउनलोड गर्नुहोस्।",
            resume: "(रेजुमे)",
            resumeDesc: "जापानी रेजुमे",
            career: "(करियर इतिहास)",
            careerDesc: "जापानी करियर इतिहास",
            view: "हेर्नुहोस्",
            download: "डाउनलोड गर्नुहोस्",
            modalTitle: "CV दर्शक"
        },
        contact: {
            title: "मसँग सम्पर्क गर्नुहोस्",
            intro: "म सधैं नयाँ परियोजनाहरू, रचनात्मक विचारहरू, वा तपाईंको दृष्टिकोणको भाग हुनको अवसरहरू छलफल गर्न खुला छु।",
            email: "इमेल",
            location: "स्थान"
        },
        footer: {
            text: "मेरो जुनून र समर्पण संग निर्माण गरिएको।"
        }
    }
};

let currentLang = localStorage.getItem('language') || 'en';

// Language switching function
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update language button with flag
    const langFlags = { 
        en: '🇺🇸',  // US Flag
        ja: '🇯🇵',  // Japan Flag
        ne: '🇳🇵'   // Nepal Flag
    };
    const flagElement = document.getElementById('current-flag');
    if (flagElement) {
        flagElement.innerHTML = langFlags[lang] || langFlags.en;
        flagElement.setAttribute('aria-label', `Language: ${lang === 'en' ? 'English' : lang === 'ja' ? 'Japanese' : 'Nepali'}`);
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];
        
        for (let k of keys) {
            translation = translation?.[k];
        }
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Close language dropdown
    document.querySelector('.language-selector').classList.remove('active');
}

// Language selector functionality
const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');
const langOptions = document.querySelectorAll('.lang-option');

if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelector('.language-selector').classList.toggle('active');
    });
    
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
            document.querySelector('.language-selector').classList.remove('active');
        }
    });
}

// Initialize language on page load
function initializeLanguage() {
    // Set initial flag
    const langFlags = { 
        en: '🇺🇸',  // US Flag
        ja: '🇯🇵',  // Japan Flag
        ne: '🇳🇵'   // Nepal Flag
    };
    const currentFlagEl = document.getElementById('current-flag');
    if (currentFlagEl) {
        const flag = langFlags[currentLang] || langFlags.en;
        currentFlagEl.innerHTML = flag;
        currentFlagEl.textContent = flag; // Fallback
        console.log('Flag initialized:', flag, 'for language:', currentLang);
    } else {
        console.error('Flag element not found!');
    }
    setLanguage(currentLang);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLanguage);
} else {
    initializeLanguage();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 25, 47, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 25, 47, 0.9)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('.section, .skill-card, .project-card, .education-card, .experience-card, .cv-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add active class to navigation links on scroll
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typing effect for hero subtitle
const typingElements = document.querySelectorAll('.typing-text');
let currentIndex = 0;

function rotateTyping() {
    typingElements.forEach((el, index) => {
        if (index === currentIndex) {
            el.style.opacity = '1';
        } else {
            el.style.opacity = '0.3';
        }
    });
    currentIndex = (currentIndex + 1) % typingElements.length;
}

// Start typing rotation
setInterval(rotateTyping, 2000);
rotateTyping(); // Initial call

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Update footer year
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.textContent = currentYear;
}

// Image Slideshow Functionality
const slideshowImages = document.querySelectorAll('.slideshow-image');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;
let slideshowInterval;

function showSlide(index) {
    // Remove active class from all images and indicators
    slideshowImages.forEach(img => img.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    
    // Add active class to current slide
    if (slideshowImages[index]) {
        slideshowImages[index].classList.add('active');
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
    
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideshowImages.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideshowImages.length) % slideshowImages.length;
    showSlide(currentSlide);
}

function startSlideshow() {
    slideshowInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}

// Initialize slideshow
if (slideshowImages.length > 0) {
    showSlide(0);
    startSlideshow();
    
    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopSlideshow();
            nextSlide();
            startSlideshow();
        });
    }
    
    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopSlideshow();
            prevSlide();
            startSlideshow();
        });
    }
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopSlideshow();
            showSlide(index);
            startSlideshow();
        });
    });
    
    // Pause on hover
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', stopSlideshow);
        slideshowContainer.addEventListener('mouseleave', startSlideshow);
    }
}

// CV Viewer Modal Functionality
const cvModal = document.getElementById('cv-modal');
const cvModalTitle = document.getElementById('cv-modal-title');
const cvIframe = document.getElementById('cv-iframe');
const cvViewButtons = document.querySelectorAll('.cv-view-btn');
const cvModalClose = document.querySelector('.cv-modal-close');

function openCVModal(cvFileName) {
    const cvNames = {
        en: {
            '履歴書_KHATRI_HEMANT.pdf': '履歴書 (Resume)',
            '職務経歴書_KHATRI_HEMANT.pdf': '職務経歴書 (Career History)'
        },
        ja: {
            '履歴書_KHATRI_HEMANT.pdf': '履歴書',
            '職務経歴書_KHATRI_HEMANT.pdf': '職務経歴書'
        },
        ne: {
            '履歴書_KHATRI_HEMANT.pdf': '履歴書 (रेजुमे)',
            '職務経歴書_KHATRI_HEMANT.pdf': '職務経歴書 (करियर इतिहास)'
        }
    };
    
    const title = cvNames[currentLang]?.[cvFileName] || cvNames.en[cvFileName] || 'CV Viewer';
    cvModalTitle.textContent = title;
    cvIframe.src = cvFileName;
    cvModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCVModal() {
    cvModal.classList.remove('active');
    cvIframe.src = '';
    document.body.style.overflow = '';
}

// Open CV modal when view button is clicked
cvViewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const cvFile = btn.getAttribute('data-cv');
        openCVModal(cvFile);
    });
});

// Close modal
if (cvModalClose) {
    cvModalClose.addEventListener('click', closeCVModal);
}

// Close modal when clicking outside
cvModal.addEventListener('click', (e) => {
    if (e.target === cvModal) {
        closeCVModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cvModal.classList.contains('active')) {
        closeCVModal();
    }
});