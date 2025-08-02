export interface Translation {
  // Header
  appTitle: string;
  appSubtitle: string;
  diseaseDetection: string;
  weather: string;
  cropCalendar: string;
  treatments: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  getStarted: string;
  learnMore: string;
  
  // Disease Detection
  diseaseDetectionTitle: string;
  diseaseDetectionDesc: string;
  uploadImage: string;
  useCamera: string;
  analyzing: string;
  photoTipsTitle: string;
  photoTips: string[];
  diseaseResults: string;
  confidence: string;
  severity: string;
  treatment: string;
  prevention: string;
  healthy: string;
  warning: string;
  critical: string;
  
  // Weather Dashboard
  weatherTitle: string;
  weatherDesc: string;
  currentWeather: string;
  recommendations: string;
  forecast: string;
  temperature: string;
  humidity: string;
  windSpeed: string;
  
  // Common
  loading: string;
  error: string;
  tryAgain: string;
  success: string;
}

export const translations: Record<string, Translation> = {
  en: {
    // Header
    appTitle: "AgroAssist Naija",
    appSubtitle: "Smart Agriculture Solutions for Nigerian Farmers",
    diseaseDetection: "Disease Detection",
    weather: "Weather",
    cropCalendar: "Crop Calendar",
    treatments: "Treatments",
    
    // Hero Section
    heroTitle: "Smart Agriculture for Modern Nigerian Farmers",
    heroSubtitle: "Empowering Agriculture with AI Technology",
    heroDescription: "Detect crop diseases instantly, get weather insights, and optimize your farming with cutting-edge AI technology designed specifically for Nigerian agriculture.",
    getStarted: "Get Started",
    learnMore: "Learn More",
    
    // Disease Detection
    diseaseDetectionTitle: "AI-Powered Crop Disease Detection",
    diseaseDetectionDesc: "Upload or capture an image of your crop to get instant AI-powered disease analysis and treatment recommendations.",
    uploadImage: "Upload Image",
    useCamera: "Use Camera",
    analyzing: "Analyzing",
    photoTipsTitle: "Photo Tips",
    photoTips: [
      "Take photos in good lighting conditions",
      "Focus on affected leaves or parts",
      "Ensure the image is clear and not blurry",
      "Include multiple affected areas if possible"
    ],
    diseaseResults: "Disease Detection Results",
    confidence: "Confidence",
    severity: "Severity",
    treatment: "Treatment",
    prevention: "Prevention",
    healthy: "Healthy",
    warning: "Attention Needed",
    critical: "Critical",
    
    // Weather Dashboard
    weatherTitle: "Smart Weather Dashboard",
    weatherDesc: "Get real-time weather data and AI-powered farming recommendations based on current conditions.",
    currentWeather: "Current Weather",
    recommendations: "Farming Recommendations",
    forecast: "7-Day Forecast",
    temperature: "Temperature",
    humidity: "Humidity",
    windSpeed: "Wind Speed",
    
    // Common
    loading: "Loading...",
    error: "Error occurred",
    tryAgain: "Try Again",
    success: "Success"
  },
  
  ha: {
    // Header
    appTitle: "AgroAssist Naija",
    appSubtitle: "Hanyoyin Noma na Zamani don Manoman Najeriya",
    diseaseDetection: "Gano Cututtuka",
    weather: "Yanayi",
    cropCalendar: "Kalandar Shuka",
    treatments: "Magunguna",
    
    // Hero Section
    heroTitle: "Noma na Zamani don Manoman Najeriya na Yau",
    heroSubtitle: "Ƙarfafa Noma da Fasahar AI",
    heroDescription: "Gano cututtukan shuka nan da nan, sami bayanan yanayi, da inganta aikin gona ta hanyar fasahar AI da aka tsara musamman don noman Najeriya.",
    getStarted: "Fara",
    learnMore: "Koyi Ƙara",
    
    // Disease Detection
    diseaseDetectionTitle: "Gano Cututtukan Shuka ta Hanyar AI",
    diseaseDetectionDesc: "Loda ko ɗauki hoton shuka don samun bincike nan da nan na cututtuka da shawarwarin magani.",
    uploadImage: "Loda Hoto",
    useCamera: "Yi Amfani da Kyamara",
    analyzing: "Ana Bincika",
    photoTipsTitle: "Shawarwarin Daukar Hoto",
    photoTips: [
      "Ɗauki hotuna a cikin kyakkyawan haske",
      "Mayar da hankali kan ganyayen da suka kamu da cuta",
      "Tabbatar da hoton ya yi kyau kuma ba ya da hazo",
      "Haɗa wuraren da yawa da suka kamu da cuta idan zai yiwu"
    ],
    diseaseResults: "Sakamakon Gano Cututtuka",
    confidence: "Tabbas",
    severity: "Girman Matsala",
    treatment: "Magani",
    prevention: "Rigakafi",
    healthy: "Lafiya",
    warning: "Ana Buƙatar Kulawa",
    critical: "Mai Mahimmanci",
    
    // Weather Dashboard
    weatherTitle: "Dashboard na Yanayi na Zamani",
    weatherDesc: "Sami bayanan yanayi na yanzu da shawarwarin noma na AI dangane da yanayin yanzu.",
    currentWeather: "Yanayin Yanzu",
    recommendations: "Shawarwarin Noma",
    forecast: "Hasashen Kwanaki 7",
    temperature: "Zafi",
    humidity: "Danshi",
    windSpeed: "Gudun Iska",
    
    // Common
    loading: "Ana Lodawa...",
    error: "Kuskure ya faru",
    tryAgain: "Sake Gwadawa",
    success: "An Yi Nasara"
  },
  
  yo: {
    // Header
    appTitle: "AgroAssist Naija",
    appSubtitle: "Awọn Solusan Ogbin Oye fun Awọn Agbe Naijiria",
    diseaseDetection: "Iwadi Arun",
    weather: "Oju-ọjọ",
    cropCalendar: "Kalenda Irugbin",
    treatments: "Awọn Itọju",
    
    // Hero Section
    heroTitle: "Ogbin Oye fun Awọn Agbe Naijiria Oni",
    heroSubtitle: "Fifun Ogbin ni Agbara pẹlu Imọ-ẹrọ AI",
    heroDescription: "Ṣe awari awọn arun irugbin lẹsẹkẹsẹ, gba awọn oye oju-ọjọ, ati mu ogbin rẹ pọ si pẹlu imọ-ẹrọ AI ti o ni ọgbọn ti a ṣe pataki fun ogbin Naijiria.",
    getStarted: "Bẹrẹ",
    learnMore: "Kọ Diẹ Sii",
    
    // Disease Detection
    diseaseDetectionTitle: "Iwadi Arun Irugbin nipasẹ AI",
    diseaseDetectionDesc: "Gbe tabi ya aworan irugbin rẹ lati gba iwadi arun lẹsẹkẹsẹ ati awọn iṣeduro itọju.",
    uploadImage: "Gbe Aworan",
    useCamera: "Lo Kamẹra",
    analyzing: "N Ṣe Iwadi",
    photoTipsTitle: "Awọn Imọran Aworan",
    photoTips: [
      "Ya awọn aworan ni awọn ipo imọlẹ to dara",
      "Dojukọ awọn ewe tabi awọn apakan ti o ni ipa",
      "Rii daju pe aworan naa ṣe kedere ati pe ko ṣe ṣiṣan",
      "Fi awọn agbegbe pupọ ti o ni ipa kun ti o ba ṣee ṣe"
    ],
    diseaseResults: "Awọn Abajade Iwadi Arun",
    confidence: "Igbẹkẹle",
    severity: "Iwọn Nla",
    treatment: "Itọju",
    prevention: "Idena",
    healthy: "Ilera",
    warning: "A Nilo Ifoju",
    critical: "Pataki",
    
    // Weather Dashboard
    weatherTitle: "Dashboard Oju-ọjọ Oye",
    weatherDesc: "Gba data oju-ọjọ akoko gidi ati awọn iṣeduro ogbin ti AI da lori awọn ipo lọwọ.",
    currentWeather: "Oju-ọjọ Lọwọ",
    recommendations: "Awọn Iṣeduro Ogbin",
    forecast: "Asọtẹlẹ Ọjọ 7",
    temperature: "Iwọn Otutu",
    humidity: "Ọririn",
    windSpeed: "Iyara Afẹfẹ",
    
    // Common
    loading: "N Gbe...",
    error: "Aṣiṣe waye",
    tryAgain: "Gbiyanju Lẹẹkansi",
    success: "Aṣeyọri"
  },
  
  ig: {
    // Header
    appTitle: "AgroAssist Naija",
    appSubtitle: "Ngwọta Ọrụ Ugbo Nke Ọgbara Ọhụrụ Maka Ndị Ọrụ Ugbo Naịjirịa",
    diseaseDetection: "Nchọpụta Ọrịa",
    weather: "Ihu Igwe",
    cropCalendar: "Kalenda Ihe Ọkụkụ",
    treatments: "Ọgwụgwọ",
    
    // Hero Section
    heroTitle: "Ọrụ Ugbo Nke Ọgbara Ọhụrụ Maka Ndị Ọrụ Ugbo Naịjirịa Nke Oge a",
    heroSubtitle: "Inye Ọrụ Ugbo Ike Site na Teknọlọjị AI",
    heroDescription: "Chọpụta ọrịa ihe ọkụkụ ozugbo, nweta nghọta ihu igwe, ma mee ka ọrụ ugbo gị dịkwuo mma site na teknọlọjị AI dị elu nke emere kpọmkwem maka ọrụ ugbo Naịjirịa.",
    getStarted: "Malite",
    learnMore: "Mụtakwuo",
    
    // Disease Detection
    diseaseDetectionTitle: "Nchọpụta Ọrịa Ihe Ọkụkụ Site na AI",
    diseaseDetectionDesc: "Bulite ma ọ bụ see foto ihe ọkụkụ gị iji nweta nyocha ọrịa ozugbo na ndụmọdụ ọgwụgwọ.",
    uploadImage: "Bulite Foto",
    useCamera: "Jiri Igwefoto",
    analyzing: "Na-enyocha",
    photoTipsTitle: "Ndụmọdụ Foto",
    photoTips: [
      "See foto na ọnọdụ ìhè dị mma",
      "Lekwasị anya na akwụkwọ ma ọ bụ akụkụ ndị metụtara",
      "Gbaa mbọ hụ na foto ahụ doro anya na ọ dịghị edoghi anya",
      "Tinye ọtụtụ mpaghara metụtara ma ọ bụrụ na ọ ga-ekwe omume"
    ],
    diseaseResults: "Nsonaazụ Nchọpụta Ọrịa",
    confidence: "Ntụkwasị Obi",
    severity: "Ọdịdị Njọ",
    treatment: "Ọgwụgwọ",
    prevention: "Mgbochi",
    healthy: "Ahụ Ike",
    warning: "Achọrọ Nlekọta",
    critical: "Dị Mkpa",
    
    // Weather Dashboard
    weatherTitle: "Dashboard Ihu Igwe Nke Ọgbara Ọhụrụ",
    weatherDesc: "Nweta data ihu igwe n'oge na ndụmọdụ ọrụ ugbo AI dabere na ọnọdụ ugbu a.",
    currentWeather: "Ihu Igwe Ugbu a",
    recommendations: "Ndụmọdụ Ọrụ Ugbo",
    forecast: "Amụma Ụbọchị 7",
    temperature: "Okpomọkụ",
    humidity: "Iru Mmiri",
    windSpeed: "Ọsọ Ikuku",
    
    // Common
    loading: "Na-ebu...",
    error: "Njehie mere",
    tryAgain: "Nwaa Ọzọ",
    success: "Ihe Ịga Nke Ọma"
  }
};

export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ha', name: 'Hausa', flag: '🇳🇬' },
  { code: 'yo', name: 'Yoruba', flag: '🇳🇬' },
  { code: 'ig', name: 'Igbo', flag: '🇳🇬' }
];