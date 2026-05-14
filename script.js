const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");
const copyButton = document.querySelector("[data-copy-email]");
const projectCards = document.querySelectorAll("[data-project]");
const projectModal = document.querySelector("#project-modal");
const projectTitle = document.querySelector("#project-detail-title");
const projectPeriod = document.querySelector("#project-detail-period");
const projectSummary = document.querySelector("#project-detail-summary");
const projectGrid = document.querySelector("#project-detail-grid");
const projectCloseItems = document.querySelectorAll("[data-close-project]");

const projectDetails = {
    "company-kalman": {
        title: "(주)칼만",
        period: "연구개발 & 서비스 · System Team · 2024.03 - 재직 중",
        summary: "Robot System Engineer로서 원전, 항만, 수중 환경에서 운용되는 특수 목적 로봇의 전장 설계, 임베디드 제어, ROS 통신, 시스템 통합, 현장 운용과 납품 프로젝트를 수행했습니다.",
        sections: [
            {
                title: "4족보행 로봇",
                items: [
                    "배터리 전압 체크 회로 및 소프트웨어 개발",
                    "ROS 기반 배터리 전압 통신과 ADC 42V 전압 측정 구현",
                    "Fusion 360 + Eagle CAD 기반 Schematic 및 Artwork 설계",
                    "압력센서 기반 풋 제작, 풋 압력 측정 소프트웨어와 ROS 통신 처리",
                    "고리원전 1호기 제염작업 현장 투입 및 한국수력원자력 납품 참여"
                ]
            },
            {
                title: "비행로봇 · 드론",
                items: [
                    "고리원전 1호기 해체 제염작업 로봇 개발",
                    "Vision/LiDAR 기반 Indoor Drone 개발",
                    "STM32 MCU 기반 방사능 측정 센서 모듈 회로 및 펌웨어 제작",
                    "AprilTag 자동 착륙, 지정 경로 비행, 3D SLAM 기반 자율비행 기능 개발",
                    "원전 제염작업 및 인천항만공사 창고 내부 도면 제작 현장 운용 참여"
                ]
            },
            {
                title: "복수기 로봇",
                items: [
                    "Motor + CAN 통신 기반 제어 프로그램 제작",
                    "조이스틱/스위치 연결 PCB 회로 설계, Artwork, PCB 제작",
                    "컨트롤러 PCB 데이터 통신 기반 모터 제어",
                    "컨트롤 박스 전장 구성과 롤러/벨트형 펌프 제작 및 테스트",
                    "고리3발전소 검사 현장 운용 직접 참여"
                ]
            },
            {
                title: "해수 배관 로봇",
                items: [
                    "3축 조이스틱, 스위치, 엔코더 연결 PCB 제작",
                    "STM32 기반 조이스틱·스위치·엔코더 통신 구현",
                    "멀티 로봇 컨트롤 박스와 전장 시스템 통합 구성",
                    "새울, 한빛, 월성, 한울 발전소 해수배관 현장 운용 참여",
                    "한국수력원자력 납품 프로젝트 참여"
                ]
            },
            {
                title: "수중로봇",
                items: [
                    "ArduPilot 기반 제어 시스템 구축",
                    "6DoF 제어 시스템 및 커스텀 MCU 보드 제어 코드 작성",
                    "수중 로봇 하드웨어 제작과 제어 소프트웨어 통합",
                    "Robot Arm 연동 제어 시스템 구성",
                    "신한울1발 CWDC 관로 검사, 태안서부발전 PoC 운용 직접 참여"
                ]
            }
        ]
    },
    "company-robot-sports": {
        title: "(사)대한로봇스포츠협회",
        period: "운영 기획 · 선임연구원 & 대리 · 2022.11 - 2023.08",
        summary: "국제로봇올림피아드 대회 운영과 종목 연구개발을 담당하며 드론, AI 자율주행, 창의 종목의 규정, 테스트 로봇, 교육 운영 체계를 기획했습니다.",
        sections: [
            {
                title: "대회 기획 및 운영",
                items: [
                    "2022년 11월부터 대회 운영 총괄 및 인재양성 전략 재수립",
                    "세부 규정 제작과 협력 교육기관 대상 교육 진행",
                    "드론미로, 드론댄스, Creative Idea 종목 신설",
                    "AI 자율주행 종목 리뉴얼 작업 진행",
                    "전 종목 테스트용 로봇 직접 제작 및 검증"
                ]
            },
            {
                title: "국제로봇올림피아드",
                items: [
                    "2023년 1월 제24회 국제로봇올림피아드 세계대회 경기 운영 총괄",
                    "11개국 1222명 참가 규모의 세계대회 운영",
                    "2023년 8월 제25회 국제로봇올림피아드 한국대회 경기 운영 총괄",
                    "1450명 참가 규모의 한국대회 운영"
                ]
            },
            {
                title: "기록 프로그램 및 웹 기획",
                items: [
                    "경기 집계 정확성과 신속성 향상을 위한 기록 프로그램 유지보수",
                    "홈페이지 및 웹 인트라넷 리뉴얼 기획",
                    "로봇, AI, 드론 기초교육 방향 개선"
                ]
            }
        ]
    },
    "company-knut": {
        title: "한국교통대학교 전자공학과 인공지능 자동차 연구실",
        period: "석사과정 · 라이다 센서 연구 · 2022.02 - 2022.08",
        summary: "Lv.4 자율주행자동차의 라이다 센서 데이터를 활용해 객체 검출, 지면 제거, 지면 검출, 차선 검출 알고리즘을 개발하고 검증했습니다.",
        sections: [
            {
                title: "라이다 센서 연구 및 개발",
                items: [
                    "Lv.4 자율주행자동차에 라이다를 사용한 객체 검출 연구",
                    "라이다 센서 객체 검출 알고리즘 검증",
                    "라이다 센서 지면 제거 및 지면 검출 알고리즘 개발 및 검증",
                    "라이다 센서 차선 검출 알고리즘 개발 및 검증",
                    "자동차공학회 논문 포스터 진행"
                ]
            },
            {
                title: "Fail-Operational 연구",
                items: [
                    "1년차 연구 진행",
                    "차량 센서 고장 시 대처 방안 확인",
                    "자율주행 센서 안정성 관점의 검증 업무 수행"
                ]
            }
        ]
    },
    "company-hands-on": {
        title: "(주)핸즈온테크놀러지",
        period: "현장실습 인턴 · 2017.06 - 2017.07",
        summary: "교육용 로봇 키트와 대회 테스트 로봇 제작을 보조하며 LEGO Mindstorms, Tetrix, RobotC, LabVIEW 기반의 로봇 제작과 소프트웨어 개발을 경험했습니다.",
        sections: [
            {
                title: "교육용 키트 개발 보조",
                items: [
                    "LEGO Mindstorms 기반 초·중·고 교육용 키트 개발 보조",
                    "PITSCO Tetrix 기반 대학생 교육용 키트 개발 보조",
                    "스마트로봇경진대회 규정에 맞는 키트 제작",
                    "WRO 대회용 소프트웨어 제작 및 테스트",
                    "블록코딩, RobotC, LabVIEW 기반 소프트웨어 제작"
                ]
            },
            {
                title: "대회 테스트 로봇 제작",
                items: [
                    "2017 스마트로봇경진대회 테스트용 로봇 제작",
                    "LEGO Mindstorms를 이용해 대회 규정에 맞는 로봇 제작",
                    "RobotC와 블록코딩 기반 제어 소프트웨어 제작"
                ]
            },
            {
                title: "WRO 대회 보조",
                items: [
                    "대회 운영 업무 보조",
                    "PITSCO Tetrix 기반 대학부 로봇 제작",
                    "LabVIEW 기반 이미지 처리 및 제어 소프트웨어 제작"
                ]
            }
        ]
    },
    robster: {
        title: "수중로봇",
        period: "(주)칼만 · 2024.03 - 재직 중",
        summary: "ArduPilot 기반 제어 시스템과 커스텀 MCU 보드를 이용해 6DoF 수중로봇 제어, Robot Arm 연동, 현장 운용까지 수행한 수중 작업 로봇 프로젝트입니다.",
        sections: [
            {
                title: "전장 및 시스템",
                items: [
                    "ArduPilot 기반 제어 시스템 구축",
                    "6DoF 제어 시스템 및 제어 코드 작성",
                    "커스텀 MCU 보드를 이용한 로봇 제어 코드 작성"
                ]
            },
            {
                title: "제작 및 통합",
                items: [
                    "수중 로봇 하드웨어 제작",
                    "제어 시스템 및 소프트웨어 통합",
                    "Robot Arm과 연동 가능한 제어 시스템 및 소프트웨어 통합"
                ]
            },
            {
                title: "운용",
                items: [
                    "신한울1발 1호기 CWDC 관로 검사 진행 직접 참여",
                    "태안서부발전 PoC 개념확보를 위한 운용 직접 참여"
                ]
            },
            {
                title: "납품",
                items: [
                    "한국수력원자력 납품 프로젝트 참여"
                ]
            }
        ]
    },
    quadruped: {
        title: "4족보행 로봇",
        period: "(주)칼만 · System Team",
        summary: "고리원전 제염작업에 투입된 4족보행 로봇의 배터리 전압 측정, ROS 통신, 풋 압력 측정, 회로 설계와 현장 운용을 담당했습니다.",
        sections: [
            {
                title: "전장 및 시스템",
                items: [
                    "배터리 전압 체크 회로 및 소프트웨어 개발",
                    "ROS 기반 배터리 전압 통신",
                    "ADC를 활용한 42V 배터리 전압 측정, 오차 ±0.5V",
                    "Fusion 360 + Eagle CAD 기반 Schematic 및 Artwork 설계",
                    "고리원전 1호기 제염작업용 로봇 소프트웨어 개발 및 적용"
                ]
            },
            {
                title: "제작",
                items: [
                    "압력센서를 활용한 풋 제작",
                    "SLS 3D 프린팅 기반 풋 제작",
                    "풋 압력 측정 소프트웨어 개발 및 ROS 통신 처리"
                ]
            },
            {
                title: "운용",
                items: [
                    "고리원전 1호기 제염작업 현장 투입"
                ]
            },
            {
                title: "납품",
                items: [
                    "한국수력원자력 납품"
                ]
            }
        ]
    },
    drone: {
        title: "비행로봇 · Indoor Drone",
        period: "(주)칼만 · 비행로봇/드론",
        summary: "원전 해체 제염작업과 실내 지도 제작을 위한 비행로봇으로, Vision/LiDAR 기반 자율비행, AprilTag 자동 착륙, 방사능 측정 센서 모듈을 개발했습니다.",
        sections: [
            {
                title: "전장 및 시스템",
                items: [
                    "고리원전 1호기 해체 제염작업 로봇 개발",
                    "Vision system을 이용한 Indoor Drone 개발",
                    "STM32 MCU 기반 방사능 측정 센서 모듈 회로 및 Schematic 설계",
                    "TEVISO BG51-OEM 센서 적용 및 STM32 펌웨어 제작",
                    "Lidar Sensor를 이용한 Indoor Drone 개발"
                ]
            },
            {
                title: "자율비행 기능",
                items: [
                    "AprilTag 기반 자동 착륙",
                    "지정된 경로 비행 소프트웨어 개발",
                    "3D SLAM 알고리즘 적용"
                ]
            },
            {
                title: "운용",
                items: [
                    "고리원전 1호기 해체 제염작업 운용 직접 참여",
                    "인천항만공사 드론을 이용한 창고 내부 도면 제작 프로젝트 직접 참여",
                    "Vision + LiDAR 기반 실내 도면 제작"
                ]
            },
            {
                title: "납품",
                items: [
                    "한국수력원자력 납품"
                ]
            }
        ]
    },
    condenser: {
        title: "복수기 로봇",
        period: "(주)칼만 · 복수기 검사 로봇",
        summary: "Motor + CAN 기반 제어, 조이스틱/스위치 PCB, 컨트롤 박스 전장, 롤러·벨트형 펌프 제작을 통해 검사 로봇의 구동 시스템을 구성했습니다.",
        sections: [
            {
                title: "전장 및 시스템",
                items: [
                    "Motor + CAN 통신 기반 제어 프로그램 제작",
                    "조이스틱/스위치 연결 PCB 회로 설계 및 아트웍, PCB 제작",
                    "컨트롤러 PCB와 데이터 통신을 통한 모터 제어",
                    "컨트롤 박스 전장 구성 및 PCB 제작"
                ]
            },
            {
                title: "제작",
                items: [
                    "롤러 펌프 제작",
                    "벨트형 펌프 제작 및 테스트",
                    "자체 제작 벨트형 펌프를 납품 로봇에 장착 후 실제 납품 진행"
                ]
            },
            {
                title: "운용",
                items: [
                    "고리3발전소에서 검사 진행 직접 참여"
                ]
            }
        ]
    },
    pyper: {
        title: "해수 배관 로봇 Pyper",
        period: "(주)칼만 · 해수 배관 로봇",
        summary: "멀티 로봇 제어를 위한 컨트롤 박스와 STM32 기반 입력 통신을 구성하고, 여러 원전 해수배관 현장 운용에 직접 참여했습니다.",
        sections: [
            {
                title: "전장 및 시스템",
                items: [
                    "멀티 로봇 컨트롤 박스 구성",
                    "3축 조이스틱, 스위치, 엔코더 연결 PCB 제작",
                    "STM32를 활용한 조이스틱·스위치·엔코더 통신",
                    "전장 및 시스템 통합 구성"
                ]
            },
            {
                title: "제작",
                items: [
                    "전장 하드웨어 제작",
                    "컨트롤 박스 제작"
                ]
            },
            {
                title: "운용",
                items: [
                    "멀티 로봇 제어 환경에서 운용 직접 참여",
                    "새울 1발 2호기 ESW-A",
                    "한빛 1발 1호기 ESC-A",
                    "월성 3발 1호기 ESW-B",
                    "한울 1발 1호기 가동 중 원전 긴급 투입",
                    "한울 5호기 ESW-A/기계부배관 직접 참여",
                    "한울 5호기 ESW-B/기계부배관 직접 참여"
                ]
            },
            {
                title: "납품",
                items: [
                    "한국수력원자력 납품"
                ]
            }
        ]
    },
    lidar: {
        title: "LiDAR Sensor Research",
        period: "한국교통대학교 인공지능 자동차 연구실 · 2022.02 - 2022.08",
        summary: "Lv.4 자율주행자동차의 라이다 센서 데이터를 활용해 객체 검출, 지면 제거, 차선 검출 알고리즘을 개발하고 검증했습니다.",
        sections: [
            {
                title: "라이다 센서 연구",
                items: [
                    "Lv.4 자율주행자동차에 라이다를 사용하여 객체 검출",
                    "라이다 센서 객체 검출 알고리즘 검증",
                    "라이다 센서 지면 제거 및 지면 검출 알고리즘 개발 및 검증",
                    "라이다 센서 차선 검출 알고리즘 개발 및 검증",
                    "자동차공학회 논문 포스터 진행"
                ]
            },
            {
                title: "Fail-Operational 연구",
                items: [
                    "1년차 연구 진행",
                    "차량 센서 고장 시 대처방안 확인"
                ]
            }
        ]
    }
};

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navItems.forEach((item) => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.16
});

revealItems.forEach((item) => revealObserver.observe(item));

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }

        navItems.forEach((item) => {
            item.classList.toggle("is-active", item.getAttribute("href") === `#${entry.target.id}`);
        });
    });
}, {
    rootMargin: "-45% 0px -45% 0px"
});

document.querySelectorAll("main section[id]").forEach((section) => {
    sectionObserver.observe(section);
});

if (copyButton) {
    copyButton.addEventListener("click", async () => {
        const email = copyButton.dataset.copyEmail;
        const label = copyButton.querySelector("span");
        const originalText = label.textContent;

        try {
            await navigator.clipboard.writeText(email);
            label.textContent = "복사됨";
        } catch {
            window.location.href = `mailto:${email}`;
        }

        window.setTimeout(() => {
            label.textContent = originalText;
        }, 1600);
    });
}

const closeProjectModal = () => {
    if (!projectModal) {
        return;
    }

    projectModal.classList.remove("is-open");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
};

const openProjectModal = (projectKey) => {
    const project = projectDetails[projectKey];

    if (!project || !projectModal || !projectTitle || !projectPeriod || !projectSummary || !projectGrid) {
        return;
    }

    projectTitle.textContent = project.title;
    projectPeriod.textContent = project.period;
    projectSummary.textContent = project.summary;
    projectGrid.innerHTML = project.sections.map((section) => `
        <article class="detail-block">
            <h3>${section.title}</h3>
            <ul>
                ${section.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
        </article>
    `).join("");

    projectModal.classList.add("is-open");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
};

projectCards.forEach((card) => {
    card.addEventListener("click", () => openProjectModal(card.dataset.project));
    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openProjectModal(card.dataset.project);
        }
    });
});

projectCloseItems.forEach((item) => {
    item.addEventListener("click", closeProjectModal);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeProjectModal();
    }
});
