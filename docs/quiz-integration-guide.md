# 🎯 Quiz System Integration Guide

## 📂 Struktur File yang Harus Dibuat

```
src/
├── data/
│   └── quizData.js                    ← BUAT FILE INI
├── components/
│   ├── utils/
│   │   ├── useSlideNavigation.js      (sudah ada)
│   │   └── useQuiz.js                 ← BUAT FILE INI
│   └── slides/
│       ├── QuizSlide.jsx              ← BUAT FILE INI
│       ├── QuizInterfaceSlide.jsx     ← BUAT FILE INI
│       ├── QuizCodingSlide.jsx        ← BUAT FILE INI
│       └── ... (slides lainnya sudah ada)
└── InteractivePictoBloxModule.jsx     ← UPDATE FILE INI
```

---

## 🔧 Langkah-langkah Instalasi

### 1. Buat Folder `data/` di dalam `src/`
```bash
mkdir src/data
```

### 2. Buat File-file Baru

#### File 1: `src/data/quizData.js`
Salin kode dari artifact "Quiz System - quizData.js"

#### File 2: `src/components/utils/useQuiz.js`
Salin kode dari artifact "useQuiz.js - Custom Hook"

#### File 3: `src/components/slides/QuizSlide.jsx`
Salin kode dari artifact "QuizSlide.jsx Component"

#### File 4: `src/components/slides/QuizInterfaceSlide.jsx`
```javascript
// src/components/slides/QuizInterfaceSlide.jsx
import QuizSlide from './QuizSlide';

export default function QuizInterfaceSlide() {
  return <QuizSlide quizId="quiz-interface" />;
}
```

#### File 5: `src/components/slides/QuizCodingSlide.jsx`
```javascript
// src/components/slides/QuizCodingSlide.jsx
import QuizSlide from './QuizSlide';

export default function QuizCodingSlide() {
  return <QuizSlide quizId="quiz-coding" />;
}
```

### 3. Update `InteractivePictoBloxModule.jsx`

Tambahkan import di bagian atas:
```javascript
import QuizInterfaceSlide from './components/slides/QuizInterfaceSlide';
import QuizCodingSlide from './components/slides/QuizCodingSlide';
```

Update array `slides`:
```javascript
const slides = [
  { title: "Welcome", Component: WelcomeSlide },
  { title: "Learning Objectives", Component: LearningObjectivesSlide },
  { title: "Getting Started", Component: GettingStartedSlide },
  { title: "Interface: The Stage", Component: TheStageSlide },
  { title: "Interface: Sprite List", Component: SpriteListSlide },
  { title: "Interface: Blocks Palette", Component: BlocksPaletteSlide },
  { title: "Interface: Scripts Area", Component: ScriptsAreaSlide },
  { title: "🎯 Quiz: Interface", Component: QuizInterfaceSlide }, // ← BARU
  { title: "Hands-On Practice", Component: PracticeIntroSlide },
  { title: "Step 1: Prepare Costumes", Component: Step1CostumesSlide },
  { title: "Step 2: Right Arrow Movement", Component: Step2RightArrowSlide },
  { title: "Step 3: Left Arrow Movement", Component: Step3LeftArrowSlide },
  { title: "Step 4: Click to Speak", Component: Step4ClickToSpeakSlide },
  { title: "Saving Your Project", Component: SavingSlide },
  { title: "🎯 Quiz: Coding", Component: QuizCodingSlide }, // ← BARU
  { title: "Check Your Understanding", Component: ReflectionSlide },
  { title: "Extension Challenges", Component: ChallengesSlide },
  { title: "Congratulations!", Component: FinalMessageSlide },
];
```

---

## ✅ Verifikasi

Jalankan aplikasi:
```bash
npm run dev
```

Navigasi ke:
- **Slide 8**: Quiz tentang Interface PictoBlox (5 pertanyaan)
- **Slide 15**: Quiz tentang Coding Codie (5 pertanyaan)

---

## 🎨 Fitur Quiz yang Tersedia

### ✨ UI/UX Features:
- ✅ Progress bar per quiz
- ✅ Question counter (1/5, 2/5, dst)
- ✅ Multiple choice dengan A, B, C, D
- ✅ Visual feedback (hijau = benar, merah = salah)
- ✅ Penjelasan jawaban setelah submit
- ✅ Score tracking dengan percentage
- ✅ Badge system (🏆 Amazing, ⭐ Great, 👍 Good, 💪 Keep Practicing)
- ✅ Review jawaban di hasil akhir
- ✅ Tombol "Retake Quiz"

### 💾 Data Storage (localStorage):
- Hasil quiz disimpan dengan key: `quiz-{quizId}`
- History semua quiz: `quiz-history`
- Data yang disimpan:
  - Score (benar/total)
  - Percentage
  - Jawaban user
  - Timestamp
  - Jumlah attempts

---

## 🔧 Customize Quiz

### Menambah Pertanyaan Baru:

Edit `src/data/quizData.js`, tambahkan di array `questions`:

```javascript
{
  id: 11, // ID unik
  question: "Pertanyaan baru Anda?",
  type: "multiple-choice",
  options: [
    "Pilihan A",
    "Pilihan B",
    "Pilihan C",
    "Pilihan D"
  ],
  correctAnswer: 1, // Index jawaban benar (0 = A, 1 = B, dst)
  explanation: "Penjelasan kenapa jawaban B benar..."
}
```

### Membuat Quiz Baru:

1. Tambahkan quiz baru di `quizData.js`:
```javascript
{
  id: 'quiz-challenges',
  title: 'Quiz: Extensions',
  description: 'Test tentang challenge tambahan',
  relatedSlides: [16],
  passingScore: 60,
  questions: [/* array pertanyaan */]
}
```

2. Buat wrapper slide:
```javascript
// src/components/slides/QuizChallengesSlide.jsx
import QuizSlide from './QuizSlide';

export default function QuizChallengesSlide() {
  return <QuizSlide quizId="quiz-challenges" />;
}
```

3. Tambahkan di `slides` array di InteractivePictoBloxModule.jsx

---

## 📊 Mengakses Data Quiz dari localStorage

Buka Console Browser (F12), ketik:

```javascript
// Lihat hasil quiz interface
localStorage.getItem('quiz-quiz-interface')

// Lihat history semua quiz
localStorage.getItem('quiz-history')

// Hapus semua data quiz
localStorage.clear()
```

---

## 🎯 Tips Penggunaan untuk Siswa

1. **Tidak wajib lulus** - siswa bisa lanjut ke slide berikutnya meski salah semua
2. **Bisa retake** - tombol "Retake Quiz" tersedia kapan saja
3. **Tracking otomatis** - hasil disimpan di localStorage browser
4. **Review jawaban** - setelah selesai, bisa lihat mana yang salah

---

## 🐛 Troubleshooting

### Quiz tidak muncul?
- Pastikan semua file sudah dibuat
- Cek console browser untuk error
- Pastikan import path benar

### Data tidak tersimpan?
- Pastikan localStorage tidak disabled di browser
- Cek apakah incognito mode (data hilang saat close)

### Styling tidak sesuai?
- Pastikan Tailwind CSS sudah ter-setup
- Cek `tailwind.config.js` sudah include path yang benar

---

## 📝 Catatan Penting

- **Total slide sekarang**: 18 slide (dari 16)
- **Posisi quiz**:
  - Quiz 1 (Interface): Slide 8 (setelah materi interface)
  - Quiz 2 (Coding): Slide 15 (setelah materi coding)
- **LocalStorage**: Data tidak sinkron antar device/browser
- **Ekspor hasil**: Belum ada fitur PDF (bisa ditambahkan nanti)

---

## 🚀 Next Steps (Opsional)

Fitur tambahan yang bisa dikembangkan:
1. ✅ Timer per pertanyaan
2. ✅ Export hasil ke PDF
3. ✅ Leaderboard (jika multi-user)
4. ✅ Hint system
5. ✅ Gambar dalam pertanyaan
6. ✅ True/False questions
7. ✅ Backend integration (simpan ke database)

---

**Selamat mencoba! 🎉**

Jika ada error atau butuh bantuan, silakan tanya.