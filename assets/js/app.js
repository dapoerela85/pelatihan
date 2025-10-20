const APP_URLS = {
    HOME: '/pelatihan/modul/',
    NOTIFICATION: '?view=notifications',
    SETTINGS: '?view=settings',
    HELP: '?view=help'
};

const COMMON_QUIZ_CONFIG = {
  ELEMENT_IDS: {
    QUIZ_CONTAINER: "quizContainer",
    RESULT_CONTAINER: "resultContainer",
    LANDING_PAGE: "landingPage",
    QUESTION_TEXT: "questionText",
    OPTIONS_FORM: "optionsForm",
    CURRENT_QUESTION_NUMBER: "currentQuestionNumber",
    TOTAL_QUESTIONS: "totalQuestions",
    QUIZ_PROGRESS: "quizProgress",
    QUESTION_NUMBERS: "questionNumbers",
    PREV_BTN: "prevBtn",
    NEXT_BTN: "nextBtn",
    FINISH_BTN: "finishBtn",
    SKIP_BTN: "skipBtn",
    GIVE_UP_BTN: "giveUpBtn",
    START_QUIZ_BTN: "startQuizBtn",
    RESULT_SUMMARY: "resultSummary",
    ANSWER_LIST: "answerList",
    TIMER: "timer",
    ALERT_BOX: "alertBox",
    ALERT_MESSAGE: "alertMessage",
    QUESTION_POINTS: "questionPoints",
    LANDING_PAGE_CONTAINER: "landingPageContainer",
    NOT_FOUND_CONTAINER: "notFoundContainer",
    QUIZ_CONTENT_CONTAINER: "quizContentContainer",
    MAINPAGE: "mainPage",
    QUIZ_LIST: "quizList",
    NOT_FOUND_CONTAINER_ID: "notFoundContainerId",
    HOMEPAGE: "homepage",
    HELP_CONTAINER: "helpContainer",
    HELP_ACCORDION: "helpAccordion",
    NO_RESULT_ALERT: "noResultsAlert",
    STAT_QUIZ_BUTTON: "startQuizBtn",
    UNIVERSAL_MODAL: "universalModal",
    UNIVERSAL_MODAL_TITLE: "universalModalTitle",
    UNIVERSAL_MODAL_BODY: "universalModalBody",
    UNIVERSAL_MODAL_CONFIRM_BUTTON: "universalModalConfirmBtn",
    SETTINGS_CONTAINER: "settingsContainer",
    NOTIFICATIONS_CONTAINER: "notificationsContainer"
  },

  ELEMENT_TEXT: {
    BERANDA: "Beranda",
    MULAI_SEKARANG_BUTTON: "Mulai Sekarang",
    LIHAT_HASIL_BUTTON: "Lihat Hasil",
    JENIS_SOAL: "Jenis Soal",
    PILIHAN_GANDA: "Pilihan Ganda",
    JUMLAH_SOAL: "Jumlah Soal",
    WAKTU_PENGERJAAN: "120 Menit",
    NILAI: "Nilai",
    RESET: "Reset",
    SKOR: "Skor",
    STATUS: "Status",
    HASIL_SEBELUMNYA: "Hasil Sebelumnya",
    HASIL_PENCAPAIAN: "Hasil Pencapaian",
    TANGGAL_PENGERJAAN: "Tanggal Pengerjaan",
    WAKTU_PENGERJAAN: "Waktu Pengerjaan",
    WAKTU_TERSISA: "Waktu yang tersisa",
    WAKTU_DIHABISKAN: "Waktu yang dihabiskan",
    PASSING_GRADE: "Passing Grade",
    JUMLAH: "Jumlah",
    EDIT: "Edit",
    CETAK_HASIL: "Cetak Hasil",
    JAWABAN_BENAR: "Benar",
    JAWABAN_SALAH: "Salah",
    JAWABAN_DILEWATI: "Dilewati",
    GRADE: "Grade",
    NILAI_MINIMAL_LULUS: "Nilai Minimal Kelulusan",
    NILAI_MAKSIMAL_LULUS: "Nilai Maksimal Kelulusan",
    INFO: "Info",
    MENGERTI: "Mengerti",
    POIN: "Poin",
    SOAL: "Soal",
    LANJUTKAN_KUIS: "Lanjutkan",
    BATALKAN_KUIS: "Batalkan",
    ACTIVE_QUIZZESS_LIST: "activeQuizzesList",
    NO_NOTIFICATION: "Tidak ada notifkasi"
  }
};

// Quiz Config
const QUIZ_CONFIGS = {
  'pretest': {
    STORAGE_KEY: "pretest",
    QUIZ_TITLE: "Try Out Pelatihan Kompetensi FBJ Level 1 Pre Test",
    READY: true,
    QUIZ_URL: "?id=pretest",
    HOMEPAGE_URL: "/pelatihan/modul/",
    SUMBER_SOAL: "",
    DURATION: 20 * 60 * 1000,   // 120 minutes in milliseconds
    QUESTION_COUNT: 20,
    SCORING_RULES: {
      DEFAULT_SCORE: 1,
      RANGES: [
        { from: 1, to: 20, score: 1 }
      ]
    },
    MAX_SCORE: 100,
    PASSING_SCORE: 80,
    PASSING_GRADE: "C",
    KEYS: {
      START_TIME: "startTime",
      END_TIME: "endTime",
      USER_ANSWERS: "userAnswers",
      RESULTS: "results",
      CURRENT_QUESTION: "currentQuestion"
    },
    TIMER: {
      INTERVAL: 1000, // 1 detik
      ALERT_THRESHOLD: 5 * 60 * 1000 // 5 menit sebelum habis
    }
  },

  'modul2': {
    STORAGE_KEY: "modul_2",
    QUIZ_TITLE: "Try Out Pelatihan Kompetensi FBJ Level 1 Modul 2",
    READY: true,
    QUIZ_URL: "?id=modul2",
    HOMEPAGE_URL: "/pelatihan/modul/",
    SUMBER_SOAL: "",
    DURATION: 20 * 60 * 1000,   // 120 minutes in milliseconds
    QUESTION_COUNT: 15,
    SCORING_RULES: {
      DEFAULT_SCORE: 1,
      RANGES: [
        { from: 1, to: 15, score: 1 }
      ]
    },
    MAX_SCORE: 100,
    PASSING_SCORE: 80,
    PASSING_GRADE: "C",
    KEYS: {
      START_TIME: "startTime",
      END_TIME: "endTime",
      USER_ANSWERS: "userAnswers",
      RESULTS: "results",
      CURRENT_QUESTION: "currentQuestion"
    },
    TIMER: {
      INTERVAL: 1000, // 1 detik
      ALERT_THRESHOLD: 5 * 60 * 1000 // 5 menit sebelum habis
    }
  },

  'modul3': {
    STORAGE_KEY: "modul_3",
    QUIZ_TITLE: "Try Out Pelatihan Kompetensi FBJ Level 1 Modul 3",
    READY: true,
    QUIZ_URL: "?id=modul3",
    HOMEPAGE_URL: "/pelatihan/modul/",
    SUMBER_SOAL: "",
    DURATION: 20 * 60 * 1000,   // 120 minutes in milliseconds
    QUESTION_COUNT: 15,
    SCORING_RULES: {
      DEFAULT_SCORE: 1,
      RANGES: [
        { from: 1, to: 15, score: 1 }
      ]
    },
    MAX_SCORE: 100,
    PASSING_SCORE: 80,
    PASSING_GRADE: "C",
    KEYS: {
      START_TIME: "startTime",
      END_TIME: "endTime",
      USER_ANSWERS: "userAnswers",
      RESULTS: "results",
      CURRENT_QUESTION: "currentQuestion"
    },
    TIMER: {
      INTERVAL: 1000, // 1 detik
      ALERT_THRESHOLD: 5 * 60 * 1000 // 5 menit sebelum habis
    }
  },

  'modul4': {
    STORAGE_KEY: "modul_4",
    QUIZ_TITLE: "Try Out Pelatihan Kompetensi FBJ Level 1 Modul 4",
    READY: true,
    QUIZ_URL: "?id=modul4",
    HOMEPAGE_URL: "/pelatihan/modul/",
    SUMBER_SOAL: "",
    DURATION: 20 * 60 * 1000,   // 120 minutes in milliseconds
    QUESTION_COUNT: 15,
    SCORING_RULES: {
      DEFAULT_SCORE: 1,
      RANGES: [
        { from: 1, to: 15, score: 1 }
      ]
    },
    MAX_SCORE: 100,
    PASSING_SCORE: 80,
    PASSING_GRADE: "C",
    KEYS: {
      START_TIME: "startTime",
      END_TIME: "endTime",
      USER_ANSWERS: "userAnswers",
      RESULTS: "results",
      CURRENT_QUESTION: "currentQuestion"
    },
    TIMER: {
      INTERVAL: 1000, // 1 detik
      ALERT_THRESHOLD: 5 * 60 * 1000 // 5 menit sebelum habis
    }
  },

  'modul5': {
    STORAGE_KEY: "modul_5",
    QUIZ_TITLE: "Try Out Pelatihan Kompetensi FBJ Level 1 Modul 5",
    READY: true,
    QUIZ_URL: "?id=modul5",
    HOMEPAGE_URL: "/pelatihan/modul/",
    SUMBER_SOAL: "",
    DURATION: 20 * 60 * 1000,   // 120 minutes in milliseconds
    QUESTION_COUNT: 15,
    SCORING_RULES: {
      DEFAULT_SCORE: 1,
      RANGES: [
        { from: 1, to: 15, score: 1 }
      ]
    },
    MAX_SCORE: 100,
    PASSING_SCORE: 80,
    PASSING_GRADE: "C",
    KEYS: {
      START_TIME: "startTime",
      END_TIME: "endTime",
      USER_ANSWERS: "userAnswers",
      RESULTS: "results",
      CURRENT_QUESTION: "currentQuestion"
    },
    TIMER: {
      INTERVAL: 1000, // 1 detik
      ALERT_THRESHOLD: 5 * 60 * 1000 // 5 menit sebelum habis
    }
  },

  'modul6': {
    STORAGE_KEY: "modul_6",
    QUIZ_TITLE: "Try Out Pelatihan Kompetensi FBJ Level 1 Modul 6",
    READY: true,
    QUIZ_URL: "?id=modul6",
    HOMEPAGE_URL: "/pelatihan/modul/",
    SUMBER_SOAL: "",
    DURATION: 20 * 60 * 1000,   // 120 minutes in milliseconds
    QUESTION_COUNT: 15,
    SCORING_RULES: {
      DEFAULT_SCORE: 1,
      RANGES: [
        { from: 1, to: 15, score: 1 }
      ]
    },
    MAX_SCORE: 100,
    PASSING_SCORE: 80,
    PASSING_GRADE: "C",
    KEYS: {
      START_TIME: "startTime",
      END_TIME: "endTime",
      USER_ANSWERS: "userAnswers",
      RESULTS: "results",
      CURRENT_QUESTION: "currentQuestion"
    },
    TIMER: {
      INTERVAL: 1000, // 1 detik
      ALERT_THRESHOLD: 5 * 60 * 1000 // 5 menit sebelum habis
    }
  },

  'modul7': {
    STORAGE_KEY: "modul_7",
    QUIZ_TITLE: "Try Out Pelatihan Kompetensi FBJ Level 1 Modul 1 (MRP)",
    READY: true,
    QUIZ_URL: "?id=modul7",
    HOMEPAGE_URL: "/pelatihan/modul/",
    SUMBER_SOAL: "",
    DURATION: 20 * 60 * 1000,   // 120 minutes in milliseconds
    QUESTION_COUNT: 15,
    SCORING_RULES: {
      DEFAULT_SCORE: 1,
      RANGES: [
        { from: 1, to: 15, score: 1 }
      ]
    },
    MAX_SCORE: 100,
    PASSING_SCORE: 80,
    PASSING_GRADE: "C",
    KEYS: {
      START_TIME: "startTime",
      END_TIME: "endTime",
      USER_ANSWERS: "userAnswers",
      RESULTS: "results",
      CURRENT_QUESTION: "currentQuestion"
    },
    TIMER: {
      INTERVAL: 1000, // 1 detik
      ALERT_THRESHOLD: 5 * 60 * 1000 // 5 menit sebelum habis
    }
  },

  'tryout': {
    STORAGE_KEY: "modul_tryout",
    QUIZ_TITLE: "Try Out Pelatihan Kompetensi FBJ Level 1",
    READY: true,
    QUIZ_URL: "?id=tryout",
    HOMEPAGE_URL: "/pelatihan/modul/",
    SUMBER_SOAL: "",
    DURATION: 120 * 60 * 1000,   // 120 minutes in milliseconds
    QUESTION_COUNT: 100,
    SCORING_RULES: {
      DEFAULT_SCORE: 1,
      RANGES: [
        { from: 1, to: 100, score: 1 }
      ]
    },
    MAX_SCORE: 100,
    PASSING_SCORE: 65,
    PASSING_GRADE: "C",
    KEYS: {
      START_TIME: "startTime",
      END_TIME: "endTime",
      USER_ANSWERS: "userAnswers",
      RESULTS: "results",
      CURRENT_QUESTION: "currentQuestion"
    },
    TIMER: {
      INTERVAL: 1000, // 1 detik
      ALERT_THRESHOLD: 5 * 60 * 1000 // 5 menit sebelum habis
    }
  },

  'tryout7': {
    STORAGE_KEY: "modul_tryout7",
    QUIZ_TITLE: "Try Out 7 Level 1 Perpres 46/2025",
    READY: true,
    QUIZ_URL: "?id=tryout7",
    HOMEPAGE_URL: "/pelatihan/modul/",
    SUMBER_SOAL: "",
    DURATION: 120 * 60 * 1000,   // 120 minutes in milliseconds
    QUESTION_COUNT: 100,
    SCORING_RULES: {
      DEFAULT_SCORE: 1,
      RANGES: [
        { from: 1, to: 100, score: 1 }
      ]
    },
    MAX_SCORE: 100,
    PASSING_SCORE: 65,
    PASSING_GRADE: "C",
    KEYS: {
      START_TIME: "startTime",
      END_TIME: "endTime",
      USER_ANSWERS: "userAnswers",
      RESULTS: "results",
      CURRENT_QUESTION: "currentQuestion"
    },
    TIMER: {
      INTERVAL: 1000, // 1 detik
      ALERT_THRESHOLD: 5 * 60 * 1000 // 5 menit sebelum habis
    }
  },


  'buku1': {
    STORAGE_KEY: "modul_buku1",
    QUIZ_TITLE: "Try Out Level 1 Buku 1",
    READY: true,
    QUIZ_URL: "?id=buku1",
    HOMEPAGE_URL: "/pelatihan/modul/",
    SUMBER_SOAL: "",
    DURATION: 120 * 60 * 1000,   // 120 minutes in milliseconds
    QUESTION_COUNT: 100,
    SCORING_RULES: {
      DEFAULT_SCORE: 1,
      RANGES: [
        { from: 1, to: 100, score: 1 }
      ]
    },
    MAX_SCORE: 100,
    PASSING_SCORE: 65,
    PASSING_GRADE: "C",
    KEYS: {
      START_TIME: "startTime",
      END_TIME: "endTime",
      USER_ANSWERS: "userAnswers",
      RESULTS: "results",
      CURRENT_QUESTION: "currentQuestion"
    },
    TIMER: {
      INTERVAL: 1000, // 1 detik
      ALERT_THRESHOLD: 5 * 60 * 1000 // 5 menit sebelum habis
    }
  },

  'buku2': {
    STORAGE_KEY: "modul_buku2",
    QUIZ_TITLE: "Try Out Level 1 Buku 2",
    READY: false,
    QUIZ_URL: "?id=buku2",
    HOMEPAGE_URL: "/pelatihan/modul/",
    SUMBER_SOAL: "",
    DURATION: 120 * 60 * 1000,   // 120 minutes in milliseconds
    QUESTION_COUNT: 100,
    SCORING_RULES: {
      DEFAULT_SCORE: 1,
      RANGES: [
        { from: 1, to: 100, score: 1 }
      ]
    },
    MAX_SCORE: 100,
    PASSING_SCORE: 65,
    PASSING_GRADE: "C",
    KEYS: {
      START_TIME: "startTime",
      END_TIME: "endTime",
      USER_ANSWERS: "userAnswers",
      RESULTS: "results",
      CURRENT_QUESTION: "currentQuestion"
    },
    TIMER: {
      INTERVAL: 1000, // 1 detik
      ALERT_THRESHOLD: 5 * 60 * 1000 // 5 menit sebelum habis
    }
  }
        
};

// Variabel global
let QUIZ_CONFIG = null; 
let questions;
let countdownInterval; // This is the line you need to add
let currentQuestionIndex = 0;
let userAnswers = [];
let isShowingResults = false;

// Define loadQuestions globally (outside any other function)
async function loadQuestions(id) {
  try {
    const response = await fetch(`/pelatihan/questions/modul/${id}.json`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    questions = await response.json();

    const urlParams = new URLSearchParams(window.location.search);
    const soal = urlParams.get('soal');
    const view = urlParams.get('view');

    loadProgress();

    if (!soal && !view) {
      showLandingPage();
    } else if (view === 'results') {
      showResults();
    } else if (soal) {
      const questionNumber = parseInt(soal);
      if (!isNaN(questionNumber) && questionNumber >= 1 && questionNumber <= questions.length) {
        startQuiz(questionNumber - 1);
      } else {
        showNotFoundPage();
      }
    } else {
      showLandingPage();
    }
  } catch (error) {
    console.error("Failed to load questions:", error);
    showNotFoundPage();
  }
}

[
  'MAINPAGE',
  'LANDING_PAGE_CONTAINER',
  'QUIZ_CONTENT_CONTAINER',
  'RESULT_CONTAINER',
  'NOT_FOUND_CONTAINER',
  'HELP_CONTAINER',
  'SETTINGS_CONTAINER'
].forEach(id => {
  const el = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS[id]);
  if (el) el.style.display = 'none';
});


// 3. URL PARAMETER HANDLING
function handleUrlParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const soal = urlParams.get('soal');
  const view = urlParams.get('view');

  // ✅ Hide all containers first
  [
    'MAINPAGE',
    'LANDING_PAGE_CONTAINER',
    'QUIZ_CONTENT_CONTAINER',
    'RESULT_CONTAINER',
    'NOT_FOUND_CONTAINER',
    'HELP_CONTAINER',
    'SETTINGS_CONTAINER',
    'NOTIFICATIONS_CONTAINER'
  ].forEach(key => {
    const el = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS[key]);
    if (el) el.style.display = 'none';
  });

  // ✅ Show static view pages FIRST
  if (view === 'notifications') {
    showNotificationsPage();
    return;
  }

  if (view === 'settings') {
    showSettingsPage();
    return;
  }

  if (view === 'help') {
    showHelpPage();
    return;
  }

  // ✅ No parameters = show main page
  if (!id && !soal && !view) {
    showMainPage();
    return;
  }

  // ✅ Load quiz from id
  if (id && QUIZ_CONFIGS[id]) {
    QUIZ_CONFIG = QUIZ_CONFIGS[id];
    loadQuestions(id);
    return;
  }

  // ✅ Fallback: load first available quiz
  const firstAvailableQuiz = Object.keys(QUIZ_CONFIGS).find(key => QUIZ_CONFIGS[key].READY);
  if (firstAvailableQuiz) {
    QUIZ_CONFIG = QUIZ_CONFIGS[firstAvailableQuiz];
    loadQuestions(firstAvailableQuiz);
    return;
  }

  // ✅ If nothing matches, show not found
  showNotFoundPage();
}


function showMainPage() {
    const mainPage = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.MAINPAGE);
    const quizList = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.QUIZ_LIST);
    
    quizList.innerHTML = '';

    // Add all quizzes (both available and unavailable)
    for (const [id, config] of Object.entries(QUIZ_CONFIGS)) {
        const quizItem = document.createElement('div');
        quizItem.className = `quiz-item ${config.READY ? '' : 'disabled-quiz'}`;
        
        // Check if there are saved results for this quiz
        let recentScoreHTML = '';
        let timeInfoHTML = '';
        if (config.READY) {
            const results = localStorage.getItem(`${config.STORAGE_KEY}_${config.KEYS.RESULTS}`);
            
            if (results) {
                try {
                    const resultData = JSON.parse(results);
                    const percentage = resultData.percentage || 0;
                    const isPassed = percentage >= config.PASSING_SCORE;
                    const duration = resultData.duration ? formatDuration(resultData.duration) : '';
                    
                    recentScoreHTML = `
                        <div class="quiz-result-infos">
                            <div class="d-flex align-items-center gap-2 mb-1">
                                <span class="text-muted small">Skor Terakhir:</span>
                                <span class="badge ${isPassed ? 'bg-success' : 'bg-danger'}">
                                    ${resultData.score || 0} / ${calculateMaxPossibleScoreForConfig(config)}
                                </span>
                                <span class="badge d-none ${isPassed ? 'bg-success' : 'bg-danger'}">
                                    ${percentage}%
                                </span>
                                <span class="badge ${isPassed ? 'bg-success' : 'bg-danger'}">
                                    ${isPassed ? 'Lulus' : 'Tidak Lulus'}
                                </span>
                            </div>
                            ${duration ? `
                            <div class="d-flex align-items-center gap-2 small text-muted">
                                <i class="bi bi-clock-history"></i>
                                <span>${duration}</span>
                            </div>
                            ` : ''}
                        </div>
                    `;
                } catch (e) {
                    console.error('Error parsing results:', e);
                }
            }
        }
        
        quizItem.innerHTML = `
            <div class="quiz-content">
                <div class="quiz-header">
                    <h5 class="quiz-title">${config.QUIZ_TITLE}</h5>
                    ${!config.READY ? '<div class="quiz-unavailable-badge">Tidak tersedia</div>' : ''}
                </div>
                ${recentScoreHTML}
                <div class="quiz-meta">
                    <div class="d-flex align-items-center gap-2">
                        <span class="badge quiz-question-count">
                            <i class="bi bi-journal-text"></i> ${config.QUESTION_COUNT} Soal
                        </span>
                        <span class="badge quiz-duration">
                            <i class="bi bi-clock"></i> ${Math.floor(config.DURATION / (60 * 1000))} Menit
                        </span> 
                    </div>
                    ${config.READY ? 
                        '<i class="bi bi-chevron-right quiz-arrow"></i>' : 
                        '<i class="bi bi-lock-fill quiz-lock"></i>'
                    }
                </div>
            </div>
        `;
        
        if (config.READY) {
            const quizLink = document.createElement('a');
            quizLink.href = `/pelatihan/modul/?id=${id}`;
            quizLink.className = 'quiz-link';
            quizLink.innerHTML = quizItem.innerHTML;
            quizList.appendChild(quizLink);
        } else {
            quizList.appendChild(quizItem);
        }
    }
    
    // Show the main page
    mainPage.style.display = 'block';
}

function showSettingsPage() {
    const settingsContainer = document.getElementById('settingsContainer');
    settingsContainer.style.display = 'block';
    
    // Add event listener for clear data button
    document.getElementById('clearAllDataBtn').addEventListener('click', function() {
        showUniversalModal('clear-data');
    });
}

function showNotFoundPage() {
    // Safely get all container elements
    const containers = {
        notFound: document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.NOT_FOUND_CONTAINER),
        landing: document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.LANDING_PAGE_CONTAINER),
        quiz: document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.QUIZ_CONTENT_CONTAINER),
        result: document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.RESULT_CONTAINER),
        help: document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.HELP_CONTAINER),
        main: document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.MAINPAGE)
    };

    // Hide all containers that exist
    Object.values(containers).forEach(container => {
        if (container) {
            container.style.display = 'none';
        }
    });

    // Show the not found container if it exists
    if (containers.notFound) {
        containers.notFound.style.display = 'block';
    } else {
        console.error('Not found container element missing!');
    }
}

function showDisabledQuizMessage() {
    // Hide other containers
    document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.MAINPAGE).style.display = 'none';
    document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.QUIZ_CONTENT_CONTAINER).style.display = 'none';
    document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.RESULT_CONTAINER).style.display = 'none';
    
    // Show message in not found container
    const notFoundContainer = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.NOT_FOUND_CONTAINER);
    notFoundContainer.innerHTML = `
        <div class="card shadow">
            <div class="card-body">
                <h2>Kuis Tidak Tersedia</h2>
                <p class="lead">Kuis ini belum tersedia. Silakan pilih kuis lain yang tersedia.</p>
                <a href="/pelatihan/modul/" class="btn btn-primary mt-3">
                    <i class="bi bi-house-door"></i> Kembali ke Beranda
                </a>
            </div>
        </div>
    `;
    notFoundContainer.style.display = 'block';
}

function showLandingPage() {
    const landingPageContainer = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.LANDING_PAGE_CONTAINER);
    landingPageContainer.innerHTML = createLandingPage();
    landingPageContainer.style.display = 'block';
    
    // Add event listeners using event delegation
    landingPageContainer.addEventListener('click', function(e) {
        // Handle main action button
        if (e.target.closest('#mainActionBtn')) {
            const result = storage.get(QUIZ_CONFIG.KEYS.RESULTS);
            const hasPreviousResults = result && result.score !== undefined;
            
            if (hasPreviousResults) {
                // Show results view
                const params = new URLSearchParams(window.location.search);
                params.set('view', 'results');
                window.location.search = params.toString();
            } else {
                // Start new quiz
                startQuiz(0);
            }
        }
        
        // Handle reset button
        if (e.target.closest('#resetQuizBtn')) {
            e.preventDefault();
            showUniversalModal('reset');
        }
    });
}

function showHelpPage() {
    const helpContainer = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.HELP_CONTAINER);
    const accordion = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.HELP_ACCORDION);
    
    // Sample FAQ data - you can customize this
    const faqItems = [
        {
            question: "Bagaimana cara memulai ujian?",
            answer: "Dihalaman <a href='/pelatihan/modul/'>utama/beranda</a>, pilih ujian yang ingin dikerjakan dan akan dialihkan kehalaman ujian, Klik tombol 'Mulai Sekarang' untuk memulai ujian."
        },
        {
            question: "Berapa lama waktu yang diberikan untuk mengerjakan ujian?",
            answer: "Anda diberikan waktu 120 menit (atau 2 jam) untuk menyelesaikan seluruh soal."
        },
        {
            question: "Bagaimana cara membagikan hasil ujian?",
            answer: "Hanya Anda yang dapat melihat/mengakses hasil ujian dan tidak dapat membagikan link/url hasil kepada siapapun karena hasil tersebut tersimpan di Local Storage/Penyimpanan Lokal Browser Anda. Namun Anda dapat membagikan hasil dengan mengunduhnya sebagai file PDF dengan menekan tombol <span class='bi bi-download btn btn-sm btn-secondary'> Cetak Hasil</span>"
        },
        {
            question: "Apakah saya diwajibkan untuk mengisi data peserta?",
            answer: "Tidak. Anda tidak diwajibkan untuk mengisi data peserta."
        },
        {
            question: "Apakah ujian ini berbayar?",
            answer: "Tidak. Ujian ini gratis tidak dipungut biaya apapun."
        },
        {
            question: "Bagaimana Saya menghapus semua data hasil dan data lainnya?",
            answer: "Pergi ke halaman <a href='?view=settings'>pengaturan/setting</a>, dibagian Hapus Data, klik tombol <b>Hapus Semua Data</b>."
        },
        {
            question: "Bagaimana cara Saya mengetahui ujian yang sedang/masih berjalan?",
            answer: "Anda dapat melihat ujian yang sedang berjalan di halaman <a href='?view=notifications'>notifikasi</a>."
        }
    ];

    // Generate FAQ items
    accordion.innerHTML = faqItems.map((item, index) => `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed shadow-none" type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#helpCollapse${index}">
                    ${item.question}
                </button>
            </h2>
            <div id="helpCollapse${index}" class="accordion-collapse collapse" 
                 data-bs-parent="#helpAccordion">
                <div class="accordion-body bg-light">
                    ${item.answer}
                </div>
            </div>
        </div>
    `).join('');
    
    helpContainer.style.display = 'block';
    document.title = "Bantuan";
    
    // Initialize Bootstrap accordion functionality
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('collapsed');
        });
    });
}

// Fungsi storage
// Update the storage object to include error handling
const storage = {
    get: (key) => {
        try {
            const fullKey = `${QUIZ_CONFIG.STORAGE_KEY}_${key}`;
            const value = localStorage.getItem(fullKey);
            return value ? JSON.parse(value) : null;
        } catch (e) {
            console.error('Error reading from localStorage:', e);
            return null;
        }
    },
    set: (key, value) => {
        try {
            const fullKey = `${QUIZ_CONFIG.STORAGE_KEY}_${key}`;
            localStorage.setItem(fullKey, JSON.stringify(value));
        } catch (e) {
            console.error('Error writing to localStorage:', e);
        }
    },
    remove: (key) => {
        try {
            const fullKey = `${QUIZ_CONFIG.STORAGE_KEY}_${key}`;
            localStorage.removeItem(fullKey);
        } catch (e) {
            console.error('Error removing from localStorage:', e);
        }
    },
    clear: () => {
        try {
            Object.values(QUIZ_CONFIG.KEYS).forEach(key => {
                localStorage.removeItem(`${QUIZ_CONFIG.STORAGE_KEY}_${key}`);
            });
        } catch (e) {
            console.error('Error clearing localStorage:', e);
        }
    }
};

function startQuiz(initialQuestionIndex = 0) {
    // Clear any existing intervals
    clearInterval(countdownInterval);
    
    // Hide the landing page container
    document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.LANDING_PAGE_CONTAINER).style.display = 'none';
    
    // Initialize quiz container
    const quizContentContainer = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.QUIZ_CONTENT_CONTAINER);
    quizContentContainer.innerHTML = QuizContainer();
    quizContentContainer.style.display = 'block';
    
    // Load any existing progress
    loadProgress();
    
    // Set up quiz event listeners
    setupQuizEventListeners();
    
    // Start from the specified question
    currentQuestionIndex = initialQuestionIndex;
    initializeQuiz();
}

function showQuestion(index) {
    const { ELEMENT_IDS } = COMMON_QUIZ_CONFIG;
    const optionsForm = document.getElementById(ELEMENT_IDS.OPTIONS_FORM); 

    index = Math.max(0, Math.min(index, questions.length - 1));
    currentQuestionIndex = index;

    document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.CURRENT_QUESTION_NUMBER).textContent = index + 1;
    optionsForm.innerHTML = '';
    
    const quizContainer = document.getElementById('quizContentContainer');
    quizContainer.style.display = 'block';
    document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.QUIZ_CONTENT_CONTAINER).style.display = 'block';
    document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.RESULT_CONTAINER).style.display = 'none';

    if (storage.get(QUIZ_CONFIG.KEYS.RESULTS)) {
        showResults();
        return;
    }

    const questionNumber = index + 1;
    const range = QUIZ_CONFIG.SCORING_RULES.RANGES.find(r => 
        questionNumber >= r.from && questionNumber <= r.to
    );
    const points = range?.score || QUIZ_CONFIG.SCORING_RULES.DEFAULT_SCORE;
    document.getElementById(ELEMENT_IDS.QUESTION_POINTS).textContent = `(Nilai: ${points} Poin)`;

    storage.set(QUIZ_CONFIG.KEYS.CURRENT_QUESTION, currentQuestionIndex);
    updateURL();
    updateQuestionNumbers();
    updateProgressBar();
    
    document.getElementById(ELEMENT_IDS.PREV_BTN).disabled = index === 0;
    const isLastQuestion = index === questions.length - 1;
    document.getElementById(ELEMENT_IDS.FINISH_BTN).classList.toggle('d-none', !isLastQuestion);
    document.getElementById(ELEMENT_IDS.NEXT_BTN).classList.toggle('d-none', isLastQuestion);
    
    const currentQuestion = questions[index];
    const answerData = userAnswers[index];
    const questionTextElement = document.getElementById(ELEMENT_IDS.QUESTION_TEXT);
    
    questionTextElement.innerHTML = currentQuestion.question;
    
    if (currentQuestion.image) {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'question-image-container mt-3 mb-4 text-center';
        const img = document.createElement('img');
        img.src = `/assets/images/pelatihan/${currentQuestion.image}`;
        img.alt = 'Gambar soal';
        img.className = 'img-fluid rounded border';
        img.style.maxHeight = '300px';
        imgContainer.appendChild(img);
        questionTextElement.appendChild(imgContainer);
    }

    const selectedValue = answerData?.userAnswer;
    const isSkipped = answerData?.isSkipped;
    const isAnswered = answerData && answerData.userAnswer !== undefined && answerData.userAnswer !== null;
    
    if (!currentQuestion.options || !Array.isArray(currentQuestion.options)) {
        console.error('Invalid options for question:', currentQuestion);
        optionsForm.innerHTML = '<div class="alert alert-danger">Error: Question options not loaded properly</div>';
        return;
    }

    currentQuestion.options.forEach((option, optionIndex) => {
        if (typeof option !== 'string') {
            console.error('Invalid option format at index', optionIndex, 'in question', index);
            return;
        }
        
        const value = option.substring(0, 1).toUpperCase();
        const isSelected = value === selectedValue;
        const isCorrectAnswer = value === currentQuestion.answer;
        
        let btnClass = 'btn-outline-primary';
        let iconClass = 'bi-circle';
        
        if (isAnswered) {
            if (isSelected) {
                btnClass = isCorrectAnswer ? 'btn-success' : 'btn-danger';
                iconClass = isCorrectAnswer ? 'bi-check-circle-fill' : 'bi-x-circle-fill';
            } else if (isCorrectAnswer) {
                // Show correct answer if user got it wrong
                btnClass = 'btn-outline-success';
                iconClass = 'bi-check-circle';
            }
        } else if (isSelected) {
            btnClass = 'btn-primary';
            iconClass = 'bi-check-circle-fill';
        }
        
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `btn ${btnClass} w-100 text-start mb-2 option-btn`;
        button.dataset.value = value;
        button.innerHTML = `
            <i class="bi ${iconClass} me-2"></i>
            ${option}
        `;
        
        if (!isAnswered) {
            button.addEventListener('click', () => selectAnswer(value));
        } else {
            button.disabled = true;
        }
        
        optionsForm.appendChild(button);
    });
    
    if (isSkipped) {
        optionsForm.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('btn-outline-primary', 'btn-primary');
            btn.classList.add('btn-outline-primary');
            btn.querySelector('i').className = 'bi bi-dash-circle me-2';
        });
    }
}

function selectAnswer(value) {
    const question = questions[currentQuestionIndex];
    const isCorrect = value === question.answer;
    
    userAnswers[currentQuestionIndex] = {
        question: question.question,
        options: question.options,
        correctAnswer: question.answer,
        userAnswer: value,
        isSkipped: false
    };
    saveProgress();
    
    const options = document.querySelectorAll('.option-btn');
    options.forEach(option => {
        option.disabled = true;
        const optionValue = option.dataset.value;
        
        if (optionValue === question.answer) {
            option.classList.remove('btn-primary', 'btn-outline-primary');
            option.classList.add('btn-success');
            option.querySelector('i').className = 'bi bi-check-circle-fill me-2';
        } else if (optionValue === value && !isCorrect) {
            option.classList.remove('btn-primary', 'btn-outline-primary');
            option.classList.add('btn-danger');
            option.querySelector('i').className = 'bi bi-x-circle-fill me-2';
        }
    });
    
    showAlert(isCorrect ? 'Benar' : 'Salah', isCorrect ? 'success' : 'danger');
    
    if (currentQuestionIndex < questions.length - 1) {
        setTimeout(() => {
            showQuestion(currentQuestionIndex + 1);
        }, 1500);
    }
}

function skipQuestion() {
    userAnswers[currentQuestionIndex] = {
        ...questions[currentQuestionIndex],
        userAnswer: null,
        isSkipped: true
    };
    saveProgress();
    
    if (currentQuestionIndex < questions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    }
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
}

function showNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    }
}

function updateQuestionNumbers() {
    const container = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.QUESTION_NUMBERS);
    if (!container) return;
    
    container.innerHTML = '<div class="d-flex flex-wrap gap-2"></div>';
    
    questions.forEach((_, index) => {
        const answerData = userAnswers[index];
        let btnClass = 'btn-outline-secondary';
        
        if (index === currentQuestionIndex) {
            btnClass = 'btn-primary';
        } else if (answerData) {
            if (answerData.isSkipped) {
                btnClass = 'btn-danger';
            } else if (answerData.userAnswer !== null && answerData.userAnswer !== undefined) {
                btnClass = answerData.userAnswer === answerData.correctAnswer ? 'btn-success' : 'btn-success';
            }
        }
        
        container.firstChild.innerHTML += `
            <button class="btn btn-sm rounded-circle ${btnClass} question-number"
                    onclick="showQuestion(${index})">
                ${index + 1}
            </button>
        `;
    });
}

function updateProgressBar() {
    const { ELEMENT_IDS } = COMMON_QUIZ_CONFIG;
    const progress = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);
    const progressBar = document.getElementById(ELEMENT_IDS.QUIZ_PROGRESS);
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress);
    progressBar.textContent = `${progress}%`;
}

// Helper function to format duration
function formatDuration(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
}

function calculateMaxPossibleScoreForConfig(config) {
    return config.SCORING_RULES.RANGES.reduce((total, range) => {
        return total + ((range.to - range.from + 1) * range.score);
    }, 0);
}


function startTimer() {
    clearInterval(countdownInterval);
    
    let endTime = storage.get(QUIZ_CONFIG.KEYS.END_TIME);
    
    if (!endTime) {
        const now = Date.now();
        endTime = now + QUIZ_CONFIG.DURATION;
        storage.set(QUIZ_CONFIG.KEYS.START_TIME, now);
        storage.set(QUIZ_CONFIG.KEYS.END_TIME, endTime);
    }
    
    updateTimerDisplay(endTime);
    countdownInterval = setInterval(() => updateTimerDisplay(endTime), 1000);
}

function updateTimerDisplay(endTime) {
    const now = Date.now();
    const remaining = endTime - now;

    if (remaining <= 0) {
        clearInterval(countdownInterval);
        // Check if results already exist
        const existingResults = storage.get(QUIZ_CONFIG.KEYS.RESULTS);
        if (!existingResults) {
            // If no results, force finish the quiz
            for (let i = 0; i < questions.length; i++) {
                if (userAnswers[i] === null) {
                    userAnswers[i] = {
                        question: questions[i].question,
                        options: questions[i].options,
                        correctAnswer: questions[i].answer,
                        userAnswer: null,
                        isSkipped: true
                    };
                }
            }
            finishQuiz('expired');
        }
        return;
    }

    const totalSeconds = Math.floor(remaining / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.innerHTML = `
            <span class="badge bg-danger">
                <i class="bi bi-hourglass-top me-1"></i>
                ${hours}:${minutes}:${seconds}
            </span>`;
    }
}

function formatTime(totalSeconds) {
    if (typeof totalSeconds !== 'number' || isNaN(totalSeconds) || totalSeconds < 0) {
        return '00:00:00';
    }
    
    totalSeconds = Math.floor(totalSeconds);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
    ].join(':');
}

function updateActiveQuizTimer(element, endTime) {
    if (!element || !endTime) return;
    
    const update = () => {
        const remaining = Math.max(0, endTime - Date.now());
        element.textContent = formatTime(remaining / 1000);
        
        if (remaining <= 0) {
            clearInterval(timerInterval);
            element.textContent = '00:00:00';
            element.closest('.alert')?.classList.add('alert-danger');
        }
    };
    
    const timerInterval = setInterval(update, 1000);
    update(); // Initial call
    
    // Cleanup on page navigation
    window.addEventListener('beforeunload', () => {
        clearInterval(timerInterval);
    });
}

function updateActiveQuizTimer() {
    const activeSession = getActiveQuizSession();
    if (!activeSession) return;

    const timerElements = document.querySelectorAll('#activeQuizTimer');
    if (!timerElements.length) return;

    const updateTimer = () => {
        const remaining = Math.max(0, activeSession.endTime - Date.now());
        const formattedTime = formatTime(remaining / 1000);
        
        timerElements.forEach(el => {
            if (el) el.textContent = formattedTime;
        });

        if (remaining <= 0) {
            clearInterval(timerInterval);
            // Optional: Refresh the page when time expires
            setTimeout(() => window.location.reload(), 1000);
        }
    };

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call
}

function saveProgress() {
    const { KEYS } = QUIZ_CONFIG;
    storage.set(KEYS.USER_ANSWERS, userAnswers);
    storage.set(KEYS.CURRENT_QUESTION, currentQuestionIndex);
    
    if (!storage.get(KEYS.END_TIME)) {
        const now = Date.now();
        storage.set(KEYS.START_TIME, now);
        storage.set(KEYS.END_TIME, now + QUIZ_CONFIG.DURATION);
    }
}

function loadProgress() {
    const { KEYS } = QUIZ_CONFIG;
    
    userAnswers = Array(QUIZ_CONFIG.QUESTION_COUNT).fill(null);
    
    const savedAnswers = storage.get(KEYS.USER_ANSWERS);
    if (Array.isArray(savedAnswers)) {
        savedAnswers.forEach((answer, index) => {
            if (index < userAnswers.length && answer !== null) {
                userAnswers[index] = answer;
            }
        });
    }
    
    const savedIndex = parseInt(storage.get(KEYS.CURRENT_QUESTION)) || 0;
    currentQuestionIndex = Math.min(Math.max(savedIndex, 0), questions.length - 1);
}

function finishQuiz(status) {
    // Hitung jumlah soal yang belum dijawab
    const unansweredCount = userAnswers.filter(a => a === null || a?.isSkipped).length;
    const allAnswered = unansweredCount === 0;
    
    // Jika semua soal telah dijawab DAN waktu masih tersisa, hentikan timer
    if (allAnswered && !isTimeExpired()) {
        clearInterval(countdownInterval);
        
        // Simpan waktu yang tersisa sebagai waktu yang digunakan
        const startTime = storage.get(QUIZ_CONFIG.KEYS.START_TIME);
        const timeTaken = Math.floor((Date.now() - parseInt(startTime)) / 1000);
        storage.set(QUIZ_CONFIG.KEYS.END_TIME, Date.now()); // Set end time to now
    }
    // Jika masih ada soal yang belum dijawab, biarkan timer berjalan
    
    const completeAnswers = questions.map((question, index) => {
        return userAnswers[index] || {
            question: question.question,
            options: question.options,
            correctAnswer: question.answer,
            userAnswer: null,
            isSkipped: true
        };
    });

    const resultData = {
        answers: completeAnswers,
        score: calculateScore(),
        maxScore: calculateMaxPossibleScore(),
        percentage: calculatePercentageScore(),
        timeTaken: calculateTimeTaken(),
        completedAt: new Date().toISOString(),
        status: status || 'completed',
        allAnswered: allAnswered // Tambahkan flag apakah semua soal telah dijawab
    };
    
    storage.set(QUIZ_CONFIG.KEYS.RESULTS, resultData);
    
    // Force show results page
    const params = new URLSearchParams(window.location.search);
    params.set('view', 'results');
    window.location.search = params.toString();
}

function getGrade(percentage) {
  if (percentage >= 90) return "A";
  if (percentage >= 80) return "B";
  if (percentage >= 70) return "C";
  if (percentage >= 60) return "D";
  return "E";
}


function showResults() {
    if (isShowingResults) return;
    isShowingResults = true;

    const { ELEMENT_IDS } = COMMON_QUIZ_CONFIG;

    document.getElementById(ELEMENT_IDS.LANDING_PAGE_CONTAINER).style.display = 'none';
    document.getElementById(ELEMENT_IDS.QUIZ_CONTENT_CONTAINER).style.display = 'none';
    
    const result = storage.get(QUIZ_CONFIG.KEYS.RESULTS);
    const resultContainer = document.getElementById(ELEMENT_IDS.RESULT_CONTAINER);
    const noResultsAlert = document.getElementById(ELEMENT_IDS.NO_RESULT_ALERT);
    
    resultContainer.style.display = 'block';

    if (!result || !result.answers || !Array.isArray(result.answers)) {
        console.error('Invalid results format:', result);
        noResultsAlert.classList.remove('d-none');
        document.getElementById(ELEMENT_IDS.RESULT_SUMMARY).style.display = 'none';
        document.getElementById(ELEMENT_IDS.ANSWER_LIST).style.display = 'none';
        
        const params = new URLSearchParams(window.location.search);
        params.set('view', 'results');
        window.history.replaceState({}, '', `?${params.toString()}`);
        
        return;
    }

    noResultsAlert.classList.add('d-none');
    document.getElementById(ELEMENT_IDS.RESULT_SUMMARY).style.display = 'block';
    document.getElementById(ELEMENT_IDS.ANSWER_LIST).style.display = 'block';

    const params = new URLSearchParams(window.location.search);
    params.set('view', 'results');
    window.history.replaceState({}, '', `?${params.toString()}`);

    const totalQuestions = result.answers.length;
    let correctCount = 0;
    let wrong = 0;
    let skipped = 0;

    result.answers.forEach((ans) => {
        const isCorrect = ans.userAnswer === ans.correctAnswer;
        const isSkipped = ans.userAnswer === null;
        
        if (isSkipped) {
            skipped++;
        } else if (isCorrect) {
            correctCount++;
        } else {
            wrong++;
        }
    });

    const totalScore = result.score;
    const maxScore = calculateMaxPossibleScore();
    const percentage = Math.round((totalScore / maxScore) * 100);
    const passingPercentage = QUIZ_CONFIG.PASSING_SCORE || 80;
    const grade = getGrade(percentage);
    const isPassed = percentage >= passingPercentage;
    const timeUsed = result.timeTaken;
    const completedAt = new Date(result.completedAt);
    const timeRemaining = getRemainingTime();
    const isExpired = isTimeExpired();

document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.RESULT_SUMMARY).innerHTML = `
    <div class="card shadow-sm bg-light print-header">
        <div class="card-body">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="${QUIZ_CONFIG.HOMEPAGE_URL}">${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.BERANDA}</a></li>
          <li class="breadcrumb-item text-truncate"><a href="${QUIZ_CONFIG.QUIZ_URL}">${QUIZ_CONFIG.QUIZ_TITLE}</a></li>
          <li class="breadcrumb-item active text-truncate" aria-current="page">${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.HASIL_PENCAPAIAN}</li>
        </ol>
      </nav>
            <div class="d-flex justify-content-between mb-3">
            <h4 class="h4">${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.HASIL_PENCAPAIAN}</h4>
            </div>
            <div class="hstack gap-3 mb-2 small text-center">
                <div class="p-0">${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.SKOR}/${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.POIN}: <span class="badge text-bg-info border">${totalScore} / ${calculateMaxPossibleScore()}</span></div>
                <div class="p-0 ms-auto">${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.NILAI} (%): <span class="badge ${percentage >= QUIZ_CONFIG.PASSING_SCORE ? 'text-bg-success' : 'text-bg-danger'} border">${percentage}%</span></div>  
                <div class="p-0">${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.GRADE}: <span class="badge ${isPassed ? 'text-bg-success' : 'text-bg-danger'} border">${grade}</span></div>
                <div class="p-0">${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.STATUS}: <span class="badge ${isPassed ? 'text-bg-success' : 'text-bg-danger'} border">
                    ${isPassed ? 'Lulus' : 'Tidak Lulus'}
                </span></div>
            </div>
            <ul class="list-group list-group-horizontal text-center mb-3">
             <li class="list-group-item flex-fill border-success text-success" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Jumlah Jawaban Benar">
              ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.JAWABAN_BENAR} <span class="badge text-bg-success border">${correctCount}</span>
             </li>
             <li class="list-group-item flex-fill border-danger text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Jumlah Jawaban Salah">
              ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.JAWABAN_SALAH} <span class="badge text-bg-danger border">${wrong}</span>
             </li>
             <li class="list-group-item flex-fill border-secondary text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Jumlah Soal Dilewati/Tidak dijawab">
              ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.JAWABAN_DILEWATI} <span class="badge text-bg-secondary border">${skipped}</span>
             </li>
            </ul>
            <div class="d-flex justify-content-between d-none">
                <button type="button" class="btn btn-outline-success mb-2" data-bs-toggle="tooltip" data-bs-title="Jumlah Jawaban Benar">
                    ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.JAWABAN_BENAR} <span class="badge text-bg-success border">${correctCount}</span>
                </button> 
                <button type="button" class="btn btn-outline-danger mb-2" data-bs-toggle="tooltip" data-bs-title="Jumlah Jawaban Salah">
                    ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.JAWABAN_SALAH} <span class="badge text-bg-danger border">${wrong}</span>
                </button>    
                <button type="button" class="btn btn-outline-secondary mb-2" data-bs-toggle="tooltip" data-bs-title="Jumlah Jawaban Dilewati">
                    ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.JAWABAN_DILEWATI} <span class="badge text-bg-secondary border">${skipped}</span>
                </button>
            </div>
            <p class="card-text small text-muted">
                ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.JUMLAH_SOAL} : <span class="badge text-bg-success border">${QUIZ_CONFIG.QUESTION_COUNT}</span> <br>
                ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.NILAI_MINIMAL_LULUS}: <span class="badge text-bg-warning border">${QUIZ_CONFIG.PASSING_SCORE}</span> dari <span class="badge text-bg-success border">${QUIZ_CONFIG.MAX_SCORE}</span><br>
                ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.TANGGAL_PENGERJAAN}: <strong>${formatDateTime(completedAt)}</strong><br>
                ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.WAKTU_DIHABISKAN}: <strong>${formatTime(timeUsed)}</strong><br>
                ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.WAKTU_TERSISA}: <strong>${isExpired ? '0 menit 0 detik' : formatTime(timeRemaining)}</strong>
                ${isExpired ? '<span class="text-danger"> (Waktu ujian telah habis)</span>' : ''} 
            </p>
            ${!isPassed ? `
                <div class="alert alert-warning">
                    <i class="bi bi-exclamation-triangle"></i> Anda belum mencapai nilai minimal kelulusan.
                </div>
            ` : ''}

            <button class="btn btn-sm btn-light no-print"
             onclick="window.print()"><i class="bi bi-download"></i> ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.CETAK_HASIL}</button>

            <button onclick="continueQuiz()" class="btn btn-sm btn-light ${isExpired ? 'disabled' : ''}" 
                ${isExpired ? 'disabled' : ''}>
                <i class="bi bi-pencil-square"></i> ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.EDIT}/${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.LANJUTKAN_KUIS}
            </button>

            <button onclick="showUniversalModal('reset')" class="btn btn-sm btn-light">
                <i class="bi bi-arrow-counterclockwise"></i> ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.RESET}
            </button>
        </div>
    </div>
`;


    const allAnswered = result.allAnswered;
    
    const timeInfoHTML = `
        <div class="d-flex justify-content-between align-items-center small text-muted">
            <span>${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.WAKTU_DIHABISKAN}:</span>
            <span><strong>${formatTime(result.timeTaken)}</strong></span>
        </div>
        <div class="d-flex justify-content-between align-items-center small text-muted">
            <span>${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.WAKTU_TERSISA}:</span>
            <span><strong>${isExpired ? '0 menit 0 detik' : formatTime(getRemainingTime())}</strong></span>
        </div>
        ${!isExpired && !allAnswered ? `
        <div class="alert alert-info mt-2 small">
            <i class="bi bi-info-circle"></i> Masih ada waktu tersisa dan soal yang belum dijawab. 
            Anda dapat melanjutkan kuis dengan menekan tombol <strong>Edit/Lanjutkan</strong>.
        </div>
        ` : ''}
    `;

    const list = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.ANSWER_LIST);
    list.innerHTML = result.answers.map((ans, index) => {
        const question = questions[index];
        const questionNumber = index + 1;
        const userAns = (ans.userAnswer || "").trim().toUpperCase();
        const correctAns = (ans.correctAnswer || "").trim().toUpperCase();
        const isCorrect = userAns === correctAns;
        const isSkipped = ans.userAnswer === null;
        const poinLabel = isCorrect ? `1 poin` : `0 poin`;
        const badgeClass = isSkipped ? 'bg-secondary' : isCorrect ? 'bg-success' : 'bg-danger';

        const optionsHTML = ans.options.map(opt => {
            const val = opt.split(".")[0].trim().toUpperCase();
            let className = "list-group-item d-flex justify-content-between align-items-center";
            let iconHTML = "";

            if (val === userAns) {
                if (isSkipped) {
                    className += " list-group-item-secondary";
                } else if (isCorrect) {
                    className += " list-group-item-success";
                    iconHTML = `<i class="bi bi-check-circle-fill"></i>`;
                } else {
                    className += " list-group-item-danger";
                    iconHTML = `<i class="bi bi-x-circle-fill"></i>`;
                }
            } else if (val === correctAns) {
                className += " list-group-item-success border-start border-0 border-success";
            }

            return `<li class="${className}">${opt} ${iconHTML}</li>`;
        }).join("");

return `
    <div class="card mt-4 shadow-sm">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-0">${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.SOAL} ${questionNumber}</h5>
                <span>${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.NILAI} ${getQuestionPointsBadge(questionNumber)}</span>
            </div>
            <p>${ans.question}</p>
            ${question.image ? `
            <div class="question-image-container mt-3 mb-4 text-center">
                <img src="/assets/images/pelatihan/${question.image}" alt="Gambar soal" class="img-fluid rounded border">
            </div>
            ` : ''}
            <ul class="list-group mb-3">${optionsHTML}</ul>
            <div class="alert small ${isSkipped ? 'alert-secondary' : isCorrect ? 'bg-success-subtle' : 'bg-danger-subtle'}">
                ${
                    isSkipped
                        ? `<span>Soal dilewati/tidak dijawab. Poin yang Anda peroleh adalah <span class="badge bg-secondary small">0 poin</span></span>`
                        : isCorrect
                            ? `<span>Jawaban Anda Benar. Poin yang Anda peroleh adalah ${getQuestionPointsBadge(questionNumber, true)}</span>`
                            : `<span>Jawaban Anda Salah. Poin yang Anda peroleh adalah <span class="badge bg-danger small">0 poin</span></span>`
                }
                <br>
                Jawaban yang tepat adalah <span class="badge text-bg-success">${question.answer}</span> (${getFullAnswerText(question.answer, question.options)})
            </div>
        </div>
    </div>
`;
    }).join("");

    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
        new bootstrap.Tooltip(el);
    });
}

function getFullAnswerText(answerLetter, options) {
    if (!answerLetter || !options) return '';
    
    const correctOption = options.find(opt => 
        opt.trim().toUpperCase().startsWith(`${answerLetter.toUpperCase()}.`)
    );
    
    return correctOption ? correctOption.substring(correctOption.indexOf('.') + 1).trim() : '';
}

const startQuizBtn = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.STAT_QUIZ_BUTTON);
if (startQuizBtn) {
    startQuizBtn.addEventListener('click', function() {
        startQuiz(0);
    });
}

const resetBtnOnResults = document.querySelector('#resultSummary button[onclick*="showUniversalModal(\'reset\')"]');
if (resetBtnOnResults) {
    resetBtnOnResults.addEventListener('click', function() {
        showUniversalModal('reset');
    });
}

// Time Management Functions
function isTimeExpired() {
    const endTime = storage.get(QUIZ_CONFIG.KEYS.END_TIME);
    return endTime ? Date.now() >= endTime : false;
}

function getRemainingTime() {
    const endTime = storage.get(QUIZ_CONFIG.KEYS.END_TIME);
    if (!endTime) return QUIZ_CONFIG.DURATION / 1000;
    return Math.max(0, Math.floor((endTime - Date.now()) / 1000));
}

function formatTime(seconds) {
    // Ensure seconds is a valid number
    seconds = Math.max(0, Math.floor(Number(seconds)) || 0);
    
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    // Format as "X jam Y menit Z detik"
    const parts = [];
    if (hours > 0) parts.push(`${hours} jam`);
    if (minutes > 0 || hours > 0) parts.push(`${minutes} menit`);
    parts.push(`${secs} detik`);
    
    return parts.join(' ');
}

function getDurationInMinutes(config) {
  return config.DURATION / (60 * 1000);
}

function calculateTimeTaken() {
    const startTime = storage.get(QUIZ_CONFIG.KEYS.START_TIME);
    if (!startTime) return 0;
    
    const endTime = storage.get(QUIZ_CONFIG.KEYS.END_TIME);
    const now = Date.now();
    
    // Gunakan waktu sekarang jika:
    // 1. Waktu sudah habis, atau
    // 2. Semua soal telah dijawab (endTime di-set ke waktu sekarang saat finishQuiz)
    const actualEndTime = isTimeExpired() || (endTime && endTime <= now) ? 
        Math.min(endTime || now, now) : 
        now;
    
    const elapsedSeconds = Math.floor((actualEndTime - parseInt(startTime)) / 1000);
    const maxDurationSeconds = QUIZ_CONFIG.DURATION / 1000;
    return Math.min(elapsedSeconds, maxDurationSeconds);
}

function formatDateTime(date) {
    return date.toLocaleString('id-ID', {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit'
    });
}

function getQuestionPointsBadge(questionNumber, isSmall = false) {
    const range = QUIZ_CONFIG.SCORING_RULES.RANGES.find(r => 
        questionNumber >= r.from && questionNumber <= r.to
    );
    const points = range?.score || QUIZ_CONFIG.SCORING_RULES.DEFAULT_SCORE;
    const sizeClass = isSmall ? 'small' : '';
    
    return `<span class="badge bg-primary ${sizeClass}">${points} Poin</span>`;
}

function getQuestionScore(index) {
    const questionNumber = index + 1;
    const range = QUIZ_CONFIG.SCORING_RULES.RANGES.find(r => 
        questionNumber >= r.from && questionNumber <= r.to
    );
    return range?.score || QUIZ_CONFIG.SCORING_RULES.DEFAULT_SCORE;
}

function calculateScore() {
    return userAnswers.reduce((score, answer, index) => {
        if (answer && answer.userAnswer === answer.correctAnswer) {
            const questionNumber = index + 1;
            const range = QUIZ_CONFIG.SCORING_RULES.RANGES.find(r => 
                questionNumber >= r.from && questionNumber <= r.to
            );
            return score + (range?.score || QUIZ_CONFIG.SCORING_RULES.DEFAULT_SCORE);
        }
        return score;
    }, 0);
}

function calculateMaxPossibleScore() {
    return QUIZ_CONFIG.SCORING_RULES.RANGES.reduce((total, range) => {
        return total + ((range.to - range.from + 1) * range.score);
    }, 0);
}

function calculatePercentageScore() {
    const score = calculateScore();
    return Math.round((score / questions.length) * 100);
}

function getGrade(score) {
    if (score >= QUIZ_CONFIG.MAX_SCORE * 0.85) return "A (Sangat Baik)";
    if (score >= QUIZ_CONFIG.MAX_SCORE * 0.70) return "B (Baik)";
    if (score >= QUIZ_CONFIG.PASSING_SCORE) return "C (Cukup)";
    return "D (Kurang)";
}

function getAllActiveSessions() {
    const activeSessions = [];
    
    for (const [quizId, config] of Object.entries(QUIZ_CONFIGS)) {
        try {
            const endTime = localStorage.getItem(`${config.STORAGE_KEY}_${config.KEYS.END_TIME}`);
            const results = localStorage.getItem(`${config.STORAGE_KEY}_${config.KEYS.RESULTS}`);
            
            if (endTime && !results) {
                const remainingTime = parseInt(endTime) - Date.now();
                if (remainingTime > 0) {
                    activeSessions.push({
                        quizId,
                        config,
                        remainingTime,
                        endTime: parseInt(endTime),
                        currentQuestion: parseInt(localStorage.getItem(`${config.STORAGE_KEY}_${config.KEYS.CURRENT_QUESTION}`)) || 0,
                        quizTitle: config.QUIZ_TITLE,
                        quizUrl: `/pelatihan/modul/?id=${quizId}`
                    });
                }
            }
        } catch (e) {
            console.error("Error checking quiz session:", e);
        }
    }
    
    return activeSessions;
}

function updateActiveQuizzesBadge() {
    const badge = document.getElementById('activeQuizzesBadge');
    if (!badge) return;  // Safety check
    
    const activeSessions = getAllActiveSessions(); // Now this will work
    
    if (activeSessions.length > 0) {
        badge.textContent = activeSessions.length;
        badge.classList.remove('d-none');
    } else {
        badge.classList.add('d-none');
    }
}

function showAlert(message, type) {
    const { ELEMENT_IDS } = COMMON_QUIZ_CONFIG;
    const toast = document.getElementById(ELEMENT_IDS.ALERT_BOX);
    const msg = document.getElementById(ELEMENT_IDS.ALERT_MESSAGE);
    
    toast.classList.remove(
        'bg-success', 'bg-danger', 'bg-warning', 
        'bg-primary', 'bg-info', 'd-none'
    );
    
    toast.classList.add(`bg-${type}`, 'text-white');
    msg.textContent = message;
    
    toast.style.display = 'block';
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    
    setTimeout(() => bsToast.hide(), 2500);
}

function initializeQuiz() {
    const { KEYS } = QUIZ_CONFIG;
    
    try {
        clearInterval(countdownInterval);
        startTimer();
        
        const urlParams = new URLSearchParams(window.location.search);
        const soalParam = urlParams.get('soal');
        
        if (soalParam && !isNaN(soalParam)) {
            currentQuestionIndex = Math.min(Math.max(parseInt(soalParam) - 1, 0), questions.length - 1);
        } else {
            currentQuestionIndex = parseInt(storage.get(KEYS.CURRENT_QUESTION)) || 0;
        }
        
        // Force update URL to match current question
        updateURL();
        
        // Ensure proper visibility
        document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.LANDING_PAGE_CONTAINER).style.display = 'none';
        document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.RESULT_CONTAINER).style.display = 'none';
        document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.QUIZ_CONTENT_CONTAINER).style.display = 'block';
        
    clearInterval(countdownInterval);
    startTimer();
    showQuestion(currentQuestionIndex);
    updateQuestionNumbers();
    updateProgressBar();

    } catch (error) {
        console.error("Error initializing quiz:", error);
        storage.clear();
        window.location.href = window.location.pathname;
    }
}

function continueQuiz() {
    // First ensure the quiz container exists and is populated
    const quizContentContainer = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.QUIZ_CONTENT_CONTAINER);
    if (!quizContentContainer.innerHTML) {
        quizContentContainer.innerHTML = QuizContainer();
        setupQuizEventListeners(); // Reinitialize event listeners
    }

    // Load progress and update state
    loadProgress();
    storage.remove(QUIZ_CONFIG.KEYS.RESULTS);

    // Update URL
    const params = new URLSearchParams(window.location.search);
    params.delete('view');
    params.set('soal', currentQuestionIndex + 1);
    window.history.replaceState({}, '', `?${params.toString()}`);

    // Toggle visibility
    document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.RESULT_CONTAINER).style.display = 'none';
    quizContentContainer.style.display = 'block';

    // Force redraw
    setTimeout(() => {
        initializeQuiz(); // Properly reinitialize the quiz
    }, 50);
}

function initializeQuiz() {
    const { ELEMENT_IDS } = COMMON_QUIZ_CONFIG;
    
    try {
        // Ensure required elements exist
        const questionTextElement = document.getElementById(ELEMENT_IDS.QUESTION_TEXT);
        const optionsForm = document.getElementById(ELEMENT_IDS.OPTIONS_FORM);
        const currentQuestionNumber = document.getElementById(ELEMENT_IDS.CURRENT_QUESTION_NUMBER);
        
        if (!questionTextElement || !optionsForm || !currentQuestionNumber) {
            console.error('Required elements not found');
            return;
        }

        clearInterval(countdownInterval);
        startTimer();
        
        const urlParams = new URLSearchParams(window.location.search);
        const soalParam = urlParams.get('soal');
        
        if (soalParam && !isNaN(soalParam)) {
            currentQuestionIndex = Math.min(Math.max(parseInt(soalParam) - 1, 0), questions.length - 1);
        } else {
            currentQuestionIndex = parseInt(storage.get(QUIZ_CONFIG.KEYS.CURRENT_QUESTION)) || 0;
        }
        
        updateURL();
        showQuestion(currentQuestionIndex);
        updateQuestionNumbers();
        updateProgressBar();

    } catch (error) {
        console.error("Error initializing quiz:", error);
        storage.clear();
        window.location.href = window.location.pathname;
    }
}

function resetQuiz() {
    showUniversalModal('reset');
}

const universalModal = new bootstrap.Modal(document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.UNIVERSAL_MODAL));

function showUniversalModal(type) {
    // Get modal elements
    const modalTitle = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.UNIVERSAL_MODAL_TITLE);
    const modalBody = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.UNIVERSAL_MODAL_BODY);
    const modalFooter = document.querySelector('#universalModal .modal-footer');
    
    // Set default footer buttons
    modalFooter.innerHTML = `
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
        <button type="button" class="btn btn-primary" id="universalModalConfirmBtn">Konfirmasi</button>
    `;
    
    const confirmBtn = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.UNIVERSAL_MODAL_CONFIRM_BUTTON);

    // Handle different modal types
    switch (type) {
        case 'abandon-quiz':
            setupAbandonQuizModal(modalTitle, modalBody, confirmBtn);
            break;
            
        case 'clear-data':
            setupClearDataModal(modalTitle, modalBody, confirmBtn);
            break;
            
        case 'reset':
            setupResetModal(modalTitle, modalBody, confirmBtn);
            break;
            
        case 'give-up':
            setupGiveUpModal(modalTitle, modalBody, confirmBtn);
            break;
            
        case 'finish':
            setupFinishModal(modalTitle, modalBody, confirmBtn);
            break;
            
        case 'help':
            setupHelpModal(modalTitle, modalBody, modalFooter);
            break;
    }

    universalModal.show();
}

// Helper functions for each modal type
function setupAbandonQuizModal(modalTitle, modalBody, confirmBtn) {
    const activeSession = getActiveQuizSession();
    
    modalTitle.textContent = 'Batalkan Ujian';
    modalTitle.parentElement.className = 'modal-header bg-warning';
    modalBody.innerHTML = `
        <p>Anda yakin ingin membatalkan quiz yang sedang berjalan?</p>
        <div class="alert alert-warning">
            <i class="bi bi-exclamation-triangle-fill"></i> 
            Semua progress dan jawaban akan dihapus dan waktu akan direset.
        </div>
        <p><strong>Quiz:</strong> ${activeSession.quizTitle}</p>
        <p><strong>Waktu tersisa:</strong> ${formatTime(activeSession.remainingTime / 1000)}</p>
    `;
    
    confirmBtn.className = 'btn btn-danger';
    confirmBtn.innerHTML = '<i class="bi bi-x-circle"></i> Ya, Batalkan';
    confirmBtn.onclick = function() {
        // Clear the specific quiz data
        const config = QUIZ_CONFIGS[activeSession.quizId];
        Object.values(config.KEYS).forEach(key => {
            localStorage.removeItem(`${config.STORAGE_KEY}_${key}`);
        });
        
        showAlert('Quiz telah dibatalkan', 'success');
        setTimeout(() => window.location.reload(), 1000);
        universalModal.hide();
    };
}

function setupClearDataModal(modalTitle, modalBody, confirmBtn) {
    modalTitle.textContent = 'Konfirmasi Penghapusan Data';
    modalTitle.parentElement.className = 'modal-header bg-danger text-white';
    modalBody.innerHTML = `
        <p>Anda yakin ingin menghapus SEMUA data yang tersimpan di browser ini?</p>
        <div class="alert alert-danger">
            <i class="bi bi-exclamation-triangle-fill"></i> 
            Aksi ini tidak dapat dibatalkan! Semua data termasuk jawaban quiz dan hasil akan dihapus permanen.
        </div>
    `;
    
    confirmBtn.className = 'btn btn-danger';
    confirmBtn.innerHTML = '<i class="bi bi-trash"></i> Ya, Hapus Semua';
    confirmBtn.onclick = function() {
        // Clear all quiz data from all quizzes
        Object.keys(QUIZ_CONFIGS).forEach(quizId => {
            const config = QUIZ_CONFIGS[quizId];
            Object.values(config.KEYS).forEach(key => {
                localStorage.removeItem(`${config.STORAGE_KEY}_${key}`);
            });
        });
        
        // Clear profile data
        localStorage.removeItem('userProfile');
        
        // Show success message
        showAlert('Semua data telah dihapus!', 'success');
        
        // Redirect to home after a delay
        setTimeout(() => {
            window.location.href = '/pelatihan/modul/';
        }, 1500);
        
        universalModal.hide();
    };
}

function setupResetModal(modalTitle, modalBody, confirmBtn) {
    modalTitle.textContent = 'Reset Quiz';
    modalTitle.parentElement.className = 'modal-header bg-danger text-white';
    modalBody.innerHTML = `
        <p>Anda yakin ingin memulai ulang seluruh quiz?</p>
        <ul class="text-danger">
            <li>Semua jawaban akan dihapus</li>
            <li>Waktu akan direset ke 120 menit</li>
            <li>Progress saat ini akan hilang permanen</li>
        </ul>
    `;
    
    confirmBtn.className = 'btn btn-danger';
    confirmBtn.innerHTML = '<i class="bi bi-trash"></i> Reset';
    confirmBtn.onclick = function() {
        // Clear all quiz data
        storage.clear();
        currentQuestionIndex = 0;
        userAnswers = Array(QUIZ_CONFIG.QUESTION_COUNT).fill(null);
        clearInterval(countdownInterval);
        
        // Get current quiz ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const quizId = urlParams.get('id');
        
        // COMPLETELY RESET URL PARAMETERS while maintaining quiz ID
        const cleanUrl = window.location.pathname + `?id=${quizId}`;
        window.history.replaceState({}, '', cleanUrl);
        
        universalModal.hide();
        
        // Simply reload the page to ensure clean state
        window.location.reload();
    };
}

function setupGiveUpModal(modalTitle, modalBody, confirmBtn) {
    modalTitle.textContent = 'Konfirmasi';
    modalTitle.parentElement.className = 'modal-header bg-warning';
    modalBody.innerHTML = 'Apakah Anda yakin ingin menyerah dan melihat hasil saat ini?';
    
    confirmBtn.className = 'btn btn-danger';
    confirmBtn.textContent = 'Ya, Saya Yakin';
    confirmBtn.onclick = function() {
        for (let i = 0; i < questions.length; i++) {
            if (userAnswers[i] === null) {
                userAnswers[i] = {
                    question: questions[i].question,
                    options: questions[i].options,
                    correctAnswer: questions[i].answer,
                    userAnswer: null,
                    isSkipped: true
                };
            }
        }
        
        saveProgress();
        finishQuiz('gave-up'); 
        const params = new URLSearchParams(window.location.search);
        params.set('view', 'results');
        window.location.search = params.toString();
        universalModal.hide();
    };
}

function setupFinishModal(modalTitle, modalBody, confirmBtn) {
    const unansweredCount = userAnswers.filter(a => a === null || a?.isSkipped).length;
    
    modalTitle.textContent = 'Konfirmasi Penyelesaian Kuis';
    modalTitle.parentElement.className = 'modal-header bg-warning';
    modalBody.innerHTML = unansweredCount > 0 ? `
        <div class="alert alert-warning">
            <i class="bi bi-exclamation-triangle-fill"></i> 
            Masih ada <strong>${unansweredCount} soal</strong> yang belum dijawab!
        </div>
        <p>Anda yakin ingin menyelesaikan kuis sekarang?</p>
        <p class="text-muted small">Catatan: Soal yang belum dijawab/dilewati akan dihitung sebagai salah dan mendapat nilai 0 (Nol) poin.</p>
    ` : '<p>Semua soal telah dijawab. Anda yakin ingin menyelesaikan kuis sekarang?</p>';
    
    confirmBtn.className = 'btn btn-primary';
    confirmBtn.textContent = 'Ya, Selesaikan';
    confirmBtn.onclick = function() {
        finishQuiz('completed');
        const params = new URLSearchParams(window.location.search);
        params.set('view', 'results');
        window.location.search = params.toString();
        universalModal.hide();
    };
}

function setupHelpModal(modalTitle, modalBody, modalFooter) {
    modalTitle.textContent = 'Informasi';
    modalTitle.parentElement.className = 'modal-header bg-info text-white';
    modalBody.innerHTML = `
        <table class="table table-sm caption-top">
            <caption>Fungsi Elemen</caption>
            <thead>
                <tr>
                    <th scope="col">Elemen</th>
                    <th scope="col">Fungsi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="fw-bold">
                        <span class="bi bi-arrow-counterclockwise"> Reset</span>
                    </td>
                    <td>
                        Untuk menghapus semua jawaban dan waktu secara permanen.
                    </td>
                </tr>
                <tr>
                    <td class="fw-bold">
                        <span class="bi bi-pencil-square"> Edit</span>
                    </td>
                    <td>
                        Untuk kembali ke halaman soal dan mengisi soal yang belum dijawab. Ini berlaku selama waktu masih tersisa. 
                        Jika waktu telah habis, tidak bisa diedit lagi. Anda dapat menekan 
                        tombol "<span class="fw-bold bi bi-arrow-counterclockwise"> Reset</span>" 
                        untuk memulai ulang dari awal lagi.
                    </td>
                </tr>
                <tr>
                    <td class="fw-bold">
                        <span class="bi bi-download"> Cetak Hasil</span>
                    </td>
                    <td>
                        Untuk mencetak hasil dan mengunduhnya ke dalam format PDF.
                    </td>
                </tr>
            </tbody>
        </table>
    `;
    
    modalFooter.innerHTML = `
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            <i class="bi bi-check-circle"></i> Mengerti
        </button>
    `;
}

function createLandingPage() {
    const result = storage.get(QUIZ_CONFIG.KEYS.RESULTS);
    const hasPreviousResults = result && result.score !== undefined;
    
    // Get current quiz's active session (if exists and not expired)
    const activeSessions = getActiveQuizSessions();
    const currentQuizActive = activeSessions.find(session => {
        return session.storageKey === QUIZ_CONFIG.STORAGE_KEY && 
               Date.now() < session.endTime;
    });

    // Determine button text
    let mainButtonText, mainButtonIcon;
    if (currentQuizActive) {
        mainButtonText = 'Lanjutkan';
        mainButtonIcon = 'bi-arrow-return-right';
    } else if (hasPreviousResults) {
        mainButtonText = 'Lihat Hasil';
        mainButtonIcon = 'bi-eye-fill';
    } else {
        mainButtonText = 'Mulai Sekarang';
        mainButtonIcon = 'bi-play-fill';
    }

    return `
    <div class="landing-page">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="${QUIZ_CONFIG.HOMEPAGE_URL}">${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.BERANDA}</a></li>
          <li class="breadcrumb-item active text-truncate" aria-current="page">${QUIZ_CONFIG.QUIZ_TITLE}</li>
        </ol>
      </nav>
      <h3>${QUIZ_CONFIG.QUIZ_TITLE}</h3>

      ${hasPreviousResults ? `
        <div class="card mb-4 mt-3 border-primary bg-light">
          <div class="card-body">
            <h5 class="card-title"><i class="bi bi-clock-history"></i> ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.HASIL_SEBELUMNYA}</h5>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span>${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.SKOR}:</span>
${(() => {
  const maxScore = calculateMaxPossibleScore();
  const percentage = Math.round((result.score / maxScore) * 100);
  const passed = percentage >= QUIZ_CONFIG.PASSING_SCORE;
  return `
    <span class="badge ${passed ? 'bg-success' : 'bg-danger'}">
      ${result.score}/${maxScore}
    </span>
  `;
})()}
            </div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span>${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.STATUS}:</span>
${(() => {
  const maxScore = calculateMaxPossibleScore();
  const percentage = Math.round((result.score / maxScore) * 100);
  const passed = percentage >= QUIZ_CONFIG.PASSING_SCORE;
  return `
    <span class="badge ${passed ? 'bg-success' : 'bg-danger'}">
      ${passed ? 'LULUS' : 'TIDAK LULUS'}
    </span>
  `;
})()}

            </div>
            <div class="d-flex justify-content-between align-items-center">
              <span>${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.TANGGAL_PENGERJAAN}:</span>
              <span>${new Date(result.completedAt).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</span>
            </div>
          </div>
        </div>
      ` : ''}
      
      ${currentQuizActive ? `
        <div class="card mb-4 border-warning">
          <div class="card-body">
              <h5 class="card-title"><i class="bi bi-hourglass-split"></i> Kuis Berjalan</h5>
              <div class="d-flex justify-content-between align-items-center mb-2">
                  <span>Status:</span>
                  <span class="badge bg-warning text-dark">Dalam Progres</span>
              </div>
              <div class="d-flex justify-content-between align-items-center mb-2">
                  <span>Waktu tersisa:</span>
                  <span class="badge bg-danger">${formatTime((currentQuizActive.endTime - Date.now()) / 1000)}</span>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                  <span>Soal terakhir:</span>
                  <span class="badge bg-primary">${currentQuizActive.currentQuestion + 1}/${QUIZ_CONFIG.QUESTION_COUNT}</span>
              </div>
          </div>
        </div>
      ` : ''}

      <ul class="list-group text-left mt-${hasPreviousResults || currentQuizActive ? '2' : '4'}">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.JENIS_SOAL}: <span class="badge text-bg-primary rounded-pill">${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.PILIHAN_GANDA}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center" id="questionCount">
          ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.JUMLAH_SOAL}: <span class="badge text-bg-primary rounded-pill">${QUIZ_CONFIG.QUESTION_COUNT}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.WAKTU_PENGERJAAN}: <span class="badge text-bg-primary rounded-pill">${getDurationInMinutes(QUIZ_CONFIG)} Menit</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.PASSING_GRADE}: <span class="badge text-bg-primary rounded-pill">${QUIZ_CONFIG.PASSING_SCORE} dari ${QUIZ_CONFIG.MAX_SCORE}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">Sumber soal: <a href="${QUIZ_CONFIG.SUMBER_SOAL}" target="_blank" rel="nofollow"><span class="badge quiz-question-count">Klik disini <i class="bi bi-box-arrow-up-right"></i></span></a></li>
      </ul>

      <table class="table table-success table-striped-columns mt-3 caption-top">
        <caption>Perhitungan Nilai</caption>
        <thead>
          <tr>
            <th>${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.JENIS_SOAL}</th>
            <th>${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.JUMLAH_SOAL}</th>
            <th>${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.NILAI}</th>
          </tr>
        </thead>
        <tbody>
          ${QUIZ_CONFIG.SCORING_RULES.RANGES.map(range => {
            const count = range.to - range.from + 1;
            return `
              <tr>
                <td>${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.PILIHAN_GANDA}</td>
                <td>${range.from}-${range.to} (${count})</td>
                <td>${count} * ${range.score} = ${count * range.score}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
        <thead>
          <tr>
            <th>${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.JUMLAH}</th>
            <th>${QUIZ_CONFIG.QUESTION_COUNT}</th>
            <th>${QUIZ_CONFIG.MAX_SCORE}</th>
          </tr>
        </thead>
      </table>
      <p class="p-0 m-0"><i class="bi bi-check-circle"></i> Nilai Jawaban Salah/Dilewati/Tidak dijawab adalah 0 (Nol) poin.</p>
      <p class="p-0 m-0"><i class="bi bi-check-circle"></i> Tidak menjawab soal dalam waktu yang ditentukan akan dianggap selesai.</p>
      <p class="p-0 m-0"><i class="bi bi-check-circle"></i> Waktu habis, tidak bisa mengedit jawaban kecuali waktu masih tersisa.</p>
      <p class="p-0 m-0"><i class="bi bi-check-circle"></i> Anda tidak diwajibkan mengisi data peserta.</p>
      
      <div class="mt-5 mb-3 d-flex gap-2">
        <button id="mainActionBtn" class="btn btn-primary flex-grow-1">
          <i class="bi ${mainButtonIcon} me-2"></i> ${mainButtonText}
        </button>
        ${hasPreviousResults || currentQuizActive ? `
          <button id="resetQuizBtn" class="btn btn-outline-danger">
            <i class="bi bi-arrow-counterclockwise"></i> ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.RESET}
          </button>
        ` : ''}
      </div>

    </div>
  `;
}

function QuizContainer() {
  return `
    <div id="quizContainer" class="quiz-container">
        <div class="card h-100">
            <div class="card-body">
             <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
               <li class="breadcrumb-item"><a href="${QUIZ_CONFIG.HOMEPAGE_URL}">${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.BERANDA}</a></li>
               <li class="breadcrumb-item active text-truncate" aria-current="page">${QUIZ_CONFIG.QUIZ_TITLE}</li>
              </ol>
             </nav>
                <div id="questionHeader" class="mb-4">
                    <h4>${QUIZ_CONFIG.QUIZ_TITLE}</h4>
                    <div class="d-flex justify-content-between mb-3 mt-3">
                        <span id="timer"></span>
                        <button class="btn btn-sm btn-light d-none" onclick="showUniversalModal('help')">
                            <i class="bi bi-info-circle"></i> Info
                        </button>
                    </div>
                    
                    <div class="d-flex justify-content-between mt-3">
                        <span>
                            Soal <span id="currentQuestionNumber" class="badge text-bg-primary">1</span> / <strong id="totalQuestions">${questions.length}</strong>
                        </span>
                            <span id="questionPoints">(Nilai: 1 Poin)</span>
                    </div>
                    
                    <div class="progress mb-4 mt-3 bg-primary-subtle">
                        <div id="quizProgress" class="progress-bar bg-primary" 
                            role="progressbar" aria-valuenow="0" aria-valuemin="0" 
                            aria-valuemax="100" style="width: 0%">
                        </div>
                    </div>
                </div>

                <h5 id="questionText" class="mb-4 card card-body bg-light"></h5>
                <form id="optionsForm" class="mt-3 mb-4"></form>

                <div class="d-flex justify-content-between mb-3">
                    <button id="prevBtn" class="btn btn-outline-primary">
                        <i class="bi bi-chevron-left"></i> Sebelumnya
                    </button>
                    <div>
                        <button id="finishBtn" class="btn btn-primary d-none">Selesai</button>
                        <button id="nextBtn" class="btn btn-outline-primary">
                            Selanjutnya <i class="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
                
                <div class="d-flex justify-content-end gap-2">
                    <button id="giveUpBtn" class="btn btn-outline-danger btn-sm">
                        Menyerah
                    </button>
                    <button id="skipBtn" class="btn btn-outline-secondary btn-sm">
                        Lewati Soal
                    </button>
                </div>
            </div>
        </div>
        
        <div class="card-footer" id="navigasiSoal">
            <div class="mb-5 mt-5" id="questionNumbers"></div>
            <p>
                <button class="btn btn-sm btn-success question-number-info rounded-circle"></button> Soal dijawab
                <button class="btn btn-sm btn-danger rounded-circle question-number-info"></button> Soal dilewati
                <button class="btn btn-sm btn-outline-secondary rounded-circle question-number-info"></button> Soal belum dijawab
                <button class="btn btn-sm btn-primary rounded-circle question-number-info"></button> Halaman/Soal saat ini
            </p>
        </div>
    </div>
  `;
}

function setupQuizEventListeners() {
    // Navigation buttons
    document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.PREV_BTN)?.addEventListener('click', showPreviousQuestion);
    document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.NEXT_BTN)?.addEventListener('click', showNextQuestion);
    document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.SKIP_BTN)?.addEventListener('click', skipQuestion);
    
    // Finish button
    document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.FINISH_BTN)?.addEventListener('click', function() {
        showUniversalModal('finish');
    });
    
    // Give up button
    const giveUpBtn = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.GIVE_UP_BTN);
    if (giveUpBtn) {
        giveUpBtn.onclick = function() {
            showUniversalModal('give-up');
        };
    }
}

function updateURL() {
    const params = new URLSearchParams(window.location.search);
    params.set('soal', currentQuestionIndex + 1);
    params.delete('view');
    const newUrl = window.location.pathname + '?' + params.toString();
    window.history.replaceState({}, '', newUrl);
}

// getActiveQuizSession function
function getActiveQuizSessions() {
    const activeSessions = [];
    
    for (const [quizId, config] of Object.entries(QUIZ_CONFIGS)) {
        try {
            const endTime = localStorage.getItem(`${config.STORAGE_KEY}_${config.KEYS.END_TIME}`);
            const results = localStorage.getItem(`${config.STORAGE_KEY}_${config.KEYS.RESULTS}`);
            
            if (endTime && !results) {
                const remainingTime = parseInt(endTime) - Date.now();
                if (remainingTime > 0) {
                    activeSessions.push({
                        quizId,
                        storageKey: config.STORAGE_KEY,
                        config,
                        remainingTime,
                        endTime: parseInt(endTime),
                        currentQuestion: parseInt(localStorage.getItem(`${config.STORAGE_KEY}_${config.KEYS.CURRENT_QUESTION}`)) || 0,
                        quizTitle: config.QUIZ_TITLE,
                        quizUrl: `/pelatihan/modul/?id=${quizId}`
                    });
                }
            }
        } catch (e) {
            console.error("Error checking quiz session:", e);
        }
    }
    return activeSessions;
}

function updateActiveQuizTimer(endTime) {
    const timerElement = document.getElementById('activeQuizTimer');
    if (!timerElement) return;

    // Convert endTime to number if it's a string
    endTime = typeof endTime === 'string' ? parseInt(endTime) : endTime;

    const updateTimer = () => {
        const now = Date.now();
        const remainingTime = Math.max(0, endTime - now);
        
        // Format the remaining time
        const totalSeconds = Math.floor(remainingTime / 1000);
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');
        
        // Update the timer display
        if (timerElement) {
            timerElement.textContent = `${hours}:${minutes}:${seconds}`;
        }

        // If time has expired, stop the timer
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            if (timerElement) {
                timerElement.textContent = "00:00:00";
                timerElement.closest('.alert')?.classList.add('bg-danger');
            }
        }
    };

    // Update immediately and then every second
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    // Clean up when the page unloads
    window.addEventListener('beforeunload', () => {
        clearInterval(timerInterval);
    });
}

function updateQuizTimer(element, endTime) {
  const update = () => {
    const remaining = endTime - Date.now();
    if (remaining <= 0) {
      element.textContent = "00:00:00";
      element.classList.add('text-danger');
      clearInterval(element.timerInterval);
      return;
    }
    
    const totalSeconds = Math.floor(remaining / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    
    element.textContent = `${hours}:${minutes}:${seconds}`;
  };
  
  // Clear previous interval
  if (element.timerInterval) {
    clearInterval(element.timerInterval);
  }
  
  update();
  element.timerInterval = setInterval(update, 1000);
}

function setupNotificationEventListeners() {
  // Continue quiz button
  document.querySelectorAll('.continue-quiz-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const quizId = this.dataset.quizId;
      const questionNum = this.dataset.question;
      window.location.href = `/pelatihan/modul/?id=${quizId}&soal=${questionNum}`;
    });
  });
  
  // Abandon quiz button
  document.querySelectorAll('.abandon-quiz-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const quizId = this.dataset.quizId;
      showAbandonQuizModal(quizId);
    });
  });
}

function showAbandonQuizModal(quizId) {
  const config = QUIZ_CONFIGS[quizId];
  
  document.getElementById('universalModalTitle').textContent = 'Batalkan Quiz';
  document.getElementById('universalModalBody').innerHTML = `
    <p>Anda yakin ingin membatalkan quiz <strong>${config.QUIZ_TITLE}</strong>?</p>
    <div class="alert alert-danger">
      <i class="bi bi-exclamation-triangle"></i> Semua progress akan dihapus permanen!
    </div>
  `;
  
  const confirmBtn = document.getElementById('universalModalConfirmBtn');
  confirmBtn.className = 'btn btn-danger';
  confirmBtn.innerHTML = '<i class="bi bi-trash"></i> Ya, Batalkan';
  confirmBtn.onclick = function() {
    abandonQuiz(quizId);
    universalModal.hide();
  };
  
  universalModal.show();
}

function abandonQuiz(quizId) {
  const config = QUIZ_CONFIGS[quizId];
  Object.values(config.KEYS).forEach(key => {
    localStorage.removeItem(`${config.STORAGE_KEY}_${key}`);
  });
  
  showAlert('Quiz telah dibatalkan', 'success');
  displayActiveQuizzes(); // Refresh the list
}

function showNotificationsPage() {
  // Hide all other containers
  document.querySelectorAll('#mainContainer > div').forEach(div => {
    div.style.display = 'none';
  });
  
  // Show notifications container
  const notificationsContainer = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_IDS.NOTIFICATIONS_CONTAINER);
  notificationsContainer.style.display = 'block';
  
  // Display active quizzes
  displayActiveQuizzes();
}

function displayActiveQuizzes() {
  const activeQuizzesList = document.getElementById(COMMON_QUIZ_CONFIG.ELEMENT_TEXT.ACTIVE_QUIZZESS_LIST);
  const activeSessions = getAllActiveSessions();
  document.title = "Notifikasi";

  if (!activeQuizzesList) return;
  
  if (activeSessions.length === 0) {
    activeQuizzesList.innerHTML = `
      <div class="alert alert-info">
        <i class="bi bi-info-circle"></i> ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.NO_NOTIFICATION}
      </div>
    `;
    return;
  }
  
  // Add info about number of active quizzes
  const activeCount = activeSessions.length;
  const infoText = `Anda memiliki ${activeCount} kuis berjalan`;
  
  activeQuizzesList.innerHTML = `
    <div class="alert alert-info mb-3">
      <i class="bi bi-info-circle"></i> ${infoText}
    </div>
    ${activeSessions.map(session => `
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">${session.quizTitle}</h5>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span>Status:</span>
            <span class="badge bg-warning text-dark">Dalam Progres</span>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span>Waktu tersisa:</span>
            <span class="badge bg-danger" id="sessionTimer-${session.quizId}">
              ${formatTime(session.remainingTime / 1000)}
            </span>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span>Soal saat ini:</span>
            <span class="badge bg-primary">${session.currentQuestion + 1}/${session.config.QUESTION_COUNT}</span>
          </div>
          <div class="d-flex gap-2 mt-3">
            <button class="btn btn-primary btn-sm continue-quiz-btn" 
                    data-quiz-id="${session.quizId}" 
                    data-question="${session.currentQuestion + 1}">
              <i class="bi bi-arrow-return-right"></i> ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.LANJUTKAN_KUIS}
            </button>
            <button class="btn btn-outline-danger btn-sm abandon-quiz-btn" 
                    data-quiz-id="${session.quizId}">
              <i class="bi bi-x-circle"></i> ${COMMON_QUIZ_CONFIG.ELEMENT_TEXT.BATALKAN_KUIS}
            </button>
          </div>
        </div>
      </div>
    `).join('')}
  `;
  
  // Start timers for each active session
  activeSessions.forEach(session => {
    const timerElement = document.getElementById(`sessionTimer-${session.quizId}`);
    if (timerElement) {
      updateQuizTimer(timerElement, session.endTime);
    }
  });
  
  // Setup event listeners for the buttons
  setupNotificationEventListeners();
}

// Initialize
document.addEventListener('click', function(e) {
    if (e.target.closest('.continue-quiz-btn')) {
        e.preventDefault();
        const btn = e.target.closest('.continue-quiz-btn');
        const quizId = btn.getAttribute('data-quiz-id');
        const questionNum = btn.getAttribute('data-question');
        
        // Force reload with the correct URL
        window.location.href = `/pelatihan/modul/?id=${quizId}&soal=${questionNum}`;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    handleUrlParameters();
    updateActiveQuizzesBadge();
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
        new bootstrap.Tooltip(el);
    });
});

// Handle PWA installation
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    // Show the install button
    document.getElementById('installContainer').style.display = 'block';
});

document.getElementById('installBtn').addEventListener('click', async () => {
    if (!deferredPrompt) return;
    
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    // Optionally, send analytics event with outcome of user choice
    console.log(`User response to the install prompt: ${outcome}`);
    
    // We've used the prompt, and can't use it again, throw it away
    deferredPrompt = null;
    
    // Hide the install button
    document.getElementById('installContainer').style.display = 'none';
});

window.addEventListener('appinstalled', () => {
    // Hide the install button
    document.getElementById('installContainer').style.display = 'none';
    // Clear the deferredPrompt so it can be garbage collected
    deferredPrompt = null;
    // Optionally, send analytics event to indicate successful install
    console.log('PWA was installed');
});



