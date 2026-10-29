// =========================================================================
// FLOWPLAN PETS SYSTEM (SANCTUARY, PLAYGROUND, 3D WANDERING, SHOP & LIFE STAGES)
// =========================================================================

const PET_FOODS_CATALOG = {
  '001-carrot': {
    id: '001-carrot',
    name: 'Crispy Carrot',
    icon: 'assets/Icons/png/001-carrot.png',
    price: 1,
    pets: ['bunny', 'beaver'],
    description: 'Sweet, vitamin-rich garden root beloved by burrowers.'
  },
  '002-cabbage': {
    id: '002-cabbage',
    name: 'Crisp Cabbage',
    icon: 'assets/Icons/png/002-cabbage.png',
    price: 1,
    pets: ['cow', 'caterpillar'],
    description: 'Fresh leafy greens packed with hydration and crunch.'
  },
  '003-corn': {
    id: '003-corn',
    name: 'Golden Sweetcorn',
    icon: 'assets/Icons/png/003-corn.png',
    price: 1,
    pets: ['chick'],
    description: 'Sun-ripened golden kernels that chicks eagerly peck.'
  },
  '004-sesame': {
    id: '004-sesame',
    name: 'Nutritious Seeds',
    icon: 'assets/Icons/png/004-sesame.png',
    price: 1,
    pets: ['parrot'],
    description: 'Toasted seeds rich in essential oils and energy.'
  },
  '005-meat': {
    id: '005-meat',
    name: 'Prime Meat Cut',
    icon: 'assets/Icons/png/005-meat.png',
    price: 2,
    pets: ['lion', 'tiger', 'dog', 'fox'],
    description: 'Savory protein cut giving strength and high spirits.'
  },
  '006-fish': {
    id: '006-fish',
    name: 'Fresh Golden Trout',
    icon: 'assets/Icons/png/006-fish.png',
    price: 2,
    pets: ['cat', 'penguin', 'polar'],
    description: 'Stream-fresh trout shimmering with healthy omega oils.'
  },
  '007-bamboo': {
    id: '007-bamboo',
    name: 'Tender Bamboo Shoot',
    icon: 'assets/Icons/png/007-bamboo.png',
    price: 2,
    pets: ['panda'],
    description: 'Sweet highland bamboo stalks loved by gentle giants.'
  },
  '008-eucalyptus': {
    id: '008-eucalyptus',
    name: 'Eucalyptus Leaves',
    icon: 'assets/Icons/png/008-eucalyptus.png',
    price: 2,
    pets: ['koala', 'giraffe'],
    description: 'Fragrant aromatic leaves providing cozy nourishment.'
  },
  '009-banana': {
    id: '009-banana',
    name: 'Sweet Yellow Banana',
    icon: 'assets/Icons/png/009-banana.png',
    price: 2,
    pets: ['monkey'],
    description: 'Creamy potassium-rich tropical fruit full of fun.'
  },
  '010-honey': {
    id: '010-honey',
    name: 'Wild Honeycomb Jar',
    icon: 'assets/Icons/png/010-honey.png',
    price: 2,
    pets: ['bee'],
    description: 'Pure golden forest nectar dripping with natural sweetness.'
  },
  '011-peanuts': {
    id: '011-peanuts',
    name: 'Roasted Peanuts',
    icon: 'assets/Icons/png/011-peanuts.png',
    price: 2,
    pets: ['elephant'],
    description: 'Crunchy roasted nuts that make playful trunks dance.'
  },
  '012-acorn': {
    id: '012-acorn',
    name: 'Woodland Oak Acorn',
    icon: 'assets/Icons/png/012-acorn.png',
    price: 2,
    pets: ['deer', 'hog'],
    description: 'Nutritious autumn forest nut with a wholesome earthy flavor.'
  },
  '013-algae': {
    id: '013-algae',
    name: 'Crisp Sea Grass',
    icon: 'assets/Icons/png/013-algae.png',
    price: 2,
    pets: ['fish', 'crab'],
    description: 'Mineral-rich marine greens providing deep stamina.'
  },
  '014-melon': {
    id: '014-melon',
    name: 'Juicy Sweet Melon',
    icon: 'assets/Icons/png/014-melon.png',
    price: 2,
    pets: ['pig'],
    description: 'Refreshing slice of summer melon with crisp sweet juice.'
  },
  '015-berries': {
    id: '015-berries',
    name: 'Wild Gourmet Berries',
    icon: 'assets/Icons/png/015-berries.png',
    price: 3,
    pets: ['all'],
    description: 'Rare handpicked forest berries that every animal adores.'
  }
};

const PET_SPECIES_CATALOG = {
  beaver: {
    id: 'beaver',
    name: 'Beaver',
    defaultNickname: 'Chippy',
    favoriteFood: '001-carrot',
    tagline: 'Industrious builder who takes pride in great craftsmanship.',
    scaleBase: 1.0
  },
  bee: {
    id: 'bee',
    name: 'Honey Bee',
    defaultNickname: 'Buzzy',
    favoriteFood: '010-honey',
    tagline: 'Hardworking pollinator humming with sweet energy.',
    scaleBase: 0.85
  },
  bunny: {
    id: 'bunny',
    name: 'Bunny',
    defaultNickname: 'Pip',
    favoriteFood: '001-carrot',
    tagline: 'Energetic hopper with twitching whiskers and boundless joy.',
    scaleBase: 0.9
  },
  cat: {
    id: 'cat',
    name: 'Cat',
    defaultNickname: 'Mochi',
    favoriteFood: '006-fish',
    tagline: 'Elegant feline whose purrs bring serene calm to focus sessions.',
    scaleBase: 0.95
  },
  caterpillar: {
    id: 'caterpillar',
    name: 'Caterpillar',
    defaultNickname: 'Wiggle',
    favoriteFood: '002-cabbage',
    tagline: 'Tiny green wanderer munching happily on crisp leafy greens.',
    scaleBase: 0.85
  },
  chick: {
    id: 'chick',
    name: 'Chick',
    defaultNickname: 'Peep',
    favoriteFood: '003-corn',
    tagline: 'Fluffy yellow hatchling pecking eagerly at golden corn.',
    scaleBase: 0.85
  },
  cow: {
    id: 'cow',
    name: 'Pasture Cow',
    defaultNickname: 'Bessie',
    favoriteFood: '002-cabbage',
    tagline: 'Gentle grazing companion bringing tranquil grounding vibes.',
    scaleBase: 1.1
  },
  crab: {
    id: 'crab',
    name: 'Crab',
    defaultNickname: 'Claws',
    favoriteFood: '013-algae',
    tagline: 'Playful beach dweller with snappy claws and tidal cheer.',
    scaleBase: 0.9
  },
  deer: {
    id: 'deer',
    name: 'Forest Deer',
    defaultNickname: 'Fawn',
    favoriteFood: '012-acorn',
    tagline: 'Graceful forest wanderer with gentle eyes and soft steps.',
    scaleBase: 1.05
  },
  dog: {
    id: 'dog',
    name: 'Faithful Dog',
    defaultNickname: 'Barnaby',
    favoriteFood: '005-meat',
    tagline: 'Devoted best friend always wagging their tail right beside you.',
    scaleBase: 1.0
  },
  elephant: {
    id: 'elephant',
    name: 'Elephant',
    defaultNickname: 'Peanut',
    favoriteFood: '011-peanuts',
    tagline: 'Wise gentle giant who never forgets your productivity streaks.',
    scaleBase: 1.25
  },
  fish: {
    id: 'fish',
    name: 'River Fish',
    defaultNickname: 'Finny',
    favoriteFood: '013-algae',
    tagline: 'Gleaming swimmer gliding peacefully through cool clear waters.',
    scaleBase: 0.85
  },
  fox: {
    id: 'fox',
    name: 'Red Fox',
    defaultNickname: 'Rusty',
    favoriteFood: '005-meat',
    tagline: 'Clever woodland kit with a bushy tail and curious golden gaze.',
    scaleBase: 1.0
  },
  giraffe: {
    id: 'giraffe',
    name: 'Giraffe',
    defaultNickname: 'Stretch',
    favoriteFood: '008-eucalyptus',
    tagline: 'Towering gentle giant who reaches for high treetops and big goals.',
    scaleBase: 1.3
  },
  hog: {
    id: 'hog',
    name: 'Wild Hog',
    defaultNickname: 'Bristle',
    favoriteFood: '012-acorn',
    tagline: 'Sturdy woodland forager with a super nose for buried treats.',
    scaleBase: 1.05
  },
  koala: {
    id: 'koala',
    name: 'Koala',
    defaultNickname: 'Koko',
    favoriteFood: '008-eucalyptus',
    tagline: 'Peaceful treetop dreamer hugging branches through the day.',
    scaleBase: 0.95
  },
  lion: {
    id: 'lion',
    name: 'Noble Lion',
    defaultNickname: 'Simba',
    favoriteFood: '005-meat',
    tagline: 'Proud king of the savannah cheering on your daily victories.',
    scaleBase: 1.15
  },
  monkey: {
    id: 'monkey',
    name: 'Monkey',
    defaultNickname: 'Milo',
    favoriteFood: '009-banana',
    tagline: 'Playful acrobat who does joyful flips whenever you focus.',
    scaleBase: 0.95
  },
  panda: {
    id: 'panda',
    name: 'Panda',
    defaultNickname: 'Bao',
    favoriteFood: '007-bamboo',
    tagline: 'Chubby bamboo connoisseur who rolls with pure content.',
    scaleBase: 1.15
  },
  parrot: {
    id: 'parrot',
    name: 'Parrot',
    defaultNickname: 'Rio',
    favoriteFood: '004-sesame',
    tagline: 'Colorful tropical singer who repeats words of encouragement.',
    scaleBase: 0.85
  },
  penguin: {
    id: 'penguin',
    name: 'Penguin',
    defaultNickname: 'Waddles',
    favoriteFood: '006-fish',
    tagline: 'Dapper tuxedo explorer who slides across the ice with style.',
    scaleBase: 0.95
  },
  pig: {
    id: 'pig',
    name: 'Piglet',
    defaultNickname: 'Truffle',
    favoriteFood: '014-melon',
    tagline: 'Cheery pink forager who snorts with joy for sweet melons.',
    scaleBase: 1.0
  },
  polar: {
    id: 'polar',
    name: 'Polar Bear',
    defaultNickname: 'Blizzard',
    favoriteFood: '006-fish',
    tagline: 'Magnificent Arctic protector with a warm and cuddly heart.',
    scaleBase: 1.2
  },
  tiger: {
    id: 'tiger',
    name: 'Bengal Tiger',
    defaultNickname: 'Rajah',
    favoriteFood: '005-meat',
    tagline: 'Fierce striped guardian inspiring unstoppable focus and drive.',
    scaleBase: 1.15
  }
};

const PET_STAGE_DEFINITIONS = [
  { stage: 1, name: 'Baby', hoursReq: 10, scaleFactor: 0.65, subtitle: 'Newborn Sprout' },
  { stage: 2, name: 'Toddler', hoursReq: 10, scaleFactor: 0.80, subtitle: 'Playful Explorer' },
  { stage: 3, name: 'Juvenile', hoursReq: 10, scaleFactor: 0.95, subtitle: 'Sturdy Companion' },
  { stage: 4, name: 'Adult', hoursReq: 10, scaleFactor: 1.10, subtitle: 'Devoted Guardian' },
  { stage: 5, name: 'Champion', hoursReq: 0, scaleFactor: 1.25, subtitle: 'Playground Legend' }
];

const PLAYGROUND_THEMES = {
  meadow: {
    id: 'meadow',
    name: '☀️ Sunny Meadow',
    containerClass: 'bg-gradient-to-b from-sky-200 via-emerald-100 to-green-200 dark:from-slate-900 dark:via-emerald-950/40 dark:to-slate-950',
    ambienceHtml: `
      <div class="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div class="absolute top-3 right-8 w-24 h-24 rounded-full bg-yellow-300/40 blur-xl animate-pulse"></div>
        <div class="absolute top-5 right-10 text-3xl opacity-80">☀️</div>
        <div class="absolute top-4 left-8 text-2xl opacity-60 animate-pulse" style="animation-duration: 6s;">☁️</div>
        <div class="absolute top-10 left-1/3 text-xl opacity-40 animate-pulse" style="animation-duration: 8s;">☁️</div>
        <div class="absolute top-6 right-1/4 text-2xl opacity-50 animate-pulse" style="animation-duration: 7s;">☁️</div>
        <svg class="absolute bottom-0 inset-x-0 w-full h-32 text-emerald-400/30 dark:text-emerald-900/30" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,40 C150,90 350,-20 600,50 C850,120 1050,10 1200,40 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
        <svg class="absolute bottom-0 inset-x-0 w-full h-24 text-green-500/40 dark:text-emerald-800/40" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C200,10 400,80 700,30 C950,-10 1100,50 1200,60 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
        <div class="absolute bottom-2 left-6 text-xl opacity-70">🌼</div>
        <div class="absolute bottom-3 left-1/4 text-lg opacity-60">🌸</div>
        <div class="absolute bottom-2 right-12 text-xl opacity-70">🌷</div>
        <div class="absolute bottom-4 right-1/3 text-lg opacity-50">🍀</div>
        <div class="absolute top-16 left-1/2 text-sm opacity-50 animate-bounce" style="animation-duration: 4s;">🦋</div>
      </div>
    `
  },
  carnival: {
    id: 'carnival',
    name: '🎪 Carnival Fun Park',
    containerClass: 'bg-gradient-to-b from-amber-200 via-rose-100 to-purple-200 dark:from-indigo-950 dark:via-purple-950/60 dark:to-slate-950',
    ambienceHtml: `
      <div class="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div class="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-pink-500/20 blur-3xl"></div>
        <div class="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-purple-500/25 blur-3xl"></div>
        <div class="absolute top-1 inset-x-0 flex justify-around text-base opacity-75">
          <span>🚩</span><span>🎪</span><span>🎈</span><span>🎠</span><span>🎡</span><span>🎈</span><span>🚩</span>
        </div>
        <svg class="absolute bottom-0 inset-x-0 w-full h-28 text-purple-900/20 dark:text-purple-950/40" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,100 L120,40 L240,100 L300,70 L350,100 L600,30 L850,100 L950,50 L1050,100 L1200,70 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
        <div class="absolute top-8 inset-x-4 flex justify-between text-xs opacity-60">
          <span class="animate-ping" style="animation-duration: 2s;">✨</span>
          <span class="animate-pulse">🟡</span>
          <span class="animate-ping" style="animation-duration: 2.5s;">✨</span>
          <span class="animate-pulse">🔴</span>
          <span class="animate-ping" style="animation-duration: 1.8s;">✨</span>
          <span class="animate-pulse">🟣</span>
        </div>
        <div class="absolute bottom-3 left-10 text-2xl opacity-75 animate-bounce" style="animation-duration: 2.6s;">🎈</div>
        <div class="absolute bottom-2 right-14 text-2xl opacity-70">🍿</div>
        <div class="absolute bottom-3 right-1/4 text-xl opacity-60">🎪</div>
      </div>
    `
  },
  beach: {
    id: 'beach',
    name: '🏖️ Sunny Beach Resort',
    containerClass: 'bg-gradient-to-b from-cyan-200 via-amber-100 to-yellow-200 dark:from-slate-900 dark:via-cyan-950/40 dark:to-slate-950',
    ambienceHtml: `
      <div class="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div class="absolute -top-8 left-12 w-32 h-32 rounded-full bg-amber-300/40 blur-2xl"></div>
        <div class="absolute top-4 left-16 text-3xl opacity-80">☀️</div>
        <svg class="absolute bottom-10 inset-x-0 w-full h-24 text-cyan-500/30 dark:text-cyan-900/40" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,20 600,90 900,40 C1050,15 1150,70 1200,60 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
        <svg class="absolute bottom-0 inset-x-0 w-full h-16 text-amber-300/40 dark:text-yellow-950/40" viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0,30 C350,60 700,10 1200,40 L1200,80 L0,80 Z" fill="currentColor"></path>
        </svg>
        <div class="absolute bottom-2 left-6 text-2xl opacity-80">🌴</div>
        <div class="absolute bottom-1 right-8 text-xl opacity-70">🐚</div>
        <div class="absolute bottom-2 right-1/4 text-lg opacity-60">⭐</div>
        <div class="absolute top-6 right-1/3 text-lg opacity-50">⛵</div>
      </div>
    `
  },
  woodland: {
    id: 'woodland',
    name: '🌲 Mystic Woodland',
    containerClass: 'bg-gradient-to-b from-emerald-300 via-teal-100 to-emerald-200 dark:from-teal-950 dark:via-emerald-950/60 dark:to-slate-950',
    ambienceHtml: `
      <div class="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div class="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-emerald-400/20 blur-3xl"></div>
        <svg class="absolute bottom-0 inset-x-0 w-full h-32 text-emerald-950/20 dark:text-emerald-950/60" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,80 C100,50 150,20 200,80 C350,40 500,20 650,70 C800,30 950,50 1100,20 C1150,40 1180,60 1200,80 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
        <div class="absolute bottom-2 left-8 text-2xl opacity-75">🍄</div>
        <div class="absolute bottom-3 left-1/3 text-xl opacity-60">🌿</div>
        <div class="absolute bottom-2 right-12 text-2xl opacity-75">🌲</div>
        <div class="absolute top-8 left-12 text-sm opacity-70 animate-ping" style="animation-duration: 2.2s;">✨</div>
        <div class="absolute top-14 right-1/4 text-sm opacity-70 animate-ping" style="animation-duration: 3.1s;">✨</div>
        <div class="absolute top-6 left-1/2 text-xs opacity-60 animate-ping" style="animation-duration: 2.7s;">✨</div>
      </div>
    `
  },
  cosmic: {
    id: 'cosmic',
    name: '🌌 Cosmic Starlight',
    containerClass: 'bg-gradient-to-b from-indigo-900 via-purple-900 to-slate-950 text-white',
    ambienceHtml: `
      <div class="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div class="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-purple-600/30 blur-3xl"></div>
        <div class="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-indigo-600/30 blur-3xl"></div>
        <div class="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-pink-500/15 blur-2xl"></div>
        <div class="absolute top-4 left-8 text-xl opacity-80 animate-pulse">⭐</div>
        <div class="absolute top-10 right-14 text-sm opacity-70 animate-pulse">✨</div>
        <div class="absolute top-4 right-1/3 text-2xl opacity-75 animate-bounce" style="animation-duration: 6s;">🪐</div>
        <div class="absolute bottom-4 left-1/3 text-lg opacity-70">🌙</div>
        <div class="absolute bottom-2 right-10 text-xl opacity-60">🌌</div>
        <div class="absolute top-16 left-2/3 text-xs opacity-50 animate-ping" style="animation-duration: 2s;">⭐</div>
      </div>
    `
  }
};

const SANCTUARY_THEME_AMBIENCE = `
  <div class="absolute inset-0 pointer-events-none overflow-hidden select-none">
    <div class="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-amber-300/35 blur-3xl"></div>
    <div class="absolute top-4 left-8 text-3xl opacity-80">☀️</div>
    <div class="absolute top-5 right-12 text-2xl opacity-60 animate-pulse" style="animation-duration: 5s;">☁️</div>
    <div class="absolute top-10 right-1/3 text-xl opacity-40 animate-pulse" style="animation-duration: 7s;">☁️</div>
    <svg class="absolute bottom-0 inset-x-0 w-full h-28 text-emerald-500/25 dark:text-emerald-950/40" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,50 C200,90 400,20 700,60 C950,90 1100,30 1200,50 L1200,120 L0,120 Z" fill="currentColor"></path>
    </svg>
    <svg class="absolute bottom-0 inset-x-0 w-full h-16 text-green-600/30 dark:text-emerald-900/40" viewBox="0 0 1200 80" preserveAspectRatio="none">
      <path d="M0,30 C300,60 600,10 900,45 C1050,60 1150,20 1200,30 L1200,80 L0,80 Z" fill="currentColor"></path>
    </svg>
    <div class="absolute bottom-1 inset-x-6 flex justify-between text-xs opacity-50">
      <span>🪵</span><span>🌾</span><span>🪵</span><span>🌼</span><span>🪵</span><span>🌾</span><span>🪵</span>
    </div>
    <div class="absolute bottom-3 left-8 text-xl opacity-75">🌸</div>
    <div class="absolute bottom-3 right-10 text-xl opacity-75">🍀</div>
    <div class="absolute top-12 left-1/3 text-base opacity-60 animate-bounce" style="animation-duration: 3.5s;">🦋</div>
  </div>
`;

// Global 3D Manager for Sanctuary & Playground
let FlowPlanPet3D = {
  sanctuary: {
    renderer: null,
    scene: null,
    camera: null,
    mixer: null,
    actions: {},
    activeAction: null,
    model: null,
    animFrameId: null,
    clock: null,
    waypoint: { x: 0, z: 0 },
    nextMoveTime: 0,
    isWandering: false,
    userRotating: false
  }
};

function ensurePetsState() {
  if (!state.pets) {
    state.pets = JSON.parse(JSON.stringify(defaultState.pets));
  }
  if (typeof state.pets.coins !== 'number') state.pets.coins = 5;
  if (typeof state.pets.accumulatedFocusMinutes !== 'number') state.pets.accumulatedFocusMinutes = 0;
  if (typeof state.pets.coinsGrantedTotal !== 'number') state.pets.coinsGrantedTotal = 0;
  if (!state.pets.playgroundTheme) state.pets.playgroundTheme = 'meadow';
  if (!state.pets.inventory) {
    state.pets.inventory = {
      '001-carrot': 3,
      '002-cabbage': 2,
      '003-corn': 2,
      '005-meat': 1
    };
  }
  if (!Array.isArray(state.pets.graduatedPets)) {
    state.pets.graduatedPets = [];
  }
  if (state.pets.sanctuaryPet) {
    const sp = state.pets.sanctuaryPet;
    if (typeof sp.stage !== 'number') sp.stage = 1;
    if (typeof sp.stageFocusMinutes !== 'number') sp.stageFocusMinutes = 0;
    if (typeof sp.vitality !== 'number') sp.vitality = 100;
    if (typeof sp.isSick !== 'boolean') sp.isSick = sp.vitality < 15;
    if (typeof sp.isDead !== 'boolean') sp.isDead = sp.vitality === 0;
  }
}

// -------------------------------------------------------------------------
// Focus Timer Hooks (Coins & Stage Growth)
// -------------------------------------------------------------------------
let petFocusSecondAccumulator = 0;

function tickPetFocusSecond(deltaSec = 1) {
  ensurePetsState();
  petFocusSecondAccumulator += deltaSec;
  if (petFocusSecondAccumulator >= 60) {
    const minsToAdd = Math.floor(petFocusSecondAccumulator / 60);
    petFocusSecondAccumulator %= 60;
    addPetFocusMinutesInternal(minsToAdd);
  }
}

function addPetFocusSeconds(seconds) {
  if (!seconds || seconds <= 0) return;
  ensurePetsState();
  const minsToAdd = Math.floor(seconds / 60);
  const remSec = seconds % 60;
  petFocusSecondAccumulator += remSec;
  if (petFocusSecondAccumulator >= 60) {
    addPetFocusMinutesInternal(minsToAdd + Math.floor(petFocusSecondAccumulator / 60));
    petFocusSecondAccumulator %= 60;
  } else if (minsToAdd > 0) {
    addPetFocusMinutesInternal(minsToAdd);
  }
}

function addPetFocusMinutesInternal(mins) {
  if (mins <= 0) return;
  ensurePetsState();

  // 1. Accrue Focus Coins (1 coin per 30 minutes focused)
  state.pets.accumulatedFocusMinutes = (state.pets.accumulatedFocusMinutes || 0) + mins;
  const targetCoinTotal = Math.floor(state.pets.accumulatedFocusMinutes / 30);
  const coinsDue = targetCoinTotal - (state.pets.coinsGrantedTotal || 0);

  if (coinsDue > 0) {
    state.pets.coins = (Number(state.pets.coins) || 0) + coinsDue;
    state.pets.coinsGrantedTotal = targetCoinTotal;
    showToast(`🪙 Earned +${coinsDue} Focus Coin${coinsDue > 1 ? 's' : ''} for ${coinsDue * 30}m of focus work!`);
    playPetCoinChime();
  }

  // 2. Accrue Sanctuary Pet Stage Progress (10 hours = 600 minutes per stage)
  const pet = state.pets.sanctuaryPet;
  if (pet && !pet.isDead) {
    pet.stageFocusMinutes = (Number(pet.stageFocusMinutes) || 0) + mins;

    // Natural gentle vitality decay: 1% per 20 minutes of focus work
    if (Math.random() < mins / 20) {
      pet.vitality = Math.max(0, Math.min(100, pet.vitality - 1));
      if (pet.vitality < 15 && pet.vitality > 0) {
        pet.isSick = true;
      } else if (pet.vitality === 0) {
        pet.isDead = true;
      }
    }

    // Check Stage Up (600 minutes = 10 hours)
    if (pet.stageFocusMinutes >= 600) {
      if (pet.stage < 4) {
        pet.stage += 1;
        pet.stageFocusMinutes = 0;
        showToast(`🎉 Level Up! ${pet.nickname} grew to Stage ${pet.stage} (${PET_STAGE_DEFINITIONS[pet.stage - 1].name})!`);
        spawnSanctuaryBurstParticles('✨');
      } else if (pet.stage === 4) {
        // Graduate to Playground!
        pet.stage = 5;
        state.pets.graduatedPets.push({
          species: pet.species,
          nickname: pet.nickname,
          graduatedAt: getTodayISO(),
          totalPets: pet.totalPets || 0,
          totalFeeds: pet.totalFeeds || 0
        });
        showToast(`🎓 CHAMPION GRADUATION! ${pet.nickname} completed all 5 stages and entered the Playground!`);
        spawnSanctuaryBurstParticles('🏆');
        state.pets.sanctuaryPet = null;
      }
    }
  }

  saveState();
  if (state.mainView === 'pets') {
    renderPetsView();
  }
}

// -------------------------------------------------------------------------
// Master Pets View Renderer
// -------------------------------------------------------------------------
function renderPetsView() {
  ensurePetsState();

  // 1. Coin Balance
  const coinBal = document.getElementById('petCoinBalance');
  if (coinBal) coinBal.textContent = state.pets.coins || 0;

  const modalBal = document.getElementById('petShopModalBalance');
  if (modalBal) modalBal.textContent = state.pets.coins || 0;

  // 2. Playground Section
  renderPlaygroundSection();

  // 3. Sanctuary Section
  renderSanctuarySection();
}

// -------------------------------------------------------------------------
// Playground Renderer (Free-Roaming Champions)
// -------------------------------------------------------------------------
function renderPlaygroundSection() {
  ensurePetsState();
  const themeKey = state.pets.playgroundTheme || 'meadow';
  const theme = PLAYGROUND_THEMES[themeKey] || PLAYGROUND_THEMES.meadow;

  // Theme selector
  const select = document.getElementById('playgroundThemeSelect');
  if (select && select.value !== themeKey) select.value = themeKey;

  // Container styling
  const stage = document.getElementById('playgroundCanvasStage');
  if (stage) {
    stage.className = `relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 min-h-[300px] sm:min-h-[360px] flex flex-col justify-between p-5 select-none transition-all duration-300 shadow-inner ${theme.containerClass}`;
  }

  // Theme Ambience
  const amb = document.getElementById('playgroundAmbienceContainer');
  if (amb) amb.innerHTML = theme.ambienceHtml;

  // Champions Roster & Empty Notice
  const graduated = state.pets.graduatedPets || [];
  const emptyNotice = document.getElementById('playgroundEmptyNotice');
  const roamingField = document.getElementById('playgroundRoamingField');

  if (graduated.length === 0) {
    if (emptyNotice) emptyNotice.classList.remove('hidden');
    if (roamingField) {
      roamingField.classList.add('hidden');
      roamingField.innerHTML = '';
    }
  } else {
    if (emptyNotice) emptyNotice.classList.add('hidden');
    if (roamingField) {
      roamingField.classList.remove('hidden');
      renderPlayground3DOr2D(graduated);
    }
  }
}

function setPlaygroundTheme(themeKey) {
  ensurePetsState();
  if (!PLAYGROUND_THEMES[themeKey]) return;
  state.pets.playgroundTheme = themeKey;
  saveState();
  renderPlaygroundSection();
  showToast(`Playground theme changed to ${PLAYGROUND_THEMES[themeKey].name}!`);
}

// Free Roaming Controller for Playground
let playgroundRoamTimer = null;
let playgroundPetPositions = [];

function renderPlayground3DOr2D(graduatedPets) {
  const field = document.getElementById('playgroundRoamingField');
  if (!field) return;

  if (playgroundPetPositions.length !== graduatedPets.length) {
    playgroundPetPositions = graduatedPets.map((p, idx) => ({
      x: 15 + ((idx * 26) % 65),
      y: 25 + ((idx * 19) % 50),
      facingRight: true,
      currentAngle: 0
    }));
  }

  field.innerHTML = `
    <div id="playgroundRoamingCanvas" class="w-full h-full relative overflow-hidden select-none">
      ${graduatedPets.map((p, idx) => {
        const pos = playgroundPetPositions[idx] || { x: 50, y: 50, facingRight: true, currentAngle: 0 };
        return `
          <div
            id="playgroundPet_${idx}"
            class="absolute z-10 cursor-grab active:cursor-grabbing transition-all duration-1000 ease-in-out group flex flex-col items-center select-none"
            style="left: ${pos.x}%; top: ${pos.y}%; transform: translate(-50%, -50%) scaleX(${pos.facingRight ? 1 : -1});"
            onpointerdown="startPlaygroundPetDrag(event, ${idx})"
            title="Click & hold to rotate ${p.nickname}!"
          >
            <!-- Floating Name Pill above Head -->
            <div
              class="mb-1 px-2.5 py-0.5 rounded-full bg-slate-900/85 dark:bg-slate-950/90 text-white font-black text-[10px] whitespace-nowrap shadow-md pointer-events-none border border-white/20 select-none group-hover:scale-110 transition-transform"
              style="transform: scaleX(${pos.facingRight ? 1 : -1});"
            >
              ${escapeHtml(p.nickname)}
            </div>

            <!-- Pet Graphic Avatar -->
            <div id="playgroundPetImgWrap_${idx}" class="relative transition-transform duration-200">
              <img
                src="assets/Animals/Previews/animal-${p.species}.png"
                alt="${p.nickname}"
                class="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-xl group-hover:scale-105 pointer-events-none"
              />
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  startPlaygroundAutonomousRoaming(graduatedPets);
}

function startPlaygroundAutonomousRoaming(graduatedPets) {
  if (playgroundRoamTimer) clearInterval(playgroundRoamTimer);

  playgroundRoamTimer = setInterval(() => {
    if (state.mainView !== 'pets' || !graduatedPets || graduatedPets.length === 0) return;

    graduatedPets.forEach((p, idx) => {
      // 40% chance per interval to wander to a new waypoint
      if (Math.random() < 0.45) {
        const pos = playgroundPetPositions[idx];
        if (!pos) return;

        const newX = 10 + Math.random() * 75;
        const newY = 20 + Math.random() * 55;
        const movingRight = newX >= pos.x;

        pos.x = newX;
        pos.y = newY;
        pos.facingRight = movingRight;

        const el = document.getElementById(`playgroundPet_${idx}`);
        if (el) {
          el.style.left = `${newX}%`;
          el.style.top = `${newY}%`;
          el.style.transform = `translate(-50%, -50%) scaleX(${movingRight ? 1 : -1})`;

          // Keep name label oriented upright
          const nameEl = el.querySelector('div');
          if (nameEl) nameEl.style.transform = `scaleX(${movingRight ? 1 : -1})`;
        }
      }
    });
  }, 3500);
}

// Hold-to-Rotate for Playground Pets
function startPlaygroundPetDrag(e, idx) {
  e.preventDefault();
  const el = document.getElementById(`playgroundPet_${idx}`);
  const wrap = document.getElementById(`playgroundPetImgWrap_${idx}`);
  if (!el || !wrap) return;

  const startX = e.clientX;
  let hasDragged = false;
  let currentAngle = (playgroundPetPositions[idx] && playgroundPetPositions[idx].currentAngle) || 0;

  function onPointerMove(moveEvent) {
    const deltaX = moveEvent.clientX - startX;
    if (Math.abs(deltaX) > 4) {
      hasDragged = true;
      const deg = currentAngle + deltaX * 1.5;
      wrap.style.transform = `rotateY(${deg}deg)`;
    }
  }

  function onPointerUp(upEvent) {
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);

    const deltaX = upEvent.clientX - startX;
    if (playgroundPetPositions[idx]) {
      playgroundPetPositions[idx].currentAngle = (currentAngle + deltaX * 1.5) % 360;
    }

    if (!hasDragged) {
      // Simple click -> greeting dance
      interactPlaygroundPet(idx);
    }
  }

  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
}

function interactPlaygroundPet(idx) {
  ensurePetsState();
  const pet = state.pets.graduatedPets[idx];
  if (!pet) return;

  const wrap = document.getElementById(`playgroundPetImgWrap_${idx}`);
  if (wrap) {
    wrap.style.transform = 'scale(1.25) translateY(-14px)';
    setTimeout(() => {
      wrap.style.transform = 'scale(1) translateY(0)';
    }, 400);
  }

  spawnSanctuaryBurstParticles('❤️');
  showToast(`👑 Champion ${pet.nickname} does a joyful greeting dance for you!`);
  playPetHappyChime();
}

// -------------------------------------------------------------------------
// Sanctuary Renderer (Active Growth Chamber: Stages 1–4)
// -------------------------------------------------------------------------
function renderSanctuarySection() {
  ensurePetsState();
  const pet = state.pets.sanctuaryPet;

  // Sanctuary scenic background
  const amb = document.getElementById('sanctuaryAmbienceContainer');
  if (amb) amb.innerHTML = SANCTUARY_THEME_AMBIENCE;

  const previewImg = document.getElementById('sanctuaryPetPreviewImg');
  const nameLabel = document.getElementById('sanctuaryPetNameLabel');
  const speciesLabel = document.getElementById('sanctuaryPetSpeciesLabel');
  const stagePill = document.getElementById('sanctuaryStagePill');
  const vitalityBar = document.getElementById('sanctuaryVitalityBar');
  const vitalityPctLabel = document.getElementById('sanctuaryVitalityPctLabel');
  const vitalityIcon = document.getElementById('vitalityStatusIcon');
  const healthStateText = document.getElementById('sanctuaryHealthStateText');
  const stageProgressBar = document.getElementById('sanctuaryStageProgressBar');
  const focusHoursLabel = document.getElementById('sanctuaryFocusHoursLabel');
  const stageTargetLabel = document.getElementById('sanctuaryStageTargetLabel');
  const totalFocusAccLabel = document.getElementById('sanctuaryTotalFocusAccLabel');
  const moodEmoji = document.getElementById('sanctuaryPetMoodEmoji');
  const moodLabel = document.getElementById('sanctuaryPetMoodLabel');
  const sickAlert = document.getElementById('petSickAlertBanner');
  const deathAlert = document.getElementById('petDeathAlertBanner');
  const feedBtn = document.getElementById('feedPetActionBtn');
  const feedText = document.getElementById('feedBtnText');
  const feedIcon = document.getElementById('sanctuaryFavoriteFoodIcon');
  const feedOwned = document.getElementById('feedFoodOwnedBadge');

  if (!pet) {
    if (previewImg) previewImg.src = 'assets/Icons/basket.gif';
    if (nameLabel) nameLabel.textContent = 'No Companion Active';
    if (speciesLabel) speciesLabel.textContent = 'Sanctuary is quiet. Adopt a pet to begin raising!';
    if (stagePill) stagePill.textContent = 'Empty';
    if (vitalityBar) vitalityBar.style.width = '0%';
    if (vitalityPctLabel) vitalityPctLabel.textContent = '--';
    if (stageProgressBar) stageProgressBar.style.width = '0%';
    if (focusHoursLabel) focusHoursLabel.textContent = '0.0h / 10.0h';
    if (stageTargetLabel) stageTargetLabel.textContent = 'Adopt a Pet';
    if (sickAlert) sickAlert.classList.add('hidden');
    if (deathAlert) deathAlert.classList.add('hidden');
    if (feedBtn) feedBtn.disabled = true;
    if (feedText) feedText.textContent = 'Adopt a Pet First';

    const graphic = document.getElementById('sanctuaryPetGraphic');
    if (graphic) {
      graphic.innerHTML = `
        <div class="text-center p-6 space-y-3">
          <span class="text-5xl animate-bounce inline-block">🌿</span>
          <h4 class="text-sm font-black text-slate-800 dark:text-slate-100">Your Sanctuary is Ready</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 max-w-xs">Adopt any of the 24 Cube Pets to nurture them with your focus sessions!</p>
          <button onclick="openAdoptPetModal()" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition">
            🐾 Choose Your Companion
          </button>
        </div>
      `;
    }
    return;
  }

  const speciesDef = PET_SPECIES_CATALOG[pet.species] || PET_SPECIES_CATALOG.bunny;
  const currentStage = Math.max(1, Math.min(5, pet.stage || 1));
  const stageDef = PET_STAGE_DEFINITIONS[currentStage - 1];
  const favFoodKey = speciesDef.favoriteFood || '001-carrot';
  const foodDef = PET_FOODS_CATALOG[favFoodKey] || PET_FOODS_CATALOG['001-carrot'];
  const ownedCount = (state.pets.inventory && state.pets.inventory[favFoodKey]) || 0;

  // Header Details
  if (previewImg) previewImg.src = `assets/Animals/Previews/animal-${pet.species}.png`;
  if (nameLabel) nameLabel.textContent = `${pet.nickname} the ${speciesDef.name}`;
  if (speciesLabel) speciesLabel.textContent = `${stageDef.name} Stage • ${speciesDef.tagline}`;
  if (stagePill) stagePill.textContent = `Stage ${currentStage} of 5 (${stageDef.name})`;

  // Vitality Meter
  const vit = Math.max(0, Math.min(100, pet.vitality || 0));
  if (vitalityPctLabel) vitalityPctLabel.textContent = `${vit}%`;
  if (vitalityBar) {
    vitalityBar.style.width = `${vit}%`;
    if (vit < 15) {
      vitalityBar.className = 'h-full bg-rose-600 rounded-full transition-all duration-300';
    } else if (vit < 40) {
      vitalityBar.className = 'h-full bg-amber-500 rounded-full transition-all duration-300';
    } else {
      vitalityBar.className = 'h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-300';
    }
  }

  // Sickness & Death States
  if (vit === 0) {
    pet.isDead = true;
    pet.isSick = false;
    if (deathAlert) deathAlert.classList.remove('hidden');
    if (sickAlert) sickAlert.classList.add('hidden');
    if (vitalityIcon) vitalityIcon.textContent = '💀';
    if (healthStateText) healthStateText.textContent = 'Collapsed from neglect (Needs Revival)';
    if (moodEmoji) moodEmoji.textContent = '💀';
    if (moodLabel) moodLabel.textContent = 'Collapsed / Needs Medicine';
  } else if (vit < 15) {
    pet.isSick = true;
    pet.isDead = false;
    if (sickAlert) sickAlert.classList.remove('hidden');
    if (deathAlert) deathAlert.classList.add('hidden');
    if (vitalityIcon) vitalityIcon.textContent = '🤒';
    if (healthStateText) healthStateText.textContent = 'Sick & Weak (<15% Vitality)';
    if (moodEmoji) moodEmoji.textContent = '🤒';
    if (moodLabel) moodLabel.textContent = 'Feeling Ill (Feed preferred food!)';
  } else {
    pet.isSick = false;
    pet.isDead = false;
    if (sickAlert) sickAlert.classList.add('hidden');
    if (deathAlert) deathAlert.classList.add('hidden');
    if (vitalityIcon) vitalityIcon.textContent = '❤️';
    if (healthStateText) healthStateText.textContent = vit > 75 ? 'Thriving & Energetic' : 'Healthy & Content';
    if (moodEmoji) moodEmoji.textContent = vit > 75 ? '✨' : '❤️';
    if (moodLabel) moodLabel.textContent = vit > 75 ? 'Joyful & Playful' : 'Content & Loved';
  }

  // Stage Growth (10h Focus = 600m)
  const currentFocusMins = pet.stageFocusMinutes || 0;
  const focusHours = (currentFocusMins / 60).toFixed(1);
  const stagePct = Math.min(100, Math.round((currentFocusMins / 600) * 100));
  if (focusHoursLabel) focusHoursLabel.textContent = `${focusHours}h / 10.0h`;
  if (stageProgressBar) stageProgressBar.style.width = `${stagePct}%`;
  if (stageTargetLabel) {
    stageTargetLabel.textContent = currentStage < 4
      ? `Next: Stage ${currentStage + 1} (${PET_STAGE_DEFINITIONS[currentStage].name})`
      : 'Next: Stage 5 (Graduation to Playground!)';
  }
  const totalAccHours = (((currentStage - 1) * 600 + currentFocusMins) / 60).toFixed(1);
  if (totalFocusAccLabel) totalFocusAccLabel.textContent = `Total: ${totalAccHours}h / 40.0h`;

  // Feed Button
  if (feedBtn) feedBtn.disabled = pet.isDead;
  if (feedIcon) feedIcon.src = foodDef.icon;
  if (feedText) feedText.textContent = `Feed ${foodDef.name} (+50%)`;
  if (feedOwned) {
    feedOwned.textContent = `Owned: ${ownedCount}`;
    if (ownedCount === 0) {
      feedOwned.className = 'px-2 py-0.5 rounded-full bg-rose-600 text-white font-mono text-[10px]';
    } else {
      feedOwned.className = 'px-2 py-0.5 rounded-full bg-slate-950 text-white font-mono text-[10px]';
    }
  }

  // Render 3D Model or 2D with Hold-to-Rotate support
  renderSanctuaryPet3D(pet);
  setupSanctuaryHoldToRotate();
}

// -------------------------------------------------------------------------
// 3D Engine: Sanctuary Pet Rendering with Three.js & Skeletal Animations
// -------------------------------------------------------------------------
let currentSanctuarySpecies = null;
let sanctuaryHoldRotateBound = false;

function renderSanctuaryPet3D(pet) {
  const container = document.getElementById('sanctuaryPetGraphic');
  if (!container) return;

  if (!window.isThreeAvailable || !window.THREE || !window.GLTFLoader) {
    renderSanctuary2DFallback(pet, container);
    return;
  }

  if (currentSanctuarySpecies === pet.species && FlowPlanPet3D.sanctuary.model) {
    updateSanctuary3DModelScale(pet);
    return;
  }

  currentSanctuarySpecies = pet.species;
  container.innerHTML = '';

  const width = container.clientWidth || 320;
  const height = container.clientHeight || 280;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
  camera.position.set(0, 1.8, 4.2);
  camera.lookAt(0, 0.4, 0);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
  scene.add(ambientLight);

  const sunLight = new THREE.DirectionalLight(0xfff8e7, 1.8);
  sunLight.position.set(3, 6, 4);
  scene.add(sunLight);

  const rimLight = new THREE.DirectionalLight(0x88ccff, 0.8);
  rimLight.position.set(-3, 3, -3);
  scene.add(rimLight);

  // Soft shadow disc
  const shadowGeo = new THREE.CircleGeometry(0.8, 32);
  const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.18 });
  const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
  shadowMesh.rotation.x = -Math.PI / 2;
  shadowMesh.position.y = 0.02;
  scene.add(shadowMesh);

  // Load GLTF Model
  const glbPath = `assets/Animals/Models/GLB format/animal-${pet.species}.glb`;
  const loader = new GLTFLoader();

  loader.load(
    glbPath,
    (gltf) => {
      const model = gltf.scene;
      FlowPlanPet3D.sanctuary.model = model;

      const stageDef = PET_STAGE_DEFINITIONS[Math.max(0, Math.min(4, (pet.stage || 1) - 1))];
      const speciesDef = PET_SPECIES_CATALOG[pet.species] || { scaleBase: 1.0 };
      const scale = (speciesDef.scaleBase || 1.0) * (stageDef.scaleFactor || 1.0);
      model.scale.set(scale, scale, scale);
      model.position.set(0, 0, 0);
      scene.add(model);

      const mixer = new THREE.AnimationMixer(model);
      FlowPlanPet3D.sanctuary.mixer = mixer;
      FlowPlanPet3D.sanctuary.actions = {};

      if (gltf.animations && gltf.animations.length > 0) {
        gltf.animations.forEach((clip) => {
          const action = mixer.clipAction(clip);
          FlowPlanPet3D.sanctuary.actions[clip.name.toLowerCase()] = action;
        });

        const initialClip = pet.isDead ? 'gesture-negative' : pet.isSick ? 'gesture-negative' : 'idle';
        playSanctuaryAction(initialClip);
      }

      FlowPlanPet3D.sanctuary.renderer = renderer;
      FlowPlanPet3D.sanctuary.scene = scene;
      FlowPlanPet3D.sanctuary.camera = camera;
      FlowPlanPet3D.sanctuary.clock = new THREE.Clock();

      startSanctuaryAnimationLoop();
    },
    undefined,
    (err) => {
      console.warn('Failed to load 3D GLB model, falling back to 2D:', err);
      renderSanctuary2DFallback(pet, container);
    }
  );
}

function updateSanctuary3DModelScale(pet) {
  const model = FlowPlanPet3D.sanctuary.model;
  if (!model) return;
  const stageDef = PET_STAGE_DEFINITIONS[Math.max(0, Math.min(4, (pet.stage || 1) - 1))];
  const speciesDef = PET_SPECIES_CATALOG[pet.species] || { scaleBase: 1.0 };
  const scale = (speciesDef.scaleBase || 1.0) * (stageDef.scaleFactor || 1.0);
  model.scale.set(scale, scale, scale);

  if (pet.isDead) {
    model.rotation.z = Math.PI / 2;
    model.position.y = 0.2;
  } else {
    model.rotation.z = 0;
    model.position.y = 0;
  }
}

function playSanctuaryAction(clipName, duration = null) {
  const sanctuary = FlowPlanPet3D.sanctuary;
  if (!sanctuary.mixer || !sanctuary.actions) return;

  const nextAction = sanctuary.actions[clipName.toLowerCase()] || sanctuary.actions['idle'];
  if (!nextAction) return;

  if (sanctuary.activeAction && sanctuary.activeAction !== nextAction) {
    sanctuary.activeAction.fadeOut(0.25);
  }

  nextAction.reset().fadeIn(0.25).play();
  sanctuary.activeAction = nextAction;

  if (duration && duration > 0) {
    setTimeout(() => {
      if (sanctuary.activeAction === nextAction) {
        playSanctuaryAction('idle');
      }
    }, duration);
  }
}

function startSanctuaryAnimationLoop() {
  const sanctuary = FlowPlanPet3D.sanctuary;
  if (sanctuary.animFrameId) cancelAnimationFrame(sanctuary.animFrameId);

  let nextWaypointTime = Date.now() + 3000;
  let targetX = 0;
  let targetZ = 0;
  let isMoving = false;

  function loop() {
    sanctuary.animFrameId = requestAnimationFrame(loop);
    if (!sanctuary.clock || !sanctuary.renderer || !sanctuary.scene || !sanctuary.camera) return;

    const delta = sanctuary.clock.getDelta();
    if (sanctuary.mixer) sanctuary.mixer.update(delta);

    // Autonomous wandering between waypoints (paused during user manual rotation)
    const model = sanctuary.model;
    const pet = state.pets && state.pets.sanctuaryPet;
    if (model && pet && !pet.isDead && !sanctuary.userRotating) {
      const now = Date.now();
      if (!isMoving && now >= nextWaypointTime) {
        targetX = (Math.random() - 0.5) * 1.6;
        targetZ = (Math.random() - 0.5) * 1.2;
        isMoving = true;
        playSanctuaryAction('walk');
      }

      if (isMoving) {
        const dx = targetX - model.position.x;
        const dz = targetZ - model.position.z;
        const dist = Math.sqrt(dx * dx + dz * dz);

        if (dist > 0.05) {
          const targetAngle = Math.atan2(dx, dz);
          model.rotation.y = THREE.MathUtils.lerp(model.rotation.y, targetAngle, 0.1);
          model.position.x += (dx / dist) * delta * 0.8;
          model.position.z += (dz / dist) * delta * 0.8;
        } else {
          isMoving = false;
          nextWaypointTime = now + 3500 + Math.random() * 4000;
          playSanctuaryAction(pet.isSick ? 'gesture-negative' : 'idle');
        }
      }
    }

    sanctuary.renderer.render(sanctuary.scene, sanctuary.camera);
  }

  loop();
}

// Hold-to-Rotate Interaction for Sanctuary Pet
let sanctuary2DAngle = 0;

function setupSanctuaryHoldToRotate() {
  if (sanctuaryHoldRotateBound) return;
  sanctuaryHoldRotateBound = true;

  const viewport = document.getElementById('sanctuary3DViewport');
  if (!viewport) return;

  viewport.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    const startX = e.clientX;
    let hasDragged = false;
    const initialRot = FlowPlanPet3D.sanctuary.model
      ? FlowPlanPet3D.sanctuary.model.rotation.y
      : sanctuary2DAngle;

    FlowPlanPet3D.sanctuary.userRotating = true;
    viewport.classList.add('cursor-grabbing');

    function onPointerMove(moveEvent) {
      const deltaX = moveEvent.clientX - startX;
      if (Math.abs(deltaX) > 4) {
        hasDragged = true;
        if (FlowPlanPet3D.sanctuary.model) {
          FlowPlanPet3D.sanctuary.model.rotation.y = initialRot + deltaX * 0.02;
        } else {
          sanctuary2DAngle = initialRot + deltaX * 1.5;
          const img = document.getElementById('pet2DGraphicImg');
          if (img) img.style.transform = `scale(var(--pet-scale, 1)) rotateY(${sanctuary2DAngle}deg)`;
        }
      }
    }

    function onPointerUp() {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      FlowPlanPet3D.sanctuary.userRotating = false;
      viewport.classList.remove('cursor-grabbing');

      if (!hasDragged) {
        petActiveSanctuaryAnimal();
      }
    }

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  });
}

// 2D High-Res Fallback for Sanctuary Pet
function renderSanctuary2DFallback(pet, container) {
  const speciesDef = PET_SPECIES_CATALOG[pet.species] || PET_SPECIES_CATALOG.bunny;
  const stageDef = PET_STAGE_DEFINITIONS[Math.max(0, Math.min(4, (pet.stage || 1) - 1))];
  const scale = (speciesDef.scaleBase || 1.0) * (stageDef.scaleFactor || 1.0);

  container.innerHTML = `
    <div class="relative flex flex-col items-center justify-center p-4">
      <img
        id="pet2DGraphicImg"
        src="assets/Animals/Previews/animal-${pet.species}.png"
        alt="${pet.nickname}"
        class="w-36 h-36 object-contain filter drop-shadow-xl transition-transform duration-200 ${pet.isDead ? 'rotate-90 opacity-60' : pet.isSick ? 'hue-rotate-90 animate-pulse' : 'hover:scale-105'}"
        style="--pet-scale: ${scale}; transform: scale(${scale}) rotateY(${sanctuary2DAngle}deg);"
      />
      <div class="w-32 h-4 rounded-full bg-slate-900/10 dark:bg-black/40 blur-sm mt-1"></div>
    </div>
  `;
}

// -------------------------------------------------------------------------
// Reworked Petting Animation & Care Actions
// -------------------------------------------------------------------------
function petActiveSanctuaryAnimal() {
  ensurePetsState();
  const pet = state.pets.sanctuaryPet;
  if (!pet) {
    openAdoptPetModal();
    return;
  }

  if (pet.isDead) {
    showToast('Your pet has collapsed from neglect! Revive with medicine first.');
    return;
  }

  // +1% Vitality
  pet.vitality = Math.min(100, (pet.vitality || 0) + 1);
  if (pet.vitality >= 15 && pet.isSick) {
    pet.isSick = false;
    showToast(`❤️ ${pet.nickname} recovered from sickness with your affection!`);
  } else {
    showToast(`🐾 Petted ${pet.nickname}! (+1% Vitality)`);
  }

  pet.totalPets = (pet.totalPets || 0) + 1;

  // 1. 3D Model: Playful celebratory dance & spin
  if (FlowPlanPet3D.sanctuary.model) {
    playSanctuaryAction('dance', 2400);
    // Smooth 360 celebratory spin
    const targetRot = FlowPlanPet3D.sanctuary.model.rotation.y + Math.PI * 2;
    let spinStart = performance.now();
    function spinStep(now) {
      const elapsed = (now - spinStart) / 600;
      if (elapsed < 1 && FlowPlanPet3D.sanctuary.model) {
        FlowPlanPet3D.sanctuary.model.rotation.y = THREE.MathUtils.lerp(FlowPlanPet3D.sanctuary.model.rotation.y, targetRot, 0.18);
        requestAnimationFrame(spinStep);
      }
    }
    requestAnimationFrame(spinStep);
  }

  // 2. 2D Avatar: Elastic bounce pop
  const img2D = document.getElementById('pet2DGraphicImg');
  if (img2D) {
    img2D.style.transition = 'transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1)';
    img2D.style.transform = 'scale(1.3) translateY(-20px)';
    setTimeout(() => {
      img2D.style.transform = 'scale(0.95) translateY(4px)';
      setTimeout(() => {
        img2D.style.transform = 'scale(1) translateY(0)';
      }, 150);
    }, 180);
  }

  // 3. Radial Heart Burst Fountain
  spawnPettingHeartFountain();

  // 4. Dual-tone Joyful Sound
  playPetHappyChime();

  saveState();
  renderSanctuarySection();
}

function feedActiveSanctuaryAnimal() {
  ensurePetsState();
  const pet = state.pets.sanctuaryPet;
  if (!pet) {
    openAdoptPetModal();
    return;
  }

  if (pet.isDead) {
    showToast('Your pet has collapsed! Revive with medicine first.');
    return;
  }

  const speciesDef = PET_SPECIES_CATALOG[pet.species] || PET_SPECIES_CATALOG.bunny;
  const preferredFoodKey = speciesDef.favoriteFood || '001-carrot';
  const foodDef = PET_FOODS_CATALOG[preferredFoodKey] || PET_FOODS_CATALOG['001-carrot'];

  let foodUsed = preferredFoodKey;
  if (!state.pets.inventory[preferredFoodKey] || state.pets.inventory[preferredFoodKey] <= 0) {
    if (state.pets.inventory['015-berries'] && state.pets.inventory['015-berries'] > 0) {
      foodUsed = '015-berries';
    } else {
      showToast(`Out of ${foodDef.name}! Opening Pet Shop...`);
      openPetShopModal();
      return;
    }
  }

  state.pets.inventory[foodUsed] -= 1;
  pet.vitality = Math.min(100, (pet.vitality || 0) + 50);
  pet.totalFeeds = (pet.totalFeeds || 0) + 1;

  if (pet.vitality >= 15 && pet.isSick) {
    pet.isSick = false;
    showToast(`🎉 Cured! ${pet.nickname} is well-fed and healthy again! (+50% Vitality)`);
  } else {
    showToast(`Delicious! Fed ${foodDef.name} to ${pet.nickname} (+50% Vitality)`);
  }

  playSanctuaryAction('eat', 2500);
  spawnSanctuaryBurstParticles('✨');
  playPetHappyChime();

  saveState();
  renderSanctuarySection();
}

function revivePetWithMedicine() {
  ensurePetsState();
  const pet = state.pets.sanctuaryPet;
  if (!pet || !pet.isDead) return;

  const cost = 3;
  if (state.pets.coins >= cost) {
    state.pets.coins -= cost;
  } else {
    state.pets.coins = 0;
  }

  pet.isDead = false;
  pet.isSick = false;
  pet.vitality = 30;

  playSanctuaryAction('dance', 2500);
  spawnSanctuaryBurstParticles('❤️');
  showToast(`❤️ Revived! ${pet.nickname} is back on their feet. Remember to feed them!`);

  saveState();
  renderSanctuarySection();
}

// -------------------------------------------------------------------------
// Pet Food Shop Modal & Buying
// -------------------------------------------------------------------------
function openPetShopModal() {
  ensurePetsState();
  const modal = document.getElementById('petShopModal');
  if (modal) modal.classList.remove('hidden');
  renderPetShopCards();
}

function closePetShopModal() {
  const modal = document.getElementById('petShopModal');
  if (modal) modal.classList.add('hidden');
}

function renderPetShopCards() {
  ensurePetsState();
  const grid = document.getElementById('petShopFoodGrid');
  if (!grid) return;

  const coins = state.pets.coins || 0;
  const modalBal = document.getElementById('petShopModalBalance');
  if (modalBal) modalBal.textContent = coins;

  grid.innerHTML = Object.keys(PET_FOODS_CATALOG).map((fKey) => {
    const food = PET_FOODS_CATALOG[fKey];
    const owned = (state.pets.inventory && state.pets.inventory[fKey]) || 0;
    const canAfford = coins >= food.price;
    const petList = food.pets || [];

    // Minimized preview icons of animals that love this food
    const petsHtml = petList.map(spId => {
      if (spId === 'all') {
        return `<span class="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-[10px] font-black tracking-wide">⭐ All Animals</span>`;
      }
      const pDef = PET_SPECIES_CATALOG[spId];
      if (!pDef) return '';
      return `<img src="assets/Animals/Previews/animal-${spId}.png" alt="${pDef.name}" class="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 p-0.5 border border-slate-200 dark:border-slate-700 object-contain shadow-xs hover:scale-110 transition-transform" title="${pDef.name}" />`;
    }).join('');

    return `
      <div class="p-4 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800 flex flex-col justify-between space-y-3 hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-lg transition-all group">
        <div class="flex items-start gap-3.5">
          <div class="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 p-2 flex items-center justify-center shrink-0 drop-shadow group-hover:scale-105 transition-transform">
            <img src="${food.icon}" alt="${food.name}" class="w-12 h-12 object-contain" />
          </div>
          <div class="space-y-1 min-w-0 flex-1">
            <h4 class="text-sm font-black text-slate-900 dark:text-white truncate">${food.name}</h4>
            <div class="flex items-center gap-1.5 flex-wrap pt-0.5">
              ${petsHtml}
            </div>
            <p class="text-[11px] text-slate-400 dark:text-slate-500 leading-snug pt-0.5 line-clamp-2">${food.description}</p>
          </div>
        </div>

        <div class="flex items-center justify-between pt-2.5 border-t border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-1.5">
            <span class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1">
              <img src="assets/Icons/money.png" alt="Coin" class="w-4 h-4 object-contain inline-block" />
              <span>${food.price}</span>
            </span>
            <span class="text-[11px] font-bold text-slate-400 dark:text-slate-500">(${owned} owned)</span>
          </div>

          <button
            type="button"
            onclick="buyPetFood('${food.id}')"
            ${!canAfford ? 'disabled' : ''}
            class="px-4 py-2 rounded-xl text-xs font-black transition flex items-center gap-1.5 ${canAfford ? 'bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-60'}"
          >
            <span>Buy</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function buyPetFood(foodId) {
  ensurePetsState();
  const food = PET_FOODS_CATALOG[foodId];
  if (!food) return;

  if (state.pets.coins < food.price) {
    showToast(`Need ${food.price} coins! Focus 30 minutes to earn coins.`);
    return;
  }

  state.pets.coins -= food.price;
  if (!state.pets.inventory) state.pets.inventory = {};
  state.pets.inventory[foodId] = (Number(state.pets.inventory[foodId]) || 0) + 1;

  playPetCoinChime();
  showToast(`Purchased ${food.name}! (Owned: ${state.pets.inventory[foodId]})`);

  saveState();
  renderPetShopCards();
  renderPetsView();
}

// -------------------------------------------------------------------------
// Adoption Modal (24 Cube Pets Menagerie)
// -------------------------------------------------------------------------
function openAdoptPetModal() {
  ensurePetsState();
  const modal = document.getElementById('adoptPetModal');
  if (modal) modal.classList.remove('hidden');
  renderAdoptPetCards();
}

function closeAdoptPetModal() {
  const modal = document.getElementById('adoptPetModal');
  if (modal) modal.classList.add('hidden');
}

function renderAdoptPetCards() {
  ensurePetsState();
  const grid = document.getElementById('adoptPetModalGrid');
  if (!grid) return;

  const currentPet = state.pets.sanctuaryPet;
  const activeSpecies = currentPet ? currentPet.species : null;

  grid.innerHTML = Object.keys(PET_SPECIES_CATALOG).map((sKey) => {
    const sp = PET_SPECIES_CATALOG[sKey];
    const isCurrent = activeSpecies === sKey;
    const favFood = PET_FOODS_CATALOG[sp.favoriteFood] || PET_FOODS_CATALOG['001-carrot'];

    return `
      <div class="p-4 rounded-3xl ${isCurrent ? 'bg-emerald-50/90 dark:bg-emerald-950/40 border-2 border-emerald-500 shadow-md' : 'bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800'} flex flex-col justify-between space-y-3 transition shadow-sm hover:border-emerald-400 dark:hover:border-emerald-600 group">
        <div class="flex items-center gap-3">
          <div class="relative shrink-0">
            <img src="assets/Animals/Previews/animal-${sp.id}.png" alt="${sp.name}" class="w-14 h-14 object-contain rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-1.5 drop-shadow group-hover:scale-105 transition-transform" />
            <!-- Minimized food icon badge without text -->
            <div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-0.5 shadow-sm flex items-center justify-center" title="Favorite: ${favFood.name}">
              <img src="${favFood.icon}" alt="Food" class="w-4 h-4 object-contain" />
            </div>
          </div>
          <div class="min-w-0 flex-1">
            <h4 class="text-sm font-black text-slate-900 dark:text-white truncate">${sp.name}</h4>
            <p class="text-[10px] text-slate-400 dark:text-slate-500 leading-tight mt-0.5 line-clamp-2">${sp.tagline}</p>
          </div>
        </div>

        <div class="space-y-1 pt-1">
          <input
            type="text"
            id="adoptNickname_${sp.id}"
            value="${isCurrent && currentPet ? escapeHtml(currentPet.nickname) : sp.defaultNickname}"
            placeholder="Nickname..."
            class="w-full px-2.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <button
          type="button"
          onclick="selectCompanionSpecies('${sp.id}')"
          class="w-full py-2 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 ${isCurrent ? 'bg-emerald-700 text-white shadow' : 'bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white shadow-sm'}"
        >
          <span>${isCurrent ? '✓ Active in Sanctuary' : 'Adopt Companion'}</span>
        </button>
      </div>
    `;
  }).join('');
}

function selectCompanionSpecies(speciesId) {
  ensurePetsState();
  const sp = PET_SPECIES_CATALOG[speciesId];
  if (!sp) return;

  const nickInput = document.getElementById(`adoptNickname_${speciesId}`);
  const nickname = (nickInput && nickInput.value.trim()) || sp.defaultNickname;

  state.pets.sanctuaryPet = {
    species: speciesId,
    nickname: nickname,
    stage: 1,
    stageFocusMinutes: 0,
    vitality: 100,
    isSick: false,
    isDead: false,
    adoptedAt: getTodayISO(),
    totalPets: 0,
    totalFeeds: 0
  };

  currentSanctuarySpecies = null;
  saveState();
  closeAdoptPetModal();
  renderPetsView();
  showToast(`Adopted ${nickname} the ${sp.name}! Care for them as you focus.`);
  playPetHappyChime();
}

// -------------------------------------------------------------------------
// Visual Particle Bursts & Floating Emojis
// -------------------------------------------------------------------------
function spawnPettingHeartFountain() {
  const layer = document.getElementById('sanctuaryEffectLayer');
  if (!layer) return;

  const emojis = ['❤️', '💖', '✨', '💕', '⭐', '🌸', '🥰'];

  for (let i = 0; i < 9; i++) {
    const el = document.createElement('div');
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.className = 'absolute pointer-events-none select-none';
    const startX = 45 + (Math.random() - 0.5) * 15;
    const startY = 48 + (Math.random() - 0.5) * 15;
    el.style.left = `${startX}%`;
    el.style.top = `${startY}%`;
    el.style.fontSize = `${16 + Math.random() * 14}px`;
    el.style.opacity = '1';
    el.style.transition = 'transform 1s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 1s ease-out';
    el.style.transform = 'translate(0, 0) scale(0.6)';
    layer.appendChild(el);

    const targetX = (Math.random() - 0.5) * 110;
    const targetY = -70 - Math.random() * 60;

    setTimeout(() => {
      el.style.transform = `translate(${targetX}px, ${targetY}px) scale(1.3)`;
      el.style.opacity = '0';
    }, 25);

    setTimeout(() => {
      el.remove();
    }, 1100);
  }
}

function spawnSanctuaryBurstParticles(emoji = '✨') {
  const layer = document.getElementById('sanctuaryEffectLayer');
  if (!layer) return;

  for (let i = 0; i < 6; i++) {
    const el = document.createElement('div');
    el.textContent = emoji;
    el.className = 'absolute pointer-events-none text-xl sm:text-2xl transition-all select-none';
    el.style.left = `${30 + Math.random() * 40}%`;
    el.style.top = `${40 + Math.random() * 30}%`;
    el.style.opacity = '1';
    el.style.transform = 'translateY(0) scale(0.8)';
    layer.appendChild(el);

    setTimeout(() => {
      el.style.transform = `translateY(-${60 + Math.random() * 40}px) scale(1.3)`;
      el.style.opacity = '0';
    }, 30);

    setTimeout(() => {
      el.remove();
    }, 1100);
  }
}

// -------------------------------------------------------------------------
// Sound Chimes for Pet Interactions
// -------------------------------------------------------------------------
function playPetHappyChime() {
  if (state.soundMuted) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc.frequency.exponentialRampToValueAtTime(880.00, ctx.currentTime + 0.15); // A5
    osc.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.28); // C6
    gain.gain.setValueAtTime(0.09, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.41);
  } catch (e) {}
}

function playPetCoinChime() {
  if (state.soundMuted) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(987.77, ctx.currentTime); // B5
    osc.frequency.setValueAtTime(1318.51, ctx.currentTime + 0.08); // E6
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.41);
  } catch (e) {}
}

window.onThreeReady = function() {
  if (state.mainView === 'pets') {
    renderPetsView();
  }
};
