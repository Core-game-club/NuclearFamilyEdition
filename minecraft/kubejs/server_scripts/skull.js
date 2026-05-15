ServerEvents.recipes(event => {
  event.shaped('minecraft:skeleton_skull', [
    'BB',
    'BB'
  ], {
    B: 'minecraft:bone'
  }).id('kubejs:skeleton_skull_from_bones')
})