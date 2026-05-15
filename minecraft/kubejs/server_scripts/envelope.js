ServerEvents.recipes(event => {
  event.shaped('envelope:paper_box', [
    ' P ',
    'PSP',
    ' P '
  ], {
    P: 'minecraft:paper',
    S: 'minecraft:slime_ball'
  }).id('envelope:paper_box')
})