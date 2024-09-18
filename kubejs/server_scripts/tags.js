ServerEvents.tags('item', event => {
  event.removeAll('caverns_and_chasms:experience_boost_items')
  event.removeAll('curios:head')
  event.removeAll('curios:back')
  event.removeAll('curios:charm')
  event.removeAll('caverns_and_chasms:cupric_fire_base_blocks')

  event.add('curios:curio', 'create:goggles', 'minecraft:elytra', 'minecraft:totem_of_undying')
  event.add('caverns_and_chasms:cupric_fire_base_blocks', 'minecraft:copper_ingot')

  event.remove('forge:cooked_eggs', 'farmersdelight:fried_egg')
  event.remove('forge:milk', 'farmersdelight:milk_bottle')
  event.remove('forge:milk', 'farmersdelight:milk_bottle')
  event.remove('environmental:spawns_on_muddy_pig', 'minecraft:blue_orchid', 'minecraft:dandelion', 'minecraft:poppy')
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
  event.removeAll('environmental:has_animal/cow')
  event.removeAll('upgrade_aquatic:has_animal/pike_extra')

  event.add('minecraft:has_structure/ruined_portal_jungle', '#atmospheric:is_rainforest')
  event.add('upgrade_aquatic:has_monster/thrasher', '#minecraft:is_ocean')
  event.add('environmental:has_feature/tasselflower', 'atmospheric:laurel_forest', 'atmospheric:spiny_thicket', 'atmospheric:scrubland', 'atmospheric:snowy_scrubland', 'minecraft:wooded_badlands')
  event.add('forge:is_snowy', 'atmospheric:snowy_scrubland')
  event.add('environmental:has_feature/violet', 'atmospheric:grimwoods')
  event.add('environmental:has_feature/hibiscus', '#atmospheric:is_rainforest')
  event.add('environmental:has_animal/tapir', '#atmospheric:is_rainforest')
  event.add('minecraft:has_structure/desert_pyramid', '#atmospheric:is_dunes', 'atmospheric:spiny_thicket')
  //event.add('neapolitan:has_feature/vanilla_vine', '#atmospheric:is_dunes', '#minecraft:is_badlands', 'atmospheric:spiny_thicket')
  event.add('environmental:has_animal/zebra', '#atmospheric:is_dunes', 'atmospheric:laurel_forest')
  event.add('environmental:has_animal/yak', 'windswept:pine_barrens', 'windswept:chestnut_forest', 'windswept:snowy_chestnut_forest', 'environmental:blossom_woods', 'minecraft:old_growth_pine_taiga', 'atmospheric:kousa_jungle', 'atmospheric:aspen_parkland')
  event.remove('upgrade_aquatic:has_animal/pike', 'minecraft:river');
  event.add('upgrade_aquatic:has_animal/perch', 'environmental:marsh');
  event.add('upgrade_aquatic:has_animal/pike', '#atmospheric:is_rainforest');
  event.add('endermanoverhaul:desert_spawns', '#atmospheric:is_dunes')
  event.add('endermanoverhaul:ice_spikes_spawns', '#forge:is_snowy')
  event.add('endermanoverhaul:windswept_hills_spawns', '#forge:is_mountain')
  event.add('endermanoverhaul:dark_oak_spawns', 'minecraft:old_growth_spruce_taiga', 'windswept:pine_barrens', 'minecraft:old_growth_pine_taiga', 'windswept:chestnut_forest', 'atmospheric:aspen_parkland', 'minecraft:old_growth_birch_forest')
  event.remove('endermanoverhaul:windswept_hills_spawns', 'minecraft:meadow', 'windswept:lavender_meadow')
})

ServerEvents.tags('worldgen/structure', event => {
  event.removeAll('minecraft:eye_of_ender_located')
  event.add('minecraft:eye_of_ender_located', 'minecraft:ancient_city')
})