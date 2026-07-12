/* ============================================================================
   WEDDING INVITATION - CONFIGURATION
   ----------------------------------------------------------------------------
   This is the ONLY file you need to edit to make the invitation your own.
   Change the text between the quotes. Do not remove the quotes or commas.

   PHOTOS: put your image files in the /images folder, then reference them like
   "hero.jpg". Leave a photo as "" (empty) to use an elegant gradient
   placeholder instead. Recommended: large landscape JPGs, under ~500KB each.

   COLORS: hex codes. Change the palette to restyle the whole site at once.
   ============================================================================ */

const WEDDING_CONFIG = {

  /* ---- Browser tab title + link preview ---- */
  site: {
    title: "Michael & Miyalanni - A Love Letter",
    description: "December 19, 2026 - Lipa City, Batangas. You are lovingly invited.",
  },

  /* ---- The couple ---- */
  couple: {
    shortNames: "Michael & Miyalanni",   // used on the envelope + hero + footer
    monogram: "M & M",                    // shown on the letter and preloader
    initials: "M & M",                    // shown on the wax seal
    heroFirst: "Michael",                 // big script name, line 1
    heroSecond: "Miyalanni",              // big script name, line 2
    fullNames: "Michael Angelo Villegas De Mesa\nand\nMiyalanni Enna Solis Onquit",
    signature: "With love,\nMichael & Miyalanni",
  },

  /* ---- The date & place (also drives the countdown) ---- */
  event: {
    // ISO date with timezone offset. +08:00 = Philippine Standard Time.
    dateISO: "2026-12-19T12:00:00+08:00",
    dateLong: "Saturday, December 19, 2026",
    timeText: "12:00 in the Afternoon",
    location: "Lipa City, Batangas",
  },

  /* ---- Landing envelope ---- */
  landing: {
    // Cinematic opening screen. Names show on three lines: line1 / & / line2.
    nameLine1: "Michael Angelo",
    nameLine2: "Miyalanni Enna",
    oneLiner: "A glimpse into the beginning of our greatest adventure.",
    prompt: "Tap anywhere to begin our story",
    // Full-screen opening photo (fills the viewport). "" falls back to a burgundy
    // gradient so the text stays readable even without an image.
    heroImage: "ARTZ3236.jpg",
  },

  /* ---- Hero / invitation welcome message ---- */
  hero: {
    eyebrow: "The Wedding of",
    welcome: [
      "As we prepare to begin this beautiful new chapter, our hearts would feel incomplete without sharing the moment with the people who have loved, supported, and prayed for us.",
      "Inside this invitation, you'll find our story, wedding details, and everything you need to know for our special day.",
      "Your presence will mean more than words could ever hold, and we hope with all our hearts that you will celebrate this unforgettable day beside us.",
    ],
  },

  /* ---- Our Love Story ---- */
  story: {
    eyebrow: "The Beginning Of Forever",
    title: "Our Love Story",
    subtitle: "Every beautiful journey begins with a simple hello.",
    // Each string is a paragraph. The first one gets a decorative drop-cap.
    paragraphs: [
      "It all started with a simple message.",
      "While pursuing our Masters in Business Administration at San Beda University, Mike and Miya were virtual classmates. In January 2024, during their Benedictine Spirituality class, Mike messaged Miya to ask about their homework. One conversation turned into many, and before long, they looked forward to talking every day.",
      "Wanting to know each other beyond the screen, Mike drove from Batangas to Quezon City for their very first date at Starbucks Visayas Avenue. What began over coffee soon became something much more.",
      "On March 24, 2024, Miya's birthday, they officially became a couple.",
      "Together, they built a home, explored beautiful places, and created countless memories through their travels.",
      "Then, on the magical evening of October 5, 2026, beneath the lights of Hong Kong, Mike asked the question they had both been waiting for. She said yes.",
      "Now, they cannot wait to begin forever surrounded by the people they love most.",
    ],
    milestones: [
      { date: "Jan 2024",     text: "A simple hello in class" },
      { date: "Mar 24, 2024", text: "Officially a couple" },
      { date: "Oct 5, 2026",  text: "She said yes in Hong Kong" },
      { date: "Dec 19, 2026", text: "Forever begins" },
    ],
  },

  /* ---- Gallery (Our Love in Frames) ----
     Editorial masonry that never crops. Add photos in any order and any ratio.
     "w" and "h" are the image's pixel dimensions (used to reserve space so the
     layout never jumps). "caption" is optional and shows in the lightbox. */
  gallery: {
    eyebrow: "Moments We Treasure",
    title: "Our Love in Frames",
    subtitle: "Every photograph holds a memory, every memory tells our story.",
    frames: [
      { image: "ARTZ2604.jpg", w: 1067, h: 1600, caption: "" },
      { image: "ARTZ3453.jpg", w: 1067, h: 1600, caption: "" },
      { image: "ARTZ2939.jpg", w: 1600, h: 1067, caption: "" },
      { image: "ARTZ3038.jpg", w: 1067, h: 1600, caption: "" },
      { image: "ARTZ2794.jpg", w: 1600, h: 1067, caption: "" },
      { image: "ARTZ3398.jpg", w: 1600, h: 1067, caption: "" },
    ],
  },

  /* ---- Wedding day details ---- */
  details: {
    eyebrow: "Where & When",
    title: "Our Wedding Day",
    ceremony: {
      tag: "The Ceremony",
      name: "Our Lady of Peace and Good Voyage",
      venue: "Lipa City, Batangas",
      when: "Saturday, December 19, 2026",
      when2: "12:00 in the Afternoon",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Our+Lady+of+Peace+and+Good+Voyage+Parish+Lodlod+Lipa+City+Batangas",
      facebookUrl: "https://www.facebook.com/olpgvparish.lodlod/",
      facebookLabel: "Parish Page",
    },
    reception: {
      tag: "The Reception",
      name: "1022 Lipa",
      venue: "1022 Lipa City, Batangas",
      when: "Immediately Following the Ceremony",
      when2: "An afternoon & evening of celebration",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=1022+Lipa+City+Batangas",
      facebookUrl: "https://www.facebook.com/1022lipa/",
      facebookLabel: "Venue Page",
    },
    note: "Our celebration does not end after we say \"I do.\" We have prepared an afternoon and evening filled with heartfelt moments, wonderful food, meaningful conversation, music, laughter, and dancing. We would be truly honored if you stayed with us until the final song, as we celebrate the beginning of our forever together.",
  },

  /* ---- Dress code ----
     Two cards, each with a "women" and "men" block. Add inspiration photos by
     setting a "photo" path (e.g. "gown-inspo.jpg"); leave "" for a
     placeholder box. Swatches are the little colour circles under the palette. */
  dressCode: {
    eyebrow: "A Timeless Palette",
    title: "Dress Code",
    note: "To help create the timeless and elegant celebration we have envisioned, we kindly invite everyone to dress in formal attire following the suggested palette below.",
    cards: [
      {
        title: "Guests",
        women: {
          attire: "Long Formal Gown",
          colorsLabel: "Preferred Colors",
          palettes: ["Terracotta Palette", "Blush Pink Palette"],
          swatches: [
            { color: "#C36B3F", name: "Terracotta" },
            { color: "#D98E63", name: "Clay" },
            { color: "#E8B79A", name: "Peach" },
            { color: "#F0C9CF", name: "Blush" },
            { color: "#E7A6AE", name: "Rose" },
          ],
          photo: "dress-guests.jpg",
        },
      },
      {
        title: "Principal Sponsors",
        women: {
          attire: "Long Formal Gown",
          colorsLabel: "Preferred Colors",
          palettes: ["Champagne", "Gold"],
          swatches: [
            { color: "#E7CFA0", name: "Champagne" },
            { color: "#D9BE86", name: "Gold Sand" },
            { color: "#C9A24B", name: "Gold" },
            { color: "#A47E36", name: "Antique Gold" },
          ],
          photo: "DRESS-~2.JPG",
        },
      },
    ],
    // All gentlemen wear the Barong Tagalog, so it is shown once, centered.
    men: {
      title: "For the Gentlemen",
      attire: "Barong Tagalog",
      note: "Worn with pride.",
      photo: "dress-men.jpg",
    },
  },

  /* ---- Gifts ---- */
  gifts: {
    eyebrow: "With Heartfelt Thanks",
    title: "Celebrating With Your Blessing",
    paragraphs: [
      "Your presence is the greatest gift we could ever ask for.",
      "If you wish to bless us further, a monetary gift would be sincerely appreciated as we begin this new chapter together. Your generosity will help us create wonderful memories on our honeymoon and in our married life.",
      "Most importantly, your love, prayers, and presence are more than enough, and we are truly grateful to celebrate this special day with you.",
    ],
    // Kept low-key inside a dropdown. Add a QR image path (e.g. "qr1.png")
    // and the account number/name; leave "qr" as "" for a placeholder box.
    bankToggle: "View Our Bank Details",
    accounts: [
      { bank: "Account One", name: "Account name here", number: "Account number here", qr: "" },
      { bank: "Account Two", name: "Account name here", number: "Account number here", qr: "" },
    ],
  },

  /* ---- RSVP ----
     By default the form just shows a thank-you message (stores nothing).
     To COLLECT responses, paste a form endpoint URL below (e.g. from
     Formspree.io or a Google Apps Script). Leave "" to keep the demo behavior. */
  rsvp: {
    eyebrow: "Kindly Respond",
    title: "Will You Celebrate With Us?",
    endpoint: "",   // e.g. "https://formspree.io/f/xxxxxxx"
    thankYouYes: "Your seat is joyfully reserved. We cannot wait to celebrate this day with you.",
    thankYouNo:  "You will be dearly missed, and you remain in our hearts on our special day.",
  },

  /* ---- FAQ ---- */
  faq: {
    eyebrow: "Good to Know",
    title: "Frequently Asked",
    items: [
      {
        q: "Where should I park?",
        a: "Complimentary parking is available at both the church and the reception venue. Spaces are offered on a first come, first served basis, so we encourage arriving a little earlier to enjoy a relaxed and comfortable arrival.",
      },
      {
        q: "May I bring a plus one?",
        a: "If your invitation specifically includes a plus one, we would be delighted to welcome your guest. As we have carefully planned an intimate celebration with reserved seating, we kindly ask for your understanding in honouring the invitation as addressed.",
      },
      {
        q: "Can I bring my children?",
        a: "While we absolutely adore your little ones, we have chosen to make this an adults-only celebration. We hope this allows everyone to relax and fully enjoy the festivities. Thank you so much for your understanding and support.",
      },
      {
        q: "Contact Details of the Couple",
        a: "For further questions, please feel free to send us a message.\n\nMiya - 09178606492\nMike - 09176253593\n\nYou may also reach us on Facebook Messenger. Heads up though, Miya responds quicker than Mike. :)",
      },
    ],
  },

  /* ---- Footer ---- */
  footer: {
    quote: "Every love story is beautiful,\nbut ours is our favourite.",
    date: "December 19, 2026",
    names: "Michael & Miyalanni",
    thanks: "Thank you for celebrating with us.",
  },

  /* ---- Background music ----
     Plays automatically the moment a guest taps open the envelope (that tap is
     the user gesture browsers require before audio can play with sound).

     youtubeId: the video id from a YouTube link. For a link like
       https://youtu.be/d1FnonyWBJA        the id is d1FnonyWBJA
       https://www.youtube.com/watch?v=d1FnonyWBJA   also d1FnonyWBJA
     startSeconds: where to start the song (the t=11 in the link = 11 seconds).
     Leave youtubeId empty ("") to instead play a soft generated ambient tone.
     Set enabled:false to remove music entirely. */
  music: {
    enabled: true,
    youtubeId: "d1FnonyWBJA",
    startSeconds: 11,
    loop: true,       // restart the song when it ends
    volume: 70,       // 0-100
  },

  /* ---- Section background photos ----
     Reference files in /images, or leave "" for elegant gradient placeholders. */
  backgrounds: {
    hero:      "ARTZ3291.jpg",
    countdown: "ARTZ3140.jpg",
    story:     "ARTZ3236.jpg",
    details:   "ARTZ3083.jpg",
    gifts:     "ARTZ3196.jpg",
    footer:    "ARTZ3400.jpg",
  },

  /* ---- Theme colors (change these to restyle everything) ---- */
  theme: {
    burgundy:     "#5A0F1D",
    burgundyDeep: "#3A0912",
    wine:         "#7A1C2E",
    ivory:        "#F6EFE4",
    ivoryWarm:    "#efe4d2",
    champagne:    "#E7CFA0",
    gold:         "#C9A24B",
    goldBright:   "#E4C778",
    goldAntique:  "#A47E36",
    olive:        "#6B6B3A",
    sage:         "#9BA78B",
  },
};

/* Make available to index.html (and to Node checks). Do not edit below. */
if (typeof window !== "undefined") { window.WEDDING_CONFIG = WEDDING_CONFIG; }
if (typeof module !== "undefined") { module.exports = WEDDING_CONFIG; }
