/**
 * Centralized Friendship & 20th Birthday Website Configuration
 * 
 * Edit this single file to personalize the website!
 * You can change names, titles, photos, captions, quotes, timeline entries,
 * handwritten letter, and easter egg messages without modifying code.
 */

export const friendData = {
  // Primary Personal Information
  name: "Abirami",
  fullName: "Abirami",
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
    heading: "Happy Birthday, Abirami! 🎉",
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
        alt: "Abirami lying down with butterfly effect",
        featured: true
      },
      {
        id: "photo2",
        src: "/images/photo2.jpg",
        caption: "One of those moments.",
        alt: "Abirami elegant saree pose",
        featured: false
      },
      {
        id: "photo3",
        src: "/images/photo3.jpg",
        caption: "Pure chaos 😂",
        alt: "Abirami aesthetic frame",
        featured: false
      },
      {
        id: "photo4",
        src: "/images/photo4.jpg",
        caption: "Definitely one to remember.",
        alt: "Abirami braid selfie",
        featured: false
      },
      {
        id: "photo5",
        src: "/images/photo5.jpg",
        caption: "Just being you.",
        alt: "Abirami cutie saree portrait",
        featured: false
      }
    ]
  },

  // Section 3 — Animated 20th Birthday Quote Cards
  quotesSection: {
    tag: "20TH BIRTHDAY REMINDERS 🌟",
    heading: "Things I Hope You Never Forget As You Turn 20",
    quotes: [
      {
        id: 1,
        text: "Happy 20th Birthday! You are more amazing than you probably realize.",
        icon: "Sparkles",
        highlight: "Happy 20th Birthday"
      },
      {
        id: 2,
        text: "Welcome to your 20s — never underestimate the difference your presence makes.",
        icon: "HeartHandshake",
        highlight: "Welcome to your 20s"
      },
      {
        id: 3,
        text: "Entering a new decade, but some memories will always stay special because you were there.",
        icon: "Camera",
        highlight: "because you were there"
      },
      {
        id: 4,
        text: "Keep that 20-year-old smile. It suits you perfectly.",
        icon: "Smile",
        highlight: "It suits you perfectly"
      },
      {
        id: 5,
        text: "No matter where your 20s take you, some memories will always stay.",
        icon: "Compass",
        highlight: "will always stay"
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
    salutation: "Dear Abirami,",
    paragraphs: [
      "I don't know what the future has planned, and I don't know where life will take us in your 20s.",
      "But I'm genuinely glad that our paths crossed.",
      "Thank you for the laughs, the random conversations, the memories, and simply for being you.",
      "I hope you always remember how special you are to the people around you as you celebrate turning 20."
    ],
    funnyPostscript: [
      "Happy 20th Birthday, Abirami! 🎂🎉",
      "And yes... I spent way too much time making this website. 😂",
      "But you were worth it."
    ],
    signOff: "With genuine appreciation,"
  },

  // Final Closing Screen
  closingSection: {
    heading: "Happy 20th Birthday, Abirami! Keep Smiling. Keep Being You. ✨",
    signature: "— From someone who is really glad to know you.",
    replayBtn: "Replay the Memories ↻"
  },

  // Secret Easter Egg Interaction
  easterEgg: {
    clicksRequired: 5,
    secretMessageHeading: "20th Birthday Secret Unlocked! 😌✨",
    secretMessageText: "Okay... you found the secret. 😌\nHappy 20th Birthday Abirami! I guess you really do explore everything.",
    subtext: "You unlocked the hidden sparkle of your 20th birthday scrapbook!"
  },

  // Audio / Music Player Settings (Kanmani Anbodu - Gunaa Instrumental Theme)
  music: {
    audioSrc: "/music/gunaa_instrumental.mp3",
    songLink: "https://mobcup.fm/ringtone/kanmani-anbodu-instrumental-lhZdkzmB",
    label: "Kanmani Anbodu Instrumental"
  }
};
