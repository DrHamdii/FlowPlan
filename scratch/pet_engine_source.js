// =========================================================================
// FLOWPLAN PETS SYSTEM (SANCTUARY, PLAYGROUND, 3D WANDERING, SHOP & LIFE STAGES)
// =========================================================================

const PET_FOODS_CATALOG = {
  '001-carrot': {
    id: '001-carrot',
    name: 'Crispy Carrot',
    icon: 'assets/Icons/png/001-carrot.png',
    price: 1,
    bestFor: 'Bunny & Beaver',
    description: 'Sweet, vitamin-rich garden root beloved by burrowers.'
  },
  '002-cabbage': {
    id: '002-cabbage',
    name: 'Crisp Cabbage',
    icon: 'assets/Icons/png/002-cabbage.png',
    price: 1,
    bestFor: 'Sheep, Cow & Alpaca',
    description: 'Fresh leafy greens packed with hydration and crunch.'
  },
  '003-corn': {
    id: '003-corn',
    name: 'Golden Sweetcorn',
    icon: 'assets/Icons/png/003-corn.png',
    price: 1,
    bestFor: 'Chicken & Duck',
    description: 'Sun-ripened golden kernels that birds eagerly peck.'
  },
  '004-sesame': {
    id: '004-sesame',
    name: 'Nutritious Seeds',
    icon: 'assets/Icons/png/004-sesame.png',
    price: 1,
    bestFor: 'Pigeon & Zebra',
    description: 'Toasted seeds rich in essential oils and energy.'
  },
  '005-meat': {
    id: '005-meat',
    name: 'Prime Meat Cut',
    icon: 'assets/Icons/png/005-meat.png',
    price: 2,
    bestFor: 'Wolf, Fox, Dog & Cat',
    description: 'Savory protein cut giving strength and high spirits.'
  },
  '006-fish': {
    id: '006-fish',
    name: 'Fresh Golden Trout',
    icon: 'assets/Icons/png/006-fish.png',
    price: 2,
    bestFor: 'Penguin & Otter',
    description: 'Stream-fresh trout shimmering with healthy omega oils.'
  },
  '007-bamboo': {
    id: '007-bamboo',
    name: 'Tender Bamboo Shoot',
    icon: 'assets/Icons/png/007-bamboo.png',
    price: 2,
    bestFor: 'Panda',
    description: 'Sweet highland bamboo stalks loved by gentle giants.'
  },
  '008-eucalyptus': {
    id: '008-eucalyptus',
    name: 'Eucalyptus Leaves',
    icon: 'assets/Icons/png/008-eucalyptus.png',
    price: 2,
    bestFor: 'Koala',
    description: 'Fragrant aromatic leaves providing cozy nourishment.'
  },
  '009-banana': {
    id: '009-banana',
    name: 'Sweet Yellow Banana',
    icon: 'assets/Icons/png/009-banana.png',
    price: 2,
    bestFor: 'Monkey',
    description: 'Creamy potassium-rich tropical fruit full of fun.'
  },
  '010-honey': {
    id: '010-honey',
    name: 'Wild Honeycomb Jar',
    icon: 'assets/Icons/png/010-honey.png',
    price: 2,
    bestFor: 'Bear & Friends',
    description: 'Pure golden forest nectar dripping with natural sweetness.'
  },
  '011-peanuts': {
    id: '011-peanuts',
    name: 'Roasted Peanuts',
    icon: 'assets/Icons/png/011-peanuts.png',
    price: 2,
    bestFor: 'Elephant',
    description: 'Crunchy roasted nuts that make playful trunks dance.'
  },
  '012-acorn': {
    id: '012-acorn',
    name: 'Woodland Oak Acorn',
    icon: 'assets/Icons/png/012-acorn.png',
    price: 2,
    bestFor: 'Deer & Pig',
    description: 'Nutritious autumn forest nut with a wholesome earthy flavor.'
  },
  '013-algae': {
    id: '013-algae',
    name: 'Crisp Sea Grass',
    icon: 'assets/Icons/png/013-algae.png',
    price: 2,
    bestFor: 'Bull, Buffalo & Horse',
    description: 'Mineral-rich marine greens providing deep stamina.'
  },
  '014-melon': {
    id: '014-melon',
    name: 'Juicy Sweet Melon',
    icon: 'assets/Icons/png/014-melon.png',
    price: 2,
    bestFor: 'Frog',
    description: 'Refreshing slice of summer melon with crisp sweet juice.'
  },
  '015-berries': {
    id: '015-berries',
    name: 'Wild Gourmet Berries',
    icon: 'assets/Icons/png/015-berries.png',
    price: 3,
    bestFor: 'Universal Gourmet Treat (All Pets)',
    description: 'Rare handpicked forest berries that every animal adores.'
  }
};

const PET_SPECIES_CATALOG = {
  alpaca: {
    id: 'alpaca',
    name: 'Alpaca',
    defaultNickname: 'Puffy',
    favoriteFood: '002-cabbage',
    tagline: 'Gentle fleece friend who hums softly when contented.',
    scaleBase: 1.0
  },
  beaver: {
    id: 'beaver',
    name: 'Beaver',
    defaultNickname: 'Chippy',
    favoriteFood: '001-carrot',
    tagline: 'Industrious builder who takes pride in great craftsmanship.',
    scaleBase: 1.0
  },
  bull: {
    id: 'bull',
    name: 'Bull',
    defaultNickname: 'Ferdinand',
    favoriteFood: '013-algae',
    tagline: 'Quietly powerful meadow guardian who loves smelling flowers.',
    scaleBase: 1.1
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
    favoriteFood: '005-meat',
    tagline: 'Elegant companion whose gentle purr calms any focus session.',
    scaleBase: 0.95
  },
  chicken: {
    id: 'chicken',
    name: 'Chicken',
    defaultNickname: 'Clucky',
    favoriteFood: '003-corn',
    tagline: 'Cheerful early bird that greets every sunrise with enthusiasm.',
    scaleBase: 0.9
  },
  cow: {
    id: 'cow',
    name: 'Cow',
    defaultNickname: 'Bessie',
    favoriteFood: '002-cabbage',
    tagline: 'Peaceful pasture dweller who brings tranquil grounding energy.',
    scaleBase: 1.1
  },
  deer: {
    id: 'deer',
    name: 'Deer',
    defaultNickname: 'Fawn',
    favoriteFood: '012-acorn',
    tagline: 'Graceful forest wanderer with gentle eyes and soft steps.',
    scaleBase: 1.05
  },
  dog: {
    id: 'dog',
    name: 'Dog',
    defaultNickname: 'Barnaby',
    favoriteFood: '005-meat',
    tagline: 'Faithful best friend always wagging their tail beside you.',
    scaleBase: 1.0
  },
  duck: {
    id: 'duck',
    name: 'Duck',
    defaultNickname: 'Quigley',
    favoriteFood: '003-corn',
    tagline: 'Happy waddler who splashes with delight on pond shores.',
    scaleBase: 0.9
  },
  elephant: {
    id: 'elephant',
    name: 'Elephant',
    defaultNickname: 'Peanut',
    favoriteFood: '011-peanuts',
    tagline: 'Wise gentle giant who never forgets your hard work.',
    scaleBase: 1.25
  },
  fox: {
    id: 'fox',
    name: 'Red Fox',
    defaultNickname: 'Rusty',
    favoriteFood: '005-meat',
    tagline: 'Clever kit with a fluffy tail and a curious golden gaze.',
    scaleBase: 1.0
  },
  frog: {
    id: 'frog',
    name: 'Frog',
    defaultNickname: 'Hoppy',
    favoriteFood: '014-melon',
    tagline: 'Vibrant lily pad acrobat with rhythmic happy croaks.',
    scaleBase: 0.85
  },
  horse: {
    id: 'horse',
    name: 'Horse',
    defaultNickname: 'Spirit',
    favoriteFood: '013-algae',
    tagline: 'Noble spirit who runs like the wind across open horizons.',
    scaleBase: 1.15
  },
  koala: {
    id: 'koala',
    name: 'Koala',
    defaultNickname: 'Koko',
    favoriteFood: '008-eucalyptus',
    tagline: 'Peaceful treetop dreamer hugging branches through the day.',
    scaleBase: 0.95
  },
  monkey: {
    id: 'monkey',
    name: 'Monkey',
    defaultNickname: 'Milo',
    favoriteFood: '009-banana',
    tagline: 'Playful acrobat who does joyful flips whenever you focus.',
    scaleBase: 0.95
  },
  otter: {
    id: 'otter',
    name: 'Otter',
    defaultNickname: 'Bubbles',
    favoriteFood: '006-fish',
    tagline: 'River juggler floating on their back and smiling at the sky.',
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
    name: 'Pig',
    defaultNickname: 'Truffle',
    favoriteFood: '012-acorn',
    tagline: 'Cheery forager with a super nose for delicious snacks.',
    scaleBase: 1.0
  },
  pigeon: {
    id: 'pigeon',
    name: 'Pigeon',
    defaultNickname: 'Percy',
    favoriteFood: '004-sesame',
    tagline: 'Faithful urban navigator cooing softly from the balcony.',
    scaleBase: 0.85
  },
  sheep: {
    id: 'sheep',
    name: 'Sheep',
    defaultNickname: 'Woolly',
    favoriteFood: '002-cabbage',
    tagline: 'Walking fluffy cloud who grazes calmly on green hillsides.',
    scaleBase: 1.0
  },
  wolf: {
    id: 'wolf',
    name: 'Wolf',
    defaultNickname: 'Ghost',
    favoriteFood: '005-meat',
    tagline: 'Majestic wilderness sentinel bound to your side in loyalty.',
    scaleBase: 1.1
  },
  zebra: {
    id: 'zebra',
    name: 'Zebra',
    defaultNickname: 'Ziggy',
    favoriteFood: '004-sesame',
    tagline: 'Striking savannah runner with hypnotic black-and-white stripes.',
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
      <div class="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-yellow-300/30 blur-2xl pointer-events-none"></div>
      <div class="absolute bottom-2 left-6 text-2xl opacity-60 pointer-events-none animate-bounce" style="animation-duration: 4s;">🌼</div>
      <div class="absolute bottom-4 right-10 text-2xl opacity-60 pointer-events-none animate-bounce" style="animation-duration: 3.2s;">🌸</div>
      <div class="absolute top-4 left-1/4 text-xl opacity-40 pointer-events-none animate-pulse">🦋</div>
    `
  },
  carnival: {
    id: 'carnival',
    name: '🎪 Carnival Fun Park',
    containerClass: 'bg-gradient-to-b from-amber-200 via-rose-100 to-purple-200 dark:from-indigo-950 dark:via-purple-950/60 dark:to-slate-950',
    ambienceHtml: `
      <div class="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-pink-400/20 blur-2xl pointer-events-none"></div>
      <div class="absolute top-2 inset-x-0 flex justify-around text-lg opacity-60 pointer-events-none select-none"><span>🚩</span><span>🎪</span><span>🎈</span><span>🎡</span><span>✨</span></div>
      <div class="absolute bottom-3 left-10 text-2xl opacity-70 pointer-events-none animate-bounce" style="animation-duration: 2.5s;">🎈</div>
      <div class="absolute bottom-2 right-12 text-2xl opacity-60 pointer-events-none">🍿</div>
    `
  },
  beach: {
    id: 'beach',
    name: '🏖️ Sunny Beach Resort',
    containerClass: 'bg-gradient-to-b from-cyan-200 via-amber-100 to-yellow-200 dark:from-slate-900 dark:via-cyan-950/40 dark:to-slate-950',
    ambienceHtml: `
      <div class="absolute -top-10 left-10 w-48 h-48 rounded-full bg-amber-300/30 blur-2xl pointer-events-none"></div>
      <div class="absolute bottom-2 left-4 text-2xl opacity-60 pointer-events-none">🌴</div>
      <div class="absolute bottom-1 right-8 text-2xl opacity-60 pointer-events-none">🐚</div>
      <div class="absolute top-4 right-1/4 text-xl opacity-50 pointer-events-none animate-pulse">☀️</div>
    `
  },
  woodland: {
    id: 'woodland',
    name: '🌲 Mystic Woodland',
    containerClass: 'bg-gradient-to-b from-emerald-300 via-teal-100 to-emerald-200 dark:from-teal-950 dark:via-emerald-950/60 dark:to-slate-950',
    ambienceHtml: `
      <div class="absolute -top-8 -right-8 w-44 h-44 rounded-full bg-emerald-400/20 blur-2xl pointer-events-none"></div>
      <div class="absolute bottom-2 left-8 text-2xl opacity-60 pointer-events-none">🍄</div>
      <div class="absolute bottom-3 right-14 text-2xl opacity-60 pointer-events-none">🌲</div>
      <div class="absolute top-6 left-1/3 text-lg opacity-60 pointer-events-none animate-ping" style="animation-duration: 3s;">✨</div>
    `
  },
  cosmic: {
    id: 'cosmic',
    name: '🌌 Cosmic Starlight',
    containerClass: 'bg-gradient-to-b from-indigo-900 via-purple-900 to-slate-950 text-white',
    ambienceHtml: `
      <div class="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-purple-500/30 blur-3xl pointer-events-none"></div>
      <div class="absolute top-4 left-6 text-xl opacity-70 pointer-events-none animate-pulse">⭐</div>
      <div class="absolute top-10 right-12 text-sm opacity-60 pointer-events-none animate-pulse">✨</div>
      <div class="absolute bottom-3 left-1/3 text-2xl opacity-60 pointer-events-none animate-bounce" style="animation-duration: 5s;">🪐</div>
    `
  }
};

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
    isWandering: false
  },
  playground: {
    renderer: null,
    scene: null,
    camera: null,
    mixers: [],
    models: [],
    animFrameId: null,
    clock: null
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
// Playground Renderer (Stage 5 Champions)
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
  const gradCountLabel = document.getElementById('playgroundGraduateCountLabel');

  if (gradCountLabel) {
    gradCountLabel.textContent = `${graduated.length} Champion${graduated.length === 1 ? '' : 's'} in Playground`;
  }

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

// -------------------------------------------------------------------------
// Sanctuary Renderer (Active Growth Chamber: Stages 1–4)
// -------------------------------------------------------------------------
function renderSanctuarySection() {
  ensurePetsState();
  const pet = state.pets.sanctuaryPet;

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
    // Empty Sanctuary - prompt to adopt
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

  // Render 3D Model in Viewport
  renderSanctuaryPet3D(pet);
}

// -------------------------------------------------------------------------
// 3D Engine: Sanctuary Pet Rendering with Three.js & Skeletal Animations
// -------------------------------------------------------------------------
let currentSanctuarySpecies = null;

function renderSanctuaryPet3D(pet) {
  const container = document.getElementById('sanctuaryPetGraphic');
  if (!container) return;

  // Fallback to 2D illustrated card if Three.js or GLTFLoader is unavailable
  if (!window.isThreeAvailable || !window.THREE || !window.GLTFLoader) {
    renderSanctuary2DFallback(pet, container);
    return;
  }

  // If already rendered same species, update scale/animations without reloading whole canvas
  if (currentSanctuarySpecies === pet.species && FlowPlanPet3D.sanctuary.model) {
    updateSanctuary3DModelScale(pet);
    return;
  }

  currentSanctuarySpecies = pet.species;
  container.innerHTML = '';

  const width = container.clientWidth || 320;
  const height = container.clientHeight || 280;

  // Scene, Camera, Renderer
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

  // Ground shadow disc
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

      // Calculate bounding box and scale
      const stageDef = PET_STAGE_DEFINITIONS[Math.max(0, Math.min(4, (pet.stage || 1) - 1))];
      const speciesDef = PET_SPECIES_CATALOG[pet.species] || { scaleBase: 1.0 };
      const scale = (speciesDef.scaleBase || 1.0) * (stageDef.scaleFactor || 1.0);
      model.scale.set(scale, scale, scale);
      model.position.set(0, 0, 0);
      scene.add(model);

      // Skeletal Animations
      const mixer = new THREE.AnimationMixer(model);
      FlowPlanPet3D.sanctuary.mixer = mixer;
      FlowPlanPet3D.sanctuary.actions = {};

      if (gltf.animations && gltf.animations.length > 0) {
        gltf.animations.forEach((clip) => {
          const action = mixer.clipAction(clip);
          FlowPlanPet3D.sanctuary.actions[clip.name.toLowerCase()] = action;
        });

        // Start with idle or sick animation
        const initialClip = pet.isDead ? 'gesture-negative' : pet.isSick ? 'gesture-negative' : 'idle';
        playSanctuaryAction(initialClip);
      }

      FlowPlanPet3D.sanctuary.renderer = renderer;
      FlowPlanPet3D.sanctuary.scene = scene;
      FlowPlanPet3D.sanctuary.camera = camera;
      FlowPlanPet3D.sanctuary.clock = new THREE.Clock();

      // Start autonomous wandering & rendering loop
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

    // Autonomous wandering between waypoints
    const model = sanctuary.model;
    const pet = state.pets && state.pets.sanctuaryPet;
    if (model && pet && !pet.isDead) {
      const now = Date.now();
      if (!isMoving && now >= nextWaypointTime) {
        // Pick new random waypoint within bounds
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
          // Smooth rotation towards waypoint
          const targetAngle = Math.atan2(dx, dz);
          model.rotation.y = THREE.MathUtils.lerp(model.rotation.y, targetAngle, 0.1);

          // Step forward
          model.position.x += (dx / dist) * delta * 0.8;
          model.position.z += (dz / dist) * delta * 0.8;
        } else {
          // Arrived
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
        class="w-36 h-36 object-contain filter drop-shadow-xl transition-all duration-300 ${pet.isDead ? 'rotate-90 opacity-60' : pet.isSick ? 'hue-rotate-90 animate-pulse' : 'hover:scale-105'}"
        style="transform: scale(${scale});"
      />
      <div class="w-32 h-4 rounded-full bg-slate-900/10 dark:bg-black/40 blur-sm mt-1"></div>
    </div>
  `;
}

// -------------------------------------------------------------------------
// Playground Multi-Pet Roamer (3D or 2D)
// -------------------------------------------------------------------------
function renderPlayground3DOr2D(graduatedPets) {
  const field = document.getElementById('playgroundRoamingField');
  if (!field) return;

  // Clean and render multi-pet roaming field
  field.innerHTML = `
    <div class="w-full h-full relative overflow-hidden flex items-center justify-center">
      <div id="playgroundPetsGrid" class="flex flex-wrap items-center justify-center gap-6 p-4 z-10 w-full">
        ${graduatedPets.map((p, idx) => `
          <div
            onclick="interactPlaygroundPet(${idx})"
            class="group cursor-pointer flex flex-col items-center justify-center p-2 rounded-2xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm border border-white/60 dark:border-slate-800 hover:scale-110 active:scale-95 transition-all shadow-sm"
            title="Click to greet champion ${p.nickname}!"
          >
            <div class="relative">
              <img
                src="assets/Animals/Previews/animal-${p.species}.png"
                alt="${p.nickname}"
                class="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow animate-bounce"
                style="animation-duration: ${2.8 + (idx % 3) * 0.6}s;"
              />
              <span class="absolute -top-1 -right-1 text-xs">👑</span>
            </div>
            <span class="text-[11px] font-black text-slate-900 dark:text-white mt-1 group-hover:text-purple-600 transition-colors">
              ${p.nickname}
            </span>
            <span class="text-[9px] uppercase font-bold text-slate-500 dark:text-slate-400">
              Stage 5 Champion
            </span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function interactPlaygroundPet(idx) {
  ensurePetsState();
  const pet = state.pets.graduatedPets[idx];
  if (!pet) return;
  spawnSanctuaryBurstParticles('❤️');
  showToast(`👑 Champion ${pet.nickname} does a joyful victory dance for you!`);
  playPetHappyChime();
}

// -------------------------------------------------------------------------
// Care Actions: Petting, Feeding, Revival
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

  // Animation & Audio
  playSanctuaryAction('dance', 2200);
  spawnSanctuaryHeartParticles();
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

  // Check if user owns preferred food, or universal berries ('015-berries')
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

  // Deduct food & add +50% Vitality
  state.pets.inventory[foodUsed] -= 1;
  pet.vitality = Math.min(100, (pet.vitality || 0) + 50);
  pet.totalFeeds = (pet.totalFeeds || 0) + 1;

  if (pet.vitality >= 15 && pet.isSick) {
    pet.isSick = false;
    showToast(`🎉 Cured! ${pet.nickname} is well-fed and healthy again! (+50% Vitality)`);
  } else {
    showToast(`Delicious! Fed ${foodDef.name} to ${pet.nickname} (+50% Vitality)`);
  }

  // Animation & Audio
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

    return `
      <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-2 hover:border-amber-400 dark:hover:border-amber-600 transition shadow-sm">
        <div class="flex items-start gap-2.5">
          <img src="${food.icon}" alt="${food.name}" class="w-10 h-10 object-contain shrink-0 drop-shadow" />
          <div class="space-y-0.5 min-w-0">
            <h4 class="text-xs font-black text-slate-900 dark:text-white truncate">${food.name}</h4>
            <p class="text-[10px] text-amber-700 dark:text-amber-300 font-semibold truncate">${food.bestFor}</p>
            <p class="text-[10px] text-slate-400 leading-tight line-clamp-2">${food.description}</p>
          </div>
        </div>

        <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/60">
          <div class="flex items-center gap-1">
            <span class="text-xs font-mono font-black text-amber-600 dark:text-amber-400">${food.price} 🪙</span>
            <span class="text-[10px] font-bold text-slate-400">(${owned} owned)</span>
          </div>

          <button
            type="button"
            onclick="buyPetFood('${food.id}')"
            ${!canAfford ? 'disabled' : ''}
            class="px-3 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1 ${canAfford ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 active:scale-95 shadow-sm' : 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed opacity-60'}"
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
      <div class="p-4 rounded-2xl ${isCurrent ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-2 border-emerald-500' : 'bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700'} flex flex-col justify-between space-y-3 transition shadow-sm">
        <div class="flex items-center gap-3">
          <img src="assets/Animals/Previews/animal-${sp.id}.png" alt="${sp.name}" class="w-14 h-14 object-contain rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1 drop-shadow" />
          <div class="min-w-0">
            <h4 class="text-sm font-black text-slate-900 dark:text-white truncate">${sp.name}</h4>
            <span class="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 dark:text-amber-300">
              <img src="${favFood.icon}" alt="Fav" class="w-3.5 h-3.5 object-contain" />
              <span>Fav: ${favFood.name}</span>
            </span>
            <p class="text-[10px] text-slate-400 leading-tight mt-0.5 line-clamp-2">${sp.tagline}</p>
          </div>
        </div>

        <div class="space-y-1.5 pt-1">
          <label class="text-[10px] font-bold text-slate-500 dark:text-slate-400">Nickname:</label>
          <input
            type="text"
            id="adoptNickname_${sp.id}"
            value="${isCurrent && currentPet ? escapeHtml(currentPet.nickname) : sp.defaultNickname}"
            placeholder="Give a nickname..."
            class="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <button
          type="button"
          onclick="selectCompanionSpecies('${sp.id}')"
          class="w-full py-2 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 ${isCurrent ? 'bg-emerald-700 text-white shadow' : 'bg-emerald-600 hover:bg-emerald-500 text-white active:scale-95 shadow-sm'}"
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

  // Adopt fresh pet into Sanctuary
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
function spawnSanctuaryHeartParticles() {
  spawnSanctuaryBurstParticles('❤️');
}

function spawnSanctuaryBurstParticles(emoji = '✨') {
  const layer = document.getElementById('sanctuaryEffectLayer');
  if (!layer) return;

  for (let i = 0; i < 5; i++) {
    const el = document.createElement('div');
    el.textContent = emoji;
    el.className = 'absolute pointer-events-none text-xl sm:text-2xl transition-all select-none animate-bounce';
    el.style.left = `${30 + Math.random() * 40}%`;
    el.style.top = `${40 + Math.random() * 30}%`;
    el.style.opacity = '1';
    el.style.transform = `translateY(0) scale(${0.8 + Math.random() * 0.5})`;
    layer.appendChild(el);

    setTimeout(() => {
      el.style.transform = `translateY(-${60 + Math.random() * 40}px) scale(1.3)`;
      el.style.opacity = '0';
    }, 40);

    setTimeout(() => {
      el.remove();
    }, 1200);
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
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.36);
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
