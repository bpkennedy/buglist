const totalNumberSpecies = 11
const firstWeight = 0.05
const lastWeight = 1.0

// Formula for calculating weight: using linear interpolation
function getWeight(index) {
  return firstWeight + (index - 1) * (lastWeight - firstWeight) / (totalNumberSpecies - 1)
}

const COMMON = 'common'
const AVERAGE = 'average'
const CUSTOM = 'custom'
const RARE = 'rare'
const SHAPE = 'shape'
const EXOTIC = 'exotic'
const MECH = 'mech'
const BOSS_LEVEL = 'bossLevel'
const PREHISTORIC = 'prehistoric'
const WAFFLE = 'waffle'
const ULTRA = 'ultra'

export const legend = [{
    key: COMMON,
    badge: 'c',
    name: 'Common',
    rarity: 1,
    color: 'white',
    textColor: 'black',
    weight: getWeight(1),
  }, {
    key: AVERAGE,
    badge: 'a',
    name: 'Average',
    rarity: 2,
    color: 'gray',
    textColor: 'white',
    weight: getWeight(2),
  }, {
    key: CUSTOM,
    badge: 'c·',
    name: 'Custom',
    rarity: 2,
    color: 'red',
    textColor: 'white',
    weight: getWeight(3),
  }, {
    key: RARE,
    badge: 'r',
    name: 'Rare',
    rarity: 3,
    color: 'orange',
    textColor: 'black',
    weight: getWeight(4),
  }, {
    key: SHAPE,
    badge: 's',
    name: 'Shape',
    rarity: 3,
    color: 'yellow',
    textColor: 'black',
    weight: getWeight(5),
  }, {
    key: EXOTIC,
    badge: 'e',
    name: 'Exotic',
    rarity: 3,
    color: 'green',
    textColor: 'white',
    weight: getWeight(6),
  }, {
    key: MECH,
    badge: 'm',
    name: 'Mech',
    rarity: 3,
    color: 'teal',
    textColor: 'white',
    weight: getWeight(7),
  }, {
    key: BOSS_LEVEL,
    badge: 'b',
    name: 'Boss Level',
    rarity: 4,
    color: 'blue',
    textColor: 'white',
    weight: getWeight(8),
  }, {
    key: PREHISTORIC,
    badge: 'p',
    name: 'Prehistoric',
    rarity: 4,
    color: 'cyan',
    textColor: 'black',
    weight: getWeight(9),
  }, {
    key: WAFFLE,
    badge: 'w',
    name: 'Waffle',
    rarity: 5,
    color: 'purple',
    textColor: 'white',
    weight: getWeight(10),
  }, {
    key: ULTRA,
    badge: 'u',
    name: 'Ultra',
    rarity: 5,
    color: 'black',
    textColor: 'white',
    weight: getWeight(11),
  },
]

export const species = [
  // 
  // Page 1
  // 
  //
  {
    key: 'blackWeb',
    name: 'Black Web',
    type: RARE,
    pages: [1],
  }, {
    key: 'bleachLeach',
    name: 'Bleach Leach',
    type: AVERAGE,
    pages: [1],
  }, {
    key: 'bugIve',
    name: 'Bug Ive',
    type: COMMON,
    pages: [1],
  }, {
    key: 'discoWeb',
    name: 'Disco Web',
    type: RARE,
    pages: [1],
  }, {
    key: 'flufer',
    name: 'Flufer',
    type: RARE,
    pages: [1],
  }, {
    key: 'insectapus',
    name: 'Insectapus',
    type: EXOTIC,
    pages: [1],
  }, {
    key: 'leaferfly',
    name: 'Leaferfly',
    type: AVERAGE,
    pages: [1],
  }, {
    key: 'milkWeederfly',
    name: 'Milk Weederfly',
    type: COMMON,
    pages: [1],
  }, {
    key: 'otterbug',
    name: 'Otterbug',
    type: AVERAGE,
    pages: [1],
  }, {
    key: 'pachBen',
    name: 'Pach Ben',
    type: CUSTOM,
    pages: [1],
  }, {
    key: 'shardBug',
    name: 'Shard Bug',
    type: COMMON,
    pages: [1],
  }, {
    key: 'softWorm',
    name: 'Soft Worm',
    type: COMMON,
    pages: [1],
  }, {
    key: 'spiderSkeleton',
    name: 'Spider Skeleton',
    type: AVERAGE,
    pages: [1],
  }, {
    key: 'stoneBurner',
    name: 'Stone Burner',
    type: RARE,
    pages: [1],
  }, {
    key: 'syrupHopper',
    name: 'Syrup Hopper',
    type: WAFFLE,
    pages: [1],
  }, {
    key: 'waffleWeb',
    name: 'Waffle Web',
    type: WAFFLE,
    pages: [1],
  },
  // 
  // Page 2
  // 
  //
  {
    key: 'boutHam',
    name: 'Bout Ham',
    type: COMMON,
    pages: [2],
  }, {
    key: 'ciniminipoly',
    name: 'Ciniminipoly',
    type: EXOTIC,
    pages: [2],
  }, {
    key: 'crabHopper',
    name: 'Crab Hopper',
    type: COMMON,
    pages: [2],
  }, {
    key: 'floweb',
    name: 'Floweb',
    type: AVERAGE,
    pages: [2],
  }, {
    key: 'flyHopper',
    name: 'Fly Hopper',
    type: AVERAGE,
    pages: [2],
  }, {
    key: 'gnatBot',
    name: 'Gnat Bot',
    type: MECH,
    pages: [2],
  }, {
    key: 'ponand',
    name: 'Ponand',
    type: AVERAGE,
    pages: [2],
  }, {
    key: 'roboWeb',
    name: 'Robo Web',
    type: MECH,
    pages: [2],
  }, {
    key: 'titanHopper',
    name: 'Titan Hopper',
    type: BOSS_LEVEL,
    pages: [2],
  }, {
    key: 'titanRockBurner',
    name: 'Titan Rock Burner',
    type: BOSS_LEVEL,
    pages: [2],
  }, {
    key: 'triHopper',
    name: 'Tri Hopper',
    type: RARE,
    pages: [2],
  }, {
    key: 'webBeatle',
    name: 'Web Beatle',
    type: RARE,
    pages: [2],
  }, {
    key: 'webHopper',
    name: 'Web Hopper',
    type: RARE,
    pages: [2],
  }, {
    key: 'robeatle',
    name: 'Robeatle',
    type: MECH,
    pages: [2],
  }, {
    key: 'stringGnat',
    name: 'String Gnat',
    type: COMMON,
    pages: [2],
  }, {
    key: 'prismarineHopper',
    name: 'Prismarine Hopper',
    type: RARE,
    pages: [2],
  },
  // 
  // Page 3
  // 
  //
  {
    key: 'bitMite',
    name: 'Bit Mite',
    type: RARE,
    pages: [3],
  }, {
    key: 'bubbleBug',
    name: 'Bubble Bug',
    type: COMMON,
    pages: [3],
  }, {
    key: 'bunBug',
    name: 'Bun Bug',
    type: CUSTOM,
    pages: [3],
  }, {
    key: 'coriBeatle',
    name: 'Cori Beatle',
    type: COMMON,
    pages: [3],
  }, {
    key: 'chomp',
    name: 'Chomp',
    type: RARE,
    pages: [3],
  }, {
    key: 'dogAnt',
    name: 'Dog Ant',
    type: COMMON,
    pages: [3],
  }, {
    key: 'electricWeb',
    name: 'Electric Web',
    type: COMMON,
    pages: [3],
  }, {
    key: 'psyBug',
    name: 'Psy Bug',
    type: RARE,
    pages: [3],
  }, {
    key: 'spotAnt',
    name: 'Spot Ant',
    type: AVERAGE,
    pages: [3],
  }, {
    key: 'tigerBeatle',
    name: 'Tiger Beatle',
    type: AVERAGE,
    pages: [3],
  }, {
    key: 'tigerHopper',
    name: 'Tiger Hopper',
    type: RARE,
    pages: [3],
  }, {
    key: 'titanWeb',
    name: 'Titan Web',
    type: BOSS_LEVEL,
    pages: [3],
  }, {
    key: 'triBeatle',
    name: 'Tri Beatle',
    type: RARE,
    pages: [3],
  }, {
    key: 'twistAnt',
    name: 'Twist Ant',
    type: COMMON,
    pages: [3],
  }, {
    key: 'webDragon',
    name: 'Web Dragon',
    type: BOSS_LEVEL,
    pages: [3],
  }, {
    key: 'windHopper',
    name: 'Wind Hopper',
    type: COMMON,
    pages: [3],
  }
]
