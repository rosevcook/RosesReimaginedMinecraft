ServerEvents.tags('item', event => {
  event.removeAll('caverns_and_chasms:experience_boost_items')
  event.removeAll('curios:head')
  event.removeAll('curios:back')
  event.removeAll('curios:charm')
  event.add('curios:curio', 'create:goggles')
  event.add('curios:curio', 'minecraft:elytra')
  event.add('curios:curio', 'minecraft:totem_of_undying')

  event.remove('forge:cooked_eggs', 'farmersdelight:fried_egg')
  event.remove('forge:milk', 'farmersdelight:milk_bottle')
})

ServerEvents.tags('worldgen/biome', event => {
  event.removeAll('minecraft:has_structure/village_desert')
  event.removeAll('minecraft:has_structure/village_plains')
  event.removeAll('minecraft:has_structure/village_savanna')
  event.removeAll('minecraft:has_structure/village_snowy')
  event.removeAll('minecraft:has_structure/village_taiga')
  event.removeAll('minecraft:has_structure/pillager_outpost')
  event.removeAll('minecraft:has_structure/woodland_mansion')
  event.removeAll('atmospheric:has_structure/village_scrubland')
  event.removeAll('windswept:has_structure/frozen_village')
})

ServerEvents.tags('worldgen/structure', event => {
  event.removeAll('minecraft:eye_of_ender_located')
  event.add('minecraft:eye_of_ender_located', 'minecraft:ancient_city')
})