const projects = [
  {
    "id": "1",
    "name": "Typing Master",
    "header": "Android App on Google Play",
	"platform": "ANDROID",
	"status": "PUBLIC",
    "rating": 4.6,
    "installs": 750000,
    "description": "An educational game that helps you type faster while learning new words simultaneously. Random words fall down from the screen and you have to type them as fast as you can.",
    "screenshotsAmount": 8,
    "link": "https://play.google.com/store/apps/details?id=com.husseinelfeky.typingmaster",
    "folder": "typing_master",
    "tags": [
      "android",
      "java",
	  "kotlin",
      "xml",
      "google-play-services",
      "crashlytics"
    ]
  },
  {
    "id": "2",
    "name": "Character Pad",
    "header": "Android App on Google Play",
	"platform": "ANDROID",
	"status": "PUBLIC",
    "rating": 4.7,
    "installs": 1500000,
    "description": "A tool for copying and pasting any Unicode character in a fast and orderly way. You click on any character to copy, then paste it anywhere you like. You can also long click on it to know more details about that character.",
    "screenshotsAmount": 8,
    "link": "https://play.google.com/store/apps/details?id=com.husseinelfeky.characterpad",
    "folder": "character_pad",
    "tags": [
      "android",
      "java",
      "xml",
      "android-jetpack",
      "crashlytics",
      "unicode"
    ]
  },
  {
    "id": "3",
    "name": "GPA Calculator",
    "header": "Android App on Google Play",
	"platform": "ANDROID",
	"status": "PUBLIC",
    "rating": 4.7,
    "installs": 100000,
    "description": "A tool for calculating one's GPA and Cumulative GPA. This app is applicable for all schools and institutions as you can create your own custom GPA scale in case it is not listed in the app.",
    "screenshotsAmount": 5,
    "link": "https://play.google.com/store/apps/details?id=com.husseinelfeky.gpacalculator",
    "folder": "gpa_calculator",
    "tags": [
      "android",
      "java",
	  "sqlite",
      "xml",
      "android-support-library",
      "crashlytics"
    ]
  },
  {
    "id": "4",
    "name": "Items Counter",
    "header": "Android App on Google Play",
	"platform": "ANDROID",
	"status": "PUBLIC",
    "rating": 4.0,
    "installs": 5000,
    "description": "A tool for counting and recording anything from inventory, supplies, customers, laps ... to scores or votes. You can create many lists, each with their own items. Each item has its unique name, value and color.",
    "screenshotsAmount": 6,
    "link": "https://play.google.com/store/apps/details?id=com.husseinelfeky.itemscounter",
    "folder": "items_counter",
    "tags": [
      "android",
      "java",
	  "sqlite",
      "xml",
      "android-support-library"
    ]
  },
  {
    "id": "5",
    "name": "Be Like Bill",
    "header": "Android App on Google Play",
	"platform": "ANDROID",
	"status": "PUBLIC",
    "rating": 4.6,
    "installs": 5000,
    "description": "A small project where one can generate Be Like Bill memes, a famous trend at the past, and edit them as he/she likes.",
    "screenshotsAmount": 8,
    "link": "https://play.google.com/store/apps/details?id=com.husseinelfeky.belikebill",
    "folder": "be_like_bill",
    "tags": [
      "android",
      "java",
      "xml",
      "android-support-library"
    ]
  },
  {
    "id": "6",
    "name": "Orange Bus",
    "header": "Android App on Google Play",
	"platform": "ANDROID",
	"status": "ALPHA",
    "rating": null,
    "installs": null,
    "description": "A service, in which all employees working at Orange Egypt headquarters can view all the company's bus lines from/to work, including bus stops exact locations with their specific arrival and departure time, and get the most recommended bus lines based on any given destination in a fast convenient way, increasing employees’ daily productivity.",
    "screenshotsAmount": 5,
    "link": null,
    "folder": "orange_bus",
    "tags": [
      "android",
	  "kotlin",
      "xml",
      "android-jetpack",
	  "google-maps",
	  "google-places-api",
      "firebase-authentication",
	  "firebase-cloud-firestore",
      "firebase-cloud-messaging",
      "git"
    ]
  },
  {
    "id": "7",
    "name": "Orange Explore",
    "header": "Android AR App",
	"platform": "ANDROID",
	"status": "POC",
    "rating": null,
    "installs": null,
    "description": "An augmented reality app, developed for Orange future career fairs, in which there will be photos of every department manager printed on a large wall readily available at the booth. When a user hovers the camera over them, a video that explains what the department does will be played above the detected image as if the person is brought to life, grabbing the attention of all attendees to an immersive experience.",
    "screenshotsAmount": 0,
    "link": null,
    "folder": "orange_explore",
    "tags": [
      "android",
      "kotlin",
      "xml",
      "android-jetpack",
      "arcore",
      "git",
      "augmented-reality",
	  "augmented-images"
    ]
  },
  {
    "id": "8",
    "name": "Ain Assistant",
    "header": "Android AI App",
	"platform": "ANDROID",
	"status": "POC",
    "rating": null,
    "installs": null,
    "description": "An artificial intelligence app, developed for visually blind people as the main target audience, which aims at helping them to identify any near object with as much accessibility as possible, using a very simple user interface and IBM Watson TTS service to provide any spoken feedback to the user. The app has 5 options; it can detect food, clothes, banknotes, text, or color. The user can select any option of them, then he/she captures an image, which is then sent to a server that will analyze the image, using trained Machine Learning models, and returns the result, reading it to the user.",
    "screenshotsAmount": 0,
    "link": null,
    "folder": "ain_assistant",
    "tags": [
      "android",
      "java",
      "xml",
      "android-jetpack",
      "google-analytics",
      "big-query",
	  "ibm-watson"
    ]
  },
  {
    "id": "9",
    "name": "My Portfolio",
    "header": "Website",
	"platform": "WEB",
	"status": "PUBLIC",
    "rating": null,
    "installs": null,
    "description": "A simple project that introduced me to the basics of Front-End Development. It was one of the best ways to learn Web Design while producing a tangible project.",
    "screenshotsAmount": 0,
    "link": null,
    "folder": "my_portfolio",
    "tags": [
      "web",
      "front-end",
      "html",
      "css",
      "javascript",
      "jquery",
      "bootstrap"
    ]
  }
]
