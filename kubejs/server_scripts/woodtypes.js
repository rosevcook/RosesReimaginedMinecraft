ServerEvents.recipes(event => {
  function sawing(input, output, amount) {
    event.custom({
      type: 'woodworks:sawmill',
      count: amount,
      ingredient: [ { item: input } ],
      result: output
    })
  }

  function sawingTag(input, output, amount) {
    event.custom({
      type: 'woodworks:sawmill',
      count: amount,
      ingredient: [ { tag: input } ],
      result: output
    })
  }

  function plank(planks, stairs, slab, boards, fence, button, ladder, fence_gate, chair, bench, table, railing, pressure_plate) {
    event.shapeless(planks, [boards])
    event.remove({ output: fence_gate })
    event.remove({ output: pressure_plate })
    event.remove({ output: boards, type: 'minecraft:crafting_shaped' })
    event.remove({ output: ladder, type: 'minecraft:crafting_shaped' })
    event.remove({ output: fence, type: 'minecraft:crafting_shaped' })
    event.remove({ output: button, type: 'minecraft:crafting_shaped' })
    event.remove({ output: chair, type: 'minecraft:crafting_shaped' })
    event.remove({ output: bench, type: 'minecraft:crafting_shaped' })
    event.remove({ output: table, type: 'minecraft:crafting_shaped' })
    event.remove({ output: railing, type: 'minecraft:crafting_shaped' })
    sawing(planks, fence_gate, 1)
    sawing(planks, chair, 1)
    sawing(planks, bench, 1)
    sawing(planks, table, 1)
    sawing(planks, railing, 2)
    sawing(planks, pressure_plate, 2)
    event.recipes.create.cutting([stairs], planks)
    event.recipes.create.cutting([Item.of(slab, 2)], planks)
    event.recipes.create.cutting([boards], planks)
    event.recipes.create.cutting([fence], planks)
    event.recipes.create.cutting([button], planks)
    event.recipes.create.cutting([ladder], planks)
    event.recipes.create.cutting([fence_gate], planks)
    event.recipes.create.cutting([chair], planks)
    event.recipes.create.cutting([bench], planks)
    event.recipes.create.cutting([table], planks)
    event.recipes.create.cutting([Item.of(railing, 2)], planks)
    event.recipes.create.cutting([Item.of(pressure_plate, 2)], planks)
  }

  function log(logs, planks, stairs, slab, boards, fence, button, ladder, trapdoor, pressure_plate, fence_gate, sign, door, chair, bench, table, railing) {
    event.remove({ output: sign, type: 'minecraft:crafting_shaped' })
    plank(planks, stairs, slab, boards, fence, button, ladder, fence_gate, chair, bench, table, railing, pressure_plate)
    sawingTag(logs, fence_gate, 4)
    sawingTag(logs, chair, 4)
    sawingTag(logs, bench, 4)
    sawingTag(logs, table, 4)
    sawingTag(logs, railing, 8)
    sawingTag(logs, pressure_plate, 8)
    event.recipes.create.cutting([Item.of(stairs, 4)], '#' + logs)
    event.recipes.create.cutting([Item.of(slab, 8)], '#' + logs)
    event.recipes.create.cutting([Item.of(boards, 4)], '#' + logs)
    event.recipes.create.cutting([Item.of(fence, 4)], '#' + logs)
    event.recipes.create.cutting([Item.of(button, 4)], '#' + logs)
    event.recipes.create.cutting([Item.of(ladder, 4)], '#' + logs)
    event.recipes.create.cutting([Item.of(planks, 4)], '#' + logs)
    event.recipes.create.cutting([Item.of(trapdoor, 2)], '#' + logs)
    event.recipes.create.cutting([Item.of(pressure_plate, 8)], '#' + logs)
    event.recipes.create.cutting([Item.of(fence_gate, 4)], '#' + logs)
    event.recipes.create.cutting([Item.of(sign, 2)], '#' + logs)
    event.recipes.create.cutting([Item.of(door, 2)], '#' + logs)
    event.recipes.create.cutting([Item.of(chair, 4)], '#' + logs)
    event.recipes.create.cutting([Item.of(bench, 4)], '#' + logs)
    event.recipes.create.cutting([Item.of(table, 4)], '#' + logs)
    event.recipes.create.cutting([Item.of(railing, 8)], '#' + logs)
  }

  function wood(wood, modid, woodMod, logs) {
    if (woodMod == 'woodworks') {
      log(logs, modid + ':' + wood + '_planks', modid + ':' + wood + '_stairs', modid + ':' + wood + '_slab', '' + woodMod + ':' + wood + '_boards', modid + ':' + wood + '_fence', modid + ':' + wood + '_button', '' + woodMod + ':' + wood + '_ladder', modid + ':' + wood + '_trapdoor', modid + ':' + wood + '_pressure_plate', modid + ':' + wood + '_fence_gate', modid + ':' + wood + '_sign', modid + ':' + wood + '_door', 'another_furniture:' + wood + '_chair', 'another_furniture:' + wood + '_bench', 'another_furniture:' + wood + '_table', 'architects_palette:' + wood + '_railing')
    } else {
      log(logs, modid + ':' + wood + '_planks', modid + ':' + wood + '_stairs', modid + ':' + wood + '_slab', '' + woodMod + ':' + wood + '_boards', modid + ':' + wood + '_fence', modid + ':' + wood + '_button', '' + woodMod + ':' + wood + '_ladder', modid + ':' + wood + '_trapdoor', modid + ':' + wood + '_pressure_plate', modid + ':' + wood + '_fence_gate', modid + ':' + wood + '_sign', modid + ':' + wood + '_door', 'everycomp:af/' + modid + '/' + wood + '_chair', 'everycomp:af/' + modid + '/' + wood + '_bench', 'everycomp:af/' + modid + '/' + wood + '_table', 'everycomp:ap/' + modid + '/' + wood + '_railing')
    }
  }

  sawing('quark:bamboo_planks', 'quark:bamboo_planks_stairs', 1)
  sawing('quark:bamboo_planks', 'quark:bamboo_planks_slab', 2)
  sawing('quark:bamboo_planks', 'quark:bamboo_ladder', 1)
  sawing('quark:bamboo_planks', 'quark:bamboo_fence', 1)
  sawing('quark:bamboo_planks', 'quark:bamboo_mosaic', 1)
  sawing('quark:bamboo_planks', 'quark:bamboo_button', 1)
  plank('quark:bamboo_planks', 'quark:bamboo_planks_stairs', 'quark:bamboo_planks_slab', 'quark:bamboo_mosaic', 'quark:bamboo_fence', 'quark:bamboo_button', 'quark:bamboo_ladder', 'quark:bamboo_fence_gate', 'everycomp:af/quark/bamboo_chair', 'everycomp:af/quark/bamboo_bench', 'everycomp:af/quark/bamboo_table', 'everycomp:ap/quark/bamboo_railing', 'quark:bamboo_pressure_plate') 
  log('minecraft:oak_logs', 'minecraft:oak_planks', 'minecraft:oak_stairs', 'minecraft:oak_slab', 'woodworks:oak_boards', 'minecraft:oak_fence', 'minecraft:oak_button', 'minecraft:ladder', 'minecraft:oak_trapdoor', 'minecraft:oak_pressure_plate', 'minecraft:oak_fence_gate', 'minecraft:oak_sign', 'minecraft:oak_door', 'another_furniture:oak_chair', 'another_furniture:oak_bench', 'another_furniture:oak_table', 'architects_palette:oak_railing');
  wood('birch', 'minecraft', 'woodworks', 'minecraft:birch_logs')
  wood('spruce', 'minecraft', 'woodworks', 'minecraft:spruce_logs')
  wood('dark_oak', 'minecraft', 'woodworks', 'minecraft:dark_oak_logs')
  wood('crimson', 'minecraft', 'woodworks', 'minecraft:crimson_stems')
  wood('warped', 'minecraft', 'woodworks', 'minecraft:warped_stems')
  wood('maple', 'autumnity', 'autumnity', 'autumnity:maple_logs')
  wood('chestnut', 'windswept', 'windswept', 'windswept:chestnut_logs')
  wood('pine', 'windswept', 'windswept', 'windswept:pine_logs')
  wood('holly', 'windswept', 'windswept', 'windswept:holly_logs')
  wood('willow', 'environmental', 'environmental', 'environmental:willow_logs')
  wood('cherry', 'environmental', 'environmental', 'environmental:cherry_logs')
  wood('wisteria', 'environmental', 'environmental', 'environmental:wisteria_logs')
  wood('azalea', 'caverns_and_chasms', 'caverns_and_chasms', 'caverns_and_chasms:azalea_logs')
  wood('driftwood', 'upgrade_aquatic', 'upgrade_aquatic', 'upgrade_aquatic:driftwood_logs')
  wood('river', 'upgrade_aquatic', 'upgrade_aquatic', 'upgrade_aquatic:river_logs')
  wood('rosewood', 'atmospheric', 'atmospheric', 'atmospheric:rosewood_logs')
  wood('morado', 'atmospheric', 'atmospheric', 'atmospheric:morado_logs')
  wood('yucca', 'atmospheric', 'atmospheric', 'atmospheric:yucca_logs')
  wood('aspen', 'atmospheric', 'atmospheric', 'atmospheric:aspen_logs')
  wood('laurel', 'atmospheric', 'atmospheric', 'atmospheric:laurel_logs')
  wood('kousa', 'atmospheric', 'atmospheric', 'atmospheric:kousa_logs')
  wood('grimwood', 'atmospheric', 'atmospheric', 'atmospheric:grimwood_logs')

})