ServerEvents.tags('item', event => {
  event.removeAll('caverns_and_chasms:experience_boost_items')
  event.removeAll('curios:head')
  event.removeAll('curios:back')
  event.removeAll('curios:charm')
  event.removeAll('caverns_and_chasms:cupric_fire_base_blocks')

  event.add('curios:curio', 'create:goggles', 'minecraft:elytra', 'minecraft:totem_of_undying')
  event.add('caverns_and_chasms:cupric_fire_base_blocks', 'minecraft:copper_ingot')
  event.add('rrm:rotten_flesh', 'minecraft:rotten_flesh', 'windswept:frozen_flesh')
  event.add('rrm:pickerelweed', 'upgrade_aquatic:blue_pickerelweed', 'upgrade_aquatic:purple_pickerelweed')

  event.remove('forge:cooked_eggs', 'farmersdelight:fried_egg')
  event.remove('forge:milk', 'farmersdelight:milk_bottle')
  event.remove('forge:milk', 'farmersdelight:milk_bottle')
  event.remove('environmental:spawns_on_muddy_pig', 'minecraft:blue_orchid', 'minecraft:dandelion', 'minecraft:poppy')

  //event.remove('forge:stripped_logs', 'stripped_jungle_log', 'stripped_acacia_log', 'stripped_mangrove_log', 'architects_palette:stripped_twisted_log', 'quark:stripped_azalea_log', 'quark:stripped_blossom_log')
  //event.remove('forge:stripped_wood', 'stripped_jungle_wood', 'stripped_acacia_wood', 'stripped_mangrove_wood', 'architects_palette:stripped_twisted_wood', 'quark:stripped_azalea_wood', 'quark:stripped_blossom_wood')
  event.add('forge:stripped_logs', 'windswept:stripped_pine_log', 'windswept:stripped_holly_log', 'windswept:stripped_chestnut_log', 'caverns_and_chasms:stripped_azalea_log', 'upgrade_aquatic:stripped_driftwood_log', 'upgrade_aquatic:stripped_river_log', 'autumnity:stripped_maple_log', 'atmospheric:stripped_laurel_log')
  event.add('forge:stripped_wood', 'windswept:stripped_pine_wood', 'windswept:stripped_holly_wood', 'windswept:stripped_chestnut_wood', 'caverns_and_chasms:stripped_azalea_wood', 'upgrade_aquatic:stripped_driftwood', 'upgrade_aquatic:stripped_river_wood', 'autumnity:stripped_maple_wood', 'atmospheric:stripped_laurel_wood')
})

ServerEvents.tags('block', event => {
  // needs_stone = iron, needs_wood = copper, needs_iron = gold/silver
  event.get('minecraft:needs_stone_tool').getObjectIds().forEach(block => {
    if (Ingredient.of(/.*copper.*/).test(block)) 
      event.remove('minecraft:needs_stone_tool', block)
    else if (Ingredient.of(/.*iron.*/).test(block)) {
      event.remove('minecraft:needs_stone_tool', block)
      event.add('minecraft:needs_wooden_tool', block)
    }
  })
  event.get('minecraft:needs_iron_tool').getObjectIds().forEach(block => {
    if (Ingredient.of(/.*zinc.*/).test(block)) {
      event.remove('minecraft:needs_iron_tool', block)
      event.add('minecraft:needs_wooden_tool', block)
    } else if (Ingredient.of(/.*gold.*/).test(block)) {
      event.remove('minecraft:needs_iron_tool', block)
      event.add('minecraft:needs_stone_tool', block)
    } else if (Ingredient.of(/.*silver.*/).test(block)) {
      event.remove('minecraft:needs_iron_tool', block)
      event.add('minecraft:needs_stone_tool', block)
    }
  })
  event.get('minecraft:mineable/pickaxe').getObjectIds().forEach(block => {
    if (Ingredient.of(/.*deepslate.*/).test(block)) {
      if (!event.get('minecraft:needs_iron_tool').getObjectIds().contains(block) && !event.get('minecraft:needs_diamond_tool').getObjectIds().contains(block)) event.add('minecraft:needs_stone_tool', block)
      if (event.get('minecraft:needs_wooden_tool').getObjectIds().contains(block)) event.remove('minecraft:needs_wooden_tool', block)
      if (event.get('minecraft:needs_wooden_tool').getObjectIds().contains(block)) event.remove('minecraft:needs_wooden_tool', block)
    }
  })
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
  //event.add('endermanoverhaul:soulsand_valley_spawns', 'gardens_of_the_dead:soulblight_forest')
  event.add('endermanoverhaul:dark_oak_spawns', 'minecraft:old_growth_spruce_taiga', 'windswept:pine_barrens', 'minecraft:old_growth_pine_taiga', 'windswept:chestnut_forest', 'atmospheric:aspen_parkland', 'minecraft:old_growth_birch_forest')
  event.remove('endermanoverhaul:windswept_hills_spawns', 'minecraft:meadow', 'windswept:lavender_meadow')
  event.add('minecraft:has_structure/desert_pyramid', 'atmospheric:spiny_thicket', 'atmospheric:petrified_dunes', 'atmospheric:flourishing_dunes', 'atmospheric:dunes', 'atmospheric:rocky_dunes', 'atmospheric:scrubland', 'atmospheric:snowy_scrubland')
})

ServerEvents.tags('worldgen/structure', event => {
  event.removeAll('minecraft:eye_of_ender_located')
  event.add('minecraft:eye_of_ender_located', 'minecraft:ancient_city')
})