'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const targetPage = this.dataset.navTo;

    for (let j = 0; j < pages.length; j++) {
      pages[j].classList.remove("active");
      navigationLinks[j].classList.remove("active");
    }

    this.classList.add("active");

    for (let j = 0; j < pages.length; j++) {
      if (targetPage === pages[j].dataset.page) {
        pages[j].classList.add("active");
        window.scrollTo(0, 0);
        break;
      }
    }
  });
}

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    // SỬA LỖI: Lấy giá trị từ data-filter-value
    let selectedValue = this.dataset.filterValue;
    // Cập nhật text của select box (phần này cần dịch)
    selectValue.textContent = this.textContent;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "tất cả") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    // SỬA LỖI: Lấy giá trị từ data-filter-value
    let selectedValue = this.dataset.filterValue;
    // Cập nhật text của select box (phần này cần dịch)
    selectValue.textContent = this.textContent;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}


// ===================================================================
// TÍNH NĂNG MỚI: CHẾ ĐỘ SÁNG/TỐI (DARK/LIGHT MODE)
// ===================================================================

const themeToggleBtn = document.getElementById("theme-toggle");

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  if (newTheme === "light") {
    themeToggleBtn.classList.add("active"); // "active" = light mode
  } else {
    themeToggleBtn.classList.remove("active"); // "inactive" = dark mode
  }
};

// Đặt theme đã lưu khi tải trang
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  let defaultTheme = "dark"; // Mặc định là dark

  if (savedTheme) {
    defaultTheme = savedTheme;
  } else if (prefersDark) {
    defaultTheme = "dark";
  } else {
    defaultTheme = "light"; // Nếu HĐH là light và chưa lưu gì
  }
  
  document.documentElement.setAttribute("data-theme", defaultTheme);
  if (defaultTheme === "light") {
    themeToggleBtn.classList.add("active");
  } else {
    themeToggleBtn.classList.remove("active");
  }

  // Khởi tạo ngôn ngữ đã lưu khi tải trang
  const savedLang = localStorage.getItem("language") || "vi";
  setLanguage(savedLang);
  if (savedLang === "en") {
    langToggleBtn.classList.add("active");
  } else {
    langToggleBtn.classList.remove("active");
  }
});

themeToggleBtn.addEventListener("click", toggleTheme);


// ===================================================================
// TÍNH NĂNG MỚI: ĐA NGÔN NGỮ (VI/EN)
// ===================================================================

const langToggleBtn = document.getElementById("lang-toggle");
const allTranslatableElements = document.querySelectorAll("[data-lang-key]");

// TỪ ĐIỂN DỊCH
const translations = {
  vi: {
    // Sidebar
    name: "Phat Tran Vu Hoa",
    jobTitle: "Sinh viên năm nhất",
    showContacts: "Hiện thông tin liên hệ",
    contactEmail: "Email",
    contactPhone: "Điện thoại",
    contactBirthday: "Ngày sinh",
    birthdayValue: "27 tháng 9, 2007",
    contactLocation: "Địa chỉ",
    locationValue: "Ngã Năm, Cần Thơ, Việt Nam",
    // Cài đặt
    theme: "Chế độ",
    light: "Sáng",
    dark: "Tối",
    language: "Ngôn ngữ",
    // Navbar
    navAbout: "Giới thiệu",
    navResume: "CV",
    navPortfolio: "Dự án",
    navBlog: "Báo cáo",
    navContact: "Liên hệ",
    // Giới thiệu
    aboutTitle: "About me",
    aboutDesc1: "Tôi là sinh viên năm nhất tại Trường Đại học Sư phạm Thành phố Hồ Chí Minh (HCMUE)",
    aboutDesc2: "Tôi có niềm đam mê mạnh mẽ với an ninh mạng, với sự quan tâm sâu sắc đến kiểm thử xâm nhập, săn lỗi bảo mật, và mạng & hệ thống.",
    whatIDo: "Những gì tôi đang làm",
    whatIDoTitle1: "Sinh viên",
    whatIDoDesc1: "Học Công nghệ Thông tin tại HCMUE",
    whatIDoTitle2: "Thành viên CLB",
    whatIDoDesc2: "Câu lạc bộ Tin học Khoa Công nghệ Thông tin",
    hardSkills: "Kỹ năng cứng",
    skillWeb: "Thiết kế web",
    skillPython: "Lập trình Python",
    skillCpp: "Lập trình C++",
    softSkills: "Kỹ năng mềm",
    skillComm: "Giao tiếp",
    skillProblem: "Giải quyết vấn đề",
    skillTime: "Quản lý thời gian",
    // CV
    education: "Học vấn",
    edu1Title: "Đại học Sư phạm TP.HCM",
    edu1Time: "2025 — Hiện tại",
    edu1Desc: "Đang học",
    edu2Title: "THPT Mai Thanh Thế",
    edu2Desc: "Tốt nghiệp loại Xuất sắc",
    edu3Title: "THCS Phường 1",
    edu3Desc: "4 năm Học sinh Xuất Sắc",
    edu4Title: "Tiểu học Ngã Năm",
    edu4Desc: "5 năm xếp loại Giỏi",
    experience: "Kinh nghiệm",
    exp1Title: "Các cuộc thi",
    exp1Desc: "Thành viên đội tuyển HSG Tin học",
    exp2Title: "Tự học An ninh mạng",
    exp2Time: "2024 — Hiện tại",
    exp2Desc: "Tự học kiểm thử xâm nhập và lập trình",
    // Dự án
    filterAll: "Tất cả",
    filterSystem: "Hệ thống & Mạng",
    filterWeb: "Thiết kế & Phát triển web",
    selectCategory: "Chọn danh mục",
    filterSystemMobile: "Hệ thống & Mạng",
    filterWebMobile: "Thiết kế & Phát triển web",
    project1Title: "Reset FCM Korea",
    project1Cat: "Thiết kế & Phát triển web",
    project2Title: "Portfolio Cá nhân",
    project2Cat: "Thiết kế & Phát triển web",
    project3Title: "Auto IP Changer",
    project3Cat: "Hệ thống & Mạng",
    // Báo cáo
    blog1Date: "15 tháng 10, 2025",
    blog1Title: "Document Object Model",
    blog1Desc: "Bài báo cáo API",
    // Liên hệ
    contactFormTitle: "Form liên hệ",
    formName: "Họ và tên",
    formEmail: "Địa chỉ email",
    formMessage: "Tin nhắn của bạn",
    formSend: "Gửi tin nhắn"
  },
  en: {
    // Sidebar
    name: "Phat Tran Vu Hoa",
    jobTitle: "First-year Student",
    showContacts: "Show Contacts",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactBirthday: "Birthday",
    birthdayValue: "September 27, 2007",
    contactLocation: "Location",
    locationValue: "Nga Nam, Can Tho, Vietnam",
    // Cài đặt
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    language: "Language",
    // Navbar
    navAbout: "About",
    navResume: "Resume",
    navPortfolio: "Portfolio",
    navBlog: "Blog",
    navContact: "Contact",
    // Giới thiệu
    aboutTitle: "About me",
    aboutDesc1: "I am a first-year student at Ho Chi Minh City University of Education (HCMUE).",
    aboutDesc2: "I have a strong passion for cybersecurity, with a deep interest in penetration testing, bug hunting, and networks & systems.",
    whatIDo: "What I'm doing",
    whatIDoTitle1: "Student",
    whatIDoDesc1: "Studying Information Technology at HCMUE",
    whatIDoTitle2: "Club Member",
    whatIDoDesc2: "IT Club of the Faculty of Information Technology",
    hardSkills: "Hard Skills",
    skillWeb: "Web Design",
    skillPython: "Python Programming",
    skillCpp: "C++ Programming",
    softSkills: "Soft Skills",
    skillComm: "Communication",
    skillProblem: "Problem Solving",
    skillTime: "Time Management",
    // CV
    education: "Education",
    edu1Title: "HCMUE",
    edu1Time: "2025 — Present",
    edu1Desc: "Studying",
    edu2Title: "Mai Thanh The High School",
    edu2Desc: "Graduated with Excellence",
    edu3Title: "Ward 1 Secondary School",
    edu3Desc: "4 years as an Excellent Student",
    edu4Title: "Nga Nam Primary School",
    edu4Desc: "5 years rated as Good",
    experience: "Experience",
    exp1Title: "Competitions",
    exp1Desc: "Member of the Informatics Olympiad team",
    exp2Title: "Cybersecurity Self-Study",
    exp2Time: "2024 — Present",
    exp2Desc: "Self-learning penetration testing and programming",
    // Dự án
    filterAll: "All",
    filterSystem: "System & Network",
    filterWeb: "Web Design & Development",
    selectCategory: "Select Category",
    filterSystemMobile: "System & Network",
    filterWebMobile: "Web Design & Development",
    project1Title: "Reset FCM Korea",
    project1Cat: "Web Design & Development",
    project2Title: "Personal Portfolio",
    project2Cat: "Web Design & Development",
    project3Title: "Auto IP Changer",
    project3Cat: "System & Network",
    // Báo cáo
    blog1Date: "October 15, 2025",
    blog1Title: "Document Object Model",
    blog1Desc: "API Report",
    // Liên hệ
    contactFormTitle: "Contact Form",
    formName: "Full name",
    formEmail: "Email address",
    formMessage: "Your message",
    formSend: "Send Message"
  }
};

const setLanguage = (lang) => {
  // Cập nhật tất cả các phần tử
  allTranslatableElements.forEach(element => {
    const key = element.dataset.langKey;
    const translation = translations[lang][key];

    if (translation) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    }
  });

  // Cập nhật lại giá trị cho select box (vì nó bị ghi đè)
  const currentFilterBtn = document.querySelector(".filter-item button.active");
  if(currentFilterBtn) {
    const key = currentFilterBtn.dataset.langKey;
    selectValue.textContent = translations[lang][key];
  }

  // Lưu ngôn ngữ
  localStorage.setItem("language", lang);
};

langToggleBtn.addEventListener("click", () => {
  const currentLang = localStorage.getItem("language") || "vi";
  const newLang = currentLang === "vi" ? "en" : "vi";

  setLanguage(newLang);

  if (newLang === "en") {
    langToggleBtn.classList.add("active"); // "active" = EN
  } else {
    langToggleBtn.classList.remove("active"); // "inactive" = VI
  }
});