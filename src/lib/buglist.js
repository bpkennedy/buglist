const totalNumberSpecies = 11
const firstWeight = 0.05
const lastWeight = 1.0

// Formula for calculating weight: using linear interpolation
function getWeight(index) {
  return firstWeight + (index - 1) * (lastWeight - firstWeight) / (totalNumberSpecies - 1)
}

export const legend = [{
    key: 'common',
    badge: 'c',
    name: 'Common',
    rarity: 1,
    color: 'white',
    weight: getWeight(1),
  }, {
    key: 'average',
    badge: 'a',
    name: 'Average',
    rarity: 2,
    color: 'gray',
    weight: getWeight(2),
  }, {
    key: 'custom',
    badge: 'c·',
    name: 'Custom',
    rarity: 2,
    color: 'red',
    weight: getWeight(3),
  }, {
    key: 'rare',
    badge: 'r',
    name: 'Rare',
    rarity: 3,
    color: 'orange',
    weight: getWeight(4),
  }, {
    key: 'shape',
    badge: 's',
    name: 'Shape',
    rarity: 3,
    color: 'yellow',
    weight: getWeight(5),
  }, {
    key: 'exotic',
    badge: 'e',
    name: 'Exotic',
    rarity: 3,
    color: 'green',
    weight: getWeight(6),
  }, {
    key: 'mech',
    badge: 'm',
    name: 'Mech',
    rarity: 3,
    color: 'teal',
    weight: getWeight(7),
  }, {
    key: 'bossLevel',
    badge: 'b',
    name: 'Boss Level',
    rarity: 4,
    color: 'blue',
    weight: getWeight(8),
  }, {
    key: 'prehistoric',
    badge: 'p',
    name: 'Prehistoric',
    rarity: 4,
    color: 'cyan',
    weight: getWeight(9),
  }, {
    key: 'waffle',
    badge: 'w',
    name: 'Waffle',
    rarity: 5,
    color: 'purple',
    weight: getWeight(10),
  }, {
    key: 'ultra',
    badge: 'u',
    name: 'Ultra',
    rarity: 5,
    color: 'black',
    weight: getWeight(11),
  },
]
