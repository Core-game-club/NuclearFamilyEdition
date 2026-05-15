// Late-game Mekanism chain: deepslate and reactor byproducts into fissile fuel.

ServerEvents.recipes(event => {
  event.custom({
    type: 'mekanism:dissolution',
    item_input: {
      count: 1,
      item: 'minecraft:deepslate'
    },
    chemical_input: {
      amount: 100,
      chemical: 'mekanism:sulfuric_acid'
    },
    output: {
      amount: 100,
      id: 'kubejs:dirty_deepslate_slurry'
    },
  per_tick_usage: false
  }).id('kubejs:dissolution/dirty_deepslate_slurry_from_deepslate')

  event.custom({
    type: 'mekanism:washing',
    fluid_input: {
      amount: 1000,
     tag: 'minecraft:water'
    },
    chemical_input: {
      amount: 100,
      chemical: 'kubejs:dirty_deepslate_slurry'
    },
    output: {
      amount: 100,
      id: 'kubejs:clean_deepslate_slurry'
    },
  }).id('kubejs:washing/clean_deepslate_slurry')

  event.custom({
    type: 'mekanism:crystallizing',
    input: {
      amount: 100,
      chemical: 'kubejs:clean_deepslate_slurry',
    },
    output: {
      count: 1,
      id: 'kubejs:deepslate_catalyst',
    },
  }).id('kubejs:crystallizing/deepslate_catalyst')

  event.custom({
    type: 'mekanism:reaction',
    item_input: {
      count: 1,
      item: 'kubejs:deepslate_catalyst',
    },
    fluid_input: {
      amount: 1000,
      tag: 'minecraft:water'
    },
    chemical_input: {
      amount: 100,
      chemical: 'mekanism:nuclear_waste', 
    },
    duration: 100,
    item_output: {
      count: 1,
      id: 'kubejs:irradiated_deepslate_catalyst',
    },
    chemical_output: {
      amount: 1000,
      id: 'mekanism:hydrofluoric_acid',
    },
    per_tick_usage: false,
  }).id('kubejs:reaction/irradiated_deepslate_catalyst')

  event.custom({
    type: 'mekanism:crystallizing',
    input: {
      amount: 1000,
      chemical: 'mekanism:hydrofluoric_acid',
    },
    output: {
      count: 1,
      id: 'mekanism:fluorite_gem',
    },
  }).id('mekanism:crystallizing/fluorite_gem')

  event.custom({
    type: 'mekanism:reaction',
    item_input: {
      count: 1,
      item: 'kubejs:irradiated_deepslate_catalyst',
    },
    fluid_input: {
      amount: 1000,
      tag: 'minecraft:water'
    },
    chemical_input: {
      amount: 100,
      chemical: 'mekanism:plutonium',
    },
    duration: 100,
    chemical_output: {
      amount: 100,
      id: 'kubejs:raw_fissile_fuel_matrix',
    },
    per_tick_usage: false,
  }).id('kubejs:reaction/raw_fissile_fuel_matrix')

  event.custom({
    type: 'mekanism:reaction',
    item_input: {
      count: 1,
      item: 'mekanism:dust_fluorite'
    },
    fluid_input: {
      amount: 1000,
      tag: 'minecraft:water'
    },
    chemical_input: {
      amount: 100,
      chemical: 'kubejs:raw_fissile_fuel_matrix'
    },
    duration: 100,
    chemical_output: {
      amount: 100,
      id: 'kubejs:fissile_fuel_matrix',
    },
    per_tick_usage: false,
  }).id('kubejs:reaction/fissile_fuel_matrix')

  event.custom({
    type: 'mekanism:chemical_infusing',
    left_input: {
      amount: 10,
      chemical: 'kubejs:fissile_fuel_matrix',
    },
    right_input: {
      amount: 100,
      chemical: 'mekanismgenerators:tritium',
    },
    output: {
      amount: 150,
      id: 'mekanism:fissile_fuel',
    },
  }).id('kubejs:chemical_infusing/fissile_fuel_from_quantum_matrix')
})
