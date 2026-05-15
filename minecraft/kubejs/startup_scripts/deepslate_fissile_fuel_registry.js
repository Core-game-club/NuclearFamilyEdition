// Deepslate-based late-game fissile fuel synthesis materials.

StartupEvents.registry('item', event => {
  event.create('deepslate_catalyst')
    .displayName('Deepslate Catalyst')
    .texture('kubejs:item/deepslate_catalyst')

  event.create('irradiated_deepslate_catalyst')
    .displayName('Irradiated Deepslate Catalyst')
    .texture('kubejs:item/irradiated_deepslate_catalyst')
})

StartupEvents.registry('mekanism:chemical', event => {
  event.create('dirty_deepslate_slurry')
    .tint(0x34363b)

  event.create('clean_deepslate_slurry')
    .tint(0x686d78)

  event.create('fissile_fuel_matrix')
    .tint(0x52745f)
    .gaseous()

  event.create('raw_fissile_fuel_matrix')
    .tint(0x5F6B32)
    .gaseous()
})