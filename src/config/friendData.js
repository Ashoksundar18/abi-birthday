/**
 * Centralized Friendship & 20th Birthday Website Configuration
 * 
 * Edit this single file to personalize the website!
 * You can change names, titles, photos, captions, quotes, timeline entries,
 * handwritten letter, and easter egg messages without modifying code.
 */

export const friendData = {
  // Primary Personal Information
  name: "Abi",
  fullName: "Abi",
  nickname: "Abi",
  age: 20,
  creator: "Ashok Sundar",
  
  // Hero Section Configuration (1st Page - Mysterious Hero, No Birthday info)
  hero: {
    badge: "A Digital Scrapbook & Journey ✨",
    heading: "A Little Something For You...",
    subheading: "Because some people deserve a whole website.",
    creatorCredit: "Website Created & Hosted by Ashok Sundar ✨",
    ctaButton: "Begin the Journey ✨",
  },

  // Section 1 — Happy Birthday Introduction (2nd Section - Credit shown ONCE)
  intro: {
    tag: "HAPPY BIRTHDAY 🎂",
    heading: "Happy Birthday, Abi! 🎉",
    nicknameCallout: "oii Abi... ✨",
    creatorCredit: "Created & Hosted by Ashok Sundar",
    textParagraphs: [
      "Welcome to Chapter 20! 🌟 Entering your 20s is a major milestone, and someone as special as you deserves an entire website to celebrate it.",
      "Some people enter our lives quietly and somehow become part of the memories we never want to forget.",
      "Not just a gift you can keep on a shelf, but a digital scrapbook dedicated to celebrating YOU as you turn 20.",
      "Here's to new adventures, endless laughter, and an unforgettable 20th year ahead! ✨"
    ]
  },

  // Section 2 — Photo Memories (Exactly 5 Photos)
  gallery: {
    tag: "20 YEARS OF MEMORIES",
    heading: "Little Moments, Big Memories",
    subheading: "A collection of 5 special snapshots that bring a smile every single time.",
    photos: [
      {
        id: "photo1",
        src: "/images/photo1.jpg",
        caption: "That smile.",
        alt: "Abi lying down with butterfly effect",
        featured: true
      },
      {
        id: "photo2",
        src: "/images/photo2.jpg",
        caption: "One of those moments.",
        alt: "Abi elegant saree pose",
        featured: false
      },
      {
        id: "photo3",
        src: "/images/photo3.jpg",
        caption: "Pure chaos 😂",
        alt: "Abi aesthetic frame",
        featured: false
      },
      {
        id: "photo4",
        src: "/images/photo4.jpg",
        caption: "Definitely one to remember.",
        alt: "Abi braid selfie",
        featured: false
      },
      {
        id: "photo5",
        src: "/images/photo5.jpg",
        caption: "Just being you.",
        alt: "Abi cutie saree portrait",
        featured: false
      }
    ]
  },

  // Section 3 — Animated Quotes & Words of Hope (Overcoming Darkness & Turning 20)
  quotesSection: {
    tag: "WORDS OF STRENGTH & HOPE 🌅",
    heading: "Reminders to Overcome Darkness & Keep Going",
    subheading: "Gentle words of comfort, hope, and strength for the days when things feel heavy, and as you step into your 20s.",
    categories: [
      { id: "all", label: "All Words ✨" },
      { id: "healing", label: "Overcoming Depression & Darkness 🌅" },
      { id: "birthday", label: "20th Birthday Reflections 🎂" }
    ],
    quotes: [
      {
        id: 1,
        text: "There is hope, even when your brain tells you there isn't. You are stronger than the dark days, and the sun will find you again.",
        author: "John Green",
        category: "healing",
        icon: "Sun",
        highlight: "There is hope"
      },
      {
        id: 2,
        text: "Even the darkest night will end and the sun will rise. Your current pain is a chapter, not your whole story.",
        author: "Victor Hugo",
        category: "healing",
        icon: "Sunrise",
        highlight: "the sun will rise"
      },
      {
        id: 3,
        text: "You don't have to see the whole staircase, just take the first step. Take it one single breath at a time.",
        author: "Martin Luther King Jr.",
        category: "healing",
        icon: "Compass",
        highlight: "take the first step"
      },
      {
        id: 4,
        text: "Out of suffering have emerged the strongest souls; the most resilient characters are seared with scars.",
        author: "Kahlil Gibran",
        category: "healing",
        icon: "Shield",
        highlight: "strongest souls"
      },
      {
        id: 5,
        text: "Healing is not linear. Be gentle with yourself on heavy days — simply waking up and trying again is proof of your courage.",
        author: "Gentle Reminder",
        category: "healing",
        icon: "Heart",
        highlight: "proof of your courage"
      },
      {
        id: 6,
        text: "Light can be found even in the darkest of times, if one only remembers to turn on the light.",
        author: "Albus Dumbledore",
        category: "healing",
        icon: "Sparkles",
        highlight: "turn on the light"
      },
      {
        id: 7,
        text: "You have survived 100% of your hardest days so far. Give yourself credit for how far you have walked through the fog.",
        author: "Daily Reminder",
        category: "healing",
        icon: "Feather",
        highlight: "survived 100% of your hardest days"
      },
      {
        id: 8,
        text: "Don't let the shadows of yesterday spoil the sunrise of tomorrow. You are allowed to reset and start fresh at any moment.",
        author: "Words of Hope",
        category: "healing",
        icon: "Flame",
        highlight: "start fresh"
      },
      {
        id: 9,
        text: "Happy 20th Birthday! You are more resilient, amazing, and loved than you probably realize.",
        author: "Ashok Sundar",
        category: "birthday",
        icon: "Sparkles",
        highlight: "more resilient"
      },
      {
        id: 10,
        text: "Welcome to your 20s — never underestimate the difference your presence makes to the world around you.",
        author: "Ashok Sundar",
        category: "birthday",
        icon: "HeartHandshake",
        highlight: "difference your presence makes"
      },
      {
        id: 11,
        text: "Entering a new decade... Remember that the darkest nights produce the brightest stars.",
        author: "Ashok Sundar",
        category: "birthday",
        icon: "Camera",
        highlight: "brightest stars"
      },
      {
        id: 12,
        text: "Keep that genuine smile. It has the power to bring warmth even into the gloomiest days.",
        author: "Ashok Sundar",
        category: "birthday",
        icon: "Smile",
        highlight: "power to bring warmth"
      },
      {
        id: 13,
        text: "No matter where your 20s take you, remember that you never have to carry the heavy days alone.",
        author: "Ashok Sundar",
        category: "birthday",
        icon: "Compass",
        highlight: "never have to carry the heavy days alone"
      }
    ]
  },

  // Section 4 — Interactive Vertical Timeline
  timelineSection: {
    tag: "OUR JOURNEY",
    heading: "A Few Moments Worth Remembering",
    subheading: "Looking back at the small chapters that made a big difference leading up to 20.",
    chapters: [
      {
        chapterNumber: "01",
        title: "The Beginning",
        subtitle: "How it all started",
        description: "Every story has a beginning...",
        dateTag: "Chapter One",
        icon: "Sparkles"
      },
      {
        chapterNumber: "02",
        title: "The Random Moments",
        subtitle: "Late talks & endless conversations",
        description: "The conversations that somehow lasted way longer than expected.",
        dateTag: "Chapter Two",
        icon: "MessageCircle"
      },
      {
        chapterNumber: "03",
        title: "The Laughs",
        subtitle: "Uncontrollable giggles & inside jokes",
        description: "Some moments were completely ridiculous. That's probably why they're unforgettable.",
        dateTag: "Chapter Three",
        icon: "Laugh"
      },
      {
        chapterNumber: "04",
        title: "Turning 20 ✨",
        subtitle: "The journey continues into a new decade",
        description: "And now you're 20! Here's to making all future moments worth remembering.",
        dateTag: "Chapter Four",
        icon: "Bookmark"
      }
    ]
  },

  // Section 5 — Handwritten Personal Letter Section
  personalLetter: {
    heading: "One Last Thing...",
    stampText: "HAPPY 20TH BIRTHDAY",
    dateText: "A message from the heart",
    salutation: "Dear Abi,",
    paragraphs: [
      "I don't know what the future has planned, and I don't know where life will take us in your 20s.",
      "But I'm genuinely glad that our paths crossed.",
      "Thank you for the laughs, the random conversations, the memories, and simply for being you.",
      "I hope you always remember how special you are to the people around you as you celebrate turning 20."
    ],
    funnyPostscript: [
      "Happy 20th Birthday, Abi! 🎂🎉",
      "And yes... I spent way too much time making this website. 😂",
      "But you were worth it."
    ],
    signOff: "With genuine appreciation,"
  },

  // Final Closing Screen
  closingSection: {
    heading: "Happy 20th Birthday, Abi! Keep Smiling. Keep Being You. ✨",
    signature: "— From someone who is really glad to know you.",
    replayBtn: "Replay the Memories ↻"
  },

  // Secret Easter Egg Interaction
  easterEgg: {
    clicksRequired: 5,
    secretMessageHeading: "20th Birthday Secret Unlocked! 😌✨",
    secretMessageText: "Okay... you found the secret. 😌\nHappy 20th Birthday Abi! I guess you really do explore everything.",
    subtext: "You unlocked the hidden sparkle of your 20th birthday scrapbook!"
  },

  // Section for sending a message to Ashok
  feedbackSection: {
    tag: "MESSAGE FOR ASHOK 💬",
    heading: "Say something about Ashok...",
    subheading: "Have a thought, a secret note, or something you want to say? Write it here and it will be sent directly to Ashok's inbox!",
    targetEmail: "ashoksundar057@gmail.com",
    placeholder: "Say something about Ashok...",
    submitBtnText: "Send to Ashok 🚀",
    sendingText: "Sending to Ashok...",
    successHeading: "Message Sent to Ashok! ❤️",
    successSubtext: "Your message has been sent directly to Ashok. He will read it!"
  },

  // Audio / Music Player Settings (Kanmani Anbodu - Gunaa Instrumental Theme)
  music: {
    audioSrc: "/music/gunaa_instrumental.mp3",
    songLink: "https://mobcup.fm/ringtone/kanmani-anbodu-instrumental-lhZdkzmB",
    label: "Kanmani Anbodu Instrumental"
  }
};
