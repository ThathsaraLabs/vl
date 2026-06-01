// Vector Labs AI - Chatbot & Interactive Tools Logic

// Language dictionaries for chatbot labels and responses
const translations = {
  en: {
    placeholder: "Ask something about South Korean visa or driving license...",
    send: "Send",
    typing: "AI Assistant is formulating a response...",
    visaTitle: "K-Visa Guide",
    visaSubtitle: "Your automated assistant for South Korean visa pathways, requirements, and compliance.",
    drivingTitle: "K-Driving Licence Guide",
    drivingSubtitle: "Step-by-step assistance for license conversions, local exams, and road safety regulations.",
    welcomeVisa: "Hello! I am your K-Visa AI Assistant. I can help you with student visas (D-2), job seeker visas (D-10), professional work visas (E-7), and transition checklists. What visa path are you inquiring about?",
    welcomeDriving: "Hello! I am your K-Driving Licence AI Assistant. I can guide you through exchanging your home-country license to a Korean one, or preparing for the Korean written/practical driving exams. How can I help you today?",
    eligibilityBtn: "Visa Eligibility Quiz",
    checklistBtn: "Licence Doc Tracker",
  },
  si: {
    placeholder: "දකුණු කොරියානු වීසා හෝ රියදුරු බලපත්‍ර පිළිබඳව විමසන්න...",
    send: "යවන්න",
    typing: "සහායකයා පිළිතුරක් සූදානම් කරමින් පවතී...",
    visaTitle: "කොරියා වීසා සහායක (K-Visa Guide)",
    visaSubtitle: "දකුණු කොරියානු වීසා ක්‍රමවේද, අවශ්‍යතා සහ නීතිමය උපදෙස් සඳහා ස්වයංක්‍රීය සහායකයා.",
    drivingTitle: "කොරියා රියදුරු බලපත්‍ර සහායක (K-Driving Licence)",
    drivingSubtitle: "රියදුරු බලපත්‍ර මාරු කිරීම්, ලිඛිත/ප්‍රායෝගික විභාග සහ මාර්ග නීති රීති පිළිබඳ පියවරෙන් පියවර මගපෙන්වීම.",
    welcomeVisa: "ආයුබෝවන්! මම කොරියා වීසා AI සහායකයා. මට ඔබට ශිෂ්‍ය වීසා (D-2), රැකියා සොයන්නන්ගේ වීසා (D-10), වෘත්තීය රැකියා වීසා (E-7) සහ ලකුණු ක්‍රමවේද (Points system) පිළිබඳ අවශ්‍යතා පැහැදිලි කළ හැකිය. ඔබ දැනගැනීමට බලාපොරොත්තු වන්නේ කුමන වීසා කාණ්ඩයක් ගැනද?",
    welcomeDriving: "ආයුබෝවන්! මම කොරියා රියදුරු බලපත්‍ර AI සහායකයා. ඔබගේ මව් රටේ බලපත්‍රය කොරියානු බලපත්‍රයකට මාරු කිරීම හෝ කොරියානු රියදුරු විභාග සඳහා සූදානම් වන ආකාරය පිළිබඳව මට මගපෙන්විය හැකිය. අද මම ඔබට සහාය වන්නේ කෙසේද?",
    eligibilityBtn: "වීසා සුදුසුකම් පරීක්ෂාව",
    checklistBtn: "ලේඛන පරීක්ෂක මෙවලම",
  }
};

// Conversation datasets
const chatbotKnowledge = {
  visa: {
    en: [
      {
        keywords: ["student", "d2", "d-2", "study", "university", "academic"],
        response: `### D-2 Student Visa Requirements:
To pursue academic studies at a South Korean university, you need a **D-2 Student Visa**. 

**Core Document Checklist:**
1. **Standard Admission Letter (표준입학허가서):** Issued by the dean of the university.
2. **Certificate of Financial Solvency:** Usually a bank balance statement of **$20,000 USD** (held for over 3 months) or proof of sponsorship/scholarship.
3. **Certificate of Graduation & Academic Transcripts:** Properly apostilled or embassy-certified.
4. **Tuberculosis Test Certificate:** Required for applicants from designated countries.
5. **Language Proficiency:** TOPIK certificate (Level 3 or higher recommended) or TOEFL/IELTS scores if the course is English-medium.

*💡 Tip: Apply at the Korean Embassy in your home country at least 1.5 to 2 months before your semester begins.*`
      },
      {
        keywords: ["work", "e7", "e-7", "job", "employment", "professional"],
        response: `### E-7 Professional Employment Visa:
The **E-7 Visa** is for foreign nationals invited by public/private organizations in Korea to engage in pre-designated professional jobs.

**Core Criteria:**
1. **Education:** Master's degree in a relevant field, OR Bachelor's degree with at least 1 year of work experience, OR 5+ years of relevant working experience.
2. **Company Requirements:** The local company must employ at least 80% Korean workers (normally must have 5+ Korean employees).
3. **Minimum Salary:** Must be at least **80% of the Korean GNI (Gross National Income) per capita** of the previous year (typically around 3.2 - 3.4 Million KRW per month).

**Common Pathways:**
Many international graduates transition from a Student Visa (D-2) to a Job Seeker Visa (D-10), and then to an E-7 Visa once they secure a qualifying contract.`
      },
      {
        keywords: ["points", "e-9", "e9", "e-7-4", "e74", "transition", "visa conversion"],
        response: `### E-9 (EPS) to E-7-4 Point-System Transition:
For workers under the Employment Permit System (E-9) wishing to convert to a professional residency visa (E-7-4).

**Minimum Requirements to Apply:**
- Must have worked legally in Korea for **4+ years** within the past 10 years.
- Must secure a total score of **52 points or more** (out of 200) under the evaluation system, considering:
  - Age, TOPIK level (Korean language proficiency), and educational background.
  - Annual income (must be over 26 million KRW for the last two years).
  - Career duration and certified skills.
  - Savings in Korea, domestic assets, and recommendation letters from employers.

*📢 Conversion opens up pathways for inviting family members and permanent residency (F-5).*`
      },
      {
        keywords: ["fees", "cost", "price", "how much"],
        response: `### Korea Visa Fees:
Standard visa processing fees vary based on entry type and duration:

- **Single-entry Visa (90 days or less):** $40 USD
- **Single-entry Visa (More than 90 days):** $60 USD (e.g., D-2 Student, E-7 Work)
- **Double-entry Visa:** $70 USD
- **Multiple-entry Visa:** $90 USD

*Note: In-country visa extensions or status changes handled at the Immigration Office inside Korea typically cost **100,000 KRW to 130,000 KRW** (including Government revenue stamps).*`
      }
    ],
    si: [
      {
        keywords: ["ශිෂ්‍ය", "university", "d2", "d-2", "ඉගෙනීම", "විශ්වවිද්‍යාල"],
        response: `### D-2 ශිෂ්‍ය වීසා (Student Visa) අවශ්‍යතා:
දකුණු කොරියාවේ විශ්වවිද්‍යාලයක අධ්‍යයන කටයුතු සිදු කිරීමට **D-2 වීසා** බලපත්‍රය අවශ්‍ය වේ.

**ප්‍රධාන ලේඛන ලැයිස්තුව:**
1. **විශ්වවිද්‍යාල ඇතුළත් කිරීමේ ලිපිය (Standard Admission Letter):** විශ්වවිද්‍යාලය මගින් නිකුත් කරන ලද නිල සහතිකය.
2. **මූල්‍ය ශක්තිය සනාථ කිරීම:** අවම වශයෙන් **ඇමරිකානු ඩොලර් 20,000 ක** බැංකු තැන්පතුවක් (මාස 3කට වඩා පැරණි) හෝ ශිෂ්‍යත්ව අනුග්‍රහය දැක්වීමේ ලිපිය.
3. **අධ්‍යාපනික සහතික:** අධ්‍යාපන සහතික සහ ප්‍රතිඵල ලේඛන නිසි පරිදි Apostille හෝ තානාපති කාර්යාලයෙන් සහතික කර තිබිය යුතුය.
4. **ක්ෂය රෝග (Tuberculosis) වාර්තාව:** නම් කරන ලද රෝහලකින් ලබාගත් වෛද්‍ය වාර්තාව.
5. **භාෂා ප්‍රවීණතාවය:** TOPIK විභාගයේ Level 3 හෝ ඉහළ මට්ටමක්, නැතහොත් ඉංග්‍රීසි මාධ්‍යයෙන් ඉගෙන ගන්නේ නම් TOEFL/IELTS සහතික.

*💡 උපදෙස්: අධ්‍යයන වාරය ආරම්භ වීමට අවම වශයෙන් මාස 1.5 - 2 කට පෙර ඔබගේ රටේ ඇති කොරියානු තානාපති කාර්යාලය හරහා අයදුම් කරන්න.*`
      },
      {
        keywords: ["වැඩ", "වෘත්තීය", "e7", "e-7", "රැකියා", "job"],
        response: `### E-7 වෘත්තීය රැකියා වීසා (Professional Visa) අවශ්‍යතා:
**E-7 වීසා** යනු කොරියාවේ පිහිටි රජයේ හෝ පෞද්ගලික ආයතනයක් විසින් වෘත්තීය මට්ටමේ රැකියා සඳහා විදේශිකයන්ට ලබා දෙන වීසා කාණ්ඩයකි.

**මූලික සුදුසුකම්:**
1. **අධ්‍යාපනය:** අදාළ ක්ෂේත්‍රයෙන් පශ්චාත් උපාධියක් (Master's) හෝ අවම වශයෙන් වසර 1 ක පළපුරුද්ද සහිත උපාධියක් (Bachelor's), නැතහොත් වසර 5 කට වැඩි සේවා පළපුරුද්ද.
2. **ආයතනික අවශ්‍යතා:** අදාළ සමාගමේ සේවකයන්ගෙන් 80%ක්ම කොරියානු ජාතිකයන් විය යුතුය (අවම වශයෙන් කොරියානු සේවකයන් 5ක් සිටිය යුතුය).
3. **අවම වැටුප:** පෙර වසරේ කොරියාවේ ඒක පුද්ගල ජාතික ආදායමෙන් (GNI) අවම වශයෙන් 80% ක් විය යුතුය (දැනට මසකට දළ වශයෙන් කොරියන් වොන් මිලියන 3.2 - 3.4 කට වඩා වැඩි විය යුතුය).`
      },
      {
        keywords: ["ලකුණු", "e9", "e-9", "e74", "e-7-4", "මාරු", "conversion"],
        response: `### E-9 (EPS) සිට E-7-4 ලකුණු ක්‍රමය යටතේ වීසා මාරු කිරීම:
කොරියාවේ EPS (E-9) වීසා මත සේවය කරන ශ්‍රමිකයන්ට වඩාත් වෘත්තීය මට්ටමේ (E-7-4) වීසා කාණ්ඩයකට මාරුවීම සඳහා වන ක්‍රමවේදයයි.

**අයදුම් කිරීමට මූලික සුදුසුකම්:**
- පසුගිය වසර 10 තුළ කොරියාවේ නීත්‍යානුකූලව වසර **4 කට වඩා වැඩි** කාලයක් සේවය කර තිබීම.
- ලකුණු ක්‍රමවේදය (Point System) යටතේ ලකුණු 200 න් අවම වශයෙන් **ලකුණු 52 ක් හෝ ඊට වැඩි ප්‍රමාණයක්** ලබා ගැනීම.
- **ලකුණු ලැබෙන ප්‍රධාන අංශ:**
  - වයස, අධ්‍යාපන මට්ටම සහ TOPIK (භාෂා) මට්ටම.
  - පසුගිය වසර දෙකේ වාර්ෂික ආදායම (කොරියන් වොන් මිලියන 26කට වඩා වැඩි විය යුතුය).
  - කොරියාවේ ඉතුරුම් හෝ දේපල සහ සේවා කාලය.
  - සේවායෝජකයාගෙන් (Company Owner) ලැබෙන නිර්දේශ ලිපි.

*📢 E-7-4 වීසා බලපත්‍රයක් ලබා ගැනීමෙන් පවුලේ සාමාජිකයන් කොරියාවට ගෙන්වා ගැනීමට සහ ස්ථිර පදිංචිය (F-5 වීසා) සඳහා අයදුම් කිරීමට අවස්ථාව ලැබෙයි.*`
      },
      {
        keywords: ["ගාස්තු", "මිල", "වියදම", "money", "fee"],
        response: `### කොරියානු වීසා ගාස්තු:
සාමාන්‍ය වීසා සැකසුම් ගාස්තු ඇතුළත් විස්තරය:

- **දින 90 ට අඩු (Single-entry):** ඇමරිකානු ඩොලර් 40
- **දින 90 ට වැඩි (Single-entry):** ඇමරිකානු ඩොලර් 60 (උදා: D-2 ශිෂ්‍ය, E-7 වෘත්තීය)
- **Double-entry වීසා:** ඇමරිකානු ඩොලර් 70
- **Multiple-entry වීසා (ඕනෑම වාර ගණනක් ඇතුළු විය හැකි):** ඇමරිකානු ඩොලර් 90

*සටහන: කොරියාව තුළ පිහිටි ආගමන විගමන කාර්යාලයෙන් සිදුකරන වීසා දිගු කිරීම් හෝ වීසා මාරු කිරීම් සඳහා සාමාන්‍යයෙන් රුපියල් වෙනුවට කොරියන් වොන් 100,000 - 130,000 ක රජයේ මුද්දර ගාස්තුවක් අය කෙරේ.*`
      }
    ]
  },
  driving: {
    en: [
      {
        keywords: ["exchange", "convert", "foreign license", "sri lanka", "license exchange"],
        response: `### Exchanging a Foreign Driving Licence in Korea:
If you hold a valid driving licence from your home country (such as Sri Lanka), you can exchange it for a Korean Class 2 Ordinary Local Driving Licence.

**Process Outline:**
1. **Embassy Verification Certificate:** Obtain a validation letter of your original driving licence from your country's Embassy in Korea.
2. **Apostille:** Ensure your home licence has a verified Apostille certificate (if applicable).
3. **Certificate of Entry & Exit (출입국사실증명서):** Obtained at the local community center (Eup/Myeon/Dong) proving you have been in Korea.
4. **Physical Check & Test:** Visit a regional Driving Licence Examination Office (도로교통공단) for a physical health/eye exam.
5. **Theory Exam:**
   - **For Recognised Countries (Apostille/Agreement):** The written test is waived.
   - **For Non-recognised Countries (including Sri Lanka):** You must pass a simplified **40-question written exam** (available in English, Sinhala, Chinese, and Vietnamese). Pass score: **60/100**.

*Note: Your original foreign licence will be kept by the Korean office and can be retrieved when you return to your home country (proof of flight ticket required).*`
      },
      {
        keywords: ["test", "exam", "written test", "questions", "written exam"],
        response: `### Korean Written Driving Exam:
To obtain a Korean licence through testing or non-recognised exchange, you must pass the written theory exam.

**Key Details:**
- **Questions:** 40 multiple-choice questions selected from a bank of 1000 questions published by KoROAD.
- **Pass Marks:** 
  - **Class 1 (Large/Special/Ordinary):** 70 points or higher.
  - **Class 2 (Ordinary/Motorcycle):** 60 points or higher.
- **Languages:** English, Sinhala, Chinese, Vietnamese, and Korean are fully supported.
- **Study Resources:** You can download the official 1000-question PDF bank in English or Sinhala directly from the KoROAD website (www.koroad.or.kr) for free. Many questions are image/video-based situational judgements.`
      },
      {
        keywords: ["documents", "what to bring", "checklist"],
        response: `### Required Documents for Conversion/Testing:
When visiting the Driving Licence Examination Office, make sure to bring:

1. **Original Foreign Driving Licence** (must be valid).
2. **Embassy Certificate** of driving licence authenticity OR **Apostille**.
3. **Valid Passport** (original).
4. **Alien Registration Card (ARC)** (original, valid).
5. **Certificate of Facts on Entry & Exit** (proving entry/stay).
6. **Three (3) Passport-sized Photos** (3.5cm x 4.5cm, taken within 6 months).
7. **Processing Fee:** Around **10,000 - 15,000 KRW** for the physical check and licence issuing.`
      }
    ],
    si: [
      {
        keywords: ["මාරු", "convert", "ලයිසන්", "ශ්‍රී ලංකා", "ලංකාවේ", "driving license"],
        response: `### ලංකාවේ රියදුරු බලපත්‍රය කොරියානු බලපත්‍රයකට මාරු කිරීම:
ඔබ සතුව වලංගු ශ්‍රී ලංකා රියදුරු බලපත්‍රයක් තිබේ නම්, එය දකුණු කොරියානු 2 වන පන්තියේ (Class 2 Ordinary) රියදුරු බලපත්‍රයක් සඳහා මාරු කර ගත හැකිය.

**පියවරෙන් පියවර ක්‍රියාවලිය:**
1. **තානාපති සහතිකය (Embassy Letter):** කොරියාවේ පිහිටි ශ්‍රී ලංකා තානාපති කාර්යාලයෙන් ඔබගේ ලයිසන් එකෙහි සත්‍යතාවය තහවුරු කළ සහතික ලිපියක් ලබා ගැනීම (ගාස්තුව: වොන් 10,000 ක් පමණ වේ).
2. **ප්‍රවේශ සහ නික්මවීමේ සහතිකය (Certificate of Facts on Entry & Exit):** ඔබ කොරියාවට ඇතුළු වූ දින සහ රැඳී සිටි කාලය සනාථ කරන ලිපිය (දේශීය ප්‍රාදේශීය ලේකම් කාර්යාලයකින් හෝ ගුවන් තොටුපළෙන් ලබාගත හැක).
3. **ශරීර සුවතා පරීක්ෂණය:** කොරියානු රියදුරු බලපත්‍ර මධ්‍යස්ථානයකට (KoROAD) ගොස් ඇස් පෙනීම ඇතුළු මූලික වෛද්‍ය පරීක්ෂණයක් සිදු කිරීම.
4. **ලිඛිත විභාගය (Written Exam):** 
   - ශ්‍රී ලංකාව කොරියාව සමග සෘජු ගිවිසුම්ගත රටක් නොවන බැවින්, ලයිසන් එක මාරු කර ගැනීමට **ප්‍රශ්න 40 කින් යුත් ලිඛිත විභාගයට** පෙනී සිටිය යුතුය.
   - මෙම විභාගය සිංහල භාෂාවෙන් ලිවිය හැකිය! සමත්වීමට **ලකුණු 100 න් 60 ක්** ලබාගත යුතුය.

*සටහන: බලපත්‍රය මාරු කිරීමේදී ඔබගේ ලංකාවේ මුල් බලපත්‍රය ඔවුන් තබා ගන්නා අතර, නැවත ලංකාවට යන විට ගුවන් ටිකට්පත පෙන්වා එය නැවත ලබාගත හැකිය.*`
      },
      {
        keywords: ["විභාගය", "ප්‍රශ්න", "රියදුරු විභාගය", "exam", "written"],
        response: `### කොරියානු රියදුරු ලිඛිත විභාගය:
කොරියානු රියදුරු බලපත්‍රය ලබා ගැනීමට පවත්වන ලිඛිත විභාගය පිළිබඳ තොරතුරු:

- **විභාග ස්වභාවය:** බහුවරණ ප්‍රශ්න 40ක් විනාඩි 40ක් තුළ විසඳිය යුතුය.
- **සමත් ලකුණු:**
  - **1 වන පන්තිය (Class 1):** ලකුණු 70ක් හෝ ඊට වැඩි.
  - **2 වන පන්තිය (Class 2 - සාමාන්‍ය):** ලකුණු 60ක් හෝ ඊට වැඩි.
- **භාෂාවන්:** සිංහල, ඉංග්‍රීසි, චීන, වියට්නාම සහ කොරියානු ඇතුළු භාෂා රැසකින් විභාගයට පෙනී සිටිය හැක.
- **අධ්‍යයන ද්‍රව්‍ය:** විභාගයට එන ප්‍රශ්න 1000 ක නිල ප්‍රශ්න බැංකුව (Question Bank) KoROAD වෙබ් අඩවියෙන් සිංහල සහ ඉංග්‍රීසි භාෂාවලින් නොමිලේ බාගත හැකිය. ප්‍රශ්න බොහොමයක් රූප සටහන් සහ මාර්ග නීති සම්බන්ධ වීඩියෝ මත පදනම් වේ.`
      },
      {
        keywords: ["ලියකියවිලි", "අවශ්‍ය දේවල්", "documents", "checklist"],
        response: `### ලයිසන් මාරු කිරීමට අවශ්‍ය ලියකියවිලි:
රියදුරු බලපත්‍ර විභාග මධ්‍යස්ථානයට (KoROAD Office) යන විට පහත ලියකියවිලි අනිවාර්යයෙන්ම රැගෙන යා යුතුය:

1. **වලංගු ලංකාවේ මුල් රියදුරු බලපත්‍රය**
2. **ශ්‍රී ලංකා තානාපති කාර්යාලයෙන් ලබාගත් සහතික ලිපිය** (Embassy Letter)
3. **වලංගු විදේශ ගමන් බලපත්‍රය (Passport)**
4. **වලංගු විදේශික ලියාපදිංචි කාඩ්පත (Alien Registration Card - ARC)**
5. **ප්‍රවේශ සහ නික්මවීමේ සහතිකය (Certificate of Fact on Entry & Exit)**
6. **පසුගිය මාස 6ක් ඇතුළත ගත් 3.5cm x 4.5cm ප්‍රමාණයේ ඡායාරූප 3ක්**
7. **ගාස්තු:** වෛද්‍ය පරීක්ෂණය සහ බලපත්‍රය මුද්‍රණය කිරීම සඳහා වොන් **10,000 - 15,000** අතර මුදලක්.`
      }
    ]
  }
};

// Application State
let activeBot = "visa"; // "visa" or "driving"
let activeLang = "en"; // "en" or "si"
let chatHistory = {
  visa: [],
  driving: []
};

// DOM References
let chatHistoryContainer;
let chatInput;
let chatForm;
let typingIndicator;
let langToggleEnBtn;
let langToggleSiBtn;
let botVisaTab;
let botDrivingTab;
let widgetContainer;

// Initialize chatbots UI on load
document.addEventListener('DOMContentLoaded', () => {
  // Bind selectors if on the tools page
  chatHistoryContainer = document.getElementById('chat-history');
  chatInput = document.getElementById('chat-input');
  chatForm = document.getElementById('chat-form');
  typingIndicator = document.getElementById('typing-indicator');
  langToggleEnBtn = document.getElementById('lang-en');
  langToggleSiBtn = document.getElementById('lang-si');
  botVisaTab = document.getElementById('tab-visa');
  botDrivingTab = document.getElementById('tab-driving');
  widgetContainer = document.getElementById('interactive-widget-box');

  if (chatHistoryContainer) {
    initChatApp();
  }
});

function initChatApp() {
  // Set initial labels
  updateLanguageUI();

  // Load welcome messages if history empty
  loadWelcomeMessage();

  // Tab switching events
  if (botVisaTab && botDrivingTab) {
    botVisaTab.addEventListener('click', () => switchBot('visa'));
    botDrivingTab.addEventListener('click', () => switchBot('driving'));
  }

  // Language toggle events
  if (langToggleEnBtn && langToggleSiBtn) {
    langToggleEnBtn.addEventListener('click', () => switchLanguage('en'));
    langToggleSiBtn.addEventListener('click', () => switchLanguage('si'));
  }

  // Handle Form Submission
  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleUserSendMessage();
    });
  }

  // Handle input enter key (fallback)
  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleUserSendMessage();
      }
    });
  }

  // Bind Quick prompts clicking
  setupQuickPrompts();
}

function updateLanguageUI() {
  const dict = translations[activeLang];
  
  // Update placeholders
  if (chatInput) {
    chatInput.placeholder = dict.placeholder;
  }
  
  // Update headers
  const title = document.getElementById('chatbot-title');
  const subtitle = document.getElementById('chatbot-subtitle');
  if (title && subtitle) {
    title.textContent = activeBot === 'visa' ? dict.visaTitle : dict.drivingTitle;
    subtitle.textContent = activeBot === 'visa' ? dict.visaSubtitle : dict.drivingSubtitle;
  }

  // Update tabs style
  if (botVisaTab) {
    const label = botVisaTab.querySelector('.tab-label');
    if (label) label.textContent = activeLang === 'en' ? 'K-Visa Guide' : 'කොරියා වීසා';
  }
  if (botDrivingTab) {
    const label = botDrivingTab.querySelector('.tab-label');
    if (label) label.textContent = activeLang === 'en' ? 'K-Driving Guide' : 'රියදුරු බලපත්‍ර';
  }

  // Active button styling
  if (activeLang === 'en') {
    langToggleEnBtn.classList.add('bg-cyan-500/20', 'border-cyan-500/50', 'text-cyan-400');
    langToggleEnBtn.classList.remove('text-gray-400', 'border-transparent');
    langToggleSiBtn.classList.remove('bg-cyan-500/20', 'border-cyan-500/50', 'text-cyan-400');
    langToggleSiBtn.classList.add('text-gray-400', 'border-transparent');
  } else {
    langToggleSiBtn.classList.add('bg-cyan-500/20', 'border-cyan-500/50', 'text-cyan-400');
    langToggleSiBtn.classList.remove('text-gray-400', 'border-transparent');
    langToggleEnBtn.classList.remove('bg-cyan-500/20', 'border-cyan-500/50', 'text-cyan-400');
    langToggleEnBtn.classList.add('text-gray-400', 'border-transparent');
  }

  // Update specific Send button text
  const sendBtn = chatForm?.querySelector('button[type="submit"] span');
  if (sendBtn) {
    sendBtn.textContent = dict.send;
  }

  // Update quick action buttons in sidebar or above chat
  const quizBtnText = document.getElementById('btn-quiz-text');
  const checkBtnText = document.getElementById('btn-check-text');
  if (quizBtnText) quizBtnText.textContent = dict.eligibilityBtn;
  if (checkBtnText) checkBtnText.textContent = dict.checklistBtn;

  // Re-render suggestions
  renderSuggestionChips();
  // Load matching interactive widget
  renderInteractiveWidget();
}

function loadWelcomeMessage() {
  if (chatHistory[activeBot].length === 0) {
    const welcome = translations[activeLang][activeBot === 'visa' ? 'welcomeVisa' : 'welcomeDriving'];
    addMessageToDOM('bot', welcome);
    chatHistory[activeBot].push({ sender: 'bot', text: welcome });
  } else {
    // Reload historical messages in DOM
    chatHistoryContainer.innerHTML = '';
    chatHistory[activeBot].forEach(msg => {
      addMessageToDOM(msg.sender, msg.text);
    });
  }
}

function switchBot(bot) {
  if (activeBot === bot) return;
  activeBot = bot;

  // Visual Tab changes
  if (bot === 'visa') {
    botVisaTab.classList.add('bg-cyan-500/10', 'border-cyan-500/40', 'text-cyan-400');
    botVisaTab.classList.remove('border-transparent', 'text-gray-400');
    botDrivingTab.classList.remove('bg-cyan-500/10', 'border-cyan-500/40', 'text-cyan-400');
    botDrivingTab.classList.add('border-transparent', 'text-gray-400');
  } else {
    botDrivingTab.classList.add('bg-cyan-500/10', 'border-cyan-500/40', 'text-cyan-400');
    botDrivingTab.classList.remove('border-transparent', 'text-gray-400');
    botVisaTab.classList.remove('bg-cyan-500/10', 'border-cyan-500/40', 'text-cyan-400');
    botVisaTab.classList.add('border-transparent', 'text-gray-400');
  }

  updateLanguageUI();
  loadWelcomeMessage();
}

function switchLanguage(lang) {
  if (activeLang === lang) return;
  activeLang = lang;
  
  // Wipe history on switch for clean transition, or translate existing items. We'll wipe and re-welcome for consistency
  chatHistory[activeBot] = [];
  updateLanguageUI();
  loadWelcomeMessage();
}

function renderSuggestionChips() {
  const suggestionsBox = document.getElementById('suggestion-chips');
  if (!suggestionsBox) return;

  suggestionsBox.innerHTML = '';

  const prompts = {
    visa: {
      en: [
        "D-2 Student Visa documents",
        "E-9 to E-7-4 points rules",
        "How much does a visa fee cost?",
        "E-7 Professional Visa requirements"
      ],
      si: [
        "D-2 ශිෂ්‍ය වීසා ලියකියවිලි",
        "E-9 සිට E-7-4 ලකුණු ක්‍රමය",
        "වීසා ගාස්තු කොපමණද?",
        "E-7 වෘත්තීය වීසා අවශ්‍යතා"
      ]
    },
    driving: {
      en: [
        "How to exchange Sri Lankan license?",
        "What documents do I need to bring?",
        "Korean driving written test details",
        "Written exam pass marks & languages"
      ],
      si: [
        "ලංකාවේ ලයිසන් මාරු කරන්නේ කෙසේද?",
        "රැගෙන යා යුතු ලියකියවිලි මොනවාද?",
        "කොරියානු රියදුරු ලිඛිත විභාගය",
        "විභාගය සමත්වීමට කීයක් ගන්න ඕනෙද?"
      ]
    }
  };

  prompts[activeBot][activeLang].forEach(prompt => {
    const button = document.createElement('button');
    button.className = 'glass-panel px-3 py-1.5 text-xs text-left rounded-full text-cyan-300 border border-cyan-500/20 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition duration-300 ease-in-out';
    button.textContent = prompt;
    button.addEventListener('click', () => {
      if (chatInput) {
        chatInput.value = prompt;
        handleUserSendMessage();
      }
    });
    suggestionsBox.appendChild(button);
  });
}

function setupQuickPrompts() {
  // Sidebar floating cards triggers
  const quizTrigger = document.getElementById('trigger-quiz');
  const checkTrigger = document.getElementById('trigger-checklist');

  if (quizTrigger) {
    quizTrigger.addEventListener('click', () => {
      switchBot('visa');
      setTimeout(() => {
        const text = activeLang === 'en' ? 'Open Visa Eligibility Assessment Form' : 'වීසා සුදුසුකම් පරීක්ෂක පෝරමය විවෘත කරන්න';
        chatInput.value = text;
        handleUserSendMessage();
      }, 200);
    });
  }

  if (checkTrigger) {
    checkTrigger.addEventListener('click', () => {
      switchBot('driving');
      setTimeout(() => {
        const text = activeLang === 'en' ? 'Show Driving Licence Documents Checklist Tracker' : 'රියදුරු බලපත්‍ර ලේඛන පරීක්ෂක මෙවලම පෙන්වන්න';
        chatInput.value = text;
        handleUserSendMessage();
      }, 200);
    });
  }
}

function handleUserSendMessage() {
  if (!chatInput) return;
  const text = chatInput.value.trim();
  if (!text) return;

  // Add user message to DOM and State
  addMessageToDOM('user', text);
  chatHistory[activeBot].push({ sender: 'user', text: text });
  chatInput.value = '';

  // Show typing state
  if (typingIndicator) typingIndicator.classList.remove('hidden');
  chatHistoryContainer.scrollTop = chatHistoryContainer.scrollHeight;

  // Match answer in knowledge base
  let responseText = "";
  const query = text.toLowerCase();
  
  // Search custom matching rule
  const matchingPool = chatbotKnowledge[activeBot][activeLang];
  let matched = false;

  for (let i = 0; i < matchingPool.length; i++) {
    const matchedKeyword = matchingPool[i].keywords.some(kw => query.includes(kw));
    if (matchedKeyword) {
      responseText = matchingPool[i].response;
      matched = true;
      break;
    }
  }

  // Handle widget trigger words directly
  if (query.includes('eligibility') || query.includes('assessment') || query.includes('සුදුසුකම්') || query.includes('quiz') || query.includes('පරීක්ෂක')) {
    responseText = activeLang === 'en' 
      ? "Sure! I have initialized the **Visa Eligibility Interactive Quiz** in the details panel on your right. Please select your parameters to inspect paths."
      : "නිසැකවම! මම ඔබගේ දකුණු පස ඇති විස්තර පුවරුවෙහි **වීසා සුදුසුකම් විමසීම් මෙවලම** සක්‍රීය කර ඇත. කරුණාකර එහි ඇති පියවර තෝරා සුදුසුකම් පරීක්ෂා කරන්න.";
    matched = true;
  } else if (query.includes('tracker') || query.includes('checklist') || query.includes('ලේඛන') || query.includes('ලියකියවිලි')) {
    responseText = activeLang === 'en'
      ? "I have activated the **Driving Licence Document Checklist Tracker** in the right-side dashboard widget. You can check off each document as you acquire it!"
      : "මම ඔබගේ දකුණු පස ඇති පුවරුවෙහි **රියදුරු බලපත්‍ර ලේඛන පරීක්ෂක මෙවලම** සක්‍රීය කර ඇත්තෙමි. ඔබට අවශ්‍ය ලිපි ලේඛන සූදානම් කර ඇති ආකාරය එහි සලකුණු කළ හැකිය!";
    matched = true;
  }

  // Default fallback
  if (!matched) {
    if (activeBot === 'visa') {
      responseText = activeLang === 'en'
        ? `I apologize, I couldn't find a direct answer for "${text}". \n\nI can help you with student visa guides (**D-2**), professional jobs (**E-7**), and points-system transitions (**E-9 to E-7-4**). Please search with these terms or try the suggestions below!`
        : `කණගාටුයි, "${text}" සඳහා නිශ්චිත පිළිතුරක් සෙවිය නොහැකි විය. \n\nමට ඔබට ශිෂ්‍ය වීසා (**D-2**), වෘත්තීය වීසා (**E-7**) සහ ලකුණු ක්‍රමය යටතේ වීසා මාරු කිරීම් (**E-9 සිට E-7-4**) පිළිබඳව පැහැදිලි කළ හැකිය. කරුණාකර ඒ සම්බන්ධ වචනයක් යොදා නැවත සොයන්න.`;
    } else {
      responseText = activeLang === 'en'
        ? `I'm sorry, I don't have instructions matching "${text}". \n\nI can provide step-by-step guides on **exchanging your licence**, required **checklist documents**, and the written theory **exam format** in Korea. Try using one of the quick suggestions below.`
        : `කණගාටුයි, "${text}" සඳහා මගපෙන්වීමක් සෙවීමට නොහැකි විය. \n\nමට ඔබට ලංකාවේ **රියදුරු බලපත්‍රය මාරු කිරීම**, අවශ්‍ය **ලේඛන ලැයිස්තුව** සහ කොරියානු **ලිඛිත විභාගය** පිළිබඳව පියවරෙන් පියවර විස්තර කළ හැකිය. කරුණාකර එම වචන ඇතුළත් කර නැවත විමසන්න.`;
    }
  }

  // Simulate streaming response
  setTimeout(() => {
    if (typingIndicator) typingIndicator.classList.add('hidden');
    addMessageToDOM('bot', responseText);
    chatHistory[activeBot].push({ sender: 'bot', text: responseText });
    chatHistoryContainer.scrollTop = chatHistoryContainer.scrollHeight;
  }, 1000 + Math.random() * 800); // 1.0s - 1.8s random simulated latency
}

function addMessageToDOM(sender, markdownText) {
  const container = document.getElementById('chat-history');
  if (!container) return;

  const wrapper = document.createElement('div');
  wrapper.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'} mb-4 items-start`;

  const avatar = document.createElement('div');
  if (sender === 'user') {
    avatar.className = 'w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-xs font-bold text-white ml-2 order-2';
    avatar.innerHTML = '<i class="fas fa-user"></i>';
  } else {
    avatar.className = 'w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white mr-2 order-1';
    avatar.innerHTML = '<i class="fas fa-robot"></i>';
  }

  const bubble = document.createElement('div');
  bubble.className = `max-w-[78%] px-4 py-3 text-sm leading-relaxed order-2 ${
    sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'
  }`;

  // Parse custom markdown shortcuts (bold, headers, lists, tips)
  bubble.innerHTML = parseMiniMarkdown(markdownText);

  if (sender === 'user') {
    wrapper.appendChild(bubble);
    wrapper.appendChild(avatar);
  } else {
    wrapper.appendChild(avatar);
    wrapper.appendChild(bubble);
  }

  container.appendChild(wrapper);
  container.scrollTop = container.scrollHeight;
}

// Basic markdown-like regex parser for clean inline HTML elements
function parseMiniMarkdown(text) {
  let html = text;
  // Code block tags replace
  html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-black/50 font-mono text-xs p-3 rounded-lg my-2 border border-white/5 overflow-x-auto">$1</pre>');
  // Headers match
  html = html.replace(/^### (.*$)/gim, '<h4 class="text-white font-semibold font-display text-sm mt-3 mb-1">$1</h4>');
  html = html.replace(/^## (.*$)/gim, '<h3 class="text-white font-bold font-display text-base mt-4 mb-2">$1</h3>');
  // Bold match
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
  // Bullet items
  html = html.replace(/^\s*[-*]\s+(.*)$/gim, '<li class="ml-4 list-disc">$1</li>');
  // Convert line breaks to <br> outside code blocks
  html = html.replace(/\n/g, '<br>');
  // Tip block highlight
  html = html.replace(/\*💡 Tip: (.*?)\*/g, '<div class="bg-cyan-500/10 border-l-2 border-cyan-500 p-2 my-2 rounded-r text-xs text-cyan-300 font-sans">💡 Tip: $1</div>');
  html = html.replace(/\*📢 (.*?)\*/g, '<div class="bg-indigo-500/10 border-l-2 border-indigo-500 p-2 my-2 rounded-r text-xs text-indigo-300 font-sans">📢 $1</div>');

  return html;
}

// ----------------------------------------------------
// INTERACTIVE SIDEBAR WIDGET RENDERING
// ----------------------------------------------------
function renderInteractiveWidget() {
  if (!widgetContainer) return;
  widgetContainer.innerHTML = '';

  if (activeBot === 'visa') {
    renderVisaQuizWidget();
  } else {
    renderDrivingChecklistWidget();
  }
}

// Interactive Visa Eligibility Quiz
function renderVisaQuizWidget() {
  const widget = document.createElement('div');
  widget.className = 'space-y-4';

  const isEn = activeLang === 'en';

  widget.innerHTML = `
    <h3 class="text-sm font-bold text-white font-display border-b border-white/10 pb-2">
      ${isEn ? '💡 Visa Eligibility Calculator' : '💡 වීසා සුදුසුකම් ගණකය'}
    </h3>
    <div class="space-y-3">
      <div>
        <label class="block text-xs text-gray-400 mb-1">${isEn ? 'Select Current Status:' : 'වත්මන් තත්ත්වය තෝරන්න:'}</label>
        <select id="quiz-status" class="w-full text-xs bg-black/40 border border-white/10 rounded p-2 text-gray-200 focus:border-cyan-500 outline-none">
          <option value="e9">${isEn ? 'E-9 Work Visa Holder' : 'E-9 සේවා වීසා හිමියෙක්'}</option>
          <option value="d2">${isEn ? 'D-2 Academic Student' : 'D-2 විශ්වවිද්‍යාල ශිෂ්‍යයෙක්'}</option>
          <option value="d10">${isEn ? 'D-10 Job Seeker' : 'D-10 රැකියා සොයන්නෙක්'}</option>
        </select>
      </div>

      <div>
        <label class="block text-xs text-gray-400 mb-1">${isEn ? 'Korean Language (TOPIK):' : 'කොරියානු භාෂා ප්‍රවීණතාවය (TOPIK):'}</label>
        <select id="quiz-lang" class="w-full text-xs bg-black/40 border border-white/10 rounded p-2 text-gray-200 focus:border-cyan-500 outline-none">
          <option value="0">${isEn ? 'No score / Level 1' : 'TOPIK මට්ටම 1 / ලකුණු නැත'}</option>
          <option value="2">${isEn ? 'TOPIK Level 2' : 'TOPIK මට්ටම 2'}</option>
          <option value="3">${isEn ? 'TOPIK Level 3' : 'TOPIK මට්ටම 3'}</option>
          <option value="4">${isEn ? 'TOPIK Level 4' : 'TOPIK මට්ටම 4'}</option>
          <option value="5">${isEn ? 'TOPIK Level 5 or higher' : 'TOPIK මට්ටම 5 හෝ ඉහළ'}</option>
        </select>
      </div>

      <div>
        <label class="block text-xs text-gray-400 mb-1">${isEn ? 'Work Experience in Korea:' : 'කොරියාවේ සේවා කාලය:'}</label>
        <select id="quiz-exp" class="w-full text-xs bg-black/40 border border-white/10 rounded p-2 text-gray-200 focus:border-cyan-500 outline-none">
          <option value="1">${isEn ? 'Under 2 years' : 'වසර 2 ට අඩු'}</option>
          <option value="3">${isEn ? '2 to 4 years' : 'වසර 2 - 4 ත් අතර'}</option>
          <option value="5">${isEn ? '4 years or more' : 'වසර 4 ක් හෝ ඊට වැඩි'}</option>
        </select>
      </div>

      <button id="calculate-btn" class="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs py-2 px-3 rounded transition duration-200">
        ${isEn ? 'Evaluate Eligibility' : 'සුදුසුකම් ගණනය කරන්න'}
      </button>

      <div id="quiz-result" class="hidden p-3 rounded bg-white/5 border border-white/10 text-xs">
      </div>
    </div>
  `;

  widgetContainer.appendChild(widget);

  // Bind calculation button
  const calcBtn = widget.querySelector('#calculate-btn');
  const resultDiv = widget.querySelector('#quiz-result');

  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const status = widget.querySelector('#quiz-status').value;
      const lang = parseInt(widget.querySelector('#quiz-lang').value);
      const exp = parseInt(widget.querySelector('#quiz-exp').value);

      resultDiv.classList.remove('hidden');
      resultDiv.innerHTML = '';

      let score = 0;
      let pathText = "";

      if (status === 'e9') {
        // E-9 evaluation for E-7-4
        score += lang * 12; // Language points estimate
        score += exp * 8;   // Experience points estimate
        
        const passLimit = 52;
        const eligible = score >= passLimit || (lang >= 3 && exp >= 5);

        if (isEn) {
          pathText = `<strong>Simulated Score: ~${score} points.</strong><br><br>`;
          if (eligible) {
            pathText += `🟩 <strong>Highly Eligible!</strong> You fulfill the minimum requirements for E-7-4 Point Conversion. Ensure your company recommends you and your salary meets the criteria.`;
          } else {
            pathText += `🟨 <strong>Additional Points Needed.</strong> You need at least 52 points to convert. Recommended actions: Study to achieve TOPIK Level 3/4 and complete safety courses.`;
          }
        } else {
          pathText = `<strong>ලකුණු ප්‍රමාණය: ~${score} පමණ වේ.</strong><br><br>`;
          if (eligible) {
            pathText += `🟩 <strong>ඉහළ සුදුසුකම් මට්ටමක්!</strong> ඔබ E-7-4 වීසා මාරු කිරීමේ මූලික සුදුසුකම් සපුරා ඇත. ඔබගේ ආදායම සහ ආයතන ප්‍රධානියාගේ ලිපි සූදානම් කරගන්න.`;
          } else {
            pathText += `🟨 <strong>තව ලකුණු අවශ්‍යයි.</strong> වීසා මාරු කිරීමට අවම ලකුණු 52ක් ඕනෑ. නිර්දේශය: TOPIK මට්ටම 3 හෝ 4 සමත්වීමට උත්සාහ කරන්න.`;
          }
        }
      } else if (status === 'd2') {
        // D-2 student
        if (isEn) {
          pathText = `🟩 <strong>Pathway: D-2 ➔ D-10 ➔ E-7 Professional</strong><br><br>`;
          if (lang >= 3) {
            pathText += `Your TOPIK level is good! Once graduated, you can shift to D-10 Job Seeker visa. Securing an employment contract with a starting salary > 3.2M KRW / month qualifies you for E-7.`;
          } else {
            pathText += `Improve your language level. Korean companies require a minimum of TOPIK Level 3 or higher to sponsor E-7 work visas.`;
          }
        } else {
          pathText = `🟩 <strong>ක්‍රියාවලිය: D-2 ➔ D-10 ➔ E-7 වෘත්තීය</strong><br><br>`;
          if (lang >= 3) {
            pathText += `ඔබගේ භාෂා මට්ටම ප්‍රමාණවත්ය! අධ්‍යයන නිම වූ පසු D-10 (රැකියා සොයන්නන්ගේ) වීසා එකකට මාරු වී, වොන් මිලියන 3.2+ මාසික වැටුපක් ඇති රැකියාවක් ලැබුණු පසු E-7 සඳහා අයදුම් කරන්න.`;
          } else {
            pathText += `භාෂා ප්‍රවීණතාවය වැඩි කරගන්න. බොහෝ සමාගම් E-7 වීසා අනුග්‍රහය දැක්වීමට අවම වශයෙන් TOPIK 3 මට්ටම බලාපොරොත්තු වේ.`;
          }
        }
      } else {
        // D-10 Job seeker
        if (isEn) {
          pathText = `🟩 <strong>Pathway: E-7-1 Job Offer Transition</strong><br><br>`;
          pathText += `Search for registered enterprises. Check if the company has at least 5 Korean employees and your salary matches the 80% GNI ceiling.`;
        } else {
          pathText = `🟩 <strong>ක්‍රියාවලිය: D-10 සිට E-7-1 වෘත්තීය රැකියාවකට</strong><br><br>`;
          pathText += `සුදුසු සමාගමක් සොයාගන්න. සමාගම තුළ අවම වශයෙන් කොරියානු සේවකයන් 5 දෙනෙකු සිටින බව තහවුරු කරගන්න.`;
        }
      }

      resultDiv.innerHTML = pathText;
    });
  }
}

// Interactive Driving Licence Checklist Tracker
function renderDrivingChecklistWidget() {
  const widget = document.createElement('div');
  widget.className = 'space-y-4';

  const isEn = activeLang === 'en';

  widget.innerHTML = `
    <h3 class="text-sm font-bold text-white font-display border-b border-white/10 pb-2">
      ${isEn ? '🚗 Licence Exchange Checklist' : '🚗 බලපත්‍ර ලේඛන පරීක්ෂකය'}
    </h3>
    <p class="text-[11px] text-gray-400">
      ${isEn ? 'Check off items as you gather them for your application at the KoROAD office:' : 'රියදුරු බලපත්‍ර කාර්යාලයට යාමට පෙර සූදානම් කළ යුතු ලියකියවිලි මෙතැනින් ලකුණු කරන්න:'}
    </p>

    <div class="space-y-2 mt-2">
      <label class="flex items-start text-xs text-gray-200 cursor-pointer select-none">
        <input type="checkbox" class="mt-0.5 mr-2 accent-cyan-500 rounded border-white/10 bg-black/40">
        <span>${isEn ? 'Original Home Country Licence (Valid)' : 'ලංකාවේ වලංගු මුල් රියදුරු බලපත්‍රය'}</span>
      </label>

      <label class="flex items-start text-xs text-gray-200 cursor-pointer select-none">
        <input type="checkbox" class="mt-0.5 mr-2 accent-cyan-500 rounded border-white/10 bg-black/40">
        <span>${isEn ? 'Embassy Certificate (Verification letter)' : 'කොරියාවේ ලංකා තානාපති කාර්යාල ලිපිය'}</span>
      </label>

      <label class="flex items-start text-xs text-gray-200 cursor-pointer select-none">
        <input type="checkbox" class="mt-0.5 mr-2 accent-cyan-500 rounded border-white/10 bg-black/40">
        <span>${isEn ? 'Passport (Original & Valid)' : 'විදේශ ගමන් බලපත්‍රය (Passport)'}</span>
      </label>

      <label class="flex items-start text-xs text-gray-200 cursor-pointer select-none">
        <input type="checkbox" class="mt-0.5 mr-2 accent-cyan-500 rounded border-white/10 bg-black/40">
        <span>${isEn ? 'Alien Registration Card (ARC)' : 'විදේශික හැඳුනුම්පත (ARC)'}</span>
      </label>

      <label class="flex items-start text-xs text-gray-200 cursor-pointer select-none">
        <input type="checkbox" class="mt-0.5 mr-2 accent-cyan-500 rounded border-white/10 bg-black/40">
        <span>${isEn ? 'Fact Sheet of Entry & Exit (출입국사실증명)' : 'ප්‍රවේශ සහ නික්මවීමේ සහතික ලිපිය'}</span>
      </label>

      <label class="flex items-start text-xs text-gray-200 cursor-pointer select-none">
        <input type="checkbox" class="mt-0.5 mr-2 accent-cyan-500 rounded border-white/10 bg-black/40">
        <span>${isEn ? '3 Photos (3.5 x 4.5 cm)' : 'ඡායාරූප 3 ක් (3.5 x 4.5 cm)'}</span>
      </label>

      <label class="flex items-start text-xs text-gray-200 cursor-pointer select-none">
        <input type="checkbox" class="mt-0.5 mr-2 accent-cyan-500 rounded border-white/10 bg-black/40">
        <span>${isEn ? 'Processing Fee (~15,000 KRW cash/card)' : 'අයදුම්පත් ගාස්තුව (වොන් 15,000)'}</span>
      </label>
    </div>

    <div id="checklist-progress" class="p-2 text-[11px] text-center text-cyan-300 bg-cyan-950/20 border border-cyan-500/10 rounded mt-3">
      0 / 7 Completed
    </div>
  `;

  widgetContainer.appendChild(widget);

  // Bind checkbox state calculations
  const checkboxes = widget.querySelectorAll('input[type="checkbox"]');
  const progressText = widget.querySelector('#checklist-progress');

  checkboxes.forEach(box => {
    box.addEventListener('change', () => {
      const checkedCount = widget.querySelectorAll('input[type="checkbox"]:checked').length;
      if (progressText) {
        if (checkedCount === 7) {
          progressText.className = "p-2 text-[11px] text-center text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 rounded mt-3 font-semibold";
          progressText.innerHTML = isEn 
            ? "🟩 All Documents Ready! Visit KoROAD office." 
            : "🟩 සියලු ලියකියවිලි සූදානම්! විභාග මධ්‍යස්ථානයට යන්න.";
        } else {
          progressText.className = "p-2 text-[11px] text-center text-cyan-300 bg-cyan-950/20 border border-cyan-500/10 rounded mt-3";
          progressText.textContent = isEn 
            ? `${checkedCount} / 7 Checked` 
            : `${checkedCount} / 7 ක් සූදානම් කර ඇත`;
        }
      }
    });
  });
}
