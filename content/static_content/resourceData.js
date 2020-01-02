export const resourceCourses = [
  {
    title: 'Schoolism',
    description:
      'Primarily aimed at concept artists and digital painters, Schoolism is strong on advanced fundamentals. Probably too intense for beginners. Dives deep on rendering, composition, and character design.',
    url: 'https://www.schoolism.com/',
    img: 'http://localhost:8000/images/resources/schoolism.png',
    cost: '$25 Monthly',
    category: 'website',
    recommended: true,
    recCourses: [
      {
        title: 'Drawing Fundamentals',
        instructor: 'Thomas Fluharty',
        url: 'https://www.schoolism.com/school.php?id=18',
      },
      {
        title: 'Pictorial Composition',
        instructor: 'Nathan Fowkes',
        url: 'https://www.schoolism.com/school.php?id=31',
      },
      {
        title: 'Essentials of Realism',
        instructor: 'Jonathan Hardesty',
        url: 'https://www.schoolism.com/school.php?id=33',
      },
      {
        title: 'Fundamentals of Lighting',
        instructor: 'Sam Nielson',
        url: 'https://www.schoolism.com/school.php?id=3',
      },
    ],
  },
  {
    title: 'New Masters Academy',
    description:
      "While a bit old school and slow-paced, the instructors on here are true veterans. Mostly from the visual development and film world, they're strong on anatomy, traditional painting, and compositional layout theory.",
    url: 'https://nma.art',
    img: 'http://localhost:8000/images/resources/nma.png',
    cost: '$35 Monthly',
    category: 'website',
    recommended: true,
    recCourses: [
      {
        title: 'Composition for Visual Artists',
        instructor: 'Bill Perkins',
        url: 'https://www.nma.art/courses/composition-for-visual-artists/',
      },
      {
        title: 'Constructive Head Drawing',
        instructor: 'Steve Huston',
        url: 'https://www.nma.art/courses/constructive-head-drawing/',
      },
      {
        title: 'Elements of Traditional Composition',
        instructor: 'Glenn Vilppu',
        url:
          'https://www.nma.art/courses/elements-of-traditional-composition-with-glenn-vilppu-2013/',
      },
    ],
  },
  {
    title: 'Society of Visual Storytelling',
    description:
      'Strong on beginner fundamentals – great for anyone just getting started. Jake Parker and Will Terry teach drawing and digital painting from the ground up through sets of well-designed, hands-on exercises.',
    url: 'https://www.svslearn.com/',
    img: 'http://localhost:8000/images/resources/svs.png',
    cost: '$25 Monthly',
    category: 'website',
    recommended: false,
    recCourses: [
      {
        title: 'How to Draw Everything',
        instructor: 'Jake Parker',
        url: 'https://courses.svslearn.com/courses/how-to-draw-everything',
      },
      {
        title: 'Basic Perspective Drawing',
        instructor: 'David Hohn',
        url: 'https://courses.svslearn.com/courses/basic-perspective-drawing',
      },
      {
        title: 'Painting Color and Light',
        instructor: 'Will Terry',
        url: 'https://courses.svslearn.com/courses/paintingcolorandlight2',
      },
      {
        title: 'Creative Composition',
        instructor: 'Will Terry',
        url:
          'https://courses.svslearn.com/courses/creative-composition-updated',
      },
    ],
  },
  {
    title: 'Art of Aaron Blaise',
    description: '-',
    url: 'https://creatureartteacher.com/',
    img: 'http://localhost:8000/images/resources/aaronblaise.png',
    cost: '$25 Monthly',
    category: 'website',
    recommended: false,
    recCourses: [
      {
        title: 'Taking Control of Colour',
        instructor: 'Ronnie Williford',
        url:
          'https://creatureartteacher.com/product/color-theory-class-ronnie-wiliford/',
      },
      {
        title: 'Character Design',
        instructor: 'Aaron Blaise',
        url:
          'https://creatureartteacher.com/product/character-design-course-aaron-blaise/',
      },
      {
        title: 'Art of the Storyboard',
        instructor: 'Lyndon Ruddy',
        url:
          'https://creatureartteacher.com/product/storyboard-course-with-lyndon-ruddy/',
      },
    ],
  },
  {
    title: 'Will Weston',
    description:
      'Will is xyz. His instagram is a treasure trove of notes, blackboard lectures, and demos. He runs workshops a few times a year in Paris, LA, and NYC.',
    url: [
      'https://www.instagram.com/willwestonstudio',
      'https://drawingamerica.com/weston/',
    ],
    img: 'http://localhost:8000/images/resources/willweston.png',
    cost: '$65-95 videos / $600 IRL Courses',
    category: 'website',
    recommended: true,
  },
  {
    title: 'Draw a Box',
    description:
      'A community favourite, this site walks you through the core concepts of Dynamic Sketching',
    url: 'https://drawabox.com/',
    img: 'http://localhost:8000/images/resources/drawabox.png',
    cost: 'Free!',
    category: 'website',
    recommended: false,
  },
  {
    title: 'Modern Day James',
    description:
      'James is an independent creator running a patreon and selling individual gumroad courses. Focuses on concept design for games',
    url: [
      'https://www.patreon.com/moderndayjames',
      'https://gumroad.com/moderndayjames',
    ],
    img: 'http://localhost:8000/images/resources/moddayjames.png',
    cost: '$5-30 Monthly / $8-20 Videos',
    category: 'website',
    recommended: false,
  },
  {
    title: 'Ty Carter',
    description:
      'Another independent teacher, Ty is a background designer from the animation world creating tutorials on Patreon and Gumroad. Strong on lighting & colour theory, stylised illustration techniques, and visual design principals',
    url: ['https://gumroad.com/tycarter', 'https://www.patreon.com/tycarter'],
    img: 'http://localhost:8000/images/resources/tycarter.png',
    cost: '$10-200 Monthly / $25 Videos',
    category: 'website',
    recommended: false,
  },

  {
    title: 'Concept Design Academy',
    description: '-',
    url: 'http://conceptdesignacad.com/',
    img: 'http://localhost:8000/images/resources/cda.png',
    cost: '$750-800 IRL Courses',
    category: 'IRL',
    recommended: false,
  },
  {
    title: 'Foundation Art Group',
    description: '-',
    url: [
      'https://www.foundationartgroup.com/',
      'https://www.patreon.com/Foundation',
    ],
    img: 'http://localhost:8000/images/resources/foundation.png',
    cost: '$5 Monthly',
    category: 'website',
    recommended: false,
  },
  {
    title: 'CGMA 2D Academy',
    description: '-',
    url: 'https://www.cgmasteracademy.com/',
    img: 'http://localhost:8000/images/resources/cgma.png',
    cost: '$600-800 Online Courses',
    category: 'website',
    recommended: false,
  },
  {
    title: 'Peter Han',
    description: '-',
    url: [
      'https://www.instagram.com/peterhanstyle/',
      'https://www.twitch.tv/peterhanstyle',
    ],
    img: 'http://localhost:8000/images/resources/peterhan.png',
    cost: '$750-900 IRL Courses',
    category: 'person',
    recommended: false,
  },
]

export const resourceBooks = [
  {
    title: 'How to Think When You Draw',
    author: 'Lorenzo Etherington',
    url:
      'https://www.goodreads.com/book/show/41583721-how-to-think-when-you-draw-volume-1',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535776123l/41583721._SX318_.jpg',
    topic: 'drawing',
    recommended: false,
  },
  {
    title: 'How to Draw',
    author: 'Scott Robertson',
    url: 'https://www.goodreads.com/book/show/15808089-how-to-draw',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1377121233l/15808089.jpg',
    topic: 'drawing',
    recommended: false,
  },
  {
    title: 'Creative Illustration',
    author: 'Andrew Loomis',
    url: 'https://www.goodreads.com/book/show/2766647-creative-illustration',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388990958l/2766647.jpg',
    topic: 'drawing',
    recommended: true,
  },
  {
    title: 'Framed Ink: Drawing and Composition for Visual Storytellers',
    author: 'Marco Mateu-Mestre',
    url:
      'https://www.goodreads.com/book/show/23389095-framed-ink-marcos-mateu-mestre',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1413576091l/23389095.jpg',
    topic: 'drawing',
    recommended: true,
  },
  {
    title: 'Sketching: Drawing Techniques for Product Designers',
    author: 'Koos Eissen',
    url: 'https://www.goodreads.com/book/show/2767856-sketching',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1356347823l/2767856.jpg',
    topic: 'drawing',
    recommended: false,
  },
  {
    title: 'Rapid Viz',
    author: 'Kurt Hanks & Larry Belliston',
    url: 'https://www.goodreads.com/book/show/146300.Rapid_Viz_',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387746517l/146300.jpg',
    topic: 'drawing',
    recommended: false,
  },
  {
    title: 'Dynamic Bible',
    author: 'Peter Han',
    url: 'https://www.gallerynucleus.com/detail/21089/',
    img:
      'https://70f186a60af817fe0731-09dac41207c435675bfd529a14211b5c.ssl.cf1.rackcdn.com/assets/attachments_p/000/059/556/size500_han_dynamicbible_detail2_500.jpg',
    topic: 'drawing',
    recommended: false,
  },
  {
    title: 'Drawn to Life: Volumes I and II',
    author: 'Walt Stanchfield',
    url: 'https://www.goodreads.com/book/show/6250465-drawn-to-life',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355037566l/6250465.jpg',
    topic: 'drawing',
    recommended: true,
  },
  {
    title: 'Fun with a Pencil',
    author: 'Andrew Loomis',
    url: 'https://www.goodreads.com/book/show/1027978.Fun_with_a_Pencil',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1207374284l/1027978.jpg',
    topic: 'drawing',
    recommended: true,
  },
  {
    title: 'Force: Dynamic Life Drawing for Animators',
    author: 'Michael D. Mattesi',
    url: 'https://www.goodreads.com/book/show/899923.Force',
    img:
      'https://image.isu.pub/170721044206-ae94e3bcecade533be7941b973c8b51b/jpg/page_1_thumb_large.jpg',
    topic: 'drawing',
    recommended: true,
  },
  {
    title: 'Metaphors We Live By',
    author: 'George Lakoff, Mark Johnson',
    url: 'https://www.goodreads.com/book/show/34459.Metaphors_We_Live_By',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388194058l/34459._SX318_.jpg',
    topic: 'visual thinking',
    recommended: false,
  },
  {
    title: 'Thinkertoys',
    author: 'Michael Michalko',
    url: 'https://www.goodreads.com/book/show/517518.Thinkertoys',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320553080l/517518.jpg',
    topic: 'visual thinking',
    recommended: false,
  },

  {
    title: 'Lateral Thinking',
    author: 'Edward de Bono',
    url: 'https://www.goodreads.com/book/show/10675.Lateral_Thinking',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1416779115l/10675.jpg',
    topic: 'visual thinking',
    recommended: false,
  },
]

// Hunt for more books https://www.gallerynucleus.com/books/new
