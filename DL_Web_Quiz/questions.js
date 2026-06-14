// Multilingual Driving License Questions Data
const questions = [
  {
    "num": 1,
    "answer": 0,
    "sinhala": {
      "stem": "ටොන් 4.5ක ට්‍රක් රථයකින් ටොන් 1.5ක වාහනයක් ඇදගෙන යාමේදී (Towing) නුසුදුසු බලපත්‍ර සංකලනය කුමක්ද?",
      "choices": [
        "1 වන කාණ්ඩයේ සාමාන්‍ය බලපත්‍රය සහ විශාල ඇදගෙන යාමේ බලපත්‍රය",
        "2 වන කාණ්ඩයේ සාමාන්‍ය බලපත්‍රය සහ විශාල ඇදගෙන යාමේ බලපත්‍රය",
        "1 වන කාණ්ඩයේ විශාල බලපත්‍රය සහ කුඩා ඇදගෙන යාමේ බලපත්‍රය",
        "ඉහත සියල්ලම සුදුසු වේ"
      ]
    },
    "english": {
      "stem": "Which of the following combinations is not desirable as a driver's license when towing a 1.5-ton towed automobile using a 4.5-ton truck?",
      "choices": [
        "Class 1 regular license and large tow vehicle license",
        "Class 2 regular license and large tow vehicle license",
        "Class 1 large motor vehicle license and small tow vehicle license",
        "All of the above are appropriate"
      ]
    },
    "korean": {
      "stem": "4.5톤 트럭을 이용하여 1.5톤 피견인 자동차(트레일러 등)를 견인할 때, 운전면허 조합으로 바람직하지 않은 것은?",
      "choices": [
        "제1종 보통면허 및 대형견인차면허",
        "제2종 보통면허 및 대형견인차면허",
        "제1종 대형면허 및 소형견인차면허",
        "위의 조합 모두 적합하다"
      ]
    }
  },
  {
    "num": 2,
    "answer": 2,
    "sinhala": {
      "stem": "ජාත්‍යන්තර රියදුරු බලපත්‍රයක් (International License) නිකුත් කිරීම ප්‍රතික්ෂේප කළ හැකි අවස්ථාවක් වන්නේ:",
      "choices": [
        "රියදුරුට වයස අවුරුදු 60 ඉක්මවා ඇති විට",
        "රියදුරු නව රථයක් මිලදී ගෙන නොමැති විට",
        "මාර්ග රථවාහන පනත උල්ලංඝනය කිරීම නිසා පැනවූ දඩ මුදල් ගෙවා නොමැති විට (ගෙවීමේ කාලය ඉකුත් වූ)",
        "රියදුරුට පෙනීමේ දුර්වලතාවයක් පවතින විට"
      ]
    },
    "english": {
      "stem": "In which of the following cases can an application for the issuance of an international driver's license be rejected?",
      "choices": [
        "If the driver is over 60 years old",
        "If the driver has not purchased a new vehicle",
        "If a fine imposed for violating the Road Traffic Act has not been paid (deadline for payment expired)",
        "If the driver has minor visual impairment"
      ]
    },
    "korean": {
      "stem": "다음 중 국제운전면허증 발급 신청이 거부될 수 있는 경우는?",
      "choices": [
        "운전자의 나이가 60세 이상인 경우",
        "운전자가 신차를 구매하지 않은 경우",
        "도로교통법 위반으로 부과된 과태료를 납부하지 않은 경우 (납부 기한 경과)",
        "운전자에게 경미한 시각 장애가 있는 경우"
      ]
    }
  },
  {
    "num": 3,
    "answer": 1,
    "sinhala": {
      "stem": "නිකුත් කළ දින සිට ජාත්‍යන්තර රියදුරු බලපත්‍රයක වලංගු කාලය කොපමණද?",
      "choices": [
        "මාස 6 කි",
        "අවුරුදු 1 කි",
        "අවුරුදු 2 කි",
        "අවුරුදු 5 කි"
      ]
    },
    "english": {
      "stem": "What is the validity period for an international driver's license issued by the municipal or Provincial Police Commissioner from the date of issue?",
      "choices": [
        "Six months",
        "One year",
        "Two years",
        "Five years"
      ]
    },
    "korean": {
      "stem": "시·도경찰청장이 발급한 국제운전면허증의 발급일로부터 유효기간은 얼마인가?",
      "choices": [
        "6개월",
        "1년",
        "2년",
        "5년"
      ]
    }
  },
  {
    "num": 4,
    "answer": 1,
    "sinhala": {
      "stem": "ආසන 15කට නොවැඩි හදිසි මගී ප්‍රවාහන වාහනයක් පැදවීමට තිබිය යුතු පූර්ව අවශ්‍යතාවය කුමක්ද?",
      "choices": [
        "2 වන කාණ්ඩයේ සාමාන්‍ය බලපත්‍රය සහ පැය 2ක පුහුණුව",
        "1 වන කාණ්ඩයේ සාමාන්‍ය බලපත්‍රය සහ පැය 3ක මාර්ග ආරක්ෂණ අධ්‍යාපනය",
        "विशेष වාහන බලපත්‍රය සහ පැය 5ක පුහුණුව",
        "කිසිදු විශේෂ අධ්‍යාපනයක් අවශ්‍ය නොවේ"
      ]
    },
    "english": {
      "stem": "Which of the following is a prerequisite for driving an emergency passenger vehicle with a prescribed seating capacity of no more than 15 persons?",
      "choices": [
        "Class 2 driver's license for ordinary motor vehicles and two hours of traffic safety education",
        "Class 1 driver's license for ordinary motor vehicles and three hours of traffic safety education",
        "Special vehicle license and five hours of practical training",
        "No special education is required"
      ]
    },
    "korean": {
      "stem": "지정된 승차 정원이 15명 이하인 긴급 여객 자동차를 운전하기 위한 전제 조건은?",
      "choices": [
        "제2종 보통 운전면허 및 2시간의 교통안전교육",
        "제1종 보통 운전면허 및 3시간의 교통안전교육",
        "특수자동차면허 및 5시간의 기능 교육",
        "별도의 특별 교육은 필요하지 않음"
      ]
    }
  },
  {
    "num": 5,
    "answer": 2,
    "sinhala": {
      "stem": "ශිෂ්‍ය රියදුරු බලපත්‍රයක (Learner's Permit) වලංගු කාලය කොපමණද?",
      "choices": [
        "මාස 3 කි",
        "මාස 6 කි",
        "නිකුත් කළ දින සිට වසර 1 කි",
        "වසර 2 කි"
      ]
    },
    "english": {
      "stem": "Which of the following is the period of validity for a student license?",
      "choices": [
        "Three months from the date of issue",
        "Six months from the date of issue",
        "One year from the date of issue",
        "Two years from the date of issue"
      ]
    },
    "korean": {
      "stem": "다음 중 연습운전면허의 유효기간은?",
      "choices": [
        "발급일로부터 3개월",
        "발급일로부터 6개월",
        "발급일로부터 1년",
        "발급일로부터 2년"
      ]
    }
  },
  {
    "num": 6,
    "answer": 1,
    "sinhala": {
      "stem": "රියදුරු බලපත්‍රයක කොන්දේසි ඇතුළත් කිරීමේදී, බලපත්‍රයේ එය ලියා දක්වන ආකාරය පිළිබඳ වැරදි ප්‍රකාශය කුමක්ද?",
      "choices": [
        "ස්වයංක්‍රීය සම්ප්‍රේෂණය (Automatic Transmission)",
        "හස්තීය සම්ප්‍රේෂණය (A manual transmission)",
        "විශේෂ උපකරණ අවශ්‍යතාවය",
        "ශ්‍රවණාධාරක භාවිතය"
      ]
    },
    "english": {
      "stem": "Which of the criteria for imposing the conditions of a driver's license is not correct with regard to how a driver's license is written?",
      "choices": [
        "An automatic transmission",
        "A manual transmission",
        "Special equipment requirements",
        "Hearing aid usage"
      ]
    },
    "korean": {
      "stem": "운전면허 기재 방식과 관련하여 운전면허 조건 부과 기준 중 올바르지 않은 것은?",
      "choices": [
        "자동변속기 (A)",
        "수동변속기 (M)",
        "특수 제동 장치 등 신체장애인용 차량 보조장치",
        "청각장애인용 보청기 착용"
      ]
    }
  },
  {
    "num": 7,
    "answer": 1,
    "sinhala": {
      "stem": "කිලෝග්‍රෑම් 780 ක මුළු බරක් සහිත වාහනයක් ආසන 11 ක මගී වාහනයකින් ඇදගෙන යාමට නම් රියදුරු සතු විය යුතු බලපත්‍රය කුමක්ද?",
      "choices": [
        "2 වන කාණ්ඩයේ සාමාන්‍ය බලපත්‍රය පමණි",
        "1 වන කාණ්ඩයේ සාමාන්‍ය මෝටර් රථ සහ කුඩා ඇදගෙන යාමේ වාහන (Small Towing) බලපත්‍රය",
        "1 වන කාණ්ඩයේ විශාල වාහන බලපත්‍රය පමණි",
        "විශේෂ ට්‍රේලර් බලපත්‍රය පමණි"
      ]
    },
    "english": {
      "stem": "A vehicle with a total weight of 780 kilograms is to be towed with an 11-seater passenger vehicle. Which driver's license must the driver hold?",
      "choices": [
        "Class 2 driver's license for ordinary motor vehicles only",
        "Class 1 driver's license for ordinary motor vehicles and for small towing vehicles",
        "Class 1 large motor vehicle license only",
        "Special trailer license only"
      ]
    },
    "korean": {
      "stem": "총중량이 780킬로그램인 피견인 자동차를 11인승 승합자동차로 견인하려고 한다. 운전자가 소지해야 하는 운전면허는?",
      "choices": [
        "제2종 보통 운전면허만 있으면 됨",
        "제1종 보통 운전면허 및 소형견인차면허",
        "제1종 대형면허만 있으면 됨",
        "특수 대형견인차면허만 있으면 됨"
      ]
    }
  },
  {
    "num": 8,
    "answer": 0,
    "sinhala": {
      "stem": "නිශ්චිත බලපත්‍ර මඟින් පැදවිය හැකි වාහන වර්ග පිළිබඳ නිවැරදි ප්‍රකාශ දෙක (2) කුමක්ද?",
      "choices": [
        "ඇස්ෆල්ට් බෙදාහරින්නෙකු (Asphalt distributor) 1 වන කාණ්ඩයේ විශාල මෝටර් රථ බලපත්‍රයකින් පැදවිය හැක; යතුරුපැදියක් 2 වන කාණ්ඩයේ කුඩා මෝටර් රථ බලපත්‍රයකින් පැදවිය හැක",
        "ඕනෑම ට්‍රක් රථයක් 2 වන කාණ්ඩයේ සාමාන්‍ය බලපත්‍රයකින් පැදවිය හැක",
        "ත්‍රිරෝද රථයක් පැදවීමට විශාල වාහන බලපත්‍රයක් අවශ්‍ය වේ",
        "බස් රථයක් පැදවීමට ශිෂ්‍ය බලපත්‍රය ප්‍රමාණවත් වේ"
      ]
    },
    "english": {
      "stem": "Which two of the following statements about the types of vehicles that can be driven by specific licenses are correct?",
      "choices": [
        "An asphalt distributor may be driven by a Class 1 large motor vehicle license; a motorcycle may be driven by a Class 2 small motor vehicle license",
        "Any truck can be driven by a Class 2 ordinary license",
        "A three-wheeled vehicle requires a large motor vehicle license",
        "A student license is sufficient to drive a commercial bus"
      ]
    },
    "korean": {
      "stem": "특정 면허로 운전할 수 있는 차량 종류에 대한 다음 설명 중 올바른 것 2가지는?",
      "choices": [
        "아스팔트 살포기는 제1종 대형면허로 운전할 수 있으며, 이륜자동차는 제2종 소형면허로 운전할 수 있다",
        "제2종 보통면허가 있으면 모든 화물자동차를 운전할 수 있다",
        "삼륜자동차를 운전하려면 대형면허가 필수적이다",
        "연습면허만 있으면 영업용 시내버스를 운전할 수 있다"
      ]
    }
  },
  {
    "num": 9,
    "answer": 1,
    "sinhala": {
      "stem": "අයෙකුට ආසන 12ක මගී වාහනයක් පැදවීමට අවශ්‍ය නම්, ඔහු ලබාගත යුතු බලපත්‍ර වර්ගය කුමක්ද?",
      "choices": [
        "2 වන කාණ්ඩයේ සාමාන්‍ය බලපත්‍රය",
        "1 වන කාණ්ඩයේ සාමාන්‍ය මෝටර් රථ බලපත්‍රය",
        "1 වන කාණ්ඩයේ විශාල වාහන බලපත්‍රය",
        "2 වන කාණ්ඩයේ විශේෂ බලපත්‍රය"
      ]
    },
    "english": {
      "stem": "One intends to drive a 12-seater passenger vehicle. Which license type must one obtain?",
      "choices": [
        "Class 2 driver's license for ordinary motor vehicles",
        "Class 1 driver's license for ordinary motor vehicles",
        "Class 1 large motor vehicle license",
        "Class 2 special vehicle license"
      ]
    },
    "korean": {
      "stem": "12인승 승합자동차를 운전하려고 한다. 취득해야 하는 면허 종류는?",
      "choices": [
        "제2종 보통 운전면허",
        "제1종 보통 운전면허",
        "제1종 대형 운전면허",
        "제2종 특수자동차면허"
      ]
    }
  },
  {
    "num": 10,
    "answer": 1,
    "sinhala": {
      "stem": "පහත සඳහන් කණ්ඩායම් අතරින් 2 වන කාණ්ඩයේ සාමාන්‍ය මෝටර් රථ බලපත්‍රයක් ලබා ගත හැක්කේ කා හටද?",
      "choices": [
        "සම්පූර්ණයෙන්ම අන්ධ පුද්ගලයන්ට",
        "බිහිරි පුද්ගලයන්ට (Deaf)",
        "දරුණු මානසික ආබාධ සහිත අයට",
        "වයස අවුරුදු 14 ට අඩු අයට"
      ]
    },
    "english": {
      "stem": "Which of the following groups of people can obtain a Class 2 driver's license for ordinary motor vehicles?",
      "choices": [
        "Those who are completely blind",
        "Those who are deaf",
        "Those with severe mental disabilities",
        "Those under 14 years of age"
      ]
    },
    "korean": {
      "stem": "다음 중 제2종 보통 운전면허를 취득할 수 있는 사람은?",
      "choices": [
        "앞을 보지 못하는 사람 (전맹)",
        "듣지 못하는 사람 (청각장애인)",
        "정신질환이 있거나 중증 지적장애가 있는 사람",
        "14세 미만인 사람"
      ]
    }
  },
  {
    "num": 11,
    "answer": 1,
    "sinhala": {
      "stem": "මාර්ග රථවාහන පනතට අනුව \"මෝටර් බයිසිකලයක්\" (Motor Bicycle) ලෙස අර්ථ දක්වන නිවැරදි ප්‍රමිතිය කුමක්ද?",
      "choices": [
        "50cc දක්වා පමණක්",
        "එන්ජින් ධාරිතාව 125cc දක්වා හෝ උපරිම නිමැවුම 11kW දක්වා",
        "250cc දක්වා පමණක්",
        "150cc ට වැඩි සියලුම ද්වි රෝද වාහන"
      ]
    },
    "english": {
      "stem": "What is the correct definition standard of a motor bicycle under the Road Traffic Act?",
      "choices": [
        "Displacement of up to 50 cubic centimeters only",
        "Displacement of up to 125 cubic centimeters or maximum rated output of up to 11 kilowatts",
        "Displacement of up to 250 cubic centimeters only",
        "All two-wheeled vehicles above 150 cubic centimeters"
      ]
    },
    "korean": {
      "stem": "도로교통법상 원동기장치자전거의 올바른 정의 기준은?",
      "choices": [
        "배기량 50시시 이하의 이륜자동차만 해당",
        "배기량 125시시 이하의 이륜자동차 또는 최고정격출력 11킬로와트 이하의 원동기를 단 차",
        "배기량 250시시 이하의 이륜자동차만 해당",
        "배기량 150시시 이상의 모든 이륜자동차"
      ]
    }
  },
  {
    "num": 12,
    "answer": 1,
    "sinhala": {
      "stem": "1 වන කාණ්ඩයේ විශාල මෝටර් රථ බලපත්‍ර (Class 1 Large) පරීක්ෂණයට පෙනී සිටීමට සුදුසුකම් ලබන්නේ කවුද?",
      "choices": [
        "වසර 2ක පළපුරුද්ද සහ වයස අවුරුදු 18 පිරුණු අය",
        "වසර 1කට වඩා රිය පැදවීමේ පළපුරුද්දක් ඇති සහ අවම වශයෙන් වයස අවුරුදු 19ක් වූ අය",
        "මාස 6ක පළපුරුද්ද සහ වයස අවුරුදු 20 පිරුණු අය",
        "පළපුරුද්ද අවශ්‍ය නොවන අතර වයස අවුරුදු 21 පිරුණු අය"
      ]
    },
    "english": {
      "stem": "Which of the following criteria allows one to take the Class 1 test for large motor vehicles?",
      "choices": [
        "A person who has more than two years of driving experience and is at least 18 years old",
        "A person who has more than one year of driving experience and is at least 19 years old",
        "A person who has more than six months of driving experience and is at least 20 years old",
        "A person with no experience who is at least 21 years old"
      ]
    },
    "korean": {
      "stem": "제1종 대형면허 시험에 응시할 수 있는 올바른 기준은?",
      "choices": [
        "운전경력이 2년 이상이고 나이가 만 18세 이상인 사람",
        "운전경력이 1년 이상이고 나이가 만 19세 이상인 사람",
        "운전경력이 6개월 이상이고 나이가 만 20세 이상인 사람",
        "운전경력이 없어도 나이가 만 21세 이상인 사람"
      ]
    }
  },
  {
    "num": 13,
    "answer": 1,
    "sinhala": {
      "stem": "වංචනික හෝ අසත්‍ය ලෙස රියදුරු බලපත්‍රයක් ලබාගත් අයෙකුට, එය අවලංගු කළ දින සිට කොපමණ කාලයක් යනතුරු නැවත බලපත්‍රයක් ලබා ගැනීම තහනම්ද?",
      "choices": [
        "වසර 1 කි",
        "වසර 2 කි",
        "වසර 3 කි",
        "වසර 5 කි"
      ]
    },
    "english": {
      "stem": "If a driver's license is acquired by false or fraudulent means, how long will the person be prohibited from acquiring a license?",
      "choices": [
        "One year from the date of revocation",
        "Two years from the date of revocation",
        "Three years from the date of revocation",
        "Five years from the date of revocation"
      ]
    },
    "korean": {
      "stem": "거짓이나 그 밖의 부정한 수단으로 운전면허를 취득한 경우, 면허가 취소된 날로부터 얼마 동안 면허 취득이 제한되는가?",
      "choices": [
        "취소된 날부터 1년",
        "취소된 날부터 2년",
        "취소된 날부터 3년",
        "취소된 날부터 5년"
      ]
    }
  },
  {
    "num": 14,
    "answer": 2,
    "sinhala": {
      "stem": "පාරේ රිය පැදවීමේ පරීක්ෂණයකින් (Road Test) අසමත් වූ අයෙකුට නැවත පරීක්ෂණයට පෙනී සිටිය හැක්කේ දින කීයකට පසුවද?",
      "choices": [
        "පසුදිනම",
        "දින 2 කට පසු",
        "දින 3 කට පසු",
        "සතියකට පසු"
      ]
    },
    "english": {
      "stem": "A person who fails the road driving test may take the test again after how many days?",
      "choices": [
        "The very next day",
        "Two days",
        "Three days",
        "One week"
      ]
    },
    "korean": {
      "stem": "도로주행시험에서 불합격한 사람은 불합격한 날로부터 며칠이 지난 후에 다시 시험에 응시할 수 있는가?",
      "choices": [
        "바로 다음 날",
        "2일 지난 후",
        "3일 지난 후",
        "1주일 지난 후"
      ]
    }
  },
  {
    "num": 15,
    "answer": 0,
    "sinhala": {
      "stem": "\"යහපත් රිය පැදවීමේ සැතපුම් ක්‍රමය\" (Good driving mileage system) පිළිබඳ වැරදි පැහැදිලි කිරීම් දෙක (2) කුමක්ද?",
      "choices": [
        "දඩ මුදල් නොගෙවූ අයටද මෙයට සහභාගී විය හැක; සහ පොරොන්දුව (Pledge) අතරතුර අනතුරක් සිදුවුවහොත් එම පුද්ගලයාට නැවත පොරොන්දුව ලබාගත නොහැක",
        "ආරක්ෂිතව රිය පදවන අයට මෙයින් ලකුණු ලැබේ",
        "මෙය රියදුරන් දිරිමත් කරන පද්ධතියකි",
        "මෙයට ඕනෑම බලපත්‍රලාභියෙකුට සම්බන්ධ විය හැක"
      ]
    },
    "english": {
      "stem": "What are two inappropriate explanations for the good driving mileage system?",
      "choices": [
        "Those who have not paid a fine can participate; and if an accident occurs during the pledge, the person cannot take the pledge again",
        "Those who drive safely receive points under this system",
        "It is a system designed to encourage safe driving behavior",
        "Any licensed driver can apply and participate in the pledge"
      ]
    },
    "korean": {
      "stem": "착한운전 마일리지 제도에 대한 설명 중 적절하지 않은 것 2가지는?",
      "choices": [
        "과태료를 납부하지 않은 사람도 참여할 수 있으며, 서약 기간 중 사고가 발생하면 다시 서약할 수 없다",
        "서약 후 안전운전을 실천하면 마일리지 점수를 받는 제도이다",
        "운전자의 자발적인 안전운전 습관을 기르기 위한 제도이다",
        "면허를 소지한 운전자라면 누구나 신청하여 서약에 참여할 수 있다"
      ]
    }
  },
  {
    "num": 16,
    "answer": 1,
    "sinhala": {
      "stem": "මෝටර් බයිසිකල් ගණයට වැටෙන \"පුද්ගලික ප්‍රවාහන උපකරණ\" (Personal transport devices - උදා: Electric Scooter) පිළිබඳ වැරදි අර්ථදැක්වීම කුමක්ද?",
      "choices": [
        "උපරිම වේගය පැයට කිලෝමීටර් 25 කි",
        "ආරෝහණ කෝණය (Ascent angle) අංශක 25 කට වඩා අඩු විය යුතුය",
        "මිනිස් බලයෙන් හෝ එන්ජිමෙන් ක්‍රියා කරයි",
        "කුඩා ප්‍රමාණයේ උපකරණයකි"
      ]
    },
    "english": {
      "stem": "Which of the following is not the correct definition of personal transport devices that are motor bicycles?",
      "choices": [
        "The maximum speed limit is 25 kilometers per hour",
        "The ascent angle is less than 25 degrees",
        "It operates using human power or an electric motor",
        "It is a compact personal mobility device"
      ]
    },
    "korean": {
      "stem": "원동기장치자전거 중 개인형 이동장치(PM)의 올바른 정의가 아닌 것은?",
      "choices": [
        "최고속도는 시속 25킬로미터로 제한된다",
        "등판 각도가 25도 미만이어야 한다",
        "인력 또는 전동기에 의해 구동된다",
        "소형 개인 이동수단이다"
      ]
    }
  },
  {
    "num": 17,
    "answer": 1,
    "sinhala": {
      "stem": "පුද්ගලික ප්‍රවාහන උපකරණ (Personal transport devices) සඳහා වන නිවැරදි ප්‍රමිතිය කුමක්ද?",
      "choices": [
        "වාහනයේ බර කිලෝග්‍රෑම් 50 ට වඩා වැඩි විය යුතුය",
        "වාහනයේ මුළු බර කිලෝග්‍රෑම් 30 කට වඩා අඩු විය යුතුය",
        "එහි ආසන 3 ක් තිබිය යුතුය",
        "වේගය පැයට කිලෝමීටර් 50 ඉක්මවිය යුතුය"
      ]
    },
    "english": {
      "stem": "Which of the following is correctly explained regarding the standards for personal transport devices?",
      "choices": [
        "The weight of the vehicle should be more than 50 kilograms",
        "The weight of the vehicle should be less than 30 kilograms",
        "The vehicle must have at least three seats",
        "The speed must exceed 50 kilometers per hour"
      ]
    },
    "korean": {
      "stem": "개인형 이동장치의 기준에 대해 올바르게 설명한 것은?",
      "choices": [
        "차량의 중량이 50킬로그램 이상이어야 한다",
        "차량의 중량이 30킬로그램 미만이어야 한다",
        "최소 3개 이상의 좌석을 갖추어야 한다",
        "속도가 시속 50킬로미터를 초과해야 한다"
      ]
    }
  },
  {
    "num": 18,
    "answer": 1,
    "sinhala": {
      "stem": "කුමන ක්‍රියාකාරකම් දෙකක් (2) නිසා රියදුරු බලපත්‍රයක් ලබා ගැනීම වසර 2කට තහනම් වේද?",
      "choices": [
        "වේග සීමාව ඉක්මවා යාම සහ වැරදි ලෙස වාහන නැවැත්වීම",
        "බලපත්‍රයක් නොමැතිව 3 වතාවක් රිය පැදවීම සහ වෙනත් අයෙකු වෙනුවෙන් විභාගයට පෙනී සිටීම (Cheating/Proxy)",
        "සංඥා ලාම්පු උල්ලංඝනය කිරීම සහ දඩ නොගෙවීම",
        "රක්ෂණයක් නොමැතිව ධාවනය සහ වාහන අලුත් නොකිරීම"
      ]
    },
    "english": {
      "stem": "Which two actions cause someone to be barred from acquiring a license for two years?",
      "choices": [
        "Speeding and parking violations",
        "Driving without a license three times and applying for a test on behalf of someone else (cheating/proxy)",
        "Violating traffic signals and failing to pay fines",
        "Driving without insurance and failing to renew vehicle registration"
      ]
    },
    "korean": {
      "stem": "다음 중 2년 동안 운전면허 취득 결격 사유에 해당하는 행위 2가지는?",
      "choices": [
        "속도 위반 및 주정차 위반",
        "무면허 운전 3회 적발 및 운전면허 시험 대리 응시 (부정행위/proxy)",
        "신호 위반 및 범칙금 미납",
        "무보험 운전 및 차량 등록 갱신 미이행"
      ]
    }
  },
  {
    "num": 19,
    "answer": 1,
    "sinhala": {
      "stem": "ඉංග්‍රීසි භාෂාවෙන් නිකුත් කරන රියදුරු බලපත්‍රයක් පිළිබඳ වැරදි ප්‍රකාශය කුමක්ද?",
      "choices": [
        "එය විදේශ රටවල් කිහිපයක පිළිගනු ලැබේ",
        "එය පිළිගනු ලබන රටක රැඳී සිටින කාලය කුමක් වුවත් (Length of stay) කාල සීමාවකින් තොරව භාවිතා කළ හැක",
        "එහි රියදුරුගේ තොරතුරු ඉංග්‍රීසියෙන් ඇත",
        "එය ජාත්‍යන්තර ගමන් බිමන් පහසු කරයි"
      ]
    },
    "english": {
      "stem": "Which of the following is not correct regarding a driver's license in English?",
      "choices": [
        "It is recognized and accepted in several foreign countries",
        "It can be used regardless of the length of stay in a country where it is recognized",
        "It displays the driver's personal information in English",
        "It facilitates international travel and driving privileges"
      ]
    },
    "korean": {
      "stem": "영문 운전면허증에 대한 설명 중 올바르지 않은 것은?",
      "choices": [
        "여러 해외 국가에서 그대로 인정되어 사용할 수 있다",
        "인정 국가에서의 체류 기간과 관계없이 무제한으로 사용할 수 있다",
        "운전자의 개인 정보가 영문으로 표기된다",
        "국제 여행 시 편리하게 운전할 수 있도록 돕는다"
      ]
    }
  },
  {
    "num": 20,
    "answer": 1,
    "sinhala": {
      "stem": "විදුලි බලයෙන් ක්‍රියා කරන යතුරුපැදියක් (Motorcycle) ලෙස හැඳින්වීමට නම් එහි උපරිම ශ්‍රේණිගත නිමැවුම (Maximum rated output) කොපමණ විය යුතුද?",
      "choices": [
        "5kW හෝ ඊට අඩු",
        "11kW හෝ ඊට අඩු",
        "20kW හෝ ඊට අඩු",
        "50kW හෝ ඊට අඩු"
      ]
    },
    "english": {
      "stem": "A motorcycle is defined as a two-wheeled vehicle with a maximum rated output of what or less when powered by electricity?",
      "choices": [
        "5 kilowatts",
        "11 kilowatts",
        "20 kilowatts",
        "50 kilowatts"
      ]
    },
    "korean": {
      "stem": "이륜자동차 중 전기를 동력으로 하는 경우, 최고정격출력이 몇 이하일 때 원동기장치자전거로 정의되는가?",
      "choices": [
        "5킬로와트",
        "11킬로와트",
        "20킬로와트",
        "50킬로와트"
      ]
    }
  },
  {
    "num": 21,
    "answer": 1,
    "sinhala": {
      "stem": "\"කර්බ් ගල් පේළියක්\" (Line of curb stones) යන්නෙහි නිවැරදි අර්ථ දැක්වීම කුමක්ද?",
      "choices": [
        "වාහන ධාවන තීරු වෙන් කරන රේඛාවකි",
        "පදික වේදිකාවලින් (Sidewalks) ප්‍රධාන මාර්ගය (Roadways) වෙන් කර හඳුනා ගැනීම සඳහා ගල් හෝ වෙනත් ද්‍රව්‍යවලින් සෑදූ රේඛාවකි",
        "වේග සීමා සලකුණු කරන ගල් පේළියකි",
        "මංසන්ධිවල නතර කරන රේඛාවකි"
      ]
    },
    "english": {
      "stem": "What is the correct definition of a line of curb stones?",
      "choices": [
        "A line that separates individual driving lanes",
        "A line consisting of rocks or other material for distinguishing roadways from sidewalks",
        "A stone row indicating speed limit variations",
        "A solid line indicating where to stop at intersections"
      ]
    },
    "korean": {
      "stem": "경계석 선(Curb stones)의 올바른 정의는?",
      "choices": [
        "개별 주행 차로를 구분하는 선",
        "보도와 차도를 구분하기 위해 돌 등으로 이어진 선",
        "제한속도 변화를 나타내는 돌 선",
        "교차로의 정지선을 나타내는 실선"
      ]
    }
  },
  {
    "num": 22,
    "answer": 1,
    "sinhala": {
      "stem": "පදික මාරුවකදී (Crosswalk) පුද්ගලික ප්‍රවාහන උපකරණ භාවිතා කළ යුතු නිවැරදි ක්‍රමය කුමක්ද?",
      "choices": [
        "වේගයෙන් පදවාගෙන යාම",
        "උපකරණය අතින් අල්ලාගෙන හෝ තල්ලු කරගෙන පදිකයෙකු ලෙස ඇවිදගෙන යාම",
        "පදිකයන්ට ශබ්ද නගා පසෙකට වීමට පැවසීම",
        "පදික මාරුව මැද නතර කර තැබීම"
      ]
    },
    "english": {
      "stem": "What is the appropriate method of using personal transport devices at a crosswalk?",
      "choices": [
        "Riding across the crosswalk at a high speed",
        "Traversing a crosswalk while holding or walking a personal transport device",
        "Honking to clear pedestrians out of the way while riding",
        "Stopping and leaving the device in the middle of the crosswalk"
      ]
    },
    "korean": {
      "stem": "횡단보도에서 개인형 이동장치(PM)를 이용하는 올바른 방법은?",
      "choices": [
        "횡단보도를 빠른 속도로 타고 건넌다",
        "개인형 이동장치에서 내려서 이를 끌거나 들고 걸어서 건넌다",
        "주행하면서 보행자를 비키게 하기 위해 경음기를 울린다",
        "횡단보도 중간에 장치를 세워두고 내린다"
      ]
    }
  },
  {
    "num": 23,
    "answer": 2,
    "sinhala": {
      "stem": "රියදුරෙකුට වයස අවුරුදු කීයේ සිට සෑම වසර 3කට වරක්ම බලපත්‍රය අලුත් කිරීම සහ යෝග්‍යතා පරීක්ෂණය (Aptitude test) අනිවාර්ය වේද?",
      "choices": [
        "වයස අවුරුදු 65 සිට",
        "වයස අවුරුදු 70 සිට",
        "වයස අවුරුදු 75 හෝ ඊට වැඩි වූ විට",
        "වයස අවුරුදු 80 සිට"
      ]
    },
    "english": {
      "stem": "At what age is a person required to apply for license renewal and aptitude test every three years?",
      "choices": [
        "65 years or older",
        "70 years or older",
        "75 years or older",
        "80 years or older"
      ]
    },
    "korean": {
      "stem": "면허 갱신 및 적성검사를 3년마다 받아야 하는 연령 기준은?",
      "choices": [
        "만 65세 이상",
        "만 70세 이상",
        "만 75세 이상",
        "만 80세 이상"
      ]
    }
  },
  {
    "num": 24,
    "answer": 2,
    "sinhala": {
      "stem": "පුද්ගලයන් හඳුනාගැනීමේ සත්‍යාපන ක්‍රියාවලිය (Verification process) පිළිබඳ වැරදි ප්‍රකාශය කුමක්ද?",
      "choices": [
        "හැඳුනුම්පත පරීක්ෂා කිරීම සිදු කරයි",
        "ඡායාරූපය පරීක්ෂා කර බලයි",
        "අයදුම්කරුගේ කැමැත්ත නොමැතිව ඇඟිලි සලකුණු තොරතුරු ඉලෙක්ට්‍රොනිකව සත්‍යාපනය කළ හැක",
        "නිල ලේඛන මගින් තහවුරු කරනු ලබයි"
      ]
    },
    "english": {
      "stem": "Which of the following is not correct regarding the verification process for identifying individuals?",
      "choices": [
        "Verification of the national identification card is performed",
        "The applicant's photograph is checked and verified",
        "Fingerprint information may be verified electronically without the applicant's consent",
        "Identification is confirmed via official government documents"
      ]
    },
    "korean": {
      "stem": "운전면허 시험 시 본인 확인 절차에 대한 설명 중 올바르지 않은 것은?",
      "choices": [
        "주민등록증 등 국가 공인 신분증 확인이 이루어진다",
        "신청서의 사진과 실제 얼굴을 대조하여 확인한다",
        "신청자의 동의 없이도 지문 정보를 전자적으로 임의 조회할 수 있다",
        "공식 정부 문서 또는 신분증명서로 신원을 확인한다"
      ]
    }
  },
  {
    "num": 25,
    "answer": 1,
    "sinhala": {
      "stem": "ශිෂ්‍ය බලපත්‍රයක් (Student license) සහිතව පුහුණුවෙමින් සිටින විට එය අවලංගු වීමට හේතු වන අනතුර කුමක්ද?",
      "choices": [
        "වාහනය සුළු වශයෙන් සීරීමකට ලක්වීම",
        "රියදුරු විසින් තුවාල හෝ මරණ සිදුවූ අනතුරක් සිදු කර ඇති විට",
        "වාහනයේ ටයරයක් පිපිරීම",
        "සංඥා ලාම්පුවක් අසල වාහනය නතර කර තැබීම"
      ]
    },
    "english": {
      "stem": "In which circumstance is a student's license revoked in the event of an accident while practicing?",
      "choices": [
        "When the vehicle undergoes minor cosmetic scratching",
        "When the driver has caused an accident that involves injury or death",
        "When a tire on the practice vehicle punctures",
        "When the vehicle stalls or stops near a traffic signal"
      ]
    },
    "korean": {
      "stem": "연습운전면허를 소지하고 주행 연습을 하던 중, 연습면허가 취소되는 경우는?",
      "choices": [
        "차량 외관에 경미한 스크래치 조작 실수를 낸 경우",
        "운전 중 사람을 사상(부상 또는 사망)에 이르게 하는 교통사고를 일으킨 경우",
        "연습 차량의 타이어가 펑크 난 경우",
        "신호등 근처에서 차량 시동을 꺼뜨린 경우"
      ]
    }
  },
  {
    "num": 26,
    "answer": 1,
    "sinhala": {
      "stem": "බලපත්‍රය අත්හිටුවීමට (Suspended) ඉඩ ඇති අයෙකු, නිශ්චිත මාර්ග ආරක්ෂණ අධ්‍යාපනය (Traffic safety education) සඳහා අයදුම් කළ යුත්තේ කොහේටද?",
      "choices": [
        "ප්‍රාදේශීය ලේකම් කාර්යාලයට",
        "නගර සභා හෝ පළාත් පොලිස් කොමසාරිස් (Municipal or Provincial Police Commissioner) වෙත",
        "මෝටර් රථ ප්‍රවාහන දෙපාර්තමේන්තුවට පමණි",
        "ළඟම ඇති රෝහලට"
      ]
    },
    "english": {
      "stem": "Where should a person apply for specific traffic safety education if they are likely to have their license suspended?",
      "choices": [
        "Local Community Administration Center",
        "Municipal or Provincial Police Commissioner",
        "Department of Motor Vehicles only",
        "The nearest general hospital"
      ]
    },
    "korean": {
      "stem": "면허 정지 처분을 받을 가능성이 있는 사람이 특별교통안전교육을 신청해야 하는 곳은?",
      "choices": [
        "지역 주민센터 (행정복지센터)",
        "도로교통공단 (또는 시·도경찰청장 지정 기관)",
        "자동차등록사업소",
        "인근 종합병원"
      ]
    }
  },
  {
    "num": 27,
    "answer": 2,
    "sinhala": {
      "stem": "එක් ඇසක් පමණක් පෙනෙන අයෙකුට (Blind in one eye) 1 වන කාණ්ඩයේ සාමාන්‍ය බලපත්‍රයක් ලබා ගැනීමට නම් අනෙක් ඇසෙහි තිබිය යුතු දෘෂ්ටි තීව්‍රතාවය කුමක්ද?",
      "choices": [
        "0.5 තීව්‍රතාවය",
        "0.6 තීව්‍රතාවය",
        "0.8 තීව්‍රතාවය සහ අංශක 120ක තිරස් දෘෂ්ටි පරාසය (Horizontal field)",
        "1.0 තීව්‍රතාවය"
      ]
    },
    "english": {
      "stem": "If a person who is blind in one eye intends to obtain a Class 1 ordinary license, what is the required visual acuity of the other eye?",
      "choices": [
        "0.5 acuity",
        "0.6 acuity",
        "0.8 acuity and a horizontal field of 120 degrees",
        "1.0 acuity"
      ]
    },
    "korean": {
      "stem": "한쪽 눈은 보지 못하고 다른 쪽 눈만 보는 사람이 제1종 보통면허를 취득하려는 경우, 한 눈의 시력 기준은?",
      "choices": [
        "시력 0.5 이상",
        "시력 0.6 이상",
        "시력 0.8 이상이고, 수평시야가 120도 이상이어야 함",
        "시력 1.0 이상"
      ]
    }
  },
  {
    "num": 28,
    "answer": 2,
    "sinhala": {
      "stem": "වයස අවුරුදු 65 ත් 75 ත් අතර 1 වන කාණ්ඩයේ බලපත්‍රලාභීන් කොපමණ කාලයකට වරක් යෝග්‍යතා පරීක්ෂණය (Aptitude test) ගත යුතුද?",
      "choices": [
        "සෑම වසරකම",
        "වසර 3 කට වරක්",
        "සෑම වසර පහකටම (5) වරක්",
        "වසර 10 කට වරක්"
      ]
    },
    "english": {
      "stem": "How often is a person between 65 and 75 with a Class 1 license required to take an aptitude test?",
      "choices": [
        "Every year",
        "Every three years",
        "Every five years",
        "Every ten years"
      ]
    },
    "korean": {
      "stem": "만 65세 이상 75세 미만인 제1종 면허 소지자는 적성검사를 몇 년마다 받아야 하는가?",
      "choices": [
        "매년",
        "3년마다",
        "5년마다",
        "10년마다"
      ]
    }
  },
  {
    "num": 29,
    "answer": 0,
    "sinhala": {
      "stem": "රියදුරන් තමන්ගේ බලපත්‍රය පොලිසියට භාර දිය යුතු (Surrender) අවස්ථා දෙක (2) තෝරන්න.",
      "choices": [
        "බලපත්‍රය අවලංගු කළ විට (Revoked) සහ රිය පැදවීමේ යෝග්‍යතා පරීක්ෂණයක් සඳහා දැනුම් දී ඇති විට",
        "වාහනයක් මිලදී ගන්නා විට සහ රක්ෂණය අලුත් කරන විට",
        "ලිපිනය වෙනස් වූ විට සහ වෙනත් රටකට යන විට",
        "වාහනය විකුණන විට සහ දඩයක් ගෙවන විට"
      ]
    },
    "english": {
      "stem": "Select two instances when drivers should surrender their license to the police.",
      "choices": [
        "When the license is revoked and when notified to take a driving aptitude test",
        "When purchasing a vehicle and when renewing vehicle insurance",
        "When changing residential addresses and when traveling abroad",
        "When selling a vehicle and when paying a minor traffic fine"
      ]
    },
    "korean": {
      "stem": "운전자가 경찰서에 운전면허증을 반납(제출)해야 하는 경우 2가지를 고르시오.",
      "choices": [
        "운전면허 취소 처분을 받았을 때 및 수시적성검사 통지를 받았을 때",
        "차량을 구매할 때 및 자동차 보험을 갱신할 때",
        "주소지를 변경할 때 및 해외 여행을 갈 때",
        "차량을 중고로 판매할 때 및 경미한 범칙금을 납부할 때"
      ]
    }
  },
  {
    "num": 30,
    "answer": 1,
    "sinhala": {
      "stem": "මාර්ග රථවාහන පනත පිළිබඳ නිවැරදි පැහැදිලි කිරීම කුමක්ද?",
      "choices": [
        "ඕනෑම අයෙකුට ජාත්‍යන්තර බලපත්‍රයක් නිකුත් කෙරේ",
        "දඩයක් හෝ දඩ මුදලක් සම්පූර්ණයෙන් ගෙවා නොමැති නම්, ජාත්‍යන්තර රියදුරු බලපත්‍රයක් නිකුත් නොකරනු ඇත",
        "ශිෂ්‍ය බලපත්‍රයෙන් ජාත්‍යන්තරව ධාවනය කළ හැක",
        "විදේශිකයන්ට බලපත්‍ර අවශ්‍ය නොවේ"
      ]
    },
    "english": {
      "stem": "Which explanation about the Road Traffic Act is correct?",
      "choices": [
        "An international license is issued unconditionally to anyone who applies",
        "If a fine or penalty has not been paid in full, an international driver's license may not be issued",
        "A student license allows an individual to drive internationally",
        "Foreign nationals do not require any license to operate a vehicle"
      ]
    },
    "korean": {
      "stem": "도로교통법에 대한 설명 중 올바른 것은?",
      "choices": [
        "국제운전면허증은 신청하는 모든 사람에게 조건 없이 발급된다",
        "통고처분 범칙금이나 과태료를 체납한 사람은 국제운전면허증 발급이 거부될 수 있다",
        "연습운전면허증이 있으면 해외에서도 운전할 수 있다",
        "외국 국적자는 국내에서 면허 없이도 자유롭게 운전할 수 있다"
      ]
    }
  },
  {
    "num": 31,
    "answer": 1,
    "sinhala": {
      "stem": "ඉංග්‍රීසි රියදුරු බලපත්‍රයක් (English driver's license) නිකුත් නොකරනු ලබන්නේ කා හටද?",
      "choices": [
        "1 වන කාණ්ඩයේ බලපත්‍රයක් ඇති අයට",
        "ශිෂ්‍ය බලපත්‍රයක් (Student license) සමඟ අයදුම් කරන පුද්ගලයෙකුට",
        "වයස අවුරුදු 20 ක අයෙකුට",
        "පැරණි බලපත්‍රය අලුත් කරන අයෙකුට"
      ]
    },
    "english": {
      "stem": "Which person may not be issued an English driver's license?",
      "choices": [
        "A person holding a valid Class 1 ordinary license",
        "A person who applies with a student license",
        "A person who is exactly 20 years old",
        "A person renewing an expired regular license"
      ]
    },
    "korean": {
      "stem": "다음 중 영문 운전면허증을 발급받을 수 없는 사람은?",
      "choices": [
        "유효한 제1종 보통면허를 소지한 사람",
        "연습운전면허증만 소지하고 신청하는 사람",
        "나이가 만 20세인 사람",
        "만료된 정기 면허를 갱신하는 사람"
      ]
    }
  },
  {
    "num": 32,
    "answer": 2,
    "sinhala": {
      "stem": "2 වන කාණ්ඩයේ සාමාන්‍ය බලපත්‍රයකින් (Class 2 Ordinary) පැදවීමට අවසර නොමැති වාහනය කුමක්ද?",
      "choices": [
        "කුඩා මෝටර් රථයක්",
        "සාමාන්‍ය කාර් රථයක්",
        "ඇදගෙන යන වාහනයක් / රෙකවරි වාහනයක් (A recovery vehicle)",
        "කුඩා මෝටර් බයිසිකලයක්"
      ]
    },
    "english": {
      "stem": "Which vehicle is not allowed to be driven with a Class 2 ordinary license?",
      "choices": [
        "A compact car",
        "A standard passenger sedan",
        "A recovery vehicle (tow truck)",
        "A small motor bicycle"
      ]
    },
    "korean": {
      "stem": "제2종 보통면허로 운전할 수 없는 차량은?",
      "choices": [
        "승용자동차",
        "소형 화물자동차",
        "구난차 (렉카/tow truck)",
        "원동기장치자전거"
      ]
    }
  },
  {
    "num": 33,
    "answer": 2,
    "sinhala": {
      "stem": "විභාගවලදී වංචා කිරීම (Cheating) හේතුවෙන් ප්‍රතිඵල අවලංගු වූ අයෙකුට නැවත විභාග ලිවීම තහනම් කරන්නේ කොපමණ කාලයකටද?",
      "choices": [
        "මාස 6 කට",
        "වසර 1 කට",
        "වසර දෙකකට (2)",
        "වසර 5 කට"
      ]
    },
    "english": {
      "stem": "A person whose test result is invalidated due to cheating is prohibited from taking exams for how long?",
      "choices": [
        "Six months",
        "One year",
        "Two years",
        "Five years"
      ]
    },
    "korean": {
      "stem": "부정행위(커닝 등)로 인해 시험이 무효 처리된 사람은 몇 년 동안 시험에 응시할 수 없는가?",
      "choices": [
        "6개월",
        "1년",
        "2년",
        "5년"
      ]
    }
  },
  {
    "num": 34,
    "answer": 2,
    "sinhala": {
      "stem": "බලපත්‍රය අලුත් කිරීම හෝ නිත්‍ය යෝග්‍යතා පරීක්ෂණය කල් දැමීමට (Postponing) වලංගු නොවන හේතුව කුමක්ද?",
      "choices": [
        "බන්ධනාගාරගතව සිටීම",
        "විදේශගතව සිටීම",
        "හමුදාවේ නොන්-කොමිෂන්ඩ් (Non-commissioned) නිලධාරියෙකු හෝ ඊට ඉහළ තනතුරක සේවය කිරීම",
        "බරපතල අසනීප තත්ත්වයකින් පසුවීම"
      ]
    },
    "english": {
      "stem": "Which is not a valid reason for postponing license renewal or the regular aptitude test?",
      "choices": [
        "Being imprisoned or detained in a correctional facility",
        "Staying outside the country (overseas)",
        "Serving as a non-commissioned officer or higher in the military",
        "Suffering from a sudden, severe medical illness"
      ]
    },
    "korean": {
      "stem": "운전면허 정기 적성검사 또는 면허증 갱신을 연기할 수 있는 사유로 인정되지 않는 것은?",
      "choices": [
        "교도소, 구치소 등 교정시설에 수감되거나 구금된 경우",
        "해외에 체류 중인 경우 (국외 체류)",
        "군대에서 하사 이상의 부사관이나 장교로 복무 중인 경우",
        "질병이나 재해로 인해 갑자기 입원하거나 거동이 불가능한 경우"
      ]
    }
  },
  {
    "num": 35,
    "answer": 2,
    "sinhala": {
      "stem": "බලපත්‍රය අලුත් කිරීම සඳහා සහනයක්/කල්දැමීමක් (Extension) ලබාගත් අයෙකු, එම සහන කාලය අවසන් වී කොපමණ කාලයක් තුළ බලපත්‍රය ලබාගත යුතුද?",
      "choices": [
        "මාස 1 ක් ඇතුළත",
        "මාස 2 ක් ඇතුළත",
        "මාස තුනක් (3) ඇතුළත",
        "වසරක් ඇතුළත"
      ]
    },
    "english": {
      "stem": "A person with an extension for renewal must obtain a license within what period after the extension expires?",
      "choices": [
        "Within one month",
        "Within two months",
        "Within three months",
        "Within one year"
      ]
    },
    "korean": {
      "stem": "적성검사 연기 사유가 없어진 사람은 그 사유가 없어진 날로부터 얼마 이내에 적성검사를 받아야 하는가?",
      "choices": [
        "1개월 이내",
        "2개월 이내",
        "3개월 이내",
        "1년 이내"
      ]
    }
  },
  {
    "num": 36,
    "answer": 1,
    "sinhala": {
      "stem": "රියදුරු බලපත්‍රයක පළමු අලුත් කිරීමේ කාලසීමාව (First renewal period) වන්නේ කවදාද?",
      "choices": [
        "විභාගය සමත් වී වසර 5 කින්",
        "විභාගය සමත් වී 10 වන වසරේ ජනවාරි 1 සිට දෙසැම්බර් 31 දක්වා",
        "විභාගය සමත් වූ දින සිට මාස 6 කින්",
        "වයස අවුරුදු 60 පිරුණු වර්ෂයේදී"
      ]
    },
    "english": {
      "stem": "When is the first renewal period for a driver's license?",
      "choices": [
        "Five years after passing the examination",
        "From January 1st through December 31st of the 10th year after passing the test",
        "Exactly six months from the date of the test",
        "The year the driver reaches 60 years of age"
      ]
    },
    "korean": {
      "stem": "일반적인 운전면허의 최초 갱신 기간 기준은 어떻게 되는가?",
      "choices": [
        "면허시험 합격일로부터 5년이 되는 해",
        "면허시험 합격일로부터 10년이 되는 해의 1월 1일부터 12월 31일까지",
        "면허시험 합격일로부터 정확히 6개월이 되는 날",
        "운전자의 나이가 만 60세가 되는 해"
      ]
    }
  },
  {
    "num": 37,
    "answer": 1,
    "sinhala": {
      "stem": "ටයරයක බලශක්ති පරිභෝජන කාර්යක්ෂමතාව (Energy Efficiency) කෙරෙහි වැඩිම බලපෑමක් කරන්නේ කුමන ලක්ෂණයද?",
      "choices": [
        "ටයරයේ වර්ණය සහ රටාව",
        "රෝලිං ප්‍රතිරෝධය (Rolling resistance)",
        "ටයරයේ නිෂ්පාදිත වර්ෂය",
        "රිම් එකේ හැඩය"
      ]
    },
    "english": {
      "stem": "Which tire characteristic has the greatest influence on energy consumption efficiency?",
      "choices": [
        "The color and tread pattern of the tire",
        "Rolling resistance",
        "The manufacturing year of the tire",
        "The design and shape of the wheel rim"
      ]
    },
    "korean": {
      "stem": "타이어의 특성 중 차량의 에너지 소비 효율(연비)에 가장 큰 영향을 미치는 것은?",
      "choices": [
        "타이어의 색상 및 트레드 표면 디자인",
        "회전저항 (Rolling resistance)",
        "타이어의 제조 연도 및 주차 기간",
        "휠 림의 외관 디자인과 형태"
      ]
    }
  },
  {
    "num": 38,
    "answer": 1,
    "sinhala": {
      "stem": "ව්‍යාජ ඛනිජ තෙල් නිෂ්පාදන (Fake petroleum) තම වාහනයට ඉන්ධන ලෙස දැනුවත්ව භාවිතා කරන රියදුරෙකුට පනවන දඩය කොපමණද?",
      "choices": [
        "වොන් මිලියන 1කට අඩු",
        "වොන් මිලියන 2ක් සහ වොන් මිලියන 20ක් අතර දඩයක්",
        "වොන් මිලියන 50ක දඩයක්",
        "දඩ මුදල් පනවනු නොලැබේ"
      ]
    },
    "english": {
      "stem": "What is the penalty for a driver who knowingly uses a fake petroleum product as fuel?",
      "choices": [
        "A minor fine of less than 1 million Won",
        "A fine between 2 million and 20 million Won",
        "A flat fine of 50 million Won",
        "No fine is imposed for personal vehicle use"
      ]
    },
    "korean": {
      "stem": "가짜 석유제품인 줄 알면서도 이를 자신의 차량 연료로 사용한 운전자에 대한 처벌 기준은?",
      "choices": [
        "100만 원 이하의 경미한 과태료",
        "200만 원 이상 2,000만 원 이하의 과태료",
        "5,000만 원 정액 과태료",
        "개인 차량 이용 시에는 과태료가 부과되지 않음"
      ]
    }
  },
  {
    "num": 39,
    "answer": 1,
    "sinhala": {
      "stem": "විදුලි වාහන ආරෝපණ මධ්‍යස්ථාන (EV Charging Stations) පිළිබඳ වැරදි ප්‍රකාශය කුමක්ද?",
      "choices": [
        "සියලුම EV වාහනවලට පොදු ආරෝපණ භාවිතා කළ හැක",
        "පොදු භාවිත ආරෝපණ (Common use chargers) භාවිතා කළ හැක්කේ කලින් ලියාපදිංචි කළ වාහනවලට පමණි",
        "ආරෝපණ ගාස්තු වෙනස් විය හැක",
        "ආරක්ෂිත නීති පිළිපැදිය යුතුය"
      ]
    },
    "english": {
      "stem": "Which of the following is not correct regarding electric vehicle charging stations?",
      "choices": [
        "All electric vehicles can utilize common use charging docks",
        "Only pre-registered vehicles can use common use chargers",
        "Charging rates may vary based on peak hours",
        "Safety protocols must be observed during charging"
      ]
    },
    "korean": {
      "stem": "전기자동차 충전소(충전구역)에 대한 설명 중 올바르지 않은 것은?",
      "choices": [
        "모든 전기자동차는 공용 충전 구역을 이용할 수 있다",
        "반드시 사전에 등록된 차량만 공용 충전기를 사용할 수 있다",
        "충전 요금은 전력 피크 시간대에 따라 다르게 책정될 수 있다",
        "충전 중에는 플러그 결합 등 안전 수칙을 준수해야 한다"
      ]
    }
  },
  {
    "num": 40,
    "answer": 2,
    "sinhala": {
      "stem": "ව්‍යාජ තෙල් (Counterfeit oil) යෙදීමෙන් සිදු නොවන ගැටළුව කුමක්ද?",
      "choices": [
        "එන්ජිමේ ක්‍රියාකාරිත්වය අඩපණ වීම",
        "පරිසර දූෂණය වැඩි වීම",
        "ලිහිසි භාවය වැඩි වී එන්ජිමේ ඝර්ෂණය අඩු වීම නිසා බලය අඩු වීම",
        "ඉන්ධන පද්ධතියට හානි වීම"
      ]
    },
    "english": {
      "stem": "Which is not a problem that occurs when refueling with counterfeit oil?",
      "choices": [
        "Malfunction and reduced performance of the engine",
        "Increase in harmful environmental emissions",
        "Reduced power due to reduction of engine friction caused by increased lubricity",
        "Corrosion and damage to the fuel injection system"
      ]
    },
    "korean": {
      "stem": "가짜 석유를 주유했을 때 발생하는 문제점으로 올바르지 않은 것은?",
      "choices": [
        "엔진 오작동 및 출력 저하 현상 발생",
        "환경에 유해한 배출가스의 급격한 증가",
        "윤활성 증가로 인해 엔진 마찰이 줄어들어 출력이 상승함",
        "연료 분사 시스템의 부식 및 심각한 부품 손상"
      ]
    }
  },
  {
    "num": 41,
    "answer": 0,
    "sinhala": {
      "stem": "රිය පැදවීමට පෙර පරීක්ෂා කළ යුතු ප්‍රධාන කරුණු දෙක (2) කුමක්ද?",
      "choices": [
        "ටයර්වල තත්ත්වය සහ මෝටර් රථයට ඉදිරියෙන් හෝ පසුපසින් බාධා තිබේද යන්න",
        "වාහනයේ ගුවන් විදුලිය සහ ආසනවල වර්ණය",
        "සුක්කානමෙහි ලෙදර් කවරය සහ සුවඳ විලවුන්",
        "වීදුරුවල පිරිසිදුකම පමණි"
      ]
    },
    "english": {
      "stem": "Which two items should you check before driving?",
      "choices": [
        "Condition of tires and whether there are obstacles in front or back of the car",
        "The volume of the car radio and the color of the seats",
        "The leather cover of the steering wheel and car perfume level",
        "The cleanliness of the side windows only"
      ]
    },
    "korean": {
      "stem": "운전하기 전 승차 전 단계에서 반드시 점검해야 하는 사항 2가지는?",
      "choices": [
        "타이어의 마모/공기압 상태 및 차량 전·후방의 장애물 유무",
        "카 오디오의 볼륨 상태 및 시트의 가죽 색상",
        "스티어링 휠의 커버 상태 및 차량용 방향제의 남은 양",
        "측면 유리창의 청결 상태만 확인"
      ]
    }
  },
  {
    "num": 42,
    "answer": 2,
    "sinhala": {
      "stem": "MF (Maintenance-Free) බැටරියක ආයු කාලය අවසන් වූ විට එහි දර්ශකයෙහි (Indicator) දිස්වන වර්ණය කුමක්ද?",
      "choices": [
        "කොළ පැහැය",
        "කළු පැහැය",
        "සුදු පැහැය (White)",
        "රතු පැහැය"
      ]
    },
    "english": {
      "stem": "What color is displayed on an MF (Maintenance-Free) battery when its life expires?",
      "choices": [
        "Green",
        "Black",
        "White",
        "Red"
      ]
    },
    "korean": {
      "stem": "MF(무보수) 배터리의 수명이 다했을 때 인디케이터(점검창)에 표시되는 색상은?",
      "choices": [
        "녹색 (정상)",
        "흑색 (충전 요망)",
        "백색 (교체 요망)",
        "적색"
      ]
    }
  },
  {
    "num": 43,
    "answer": 1,
    "sinhala": {
      "stem": "පහත සඳහන් දෑ අතුරින් ව්‍යාජ පෙට්‍රෝලියම් නිෂ්පාදනයක් (Fake petroleum product) ලෙස සැලකිය නොහැක්කේ කුමක්ද?",
      "choices": [
        "භූමිතෙල් මිශ්‍ර කළ ඩීසල්",
        "ඩීසල් සමඟ සියයට පහකට වඩා අඩුවෙන් ජලය මිශ්‍ර වී ඇති නිෂ්පාදනයක්",
        "රසායනික ද්‍රව්‍ය මිශ්‍ර කළ පෙට්‍රල්",
        "ප්‍රමිතියෙන් තොර වෙනත් තෙල් වර්ග"
      ]
    },
    "english": {
      "stem": "Which cannot be considered a fake petroleum product?",
      "choices": [
        "Diesel mixed with kerosene",
        "A product with less than five percent water mixed with diesel",
        "Gasoline mixed with unauthorized chemical additives",
        "Substandard alternative oil compounds"
      ]
    },
    "korean": {
      "stem": "다음 중 가짜 석유제품으로 볼 수 없는 것은?",
      "choices": [
        "자동차용 경유에 등유를 혼합한 제품",
        "정상 경유에 수분이 5% 미만으로 자연 혼합된 단순 불량 제품",
        "자동차용 휘발유에 허가되지 않은 화학 첨가제를 혼합한 제품",
        "규격 외의 유사 대체 유류 화합물"
      ]
    }
  },
  {
    "num": 44,
    "answer": 2,
    "sinhala": {
      "stem": "හයිඩ්‍රජන් වාහනවල වායු කාන්දු වීම් (Hydrogen gas leaks) පරීක්ෂා කිරීම සඳහා නුසුදුසු ක්‍රමය කුමක්ද?",
      "choices": [
        "බබල් ද්‍රාවණයක් භාවිතා කිරීම",
        "ඉලෙක්ට්‍රොනික අනාවරක භාවිතා කිරීම",
        "ගෑස් සුවඳ බැලීම මගින් තහවුරු කිරීම",
        "පීඩන මානයන් පරීක්ෂා කිරීම"
      ]
    },
    "english": {
      "stem": "Which is not a correct method to check for hydrogen gas leaks?",
      "choices": [
        "Utilizing a bubble solution on connections",
        "Using electronic gas leak detectors",
        "Confirmation by smelling gas",
        "Checking the vehicle's pressure gauges"
      ]
    },
    "korean": {
      "stem": "수소자동차의 수소 가스 누출을 확인하는 방법으로 올바르지 않은 것은?",
      "choices": [
        "연결 부위에 비눗물을 발라 기포가 생기는지 확인한다",
        "전자식 가스 누출 검지기를 활용한다",
        "냄새를 직접 맡아서 가스가 새는지 확인한다 (수소는 무색무취)",
        "차량 내부의 압력 게이지 변화를 확인한다"
      ]
    }
  },
  {
    "num": 45,
    "answer": 2,
    "sinhala": {
      "stem": "හයිඩ්‍රජන් වාහන සඳහා වන ආරක්ෂක රීති පිළිබඳ වැරදි ප්‍රකාශය කුමක්ද?",
      "choices": [
        "ගෑස් පිරවීමේදී නීති පිළිපැදිය යුතුය",
        "වාහනය අසල ගිනි පුපුරු ඇති නොකළ යුතුය",
        "දුම්පානය වාහනයෙන් මඳක් දුරින් වුවද කළ හැකිය (Smoking should be done at a distance...)",
        "කාන්දු වීම් නිතර පරීක්ෂා කළ යුතුය"
      ]
    },
    "english": {
      "stem": "Which is not correct regarding safety rules for hydrogen vehicles?",
      "choices": [
        "Regulatory instructions must be followed when refueling",
        "Sparks and open flames must be kept away from the vehicle",
        "Smoking should be done at a distance from the vehicle",
        "Frequent checking for system leaks is recommended"
      ]
    },
    "korean": {
      "stem": "수소자동차의 안전 수칙에 대한 설명 중 올바르지 않은 것은?",
      "choices": [
        "수소 충전 시에는 충전소 내 규정 지침을 준수해야 한다",
        "차량 주변에 스파크나 불꽃(인화성 물질)이 가까이 오지 않게 해야 한다",
        "흡연은 차량과 약간의 거리만 두면 차 옆에서 해도 안전하다",
        "수소 공급 계통의 정기적인 누출 점검이 권장된다"
      ]
    }
  },
  {
    "num": 46,
    "answer": 2,
    "sinhala": {
      "stem": "හයිඩ්‍රජන් වාහනවල කාන්දු වීම් පරීක්ෂා කිරීම සඳහා අනවශ්‍ය කොටස කුමක්ද?",
      "choices": [
        "හයිඩ්‍රජන් ටැංකිය",
        "පයිප්ප සම්බන්ධතා",
        "ෆියුයල් සෙල් එකෙහි බූස්ට් ඉන්වර්ටරය (Boost inverter of fuel cell)",
        "කපාට (Valves)"
      ]
    },
    "english": {
      "stem": "Which is not necessary to check for leaks in hydrogen vehicles?",
      "choices": [
        "The high-pressure hydrogen tank",
        "Structural pipe connections",
        "Boost inverter of fuel cell",
        "Control valves"
      ]
    },
    "korean": {
      "stem": "수소자동차의 누출 점검 부위로 필수적인 곳이 아닌 것은?",
      "choices": [
        "고압 수소 저장 탱크 고정부",
        "구조적 파이프 배관 연결부",
        "연료전지용 승압 인버터 내부 (전기 부품)",
        "수소 제어 밸브 부위"
      ]
    }
  },
  {
    "num": 47,
    "answer": 1,
    "sinhala": {
      "stem": "දකුණට හැරවීමේදී, ඉදිරිපස දකුණු රෝදය සහ පසුපස දකුණු රෝදය අතර භ්‍රමණ අරයෙහි පවතින වෙනස හඳුන්වන්නේ කුමන නමකින්ද?",
      "choices": [
        "බාහිර රෝද අරය වෙනස",
        "අභ්‍යන්තර රෝද අරය වෙනස (Difference of radius between the inner wheels)",
        "මධ්‍ය අරය වෙනස",
        "සමාන්තර රෝද වෙනස"
      ]
    },
    "english": {
      "stem": "What is the difference in rotation radius between the right front and rear wheels during a right turn?",
      "choices": [
        "Difference of radius between the outer wheels",
        "Difference of radius between the inner wheels",
        "Difference of the central turning axis",
        "Parallel wheel offset variation"
      ]
    },
    "korean": {
      "stem": "차량이 우회전할 때 발생하는 앞우륜(앞오른쪽 바퀴)과 뒷우륜(뒤오른쪽 바퀴)의 회전 반경 차이를 무엇이라 하는가?",
      "choices": [
        "외륜차",
        "내륜차",
        "중심축 회전차",
        "평행 차축 오프셋 변동"
      ]
    }
  },
  {
    "num": 48,
    "answer": 1,
    "sinhala": {
      "stem": "LPG වාහන සිලින්ඩර සඳහා උපරිම ගෑස් පිරවීමේ ධාරිතාව (Maximum gas charge) කොපමණද?",
      "choices": [
        "100% ක්ම පිරවිය හැක",
        "85% ක් හෝ ඊට අඩු ප්‍රමාණයක් (ඩෝනට් වර්ගය සඳහා 80%)",
        "50% ක් පමණි",
        "95% ක් දක්වා"
      ]
    },
    "english": {
      "stem": "What is the maximum gas charge for LPG vehicle containers?",
      "choices": [
        "It can be filled to 100% capacity",
        "85 percent or less (80% for donut type)",
        "Exactly 50% capacity",
        "Up to 95% capacity"
      ]
    },
    "korean": {
      "stem": "LPG 차량의 가스 용기(봄베)에 충전할 수 있는 최대 안전 충전 제한량은?",
      "choices": [
        "용기 용량의 100%까지 가득 충전 가능",
        "용기 용량의 85% 이하 (도넛형 용기는 80% 이하)",
        "정확히 용량의 50%까지만 충전 가능",
        "용기 용량의 95%까지 충전 가능"
      ]
    }
  },
  {
    "num": 49,
    "answer": 1,
    "sinhala": {
      "stem": "LPG ඉන්ධනවල ලක්ෂණ පිළිබඳ වැරදි ප්‍රකාශය කුමක්ද?",
      "choices": [
        "එය පීඩනය යටතේ ද්‍රවයක් ලෙස පවතී",
        "එය සාමාන්‍යයෙන් වාතයට වඩා සැකය (It is generally lighter than air)",
        "එය කාන්දු වුවහොත් පොළොවට බර වේ",
        "එය දැවෙනසුළු වායුවකි"
      ]
    },
    "english": {
      "stem": "Which is not correct regarding the characteristics of LPG fuel?",
      "choices": [
        "It exists as a liquid under high pressure",
        "It is generally lighter than air",
        "It settles low to the ground if a leak occurs",
        "It is an extremely flammable gas"
      ]
    },
    "korean": {
      "stem": "LPG 연료의 특성에 대한 설명 중 올바르지 않은 것은?",
      "choices": [
        "고압 상태에서는 액체로 존재한다",
        "공기보다 가벼워서 누출 시 쉽게 날아간다 (공기보다 무거움)",
        "가스가 누출되면 바닥 등 낮은 곳에 고이게 된다",
        "인화성이 매우 강한 가스이다"
      ]
    }
  },
  {
    "num": 50,
    "answer": 2,
    "sinhala": {
      "stem": "වාහනයක තිරිංග බලය (Braking force) අඩු වීමට හේතුවක් නොවන කරුණ කුමක්ද?",
      "choices": [
        "බ්‍රේක් පෑඩ් ගෙවී යාම",
        "බ්‍රේක් ඔයිල් කාන්දු වීම",
        "රීලීස් ෆෝර්ක් එක විකෘති වීම (Deformation of release fork)",
        "බ්‍රේක් ඩ්‍රම් එක රත් වීම"
      ]
    },
    "english": {
      "stem": "Which is not a cause for reducing the braking force of a vehicle?",
      "choices": [
        "Excessive wear on the brake pads",
        "Leaking brake fluid from lines",
        "Deformation of release fork",
        "Overheating of the brake drums"
      ]
    },
    "korean": {
      "stem": "차량의 제동력(브레이크 성능)을 저하시키는 원인이 아닌 것은?",
      "choices": [
        "브레이크 패드의 과도한 마모",
        "브레이크 파이프 라인의 오일 누유",
        "클러치 릴리스 포크의 변형 (동력 전달 부품)",
        "브레이크 드럼의 과열 현상 (페이드 현상)"
      ]
    }
  },
  {
    "num": 51,
    "answer": 1,
    "sinhala": {
      "stem": "රියදුරු උපකාරක පද්ධතියක් (Driving assistance device) සහිත වාහනයක් පැදවීමේ වැරදි ක්‍රමය කුමක්ද?",
      "choices": [
        "පද්ධතිය ක්‍රියාත්මක වුවද අවධානයෙන් සිටීම",
        "අනතුරු ඇඟවීමකදී මැදිහත් වීමට පෙර, රියදුරු උපකාරක උපාංගය නිදහස් වන තෙක් (Released) බලා සිටීම",
        "සුක්කානම දෑතින් අල්ලාගෙන සිටීම",
        "පද්ධතියේ සීමාවන් හඳුනාගෙන සිටීම"
      ]
    },
    "english": {
      "stem": "What is the incorrect method of driving a vehicle with a driving assistance device?",
      "choices": [
        "Remaining fully attentive even when the system is active",
        "Wait until the driving assistance device is released before you intervene during a warning",
        "Keeping both hands firmly on the steering wheel",
        "Understanding the operational limits of the assistance system"
      ]
    },
    "korean": {
      "stem": "주행 보조 장치(자율주행 보조 기능 등)가 장착된 차량을 운전하는 올바른 방법이 아닌 것은?",
      "choices": [
        "시스템이 작동 중이더라도 운전자는 항상 전방을 주시해야 한다",
        "경고음이 울리면 주행 보조 장치가 자동으로 꺼질 때까지 개입하지 않고 기다린다",
        "스티어링 휠(핸들)에 두 손을 항상 가볍게 올려두어야 한다",
        "장치의 작동 제한 조건과 한계를 명확히 숙지한다"
      ]
    }
  },
  {
    "num": 52,
    "answer": 2,
    "sinhala": {
      "stem": "ඉලෙක්ට්‍රොනික ස්ථායීතා පාලනය (ESC) පද්ධතිය පිළිබඳ වැරදි පැහැදිලි කිරීම කුමක්ද?",
      "choices": [
        "එය වාහනයේ ස්ථායීතාවය පවත්වා ගැනීමට උදවු වේ",
        "එය රෝද ලිස්සා යාම පාලනය කරයි",
        "ESC පද්ධතිය ඇති වාහනයක් කිසිම තත්ත්වයක් යටතේ ලිස්සා නොයයි",
        "එය තිරිංග පද්ධතිය සමඟ සම්බන්ධ වී ක්‍රියා කරයි"
      ]
    },
    "english": {
      "stem": "Which is not a correct explanation for electronic stability control (ESC)?",
      "choices": [
        "It assists the vehicle in maintaining directional stability",
        "It controls wheel slippage during sudden maneuvers",
        "A vehicle equipped with ESC does not slip under any circumstances",
        "It functions by integrating directly with the braking system"
      ]
    },
    "korean": {
      "stem": "차량 자세 제어 장치(ESC)에 대한 설명 중 올바르지 않은 것은?",
      "choices": [
        "차량이 미끄러질 때 방향 안정성을 유지하도록 돕는다",
        "급작스러운 조향 시 바퀴의 미끄러짐을 제어한다",
        "ESC가 장착된 차량은 어떤 도로 조건에서도 절대 미끄러지지 않는다",
        "브레이크 시스템 및 엔진 출력을 통합 제어하여 작동한다"
      ]
    }
  },
  {
    "num": 53,
    "answer": 2,
    "sinhala": {
      "stem": "ටයර්වල වායු පීඩනය අඩු වීම නිසා ඇති නොවන ගැටළුව කුමක්ද?",
      "choices": [
        "ටයරය ඉක්මනින් ගෙවී යාම",
        "ඉන්ධන පරිභෝජනය වැඩි වීම",
        "රිය පැදවීමේ වේගය ඉහළ යාම නිසා ඇතිවන අනතුරු",
        "ටයරය පුපුරා යාමේ අවදානම වැඩි වීම"
      ]
    },
    "english": {
      "stem": "Which is not an issue associated with low air pressure in tires?",
      "choices": [
        "Premature and uneven wear of the tire tread",
        "Reduced fuel efficiency (increased consumption)",
        "Danger from increased driving speed",
        "Heightened risk of a sudden tire blowout"
      ]
    },
    "korean": {
      "stem": "타이어의 공기압이 정상보다 낮을 때 발생하는 문제점이 아닌 것은?",
      "choices": [
        "타이어 트레드의 조기 마모 및 이상 마모(편마모) 발생",
        "연비 저하 (연료 소비량 증가)",
        "주행 속도가 저절로 빨라져 위험함",
        "고속 주행 중 타이어가 갑자기 파열( blowout)될 위험 증가"
      ]
    }
  },
  {
    "num": 54,
    "answer": 2,
    "sinhala": {
      "stem": "විදුලි වාහන (EVs) පිළිබඳ වැරදි ප්‍රකාශය කුමක්ද?",
      "choices": [
        "ඒවා බැටරි බලයෙන් ක්‍රියා කරයි",
        "ධාවනයේදී දුම් පිට නොකරයි",
        "EV වාහනයක් පරිසර හිතකාමී වන්නේ එය ආරෝපණය වීමට මෝටරයක් භාවිතා කරන බැවිනි",
        "නිශ්ශබ්ද ධාවනයක් ඇත"
      ]
    },
    "english": {
      "stem": "Which is not correct regarding electric vehicles (EVs)?",
      "choices": [
        "They operate purely on high-capacity battery power",
        "They emit zero tailpipe emissions while driving",
        "An EV is eco-friendly because it uses a motor to charge",
        "They feature a very quiet driving profile"
      ]
    },
    "korean": {
      "stem": "전기자동차(EV)에 대한 설명 중 올바르지 않은 것은?",
      "choices": [
        "순수하게 고용량 배터리의 전력만으로 구동된다",
        "주행 중 배출가스(매연)를 전혀 배출하지 않는다",
        "전기차는 모터 자체의 힘으로 자가 충전하므로 완전히 친환경적이다",
        "엔진이 없어 소음이 매우 적고 조용하다"
      ]
    }
  },
  {
    "num": 55,
    "answer": 1,
    "sinhala": {
      "stem": "ක්‍රෑන්ක්ෂාෆ්ට් (Crankshaft) එකෙන් නිපදවන ක්ෂණික භ්‍රමණ බලය (Instantaneous rotational force) හඳුන්වන්නේ කුමන නමකින්ද?",
      "choices": [
        "අශ්ව බලය (Horsepower)",
        "ටෝර්ක් / ව්‍යවර්ථය (Torque)",
        "ප්‍රවේගය (Velocity)",
        "ත්වරණය (Acceleration)"
      ]
    },
    "english": {
      "stem": "What is the instantaneous rotational force generated from the crankshaft?",
      "choices": [
        "Horsepower",
        "Torque",
        "Velocity",
        "Acceleration"
      ]
    },
    "korean": {
      "stem": "크랭크축에서 발생되는 엔진의 순간적인 회전력을 뜻하는 용어는?",
      "choices": [
        "마력 (Horsepower)",
        "토크 (Torque)",
        "최고 속도",
        "가속도"
      ]
    }
  },
  {
    "num": 56,
    "answer": 1,
    "sinhala": {
      "stem": "වාහනයේ එන්ජිම අධික ලෙස රත් වී ඇති බව (Engine overheating) රියදුරුට දැනුම් දෙන්නේ කුමන අනතුරු ඇඟවීමේ සංඥාව මගින්ද?",
      "choices": [
        "තෙල් පීඩන සංඥාව (Oil pressure light)",
        "ජල උෂ්ණත්ව අනතුරු ඇඟවීමේ සංඥාව (Water temperature warning light)",
        "බැටරි සංඥාව",
        "ටයර් පීඩන සංඥාව"
      ]
    },
    "english": {
      "stem": "Which warning light alerts the driver to engine overheating?",
      "choices": [
        "Oil pressure warning light",
        "Water temperature warning light",
        "Battery charging warning light",
        "Tire pressure warning light"
      ]
    },
    "korean": {
      "stem": "엔진 과열(오버히트) 상태를 운전자에게 알려주는 계기판의 경고등은?",
      "choices": [
        "엔진오일 압력 경고등",
        "수온 경고등 (냉각수 온도가 높을 때)",
        "배터리 충전 경고등",
        "타이어 공기압 경고등 (TPMS)"
      ]
    }
  },
  {
    "num": 57,
    "answer": 0,
    "sinhala": {
      "stem": "විදුලි වාහන කළමනාකරණය (EV management) පිළිබඳ වැරදි කරුණු දෙක (2) කුමක්ද?",
      "choices": [
        "භූගත නොවන (Ground lots) එළිමහන් නැවැතුම්පළවල් වඩාත් සුදුසුය, සහ සීට් හීටර්වලට වඩා එයාර් හීටර් කාර්යක්ෂම වේ",
        "බැටරිය අධික ලෙස රත් වීම වැළැක්විය යුතුය",
        "නිසි පරිදි ආරෝපණය කළ යුතුය",
        "ශීත කාලයේදී බැටරි ධාරිතාව අඩුවිය හැක"
      ]
    },
    "english": {
      "stem": "Which two are not correct regarding electric vehicle management?",
      "choices": [
        "Parking in ground lots is better, and air heaters are more efficient than seat heaters",
        "Battery overheating must be actively prevented",
        "Proper routine charging cycles should be maintained",
        "Battery capacity may drop naturally during winter weather"
      ]
    },
    "korean": {
      "stem": "전기자동차 관리 방법 중 올바르지 않은 것 2가지는?",
      "choices": [
        "여름철에는 뙤약볕의 지상 주차장에 오래 두는 것이 좋으며, 히터는 시트 열선보다 전력 효율이 높다",
        "배터리가 과열되지 않도록 상시 주의해야 한다",
        "배터리의 적정 충전 사이클(방전 방지)을 유지하는 것이 좋다",
        "겨울철 한파 시에는 배터리 효율과 주행 거리가 자연스럽게 감소할 수 있다"
      ]
    }
  },
  {
    "num": 58,
    "answer": 1,
    "sinhala": {
      "stem": "මෝටර් රථයක දෘශ්‍ය ආලෝක විනිවිද යාමේ (Visible ray penetration) රෙගුලාසිවලට යටත් වන වීදුරු මොනවාද?",
      "choices": [
        "පසුපස වීදුරුව පමණි",
        "ඉදිරිපස වීදුරුව (Windscreen), ඉදිරිපස වම් දොර වීදුරුව සහ ඉදිරිපස දකුණු දොර වීදුරුව",
        "පසුපස දොරවල්වල වීදුරු පමණි",
        "වාහනයේ සියලුම වීදුරු රෙගුලාසිවලින් බාහිර වේ"
      ]
    },
    "english": {
      "stem": "Which windows are subject to regulations regarding visible ray penetration?",
      "choices": [
        "The rear windscreen only",
        "Front windscreen, front left door window, and front right door window",
        "Rear passenger door windows only",
        "All windows are completely exempt from regulations"
      ]
    },
    "korean": {
      "stem": "자동차 유리의 가시광선 투과율(선팅 농도) 규제를 받는 유리창 부위는?",
      "choices": [
        "뒷면 유리창(후면 윈드스크린)만 해당",
        "앞면 유리창, 운전석 및 동승석(앞좌석 좌우) 창유리",
        "뒷좌석 승객용 측면 창유리만 해당",
        "모든 자동차 유리는 규제 대상에서 완전히 제외된다"
      ]
    }
  },
  {
    "num": 59,
    "answer": 1,
    "sinhala": {
      "stem": "සාමාන්‍ය මගී මෝටර් රථයක (Passenger car) ප්‍රවාහනය කළ හැකි උපරිම පුද්ගලයින් සංඛ්‍යාව කොපමණද?",
      "choices": [
        "5 දෙනෙක් පමණි",
        "10 දෙනෙක් හෝ ඊට අඩු සංඛ්‍යාවක්",
        "15 දෙනෙක්",
        "20 දෙනෙක්"
      ]
    },
    "english": {
      "stem": "How many people can be accepted in a passenger car for transport?",
      "choices": [
        "5 people or fewer",
        "10 people or fewer",
        "Exactly 15 people",
        "Up to 20 people"
      ]
    },
    "korean": {
      "stem": "승용자동차의 승차 인원 기준은 최대 몇 명 이하인가?",
      "choices": [
        "5명 이하",
        "10명 이하",
        "정확히 15명",
        "20명 이하"
      ]
    }
  },
  {
    "num": 60,
    "answer": 2,
    "sinhala": {
      "stem": "අලුත් ව්‍යාපාරික නොවන මගී මෝටර් රථයක (Non-business passenger car) ප්‍රථම පරීක්ෂණයේ (Initial Inspection) වලංගු කාලය කොපමණද?",
      "choices": [
        "වසර 1 කි",
        "වසර 2 කි",
        "වසර 4 කි",
        "වසර 5 කි"
      ]
    },
    "english": {
      "stem": "What is the validity period for the initial inspection on a new non-business passenger car?",
      "choices": [
        "One year",
        "Two years",
        "Four years",
        "Five years"
      ]
    },
    "korean": {
      "stem": "신차로 구입한 비사업용 승용자동차의 최초 정기검사 유효기간은 몇 년인가?",
      "choices": [
        "1년",
        "2년",
        "4년",
        "5년"
      ]
    }
  },
  {
    "num": 61,
    "answer": 1,
    "sinhala": {
      "stem": "මෝටර් වාහන කළමනාකරණ පනතට අනුව වාහන වර්ග ලෙස සලකන කාණ්ඩ දෙක (2) කුමක්ද?",
      "choices": [
        "සෙඩාන් සහ ජීප් රථ",
        "ට්‍රක් රථ (Truck) සහ විශේෂ වාහන (Special vehicle)",
        "ත්‍රිරෝද රථ සහ බයිසිකල්",
        "ට්‍රැක්ටර් සහ බෝට්ටු"
      ]
    },
    "english": {
      "stem": "Which two are considered types of vehicles according to the Motor Vehicle Management Act?",
      "choices": [
        "Sedan and Jeep",
        "Truck and special vehicle",
        "Tricycle and Bicycle",
        "Tractor and Boat"
      ]
    },
    "korean": {
      "stem": "자동차관리법상 자동차의 종류(종별 분류)에 해당하는 것 2가지는?",
      "choices": [
        "세단 및 지프형 승용차",
        "화물자동차 및 특수자동차",
        "원동기삼륜차 및 일반 자전거",
        "농업용 트랙터 및 동력 보트"
      ]
    }
  },
  {
    "num": 62,
    "answer": 1,
    "sinhala": {
      "stem": "ව්‍යාපාරික නොවන විදුලි හෝ හයිඩ්‍රජන් වාහන සඳහා වන බලපත්‍ර තහඩුවේ (License plate) වර්ණය කුමක්ද?",
      "choices": [
        "සුදු පසුබිමේ කළු අකුරු",
        "නිල් පසුබිමේ කළු අකුරු (Black letters on a blue background)",
        "කහ පසුබිමේ කළු අකුරු",
        "කොළ පසුබිමේ සුදු අකුරු"
      ]
    },
    "english": {
      "stem": "What is the license plate color for non-business electric or hydrogen vehicles?",
      "choices": [
        "Black letters on a white background",
        "Black letters on a blue background",
        "Black letters on a yellow background",
        "White letters on a green background"
      ]
    },
    "korean": {
      "stem": "비사업용(개인용) 전기자동차 또는 수소자동차의 번역용 등록번호판 색상은?",
      "choices": [
        "흰색 바탕에 검은색 문자",
        "파란색 바탕에 검은색 문자",
        "노란색 바탕에 검은색 문자",
        "녹색 바탕에 흰색 문자"
      ]
    }
  },
  {
    "num": 63,
    "answer": 1,
    "sinhala": {
      "stem": "පළල මීටර් 3.7ක් වන ගිනි නිවන වාහනයකට (Fire vehicle) භාවිතා කළ නොහැකි මාර්ගය කුමක්ද?",
      "choices": [
        "සාමාන්‍ය මහා මාර්ග",
        "තනි මංතීරුවේ හයි-පාස් මංතීරු (Single-lane high pass lanes)",
        "ද්විත්ව මංතීරු මාර්ග",
        "ග්‍රාමීය මාර්ග"
      ]
    },
    "english": {
      "stem": "Which vehicle cannot use single-lane high pass lanes?",
      "choices": [
        "A standard passenger SUV",
        "A fire vehicle with a width of 3.7 meters",
        "A dual-lane commercial van",
        "A standard rural transport truck"
      ]
    },
    "korean": {
      "stem": "다음 중 단차로 하이패스 차로를 통과할 수 없는 차량은?",
      "choices": [
        "일반 승용 SUV 차량",
        "차량 너비(폭)가 3.7미터인 초광폭 소방 차량",
        "승합차 전용 2차로형 밴",
        "일반 농어촌 화물 트럭"
      ]
    }
  },
  {
    "num": 64,
    "answer": 1,
    "sinhala": {
      "stem": "කුඩා වෑන් රථ (Small vans) සඳහා වන වාහන පරීක්ෂණ වලංගු කාලය (Inspection validity period) කොපමණද?",
      "choices": [
        "මාස 6 කි",
        "වසර 1 කි",
        "වසර 2 කි",
        "වසර 4 කි"
      ]
    },
    "english": {
      "stem": "What is the inspection validity period for small vans?",
      "choices": [
        "Six months",
        "One year",
        "Two years",
        "Four years"
      ]
    },
    "korean": {
      "stem": "경형 및 소형 승합자동차의 정기검사 유효기간은 몇 년인가?",
      "choices": [
        "6개월",
        "1년",
        "2년",
        "4년"
      ]
    }
  },
  {
    "num": 65,
    "answer": 1,
    "sinhala": {
      "stem": "වසර හයකට වඩා පැරණි ඇදගෙන යන වාහනයක (Towed vehicle) පරීක්ෂණ වලංගු කාලය කොපමණද?",
      "choices": [
        "වසර 1 කි",
        "වසර 2 කි",
        "වසර 3 කි",
        "වසර 5 කි"
      ]
    },
    "english": {
      "stem": "What is the inspection validity period for a towed vehicle used for over six years?",
      "choices": [
        "One year",
        "Two years",
        "Three years",
        "Five years"
      ]
    },
    "korean": {
      "stem": "차령이 6년을 초과한 피견인 자동차(트레일러)의 검사 유효기간은 얼마인가?",
      "choices": [
        "1년",
        "2년",
        "3년",
        "5년"
      ]
    }
  },
  {
    "num": 66,
    "answer": 1,
    "sinhala": {
      "stem": "නව වාහනයක් සඳහා තාවකාලික ධාවන බලපත්‍රයක (Temporary driving permit) සම්මත වලංගු කාලය කොපමණද?",
      "choices": [
        "දින 5 ක් ඇතුළත",
        "දින 10 ක් ඇතුළත",
        "දින 30 ක් ඇතුළත",
        "මාස 2 ක් ඇතුළත"
      ]
    },
    "english": {
      "stem": "What is the standard validity period of a temporary driving permit for a new car?",
      "choices": [
        "Within 5 days",
        "Within 10 days",
        "Within 30 days",
        "Within 2 months"
      ]
    },
    "korean": {
      "stem": "신차 등록을 위해 발급받는 임시운행허가증의 일반적인 유효기간 기준은?",
      "choices": [
        "5일 이내",
        "10일 이내",
        "30일 이내",
        "2개월 이내"
      ]
    }
  },
  {
    "num": 67,
    "answer": 2,
    "sinhala": {
      "stem": "වාහනයක ලියාපදිංචිය වෙනස් කිරීමට (Registration of vehicle change) වලංගු නොවන හේතුව කුමක්ද?",
      "choices": [
        "ලිපිනය වෙනස් වීම",
        "වාහනයේ අංකය වෙනස් වීම",
        "හිමිකාරිත්වය වෙනස් වීම (Ownership has changed - මේ සඳහා transfer registration අවශ්‍ය වේ)",
        "භාවිතයේ අරමුණ වෙනස් වීම"
      ]
    },
    "english": {
      "stem": "Which is not accepted as a reason for a registration of vehicle change?",
      "choices": [
        "Change of owner's residential address",
        "Modification of the vehicle identification number",
        "Ownership has changed",
        "Change in the primary purpose of vehicle use"
      ]
    },
    "korean": {
      "stem": "자동차 변경등록 사유에 해당하지 않는 것은?",
      "choices": [
        "자동차 소유자의 주소지가 변경된 경우",
        "자동차의 차대번호가 변경된 경우",
        "자동차의 소유권이 완전히 다른 사람에게 이전된 경우 (이전등록 사유)",
        "자동차의 주된 용도가 변경된 경우"
      ]
    }
  },
  {
    "num": 68,
    "answer": 1,
    "sinhala": {
      "stem": "වාහන ගිනි ගැනීම් වළක්වා ගැනීමට ගත හැකි හොඳම පියවර කුමක්ද?",
      "choices": [
        "වාහනය නිතර සේදීම",
        "වාහනය තුළ ගිනි නිවන උපකරණයක් සවි කිරීම සහ එය භාවිතා කරන ආකාරය දැන සිටීම",
        "දිවා කාලයේ රිය පැදවීමෙන් වැළකීම",
        "වාහනයේ ජනේල සැමවිටම වසා තැබීම"
      ]
    },
    "english": {
      "stem": "What is the most correct measure to prevent vehicle fires?",
      "choices": [
        "Washing the vehicle frequently",
        "Equip the vehicle with a fire extinguisher and know how to use it",
        "Avoiding driving during peak daylight hours",
        "Keeping all vehicle windows permanently rolled up"
      ]
    },
    "korean": {
      "stem": "자동차 화재 사고를 예방하기 위한 가장 올바른 조치는?",
      "choices": [
        "차량 외부 세차를 매일 자주 해준다",
        "차량 내에 규격 소화기를 비치하고 올바른 사용법을 숙지한다",
        "한여름 낮 시간대에는 절대 운전을 하지 않는다",
        "차량의 모든 유리창을 항상 완전히 닫고 다닌다"
      ]
    }
  },
  {
    "num": 69,
    "answer": 2,
    "sinhala": {
      "stem": "ට්‍රක් රථ ව්‍යාපාරිකයෙකු තම ටැකෝග්‍රාෆ් (Tachograph) වාර්තා කොපමණ කාලයක් තබා ගත යුතුද?",
      "choices": [
        "මාස 1 ක්",
        "මාස 3 ක්",
        "මාස හයක් (6)",
        "වසරක්"
      ]
    },
    "english": {
      "stem": "How long must a trucking business operator keep tachograph records?",
      "choices": [
        "One month",
        "Three months",
        "Six months",
        "One year"
      ]
    },
    "korean": {
      "stem": "화물자동차 운송사업자는 운행기록장치(타코그래프)의 기록을 얼마 동안 보관해야 하는가?",
      "choices": [
        "1개월",
        "3개월",
        "6개월",
        "1년"
      ]
    }
  },
  {
    "num": 70,
    "answer": 2,
    "sinhala": {
      "stem": "වාහන හිමිකාරිත්වය පැවරීමේ ලියාපදිංචිය (Transfer of vehicle registration) දින කීයක් ඇතුළත අවසන් කළ යුතුද?",
      "choices": [
        "දින 5 ක්",
        "දින 10 ක්",
        "දින 15 ක්",
        "දින 30 ක්"
      ]
    },
    "english": {
      "stem": "Within how many days must a transfer of vehicle registration be finished?",
      "choices": [
        "5 days",
        "10 days",
        "15 days",
        "30 days"
      ]
    },
    "korean": {
      "stem": "중고차 매매 등으로 소유권이 이전된 경우, 이전등록 신청은 며칠 이내에 완료해야 하는가?",
      "choices": [
        "5일 이내",
        "10일 이내",
        "15일 이내",
        "30일 이내"
      ]
    }
  },
  {
    "num": 71,
    "answer": 2,
    "sinhala": {
      "stem": "වාහනයක නිත්‍ය පරීක්ෂණ කාල සීමාව (Regular inspection window) කල් ඉකුත් වීමේ දිනට පෙර සහ පසු දින කීයක් පවතීද?",
      "choices": [
        "දින 15 ක්",
        "දින 20 ක්",
        "දින 31 ක්",
        "දින 60 ක්"
      ]
    },
    "english": {
      "stem": "What is the window for a regular inspection before and after the expiration date?",
      "choices": [
        "15 days",
        "20 days",
        "31 days",
        "60 days"
      ]
    },
    "korean": {
      "stem": "자동차 정기검사는 검사유효기간 만료일 전후 각각 며칠 이내에 받아야 하는가?",
      "choices": [
        "15일 이내",
        "20일 이내",
        "31일 이내",
        "60일 이내"
      ]
    }
  },
  {
    "num": 72,
    "answer": 1,
    "sinhala": {
      "stem": "වාහනය ධාවනය නොකළද, අනිවාර්ය රක්ෂණයක් (Compulsory insurance) නොමැති වාහන හිමිකරුවෙකුට පනවන උපරිම දඩය කොපමණද?",
      "choices": [
        "වොන් මිලියනයක් දක්වා",
        "වොන් මිලියන තුනක් (3) දක්වා",
        "වොන් මිලියන පහක් දක්වා",
        "දඩ පනවනු නොලැබේ"
      ]
    },
    "english": {
      "stem": "What is the punishment for a car owner who does not have compulsory insurance even if the car isn't operated?",
      "choices": [
        "A fine of up to one million Won",
        "A fine of up to three million Won",
        "A fine of up to five million Won",
        "No fine is levied if the vehicle remains stationary"
      ]
    },
    "korean": {
      "stem": "자동차를 실제 운행하지 않더라도 의무보험에 가입하지 않은 자동차 소유자에게 부과되는 과태료의 최대 한도는?",
      "choices": [
        "최대 100만 원 이하",
        "최대 300만 원 이하",
        "최대 500만 원 이하",
        "차량이 멈춰있을 때는 과태료가 부과되지 않음"
      ]
    }
  },
  {
    "num": 73,
    "answer": 1,
    "sinhala": {
      "stem": "උරුමයකින් (Inheritance) වාහනයක හිමිකාරිත්වය වෙනස් වන විට සිදු කළ යුතු ලියාපදිංචි වර්ගය කුමක්ද?",
      "choices": [
        "වෙනස් කිරීමේ ලියාපදිංචිය",
        "පැවරීමේ ලියාපදිංචිය (Registration of transfer)",
        "නව ලියාපදිංචිය",
        "තාවකාලික ලියාපදිංචිය"
      ]
    },
    "english": {
      "stem": "What kind of registration is required when ownership changes through inheritance?",
      "choices": [
        "Alteration registration",
        "Registration of transfer",
        "Brand new registration",
        "Temporary registration"
      ]
    },
    "korean": {
      "stem": "상속으로 인해 자동차 소유권이 변경되었을 때 신청해야 하는 등록의 종류는?",
      "choices": [
        "변경등록",
        "이전등록",
        "신규등록",
        "말소등록"
      ]
    }
  },
  {
    "num": 74,
    "answer": 2,
    "sinhala": {
      "stem": "වාහන හිමිකරුවෙකු විසින් කළ යුතු පරීක්ෂණ වර්ගවලට (Vehicle inspection) අයත් නොවන පරීක්ෂණය කුමක්ද?",
      "choices": [
        "නිත්‍ය පරීක්ෂණය",
        "සුසර කිරීමේ පරීක්ෂණය",
        "විශේෂ පරීක්ෂණය (Special inspection)",
        "තාවකාලික පරීක්ෂණය"
      ]
    },
    "english": {
      "stem": "Which is not a type of vehicle inspection that a vehicle owner should do?",
      "choices": [
        "Regular inspection",
        "Tuning inspection",
        "Special inspection",
        "Temporary inspection"
      ]
    },
    "korean": {
      "stem": "자동차 소유자가 받아야 하는 자동차 검사의 종류가 아닌 것은?",
      "choices": [
        "정기검사",
        "튜닝검사",
        "특별검사",
        "임시검사"
      ]
    }
  },
  {
    "num": 75,
    "answer": 1,
    "sinhala": {
      "stem": "වාහන අලෙවියකදී පැවරීමේ ලියාපදිංචිය (Registration of transfer) සිදු කරනු ලබන්නේ කුමන ආයතනයක් මගින්ද?",
      "choices": [
        "පොලිස් ස්ථානය මගින්",
        "නගර සභාව, ගුන් හෝ ගු දිස්ත්‍රික් කාර්යාලය (City Hall, gun, or goo district office)",
        "රක්ෂණ සමාගම මගින්",
        "වාහන අලුත්වැඩියා මධ්‍යස්ථාන මගින්"
      ]
    },
    "english": {
      "stem": "Which group processes the registration of transfer for a vehicle sale?",
      "choices": [
        "The local police station",
        "City Hall, gun, or goo district office",
        "The commercial insurance provider",
        "Auto repair and body shops"
      ]
    },
    "korean": {
      "stem": "자동차 매매에 따른 이전등록 업무를 처리하는 기관은?",
      "choices": [
        "관할 경찰서",
        "시·군·구청 및 자동차등록사업소",
        "자동차 민간 보험회사",
        "자동차 정비공장 및 서비스센터"
      ]
    }
  },
  {
    "num": 76,
    "answer": 0,
    "sinhala": {
      "stem": "වාහන ලියාපදිංචි කිරීමේ වර්ග (Vehicle registration) නොවන කරුණු දෙක (2) කුමක්ද?",
      "choices": [
        "විශේෂ වරප්‍රසාද ලියාපදිංචිය (Privilege registration) සහ වින්‍යාස ලියාපදිංචිය (Configuration registration)",
        "නව ලියාපදිංචිය සහ වෙනස් කිරීමේ ලියාපදිංචිය",
        "පැවරීමේ ලියාපදිංචිය සහ අවලංගු කිරීමේ ලියාපදිංචිය",
        "තාවකාලික ලියාපදිංචිය සහ උකස් ලියාපදිංචිය"
      ]
    },
    "english": {
      "stem": "Which two are not types of vehicle registration?",
      "choices": [
        "Privilege registration and configuration registration",
        "New registration and alteration registration",
        "Transfer registration and cancellation registration",
        "Temporary registration and mortgage registration"
      ]
    },
    "korean": {
      "stem": "자동차 등록의 종류에 해당하지 않는 것 2가지는?",
      "choices": [
        "특권등록 및 설정등록",
        "신규등록 및 변경등록",
        "이전등록 및 말소등록",
        "임시운행허가 및 저당권등록"
      ]
    }
  },
  {
    "num": 77,
    "answer": 1,
    "sinhala": {
      "stem": "ඉදිරිපස වීදුරුවක (Front windscreen) තිබිය යුතු සුදුසුම දෘශ්‍ය ආලෝක විනිවිද යාමේ අනුපාතය (Visible ray penetration rate) කුමක්ද?",
      "choices": [
        "100% ක්ම විය යුතුය",
        "සියයට 70 කට වඩා අඩු (Less than 70 percent)",
        "සියයට 50 ක් පමණි",
        "සියයට 10 ක් විය යුතුය"
      ]
    },
    "english": {
      "stem": "What is the appropriate visible ray penetration rate for a front windscreen?",
      "choices": [
        "Must be 100% transparent",
        "Less than 70 percent",
        "Around 50 percent",
        "Down to 10 percent"
      ]
    },
    "korean": {
      "stem": "자동차 안전기준상 앞면 유리창의 올바른 가시광선 투과율 기준은?",
      "choices": [
        "100% 완전히 투명해야 함",
        "70퍼센트 미만 (규제 기준)",
        "약 50퍼센트 수준 유지",
        "10퍼센트 수준까지 낮춰도 됨"
      ]
    }
  },
  {
    "num": 78,
    "answer": 1,
    "sinhala": {
      "stem": "රිය පැදවීමේ හැසිරීම් ක්‍රියාවලියේ (Driving behavior process) නිවැරදි අනුපිළිවෙල කුමක්ද?",
      "choices": [
        "පාලනය, විනිශ්චය, හඳුනා ගැනීම",
        "හඳුනා ගැනීම, විනිශ්චය, පාලනය (Recognition, judgment, control)",
        "විනිශ්චය, හඳුනා ගැනීම, පාලනය",
        "පාලනය, හඳුනා ගැනීම, විනිශ්චය"
      ]
    },
    "english": {
      "stem": "What is the correct order of the driving behavior process?",
      "choices": [
        "Control, judgment, recognition",
        "Recognition, judgment, control",
        "Judgment, recognition, control",
        "Control, recognition, judgment"
      ]
    },
    "korean": {
      "stem": "운전자의 올바른 운전 행동 3단계 과정 순서는?",
      "choices": [
        "조작 - 판단 - 인지",
        "인지 - 판단 - 조작",
        "판단 - 인지 - 조작",
        "조작 - 인지 - 판단"
      ]
    }
  },
  {
    "num": 79,
    "answer": 1,
    "sinhala": {
      "stem": "මෝටර් රථයක SRS එයාර්බෑග් (Airbag) පද්ධතියේ අවශ්‍යතාවයක් නොවන්නේ කුමක්ද?",
      "choices": [
        "රියදුරු ආරක්ෂා කිරීම",
        "රියදුරු සමඟ ස්පර්ශ වන විට බලපෑම් ශක්තිය උපරිම කිරීම",
        "මුහුණට වන තුවාල වැළැක්වීම",
        "තත්පර කිහිපයකින් ක්‍රියාත්මක වීම"
      ]
    },
    "english": {
      "stem": "Which is not a requirement for an SRS airbag?",
      "choices": [
        "Protection of the driver from impact forces",
        "Maximizing the impact energy in contact with a driver",
        "Minimizing facial abrasions during sudden contact",
        "Rapid inflation within fractions of a second"
      ]
    },
    "korean": {
      "stem": "자동차 에어백(SRS)의 기능 및 요구사항으로 올바르지 않은 것은?",
      "choices": [
        "차량 충돌 시 운전자가 받는 충격력을 완화하여 보호한다",
        "운전자와 충돌할 때 충격 에너지를 최대한 높인다 (충격을 흡수해야 함)",
        "에어백 전개 시 얼굴 등의 찰과상을 최소화해야 한다",
        "충돌 순간 수밀리초(fractions of a second) 이내에 신속히 팽창해야 한다"
      ]
    }
  },
  {
    "num": 80,
    "answer": 1,
    "sinhala": {
      "stem": "වාහනයකට ගොඩවීමේදී සහ ඉන් බැසීමේදී (Getting in and out) ගත යුතු ප්‍රධානතම පියවර කුමක්ද?",
      "choices": [
        "වීදුරු සියල්ල හැර තිබේදැයි බැලීම",
        "පසුපසින් වෙනත් වාහනයක් හෝ මෝටර් රථයක් පැමිණෙන්නේදැයි පරීක්ෂා කිරීම",
        "එන්ජිමේ ශබ්දයට සවන් දීම",
        "වාහනයේ වර්ණය දෙස බැලීම"
      ]
    },
    "english": {
      "stem": "What precaution should be taken when getting in and out of a car?",
      "choices": [
        "Verifying that all windows are halfway open",
        "Check to see if there is a car coming from behind",
        "Listening intently to the engine idle sound",
        "Observing the exterior color scheme of the car"
      ]
    },
    "korean": {
      "stem": "자동차에 승차하거나 하차할 때 가장 주의해야 할 안전 조치는?",
      "choices": [
        "모든 유리창이 절반쯤 열려 있는지 확인한다",
        "뒤쪽에서 다른 차량이나 이륜차가 오는지 확인한다",
        "엔진의 공회전 소리를 주의 깊게 듣는다",
        "차량의 외관 도색 상태를 유심히 살핀다"
      ]
    }
  },
  {
    "num": 81,
    "answer": 1,
    "sinhala": {
      "stem": "සංඥා ලාම්පු නොමැති මංසන්ධියකදී (Intersection without signals) දකුණට හැරවීමේ නිවැරදි ක්‍රමය කුමක්ද?",
      "choices": [
        "වේගයෙන් ධාවනය කර හැරවීම",
        "මාර්ගයේ දකුණු පසින් සෙමින් ධාවනය කර දකුණට හැරවීම",
        "මැදින් ධාවනය කර හැරවීම",
        "නලා ශබ්ද කරමින් වේගයෙන් හැරවීම"
      ]
    },
    "english": {
      "stem": "What is the proper action for a right turn at an intersection without signals?",
      "choices": [
        "Accelerated driving through the corner",
        "Drive slowly along the right side of the road and turn right",
        "Navigating through the absolute center of the intersection",
        "Continuous honking while taking the corner at speed"
      ]
    },
    "korean": {
      "stem": "신호등이 없는 교차로에서 우회전하려고 할 때 가장 올바른 주행 방법은?",
      "choices": [
        "코너를 돌 때 속도를 높여 빠르게 빠져나간다",
        "도로의 우측 가장자리를 따라 서행하면서 우회전한다",
        "교차로의 정중앙 안쪽까지 크게 들어갔다가 회전한다",
        "보행자가 비키도록 경음기를 연속으로 울리며 진입한다"
      ]
    }
  },
  {
    "num": 82,
    "answer": 1,
    "sinhala": {
      "stem": "වෙනත් වාහනයක් අභිබවා යාම (Overtaking) පිළිබඳ නිවැරදි ප්‍රකාශය කුමක්ද?",
      "choices": [
        "ඕනෑම තැනකදී අභිබවා යා හැක",
        "පාලම් මත හෝ මංසන්ධිවලදී අභිබවා යාමට අවසර නැත",
        "වංගු සහිත ස්ථානවලදී අභිබවා යාම සුදුසුය",
        "උමං මාර්ග තුළදී වේගයෙන් අභිබවා යා හැක"
      ]
    },
    "english": {
      "stem": "What is correct about overtaking another car?",
      "choices": [
        "Overtaking may be safely performed anywhere on the road",
        "Overtaking is not allowed on bridges or at intersections",
        "It is ideal to overtake vehicles on sharp blind curves",
        "Overtaking should be done rapidly inside tunnels"
      ]
    },
    "korean": {
      "stem": "다른 차를 앞지르기(추월)할 때 올바른 법규 설명은?",
      "choices": [
        "도로의 장소와 관계없이 안전하다고 판단되면 어디서든 앞지르기가 가능하다",
        "교량(다리) 위나 교차로 등에서는 앞지르기가 금지된다",
        "급커브 길이나 앞이 보이지 않는 고갯마루에서 앞지르기하는 것이 이상적이다",
        "터널 안에서는 신속하게 속도를 높여 앞지르기를 해야 한다"
      ]
    }
  },
  {
    "num": 83,
    "answer": 2,
    "sinhala": {
      "stem": "සුරතල් සතුන් (Pets) සමඟ රිය පැදවීමේදී වඩාත්ම නුසුදුසු ආකල්පය කුමක්ද?",
      "choices": [
        "සතාව පසුපස අසුනේ තැබීම",
        "රිය පදවන අතරතුර සතාව අතින් වඩාගෙන සිටීම (Holding the animal)",
        "සතාව කූඩයක බහා රැගෙන යාම",
        "සතාට ජනේලයෙන් පිටත බැලීමට ඉඩ නොදීම"
      ]
    },
    "english": {
      "stem": "What is the least desirable attitude when driving with a pet?",
      "choices": [
        "Securing the animal in a dedicated travel crate",
        "Placing the pet safely on the rear passenger seats",
        "Holding the animal while driving",
        "Blocking the animal from hanging out of open windows"
      ]
    },
    "korean": {
      "stem": "반려동물(개, 고양이 등)을 동반하여 운전할 때 가장 바람직하지 않은 행동은?",
      "choices": [
        "반려동물을 전용 이동장치(케이지)에 넣어 안전하게 고정한다",
        "뒷좌석에 반려동물용 안전벨트를 채워 태운다",
        "반려동물을 운전자가 안고 운전한다",
        "반려동물이 열린 창문 밖으로 머리를 내밀지 못하게 차단한다"
      ]
    }
  },
  {
    "num": 84,
    "answer": 1,
    "sinhala": {
      "stem": "රථවාහන ආරක්ෂාවට අනතුරක් ඇති බව අනෙක් රියදුරන්ට දැනුම් දිය යුතු සුදුසුම ක්‍රමය කුමක්ද?",
      "choices": [
        "ප්‍රධාන ලාම්පු නිවා දැමීම",
        "හදිසි අනතුරු ඇඟවීමේ ලාම්පු (Emergency flashers) දැල්වීම",
        "දිගින් දිගටම නලා ශබ්ද කිරීම",
        "වාහනයේ වේගය එකවරම වැඩි කිරීම"
      ]
    },
    "english": {
      "stem": "How should a driver inform others of a risk to traffic safety?",
      "choices": [
        "Deactivating the primary headlamps completely",
        "Use emergency flashers",
        "Honking the horn non-stop without pausing",
        "Accelerating rapidly ahead of surrounding traffic"
      ]
    },
    "korean": {
      "stem": "주행 중 도로상의 위험 상황을 주변 차량에 급히 알리는 가장 적절한 신호 방법은?",
      "choices": [
        "전조등(헤드램프)을 완전히 끈다",
        "비상점멸등(비상등)을 켠다",
        "경음기를 쉬지 않고 계속 울려댄다",
        "주변 차들보다 급가속하여 앞으로 치고 나간다"
      ]
    }
  },
  {
    "num": 85,
    "answer": 1,
    "sinhala": {
      "stem": "රියදුරෙකු සතු නොවිය යුතු අවම සුදුසු ආකල්පය කුමක්ද?",
      "choices": [
        "ආරක්ෂාව ගැන සිතීම",
        "තම රිය පැදවීමේ කුසලතා පිළිබඳව පමණට වඩා විශ්වාසය තැබීම (Excessive confidence)",
        "අන් අයට ගරු කිරීම",
        "මාර්ග නීති පිළිපැදීම"
      ]
    },
    "english": {
      "stem": "What is the least appropriate attitude for a driver?",
      "choices": [
        "Keeping defensive safety foremost in mind",
        "Having excessive confidence in one's own driving skills",
        "Demonstrating courtesy toward other commuters",
        "Strictly following established traffic laws"
      ]
    },
    "korean": {
      "stem": "운전자로서 가장 바람직하지 않은 운전 태도는?",
      "choices": [
        "방어운전을 항상 최우선으로 생각한다",
        "자신의 운전 기술을 과도하게 과신하며 운전한다",
        "도로 위의 다른 운전자나 보행자에게 양보와 배려를 실천한다",
        "정해진 교통 법규와 약속을 철저히 준수한다"
      ]
    }
  },
  {
    "num": 86,
    "answer": 2,
    "sinhala": {
      "stem": "රථවාහන නීති උල්ලංඝනය කිරීමකින් පසු රියදුරෙකුගේ වගකීම් අතරින් අවම ප්‍රමුඛතාවයක් (Least priority) ගන්නේ කුමක්ද?",
      "choices": [
        "සිවිල් වගකීම",
        "අපරාධ වගකීම",
        "දැනුම්දීමේ වගකීම (Notification liability)",
        "පරිපාලන වගකීම"
      ]
    },
    "english": {
      "stem": "Which is the least priority regarding a driver's responsibility after a violation?",
      "choices": [
        "Civil liability",
        "Criminal liability",
        "Notification liability",
        "Administrative liability"
      ]
    },
    "korean": {
      "stem": "교통법규 위반 또는 사고 발생 시 운전자가 지는 책임 중 성격이 다른(우선순위가 낮은) 것은?",
      "choices": [
        "민사상 책임 (손해배상 등)",
        "형사상 책임 (형벌 등)",
        "고지 책임 (알림 책임)",
        "행정상 책임 (면허 정지·취소 등)"
      ]
    }
  },
  {
    "num": 87,
    "answer": 2,
    "sinhala": {
      "stem": "අධිවේගී මාර්ගයක අනතුරක් සිදු වූ විට නොකළ යුතු වැරදි ක්‍රියාව කුමක්ද?",
      "choices": [
        "වාහනය ආරක්ෂිත ස්ථානයකට ගැනීම",
        "මගීන් ආරක්ෂිත වැටෙන් පිටතට යැවීම",
        "පොලිසිය පැමිණෙන තෙක් පසුපසින් එන රථවාහන පාලනය කිරීමට පාර මැද සිටීම",
        "හදිසි සේවා අංක අමතා දැනුම් දීම"
      ]
    },
    "english": {
      "stem": "What is an incorrect response to an accident on a highway?",
      "choices": [
        "Moving the vehicle to a safe road shoulder if possible",
        "Directing passengers to move past the safety guardrails",
        "Controlling traffic at the rear until police arrive",
        "Contacting emergency services to report details"
      ]
    },
    "korean": {
      "stem": "고속도로에서 교통사고가 발생했을 때 대처 방법으로 올바르지 않은 것은?",
      "choices": [
        "가능한 경우 차량을 갓길 등 안전한 곳으로 신속히 이동시킨다",
        "탑승자들을 도로 밖 가드레일 너머 안전한 구역으로 대피시킨다",
        "경찰이 올 때까지 차량 바로 뒤편 주행 차로에 서서 직접 수신호로 차량을 통제한다",
        "112나 119 등 비상 연락망에 전화를 걸어 사고 상황을 신고한다"
      ]
    }
  },
  {
    "num": 88,
    "answer": 1,
    "sinhala": {
      "stem": "වාහනයක බිළිඳෙකු හෝ කුඩා දරුවෙකු (Infant) සිටින විට නිවැරදි හැසිරීම කුමක්ද?",
      "choices": [
        "දරුවා වඩාගෙන ඉදිරිපස අසුනේ හිඳීම",
        "පසුපස අසුනේ ළමා ආරක්ෂණ පද්ධතියක් (Child seat) භාවිතා කර බෙල්ට් එක නිසි පරිදි පැළඳවීම",
        "දරුවාට සාමාන්‍ය අසුනක සිටීමට ඉඩ හැරීම",
        "රියදුරු අසල දරුවා වාඩි කරවා ගැනීම"
      ]
    },
    "english": {
      "stem": "What is the correct behavior when driving with an infant?",
      "choices": [
        "Carrying the infant in an adult's arms in the front seat",
        "Use a child protection system in the back seat and ensure the restraint belt is worn",
        "Allowing the child to sit unsecured on a standard passenger seat",
        "Letting the infant sit directly next to the driver"
      ]
    },
    "korean": {
      "stem": "영유아를 자동차에 태우고 운전할 때의 올바른 행동은?",
      "choices": [
        "유아를 어른이 안고 앞좌석에 탄다",
        "뒷좌석에 유아보호용장수(카시트)를 장착하고 반드시 안전벨트를 착용시킨다",
        "카시트 없이 일반 좌석에 아이를 혼자 앉혀 둔다",
        "유아를 운전석 바로 옆 공간에 앉혀서 살피며 운전한다"
      ]
    }
  },
  {
    "num": 89,
    "answer": 0,
    "sinhala": {
      "stem": "රියදුරෙකු සතු ප්‍රධාන වගකීම් දෙක (2) කුමක්ද?",
      "choices": [
        "ළමයින් සම්බන්ධ අවදානමක් ඇති විට වාහනය නැවැත්වීම සහ රැඳී පවතින ජලය (Standing water) මතින් සෙමින් ධාවනය කිරීම",
        "වේගයෙන් ධාවනය කිරීම සහ නලා ශබ්ද කිරීම",
        "ජංගම දුරකථන භාවිතය සහ සංගීතයට සවන්දීම",
        "වීදුරු අවපැහැ ගැන්වීම සහ රේසිං කිරීම"
      ]
    },
    "english": {
      "stem": "Which two are the responsibilities of a driver?",
      "choices": [
        "Stopping if there is a risk involving children and driving slowly through standing water",
        "Accelerating through yellow lights and continuous honking",
        "Handheld smartphone use and turning up media volume",
        "Tinging windows fully black and street racing"
      ]
    },
    "korean": {
      "stem": "도로교통법상 운전자의 올바른 의무 및 준수사항 2가지는?",
      "choices": [
        "어린이가 보호자 없이 걷고 있어 위험할 때 일시정지하기 및 물이 고인 곳을 통과할 때 서행하기",
        "황색 신호등이 켜졌을 때 급가속하여 통과하기 및 상시 경음기 울리기",
        "운전 중 손으로 휴대전화를 들고 통화·문자하기 및 오디오 볼륨을 최대로 높이기",
        "차량 유리를 안이 전혀 안 보이게 검게 선팅하기 및 도로에서 난폭 떼지어 레이싱하기"
      ]
    }
  },
  {
    "num": 90,
    "answer": 0,
    "sinhala": {
      "stem": "අධිවේගී මාර්ගයකදී වඩාත්ම යෝග්‍ය හැසිරීම් දෙක (2) කුමක්ද?",
      "choices": [
        "ගමන ආරම්භ කිරීමට පෙර අනතුරු පරීක්ෂා කිරීම සහ හදිසි වාහනවලට (Emergency vehicles) ඉඩ දීම",
        "ඕනෑම තැනක වාහනය නැවැත්වීම සහ වේගයෙන් ධාවනය කිරීම",
        "පසුපස වාහනවලට බාධා කිරීම සහ සංඥා නොදැමීම",
        "පාරේ අයිනෙන් ධාවනය කිරීම"
      ]
    },
    "english": {
      "stem": "Which two behaviors are most desirable on a highway?",
      "choices": [
        "Checking hazards before departure and giving way to emergency vehicles",
        "Stopping at random intervals and driving over speed limits",
        "Tailgating rear vehicles and omitting turn signals",
        "Driving exclusively along the shoulder lanes"
      ]
    },
    "korean": {
      "stem": "고속도로 주행 시 가장 바람직한 운전 행동 2가지는?",
      "choices": [
        "출발 전 차량 상태와 주행 경로를 미리 확인하기 및 긴급자동차(구급차 등) 발견 시 진로를 양보하기",
        "피로할 때 주행 차로에 아무 때나 차를 세우기 및 최고 제한속도를 초과하여 과속하기",
        "앞차에 바짝 붙어 위협 운전하기 및 차로 변경 시 방향지시등 생략하기",
        "고속도로 갓길(차선 밖 Shoulder)로만 지속해서 주행하기"
      ]
    }
  },
  {
    "num": 91,
    "answer": 1,
    "sinhala": {
      "stem": "ආරක්ෂිත රිය පැදවීම සඳහා රියදුරෙකු සතු නොවිය යුතු අවම සුදුසු සූදානම කුමක්ද?",
      "choices": [
        "වාහනයේ තත්ත්වය පරීක්ෂා කිරීම",
        "ගමන් ආරම්භ කිරීමට පෙර මිනිත්තු 10ක් පුරා එන්ජිම ප්‍රී-හීට් (Preheating) කිරීම",
        "මාර්ගයේ තත්ත්වය සොයා බැලීම",
        "නිසි විවේකයක් ලබාගෙන සිටීම"
      ]
    },
    "english": {
      "stem": "What is the least desirable driver preparedness for safe driving?",
      "choices": [
        "Reviewing the mechanical condition of the vehicle",
        "Preheating the engine for 10 minutes before departure",
        "Monitoring local route and weather forecasts",
        "Ensuring the driver is well-rested before the trip"
      ]
    },
    "korean": {
      "stem": "안전운전을 위한 운전자의 사전 준비 사항으로 가장 거리가 먼 것은?",
      "choices": [
        "차량의 기계적 작동 상태(정비 상태)를 확인한다",
        "출발 전 매번 엔진 시동을 걸고 10분 이상 길게 공회전(예열)을 시킨다",
        "가고자 하는 목적지의 도로 상황 및 기상 예보를 모니터링한다",
        "장거리 운전 전에는 충분한 휴식을 취해 피로를 예방한다"
      ]
    }
  },
  {
    "num": 92,
    "answer": 0,
    "sinhala": {
      "stem": "රිය පදවන අතරතුර අවධානය (Concentration) පවත්වා ගැනීම පිළිබඳ නිවැරදි කරුණු දෙක (2) කුමක්ද?",
      "choices": [
        "දෘෂ්ටිය අවහිර කරන ස්ටිකර් ඉවත් කිරීම සහ රූපවාහිනී තිර පසුපස අසුනේ අයට පමණක් පෙනෙන සේ තැබීම",
        "දුරකථනයෙන් වීඩියෝ බැලීම සහ පණිවිඩ යැවීම",
        "ඉදිරිපස අඳුරු ස්ටිකර් ඇලවීම සහ ශබ්ද නගා සංගීතයට සවන්දීම",
        "නින්ද යන විට දිගටම ධාවනය කිරීම"
      ]
    },
    "english": {
      "stem": "Which two are correct about concentration while driving?",
      "choices": [
        "Removing stickers that block the view and ensuring TVs are only seen by back seat passengers",
        "Streaming videos on phones and replying to messages",
        "Applying heavily tinted front film and loud music playback",
        "Continuing to drive even when feeling drowsy"
      ]
    },
    "korean": {
      "stem": "운전 중 집중력 유지 및 안전 확보에 대한 설명 중 올바른 것 2가지는?",
      "choices": [
        "전방 시야를 가리는 불필요한 스티커를 제거하기 및 DMB(TV) 화면은 뒷좌석 승객만 볼 수 있도록 하기",
        "스마트폰으로 유튜브 동영상을 보거나 메시지에 답장하며 주행하기",
        "앞유리에 아주 어두운 틴팅 필름을 붙이고 음악을 매우 크게 틀기",
        "졸음이 밀려와 눈이 감겨도 목적지까지 쉬지 않고 계속 운전하기"
      ]
    }
  },
  {
    "num": 93,
    "answer": 1,
    "sinhala": {
      "stem": "ළමා ආරක්ෂණ උපාංග (Child safety devices) අනිවාර්ය වන බිළිඳෙකු හෝ දරුවෙකු සඳහා වන වයස් නිර්ණායකය කුමක්ද?",
      "choices": [
        "වයස අවුරුදු 10 ට අඩු",
        "වයස අවුරුදු හයකට (6) අඩු",
        "වයස අවුරුදු 12 ට අඩු",
        "වයස අවුරුදු 3 ට අඩු"
      ]
    },
    "english": {
      "stem": "What is the age criteria for an infant or baby requiring child safety devices?",
      "choices": [
        "Under ten years of age",
        "Under six years of age",
        "Under twelve years of age",
        "Under three years of age"
      ]
    },
    "korean": {
      "stem": "도로교통법상 유아 카시트(어린이 보호용 장구)를 의무적으로 착용해야 하는 아동의 나이 기준은?",
      "choices": [
        "만 10세 미만",
        "만 6세 미만",
        "만 12세 미만",
        "만 3세 미만"
      ]
    }
  },
  {
    "num": 94,
    "answer": 1,
    "sinhala": {
      "stem": "පුද්ගලික සංචලතා වාහනයක් (Personal mobility vehicle) පදවන විට ආරක්ෂිත නොවන ආකල්පය කුමක්ද?",
      "choices": [
        "හෙල්මට් පැළඳීම",
        "ඉලෙක්ට්‍රොනික ස්කූටරයක රියදුරු විසින් පසුපස මගියාට ආරක්ෂිත ගියර් ඇති බව සහතික කිරීම (මගීන් රැගෙන යාම සාමාන්‍යයෙන් තහනම් බැවින්)",
        "පදිකයන්ට ඉඩ දීම",
        "වේග සීමා රැකීම"
      ]
    },
    "english": {
      "stem": "Which is not a safe attitude when driving a personal mobility vehicle?",
      "choices": [
        "Wearing an approved safety helmet securely",
        "The driver of an electric scooter ensuring the passenger has gear (as passengers are generally not allowed)",
        "Yielding to crossing pedestrians at all times",
        "Respecting the specified local speed limitations"
      ]
    },
    "korean": {
      "stem": "개인형 이동장치(PM, 전동 킥보드 등)를 운전할 때 안전한 태도가 아닌 것은?",
      "choices": [
        "승인된 안전모(헬멧)를 착용하고 턱끈을 확실히 조인다",
        "전동 킥보드 운전자가 뒷사람(동승자)에게도 헬멧을 씌워주고 동승하여 달린다 (PM은 원칙적으로 2인 탑승 금지)",
        "길을 건너는 보행자가 있으면 언제나 보행자에게 길을 양보한다",
        "규정된 도로별 최고속도 제한을 엄격히 준수한다"
      ]
    }
  },
  {
    "num": 95,
    "answer": 1,
    "sinhala": {
      "stem": "වයස අවුරුදු 6ට අඩු දරුවෙකු ආරක්ෂිත අසුනක් නොමැතිව රැගෙන ගියහොත් පනවන දඩය කොපමණද?",
      "choices": [
        "KRW 10,000",
        "KRW 60,000",
        "KRW 100,000",
        "KRW 150,000"
      ]
    },
    "english": {
      "stem": "What is the penalty if a child under six rides without a safety seat?",
      "choices": [
        "KRW 10,000",
        "KRW 60,000",
        "KRW 100,000",
        "KRW 150,000"
      ]
    },
    "korean": {
      "stem": "만 6세 미만의 영유아에게 카시트를 착용시키지 않았을 때 부과되는 과태료 금액은?",
      "choices": [
        "1만 원",
        "6만 원",
        "10만 원",
        "15만 원"
      ]
    }
  },
  {
    "num": 96,
    "answer": 1,
    "sinhala": {
      "stem": "අනතුරු වළක්වා ගැනීම සඳහා හොඳම රිය පැදවීමේ ආකල්පය කුමක්ද?",
      "choices": [
        "වේගයෙන් මංතීරු මාරු කිරීම",
        "තමන් ගමන් කරන දිශාව පෙන්වීමට හැරවුම් සංඥා (Indicators) නිවැරදිව භාවිතා කිරීම",
        "නිතරම නලා ශබ්ද කිරීම",
        "ඉදිරි වාහනයට ඉතා ආසන්නයෙන් ධාවනය කිරීම"
      ]
    },
    "english": {
      "stem": "What is a good driving attitude for accident prevention?",
      "choices": [
        "Changing lanes aggressively without notice",
        "Using indicators to signal your path of travel",
        "Relying on constant horn alerts to clear lanes",
        "Following the vehicle ahead at a very close margin"
      ]
    },
    "korean": {
      "stem": "사고 예방을 위한 가장 바람직한 운전 습관은?",
      "choices": [
        "차로를 변경할 때 깜빡이 없이 급격하게 끼어든다",
        "진로를 변경하거나 회전할 때 반드시 방향지시등(깜빡이)을 켜서 신호한다",
        "앞차를 비키게 하려고 continuous하게 클락션을 울린다",
        "고속 주행 시 앞차와의 안전거리를 아주 가깝게 유지하며 바짝 붙어간다"
      ]
    }
  },
  {
    "num": 97,
    "answer": 1,
    "sinhala": {
      "stem": "අධිවේගී මාර්ගයකදී නවක රියදුරෙකු (Novice driver) නොකළ යුතු වැරදි ක්‍රියාව කුමක්ද?",
      "choices": [
        "නිවැරදි මංතීරුවේ ධාවනය",
        "වාහන තදබදයට බාධා නොවන සේ පාරේ අයින (Shoulder) දිගේ ධාවනය කිරීම",
        "වේග සීමා රැකීම",
        "ආරක්ෂිත දුරක් තබා ගැනීම"
      ]
    },
    "english": {
      "stem": "What is the least correct action for a novice driver on a highway?",
      "choices": [
        "Keeping to the designated slower driving lanes",
        "Using the shoulder to avoid interfering with traffic flow",
        "Adhering strictly to standard speed limitations",
        "Maintaining an ample stopping distance ahead"
      ]
    },
    "korean": {
      "stem": "초보 운전자가 고속도로를 처음 주행할 때 취해야 할 조치로 가장 올바르지 않은 것은?",
      "choices": [
        "자신의 차량 속도에 맞는 하위 차로(우측 느린 차로)를 이용한다",
        "교통 흐름에 방해가 되지 않도록 고속도로 갓길(shoulder)을 주행 차로처럼 이용한다",
        "규정된 법정 제한속도 범위를 철저히 지키며 운전한다",
        "돌발 상황에 대비해 앞차와의 안전정지거리를 넉넉하게 확보한다"
      ]
    }
  },
  {
    "num": 98,
    "answer": 1,
    "sinhala": {
      "stem": "මෝටර් රථ ධාවනයේදී ඉඩ දීම / යටත් වීම (Yielding) පිළිබඳ නිවැරදි ප්‍රකාශය කුමක්ද?",
      "choices": [
        "ප්‍රධාන පාරේ එන වාහන අතුරු පාරේ වාහනවලට ඉඩ දිය යුතුය",
        "ඉඩ දීමේ සංඥාවක් (Yield sign) ඇති පාරක ධාවනය කරන වාහනයක් අනෙක් පාරවල්වලින් එන වාහනවලට ඉඩ දිය යුතුය",
        "වේගයෙන් එන වාහනයට සැමවිටම ඉඩ දිය යුතුය",
        "ඉඩ දීමේ සංඥා පිළිපැදීම අනිවාර්ය නොවේ"
      ]
    },
    "english": {
      "stem": "What is correct about yielding?",
      "choices": [
        "Main road traffic must yield to vehicles arriving from side alleys",
        "A vehicle on a road with a yield sign should yield to vehicles from other roads",
        "Slower vehicles should always expect speeding vehicles to have priority",
        "Yield signs are optional to follow depending on traffic density"
      ]
    },
    "korean": {
      "stem": "도로교통법상 '양보'의 기준에 대한 설명 중 올바른 것은?",
      "choices": [
        "넓은 주간선도로를 달리는 차가 골목길에서 나오는 차에 항상 먼저 양보해야 한다",
        "양보 표지판(Yield sign)이 설치된 도로를 주행하는 차량은 다른 도로의 차량에 진로를 양보해야 한다",
        "속도가 느린 차량은 뒤에서 과속해오는 차량에 무조건 우선권을 내주어야 한다",
        "양보 신호는 교통량의 많고 적음에 따라 운전자가 임의로 무시해도 된다"
      ]
    }
  },
  {
    "num": 99,
    "answer": 2,
    "sinhala": {
      "stem": "පහත සඳහන් අය අතරින් \"ප්‍රවාහන අවදානමට ලක්විය හැකි\" (Transportation vulnerable) පිරිසට අයත් නොවන්නේ කවුද?",
      "choices": [
        "ගර්භණී මව්වරුන්",
        "වැඩිහිටි පුරවැසියන්",
        "සුරතල් සතුන් සමඟ ගමන් කරන පුද්ගලයන් (People with pets)",
        "ආබාධිත පුද්ගලයන්"
      ]
    },
    "english": {
      "stem": "Who among the following are not considered \"transportation vulnerable\"?",
      "choices": [
        "Pregnant mothers",
        "Elderly senior citizens",
        "People with pets",
        "Individuals with physical disabilities"
      ]
    },
    "korean": {
      "stem": "다음 중 교통약자 육성 및 이동편의 증진법상 '교통약자'에 해당하지 않는 사람은?",
      "choices": [
        "임산부",
        "고령자 (어르신)",
        "반려동물을 동반한 사람",
        "영유아를 동반한 사람 또는 장애인"
      ]
    }
  },
  {
    "num": 100,
    "answer": 1,
    "sinhala": {
      "stem": "පහත සඳහන් දෑ අතුරින් අවදානමට ලක්විය හැකි පිරිස් සඳහා වන පදික ආරක්ෂණ පහසුකමක් (Pedestrian safety facility) ලෙස සැලකිය නොහැක්කේ කුමක්ද?",
      "choices": [
        "පදික ගුවන් පාලම්",
        "බයිසිකල් ධාවන මංතීරුවක් (A bicycle lane)",
        "පදික මාරු සංඥා ලාම්පු",
        "වේග සීමා ගැටිති"
      ]
    },
    "english": {
      "stem": "Which is not considered a pedestrian safety facility for the vulnerable?",
      "choices": [
        "Pedestrian overpasses and elevated walkways",
        "A bicycle lane",
        "Pedestrian crossing signal lights",
        "Speed bumps and traffic calming humps"
      ]
    },
    "korean": {
      "stem": "다음 중 교통약자의 안전한 보행을 돕는 보행 안전 시설물이 아닌 것은?",
      "choices": [
        "보도육교 및 지하도 (엘리베이터 포함)",
        "자전거 전용도로 (자전거 통행용 공간)",
        "보행자용 횡단보도 신호등 및 시각장애인용 음성안내장치",
        "차량 속도를 줄이게 하는 과속방지턱 및 교통정온화 시설"
      ]
    }
  }
];
