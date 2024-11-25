ServerEvents.tags('item', event => {
  event.removeAll('caverns_and_chasms:experience_boost_items')
  event.removeAll('curios:head')
  event.removeAll('curios:back')
  event.removeAll('curios:charm')
  event.removeAll('curios:necklace')
  event.removeAll('curios:belt')
  event.removeAll('curios:feet')
  event.removeAll('curios:hands')
  event.removeAll('curios:ring')
  event.removeAll('curios:spellbook')
  event.removeAll('caverns_and_chasms:cupric_fire_base_blocks')
  event.removeAll('supplementaries:ropes')
  event.removeAll('endergetic:ender_fire_base_blocks')

  event.add('curios:curio', 'create:goggles', 'minecraft:elytra', 'minecraft:totem_of_undying', 'artifacts:cross_necklace', 'artifacts:shock_pendant', 'artifacts:flame_pendant', 'artifacts:cloud_in_a_bottle', 'artifacts:obsidian_skull', 'artifacts:antidote_vessel', 'artifacts:fire_gauntlet', 'artifacts:aqua_dashers', 'undead_unleashed:tome_of_reflection', 'cataclysm:sandstorm_in_a_bottle', 'cataclysm:sticky_gloves', 'quark:backpack', 'irons_spellbooks:mana_ring', 'irons_spellbooks:silver_ring', 'irons_spellbooks:cooldown_ring', 'irons_spellbooks:cast_time_ring', 'irons_spellbooks:fireward_ring', 'irons_spellbooks:frostward_ring', 'irons_spellbooks:poisonward_ring', 'irons_spellbooks:heavy_chain_necklace', 'irons_spellbooks:concentration_amulet', 'irons_spellbooks:amethyst_resonance_charm')
  event.add('caverns_and_chasms:cupric_fire_base_blocks', 'minecraft:copper_ingot')
  event.add('rrm:rotten_flesh', 'minecraft:rotten_flesh', 'windswept:frozen_flesh')
  event.add('rrm:pickerelweed', 'upgrade_aquatic:blue_pickerelweed', 'upgrade_aquatic:purple_pickerelweed')
  event.add('rrm:sandstone', 'minecraft:sandstone', 'minecraft:red_sandstone', 'atmospheric:arid_sandstone', 'atmospheric:red_arid_sandstone')
  event.add('caverns_and_chasms:additional_toolbox_tools', 'create:wrench', '#curios:curio', 'artifacts:umbrella');
  event.add('forge:berries', 'autumnity:foul_berries', 'upgrade_aqutic:mulberry', 'atmospheric:currant', 'neapolitan:strawberries', 'neapolitan:white_strawberries')
  event.add('supplementaries:ropes', 'farmersdelight:rope')
  event.add('caverns_and_chasms:slowness_inflicting_items', 'undead_unleashed:reaping_scythe')
  event.add('caverns_and_chasms:magic_damage_items', 'undead_unleashed:moonlight_greatsword')
  event.add('rrm:iron_equipment', 'minecraft:iron_sword', 'minecraft:iron_pickaxe', 'minecraft:iron_shovel', 'minecraft:iron_axe', 'minecraft:iron_hoe', 'farmersdelight:iron_knife', 'minecraft:iron_helmet', 'minecraft:iron_chestplate', 'minecraft:iron_leggings', 'minecraft:iron_boots', 'minecraft:compass', 'otherworldly_accessories:broken_shackle')
  event.add('rrm:copper_equipment', 'metalworks:copper_sword', 'metalworks:copper_pickaxe', 'metalworks:copper_shovel', 'metalworks:copper_axe', 'metalworks:copper_hoe', 'metalworks:copper_knife', 'metalworks:copper_helmet', 'metalworks:copper_chestplate', 'metalworks:copper_leggings', 'metalworks:copper_boots', 'caverns_and_chasms:tuning_fork', 'caverns_and_chasms:barometer')
  event.add('rrm:golden_equipment', 'minecraft:golden_sword', 'minecraft:golden_pickaxe', 'minecraft:golden_shovel', 'minecraft:golden_axe', 'minecraft:golden_hoe', 'farmersdelight:golden_knife', 'minecraft:golden_helmet', 'minecraft:golden_chestplate', 'minecraft:golden_leggings', 'minecraft:golden_boots', 'minecraft:clock')
  event.add('rrm:silver_equipment', 'caverns_and_chasms:silver_sword', 'caverns_and_chasms:silver_pickaxe', 'caverns_and_chasms:silver_shovel', 'caverns_and_chasms:silver_axe', 'caverns_and_chasms:silver_hoe', 'abnormals_delight:silver_knife', 'caverns_and_chasms:silver_helmet', 'caverns_and_chasms:silver_chestplate', 'caverns_and_chasms:silver_leggings', 'caverns_and_chasms:silver_boots', 'caverns_and_chasms:depth_gauge')
  event.add('rrm:brass_equipment', 'minecraft:chainmail_helmet', 'minecraft:chainmail_chestplate', 'minecraft:chainmail_leggings', 'minecraft:chainmail_boots', 'create:wrench', 'create:goggles', 'otherworldly_accessories:battle_horseshoe')
  event.add('rrm:zinc_equipment', 'minecraft:shears', 'quark:trowel')
  event.add('rrm:netherite_equipment', 'minecraft:netherite_sword', 'savage_and_ravage:cleaver_of_beheading', 'minecraft:netherite_pickaxe', 'minecraft:netherite_shovel', 'minecraft:netherite_axe', 'minecraft:netherite_hoe', 'farmersdelight:netherite_knife', 'minecraft:netherite_helmet', 'minecraft:netherite_chestplate', 'minecraft:netherite_leggings', 'minecraft:netherite_boots')
  event.add('rrm:necromium_equipment', 'caverns_and_chasms:necromium_sword', 'caverns_and_chasms:necromium_pickaxe', 'caverns_and_chasms:necromium_shovel', 'caverns_and_chasms:necromium_axe', 'caverns_and_chasms:necromium_hoe', 'abnormals_delight:necromium_knife', 'caverns_and_chasms:necromium_helmet', 'caverns_and_chasms:necromium_chestplate', 'caverns_and_chasms:necromium_leggings', 'caverns_and_chasms:necromium_boots')
  event.add('endergetic:ender_fire_base_blocks', 'minecraft:amethyst_block')

  event.remove('forge:cooked_eggs', 'farmersdelight:fried_egg')
  event.remove('environmental:spawns_on_muddy_pig', 'minecraft:blue_orchid', 'minecraft:dandelion', 'minecraft:poppy')
  event.remove('forge:crops/cabbage', 'farmersdelight:cabbage_leaf')
  event.remove('forge:cooked_mutton', 'farmersdelight:cooked_mutton_chops')
  event.remove('forge:cooked_chicken', 'farmersdelight:cooked_chicken_cuts')
  event.remove('forge:cooked_beef', 'farmersdelight:beef_patty')
  event.remove('forge:cooked_fishes/salmon', 'farmersdelight:cooked_salmon_slice')
  event.remove('forge:cooked_venison', 'abnormals_delight:cooked_venison_shanks')
  event.remove('forge:cooked_duck', 'abnormals_delight:cooked_duck_fillet')
  event.remove('forge:stripped_logs', 'minecraft:stripped_jungle_log', 'minecraft:stripped_acacia_log', 'minecraft:stripped_mangrove_log', 'architects_palette:stripped_twisted_log', 'quark:stripped_azalea_log', 'quark:stripped_blossom_log')
  event.remove('forge:stripped_wood', 'minecraft:stripped_jungle_wood', 'minecraft:stripped_acacia_wood', 'minecraft:stripped_mangrove_wood', 'architects_palette:stripped_twisted_wood', 'quark:stripped_azalea_wood', 'quark:stripped_blossom_wood')
  event.add('forge:stripped_logs', 'windswept:stripped_pine_log', 'windswept:stripped_holly_log', 'windswept:stripped_chestnut_log', 'caverns_and_chasms:stripped_azalea_log', 'upgrade_aquatic:stripped_driftwood_log', 'upgrade_aquatic:stripped_river_log', 'autumnity:stripped_maple_log', 'atmospheric:stripped_laurel_log')
  event.add('forge:stripped_wood', 'windswept:stripped_pine_wood', 'windswept:stripped_holly_wood', 'windswept:stripped_chestnut_wood', 'caverns_and_chasms:stripped_azalea_wood', 'upgrade_aquatic:stripped_driftwood', 'upgrade_aquatic:stripped_river_wood', 'autumnity:stripped_maple_wood', 'atmospheric:stripped_laurel_wood')
})

ServerEvents.tags('block', event => {
  event.removeAll('architects_palette:green_fire_supporting')
  event.removeAll('endergetic:ender_fire_base_blocks')

  event.add('minecraft:snow', 'architects_palette:coarse_snow')
  event.add('quark:hedges', 'atmospheric:green_aspen_hedge')
  event.add('caverns_and_chasms:cupric_fire_base_blocks', 'quark:raw_copper_bricks', 'quark:raw_copper_bricks_stairs', 'quark:raw_copper_bricks_slab')
  event.add('endergetic:ender_fire_base_blocks', 'minecraft:amethyst_block', 'minecraft:budding_amethyst', 'caverns_and_chasms:amethyst_block', 'caverns_and_chasms:cut_amethyst', 'caverns_and_chasms:cut_amethyst_bricks', 'caverns_and_chasms:cut_amethyst_brick_slab', 'caverns_and_chasms:cut_amethyst_brick_stairs', 'minecraft:crying_obsidian')

  event.remove('minecraft:needs_diamond_tool', 'irons_spellbooks:armor_pile')

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
  event.removeAll('autumnity:has_structure/maple_hut')
  event.removeAll('environmental:has_animal/cow')
  event.removeAll('upgrade_aquatic:has_animal/pike_extra')
  event.removeAll('neapolitan:has_feature/mint_pond')
  event.removeAll('neapolitan:has_feature/adzuki_sprouts')
  event.removeAll('sullysmod:jade_generates_in')
  event.removeAll('cataclysm:has_structure/ancient_factory_biomes')
  event.removeAll('cataclysm:has_structure/frosted_prison_biomes')
  event.removeAll('bettermineshafts:has_structure/better_mineshaft_overgrown')
  event.removeAll('bettermineshafts:has_structure/better_mineshaft_desert')
  event.removeAll('bettermineshafts:has_structure/better_mineshaft_spruce_snowy')
  event.removeAll('bettermineshafts:has_structure/better_mineshaft_ice')
  event.removeAll('bettermineshafts:has_structure/better_mineshaft_acacia')
  event.removeAll('bettermineshafts:has_structure/better_mineshaft_jungle')
  event.removeAll('bettermineshafts:has_structure/better_mineshaft_mesa')
  event.removeAll('bettermineshafts:has_structure/better_mineshaft_red_desert')
  event.removeAll('bettermineshafts:has_structure/better_mineshaft_mushroom')
  event.removeAll('betterdungeons:has_structure/spider_dungeon')
  event.removeAll('queen_bee:has_structure/beehive')
  event.removeAll('irons_spellbooks:has_structure/pyromancer_tower')
  event.removeAll('irons_spellbooks:has_structure/evoker_fort')
  event.removeAll('irons_spellbooks:has_structure/mangrove_hut')

  event.add('minecraft:has_structure/ruined_portal_jungle', '#atmospheric:is_rainforest')
  event.add('upgrade_aquatic:has_monster/thrasher', '#minecraft:is_ocean')
  event.add('environmental:has_feature/tasselflower', 'atmospheric:laurel_forest', 'atmospheric:spiny_thicket', 'atmospheric:scrubland', 'atmospheric:snowy_scrubland', 'minecraft:wooded_badlands')
  event.add('forge:is_snowy', 'atmospheric:snowy_scrubland')
  event.add('environmental:has_animal/tapir', '#atmospheric:is_rainforest')
  event.add('minecraft:has_structure/desert_pyramid', '#atmospheric:is_dunes', 'atmospheric:spiny_thicket')
  event.add('neapolitan:has_feature/vanilla_vine', '#atmospheric:is_dunes', '#minecraft:is_badlands', 'atmospheric:spiny_thicket')
  event.add('environmental:has_animal/zebra', '#atmospheric:is_dunes', 'atmospheric:laurel_forest')
  event.add('environmental:has_animal/yak', 'windswept:pine_barrens', 'windswept:chestnut_forest', 'windswept:snowy_chestnut_forest', 'environmental:blossom_woods', 'minecraft:old_growth_pine_taiga', 'atmospheric:kousa_jungle', 'atmospheric:aspen_parkland', 'minecraft:dark_forest', 'windswept:lavender_meadow', 'minecraft:taiga', 'minecraft:snowy_taiga', 'minecraft:old_growth_pine_taiga', 'minecraft:old_growth_spruce_taiga')
  event.remove('upgrade_aquatic:has_animal/pike', 'minecraft:river');
  event.add('upgrade_aquatic:has_animal/perch', 'environmental:marsh');
  event.add('upgrade_aquatic:has_animal/pike', '#atmospheric:is_rainforest');
  event.add('endermanoverhaul:desert_spawns', '#atmospheric:is_dunes')
  event.add('endermanoverhaul:ice_spikes_spawns', '#forge:is_snowy')
  event.add('endermanoverhaul:windswept_hills_spawns', '#forge:is_mountain')
  event.add('endermanoverhaul:dark_oak_spawns', 'minecraft:old_growth_spruce_taiga', 'windswept:pine_barrens', 'minecraft:old_growth_pine_taiga', 'windswept:chestnut_forest', 'atmospheric:aspen_parkland', 'minecraft:old_growth_birch_forest')
  event.remove('endermanoverhaul:windswept_hills_spawns', 'minecraft:meadow', 'windswept:lavender_meadow')
  event.add('minecraft:has_structure/desert_pyramid', 'atmospheric:spiny_thicket', 'atmospheric:petrified_dunes', 'atmospheric:flourishing_dunes', 'atmospheric:dunes', 'atmospheric:rocky_dunes', 'atmospheric:scrubland', 'atmospheric:snowy_scrubland')
  event.add('rrm:has_animal/frog', 'atmospheric:rainforest_basin', 'atmospheric:sparse_rainforest_basin')
  event.add('rrm:has_animal/cat', '#minecraft:is_forest')
  event.add('rrm:has_structure/pine_windmill', 'windswept:pine_barrens')
  event.add('sullysmod:jade_generates_in', 'minecraft:lush_caves')
  event.add('environmental:has_structure/log_cabin', '#windswept:is_pine_barrens')
  event.add('bettermineshafts:has_structure/better_mineshaft_mushroom', 'quark:glimmering_weald')
  event.add('irons_spellbooks:has_structure/pyromancer_tower', '#windswept:is_pine_barrens')
})

ServerEvents.tags('worldgen/structure', event => {
  event.removeAll('minecraft:eye_of_ender_located')
  event.add('minecraft:eye_of_ender_located', 'minecraft:ancient_city')
})

ServerEvents.tags('worldgen/template_pool', event => {
  event.add('structure_no_rotate:do_not_rotate', 'rrm:floating_island')
})