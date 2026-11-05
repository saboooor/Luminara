export default [
  {
    title: 'Lumistones & Warp Scrolls',
    description:
      'Discover or craft waystones across the Overworld, Nether, and End! Keep them Private, share them as Public, or make them Global for server-wide travel with zero XP cost.',
  },
  {
    title: 'Vehicles',
    description:
      'Visit /warp dealership to buy and drive cars, planes, and mining drills with custom wraps, fuel, and cargo storage!',
  },
  {
    title: 'Drugs, Strains & Cartels',
    description:
      'Grow custom crops, crossbreed cannabis strains, refine purity, infuse flavors, automate farms with workers, and sell to cartel buyers!',
  },
  {
    title: 'Auction House & Chest Shops',
    description:
      'List and bid on items server-wide with /ah and automatic mailbox delivery, or build zero-tax player Chest Shops at a public Lumistone!',
    learnmore: 'https://dev.bukkit.org/projects/chestshop#title-1-1',
  },
  {
    title: 'Tome of Echoes & Riftlinks',
    description:
      'Store, auto-pickup, and place building blocks directly from an upgradeable Tome, or share a group material ledger with friends using Riftlinks!',
  },
  {
    title: 'Animated Tree Felling',
    description:
      'Chop down entire trees with physics-based falling animations, domino chains, and automatic sapling replanting!',
  },
  {
    title: 'Custom Music Discs & Voice Chat',
    description:
      'Burn custom music with /disc burn <url>, build jukebox queues, video screens, and visualizers, and talk in proximity voice chat with Plasmo Voice or Simple Voice Chat.',
    learnmore: 'https://modrinth.com/plugin/plasmo-voice',
  },
  {
    title: 'Creative Plots & Building Tools',
    description:
      'Build in 50×50 Creative plots, preview chest contents with shelf displays, hang custom image maps, pose armor stands with flint, and browse decorative heads with /hdb!',
  },
  {
    title: 'AuraSkills & BottledXP',
    description:
      'Level up 15 skills to unlock stats and active mana abilities, or bottle your vanilla XP with /bottle get for safe storage and trading!',
    learnmore: 'https://wiki.aurelium.dev/auraskills',
  },
  {
    title: 'EvenMoreFish & Competitions',
    description:
      'Catch custom fish rarities, track your collection in the fishing journal, and compete in scheduled fishing tournaments for cash prizes!',
    learnmore:
      'https://evenmorefish.github.io/EvenMoreFish/docs/category/features',
  },
  {
    title: 'AngelChest',
    description:
      'When you die, your items and 95% of your XP are safely stored in an AngelChest for 10 minutes (protected for the first 5). Use /aclist to check locations or /actp to return!',
  },
  {
    title: 'Claims & Container Locks',
    description:
      'Protect your builds in the survival worlds with a golden shovel and customize claim behavior with /gpflags and Bolt container locks!',
  },
  {
    title: 'Jobs',
    description:
      'Join up to 3 careers based on your rank with /jobs and earn money and XP as you mine, build, farm, fish, and explore!',
  },
  {
    title: 'Custom World Generation',
    description:
      'Explore Terralith, Incendium, Nullscape, and Dungeons & Taverns overhauls across the Overworld, Nether, and End, with a live browser map!',
  },
  {
    title: 'Poses, Rideable Mobs & Sleep',
    description:
      'Sit or lay with /sit and /lay, chain leads with Tether, ride mobs after voting, or skip the night with 1 sleeper while accelerating crop ticks (or opt out with /nosleep)!',
  },
  {
    title: 'Fancy Crates, Tags & Ranks',
    description:
      'Vote for the server to earn crate keys, climb 12 voting ranks, and collect swappable gradient chat tags and suffixes!',
    learnmore: '/ranks',
  },
  {
    title: 'Discord Server',
    description:
      'Join our Discord server for announcements, linked server chat, support, and community events!',
    discord: 'https://discord.luminaramc.org',
  },
];

// Keep discovery links on the player handbook rather than external setup pages.
export const featureGuides: Record<string, string> = {
  'Lumistones & Warp Scrolls': '/docs/travel/waystones/',
  Vehicles: '/docs/vehicles/',
  'Drugs, Strains & Cartels': '/docs/gameplay/growing-and-strains/',
  'Auction House & Chest Shops': '/docs/economy/',
  'Tome of Echoes & Riftlinks': '/docs/building/block-storage/',
  'Animated Tree Felling': '/docs/gameplay/tree-felling/',
  'Custom Music Discs & Voice Chat': '/docs/social/music-discs/',
  'Creative Plots & Building Tools': '/docs/building/',
  'AuraSkills & BottledXP': '/docs/progression/skills/',
  'EvenMoreFish & Competitions': '/docs/progression/fishing/',
  AngelChest: '/docs/gameplay/angelchests/',
  'Claims & Container Locks': '/docs/protection/land-claims/',
  Jobs: '/docs/economy/jobs/',
  'Custom World Generation': '/docs/gameplay/world-map/',
  'Poses, Rideable Mobs & Sleep': '/docs/social/world-interactions/',
  'Fancy Crates, Tags & Ranks': '/docs/progression/voting-and-ranks/',
  'Discord Server': '/docs/social/chat-and-discord/',
};
