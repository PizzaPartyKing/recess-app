import React, { useState } from "react";

const COLORS = {
  bg: "#080C18",
  surface: "#0F1628",
  card: "#141C32",
  border: "#1E2840",
  borderBright: "#2A3860",
  text: "#F0F4FF",
  textSoft: "#8896B8",
  muted: "#3A4460",
  accent: "#5B8EFF",
  accentDim: "#3A6FE0",
  lime: "#AAFF4D",
  pink: "#FF4DAA",
  teal: "#4DFFEE",
  purple: "#9B5BFF",
  orange: "#FF8C47",
  red: "#FF4D6A",
};

const HOBBY_DATA = {
  // ── PHYSICAL ──────────────────────────────────────────────
  "Rock Climbing": {
    emoji: "🧗", category: "Physical",
    tags: ["outdoor", "strength", "social", "adventurous", "challenge"],
    description: "Scale natural and artificial walls. Builds full-body strength and mental focus.",
    cost: { entry: "$50–80 (day pass + shoe rental)", mid: "$300–600 (shoes, harness, membership)", advanced: "$800+ (outdoor gear, courses)" },
    timePerWeek: "2–4 hrs", difficulty: "Moderate",
    resources: { forums: ["r/climbing", "Mountain Project Community"], localGroups: ["Search 'climbing gym' near you", "Meetup.com: Climbing Groups"], sites: ["mountainproject.com", "thecrag.com"] },
    video: { searchQuery: "rock climbing for beginners", url: "https://www.youtube.com/results?search_query=rock+climbing+for+beginners", title: "Rock Climbing for Beginners — Everything You Need to Know" },
    tutorials: [{ label: "Complete Beginner's Guide", url: "https://www.rei.com/learn/expert-advice/rock-climbing-basics.html" }, { label: "How to Choose Climbing Shoes", url: "https://www.rei.com/learn/expert-advice/climbing-shoes.html" }, { label: "Indoor vs Outdoor Climbing", url: "https://www.mountainproject.com/articles/115197697/indoor-vs-outdoor-climbing" }],    storeQuery: "rock climbing gym",
    classQuery: "rock climbing lessons",

  },
  "Bouldering": {
    emoji: "🪨", category: "Physical",
    tags: ["strength", "puzzle-solving", "indoor", "social", "challenge"],
    description: "Low-height climbing focused on short, powerful moves. No ropes required.",
    cost: { entry: "$20–30 (day pass)", mid: "$150–300 (shoes + membership)", advanced: "$500+ (crash pad, outdoor trips)" },
    timePerWeek: "2–4 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/bouldering", "Bouldering Obsessed Discord"], localGroups: ["Local bouldering gyms", "Meetup climbing groups"], sites: ["27crags.com", "thecrag.com"] },
    video: { searchQuery: "bouldering for beginners", url: "https://www.youtube.com/results?search_query=bouldering+for+beginners", title: "Bouldering for Beginners — Your First Session Guide" },
    tutorials: [{ label: "Bouldering Grades Explained", url: "https://www.thecrag.com/en/article/boulderinggradesystem" }, { label: "Top 10 Beginner Mistakes", url: "https://www.reddit.com/r/bouldering/wiki/index" }, { label: "Home Training for Boulderers", url: "https://www.moonclimbing.com/blogs/news/home-training-guide" }],    storeQuery: "bouldering gym",
    classQuery: "bouldering class",

  },
  "Trail Running": {
    emoji: "🏃", category: "Physical",
    tags: ["outdoor", "solo", "endurance", "nature", "meditative"],
    description: "Running through nature on dirt paths. Harder on the lungs, easier on the joints.",
    cost: { entry: "$100–150 (trail shoes)", mid: "$200–400 (gear + race entry)", advanced: "$500+ (ultras, travel)" },
    timePerWeek: "3–6 hrs", difficulty: "Moderate",
    resources: { forums: ["r/ultrarunning", "iRunFar community"], localGroups: ["Local trail running clubs", "Strava running groups"], sites: ["irunfar.com", "trailrunner.com"] },
    video: { searchQuery: "trail running for beginners", url: "https://www.youtube.com/results?search_query=trail+running+for+beginners", title: "Trail Running for Beginners — How to Get Started" },
    tutorials: [{ label: "Trail Running Beginner Plan", url: "https://www.trailrunner.com/training/trail-running-for-beginners/" }, { label: "How to Choose Trail Shoes", url: "https://www.rei.com/learn/expert-advice/trail-running-shoes.html" }, { label: "Running Uphill Technique", url: "https://www.irunfar.com/uphill-running-technique" }],    storeQuery: "running store",
    classQuery: "trail running club",

  },
  "Cold Water Swimming": {
    emoji: "🌊", category: "Physical",
    tags: ["outdoor", "solo", "nature", "adventurous", "meditative"],
    description: "Wild swimming in lakes, rivers, or ocean. Free, primal, and genuinely addictive.",
    cost: { entry: "$0–30 (find a spot + towel)", mid: "$50–150 (wetsuit)", advanced: "$200+ (gear + events)" },
    timePerWeek: "1–3 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/coldwaterchallenge", "Outdoor Swimmer Magazine community"], localGroups: ["Wild swimming Facebook groups", "Local open water swim groups"], sites: ["outdoorswimmer.com", "wildswimming.co.uk"] },
    video: { searchQuery: "cold water swimming beginners guide", url: "https://www.youtube.com/results?search_query=cold+water+swimming+beginners+guide", title: "Cold Water Swimming — Beginner's Guide to Wild Swimming" },
    tutorials: [{ label: "Cold Water Safety Guide", url: "https://www.outdoorswimmer.com/articles/cold-water-swimming-safety/" }, { label: "How to Start Wild Swimming", url: "https://www.wildswimming.co.uk/how-to-start-wild-swimming/" }, { label: "Health Benefits Explained", url: "https://www.bbc.com/future/article/20220128-the-cold-water-swimming-boom" }],    storeQuery: "aquatic center swimming pool",
    classQuery: "open water swimming group",

  },
  "Cycling": {
    emoji: "🚴", category: "Physical",
    tags: ["outdoor", "endurance", "social", "solo", "meditative"],
    description: "Road or gravel cycling for fitness and freedom. Covers ground fast, clears your head faster.",
    cost: { entry: "$300–600 (entry road bike)", mid: "$800–2000 (quality bike + gear)", advanced: "$3000+ (performance setup)" },
    timePerWeek: "3–8 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/cycling", "r/bicycling"], localGroups: ["Local cycling clubs", "Strava cycling segments near you"], sites: ["cyclingnews.com", "velonews.com"] },
    video: { searchQuery: "road cycling for beginners", url: "https://www.youtube.com/results?search_query=road+cycling+for+beginners", title: "Road Cycling for Beginners — Complete Starter Guide" },
    tutorials: [{ label: "How to Buy Your First Bike", url: "https://www.rei.com/learn/expert-advice/bike-guide.html" }, { label: "Beginner Cycling Training Plan", url: "https://www.cyclingweekly.com/fitness/training/cycling-training-plan-for-beginners" }, { label: "Essential Cycling Gear", url: "https://www.bicycling.com/bikes-gear/a20044419/cycling-gear-for-beginners/" }],    storeQuery: "bike shop",
    classQuery: "cycling class group ride",

  },
  "Skateboarding": {
    emoji: "🛹", category: "Physical",
    tags: ["outdoor", "creative", "solo", "adventurous", "urban"],
    description: "Learn tricks, cruise streets, or skate parks. One of the most expressive physical hobbies out there.",
    cost: { entry: "$60–120 (complete beginner board)", mid: "$150–300 (quality setup + pads)", advanced: "$300+ (multiple setups, skate trips)" },
    timePerWeek: "2–5 hrs", difficulty: "Moderate",
    resources: { forums: ["r/NewSkaters", "r/skateboarding"], localGroups: ["Local skate parks", "Skate shop community events"], sites: ["skateboardingmagazine.com", "thrashermagazine.com"] },
    video: { searchQuery: "skateboarding for beginners", url: "https://www.youtube.com/results?search_query=skateboarding+for+beginners", title: "Skateboarding for Beginners — Learn to Ride in One Session" },
    tutorials: [{ label: "How to Stand & Push", url: "https://www.skatedeluxe.com/blog/en/wiki/skateboarding/skateboarding-for-beginners/" }, { label: "Choosing Your First Board", url: "https://www.tactics.com/info/how-to-choose-a-skateboard" }, { label: "Learn Ollies Step by Step", url: "https://www.wikihow.com/Ollie-on-a-Skateboard" }],    storeQuery: "skate shop",
    classQuery: "skateboarding lessons",

  },
  "Martial Arts": {
    emoji: "🥋", category: "Physical",
    tags: ["indoor", "discipline", "social", "challenge", "strength"],
    description: "BJJ, Muay Thai, boxing — pick your style. Builds confidence, fitness, and focus simultaneously.",
    cost: { entry: "$50–100/mo (gym membership)", mid: "$150–250/mo (classes + gear)", advanced: "$300+/mo (competition prep)" },
    timePerWeek: "3–6 hrs", difficulty: "Moderate",
    resources: { forums: ["r/bjj", "r/MuayThai", "r/amateur_boxing"], localGroups: ["Local dojos and gyms", "Meetup: martial arts near you"], sites: ["bjjheroes.com", "fightinginsider.com"] },
    video: { searchQuery: "BJJ for beginners first class", url: "https://www.youtube.com/results?search_query=BJJ+for+beginners+first+class", title: "BJJ for Beginners — What to Expect at Your First Class" },
    tutorials: [{ label: "Which Martial Art Should You Learn?", url: "https://www.artofmanliness.com/skills/manly-know-how/which-martial-art-should-you-study/" }, { label: "BJJ Beginner's Guide", url: "https://bjjheroes.com/techniques/bjj-beginners-guide" }, { label: "Muay Thai Fundamentals", url: "https://www.evolve-mma.com/blog/muay-thai-for-beginners-everything-you-need-to-know/" }],    storeQuery: "martial arts school",
    classQuery: "martial arts class beginner",

  },
  "Yoga": {
    emoji: "🧘", category: "Physical",
    tags: ["indoor", "meditative", "solo", "flexibility", "mindfulness"],
    description: "Movement meets mindfulness. Deceptively hard, consistently rewarding.",
    cost: { entry: "$0 (YouTube classes)", mid: "$50–100/mo (studio membership)", advanced: "$200–500 (teacher training)" },
    timePerWeek: "2–5 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/yoga", "YogaForum.org"], localGroups: ["Local yoga studios", "Community center classes"], sites: ["yogajournal.com", "doyogawithme.com"] },
    video: { searchQuery: "yoga for complete beginners", url: "https://www.youtube.com/results?search_query=yoga+for+complete+beginners", title: "Yoga for Complete Beginners — 20 Minute Home Yoga" },
    tutorials: [{ label: "Yoga for Beginners Guide", url: "https://www.yogajournal.com/yoga-101/yoga-for-beginners/" }, { label: "Free Classes — Yoga with Adriene", url: "https://www.youtube.com/@yogawithadriene" }, { label: "Which Style of Yoga is Right For You?", url: "https://www.yogajournal.com/yoga-101/types-of-yoga/" }],    storeQuery: "yoga studio",
    classQuery: "yoga class beginner",

  },
  "Rowing / Kayaking": {
    emoji: "🚣", category: "Physical",
    tags: ["outdoor", "nature", "solo", "endurance", "water"],
    description: "Paddle rivers, lakes, or coastal waters. Full-body workout with incredible scenery.",
    cost: { entry: "$30–60 (rental per session)", mid: "$400–900 (beginner kayak + gear)", advanced: "$1500+ (quality boat + accessories)" },
    timePerWeek: "2–4 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/kayaking", "r/whitewater"], localGroups: ["Local paddling clubs", "REI kayak classes"], sites: ["americancanoe.org", "paddling.com"] },
    video: { searchQuery: "kayaking for beginners paddle strokes", url: "https://www.youtube.com/results?search_query=kayaking+for+beginners+paddle+strokes", title: "Kayaking for Beginners — Paddle Strokes & Getting Started" },
    tutorials: [{ label: "Beginner Kayaking Guide", url: "https://www.rei.com/learn/expert-advice/kayaking.html" }, { label: "How to Choose a Kayak", url: "https://www.paddling.com/plan/articles/how-to-choose-a-kayak/" }, { label: "Basic Paddle Strokes", url: "https://www.americancanoe.org/page/paddling_basics" }],    storeQuery: "kayak rental",
    classQuery: "kayaking lessons",

  },
  "Archery": {
    emoji: "🏹", category: "Physical",
    tags: ["indoor", "solo", "meditative", "precision", "discipline"],
    description: "Pure focus and precision. One of the most meditative competitive sports you can do.",
    cost: { entry: "$20–40 (range session with rental)", mid: "$200–500 (beginner bow + gear)", advanced: "$800+ (competition setup)" },
    timePerWeek: "1–3 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/archery", "Archery Talk Forum"], localGroups: ["Local archery ranges", "USA Archery club finder"], sites: ["usarchery.org", "archerytalk.com"] },
    video: { searchQuery: "archery for beginners form technique", url: "https://www.youtube.com/results?search_query=archery+for+beginners+form+technique", title: "Archery for Beginners — Form, Technique & First Steps" },
    tutorials: [{ label: "USA Archery Beginner Resources", url: "https://www.usarchery.org/resources/getting-started" }, { label: "Recurve vs Compound — Which to Start With", url: "https://archerytalk.com/threads/recurve-vs-compound-for-beginners.html" }, { label: "Proper Archery Form Guide", url: "https://www.liveabout.com/archery-for-beginners-1083315" }],    storeQuery: "archery range",
    classQuery: "archery lessons",

  },

  // ── CREATIVE ──────────────────────────────────────────────
  "Ceramics": {
    emoji: "🏺", category: "Creative",
    tags: ["creative", "meditative", "hands-on", "artistic", "tactile"],
    description: "Shape clay into functional art. One of the most meditative hobbies you can find.",
    cost: { entry: "$30–60 (community studio drop-in)", mid: "$200–400 (course + tools)", advanced: "$1000+ (home wheel, kiln access)" },
    timePerWeek: "2–6 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/Pottery", "Ceramic Arts Network Forum"], localGroups: ["Local community art centers", "YMCA pottery classes"], sites: ["ceramicartsnetwork.org", "bigceramicstore.com"] },
    video: { searchQuery: "pottery wheel for beginners", url: "https://www.youtube.com/results?search_query=pottery+wheel+for+beginners", title: "Pottery for Beginners — Your First Time on the Wheel" },
    tutorials: [{ label: "Beginner's Guide to Pottery", url: "https://ceramicartsnetwork.org/daily/article/Beginners-Guide-to-Pottery" }, { label: "Finding a Studio Near You", url: "https://www.yelp.com/search?find_desc=pottery+classes" }, { label: "Hand-Building vs Wheel Throwing", url: "https://ceramicartsnetwork.org/daily/article/Hand-Building-vs-Wheel-Throwing" }],    storeQuery: "pottery studio clay art center",
    classQuery: "pottery class beginner wheel throwing",

  },
  "Urban Sketching": {
    emoji: "✏️", category: "Creative",
    tags: ["artistic", "outdoor", "solo", "observational", "meditative"],
    description: "Draw cities, cafes, and streetscapes on location. Low cost, high reward.",
    cost: { entry: "$20–40 (sketchbook + pens)", mid: "$80–150 (quality supplies)", advanced: "$300+ (workshops, travel)" },
    timePerWeek: "1–5 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/urbansketching", "Urban Sketchers Forum"], localGroups: ["UrbanSketchers.org local chapters", "Facebook: Urban Sketchers [your city]"], sites: ["urbansketchers.org", "sketchbookskool.com"] },
    video: { searchQuery: "urban sketching for beginners", url: "https://www.youtube.com/results?search_query=urban+sketching+for+beginners", title: "Urban Sketching for Beginners — Start Drawing the World Around You" },
    tutorials: [{ label: "Urban Sketching 101", url: "https://urbansketchers.org/p/about-urban-sketching.html" }, { label: "Starter Supply List", url: "https://www.sketchbookskool.com/blog/urban-sketching-supplies/" }, { label: "Perspective Tips for Beginners", url: "https://www.artistsnetwork.com/art-techniques/urban-sketching-tips/" }],    storeQuery: "Blick Art Materials art supply store",
    classQuery: "drawing class art workshop",

  },
  "Film Photography": {
    emoji: "📷", category: "Creative",
    tags: ["artistic", "patient", "analog", "solo", "observational"],
    description: "Shoot on 35mm or medium format film. Slows you down in the best way.",
    cost: { entry: "$40–100 (used film camera + first roll)", mid: "$200–400 (better camera + dev costs)", advanced: "$500+ (darkroom access)" },
    timePerWeek: "2–4 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/analog", "Rangefinder Forum"], localGroups: ["Local camera clubs", "Film photography meetups"], sites: ["filmphotographyproject.com", "35mmc.com"] },
    video: { searchQuery: "film photography for beginners 35mm", url: "https://www.youtube.com/results?search_query=film+photography+for+beginners+35mm", title: "Film Photography for Beginners — Everything You Need to Know" },
    tutorials: [{ label: "Best Beginner Film Cameras", url: "https://www.35mmc.com/best-film-cameras-for-beginners/" }, { label: "How to Develop Your Own Film", url: "https://filmphotographyproject.com/content/develop-black-white-film" }, { label: "Understanding Film Speeds (ISO)", url: "https://www.lomography.com/magazine/318255-a-guide-to-film-speeds" }],    storeQuery: "camera store",
    classQuery: "photography workshop",

  },
  "Watercolor Painting": {
    emoji: "🎨", category: "Creative",
    tags: ["artistic", "meditative", "solo", "creative", "tactile"],
    description: "Paint with water and pigment. Unpredictable and forgiving in equal measure.",
    cost: { entry: "$30–60 (starter set)", mid: "$100–200 (quality paints + paper)", advanced: "$300+ (professional supplies, classes)" },
    timePerWeek: "2–5 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/Watercolor", "WetCanvas Forums"], localGroups: ["Local art classes", "Community art center workshops"], sites: ["watercolorpainting.com", "jacksonart.com"] },
    video: { searchQuery: "watercolor painting for absolute beginners", url: "https://www.youtube.com/results?search_query=watercolor+painting+for+absolute+beginners", title: "Watercolor for Absolute Beginners — Materials & First Painting" },
    tutorials: [{ label: "Beginner Watercolor Techniques", url: "https://www.artistsnetwork.com/art-techniques/watercolor-techniques-for-beginners/" }, { label: "Best Budget Watercolor Supplies", url: "https://www.jacksonsart.com/blog/2020/01/13/best-watercolour-sets-for-beginners/" }, { label: "Wet on Wet vs Wet on Dry", url: "https://watercolorpainting.com/wet-on-wet-vs-wet-on-dry/" }],    storeQuery: "Blick Art Materials art supply store",
    classQuery: "watercolor painting class workshop",

  },
  "Screenwriting": {
    emoji: "🎬", category: "Creative",
    tags: ["writing", "solo", "storytelling", "creative", "mental"],
    description: "Write scripts for film or TV. Structured storytelling with real creative freedom.",
    cost: { entry: "$0 (free software like Fade In)", mid: "$50–150 (software + books)", advanced: "$200+ (courses, competitions)" },
    timePerWeek: "3–8 hrs", difficulty: "Moderate",
    resources: { forums: ["r/Screenwriting", "Done Deal Pro Forums"], localGroups: ["Local screenwriting groups", "Meetup: writers rooms"], sites: ["simplyscripts.com", "scriptmag.com"] },
    video: { searchQuery: "screenwriting for beginners how to write a script", url: "https://www.youtube.com/results?search_query=screenwriting+for+beginners+how+to+write+a+script", title: "Screenwriting for Beginners — How to Write Your First Script" },
    tutorials: [{ label: "Free Screenwriting Software — Fade In", url: "https://www.fadeinpro.com/" }, { label: "The 3-Act Structure Explained", url: "https://www.scriptmag.com/features/the-three-act-structure" }, { label: "Read Free Scripts Online", url: "https://www.simplyscripts.com/" }],    storeQuery: "Barnes Noble bookstore",
    classQuery: "screenwriting workshop class",

  },
  "Leatherworking": {
    emoji: "👜", category: "Creative",
    tags: ["hands-on", "craft", "solo", "tactile", "patient"],
    description: "Cut, stitch, and shape leather into wallets, bags, belts. Makes things that last decades.",
    cost: { entry: "$60–120 (starter tool kit)", mid: "$200–400 (quality tools + leather)", advanced: "$600+ (professional tools, machines)" },
    timePerWeek: "2–5 hrs", difficulty: "Moderate",
    resources: { forums: ["r/leathercraft", "Leatherworker.net Forum"], localGroups: ["Local makerspace leather classes", "Tandy Leather workshops"], sites: ["leatherworker.net", "springfieldleather.com"] },
    video: { searchQuery: "leatherworking for beginners make a wallet", url: "https://www.youtube.com/results?search_query=leatherworking+for+beginners+make+a+wallet", title: "Leatherworking for Beginners — Make Your First Wallet" },
    tutorials: [{ label: "Beginner Leatherworking Guide", url: "https://leatherworker.net/forum/viewtopic.php?t=57847" }, { label: "Essential Tools to Start", url: "https://www.tandyleather.com/blogs/craftaid/leatherworking-tools-for-beginners" }, { label: "Hand Stitching Leather Tutorial", url: "https://www.instructables.com/Hand-Stitching-Leather/" }],    storeQuery: "Tandy Leather leather craft store",
    classQuery: "leatherworking class workshop",

  },
  "Candle Making": {
    emoji: "🕯️", category: "Creative",
    tags: ["home", "craft", "creative", "meditative", "tactile"],
    description: "Blend wax, wicks, and scent into something people actually want in their homes.",
    cost: { entry: "$40–80 (starter kit)", mid: "$100–200 (quality materials + molds)", advanced: "$300+ (bulk supplies, custom fragrance)" },
    timePerWeek: "2–4 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/candlemaking", "Candle Science Community"], localGroups: ["Local craft workshops", "Michaels candle classes"], sites: ["candlescience.com", "makesy.com"] },
    video: { searchQuery: "candle making for beginners", url: "https://www.youtube.com/results?search_query=candle+making+for+beginners", title: "Candle Making for Beginners — Complete Starter Guide" },
    tutorials: [{ label: "Beginner Candle Making Guide", url: "https://www.candlescience.com/learning/beginner-candle-making-guide/" }, { label: "Choosing the Right Wax", url: "https://www.candlescience.com/learning/choosing-the-right-wax/" }, { label: "Fragrance Load Guide", url: "https://www.candlescience.com/learning/fragrance-calculator/" }],    storeQuery: "Michaels craft store Hobby Lobby",
    classQuery: "candle making class workshop",

  },
  "Woodworking": {
    emoji: "🪵", category: "Creative",
    tags: ["hands-on", "craft", "patient", "home", "tactile"],
    description: "Build furniture, carvings, or small objects from wood. Deeply satisfying physical creative work.",
    cost: { entry: "$100–200 (basic hand tools)", mid: "$500–1500 (power tools + lumber)", advanced: "$2000+ (full workshop setup)" },
    timePerWeek: "3–6 hrs", difficulty: "Moderate",
    resources: { forums: ["r/woodworking", "Sawmill Creek Forums"], localGroups: ["Local makerspace woodshops", "Community college woodworking classes"], sites: ["finewoodworking.com", "woodcraft.com"] },
    video: { searchQuery: "woodworking for beginners", url: "https://www.youtube.com/results?search_query=woodworking+for+beginners", title: "Woodworking for Beginners — Everything You Need to Know" },
    tutorials: [{ label: "Essential Beginner Tools", url: "https://www.finewoodworking.com/2018/09/04/10-tools-for-beginners" }, { label: "First Projects to Build", url: "https://www.familyhandyman.com/list/easy-woodworking-projects-for-beginners/" }, { label: "Wood Types Explained", url: "https://www.woodcraft.com/blog/posts/wood-101-hardwoods-vs-softwoods" }],
    storeQuery: "Woodcraft Rockler woodworking store",
    classQuery: "woodworking class near me",
  },

  // ── OUTDOOR / NATURE ──────────────────────────────────────
  "Foraging": {
    emoji: "🌿", category: "Outdoor",
    tags: ["outdoor", "nature", "solo", "educational", "meditative"],
    description: "Identify and harvest wild edible plants and mushrooms. Changes how you see nature.",
    cost: { entry: "$15–30 (field guide)", mid: "$50–100 (guided walk + guides)", advanced: "$150+ (courses, tools)" },
    timePerWeek: "2–4 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/foraging", "r/mycology"], localGroups: ["Local mycological societies", "Wildcraft! app events"], sites: ["foragerchef.com", "wildfoodism.com"] },
    video: { searchQuery: "foraging for beginners wild food", url: "https://www.youtube.com/results?search_query=foraging+for+beginners+wild+food", title: "Foraging for Beginners — How to Find Wild Food Safely" },
    tutorials: [{ label: "Safe Foraging Rules for Beginners", url: "https://foragerchef.com/foraging-safety/" }, { label: "Best Beginner Plants to Forage", url: "https://www.wildfoodism.com/beginner-foraging/" }, { label: "Find a Foraging Walk Near You", url: "https://www.eventbrite.com/d/online/foraging-walk/" }],    storeQuery: "nature center arboretum botanical garden",
    classQuery: "foraging guided walk nature tour",

  },
  "Birdwatching": {
    emoji: "🦅", category: "Outdoor",
    tags: ["nature", "solo", "observational", "meditative", "patient"],
    description: "Learn to identify birds by sight and sound. Gets you outside and weirdly obsessive fast.",
    cost: { entry: "$20–40 (field guide + free apps)", mid: "$150–400 (binoculars)", advanced: "$500+ (spotting scope, birding trips)" },
    timePerWeek: "2–5 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/birding", "eBird Community"], localGroups: ["Local Audubon Society chapters", "eBird local birding groups"], sites: ["ebird.org", "allaboutbirds.org"] },
    video: { searchQuery: "birdwatching for beginners how to start", url: "https://www.youtube.com/results?search_query=birdwatching+for+beginners+how+to+start", title: "Birdwatching for Beginners — How to Get Started" },
    tutorials: [{ label: "Free Merlin ID App by Cornell Lab", url: "https://merlin.allaboutbirds.org/" }, { label: "Beginner Binoculars Guide", url: "https://www.allaboutbirds.org/news/what-binoculars-are-best-for-birding/" }, { label: "eBird — Track Your Life List", url: "https://ebird.org/home" }],    storeQuery: "wild bird store",
    classQuery: "birdwatching tour group",

  },
  "Hiking": {
    emoji: "🥾", category: "Outdoor",
    tags: ["outdoor", "nature", "solo", "social", "endurance"],
    description: "Walk trails from easy afternoon loops to multi-day backcountry routes. No barrier to entry.",
    cost: { entry: "$80–150 (decent boots)", mid: "$300–600 (full day-hike kit)", advanced: "$800+ (backpacking gear)" },
    timePerWeek: "3–6 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/hiking", "r/backpacking"], localGroups: ["AllTrails community", "Local hiking Meetup groups"], sites: ["alltrails.com", "rei.com/learn"] },
    video: { searchQuery: "hiking for beginners everything you need to know", url: "https://www.youtube.com/results?search_query=hiking+for+beginners+everything+you+need+to+know", title: "Hiking for Beginners — Everything You Need to Know" },
    tutorials: [{ label: "Find Trails on AllTrails", url: "https://www.alltrails.com/" }, { label: "Day Hiking Essentials Checklist", url: "https://www.rei.com/learn/expert-advice/day-hiking-checklist.html" }, { label: "How to Choose Hiking Boots", url: "https://www.rei.com/learn/expert-advice/hiking-boots.html" }],    storeQuery: "outdoor gear store",
    classQuery: "guided hike nature walk",

  },
  "Surfing": {
    emoji: "🏄", category: "Outdoor",
    tags: ["outdoor", "water", "adventurous", "physical", "meditative"],
    description: "Catch waves. The learning curve is real but the feeling is unlike anything else.",
    cost: { entry: "$50–80 (lesson + board rental)", mid: "$400–800 (beginner board + wetsuit)", advanced: "$1000+ (quiver of boards, travel)" },
    timePerWeek: "3–6 hrs", difficulty: "Moderate",
    resources: { forums: ["r/surfing", "Surfer Magazine community"], localGroups: ["Local surf schools", "Surf meetup groups"], sites: ["surfline.com", "magicseaweed.com"] },
    video: { searchQuery: "surfing for beginners first lesson", url: "https://www.youtube.com/results?search_query=surfing+for+beginners+first+lesson", title: "Surfing for Beginners — Your First Lesson Explained" },
    tutorials: [{ label: "Surf Etiquette & Line-Up Rules", url: "https://www.surfer.com/features/surf-etiquette-lineup-rules/" }, { label: "Choosing a Beginner Board", url: "https://www.surfer.com/features/how-to-choose-a-surfboard/" }, { label: "Check Surf Forecasts — Surfline", url: "https://www.surfline.com/" }],    storeQuery: "surf shop",
    classQuery: "surf lessons beginner",

  },
  "Rock Pooling": {
    emoji: "🦀", category: "Outdoor",
    tags: ["nature", "solo", "observational", "educational", "outdoor"],
    description: "Explore coastal rock pools and discover sea creatures up close. Surprisingly gripping.",
    cost: { entry: "$0–20 (just show up + a field guide)", mid: "$30–80 (waterproof boots + guide books)", advanced: "$100+ (underwater camera)" },
    timePerWeek: "1–3 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/MarineBiology", "iNaturalist community"], localGroups: ["Local nature trusts", "Coastal wildlife groups"], sites: ["inaturalist.org", "seasearch.org.uk"] },
    video: { searchQuery: "rock pooling guide what to look for", url: "https://www.youtube.com/results?search_query=rock+pooling+guide+what+to+look+for", title: "Rock Pooling Guide — What to Look For & How to Explore" },
    tutorials: [{ label: "Identify What You Find — iNaturalist", url: "https://www.inaturalist.org/" }, { label: "Rock Pool Safety Tips", url: "https://www.wildlifetrusts.org/actions/how-go-rock-pooling" }, { label: "Best Rock Pooling Spots Near You", url: "https://www.discoverwildlife.com/animal-facts/fish/guide-to-rock-pooling/" }],    storeQuery: "beach coastal park nature preserve",
    classQuery: "coastal nature tour marine wildlife",

  },
  "Stargazing": {
    emoji: "🔭", category: "Outdoor",
    tags: ["nature", "solo", "meditative", "educational", "patient"],
    description: "Learn the night sky with your naked eye or a telescope. Humbling and completely free to start.",
    cost: { entry: "$0 (dark sky + free apps like Stellarium)", mid: "$100–300 (entry telescope)", advanced: "$500+ (quality scope + astrophotography gear)" },
    timePerWeek: "1–3 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/Astronomy", "Cloudy Nights Forum"], localGroups: ["Local astronomy clubs", "Dark sky preserve events"], sites: ["stellarium.org", "skyandtelescope.org"] },
    video: { searchQuery: "stargazing for beginners night sky", url: "https://www.youtube.com/results?search_query=stargazing+for+beginners+night+sky", title: "Stargazing for Beginners — How to Start Exploring the Night Sky" },
    tutorials: [{ label: "Free Stellarium App", url: "https://stellarium.org/" }, { label: "Choosing Your First Telescope", url: "https://skyandtelescope.org/astronomy-equipment/telescopes/how-to-choose-a-telescope/" }, { label: "Dark Sky Finder Near You", url: "https://www.lightpollutionmap.info/" }],    storeQuery: "telescope store astronomy club",
    classQuery: "astronomy club stargazing event",

  },
  "Mountain Biking": {
    emoji: "🚵", category: "Outdoor",
    tags: ["outdoor", "adventurous", "physical", "social", "challenge"],
    description: "Ride singletrack trails through forests and mountains. Terrifying and incredible in equal measure.",
    cost: { entry: "$400–800 (entry trail bike)", mid: "$1500–3000 (quality hardtail)", advanced: "$4000+ (full suspension setup)" },
    timePerWeek: "3–6 hrs", difficulty: "Moderate",
    resources: { forums: ["r/MTB", "MTBR Forums"], localGroups: ["Local trail associations", "IMBA trail finder"], sites: ["mtbproject.com", "pinkbike.com"] },
    video: { searchQuery: "mountain biking for beginners skills gear", url: "https://www.youtube.com/results?search_query=mountain+biking+for+beginners+skills+gear", title: "Mountain Biking for Beginners — Skills, Gear & First Trails" },
    tutorials: [{ label: "Find MTB Trails Near You", url: "https://www.mtbproject.com/" }, { label: "Essential MTB Skills for Beginners", url: "https://www.pinkbike.com/news/mountain-biking-skills-for-beginners.html" }, { label: "Hardtail vs Full Suspension", url: "https://www.rei.com/learn/expert-advice/mountain-bike.html" }],    storeQuery: "mountain bike shop",
    classQuery: "mountain bike skills clinic",

  },

  // ── CULINARY ──────────────────────────────────────────────
  "Sourdough Baking": {
    emoji: "🍞", category: "Culinary",
    tags: ["patient", "science", "creative", "home", "meditative"],
    description: "Ferment, shape, and bake wild yeast bread. It's part science, part ritual.",
    cost: { entry: "$20–40 (flour, jar, tools)", mid: "$80–150 (Dutch oven + scale)", advanced: "$300+ (home mill, proofing equipment)" },
    timePerWeek: "3–6 hrs", difficulty: "Moderate",
    resources: { forums: ["r/sourdough", "The Fresh Loaf forum"], localGroups: ["Local baking classes", "Library bread workshops"], sites: ["thefreshloaf.com", "kingarthurbaking.com"] },
    video: { searchQuery: "sourdough bread for beginners start to finish", url: "https://www.youtube.com/results?search_query=sourdough+bread+for+beginners+start+to+finish", title: "Sourdough Bread for Beginners — Full Process Start to Finish" },
    tutorials: [{ label: "Beginner Sourdough Guide", url: "https://www.theperfectloaf.com/beginners-sourdough-bread/" }, { label: "How to Make a Starter from Scratch", url: "https://www.kingarthurbaking.com/recipes/sourdough-starter-recipe" }, { label: "Troubleshooting Your Sourdough", url: "https://www.thefreshloaf.com/handbook/troubleshooting" }],    storeQuery: "Sur La Table kitchen store baking supply",
    classQuery: "bread baking class workshop",

  },
  "Homebrewing": {
    emoji: "🍺", category: "Culinary",
    tags: ["creative", "science", "patient", "social", "home"],
    description: "Brew your own beer, cider, or mead at home. Science meets creativity.",
    cost: { entry: "$60–100 (starter kit)", mid: "$200–400 (equipment upgrade)", advanced: "$500+ (kegging system)" },
    timePerWeek: "2–4 hrs (brew days every few weeks)", difficulty: "Moderate",
    resources: { forums: ["r/homebrewing", "HomeBrewTalk.com"], localGroups: ["AHA homebrew club finder", "Local homebrew shop events"], sites: ["homebrewersassociation.org", "brewersfriend.com"] },
    video: { searchQuery: "home brewing beer for beginners", url: "https://www.youtube.com/results?search_query=home+brewing+beer+for+beginners", title: "How to Brew Beer at Home — Complete Beginner Guide" },
    tutorials: [{ label: "Extract vs All-Grain Brewing", url: "https://www.homebrewersassociation.org/how-to-brew/extract-brewing/" }, { label: "Free Recipe Calculator", url: "https://www.brewersfriend.com/" }, { label: "Find a Local Homebrew Club", url: "https://www.homebrewersassociation.org/clubs/" }],    storeQuery: "homebrew supply store",
    classQuery: "homebrewing class",

  },
  "Hot Sauce Making": {
    emoji: "🌶️", category: "Culinary",
    tags: ["home", "science", "creative", "social", "fermentation"],
    description: "Grow and ferment your own chili sauces. Easier than you think, endlessly customizable.",
    cost: { entry: "$20–50 (peppers, jars, basic tools)", mid: "$100–200 (fermentation setup + variety peppers)", advanced: "$300+ (bottling equipment, bulk ingredients)" },
    timePerWeek: "1–3 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/hotsauce", "r/fermentation"], localGroups: ["Local farmers market pepper growers", "Fermentation workshops"], sites: ["peppergeek.com", "chilipeppermadness.com"] },
    video: { searchQuery: "fermented hot sauce beginners", url: "https://www.youtube.com/results?search_query=fermented+hot+sauce+beginners", title: "How to Make Fermented Hot Sauce at Home" },
    tutorials: [{ label: "Beginner Fermented Hot Sauce Recipe", url: "https://www.chilipeppermadness.com/recipes/fermented-hot-sauce/" }, { label: "Pepper Heat Guide — Scoville Scale", url: "https://www.peppergeek.com/scoville-scale/" }, { label: "Bottling Your Hot Sauce", url: "https://www.peppergeek.com/how-to-bottle-hot-sauce/" }],    storeQuery: "specialty grocery store farmers market",
    classQuery: "fermentation class cooking workshop",

  },
  "Cheesemaking": {
    emoji: "🧀", category: "Culinary",
    tags: ["home", "science", "patient", "creative", "fermentation"],
    description: "Make fresh mozzarella, ricotta, or aged cheddars at home. Alchemy you can eat.",
    cost: { entry: "$30–60 (beginner kit)", mid: "$100–200 (cultures, molds, press)", advanced: "$400+ (aging cave setup)" },
    timePerWeek: "2–4 hrs", difficulty: "Moderate",
    resources: { forums: ["r/cheesemaking", "Cheesemaking.com Forum"], localGroups: ["Local cheesemaking workshops", "Slow Food chapter events"], sites: ["cheesemaking.com", "artisancheesemakingathome.com"] },
    video: { searchQuery: "mozzarella cheese making at home beginners", url: "https://www.youtube.com/results?search_query=mozzarella+cheese+making+at+home+beginners", title: "How to Make Mozzarella at Home — 30 Minute Cheese" },
    tutorials: [{ label: "30-Minute Mozzarella Recipe", url: "https://www.cheesemaking.com/learn/how-to-make-30-minute-mozzarella.html" }, { label: "Beginner Cheese Making Kit", url: "https://www.cheesemaking.com/store/c/cheese-making-kits.html" }, { label: "Introduction to Cultures & Rennet", url: "https://www.cheesemaking.com/learn/" }],    storeQuery: "Sur La Table Williams Sonoma kitchen store",
    classQuery: "cheesemaking class cooking workshop",

  },
  "Cocktail Crafting": {
    emoji: "🍸", category: "Culinary",
    tags: ["creative", "social", "home", "science", "quick"],
    description: "Learn to build, balance, and invent cocktails. Great for dinner parties, better for solo experiments.",
    cost: { entry: "$40–80 (basic spirits + tools)", mid: "$150–300 (full home bar setup)", advanced: "$400+ (rare spirits, bitters collection)" },
    timePerWeek: "1–3 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/cocktails", "r/bartenders"], localGroups: ["Cocktail class events on Eventbrite", "Local distillery tours"], sites: ["diffordsguide.com", "punchdrink.com"] },
    video: { searchQuery: "cocktail making for beginners essential cocktails", url: "https://www.youtube.com/results?search_query=cocktail+making+for+beginners+essential+cocktails", title: "Cocktail Making for Beginners — 5 Essential Cocktails to Learn" },
    tutorials: [{ label: "The 5 Basic Cocktail Techniques", url: "https://www.diffordsguide.com/encyclopedia/1086/bws/cocktail-making-techniques" }, { label: "Build Your Home Bar on a Budget", url: "https://punchdrink.com/articles/how-to-build-a-home-bar/" }, { label: "Free Recipe Database — Difford's", url: "https://www.diffordsguide.com/cocktails" }],    storeQuery: "Total Wine liquor store bar supply",
    classQuery: "cocktail making class mixology",

  },

  "Thrifting": {
    emoji: "🛍️", category: "Outdoor",
    tags: ["social", "creative", "outdoor", "collecting", "urban"],
    description: "Hunt thrift stores, estate sales, and flea markets for hidden gems. Part treasure hunt, part sustainable fashion, part interior design.",
    cost: { entry: "$0–20 (just walk in and browse)", mid: "$50–150/mo (regular hauls)", advanced: "$200+ (reselling setup, storage, travel for estate sales)" },
    timePerWeek: "2–5 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/ThriftStoreHauls", "r/ThriftGod", "r/Flipping"], localGroups: ["Local Facebook Marketplace groups", "Estate sale finder apps (EstateSales.net)", "Flea market calendars near you"], sites: ["estatesales.net", "goodwill.org", "poshmark.com"] },
    video: { searchQuery: "thrifting for beginners tips find best stuff", url: "https://www.youtube.com/results?search_query=thrifting+for+beginners+tips+find+best+stuff", title: "Thrifting for Beginners — How to Find the Best Stuff" },
    tutorials: [{ label: "Beginner Thrifting Tips & Strategy", url: "https://www.reddit.com/r/ThriftStoreHauls/wiki/index" }, { label: "Find Estate Sales Near You", url: "https://www.estatesales.net/" }, { label: "How to Flip Thrift Finds for Profit", url: "https://www.reddit.com/r/Flipping/wiki/index" }],    storeQuery: "thrift store",
    classQuery: "estate sale",

  },

  // ── SOCIAL / PERFORMANCE ──────────────────────────────────
  "Improv Comedy": {
    emoji: "🎭", category: "Social",
    tags: ["social", "creative", "high-energy", "performance", "quick"],
    description: "Make up scenes and characters on the spot with strangers who become friends.",
    cost: { entry: "$20–50 (beginner class drop-in)", mid: "$150–300 (full course)", advanced: "$300+ (ongoing classes, shows)" },
    timePerWeek: "2–3 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/improv", "ImprovResourceCenter.com"], localGroups: ["Local improv theaters", "Meetup: improv comedy"], sites: ["improvresourcecenter.com", "ucbtheatre.com"] },
    video: { searchQuery: "improv comedy for beginners rules", url: "https://www.youtube.com/results?search_query=improv+comedy+for+beginners+rules", title: "Improv Comedy for Beginners — The Rules & How to Play" },
    tutorials: [{ label: "The Rules of Improv — Yes And", url: "https://www.improvresourcecenter.com/yes-and" }, { label: "Find an Improv Class Near You", url: "https://www.eventbrite.com/d/online/improv-class/" }, { label: "Improv Games to Play at Home", url: "https://www.dramanotebook.com/drama-games/improv-games/" }],    storeQuery: "comedy club theater",
    classQuery: "improv comedy class",

  },
  "Stand-Up Comedy": {
    emoji: "🎤", category: "Social",
    tags: ["performance", "social", "creative", "high-energy", "challenge"],
    description: "Write jokes and perform them in front of real people. Terrifying, then addictive.",
    cost: { entry: "$0 (open mics are usually free)", mid: "$50–150 (comedy classes)", advanced: "$200+ (recordings, travel for sets)" },
    timePerWeek: "3–6 hrs", difficulty: "Moderate",
    resources: { forums: ["r/StandUpComedy", "r/OpenMic"], localGroups: ["Local comedy clubs with open mics", "Eventbrite: comedy workshops"], sites: ["comedycouch.com", "backstage.com"] },
    video: { searchQuery: "how to write your first stand up comedy set", url: "https://www.youtube.com/results?search_query=how+to+write+your+first+stand+up+comedy+set", title: "How to Write Your First Stand-Up Comedy Set" },
    tutorials: [{ label: "How to Write a Joke — Punch Line Structure", url: "https://www.comedycouch.com/blog/how-to-write-a-joke" }, { label: "Finding Open Mics Near You", url: "https://www.openmicfinder.com/" }, { label: "Stand-Up Comedy for Beginners", url: "https://www.backstage.com/magazine/article/stand-up-comedy-tips-beginners-65985/" }],    storeQuery: "comedy club",
    classQuery: "comedy open mic",

  },

  "Swing Dancing": {
    emoji: "💃", category: "Social",
    tags: ["social", "physical", "high-energy", "community", "music"],
    description: "Partner dancing rooted in jazz. You don't need a date — just show up to a social dance.",
    cost: { entry: "$10–20 (drop-in class)", mid: "$80–200 (beginner course)", advanced: "$300+ (workshops, events, shoes)" },
    timePerWeek: "2–4 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/swing", "SwingTalk Forum"], localGroups: ["Local swing dance societies", "Lindy Hop Everywhere event map"], sites: ["swingplanit.com", "yehoodi.com"] },
    video: { searchQuery: "swing dancing for beginners basic steps", url: "https://www.youtube.com/results?search_query=swing+dancing+for+beginners+basic+steps", title: "Swing Dancing for Beginners — Basic Steps in 10 Minutes" },
    tutorials: [{ label: "Find Swing Dance Events Near You", url: "https://www.swingplanit.com/" }, { label: "Lindy Hop vs East Coast Swing", url: "https://yehoodi.com/guide/lindy-hop-vs-east-coast-swing/" }, { label: "Free Online Swing Lessons", url: "https://www.swingdancer.com/lessons/" }],    storeQuery: "dance studio",
    classQuery: "swing dance class",

  },
  "Amateur Radio": {
    emoji: "📻", category: "Social",
    tags: ["technical", "social", "educational", "community", "mental"],
    description: "Get licensed and communicate across cities, countries, or continents using radio waves.",
    cost: { entry: "$15–35 (license exam)", mid: "$100–300 (handheld radio + antenna)", advanced: "$500+ (base station setup)" },
    timePerWeek: "2–5 hrs", difficulty: "Moderate",
    resources: { forums: ["r/amateurradio", "QRZ Forums"], localGroups: ["ARRL club finder", "Local ham radio clubs"], sites: ["arrl.org", "qrz.com"] },
    video: { searchQuery: "ham radio for beginners getting licensed", url: "https://www.youtube.com/results?search_query=ham+radio+for+beginners+getting+licensed", title: "Ham Radio for Beginners — Getting Your First License" },
    tutorials: [{ label: "How to Get Your Ham License", url: "https://www.arrl.org/getting-licensed" }, { label: "Free License Practice Tests", url: "https://hamstudy.org/" }, { label: "Best Beginner Handheld Radios", url: "https://www.qrz.com/db/resources/handheld-radios" }],    storeQuery: "ham radio store electronics supplier",
    classQuery: "ham radio club amateur radio license class",

  },

  // ── CRAFT / MAKING ────────────────────────────────────────
  "Electronics / Arduino": {
    emoji: "⚡", category: "Craft",
    tags: ["technical", "creative", "home", "mental", "hands-on"],
    description: "Build gadgets, sensors, and automation projects with cheap microcontrollers. Endlessly deep rabbit hole.",
    cost: { entry: "$15–40 (Arduino starter kit)", mid: "$100–200 (components + tools)", advanced: "$300+ (3D printer, oscilloscope)" },
    timePerWeek: "3–6 hrs", difficulty: "Moderate",
    resources: { forums: ["r/arduino", "Arduino Forum"], localGroups: ["Local hackerspaces", "Maker Faire events"], sites: ["arduino.cc", "instructables.com"] },
    video: { searchQuery: "arduino for beginners starter course", url: "https://www.youtube.com/results?search_query=arduino+for+beginners+starter+course", title: "Arduino for Beginners — Complete Starter Course" },
    tutorials: [{ label: "Official Arduino Getting Started Guide", url: "https://www.arduino.cc/en/Guide" }, { label: "Free Arduino Projects — Instructables", url: "https://www.instructables.com/circuits/arduino/projects/" }, { label: "Find a Local Hackerspace", url: "https://www.hackerspaces.org/" }],    storeQuery: "Micro Center electronics store",
    classQuery: "electronics workshop makerspace",

  },
  "3D Printing": {
    emoji: "🖨️", category: "Craft",
    tags: ["technical", "creative", "home", "hands-on", "patient"],
    description: "Design and print physical objects. Toys, tools, art — if you can model it, you can make it.",
    cost: { entry: "$200–300 (entry-level printer)", mid: "$400–700 (quality printer + filament)", advanced: "$1000+ (resin printer, multi-material)" },
    timePerWeek: "3–8 hrs", difficulty: "Moderate",
    resources: { forums: ["r/3Dprinting", "Printables community"], localGroups: ["Local makerspaces", "Library 3D printing labs"], sites: ["printables.com", "thingiverse.com"] },
    video: { searchQuery: "3D printing for beginners", url: "https://www.youtube.com/results?search_query=3D+printing+for+beginners", title: "3D Printing for Beginners — Everything You Need to Know" },
    tutorials: [{ label: "Best Beginner 3D Printers", url: "https://www.reddit.com/r/3Dprinting/wiki/printer_guide" }, { label: "Free Models to Print — Printables", url: "https://www.printables.com/" }, { label: "Beginner Slicer Guide — Cura", url: "https://ultimaker.com/software/ultimaker-cura/" }],    storeQuery: "makerspace FabLab library 3D printer",
    classQuery: "3D printing class makerspace",

  },
  "Knitting / Crochet": {
    emoji: "🧶", category: "Craft",
    tags: ["meditative", "home", "patient", "tactile", "solo"],
    description: "Make clothes, blankets, and accessories with yarn and needles. Deeply meditative once you get going.",
    cost: { entry: "$20–40 (yarn + beginner needles)", mid: "$80–200 (quality yarn + tools)", advanced: "$300+ (spinning wheel, premium fibers)" },
    timePerWeek: "2–6 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/knitting", "r/crochet", "Ravelry.com"], localGroups: ["Local yarn shops' stitch circles", "Library knitting groups"], sites: ["ravelry.com", "yarnsub.com"] },
    video: { searchQuery: "knitting for absolute beginners cast on", url: "https://www.youtube.com/results?search_query=knitting+for+absolute+beginners+cast+on", title: "Knitting for Absolute Beginners — Cast On, Knit, Purl" },
    tutorials: [{ label: "Free Beginner Patterns — Ravelry", url: "https://www.ravelry.com/patterns/search#craft=knitting&difficulty=1-1&sort=best" }, { label: "Knitting vs Crochet — Which to Learn First?", url: "https://www.yarnsub.com/articles/knitting-vs-crochet" }, { label: "Learn to Crochet — Step by Step", url: "https://www.thecrochetcrowd.com/crochet-101/" }],    storeQuery: "JOANN Fabric yarn store",
    classQuery: "knitting crochet class yarn store",

  },
  "Bookbinding": {
    emoji: "📚", category: "Craft",
    tags: ["hands-on", "patient", "solo", "tactile", "creative"],
    description: "Sew, fold, and bind your own books and journals by hand. Old craft, deeply satisfying.",
    cost: { entry: "$30–60 (basic tools + paper)", mid: "$100–200 (quality tools + leather covers)", advanced: "$300+ (specialty papers, presses)" },
    timePerWeek: "2–4 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/bookbinding", "Bookbinding.com Forum"], localGroups: ["Local art center workshops", "Book arts guilds"], sites: ["bookbinding.com", "paperandbook.com"] },
    video: { searchQuery: "bookbinding for beginners make a journal", url: "https://www.youtube.com/results?search_query=bookbinding+for+beginners+make+a+journal", title: "Bookbinding for Beginners — Make Your First Journal" },
    tutorials: [{ label: "Beginner Bookbinding Projects", url: "https://www.instructables.com/Beginner-Bookbinding/" }, { label: "Essential Tools List", url: "https://bookbinding.com/pages/getting-started" }, { label: "Coptic Stitch Tutorial", url: "https://www.paperandbook.com/coptic-stitch-bookbinding-tutorial/" }],    storeQuery: "art supply store Blick Art Materials",
    classQuery: "bookbinding class art workshop",

  },
  "Embroidery": {
    emoji: "🪡", category: "Craft",
    tags: ["meditative", "creative", "home", "patient", "tactile"],
    description: "Stitch patterns and images onto fabric. Low cost, portable, and highly satisfying.",
    cost: { entry: "$15–30 (starter kit)", mid: "$60–120 (quality thread + hoops + fabric)", advanced: "$200+ (embroidery machine)" },
    timePerWeek: "2–5 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/Embroidery", "r/CrossStitch"], localGroups: ["Local fiber arts guilds", "Craft store workshops"], sites: ["sublimestitching.com", "embroidery.rockyourcraft.com"] },
    video: { searchQuery: "embroidery for beginners basic stitches", url: "https://www.youtube.com/results?search_query=embroidery+for+beginners+basic+stitches", title: "Embroidery for Beginners — Basic Stitches Step by Step" },
    tutorials: [{ label: "7 Basic Stitches to Learn First", url: "https://sublimestitching.com/pages/how-to-embroider" }, { label: "Free Beginner Patterns", url: "https://sublimestitching.com/collections/patterns" }, { label: "How to Transfer Patterns", url: "https://www.thesprucecrafts.com/transfer-embroidery-designs-1177872" }],    storeQuery: "JOANN Fabric craft store",
    classQuery: "embroidery sewing class workshop",

  },

  // ── MUSIC ─────────────────────────────────────────────────
  "DJing": {
    emoji: "🎧", category: "Music",
    tags: ["music", "creative", "social", "technical", "high-energy"],
    description: "Mix and blend music. You don't need a crowd to start — just headphones and a controller.",
    cost: { entry: "$0 (free software like Mixxx)", mid: "$200–500 (controller)", advanced: "$1000+ (full setup, Serato/Rekordbox)" },
    timePerWeek: "3–6 hrs", difficulty: "Moderate",
    resources: { forums: ["r/DJs", "DJTT Forum"], localGroups: ["Local DJ schools", "Mixcloud community"], sites: ["digitaldjtips.com", "djtechtools.com"] },
    video: { searchQuery: "DJing for beginners how to mix", url: "https://www.youtube.com/results?search_query=DJing+for+beginners+how+to+mix", title: "DJing for Beginners — How to Mix Your First Track" },
    tutorials: [{ label: "Free DJ Software — Mixxx", url: "https://mixxx.org/" }, { label: "DJ Beginner's Guide", url: "https://www.digitaldjtips.com/how-to-dj/" }, { label: "Choosing Your First Controller", url: "https://www.djtechtools.com/2020/01/07/the-best-dj-controllers-for-beginners/" }],    storeQuery: "Guitar Center music instrument store",
    classQuery: "DJ class music production school",

  },
  "Guitar": {
    emoji: "🎸", category: "Music",
    tags: ["music", "solo", "creative", "meditative", "social"],
    description: "Acoustic or electric. One of the most satisfying instruments to learn at any pace.",
    cost: { entry: "$100–200 (beginner acoustic + picks)", mid: "$300–700 (quality guitar + amp)", advanced: "$1000+ (multiple guitars, effects pedals)" },
    timePerWeek: "3–7 hrs", difficulty: "Moderate",
    resources: { forums: ["r/Guitar", "r/guitarlessons"], localGroups: ["Local music stores' open jams", "Guitar Center workshops"], sites: ["justinguitar.com", "ultimate-guitar.com"] },
    video: { searchQuery: "guitar for beginners first lesson", url: "https://www.youtube.com/results?search_query=guitar+for+beginners+first+lesson", title: "Guitar for Beginners — Your First Lesson" },
    tutorials: [{ label: "Free Lessons — JustinGuitar", url: "https://www.justinguitar.com/" }, { label: "Chord Library & Tabs", url: "https://www.ultimate-guitar.com/" }, { label: "Choosing Your First Guitar", url: "https://www.guitarworld.com/guitars/acoustic-guitars/acoustic-guitar-buyers-guide" }],    storeQuery: "guitar store",
    classQuery: "guitar lessons",

  },
  "Music Production": {
    emoji: "🎛️", category: "Music",
    tags: ["music", "technical", "creative", "solo", "home"],
    description: "Make beats, songs, and soundscapes on your laptop. The studio is now in your bedroom.",
    cost: { entry: "$0 (GarageBand on Mac, LMMS free)", mid: "$200–500 (DAW + MIDI keyboard)", advanced: "$1000+ (audio interface, monitors, plugins)" },
    timePerWeek: "4–8 hrs", difficulty: "Moderate",
    resources: { forums: ["r/WeAreTheMusicMakers", "r/edmproduction"], localGroups: ["Local music production meetups", "Online Discord music communities"], sites: ["landr.com", "attackmagazine.com"] },
    video: { searchQuery: "music production for beginners making a beat", url: "https://www.youtube.com/results?search_query=music+production+for+beginners+making+a+beat", title: "Music Production for Beginners — Making Your First Beat" },
    tutorials: [{ label: "Free DAW — LMMS", url: "https://lmms.io/" }, { label: "Beginner Beat Making Guide", url: "https://www.landr.com/how-to-make-a-beat/" }, { label: "Music Theory for Producers", url: "https://www.musictheory.net/" }],    storeQuery: "Guitar Center music instrument store",
    classQuery: "music production class recording studio",

  },
  "Singing / Vocal Training": {
    emoji: "🎵", category: "Music",
    tags: ["music", "performance", "social", "creative", "discipline"],
    description: "Train your voice. Whether for a choir, karaoke, or recording — your voice is an instrument.",
    cost: { entry: "$0 (YouTube tutorials)", mid: "$50–100/mo (vocal coach)", advanced: "$200+/mo (regular coaching + recording sessions)" },
    timePerWeek: "3–6 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/singing", "The Voice Council Forum"], localGroups: ["Local choir groups", "Community theater auditions"], sites: ["singwise.com", "30daysinger.com"] },
    video: { searchQuery: "vocal training for beginners warm up technique", url: "https://www.youtube.com/results?search_query=vocal+training+for+beginners+warm+up+technique", title: "Vocal Training for Beginners — Warm-Ups & Technique" },
    tutorials: [{ label: "30 Day Singer Free Trial", url: "https://www.30daysinger.com/" }, { label: "Daily Vocal Warm-Up Exercises", url: "https://www.singwise.com/articles/warm-up-exercises" }, { label: "Find a Local Choir", url: "https://www.choralfind.com/" }],    storeQuery: "music school vocal studio",
    classQuery: "singing lesson vocal coach near me",

  },

  // ── MIND / STRATEGY ───────────────────────────────────────
  "Chess": {
    emoji: "♟️", category: "Mind",
    tags: ["mental", "solo", "social", "competitive", "discipline"],
    description: "The deepest strategy game ever made. Free to play online, endlessly deep to study.",
    cost: { entry: "$0 (Chess.com free tier)", mid: "$20–60 (physical set + books)", advanced: "$100+ (coaching, tournaments)" },
    timePerWeek: "3–8 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/chess", "Chess.com forums"], localGroups: ["Local chess clubs", "Library chess groups"], sites: ["chess.com", "lichess.org"] },
    video: { searchQuery: "chess for beginners how pieces move", url: "https://www.youtube.com/results?search_query=chess+for+beginners+how+pieces+move", title: "Chess for Beginners — Learn How Every Piece Moves" },
    tutorials: [{ label: "Play for Free — Lichess", url: "https://lichess.org/" }, { label: "Interactive Lessons — Chess.com", url: "https://www.chess.com/learn-how-to-play-chess" }, { label: "Opening Principles for Beginners", url: "https://www.chess.com/article/view/chess-openings-for-beginners" }],    storeQuery: "board game store",
    classQuery: "chess club",

  },
  "Language Learning": {
    emoji: "🗣️", category: "Mind",
    tags: ["educational", "mental", "solo", "social", "discipline"],
    description: "Learn Spanish, Japanese, Arabic — any language. Opens up entire cultures and communities.",
    cost: { entry: "$0 (Duolingo, YouTube)", mid: "$50–150 (apps + textbooks)", advanced: "$200+ (tutor, immersion courses)" },
    timePerWeek: "3–7 hrs", difficulty: "Moderate",
    resources: { forums: ["r/languagelearning", "WordReference Forums"], localGroups: ["Language exchange Meetups", "Local cultural centers"], sites: ["italki.com", "ankiweb.net"] },
    video: { searchQuery: "how to learn any language fastest method", url: "https://www.youtube.com/results?search_query=how+to+learn+any+language+fastest+method", title: "How to Learn Any Language — The Best Method Explained" },
    tutorials: [{ label: "Free App — Duolingo", url: "https://www.duolingo.com/" }, { label: "Find a Language Tutor — iTalki", url: "https://www.italki.com/" }, { label: "Spaced Repetition Flashcards — Anki", url: "https://apps.ankiweb.net/" }],    storeQuery: "language school language learning center",
    classQuery: "language class school near me",

  },
  "Journaling": {
    emoji: "📓", category: "Mind",
    tags: ["solo", "meditative", "writing", "mental", "home"],
    description: "Write for yourself. Process your life, track your thinking, or just vent. No audience needed.",
    cost: { entry: "$10–20 (notebook + pen)", mid: "$30–60 (quality journal + fountain pen)", advanced: "$100+ (writing retreats)" },
    timePerWeek: "1–4 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/Journaling", "r/bulletjournal"], localGroups: ["Writing groups on Meetup", "Local library writing circles"], sites: ["bulletjournal.com", "thejournalsmag.com"] },
    video: { searchQuery: "how to start journaling beginners guide", url: "https://www.youtube.com/results?search_query=how+to+start+journaling+beginners+guide", title: "How to Start Journaling — A Beginner's Guide" },
    tutorials: [{ label: "Bullet Journal System Explained", url: "https://bulletjournal.com/blogs/faq" }, { label: "30 Journal Prompts for Adults", url: "https://www.thejournalsmag.com/articles/journal-prompts-for-adults" }, { label: "Morning Pages — The Artist's Way", url: "https://juliacameronlive.com/basic-tools/morning-pages/" }],    storeQuery: "Paper Source stationery store",
    classQuery: "writing workshop journaling class",

  },
  "Astronomy / Astrophotography": {
    emoji: "🌌", category: "Mind",
    tags: ["outdoor", "technical", "solo", "patient", "educational"],
    description: "Photograph galaxies, nebulae, and planets. The intersection of science and pure art.",
    cost: { entry: "$100–300 (entry telescope)", mid: "$500–1500 (tracking mount + camera)", advanced: "$2000+ (dedicated astrocam + filters)" },
    timePerWeek: "2–5 hrs", difficulty: "Moderate",
    resources: { forums: ["r/astrophotography", "Cloudy Nights Forum"], localGroups: ["Local astronomy clubs", "Dark sky preserve meetups"], sites: ["astrobackyard.com", "cloudynights.com"] },
    video: { searchQuery: "astrophotography for beginners night sky", url: "https://www.youtube.com/results?search_query=astrophotography+for+beginners+night+sky", title: "Astrophotography for Beginners — Shoot the Night Sky" },
    tutorials: [{ label: "Beginner Astrophotography Guide", url: "https://www.astrobackyard.com/astrophotography-for-beginners/" }, { label: "Choosing Your First Telescope", url: "https://skyandtelescope.org/astronomy-equipment/telescopes/how-to-choose-a-telescope/" }, { label: "Free Planetarium — Stellarium", url: "https://stellarium.org/" }],    storeQuery: "telescope store astronomy equipment",
    classQuery: "astronomy club astrophotography workshop",

  },
  "Puzzle Design": {
    emoji: "🧩", category: "Mind",
    tags: ["mental", "creative", "solo", "patient", "technical"],
    description: "Design escape room puzzles, crosswords, or logic puzzles. The nerdiest creative hobby there is.",
    cost: { entry: "$0–20 (pen and paper)", mid: "$50–100 (design software, materials)", advanced: "$200+ (physical puzzle production)" },
    timePerWeek: "2–5 hrs", difficulty: "Moderate",
    resources: { forums: ["r/PuzzleDesign", "r/EscapeRoomDesign"], localGroups: ["Local escape room communities", "Puzzle design Discord servers"], sites: ["puzzledesigners.net", "nikoli.com"] },
    video: { searchQuery: "how to design puzzles escape room", url: "https://www.youtube.com/results?search_query=how+to+design+puzzles+escape+room", title: "How to Design Puzzles — Principles & Techniques" },
    tutorials: [{ label: "Escape Room Puzzle Design 101", url: "https://www.reddit.com/r/EscapeRoomDesign/wiki/index" }, { label: "Free Crossword Constructor", url: "https://www.crosswordcompiler.com/" }, { label: "Puzzle Design Discord Community", url: "https://discord.gg/puzzles" }],    storeQuery: "escape room",
    classQuery: "puzzle design workshop",

  },

  // ── GAMING ────────────────────────────────────────────────
  "Dungeons & Dragons": {
    emoji: "🐉", category: "Gaming",
    tags: ["social", "creative", "storytelling", "small-group", "mental"],
    description: "D&D and tabletop RPGs — one person builds the world, everyone else lives in it. The deepest form of collaborative storytelling there is. D&D is the entry point but systems like Pathfinder, Call of Cthulhu, and Mothership take it in wildly different directions.",
    cost: { entry: "$0 (join a free game on Roll20 or D&D Beyond)", mid: "$60–150 (Player's Handbook + Dungeon Master's Guide)", advanced: "$300+ (full set of books, dice, terrain, minis)" },
    timePerWeek: "3–6 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/DnD", "r/rpg", "r/DMAcademy"], localGroups: ["Local game stores' public game boards", "D&D Beyond group finder", "Meetup: tabletop RPGs near you"], sites: ["dndbeyond.com", "roll20.net", "reddit.com/r/rpg/wiki/gettingstarted"] },
    video: { searchQuery: "how to play DnD dungeons and dragons beginners", url: "https://www.youtube.com/results?search_query=how+to+play+DnD+dungeons+and+dragons+beginners", title: "How to Play D&D — A Beginner's Guide to Dungeons & Dragons" },
    tutorials: [{ label: "Free Rules — D&D Beyond", url: "https://www.dndbeyond.com/sources/dnd/free-rules" }, { label: "Find a Game Online — Roll20", url: "https://roll20.net/welcome" }, { label: "Which RPG Should You Play First?", url: "https://www.reddit.com/r/rpg/wiki/gettingstarted" }],    storeQuery: "game store",
    classQuery: "tabletop RPG game night",

  },
  "Warhammer 40K": {
    emoji: "⚔️", category: "Gaming",
    tags: ["creative", "painting", "strategy", "social", "patient"],
    description: "Build, paint, and battle with sci-fi miniature armies. Half hobby, half strategy game, fully obsessive.",
    cost: { entry: "$50–100 (starter set)", mid: "$200–500 (army + paints + tools)", advanced: "$500–1500+ (multiple armies, airbrush, display cases)" },
    timePerWeek: "4–10 hrs", difficulty: "Moderate",
    resources: { forums: ["r/Warhammer40k", "r/WarhammerCompetitive", "Bolter & Chainsword"], localGroups: ["Local Games Workshop stores", "Warhammer Community event finder", "FLGS (friendly local game store) boards"], sites: ["warhammer-community.com", "goonhammer.com", "wahapedia.ru"] },
    video: { searchQuery: "warhammer 40K for beginners where to start", url: "https://www.youtube.com/results?search_query=warhammer+40K+for+beginners+where+to+start", title: "Warhammer 40K for Beginners — Where to Start" },
    tutorials: [{ label: "Which Army to Choose", url: "https://www.goonhammer.com/getting-started-with-warhammer-40000/" }, { label: "Free Rules — Wahapedia", url: "https://wahapedia.ru/" }, { label: "Painting Your First Miniatures", url: "https://www.warhammer-community.com/en-gb/articles/painting-for-beginners/" }],    storeQuery: "Games Workshop",
    classQuery: "warhammer painting class",

  },
  "Trading Card Games": {
    emoji: "🃏", category: "Gaming",
    tags: ["competitive", "collecting", "mental", "social", "strategy"],
    description: "Magic: The Gathering, Pokémon TCG, Yu-Gi-Oh — collect, build decks, and battle. Casual to hyper-competitive.",
    cost: { entry: "$15–30 (preconstructed starter deck)", mid: "$100–300 (competitive deck)", advanced: "$500+ (tournament play, rare card collecting)" },
    timePerWeek: "2–6 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/magicTCG", "r/pkmntcg", "r/yugioh", "MTGGoldfish community"], localGroups: ["Local game stores' Friday Night Magic", "TCGPlayer local event finder", "Pokémon Player Club locator"], sites: ["tcgplayer.com", "mtggoldfish.com", "limitlesstcg.com"] },
    video: { searchQuery: "magic the gathering for beginners how to play", url: "https://www.youtube.com/results?search_query=magic+the+gathering+for+beginners+how+to+play", title: "Magic: The Gathering for Beginners — Learn to Play in 15 Minutes" },
    tutorials: [{ label: "Learn MTG — Official Tutorial", url: "https://magic.wizards.com/en/intro" }, { label: "Budget Deck Building Guide", url: "https://www.mtggoldfish.com/articles/budget-magic" }, { label: "Find Local Events — TCGPlayer", url: "https://www.tcgplayer.com/local-game-store" }],    storeQuery: "trading card game store hobby shop",
    classQuery: "Magic the Gathering game store tournament",

  },
  "Board Games": {
    emoji: "🎯", category: "Gaming",
    tags: ["social", "strategy", "small-group", "home", "competitive"],
    description: "Modern board games are nothing like Monopoly. Settlers, Wingspan, Gloomhaven — there's a game for every brain.",
    cost: { entry: "$20–50 (a great starter game)", mid: "$100–300 (solid collection)", advanced: "$500+ (collector level, expansions, campaign games)" },
    timePerWeek: "2–5 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/boardgames", "r/boardgamerecommendations", "BGG community"], localGroups: ["Local game cafes", "Meetup: board game nights", "BoardGameGeek guild finder"], sites: ["boardgamegeek.com", "boardgamearena.com", "dicetower.com"] },
    video: { searchQuery: "best board games for beginners", url: "https://www.youtube.com/results?search_query=best+board+games+for+beginners", title: "Top 10 Board Games for Beginners — Where to Start" },
    tutorials: [{ label: "Board Game Recommendations — BGG", url: "https://boardgamegeek.com/browse/boardgame" }, { label: "Play Online Free — Board Game Arena", url: "https://boardgamearena.com/" }, { label: "Find Game Nights Near You", url: "https://www.meetup.com/topics/board-games/" }],    storeQuery: "board game cafe",
    classQuery: "board game night",

  },
  "Video Gaming": {
    emoji: "🎮", category: "Gaming",
    tags: ["solo", "social", "home", "competitive", "creative"],
    description: "From single-player story games to competitive multiplayer — gaming is one of the most flexible hobbies there is.",
    cost: { entry: "$0 (free-to-play games, Game Pass, PS Plus)", mid: "$300–500 (console or PC upgrade)", advanced: "$1000+ (high-end PC gaming setup)" },
    timePerWeek: "3–10 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/gaming", "r/patientgamers", "r/SteamDeals"], localGroups: ["Local gaming cafes", "LAN party events near you", "Discord gaming communities"], sites: ["store.steampowered.com", "ign.com", "howlongtobeat.com"] },
    video: { searchQuery: "getting into video games as an adult where to start", url: "https://www.youtube.com/results?search_query=getting+into+video+games+as+an+adult+where+to+start", title: "Getting Into Video Games as an Adult — Where to Start" },
    tutorials: [{ label: "Best Games for New Players — IGN", url: "https://www.ign.com/articles/best-games-for-beginners" }, { label: "How Long Are Games? — HowLongToBeat", url: "https://howlongtobeat.com/" }, { label: "Free Games on Steam", url: "https://store.steampowered.com/genre/Free%20to%20Play/" }],    storeQuery: "video game store",
    classQuery: "gaming cafe LAN party",

  },
  "Miniature Painting": {
    emoji: "🖌️", category: "Gaming",
    tags: ["creative", "meditative", "solo", "patient", "tactile"],
    description: "Paint tiny detailed figures — game pieces, collectors, or standalone art. Incredibly meditative once you're in the zone.",
    cost: { entry: "$30–60 (starter paints + a few minis)", mid: "$100–250 (quality paints, brushes, lighting)", advanced: "$400+ (airbrush, wet palette, display cabinet)" },
    timePerWeek: "2–6 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/minipainting", "r/ageofsigmar", "Coolminiornot community"], localGroups: ["Local game stores' painting nights", "Warhammer store free painting sessions"], sites: ["coolminiornot.com", "paintingbig.com", "miniacademy.com"] },
    video: { searchQuery: "miniature painting for beginners first mini", url: "https://www.youtube.com/results?search_query=miniature+painting+for+beginners+first+mini", title: "Miniature Painting for Beginners — Your First Mini" },
    tutorials: [{ label: "Beginner Painting Guide", url: "https://www.warhammer-community.com/en-gb/articles/painting-for-beginners/" }, { label: "Essential Starter Brushes & Paints", url: "https://www.reddit.com/r/minipainting/wiki/starterpaint" }, { label: "Drybrushing & Washing Explained", url: "https://www.coolminiornot.com/articles/beginner-techniques" }],    storeQuery: "Games Workshop hobby store",
    classQuery: "miniature painting class hobby store",

  },
  "Retro Gaming / Collecting": {
    emoji: "👾", category: "Gaming",
    tags: ["collecting", "solo", "home", "nostalgic", "technical"],
    description: "Hunt for and play classic games and consoles. Part gaming, part treasure hunting, part history lesson.",
    cost: { entry: "$20–60 (a retro game or two)", mid: "$200–500 (console + game collection)", advanced: "$1000+ (rare finds, CRT setup, dedicated retro room)" },
    timePerWeek: "2–6 hrs", difficulty: "Beginner friendly",
    resources: { forums: ["r/retrogaming", "r/gamecollecting", "AtariAge forums"], localGroups: ["Local retro gaming conventions", "Thrift store and flea market hunting groups"], sites: ["pricecharting.com", "consolevariations.com", "racketboy.com"] },
    video: { searchQuery: "retro game collecting beginners guide", url: "https://www.youtube.com/results?search_query=retro+game+collecting+beginners+guide", title: "How to Start a Retro Game Collection — Beginner's Guide" },
    tutorials: [{ label: "Track Game Values — PriceCharting", url: "https://www.pricecharting.com/" }, { label: "Best Retro Consoles to Start With", url: "https://www.racketboy.com/guide/best-retro-consoles-for-beginners" }, { label: "Where to Buy Retro Games", url: "https://www.reddit.com/r/gamecollecting/wiki/index" }],    storeQuery: "video game store",
    classQuery: "retro gaming convention",

  },
  "Game Development": {
    emoji: "💻", category: "Gaming",
    tags: ["creative", "technical", "solo", "home", "mental"],
    description: "Build your own video games using Unity, Godot, or Game Maker. Combines code, art, and design in one obsessive package.",
    cost: { entry: "$0 (Godot is free, Unity free tier)", mid: "$50–200 (assets, courses, tools)", advanced: "$500+ (professional software, hardware, game jam travel)" },
    timePerWeek: "4–10 hrs", difficulty: "Moderate",
    resources: { forums: ["r/gamedev", "r/godot", "r/Unity3D", "itch.io community"], localGroups: ["Local game dev meetups", "Global Game Jam local sites", "Discord: game dev servers"], sites: ["itch.io", "godotengine.org", "gamedeveloper.com"] },
    video: { searchQuery: "game development for beginners make your first game godot", url: "https://www.youtube.com/results?search_query=game+development+for+beginners+make+your+first+game+godot", title: "Game Development for Beginners — Make Your First Game in Godot" },
    tutorials: [{ label: "Free Game Engine — Godot", url: "https://godotengine.org/" }, { label: "Publish Your Game — itch.io", url: "https://itch.io/" }, { label: "Join a Game Jam — Global Game Jam", url: "https://globalgamejam.org/" }],    storeQuery: "computer store electronics Best Buy",
    classQuery: "coding bootcamp game development class",

  },
  "Tabletop Wargaming": {
    emoji: "🏰", category: "Gaming",
    tags: ["strategy", "social", "competitive", "historical", "patient"],
    description: "Historical or fantasy miniature battles on tabletop terrain. Deep strategy with a satisfying physical presence.",
    cost: { entry: "$40–80 (starter army box)", mid: "$150–400 (full army + terrain)", advanced: "$600+ (multiple factions, custom terrain builds)" },
    timePerWeek: "3–6 hrs", difficulty: "Moderate",
    resources: { forums: ["r/wargaming", "r/HistoricalWargaming", "TMP (The Miniatures Page)"], localGroups: ["FLGS wargaming clubs", "Wargames conventions near you", "Meetup: wargaming groups"], sites: ["theminiaturespage.com", "beasts-of-war.com", "onTableTop.com"] },
    video: { searchQuery: "tabletop wargaming for beginners how to start", url: "https://www.youtube.com/results?search_query=tabletop+wargaming+for+beginners+how+to+start", title: "Tabletop Wargaming for Beginners — How to Get Started" },
    tutorials: [{ label: "Which Wargame to Start With", url: "https://www.theminiaturespage.com/boards/msg.mv?id=getting-started" }, { label: "Build Terrain on a Budget", url: "https://www.beasts-of-war.com/terrain-building-for-beginners/" }, { label: "Find Opponents Near You", url: "https://www.meetup.com/topics/miniature-wargaming/" }],    storeQuery: "Games Workshop hobby store",
    classQuery: "wargaming club miniature store",

  },
  "Escape Rooms": {
    emoji: "🔐", category: "Gaming",
    tags: ["social", "mental", "small-group", "high-energy", "puzzle"],
    description: "Solve puzzles under pressure with a team. Great gateway into puzzle design, logic, and group problem-solving.",
    cost: { entry: "$25–35 per person (commercial room)", mid: "$100–200 (regular outings)", advanced: "$300+ (premium immersive rooms, travel for top venues)" },
    timePerWeek: "1–2 hrs (event-based)", difficulty: "Beginner friendly",
    resources: { forums: ["r/escaperooms", "Room Escape Artist community"], localGroups: ["Local escape room venues", "Meetup: escape room groups"], sites: ["escaperoomgeeks.com", "roomescapeartist.com", "escapetalk.net"] },
    video: { searchQuery: "how to solve escape rooms tips strategies", url: "https://www.youtube.com/results?search_query=how+to+solve+escape+rooms+tips+strategies", title: "How to Solve Escape Rooms — Tips & Strategies" },
    tutorials: [{ label: "Find Rooms Near You — Escape Room Geeks", url: "https://www.escaperoomgeeks.com/" }, { label: "Best Escape Room Strategies", url: "https://roomescapeartist.com/2016/02/10/escape-room-tips/" }, { label: "Play Online Escape Rooms Free", url: "https://www.escapetalk.net/online-escape-rooms/" }],    storeQuery: "escape room",
    classQuery: "escape room",

  },
};

// ── QUIZ QUESTIONS ────────────────────────────────────────────────────────────

const QUIZ_QUESTIONS = [
  {
    id: "energy",
    question: "After a brutal work week, what actually sounds good?",
    options: [
      { label: "Moving my body hard — sweat it out", value: "physical", icon: "⚡" },
      { label: "Making something with my hands", value: "creative", icon: "🖐️" },
      { label: "Being around interesting people", value: "social", icon: "👥" },
      { label: "Completely alone in nature", value: "outdoor", icon: "🌲" },
    ],
  },
  {
    id: "time",
    question: "How much time can you realistically give a hobby per week?",
    options: [
      { label: "1–2 hours max", value: "low", icon: "⏱️" },
      { label: "3–4 hours if I care about it", value: "medium", icon: "🕐" },
      { label: "5–8 hours, no problem", value: "high", icon: "📅" },
      { label: "I go obsessive — all in", value: "obsessive", icon: "🔥" },
    ],
  },
  {
    id: "style",
    question: "What's your relationship with patience?",
    options: [
      { label: "I want to see results fast", value: "quick", icon: "⚡" },
      { label: "I enjoy slow, deliberate processes", value: "slow", icon: "🐢" },
      { label: "Depends on how invested I am", value: "flexible", icon: "🤷" },
      { label: "The process IS the whole point", value: "process", icon: "🔄" },
    ],
  },
  {
    id: "setting",
    question: "Where do you feel most alive?",
    options: [
      { label: "Outside — fresh air, open space", value: "outdoor", icon: "🌿" },
      { label: "In a studio, workshop, or creative space", value: "indoor-creative", icon: "🏛️" },
      { label: "In a gym or athletic environment", value: "indoor-active", icon: "🏋️" },
      { label: "At home, fully on my own terms", value: "home", icon: "🏠" },
    ],
  },
  {
    id: "social",
    question: "How do you want your hobby to feel socially?",
    options: [
      { label: "Pure solo — my time, my rules", value: "solo", icon: "🎯" },
      { label: "Small regular crew I trust", value: "small-group", icon: "👫" },
      { label: "Big community, always meeting new people", value: "community", icon: "🎉" },
      { label: "Mix — solo sometimes, social others", value: "flexible", icon: "🔀" },
    ],
  },
  {
    id: "risk",
    question: "How do you feel about physical challenge or risk?",
    options: [
      { label: "I want some edge and adrenaline", value: "adventurous", icon: "🔥" },
      { label: "Prefer low-stakes, low-risk learning", value: "safe", icon: "🛡️" },
      { label: "Bring on the physical challenge", value: "challenge", icon: "💪" },
      { label: "Mental challenge over physical any day", value: "mental", icon: "🧠" },
    ],
  },
  {
    id: "budget",
    question: "What's your realistic starter budget for a new hobby?",
    options: [
      { label: "Under $50 — ideally free", value: "free", icon: "🆓" },
      { label: "$50–150 to get started", value: "low", icon: "💵" },
      { label: "$150–500 if I'm serious", value: "medium", icon: "💰" },
      { label: "I'll spend what it takes", value: "high", icon: "💎" },
    ],
  },
  {
    id: "output",
    question: "Do you want your hobby to produce something?",
    options: [
      { label: "Yes — a physical thing I made", value: "tangible", icon: "🪵" },
      { label: "Yes — a skill or performance", value: "skill", icon: "🎭" },
      { label: "No — the experience itself is enough", value: "experience", icon: "🌅" },
      { label: "No — mental clarity is the whole goal", value: "mental", icon: "🧘" },
    ],
  },
  {
    id: "learning",
    question: "How do you prefer to learn new things?",
    options: [
      { label: "YouTube + figuring it out myself", value: "self-taught", icon: "📺" },
      { label: "Structured classes with an instructor", value: "structured", icon: "🏫" },
      { label: "Learning from a community of peers", value: "community", icon: "👥" },
      { label: "Books, research, theory first", value: "research", icon: "📚" },
    ],
  },
  {
    id: "vibe",
    question: "Pick the word that resonates most with you right now:",
    options: [
      { label: "Freedom", value: "freedom", icon: "🦅" },
      { label: "Mastery", value: "mastery", icon: "🏆" },
      { label: "Connection", value: "connection", icon: "🤝" },
      { label: "Stillness", value: "stillness", icon: "🌊" },
    ],
  },
];

// ── MATCHING ALGORITHM ────────────────────────────────────────────────────────

function matchHobbies(answers) {
  const scores = {};
  Object.keys(HOBBY_DATA).forEach(h => (scores[h] = 0));
  const { energy, time, style, setting, social, risk, budget, output, learning, vibe } = answers;

  const add = (hobbies, pts) => hobbies.forEach(h => { if (scores[h] !== undefined) scores[h] += pts; });

  if (energy === "physical") add(["Rock Climbing","Bouldering","Trail Running","Cold Water Swimming","Cycling","Skateboarding","Martial Arts","Yoga","Mountain Biking","Surfing","Rowing / Kayaking","Archery"], 3);
  if (energy === "creative") add(["Ceramics","Urban Sketching","Film Photography","DJing","Sourdough Baking","Watercolor Painting","Leatherworking","Woodworking","Music Production","Candle Making","Screenwriting","Embroidery","Miniature Painting","Game Development","Warhammer 40K"], 3);
  if (energy === "social") add(["Improv Comedy","Stand-Up Comedy","Homebrewing","DJing","Swing Dancing","Guitar","Singing / Vocal Training","Chess","Dungeons & Dragons","Board Games","Trading Card Games","Escape Rooms","Tabletop Wargaming"], 3);
  if (energy === "outdoor") add(["Foraging","Trail Running","Cold Water Swimming","Urban Sketching","Hiking","Stargazing","Birdwatching","Surfing","Mountain Biking","Rock Pooling","Thrifting"], 3);

  // Gaming-specific energy boost
  add(["Video Gaming","Retro Gaming / Collecting","Game Development","Board Games","Trading Card Games","Dungeons & Dragons","Warhammer 40K","Miniature Painting","Tabletop Wargaming","Escape Rooms"], 1);

  if (time === "low") add(["Journaling","Birdwatching","Stargazing","Rock Pooling","Archery","Cocktail Crafting","Candle Making","Hot Sauce Making","Embroidery","Escape Rooms","Video Gaming"], 2);
  if (time === "high" || time === "obsessive") add(["Woodworking","Music Production","Language Learning","Guitar","3D Printing","Martial Arts","Trail Running","Screenwriting","Electronics / Arduino","Warhammer 40K","Game Development","Dungeons & Dragons","Retro Gaming / Collecting"], 2);

  if (style === "slow" || style === "process") add(["Ceramics","Sourdough Baking","Film Photography","Foraging","Cheesemaking","Knitting / Crochet","Bookbinding","Leatherworking","Woodworking","Language Learning","Astronomy / Astrophotography","Miniature Painting","Warhammer 40K","Tabletop Wargaming"], 2);
  if (style === "quick") add(["Bouldering","Improv Comedy","Cold Water Swimming","Cocktail Crafting","Hot Sauce Making","Swing Dancing","Video Gaming","Trading Card Games","Escape Rooms"], 2);

  if (setting === "outdoor") add(["Trail Running","Foraging","Cold Water Swimming","Urban Sketching","Hiking","Birdwatching","Stargazing","Surfing","Mountain Biking","Rock Pooling","Rowing / Kayaking","Cycling"], 2);
  if (setting === "indoor-creative") add(["Ceramics","Sourdough Baking","DJing","Film Photography","Watercolor Painting","Leatherworking","Music Production","Candle Making","Screenwriting","Embroidery","Bookbinding","Miniature Painting","Game Development"], 2);
  if (setting === "indoor-active") add(["Rock Climbing","Bouldering","Martial Arts","Yoga","Archery","Swing Dancing"], 2);
  if (setting === "home") add(["Sourdough Baking","Homebrewing","DJing","Cheesemaking","3D Printing","Knitting / Crochet","Electronics / Arduino","Music Production","Journaling","Chess","Language Learning","Video Gaming","Retro Gaming / Collecting","Board Games","Game Development","Miniature Painting","Trading Card Games"], 2);

  if (social === "solo") add(["Film Photography","Trail Running","Urban Sketching","Foraging","Stargazing","Birdwatching","Journaling","Watercolor Painting","Knitting / Crochet","Video Gaming","Retro Gaming / Collecting","Miniature Painting"], 2);
  if (social === "community") add(["Improv Comedy","Rock Climbing","Homebrewing","Swing Dancing","Stand-Up Comedy","Amateur Radio","Chess","Trading Card Games","Warhammer 40K","Tabletop Wargaming","Escape Rooms","Thrifting"], 2);
  if (social === "small-group") add(["Bouldering","Sourdough Baking","Ceramics","Guitar","Hiking","Dungeons & Dragons","Board Games","Escape Rooms"], 2);
  if (social === "flexible") add(["Video Gaming","Board Games","Trading Card Games"], 1);

  if (risk === "adventurous") add(["Rock Climbing","Cold Water Swimming","Bouldering","Trail Running","Skateboarding","Surfing","Mountain Biking"], 2);
  if (risk === "safe" || risk === "mental") add(["Ceramics","Urban Sketching","Sourdough Baking","Film Photography","Foraging","Birdwatching","Knitting / Crochet","Journaling","Board Games","Video Gaming","Miniature Painting","Retro Gaming / Collecting"], 2);
  if (risk === "challenge") add(["Improv Comedy","DJing","Homebrewing","Stand-Up Comedy","Martial Arts","Language Learning","Chess","Trading Card Games","Dungeons & Dragons","Warhammer 40K","Tabletop Wargaming","Escape Rooms"], 2);
  if (risk === "mental") add(["Chess","Game Development","Dungeons & Dragons","Puzzle Design","Trading Card Games","Tabletop Wargaming"], 1);

  if (budget === "free") add(["Journaling","Chess","Language Learning","Birdwatching","Stargazing","Urban Sketching","Cold Water Swimming","Stand-Up Comedy","Hiking","Music Production","Video Gaming","Game Development","Thrifting"], 2);
  if (budget === "low") add(["Embroidery","Knitting / Crochet","Hot Sauce Making","Cocktail Crafting","Candle Making","Sourdough Baking","Film Photography","Board Games","Escape Rooms","Miniature Painting"], 2);
  if (budget === "medium") add(["Ceramics","Homebrewing","Archery","Guitar","3D Printing","Rock Climbing","Rowing / Kayaking","Dungeons & Dragons","Trading Card Games","Tabletop Wargaming"], 2);
  if (budget === "high") add(["Mountain Biking","Surfing","Woodworking","Astronomy / Astrophotography","Cycling","Warhammer 40K","Retro Gaming / Collecting"], 1);

  if (output === "tangible") add(["Ceramics","Leatherworking","Woodworking","Sourdough Baking","Candle Making","Embroidery","Knitting / Crochet","3D Printing","Bookbinding","Homebrewing","Cheesemaking","Miniature Painting","Warhammer 40K","Game Development"], 2);
  if (output === "skill") add(["Martial Arts","Guitar","Singing / Vocal Training","DJing","Swing Dancing","Language Learning","Rock Climbing","Chess","Trading Card Games","Game Development"], 2);
  if (output === "experience") add(["Cold Water Swimming","Foraging","Hiking","Surfing","Stargazing","Birdwatching","Rock Pooling","Escape Rooms","Dungeons & Dragons","Video Gaming","Thrifting"], 2);
  if (output === "mental") add(["Yoga","Journaling","Chess","Archery","Film Photography","Urban Sketching","Video Gaming","Board Games"], 2);

  if (learning === "self-taught") add(["DJing","Music Production","Skateboarding","Chess","Language Learning","3D Printing","Electronics / Arduino","Video Gaming","Retro Gaming / Collecting","Game Development"], 1);
  if (learning === "structured") add(["Martial Arts","Swing Dancing","Rock Climbing","Guitar","Ceramics","Yoga","Dungeons & Dragons","Trading Card Games"], 1);
  if (learning === "community") add(["Improv Comedy","Homebrewing","Amateur Radio","Foraging","Dungeons & Dragons","Warhammer 40K","Board Games","Trading Card Games","Tabletop Wargaming"], 1);
  if (learning === "research") add(["Astronomy / Astrophotography","Language Learning","Chess","Homebrewing","Cheesemaking","Foraging","Warhammer 40K","Tabletop Wargaming","Trading Card Games","Game Development"], 1);

  if (vibe === "freedom") add(["Trail Running","Cycling","Cold Water Swimming","Surfing","Skateboarding","Foraging","Hiking","Film Photography","Video Gaming","Retro Gaming / Collecting","Thrifting"], 2);
  if (vibe === "mastery") add(["Martial Arts","Guitar","Chess","Language Learning","Woodworking","Music Production","Rock Climbing","Warhammer 40K","Trading Card Games","Miniature Painting","Game Development","Tabletop Wargaming"], 2);
  if (vibe === "connection") add(["Improv Comedy","Swing Dancing","Stand-Up Comedy","Amateur Radio","Homebrewing","Dungeons & Dragons","Board Games","Escape Rooms","Trading Card Games"], 2);
  if (vibe === "stillness") add(["Yoga","Ceramics","Birdwatching","Urban Sketching","Journaling","Archery","Knitting / Crochet","Stargazing","Miniature Painting","Retro Gaming / Collecting"], 2);

  return Object.entries(scores).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([name]) => name);
}

// ── SHARED UI ─────────────────────────────────────────────────────────────────

function Tag({ children, color }) {
  const c = color || COLORS.accent;
  return (
    <span style={{ background: `${c}18`, color: c, border: `1px solid ${c}40`, borderRadius: 6, padding: "3px 10px", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
      {children}
    </span>
  );
}

function Btn({ children, onClick, variant = "primary", style }) {
  const v = {
    primary: { background: COLORS.accent, color: "#fff", boxShadow: `0 0 20px ${COLORS.accent}40` },
    ghost: { background: "transparent", color: COLORS.text, border: `1px solid ${COLORS.border}` },
    lime: { background: COLORS.lime, color: "#000", boxShadow: `0 0 20px ${COLORS.lime}40` },
  };
  return <button onClick={onClick} style={{ padding: "14px 28px", borderRadius: 12, border: "none", cursor: "pointer", fontWeight: 800, fontSize: 15, transition: "all 0.15s", fontFamily: "inherit", ...v[variant], ...style }}>{children}</button>;
}

function Wrap({ children, style }) {
  return (
    <div style={{ minHeight: "100vh", background: COLORS.bg, color: COLORS.text, fontFamily: "'system-ui','-apple-system','Segoe UI',sans-serif", position: "relative", ...style }}>
      {/* Background glow atmosphere */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse at 20% 20%, ${COLORS.accent}08 0%, transparent 50%),
                     radial-gradient(ellipse at 80% 80%, ${COLORS.purple}08 0%, transparent 50%),
                     radial-gradient(ellipse at 60% 40%, ${COLORS.teal}05 0%, transparent 40%)` }} />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}

// ── SCREENS ───────────────────────────────────────────────────────────────────

function Landing({ onStart }) {
  const features = [
    { icon: "🎯", label: "10-Question Quiz", desc: "Matched to hobbies you've never tried", color: COLORS.accent },
    { icon: "💰", label: "Cost Breakdown", desc: "Entry to advanced, no surprises", color: COLORS.lime },
    { icon: "📅", label: "Habit Calendar", desc: "Schedule it so it actually happens", color: COLORS.teal },
    { icon: "🔥", label: "Streak Tracking", desc: "Build momentum day by day", color: COLORS.pink },
    { icon: "📓", label: "Progress Journal", desc: "Track how your hobbies are growing", color: COLORS.purple },
    { icon: "🎯", label: "Weekly Challenges", desc: "Specific goals to push you forward", color: COLORS.orange },
  ];
  return (
    <Wrap>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "72px 24px", textAlign: "center" }}>

        {/* Logo mark */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 40 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.teal}80)`,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
            boxShadow: `0 0 24px ${COLORS.accent}40`,
          }}>🔔</div>
          <span style={{ fontSize: 28, fontWeight: 900, letterSpacing: -1 }}>recess</span>
        </div>

        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${COLORS.lime}15`, border: `1px solid ${COLORS.lime}40`, borderRadius: 99, padding: "6px 18px", fontSize: 12, color: COLORS.lime, letterSpacing: 1, fontWeight: 700, textTransform: "uppercase", marginBottom: 32 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.lime }} />
          Not Another Wellness App
        </div>

        {/* Hero */}
        <h1 style={{ fontSize: "clamp(40px,8vw,80px)", fontWeight: 900, lineHeight: 1.0, marginBottom: 24, letterSpacing: -3 }}>
          Your job isn't<br />
          <span style={{ background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.teal})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            your whole life.
          </span>
        </h1>

        <p style={{ fontSize: 18, color: COLORS.textSoft, lineHeight: 1.75, maxWidth: 500, margin: "0 auto 44px" }}>
          Discover hobbies matched to your actual personality. Real cost breakdowns, local communities, and a schedule that makes it stick.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 72 }}>
          <Btn onClick={onStart} style={{ fontSize: 17, padding: "18px 48px" }}>Find My Hobbies →</Btn>
          <Btn variant="ghost" onClick={onStart} style={{ fontSize: 17, padding: "18px 32px" }}>Browse 60 Hobbies</Btn>
        </div>

        {/* Feature grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14, textAlign: "left" }}>
          {features.map(f => (
            <div key={f.label} style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              borderTop: `2px solid ${f.color}60`,
              borderRadius: 12, padding: "18px 16px",
              transition: "border-color 0.2s",
            }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{f.icon}</div>
              <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 4, color: f.color }}>{f.label}</div>
              <div style={{ fontSize: 12, color: COLORS.textSoft, lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </Wrap>
  );
}
function Quiz({ onComplete }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const q = QUIZ_QUESTIONS[current];
  const progress = (current / QUIZ_QUESTIONS.length) * 100;

  function answer(val) {
    const next = { ...answers, [q.id]: val };
    setAnswers(next);
    if (current < QUIZ_QUESTIONS.length - 1) setCurrent(current + 1);
    else onComplete(next);
  }

  return (
    <Wrap>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
            <span style={{ fontSize: 13, color: COLORS.textSoft, fontWeight: 600 }}>Question {current + 1} of {QUIZ_QUESTIONS.length}</span>
            <span style={{ fontSize: 13, color: COLORS.accent, fontWeight: 700 }}>{Math.round(progress)}%</span>
          </div>
          <div style={{ background: COLORS.surface, borderRadius: 99, height: 5, overflow: "hidden", border: `1px solid ${COLORS.border}` }}>
            <div style={{ width: `${progress}%`, height: "100%", background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.teal})`, transition: "width 0.4s ease", borderRadius: 99, boxShadow: `0 0 10px ${COLORS.accent}60` }} />
          </div>
        </div>

        <h2 style={{ fontSize: "clamp(22px,5vw,34px)", fontWeight: 800, lineHeight: 1.25, marginBottom: 40, letterSpacing: -0.5 }}>{q.question}</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {q.options.map(opt => (
            <button key={opt.value} onClick={() => answer(opt.value)}
              style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: "18px 24px", cursor: "pointer", display: "flex", alignItems: "center", gap: 16, textAlign: "left", transition: "all 0.15s", color: COLORS.text, fontFamily: "inherit", fontSize: 16, fontWeight: 500 }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.background = `${COLORS.accent}12`; e.currentTarget.style.boxShadow = `0 0 16px ${COLORS.accent}20`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.background = COLORS.card; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <span style={{ fontSize: 28, flexShrink: 0 }}>{opt.icon}</span>
              <span>{opt.label}</span>
            </button>
          ))}
        </div>

        {current > 0 && (
          <button onClick={() => setCurrent(current - 1)} style={{ marginTop: 24, background: "none", border: "none", color: COLORS.muted, cursor: "pointer", fontSize: 14, fontFamily: "inherit" }}>← Back</button>
        )}
      </div>
    </Wrap>
  );
}

// ── ONBOARDING ────────────────────────────────────────────────────────────────

const ONBOARDING_STEPS = [
  {
    id: "matches",
    emoji: "✨",
    title: "Your matches are in.",
    body: "Based on your answers we've surfaced the hobbies most likely to fit your personality, schedule, and energy. These aren't random — every match is weighted across all 10 of your answers.",
    cta: "See My Matches →",
  },
  {
    id: "explore",
    emoji: "🔍",
    title: "Every hobby has a full breakdown.",
    body: "Tap any hobby to see cost breakdowns from entry level to fully committed, curated beginner tutorials, a YouTube search shortcut, and real communities to join — all in one place.",
    cta: "Got It →",
  },
  {
    id: "schedule",
    emoji: "📅",
    title: "Schedule it or it won't happen.",
    body: "The calendar is where hobbies become habits. Block out specific days and time slots for each hobby. The app tracks your check-ins, builds streaks, and nudges you when you're slipping.",
    cta: "Makes Sense →",
  },
  {
    id: "checkin",
    emoji: "🔥",
    title: "Check in after every session.",
    body: "One tap — 'Did it' or 'Skip'. That's all. Over time your streaks, journal, and weekly challenges build a picture of who you're becoming outside of work. This is the part that makes it stick.",
    cta: "Let's Go →",
  },
];

function Onboarding({ matches, onDone, onExploreHobby }) {
  const [step, setStep] = useState(0);
  const current = ONBOARDING_STEPS[step];
  const isLast = step === ONBOARDING_STEPS.length - 1;
  const progress = ((step + 1) / ONBOARDING_STEPS.length) * 100;

  return (
    <Wrap>
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "60px 24px", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

        {/* Progress dots */}
        <div style={{ display: "flex", gap: 8, marginBottom: 48, justifyContent: "center" }}>
          {ONBOARDING_STEPS.map((s, i) => (
            <div key={s.id} style={{
              width: i === step ? 24 : 8,
              height: 8,
              borderRadius: 99,
              background: i === step ? COLORS.accent : i < step ? `${COLORS.accent}50` : COLORS.border, boxShadow: i === step ? `0 0 8px ${COLORS.accent}80` : 'none',
              transition: "all 0.3s ease",
            }} />
          ))}
        </div>

        {/* Step content */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 64, marginBottom: 24, textAlign: "center" }}>{current.emoji}</div>

          <h2 style={{
            fontSize: "clamp(26px, 5vw, 38px)",
            fontWeight: 900,
            letterSpacing: -1,
            lineHeight: 1.15,
            marginBottom: 20,
            textAlign: "center",
          }}>{current.title}</h2>

          <p style={{
            fontSize: 17,
            color: COLORS.textSoft,
            lineHeight: 1.75,
            textAlign: "center",
            marginBottom: 40,
          }}>{current.body}</p>

          {/* Step-specific interactive element */}
          {step === 0 && matches.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
              {matches.slice(0, 3).map((name, i) => (
                <div
                  key={name}
                  onClick={() => onExploreHobby(name)}
                  style={{
                    background: i === 0 ? `${COLORS.accent}15` : COLORS.card,
                    border: `1px solid ${i === 0 ? COLORS.accent : COLORS.border}`,
                    borderRadius: 12,
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.boxShadow = `0 0 20px ${COLORS.accent}15`; }}
                  onMouseLeave={e => e.currentTarget.style.borderColor = i === 0 ? COLORS.accent : COLORS.border}
                >
                  <span style={{ fontSize: 28, flexShrink: 0 }}>{HOBBY_DATA[name]?.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, fontSize: 15 }}>{name}</div>
                    <div style={{ fontSize: 12, color: COLORS.textSoft, marginTop: 2 }}>{HOBBY_DATA[name]?.category} · {HOBBY_DATA[name]?.difficulty}</div>
                  </div>
                  {i === 0 && (
                    <div style={{ background: COLORS.accent, color: "#000", borderRadius: 99, padding: "2px 10px", fontSize: 10, fontWeight: 800 }}>TOP</div>
                  )}
                </div>
              ))}
              <div style={{ fontSize: 12, color: COLORS.muted, textAlign: "center", marginTop: 4 }}>Tap any to explore it — or continue below</div>
            </div>
          )}

          {step === 1 && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 32 }}>
              {[
                { icon: "💰", label: "Cost breakdown" },
                { icon: "▶", label: "Video search" },
                { icon: "📖", label: "Tutorials" },
                { icon: "💬", label: "Forums" },
                { icon: "👥", label: "Local groups" },
                { icon: "🔗", label: "Key sites" },
              ].map(f => (
                <div key={f.label} style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 10, padding: "14px 10px", textAlign: "center" }}>
                  <div style={{ fontSize: 22, marginBottom: 6 }}>{f.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.textSoft }}>{f.label}</div>
                </div>
              ))}
            </div>
          )}

          {step === 2 && (
            <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 20, marginBottom: 32 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 12 }}>
                {["M","T","W","T","F","S","S"].map((d, i) => (
                  <div key={i} style={{ textAlign: "center", fontSize: 11, fontWeight: 700, color: COLORS.muted, paddingBottom: 6 }}>{d}</div>
                ))}
                {[null, "🧗", null, "🏺", null, "🧗", "📷",
                  "🏃", null, "🏺", null, "🏃", null, null].map((h, i) => (
                  <div key={i} style={{ background: h ? `${COLORS.accent}18` : COLORS.surface, border: `1px solid ${h ? COLORS.accent : COLORS.border}`, borderRadius: 6, padding: "8px 4px", textAlign: "center", fontSize: h ? 14 : 10, color: COLORS.muted }}>
                    {h || "+"}
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 12, color: COLORS.textSoft, textAlign: "center" }}>A sample week — yours to build</div>
            </div>
          )}

          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
              {[
                { emoji: "✅", label: "Did it", desc: "Session logged, streak continues", color: COLORS.accent },
                { emoji: "⏭️", label: "Skipped", desc: "No judgment — just honest data", color: COLORS.muted },
                { emoji: "🔥", label: "7-day streak", desc: "The number that makes it real", color: COLORS.orange },
              ].map(item => (
                <div key={item.label} style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{item.emoji}</span>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 14, color: item.color }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: COLORS.textSoft, marginTop: 2 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div style={{ paddingTop: 16 }}>
          <button
            onClick={() => isLast ? onDone() : setStep(s => s + 1)}
            style={{
              width: "100%",
              background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.teal}80)`,
              color: "#fff",
              border: "none",
              borderRadius: 12,
              padding: "18px",
              fontSize: 17,
              fontWeight: 800,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "opacity 0.15s",
              boxShadow: `0 0 24px ${COLORS.accent}30`,
            }}
          >
            {current.cta}
          </button>
          {!isLast && (
            <button
              onClick={onDone}
              style={{ width: "100%", background: "none", border: "none", color: COLORS.muted, fontSize: 13, cursor: "pointer", fontFamily: "inherit", marginTop: 14, padding: 8 }}
            >
              Skip intro
            </button>
          )}
        </div>

      </div>
    </Wrap>
  );
}

function Results({ matches, onExplore, onSkip }) {
  return (
    <Wrap>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "inline-block", background: `${COLORS.accent}20`, border: `1px solid ${COLORS.accent}40`, borderRadius: 99, padding: "5px 14px", fontSize: 11, color: COLORS.accent, letterSpacing: 2, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Your Matches</div>
          <h2 style={{ fontSize: "clamp(28px,5vw,44px)", fontWeight: 800, letterSpacing: -1, marginBottom: 8 }}>Here's what fits you.</h2>
          <p style={{ color: COLORS.textSoft, fontSize: 16 }}>Based on all 10 of your answers. Click any hobby to explore it fully.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 16, marginBottom: 32 }}>
          {matches.map((name, i) => (
            <div key={name} onClick={() => onExplore(name)}
              style={{ background: COLORS.card, border: `1px solid ${i === 0 ? COLORS.accent : COLORS.border}`, borderRadius: 14, padding: 24, cursor: "pointer", position: "relative", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.boxShadow = `0 0 20px ${COLORS.accent}15`; }}
              onMouseLeave={e => e.currentTarget.style.borderColor = i === 0 ? COLORS.accent : COLORS.border}
            >
              {i === 0 && <div style={{ position: "absolute", top: -10, right: 16, background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.teal})`, color: "#000", borderRadius: 99, padding: "3px 12px", fontSize: 11, fontWeight: 800, letterSpacing: 1, boxShadow: `0 0 12px ${COLORS.accent}60` }}>TOP MATCH</div>}
              <div style={{ fontSize: 40, marginBottom: 10 }}>{HOBBY_DATA[name].emoji}</div>
              <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 6 }}>{name}</div>
              <div style={{ fontSize: 13, color: COLORS.textSoft, lineHeight: 1.6, marginBottom: 12 }}>{HOBBY_DATA[name].description}</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <Tag>{HOBBY_DATA[name].category}</Tag>
                <Tag>{HOBBY_DATA[name].difficulty}</Tag>
              </div>
            </div>
          ))}
        </div>
        <Btn onClick={onSkip} variant="ghost">Browse All 60 Hobbies →</Btn>
      </div>
    </Wrap>
  );
}

// ── LOCAL STORE FINDER ────────────────────────────────────────────────────────

function LocalStoreFinder({ storeQuery, classQuery, hobbyName }) {
  const [locState, setLocState] = useState("idle"); // idle | loading | ready | denied
  const [coords, setCoords] = useState(null);

  function getLocation() {
    if (!navigator.geolocation) {
      setLocState("denied");
      return;
    }
    setLocState("loading");
    navigator.geolocation.getCurrentPosition(
      pos => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setLocState("ready");
      },
      () => setLocState("denied"),
      { timeout: 8000 }
    );
  }

  // Build a Maps URL that includes the user's real coordinates
  function mapsUrl(query) {
    if (coords) {
      // With coordinates — Maps opens exactly at user location and searches nearby
      return `https://www.google.com/maps/search/${encodeURIComponent(query)}/@${coords.lat},${coords.lng},13z`;
    }
    // Fallback without coordinates
    return `https://www.google.com/maps/search/${encodeURIComponent(query + " near me")}`;
  }

  function searchUrl(query) {
    if (coords) {
      return `https://www.google.com/search?q=${encodeURIComponent(query + " near me")}&near=${coords.lat},${coords.lng}`;
    }
    return `https://www.google.com/search?q=${encodeURIComponent(query + " near me")}`;
  }

  const searches = [
    { icon: "🏪", label: "Stores & Suppliers", query: storeQuery, color: COLORS.lime },
    { icon: "🎓", label: "Classes & Lessons", query: classQuery, color: COLORS.teal },
    { icon: "🔍", label: "Google Search", query: storeQuery, color: COLORS.accent, useGoogle: true },
  ];

  return (
    <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 28, marginBottom: 32 }}>
      <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 6 }}>📍 Find It Near You</h3>
      <p style={{ fontSize: 13, color: COLORS.textSoft, marginBottom: 20, lineHeight: 1.6 }}>
        Find local stores, studios, and classes for {hobbyName.toLowerCase()} in your area.
      </p>

      {/* Location permission step */}
      {locState === "idle" && (
        <button
          onClick={getLocation}
          style={{
            width: "100%", marginBottom: 16,
            background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.teal}80)`,
            color: "#fff", border: "none", borderRadius: 12,
            padding: "14px 20px", cursor: "pointer",
            fontFamily: "inherit", fontWeight: 800, fontSize: 15,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            boxShadow: `0 0 20px ${COLORS.accent}30`,
          }}
        >
          <span>📍</span> Use My Location for Better Results
        </button>
      )}

      {locState === "loading" && (
        <div style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: "14px 20px", marginBottom: 16, display: "flex", alignItems: "center", gap: 10, color: COLORS.textSoft, fontSize: 14 }}>
          <span style={{ animation: "spin 1s linear infinite", display: "inline-block" }}>⏳</span>
          Getting your location…
        </div>
      )}

      {locState === "ready" && (
        <div style={{ background: `${COLORS.lime}12`, border: `1px solid ${COLORS.lime}40`, borderRadius: 12, padding: "12px 16px", marginBottom: 16, display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: COLORS.lime, fontWeight: 700 }}>
          <span>✓</span> Location found — results will show near you
        </div>
      )}

      {locState === "denied" && (
        <div style={{ background: `${COLORS.orange}12`, border: `1px solid ${COLORS.orange}40`, borderRadius: 12, padding: "12px 16px", marginBottom: 16, fontSize: 13, color: COLORS.orange, fontWeight: 700 }}>
          ⚠ Location access denied — links will open Maps normally. You can type your location once Maps opens.
        </div>
      )}

      {/* Search buttons — always visible */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {searches.map(s => (
          <a
            key={s.label}
            href={s.useGoogle ? searchUrl(s.query) : mapsUrl(s.query)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", gap: 14, cursor: "pointer", transition: "all 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.background = `${s.color}10`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.background = COLORS.surface; }}
            >
              <div style={{ width: 42, height: 42, borderRadius: 10, flexShrink: 0, background: `${s.color}20`, border: `1px solid ${s.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                {s.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 14, color: COLORS.text, marginBottom: 2 }}>{s.label}</div>
                <div style={{ fontSize: 11, color: COLORS.textSoft }}>
                  "{s.query}"{locState === "ready" ? " · 📍 Near your location" : " · Opens Google Maps"}
                </div>
              </div>
              <span style={{ fontSize: 14, color: COLORS.muted, flexShrink: 0 }}>↗</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function HobbyDetail({ name, onBack, onAddToCalendar }) {
  const h = HOBBY_DATA[name];
  const [costTab, setCostTab] = useState("entry");
  const costData = {
    entry: { label: "Entry Level", value: h.cost.entry, color: COLORS.teal },
    mid: { label: "Getting Serious", value: h.cost.mid, color: COLORS.orange },
    advanced: { label: "Fully Committed", value: h.cost.advanced, color: COLORS.accent },
  };

  return (
    <Wrap>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: COLORS.textSoft, cursor: "pointer", fontSize: 14, marginBottom: 32, padding: 0, fontFamily: "inherit" }}>← Back</button>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 12 }}>
          <span style={{ fontSize: 56 }}>{h.emoji}</span>
          <div>
            <h1 style={{ fontSize: "clamp(28px,5vw,44px)", fontWeight: 900, letterSpacing: -1 }}>{name}</h1>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6 }}>
              <Tag>{h.category}</Tag><Tag>{h.difficulty}</Tag><Tag>⏱ {h.timePerWeek}/wk</Tag>
            </div>
          </div>
        </div>

        <p style={{ fontSize: 17, color: COLORS.textSoft, lineHeight: 1.7, marginBottom: 32 }}>{h.description}</p>

        {/* YouTube Search Link */}
        {h.video && (
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 16 }}>▶ Watch & Learn</h3>
            <a
              href={h.video.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: COLORS.card,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 14,
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#FF0000"; e.currentTarget.style.background = "#1a0000"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.background = COLORS.card; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: "#FF0000",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <span style={{ fontSize: 22 }}>▶</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: 15, color: COLORS.text, marginBottom: 4 }}>
                    Search YouTube: "{h.video.searchQuery}"
                  </div>
                  <div style={{ fontSize: 13, color: COLORS.textSoft }}>
                    Opens YouTube with curated beginner results for this hobby
                  </div>
                </div>
                <span style={{ fontSize: 20, color: COLORS.muted }}>↗</span>
              </div>
            </a>
          </div>
        )}

        {/* Tutorial Links */}
        {h.tutorials && (
          <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
            <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 16 }}>📖 Start Here</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {h.tutorials.map((t, i) => (
                <a
                  key={i}
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: COLORS.surface, border: `1px solid ${COLORS.border}`,
                    borderRadius: 10, padding: "14px 18px",
                    color: COLORS.text, textDecoration: "none",
                    fontSize: 14, fontWeight: 600, transition: "all 0.15s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.color = COLORS.accent; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS.text; }}
                >
                  <span>{t.label}</span>
                  <span style={{ fontSize: 18, opacity: 0.5 }}>↗</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Cost Breakdown */}
        <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
          <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 20 }}>💰 Cost Breakdown</h3>
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {Object.entries(costData).map(([key, d]) => (
              <button key={key} onClick={() => setCostTab(key)} style={{ background: costTab === key ? d.color : COLORS.card, color: costTab === key ? "#000" : COLORS.textSoft, border: `1px solid ${costTab === key ? d.color : COLORS.border}`, boxShadow: costTab === key ? `0 0 12px ${d.color}50` : 'none', borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontWeight: 700, fontSize: 13, fontFamily: "inherit" }}>{d.label}</button>
            ))}
          </div>
          <div style={{ background: COLORS.surface, borderRadius: 10, padding: "20px 24px", borderLeft: `3px solid ${costData[costTab].color}` }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: costData[costTab].color }}>{costData[costTab].value}</div>
          </div>
        </div>

        {/* Community Resources */}
        <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
          <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 20 }}>🔗 Community & Resources</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 20 }}>
            {[["Forums", h.resources.forums], ["Find Groups", h.resources.localGroups], ["Websites", h.resources.sites]].map(([label, items]) => (
              <div key={label}>
                <div style={{ fontWeight: 700, fontSize: 11, color: COLORS.accent, letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>{label}</div>
                {items.map(f => {
                  let url;
                  if (f.startsWith("r/")) {
                    url = `https://www.reddit.com/${f}`;
                  } else if (f.match(/^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/)) {
                    url = `https://${f}`;
                  } else if (label === "Websites") {
                    url = `https://${f}`;
                  } else {
                    url = `https://www.google.com/search?q=${encodeURIComponent(f)}`;
                  }
                  return (
                    <a key={f} href={url} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: COLORS.textSoft, marginBottom: 8, textDecoration: "none", transition: "color 0.15s" }}
                      onMouseEnter={e => e.currentTarget.style.color = COLORS.accent}
                      onMouseLeave={e => e.currentTarget.style.color = COLORS.textSoft}
                    >
                      <span style={{ flexShrink: 0 }}>→</span>
                      <span style={{ borderBottom: `1px dashed ${COLORS.border}` }}>{f}</span>
                    </a>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Local Stores — Geo powered */}
        {h.storeQuery && <LocalStoreFinder storeQuery={h.storeQuery} classQuery={h.classQuery} hobbyName={name} />}

        <Btn onClick={() => onAddToCalendar(name)} style={{ width: "100%", textAlign: "center", borderRadius: 12, padding: "18px", background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.teal}80)`, boxShadow: `0 0 24px ${COLORS.accent}30` }}>
          📅 Add {name} to My Schedule
        </Btn>
      </div>
    </Wrap>
  );
}

function BrowseAll({ onSelect, onBack }) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const categories = ["All", ...new Set(Object.values(HOBBY_DATA).map(h => h.category))];
  const filtered = Object.keys(HOBBY_DATA).filter(name => {
    const matchCat = filter === "All" || HOBBY_DATA[name].category === filter;
    const matchSearch = name.toLowerCase().includes(search.toLowerCase()) || HOBBY_DATA[name].description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <Wrap>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: COLORS.textSoft, cursor: "pointer", fontSize: 14, marginBottom: 24, padding: 0, fontFamily: "inherit" }}>← Back</button>
        <h2 style={{ fontSize: 36, fontWeight: 900, letterSpacing: -1, marginBottom: 8 }}>All 60 Hobbies</h2>
        <input placeholder="Search hobbies..." value={search} onChange={e => setSearch(e.target.value)}
          style={{ width: "100%", background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 10, padding: "12px 18px", color: COLORS.text, fontSize: 15, fontFamily: "inherit", marginBottom: 20, boxSizing: "border-box", outline: "none" }}
        />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)} style={{ background: filter === c ? COLORS.accent : COLORS.card, color: filter === c ? "#fff" : COLORS.textSoft, boxShadow: filter === c ? `0 0 12px ${COLORS.accent}40` : 'none', border: `1px solid ${filter === c ? COLORS.accent : COLORS.border}`, borderRadius: 99, padding: "8px 18px", cursor: "pointer", fontWeight: 700, fontSize: 13, fontFamily: "inherit" }}>{c}</button>
          ))}
        </div>
        <div style={{ marginBottom: 16, color: COLORS.muted, fontSize: 13 }}>{filtered.length} hobbies</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 16 }}>
          {filtered.map(name => {
            const h = HOBBY_DATA[name];
            return (
              <div key={name} onClick={() => onSelect(name)}
                style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 20, cursor: "pointer", transition: "all 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.boxShadow = `0 0 20px ${COLORS.accent}15`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontSize: 32, marginBottom: 8 }}>{h.emoji}</div>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 13, color: COLORS.textSoft, marginBottom: 12, lineHeight: 1.5 }}>{h.description}</div>
                <Tag>{h.category}</Tag>
              </div>
            );
          })}
        </div>
      </div>
    </Wrap>
  );
}

const TIME_SLOTS = ["Morning", "Midday", "Evening", "Night"];
const TIME_SLOT_LABELS = {
  "Morning": "6–9am",
  "Midday": "12–2pm",
  "Evening": "6–9pm",
  "Night": "9–11pm",
};
const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAY_HEADERS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function dateKey(year, month, day) {
  return `${year}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
}

function Calendar({ schedule, onAdd, onRemove, onBack, preselectedHobby }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [addingSlot, setAddingSlot] = useState(null); // { dateKey, slot }
  const [selectedHobby, setSelectedHobby] = useState(preselectedHobby || Object.keys(HOBBY_DATA)[0]);
  const [view, setView] = useState("year"); // "year" | "month" | "day"

  // When arriving from hobby detail, go straight to month view
  useState(() => { if (preselectedHobby) setView("month"); });

  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay(); // 0=Sun
  }

  function getEntriesForDate(dk) {
    return schedule[dk] || {};
  }

  function hasEntries(dk) {
    const entries = schedule[dk] || {};
    return Object.values(entries).some(Boolean);
  }

  function getEntryCount(dk) {
    const entries = schedule[dk] || {};
    return Object.values(entries).filter(Boolean).length;
  }

  function isToday(year, month, day) {
    return year === today.getFullYear() && month === today.getMonth() && day === today.getDate();
  }

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  // ── YEAR VIEW — 12 mini month grids ───────────────────────────────────────
  function YearView() {
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
          <button onClick={() => setViewYear(y => y - 1)} style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, color: COLORS.text, borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontFamily: "inherit", fontWeight: 700 }}>← {viewYear - 1}</button>
          <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: -1 }}>{viewYear}</h2>
          <button onClick={() => setViewYear(y => y + 1)} style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, color: COLORS.text, borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontFamily: "inherit", fontWeight: 700 }}>{viewYear + 1} →</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
          {MONTH_NAMES.map((name, mi) => {
            const daysInMonth = getDaysInMonth(viewYear, mi);
            const firstDay = getFirstDayOfMonth(viewYear, mi);
            const isCurrentMonth = mi === today.getMonth() && viewYear === today.getFullYear();
            // Count hobby days in this month
            let hobbyDays = 0;
            for (let d = 1; d <= daysInMonth; d++) {
              if (hasEntries(dateKey(viewYear, mi, d))) hobbyDays++;
            }
            return (
              <div key={name}
                onClick={() => { setViewMonth(mi); setView("month"); }}
                style={{ background: COLORS.card, border: `1px solid ${isCurrentMonth ? COLORS.accent : COLORS.border}`, borderRadius: 12, padding: "14px", cursor: "pointer", transition: "all 0.15s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = COLORS.accent}
                onMouseLeave={e => e.currentTarget.style.borderColor = isCurrentMonth ? COLORS.accent : COLORS.border}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <div style={{ fontWeight: 800, fontSize: 14, color: isCurrentMonth ? COLORS.accent : COLORS.text }}>{name}</div>
                  {hobbyDays > 0 && (
                    <div style={{ background: `${COLORS.accent}20`, color: COLORS.accent, borderRadius: 99, padding: "1px 8px", fontSize: 10, fontWeight: 800 }}>{hobbyDays}d</div>
                  )}
                </div>
                {/* Mini grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }}>
                  {Array(firstDay).fill(null).map((_, i) => (
                    <div key={`e${i}`} />
                  ))}
                  {Array(daysInMonth).fill(null).map((_, i) => {
                    const d = i + 1;
                    const dk = dateKey(viewYear, mi, d);
                    const has = hasEntries(dk);
                    const tod = isToday(viewYear, mi, d);
                    return (
                      <div key={d} style={{
                        width: "100%", aspectRatio: "1",
                        borderRadius: 3,
                        background: tod ? COLORS.accent : has ? `${COLORS.accent}40` : COLORS.surface,
                        border: tod ? "none" : "none",
                      }} />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ── MONTH VIEW — full sized month grid ─────────────────────────────────────
  function MonthView() {
    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
    const isCurrentMonth = viewMonth === today.getMonth() && viewYear === today.getFullYear();

    return (
      <div>
        {/* Month nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <button onClick={() => setView("year")} style={{ background: "none", border: "none", color: COLORS.textSoft, cursor: "pointer", fontFamily: "inherit", fontSize: 13 }}>← {viewYear}</button>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
            <button onClick={prevMonth} style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, color: COLORS.text, borderRadius: 8, width: 36, height: 36, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
            <h2 style={{ fontSize: 24, fontWeight: 900, letterSpacing: -0.5, minWidth: 180, textAlign: "center" }}>
              {MONTH_NAMES[viewMonth]} {viewYear}
            </h2>
            <button onClick={nextMonth} style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, color: COLORS.text, borderRadius: 8, width: 36, height: 36, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
          </div>
          <div style={{ width: 60 }} />
        </div>

        {/* Day headers */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 4 }}>
          {DAY_HEADERS.map(d => (
            <div key={d} style={{ textAlign: "center", fontSize: 11, fontWeight: 800, color: COLORS.muted, padding: "4px 0", letterSpacing: 1 }}>{d}</div>
          ))}
        </div>

        {/* Day cells */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
          {Array(firstDay).fill(null).map((_, i) => <div key={`empty${i}`} />)}
          {Array(daysInMonth).fill(null).map((_, i) => {
            const d = i + 1;
            const dk = dateKey(viewYear, viewMonth, d);
            const entries = getEntriesForDate(dk);
            const filledSlots = Object.entries(entries).filter(([, h]) => h);
            const tod = isToday(viewYear, viewMonth, d);
            const isPast = new Date(viewYear, viewMonth, d) < new Date(today.getFullYear(), today.getMonth(), today.getDate());

            return (
              <div key={d}
                onClick={() => { setSelectedDate(dk); setView("day"); }}
                style={{
                  background: tod ? `${COLORS.accent}20` : COLORS.card,
                  border: `1px solid ${tod ? COLORS.accent : filledSlots.length > 0 ? COLORS.borderBright : COLORS.border}`,
                  borderRadius: 10,
                  padding: "8px 6px",
                  minHeight: 72,
                  cursor: "pointer",
                  transition: "all 0.15s",
                  opacity: isPast && !filledSlots.length ? 0.5 : 1,
                  boxShadow: tod ? `0 0 10px ${COLORS.accent}20` : "none",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.opacity = "1"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = tod ? COLORS.accent : filledSlots.length > 0 ? COLORS.borderBright : COLORS.border; e.currentTarget.style.opacity = isPast && !filledSlots.length ? "0.5" : "1"; }}
              >
                <div style={{
                  fontSize: 13, fontWeight: tod ? 900 : 600,
                  color: tod ? COLORS.accent : COLORS.text,
                  marginBottom: 4,
                  textShadow: tod ? `0 0 8px ${COLORS.accent}60` : "none",
                }}>{d}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {filledSlots.slice(0, 3).map(([slot, hobby]) => (
                    <div key={slot} style={{
                      background: `${COLORS.accent}20`,
                      borderRadius: 4,
                      padding: "2px 4px",
                      fontSize: 9,
                      display: "flex", alignItems: "center", gap: 3,
                      overflow: "hidden",
                    }}>
                      <span>{HOBBY_DATA[hobby]?.emoji}</span>
                      <span style={{ color: COLORS.accent, fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {hobby.length > 8 ? hobby.slice(0, 8) + "…" : hobby}
                      </span>
                    </div>
                  ))}
                  {filledSlots.length > 3 && (
                    <div style={{ fontSize: 9, color: COLORS.muted }}>+{filledSlots.length - 3} more</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* If preselected hobby, show prompt */}
        {preselectedHobby && (
          <div style={{ marginTop: 20, background: `${COLORS.accent}12`, border: `1px solid ${COLORS.accent}30`, borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 24 }}>{HOBBY_DATA[preselectedHobby]?.emoji}</span>
            <div style={{ fontSize: 14, color: COLORS.textSoft }}>
              Tap any day to schedule <strong style={{ color: COLORS.accent }}>{preselectedHobby}</strong>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ── DAY VIEW — detail for a single day ─────────────────────────────────────
  function DayView() {
    if (!selectedDate) return null;
    const [y, m, d] = selectedDate.split("-").map(Number);
    const dateObj = new Date(y, m - 1, d);
    const dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dateObj.getDay()];
    const entries = getEntriesForDate(selectedDate);
    const tod = selectedDate === dateKey(today.getFullYear(), today.getMonth(), today.getDate());

    return (
      <div>
        <button onClick={() => setView("month")} style={{ background: "none", border: "none", color: COLORS.textSoft, cursor: "pointer", fontFamily: "inherit", fontSize: 13, marginBottom: 24, padding: 0 }}>
          ← {MONTH_NAMES[m - 1]} {y}
        </button>

        <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 28 }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: -1, color: tod ? COLORS.accent : COLORS.text }}>
            {dayName}
          </h2>
          <span style={{ fontSize: 18, color: COLORS.textSoft }}>{MONTH_NAMES[m - 1]} {d}, {y}</span>
          {tod && <span style={{ background: `${COLORS.accent}20`, color: COLORS.accent, borderRadius: 99, padding: "3px 12px", fontSize: 12, fontWeight: 800 }}>Today</span>}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {TIME_SLOTS.map(slot => {
            const hobby = entries[slot];
            return (
              <div key={slot} style={{
                background: hobby ? `${COLORS.accent}12` : COLORS.card,
                border: `1px solid ${hobby ? COLORS.accent : COLORS.border}`,
                borderRadius: 14, padding: "16px 20px",
                display: "flex", alignItems: "center", gap: 16,
                transition: "all 0.15s",
                boxShadow: hobby ? `0 0 12px ${COLORS.accent}15` : "none",
              }}>
                {/* Time label */}
                <div style={{ minWidth: 90, flexShrink: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: hobby ? COLORS.accent : COLORS.textSoft }}>{slot}</div>
                  <div style={{ fontSize: 11, color: COLORS.muted }}>{TIME_SLOT_LABELS[slot]}</div>
                </div>

                {hobby ? (
                  <>
                    <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 24 }}>{HOBBY_DATA[hobby]?.emoji}</span>
                      <span style={{ fontWeight: 800, fontSize: 15 }}>{hobby}</span>
                    </div>
                    <button onClick={() => onRemove(selectedDate, slot)} style={{
                      background: "none", border: `1px solid ${COLORS.border}`,
                      color: COLORS.muted, borderRadius: 8,
                      padding: "6px 14px", cursor: "pointer",
                      fontSize: 12, fontFamily: "inherit",
                    }}>Remove</button>
                  </>
                ) : (
                  <>
                    <div style={{ flex: 1, color: COLORS.muted, fontSize: 14 }}>Nothing scheduled</div>
                    <button
                      onClick={() => {
                        if (preselectedHobby) {
                          onAdd(selectedDate, slot, preselectedHobby);
                        } else {
                          setAddingSlot({ dateKey: selectedDate, slot });
                        }
                      }}
                      style={{
                        background: `${COLORS.accent}15`,
                        border: `1px solid ${COLORS.accent}40`,
                        color: COLORS.accent, borderRadius: 8,
                        padding: "8px 16px", cursor: "pointer",
                        fontSize: 13, fontWeight: 700, fontFamily: "inherit",
                      }}>
                      {preselectedHobby ? `Add ${HOBBY_DATA[preselectedHobby]?.emoji}` : "+ Add Hobby"}
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <Wrap>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: COLORS.textSoft, cursor: "pointer", fontSize: 14, marginBottom: 24, padding: 0, fontFamily: "inherit" }}>← Back</button>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: -1, marginBottom: 4 }}>📅 Hobby Calendar</h2>
            <p style={{ color: COLORS.textSoft, fontSize: 14 }}>
              {view === "year" && "Click any month to drill in"}
              {view === "month" && "Click any day to schedule hobbies"}
              {view === "day" && "Add or remove hobbies for each time slot"}
            </p>
          </div>
          {/* View toggle */}
          <div style={{ display: "flex", gap: 8 }}>
            {["year","month","day"].map(v => (
              <button key={v} onClick={() => { if (v === "day" && !selectedDate) return; setView(v); }}
                style={{ background: view === v ? COLORS.accent : COLORS.card, color: view === v ? "#000" : COLORS.textSoft, border: `1px solid ${view === v ? COLORS.accent : COLORS.border}`, borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontWeight: 700, fontSize: 12, fontFamily: "inherit", textTransform: "capitalize", boxShadow: view === v ? `0 0 10px ${COLORS.accent}40` : "none" }}>
                {v}
              </button>
            ))}
          </div>
        </div>

        {view === "year" && <YearView />}
        {view === "month" && <MonthView />}
        {view === "day" && <DayView />}
      </div>

      {/* Hobby picker modal — for day view "Add Hobby" button */}
      {addingSlot && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 24 }} onClick={() => setAddingSlot(null)}>
          <div onClick={e => e.stopPropagation()} style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 16, padding: 32, maxWidth: 520, width: "100%", maxHeight: "80vh", display: "flex", flexDirection: "column" }}>
            <h3 style={{ fontWeight: 800, marginBottom: 4 }}>Pick a Hobby</h3>
            <p style={{ color: COLORS.textSoft, fontSize: 13, marginBottom: 20 }}>
              {addingSlot.slot} · {TIME_SLOT_LABELS[addingSlot.slot]} · {addingSlot.dateKey}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, overflowY: "auto", flex: 1, marginBottom: 20 }}>
              {Object.keys(HOBBY_DATA).map(name => (
                <button key={name} onClick={() => setSelectedHobby(name)}
                  style={{ background: selectedHobby === name ? `${COLORS.accent}20` : COLORS.card, border: `1px solid ${selectedHobby === name ? COLORS.accent : COLORS.border}`, borderRadius: 10, padding: "10px 8px", cursor: "pointer", textAlign: "center", fontFamily: "inherit", color: COLORS.text, boxShadow: selectedHobby === name ? `0 0 8px ${COLORS.accent}30` : "none" }}
                >
                  <div style={{ fontSize: 20 }}>{HOBBY_DATA[name].emoji}</div>
                  <div style={{ fontSize: 10, fontWeight: 700, marginTop: 4, lineHeight: 1.3 }}>{name}</div>
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <Btn onClick={() => { onAdd(addingSlot.dateKey, addingSlot.slot, selectedHobby); setAddingSlot(null); }} style={{ flex: 1 }}>Add to Calendar</Btn>
              <Btn onClick={() => setAddingSlot(null)} variant="ghost">Cancel</Btn>
            </div>
          </div>
        </div>
      )}
    </Wrap>
  );
}

// ── WEEKLY CHALLENGES ─────────────────────────────────────────────────────────

const WEEKLY_CHALLENGES = {
  "Rock Climbing": ["Complete a route one grade above your current level", "Work on a problem you've failed 3+ times", "Practice falling safely — take 10 deliberate falls", "Climb for 90 minutes without checking your phone", "Try a different wall style: slab, overhang, or crack"],
  "Bouldering": ["Send a V-grade above your usual", "Spend 30 min on one problem you can't crack yet", "Try 5 new problems you've never attempted", "Focus only on footwork today — no sloppy feet", "Climb with someone more experienced and watch their beta"],
  "Trail Running": ["Run a route with 500ft more elevation than usual", "Do a 20-min easy run focusing only on breathing", "Find a new trail you've never been on", "Run the last mile of your route faster than the first", "Run without headphones — just you and the trail"],
  "Cold Water Swimming": ["Stay in 30 seconds longer than last time", "Try a new location — river, lake, or ocean", "Go in first thing in the morning before work", "Bring someone new along for their first dip", "Focus on controlled breathing for the first 60 seconds"],
  "Cycling": ["Add 5 miles to your usual route", "Tackle a climb you've been avoiding", "Ride at dawn or dusk this week", "Try a new road or trail you've never explored", "Hold a steady cadence of 90rpm for 20 minutes"],
  "Skateboarding": ["Land a trick you've been working on 10 times in a row", "Skate a spot you've never tried before", "Film yourself and watch it back — fix one thing", "Spend 30 min just working on balance and pushing", "Learn the first step of a new trick"],
  "Martial Arts": ["Drill one technique 50 times this week", "Spar with someone you find challenging", "Watch a fight or match and analyze the technique", "Work on your weakest position for a full session", "Practice your combinations in slow motion — perfect form"],
  "Yoga": ["Hold your weakest pose for 10 extra breaths", "Try a style of yoga you've never done", "Do a full session without any screens or music", "Practice first thing in the morning three days in a row", "Work on one pose you've been avoiding"],
  "Rowing / Kayaking": ["Paddle a route in the opposite direction", "Work on your stroke efficiency — fewer strokes, more distance", "Go out in conditions slightly outside your comfort zone", "Practice wet exits and re-entry if you haven't yet", "Explore a new body of water this week"],
  "Archery": ["Shoot 100 arrows focusing only on form, not score", "Move your target 5 yards further back", "Shoot with your non-dominant eye closed the whole session", "Perfect your anchor point — film it to check", "Try a new shooting stance this week"],
  "Ceramics": ["Throw 10 cylinders and keep the best one", "Try a new technique: carving, slipping, or stamping", "Make something functional you'll actually use", "Spend a session just wedging and centering — no throwing", "Attempt a shape you've never tried before"],
  "Urban Sketching": ["Sketch somewhere you've never drawn before", "Draw for 20 minutes without lifting your pen", "Focus on just people this week — no buildings", "Draw the same scene twice: once fast, once slow", "Sketch something moving — a bus, a crowd, traffic"],
  "Film Photography": ["Shoot a full roll with one single lens", "Develop your own film if you haven't yet", "Shoot only in low light this week", "Recreate a photo that inspired you", "Shoot street photography for an hour in one location"],
  "Watercolor Painting": ["Paint the same subject three times — different styles", "Use only 3 colors for an entire piece", "Paint outside this week — en plein air", "Try wet-on-wet technique for a full painting", "Paint something you find ugly and make it beautiful"],
  "Screenwriting": ["Write 5 pages without editing as you go", "Write a scene with no dialogue — action only", "Outline your entire story in one page", "Read a produced script in your genre", "Rewrite your weakest scene from scratch"],
  "Leatherworking": ["Complete a project start to finish this week", "Practice saddle stitching until it's perfectly even", "Try a new finish or dye technique", "Design something from scratch — no pattern", "Work on your most-avoided skill: cutting, tooling, or stitching"],
  "Candle Making": ["Experiment with a new fragrance combination", "Try a new wax type you haven't used", "Make a candle as a gift for someone", "Test three different wick sizes in identical containers", "Create a seasonal scent inspired by right now"],
  "Woodworking": ["Make clean cuts on 20 pieces — focus on precision", "Try a joinery method you've never used", "Build something small and give it away", "Spend a session just sharpening and maintaining your tools", "Design your next project from scratch on paper"],
  "Foraging": ["Identify 3 new species this week", "Cook a meal using only foraged ingredients", "Visit a new habitat — forest, meadow, or coastline", "Photograph everything you find and journal it", "Go out at a different time of day than usual"],
  "Birdwatching": ["Spot 5 species you haven't recorded before", "Spend 30 minutes in one spot without moving — just watching", "Go out at dawn during the dawn chorus", "Try birding by ear only — no binoculars", "Visit a new habitat this week"],
  "Hiking": ["Add 500ft more elevation than your usual hike", "Hike a trail rated harder than you normally attempt", "Go out in weather you'd normally skip", "Hike somewhere completely new this week", "Pack lighter than usual and see how it changes the experience"],
  "Surfing": ["Paddle out in slightly bigger waves than comfortable", "Focus an entire session on just paddling technique", "Try surfing at a new break", "Spend 15 minutes just sitting in the lineup and observing", "Work on your pop-up until it's instinct"],
  "Rock Pooling": ["Visit at the lowest tide of the month", "Sketch or photograph everything you find", "Try to identify every single species in one pool", "Visit a rock pool location you've never been to", "Research one creature you found and learn its full lifecycle"],
  "Stargazing": ["Find and identify a new constellation", "Stay out for at least 90 minutes — let your eyes fully adjust", "Sketch the moon's current phase", "Try to locate a planet with the naked eye", "Find a darker location than you usually use"],
  "Mountain Biking": ["Ride a trail rated above your usual", "Work on one technical skill: drops, jumps, or switchbacks", "Ride the same trail twice — try to be smoother the second time", "Go on a group ride with people faster than you", "Film a section and analyze your line choice"],
  "Thrifting": ["Visit a thrift store in a different neighborhood", "Set a $10 budget and find the best possible item", "Look for one specific item you've been hunting for", "Research resale value of 5 things you find", "Find something broken and figure out how to fix it"],
  "Sourdough Baking": ["Bake two loaves and compare the difference", "Try a new scoring pattern this week", "Make something other than bread with your starter — pancakes, crackers, or pizza", "Nail your timing: track your starter activity and bake at peak", "Try a higher hydration dough than you're used to"],
  "Homebrewing": ["Research and design your next recipe", "Taste your current batch and write detailed notes", "Visit a local craft brewery for inspiration", "Try a new hop variety or yeast strain", "Brew a style you've never attempted before"],
  "Hot Sauce Making": ["Ferment a new pepper variety you haven't tried", "Make a batch using only locally sourced peppers", "Experiment with a new flavor add-in: fruit, garlic, or herbs", "Blind taste test your sauces and rank them honestly", "Give a bottle to someone and get real feedback"],
  "Cheesemaking": ["Make a cheese you've never attempted", "Age a current cheese longer than usual", "Try a new culture or rennet type", "Make a savory addition: herbs, pepper, or ash", "Document your process start to finish with photos"],
  "Cocktail Crafting": ["Make 5 variations of one classic cocktail", "Create an original recipe using ingredients you already have", "Make a proper batch cocktail for a group", "Try a spirit you've never worked with before", "Focus on garnish and presentation this week"],
  "Improv Comedy": ["Say yes to every scene offer this week — no blocking", "Try a new character type you've never played", "Do a solo improv session — monologue for 5 minutes", "Watch a professional improv show and take notes", "Play a game you find difficult until it clicks"],
  "Stand-Up Comedy": ["Write 10 new jokes this week — no editing", "Perform at an open mic even if the material isn't ready", "Rewrite your weakest joke three different ways", "Record yourself and watch it back fully", "Find the funniest thing that happened to you this month and mine it"],

  "Swing Dancing": ["Learn one new move and practice it until it's smooth", "Go to a social dance and ask someone new to dance", "Practice the same 8-count for 20 minutes straight", "Watch a performance and note three things to steal", "Dance to music you'd never normally choose"],
  "Amateur Radio": ["Make contact with someone in a new country or state", "Learn and practice one new operating mode", "Build or repair a piece of equipment", "Participate in a net or contest this week", "Teach someone else something you know about radio"],
  "Electronics / Arduino": ["Complete one project you've been putting off", "Learn one new component you've never used", "Write cleaner code for a project you've already built", "Find a problem in your home and solve it with electronics", "Join an online build challenge or hackathon"],
  "3D Printing": ["Design something original — no downloaded models", "Dial in your print settings for a new filament", "Print something actually useful for your daily life", "Fix a failed print by diagnosing the problem", "Try a print with supports and post-process it cleanly"],
  "Knitting / Crochet": ["Complete a project you've been procrastinating on", "Learn one new stitch or technique", "Knit for 20 minutes every day this week", "Start something ambitious that intimidates you slightly", "Frog something that isn't working and start fresh — bravely"],
  "Bookbinding": ["Complete a journal you can actually use", "Try a new binding style you haven't attempted", "Source unusual materials — old fabric, found paper, unusual covers", "Make a book as a gift for someone specific", "Document your process and note what to improve next time"],
  "Embroidery": ["Complete a piece start to finish this week", "Learn two new stitches and use both in one piece", "Embroider something on clothing you already own", "Work freehand — no pattern or transfer", "Practice one stitch 100 times until it's perfect"],
  "DJing": ["Mix for 60 minutes without stopping", "Learn a new technique: looping, effects, or scratching", "Build a set around a specific mood or story", "Record a mix and listen back critically", "Learn three new tracks you wouldn't normally play"],
  "Guitar": ["Learn a full song start to finish this week", "Practice the part you always skip or rush", "Play along with a recording and match the feel", "Learn a chord or scale you've been avoiding", "Record yourself playing and listen back without cringing — improve one thing"],
  "Music Production": ["Finish a beat you started and abandoned", "Make something using only 5 sounds", "Sample something from real life and build a track around it", "Collaborate with someone or get feedback on a track", "Study the structure of a song you love and reverse-engineer it"],
  "Singing / Vocal Training": ["Warm up every single day this week — no skipping", "Record yourself singing and identify one thing to fix", "Learn a song in a different language", "Sing in front of at least one other person", "Work on your break — practice bridging through it"],
  "Chess": ["Analyze all your losses from this week — find the pattern", "Study one opening properly: theory, traps, and responses", "Play a longer time control than you're used to", "Solve 20 tactics puzzles in one session", "Play someone rated higher than you and focus on learning, not winning"],
  "Language Learning": ["Have a 10-minute conversation with a native speaker", "Watch a show in your target language without subtitles for 20 min", "Learn 30 new vocabulary words using spaced repetition", "Write a short paragraph in your target language", "Think in your target language for one hour today"],
  "Journaling": ["Write 3 pages without stopping or editing", "Write a letter to your future self one year from now", "Journal about something you've been avoiding thinking about", "Write about your best and worst moment from this week", "Try a new format: bullet points, mind map, or stream of consciousness"],
  "Astronomy / Astrophotography": ["Image a target you've never photographed before", "Go out on the next clear night regardless of how tired you are", "Process an old image with new techniques", "Learn one new thing about an object you've already photographed", "Share an image with an astronomy community and ask for feedback"],
  "Puzzle Design": ["Design one complete puzzle from scratch", "Playtest your puzzle with someone and watch them solve it silently", "Solve 5 escape rooms or puzzles for inspiration", "Redesign a puzzle that got negative feedback", "Create a puzzle with a hidden layer — something solvers only notice on reflection"],
  "Dungeons & Dragons": ["Write a detailed NPC that could derail your players' plans", "Run a session with a clear dramatic question to answer", "Let your players surprise you — improvise something fully", "Read a module or sourcebook outside your usual style", "Write a one-paragraph world-building piece just for yourself"],
  "Warhammer 40K": ["Paint 10 models to tabletop standard this week", "Try a new painting technique on one test model", "Play a game with a list you've never tried", "Build and base a unit you've been avoiding", "Watch a battle report of your army and steal one tactic"],
  "Trading Card Games": ["Build and test a budget deck you've never played before", "Attend a local game store event this week", "Trade or acquire one card you've been missing", "Watch a tournament match and analyze the decisions", "Teach someone who's never played before"],
  "Board Games": ["Play a game you own but haven't played yet", "Introduce a new person to your favorite game", "Try a solo game or solo mode", "Play the same game twice in a row — see how your strategy evolves", "Find a game night near you and go"],
  "Video Gaming": ["Finish a game you've abandoned", "Try a genre you'd normally skip", "Play with someone else — co-op or competitive", "Play a classic from 10+ years ago", "Complete a challenge or achievement you've been avoiding"],
  "Miniature Painting": ["Paint one mini to your absolute best standard", "Try a new technique: nmm, object source lighting, or weathering", "Paint something you wouldn't normally attempt", "Watch a tutorial and immediately apply the technique", "Base and finish every mini on your desk — clear the backlog"],
  "Retro Gaming / Collecting": ["Play a game in your collection you've never finished", "Visit a thrift store or flea market specifically for games", "Research the history of one game or console you own", "Clean and restore a piece of hardware in your collection", "Find someone to trade with — build your collection differently"],
  "Game Development": ["Build one mechanic completely — no half-finished features", "Playtest your game with someone outside your household", "Fix your oldest and most-avoided bug", "Add juice to something boring: screen shake, sound, particles", "Write the GDD (game design document) for your next idea"],
  "Tabletop Wargaming": ["Play a game and write a battle report afterwards", "Paint an entire unit to a consistent standard", "Try a new faction or army you've never played", "Build a piece of terrain from scratch", "Watch a tournament game and study one player's decision-making"],
  "Escape Rooms": ["Book a room rated harder than you'd normally choose", "Debrief properly after — what did you miss and why?", "Try an online escape room as a warmup", "Design a simple puzzle for a friend to solve", "Research the game master's perspective on your last room"],
};

function getChallenge(hobby) {
  const challenges = WEEKLY_CHALLENGES[hobby];
  if (!challenges) return null;
  const weekNum = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 7));
  return challenges[weekNum % challenges.length];
}

// ── CHECKIN SCREEN ────────────────────────────────────────────────────────────

function CheckIn({ schedule, checkIns, onCheckIn, onBack }) {
  const today = new Date();
  const todayKey = today.toISOString().split("T")[0];
  // Get hobbies scheduled for today using the date key
  const todayHobbies = [...new Set(Object.values(schedule[todayKey] || {}))].filter(Boolean);

  function getStreak(hobby) {
    let streak = 0;
    const d = new Date();
    for (let i = 0; i < 60; i++) {
      const key = d.toISOString().split("T")[0];
      if (checkIns[hobby]?.[key] === true) { streak++; }
      else if (i > 0) break;
      d.setDate(d.getDate() - 1);
    }
    return streak;
  }

  function getTotalSessions(hobby) {
    return Object.values(checkIns[hobby] || {}).filter(Boolean).length;
  }

  // All hobbies ever scheduled
  const allScheduledHobbies = [...new Set(
    Object.values(schedule).flatMap(day => Object.values(day))
  )].filter(Boolean);

  return (
    <Wrap>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "40px 24px" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: COLORS.textSoft, cursor: "pointer", fontSize: 14, marginBottom: 24, padding: 0, fontFamily: "inherit" }}>← Back</button>

        <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: -1, marginBottom: 6 }}>✅ Check In</h2>
        <p style={{ color: COLORS.textSoft, marginBottom: 32 }}>
          {today.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
        </p>

        {/* Today's scheduled hobbies */}
        {todayHobbies.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontWeight: 800, fontSize: 13, color: COLORS.accent, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>Scheduled Today</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {todayHobbies.map(hobby => {
                const done = checkIns[hobby]?.[todayKey] === true;
                const skipped = checkIns[hobby]?.[todayKey] === false;
                const streak = getStreak(hobby);
                return (
                  <div key={hobby} style={{ background: COLORS.card, border: `1px solid ${done ? COLORS.accent : skipped ? COLORS.muted : COLORS.border}`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{ fontSize: 32, flexShrink: 0 }}>{HOBBY_DATA[hobby]?.emoji}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 16 }}>{hobby}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 4 }}>
                        {streak > 0 && <span style={{ fontSize: 12, color: COLORS.orange, fontWeight: 800, textShadow: `0 0 8px ${COLORS.orange}60` }}>🔥 {streak} day streak</span>}
                        <span style={{ fontSize: 12, color: COLORS.muted }}>{getTotalSessions(hobby)} total sessions</span>
                      </div>
                    </div>
                    {!done && !skipped ? (
                      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                        <button onClick={() => onCheckIn(hobby, todayKey, true)} style={{ background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.teal}80)`, color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontWeight: 800, fontSize: 13, fontFamily: "inherit", boxShadow: `0 0 12px ${COLORS.accent}40` }}>Did it ✓</button>
                        <button onClick={() => onCheckIn(hobby, todayKey, false)} style={{ background: COLORS.surface, color: COLORS.muted, border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontWeight: 700, fontSize: 13, fontFamily: "inherit" }}>Skip</button>
                      </div>
                    ) : (
                      <div style={{ fontSize: 24, flexShrink: 0 }}>{done ? "✅" : "⏭️"}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {todayHobbies.length === 0 && (
          <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 28, marginBottom: 32, textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>📅</div>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Nothing scheduled today</div>
            <div style={{ color: COLORS.textSoft, fontSize: 14 }}>Head to the Schedule tab to add hobbies to today.</div>
          </div>
        )}

        {/* Streak overview for all hobbies */}
        {allScheduledHobbies.length > 0 && (
          <div>
            <div style={{ fontWeight: 800, fontSize: 13, color: COLORS.accent, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>All Hobby Streaks</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 12 }}>
              {allScheduledHobbies.map(hobby => {
                const streak = getStreak(hobby);
                const total = getTotalSessions(hobby);
                return (
                  <div key={hobby} style={{ background: COLORS.card, border: `1px solid ${streak > 0 ? COLORS.orange + "60" : COLORS.border}`, borderRadius: 12, padding: "16px", textAlign: "center" }}>
                    <div style={{ fontSize: 28, marginBottom: 6 }}>{HOBBY_DATA[hobby]?.emoji}</div>
                    <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>{hobby}</div>
                    <div style={{ fontSize: 20, fontWeight: 900, color: streak > 0 ? COLORS.orange : COLORS.muted }}>{streak > 0 ? `🔥 ${streak}` : "–"}</div>
                    <div style={{ fontSize: 10, color: COLORS.muted, marginTop: 2 }}>{total} sessions total</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Wrap>
  );
}

// ── PROGRESS JOURNAL ──────────────────────────────────────────────────────────

function Journal({ schedule, journal, onSaveEntry, onBack }) {
  const allHobbies = [...new Set(
    Object.values(schedule).flatMap(day => Object.values(day))
  )].filter(Boolean);

  const [selectedHobby, setSelectedHobby] = useState(allHobbies[0] || null);
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);

  const entries = selectedHobby ? (journal[selectedHobby] || []) : [];

  function save() {
    if (!text.trim() || !selectedHobby) return;
    onSaveEntry(selectedHobby, { text: text.trim(), date: new Date().toISOString() });
    setText("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <Wrap>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "40px 24px" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: COLORS.textSoft, cursor: "pointer", fontSize: 14, marginBottom: 24, padding: 0, fontFamily: "inherit" }}>← Back</button>

        <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: -1, marginBottom: 6 }}>📓 Progress Journal</h2>
        <p style={{ color: COLORS.textSoft, marginBottom: 32 }}>Track how your hobbies are feeling over time.</p>

        {allHobbies.length === 0 ? (
          <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 28, textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>📅</div>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>No hobbies scheduled yet</div>
            <div style={{ color: COLORS.textSoft, fontSize: 14 }}>Add hobbies to your schedule first, then journal about them here.</div>
          </div>
        ) : (
          <>
            {/* Hobby selector */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              {allHobbies.map(h => (
                <button key={h} onClick={() => setSelectedHobby(h)} style={{ background: selectedHobby === h ? `${COLORS.accent}20` : COLORS.card, border: `1px solid ${selectedHobby === h ? COLORS.accent : COLORS.border}`, borderRadius: 99, padding: "8px 16px", cursor: "pointer", fontWeight: 700, fontSize: 13, fontFamily: "inherit", color: selectedHobby === h ? COLORS.accent : COLORS.textSoft, display: "flex", alignItems: "center", gap: 6 }}>
                  {HOBBY_DATA[h]?.emoji} {h}
                </button>
              ))}
            </div>

            {/* New entry */}
            {selectedHobby && (
              <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 24, marginBottom: 28 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: COLORS.textSoft, marginBottom: 12 }}>
                  {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                </div>
                <textarea
                  value={text}
                  onChange={e => setText(e.target.value)}
                  placeholder={`How did ${selectedHobby} go today? What did you work on? How did it feel?`}
                  style={{ width: "100%", minHeight: 120, background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 10, padding: "14px 16px", color: COLORS.text, fontSize: 15, fontFamily: "inherit", resize: "vertical", outline: "none", boxSizing: "border-box", lineHeight: 1.6 }}
                />
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
                  <button onClick={save} style={{ background: saved ? COLORS.teal : COLORS.accent, color: saved ? '#000' : '#fff', boxShadow: `0 0 12px ${saved ? COLORS.teal : COLORS.accent}40`, border: "none", borderRadius: 8, padding: "10px 24px", cursor: "pointer", fontWeight: 800, fontSize: 14, fontFamily: "inherit", transition: "all 0.2s" }}>
                    {saved ? "Saved ✓" : "Save Entry"}
                  </button>
                </div>
              </div>
            )}

            {/* Past entries */}
            {entries.length > 0 && (
              <div>
                <div style={{ fontWeight: 800, fontSize: 13, color: COLORS.accent, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>Past Entries — {selectedHobby}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[...entries].reverse().map((entry, i) => (
                    <div key={i} style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: "18px 20px" }}>
                      <div style={{ fontSize: 11, color: COLORS.muted, fontWeight: 600, marginBottom: 8 }}>
                        {new Date(entry.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" })}
                      </div>
                      <div style={{ fontSize: 14, color: COLORS.textSoft, lineHeight: 1.7 }}>{entry.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {entries.length === 0 && selectedHobby && (
              <div style={{ textAlign: "center", color: COLORS.muted, fontSize: 14, padding: "20px 0" }}>No entries yet for {selectedHobby}. Write your first one above.</div>
            )}
          </>
        )}
      </div>
    </Wrap>
  );
}

// ── THIS WEEK SCREEN (challenges + rotation suggestions + monthly check-in) ───

function ThisWeek({ schedule, checkIns, onRetakeQuiz, onBack, sessionCount }) {
  const allHobbies = [...new Set(
    Object.values(schedule).flatMap(day => Object.values(day))
  )].filter(Boolean);

  // Rotation suggestions — find hobbies not scheduled recently
  // Count how many times each hobby appears this week
  const today2 = new Date();
  const weekStart = new Date(today2); weekStart.setDate(today2.getDate() - today2.getDay());
  const weekEnd = new Date(weekStart); weekEnd.setDate(weekStart.getDate() + 6);
  const dayCounts = {};
  allHobbies.forEach(h => { dayCounts[h] = 0; });
  Object.entries(schedule).forEach(([dk, slots]) => {
    const d = new Date(dk);
    if (d >= weekStart && d <= weekEnd) {
      Object.values(slots).forEach(h => { if (h) dayCounts[h] = (dayCounts[h] || 0) + 1; });
    }
  });

  const overScheduled = allHobbies.filter(h => dayCounts[h] >= 3);
  const underScheduled = allHobbies.filter(h => dayCounts[h] === 1);

  // Monthly check-in — show if user has 8+ total sessions
  const totalSessions = Object.values(checkIns).reduce((acc, hobbyCheckins) => acc + Object.values(hobbyCheckins).filter(Boolean).length, 0);
  const showMonthlyCheckIn = totalSessions >= 8;

  // This week's stats
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  const thisWeekSessions = Object.entries(checkIns).reduce((acc, [hobby, days]) => {
    const count = Object.entries(days).filter(([date, done]) => done && new Date(date) >= weekAgo).length;
    return acc + count;
  }, 0);

  return (
    <Wrap>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "40px 24px" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: COLORS.textSoft, cursor: "pointer", fontSize: 14, marginBottom: 24, padding: 0, fontFamily: "inherit" }}>← Back</button>

        <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: -1, marginBottom: 6 }}>🎯 This Week</h2>
        <p style={{ color: COLORS.textSoft, marginBottom: 32 }}>Challenges, suggestions, and your momentum.</p>

        {/* Week stat */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
          <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 20, textAlign: "center" }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: COLORS.accent, textShadow: `0 0 16px ${COLORS.accent}60` }}>{thisWeekSessions}</div>
            <div style={{ fontSize: 13, color: COLORS.textSoft, marginTop: 4 }}>sessions this week</div>
          </div>
          <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 20, textAlign: "center" }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: COLORS.teal, textShadow: `0 0 16px ${COLORS.teal}60` }}>{totalSessions}</div>
            <div style={{ fontSize: 13, color: COLORS.textSoft, marginTop: 4 }}>total sessions ever</div>
          </div>
        </div>

        {/* Weekly challenges */}
        {allHobbies.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontWeight: 800, fontSize: 13, color: COLORS.accent, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>This Week's Challenges</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {allHobbies.map(hobby => {
                const challenge = getChallenge(hobby);
                if (!challenge) return null;
                return (
                  <div key={hobby} style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 28, flexShrink: 0 }}>{HOBBY_DATA[hobby]?.emoji}</span>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{hobby}</div>
                      <div style={{ fontSize: 14, color: COLORS.textSoft, lineHeight: 1.6 }}>{challenge}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Rotation suggestions */}
        {(overScheduled.length > 0 || underScheduled.length > 0) && (
          <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 24, marginBottom: 32 }}>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 16 }}>🔄 Rotation Suggestions</div>
            {overScheduled.map(h => (
              <div key={h} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 20 }}>{HOBBY_DATA[h]?.emoji}</span>
                <div style={{ fontSize: 14, color: COLORS.textSoft }}>
                  <strong style={{ color: COLORS.text }}>{h}</strong> is scheduled {dayCounts[h]}x this week — consider spreading it out to make room for other hobbies.
                </div>
              </div>
            ))}
            {underScheduled.map(h => (
              <div key={h} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 20 }}>{HOBBY_DATA[h]?.emoji}</span>
                <div style={{ fontSize: 14, color: COLORS.textSoft }}>
                  <strong style={{ color: COLORS.text }}>{h}</strong> only appears once this week — want to add another session?
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Monthly check-in */}
        {showMonthlyCheckIn && (
          <div style={{ background: `${COLORS.accent}12`, border: `1px solid ${COLORS.accent}40`, borderRadius: 14, padding: 24 }}>
            <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>🌱 Time for a Check-In</div>
            <div style={{ fontSize: 14, color: COLORS.textSoft, lineHeight: 1.7, marginBottom: 20 }}>
              You've logged {totalSessions} sessions — nice work. Have your interests shifted? Retake the quiz to refresh your hobby matches and discover something new.
            </div>
            <button onClick={onRetakeQuiz} style={{ background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.teal}80)`, color: "#fff", border: "none", borderRadius: 8, padding: "12px 24px", cursor: "pointer", fontWeight: 800, fontSize: 14, fontFamily: "inherit", boxShadow: `0 0 16px ${COLORS.accent}40` }}>
              Retake the Quiz →
            </button>
          </div>
        )}

        {allHobbies.length === 0 && (
          <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 28, textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>📅</div>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>No hobbies scheduled yet</div>
            <div style={{ color: COLORS.textSoft, fontSize: 14 }}>Add hobbies to your schedule to unlock weekly challenges and suggestions.</div>
          </div>
        )}
      </div>
    </Wrap>
  );
}

// ── NAV ───────────────────────────────────────────────────────────────────────

function Nav({ screen, onNavigate, quizDone, onReset }) {
  const tabs = [
    { id: "results", label: "Matches", icon: "✨", disabled: !quizDone },
    { id: "browse", label: "Explore", icon: "🔍" },
    { id: "calendar", label: "Schedule", icon: "📅" },
    { id: "checkin", label: "Check In", icon: "✅" },
    { id: "thisweek", label: "This Week", icon: "🎯" },
    { id: "journal", label: "Journal", icon: "📓" },
  ];
  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: `${COLORS.surface}F0`, backdropFilter: "blur(20px)", borderTop: `1px solid ${COLORS.borderBright}`, zIndex: 50, boxShadow: `0 -4px 24px ${COLORS.bg}80` }}>
      <div style={{ display: "flex", justifyContent: "space-around", padding: "10px 0 10px" }}>
        {tabs.map(t => (
          <button key={t.id} disabled={t.disabled} onClick={() => !t.disabled && onNavigate(t.id)}
            style={{ background: "none", border: "none", cursor: t.disabled ? "default" : "pointer", color: screen === t.id ? COLORS.accent : t.disabled ? COLORS.muted : COLORS.textSoft, fontFamily: "inherit", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, opacity: t.disabled ? 0.4 : 1, padding: "0 4px", filter: screen === t.id ? `drop-shadow(0 0 6px ${COLORS.accent}80)` : "none", transition: "all 0.2s" }}
          >
            <span style={{ fontSize: 18 }}>{t.icon}</span>
            <span style={{ fontSize: 9, fontWeight: 700 }}>{t.label}</span>
          </button>
        ))}
      </div>
      <div style={{ textAlign: "center", paddingBottom: 10 }}>
        <button onClick={onReset} style={{ background: "none", border: "none", color: COLORS.muted, fontSize: 10, cursor: "pointer", fontFamily: "inherit" }}>
          Reset & start over
        </button>
      </div>
    </div>
  );
}

// ── APP ROOT ──────────────────────────────────────────────────────────────────

// Persists state to localStorage automatically — drop-in replacement for useState
function usePersistentState(key, defaultValue) {
  const [state, setState] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  function setPersistentState(value) {
    setState(prev => {
      const next = typeof value === "function" ? value(prev) : value;
      try { localStorage.setItem(key, JSON.stringify(next)); } catch {}
      return next;
    });
  }

  return [state, setPersistentState];
}

export default function App() {
  const [screen, setScreen] = useState(() => {
    try {
      const done = localStorage.getItem("hb_quizDone");
      const onboarded = localStorage.getItem("hb_onboardingDone");
      if (done === "true" && onboarded === "true") return "results";
      if (done === "true") return "onboarding";
      return "landing";
    } catch { return "landing"; }
  });
  const [detailHobby, setDetailHobby] = useState(null);
  const [prevScreen, setPrevScreen] = useState(null);
  const [calendarPreselect, setCalendarPreselect] = useState(null);

  // Everything below persists across sessions
  const [matches, setMatches] = usePersistentState("hb_matches", []);
  const [quizDone, setQuizDone] = usePersistentState("hb_quizDone", false);
  const [onboardingDone, setOnboardingDone] = usePersistentState("hb_onboardingDone", false);
  const [schedule, setSchedule] = usePersistentState("hb_schedule", {});
  const [checkIns, setCheckIns] = usePersistentState("hb_checkIns", {});
  const [journal, setJournal] = usePersistentState("hb_journal", {});

  function go(s) { setPrevScreen(screen); setScreen(s); }

  function handleQuizComplete(answers) {
    setMatches(matchHobbies(answers));
    setQuizDone(true);
    setScreen("onboarding");
  }

  function handleOnboardingDone() {
    setOnboardingDone(true);
    setScreen("results");
  }

  function handleRetakeQuiz() {
    setQuizDone(false);
    setOnboardingDone(false);
    setScreen("quiz");
  }

  function handleExplore(name) { setDetailHobby(name); setPrevScreen(screen); setScreen("detail"); }
  function addToSchedule(day, slot, hobby) { setSchedule(prev => ({ ...prev, [day]: { ...(prev[day] || {}), [slot]: hobby } })); }
  function removeFromSchedule(day, slot) { setSchedule(prev => { const u = { ...prev, [day]: { ...(prev[day] || {}) } }; delete u[day][slot]; return u; }); }

  function handleAddToCalendar(hobbyName) {
    setCalendarPreselect(hobbyName);
    go("calendar");
  }

  function handleCheckIn(hobby, dateKey, done) {
    setCheckIns(prev => ({ ...prev, [hobby]: { ...(prev[hobby] || {}), [dateKey]: done } }));
  }

  function handleSaveJournalEntry(hobby, entry) {
    setJournal(prev => ({ ...prev, [hobby]: [...(prev[hobby] || []), entry] }));
  }

  function handleReset() {
    if (!window.confirm("Reset everything and start fresh?")) return;
    ["hb_matches","hb_quizDone","hb_onboardingDone","hb_schedule","hb_checkIns","hb_journal"].forEach(k => localStorage.removeItem(k));
    setMatches([]); setQuizDone(false); setOnboardingDone(false); setSchedule({}); setCheckIns({}); setJournal({});
    setScreen("landing");
  }

  const showNav = !["landing", "quiz", "onboarding", "detail"].includes(screen);

  return (
    <div style={{ paddingBottom: showNav ? 90 : 0 }}>
      {screen === "landing" && <Landing onStart={() => go("quiz")} />}
      {screen === "quiz" && <Quiz onComplete={handleQuizComplete} />}
      {screen === "onboarding" && <Onboarding matches={matches} onDone={handleOnboardingDone} onExploreHobby={name => { setDetailHobby(name); setPrevScreen("onboarding"); setScreen("detail"); }} />}
      {screen === "results" && <Results matches={matches} onExplore={handleExplore} onSkip={() => go("browse")} />}
      {screen === "browse" && <BrowseAll onSelect={handleExplore} onBack={() => go(prevScreen || "landing")} />}
      {screen === "detail" && detailHobby && <HobbyDetail name={detailHobby} onBack={() => go(prevScreen || "browse")} onAddToCalendar={handleAddToCalendar} />}
      {screen === "calendar" && <Calendar schedule={schedule} onAdd={(day, slot, hobby) => { addToSchedule(day, slot, hobby); setCalendarPreselect(null); }} onRemove={removeFromSchedule} onBack={() => { setCalendarPreselect(null); go(prevScreen || "browse"); }} preselectedHobby={calendarPreselect} />}
      {screen === "checkin" && <CheckIn schedule={schedule} checkIns={checkIns} onCheckIn={handleCheckIn} onBack={() => go(prevScreen || "calendar")} />}
      {screen === "journal" && <Journal schedule={schedule} journal={journal} onSaveEntry={handleSaveJournalEntry} onBack={() => go(prevScreen || "checkin")} />}
      {screen === "thisweek" && <ThisWeek schedule={schedule} checkIns={checkIns} onRetakeQuiz={handleRetakeQuiz} onBack={() => go(prevScreen || "checkin")} />}
      {showNav && <Nav screen={screen} onNavigate={go} quizDone={quizDone} onReset={handleReset} />}
    </div>
  );
}
