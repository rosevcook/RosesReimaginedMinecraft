StartupEvents.registry('item', event => {
  event.create('silver_sheet').group('transportation')
  event.create('zinc_sheet').group('transportation')
  event.create('lead_sheet').group('transportation')
  event.create('lead_dust').group('transportation')
  event.create('rough_spinel').group('transportation')
  event.create('silver_feather').group('transportation')
  event.create('copper_wire').group('transportation')
  event.create('power_coil').group('transportation')
  event.create('torn_elytra_fragment').group('transportation')
  event.create('ice_rod').parentModel('item/handheld').group('transportation')
  event.create('wadjet_tail').rarity('uncommon').group('transportation')
  event.create('dry_moss').group('transportation')
  event.create('anchor', 'pickaxe').tier('stone').attackDamageBaseline(6.5).speedBaseline(-3.0).group('combat')
  event.create('electrum_lance', 'sword').tier('diamond').attackDamageBaseline(2.5).speedBaseline(-2.0).group('combat')
  event.create('spinel_pickaxe', 'pickaxe').tier('stone').attackDamageBaseline(-2).speedBaseline(-2.5).group('tools')
  event.create('spinel_axe', 'axe').tier('stone').attackDamageBaseline(-2).speedBaseline(-2.5).group('tools')
  event.create('spinel_shovel', 'shovel').tier('stone').attackDamageBaseline(-2).speedBaseline(-2.5).group('tools')

  event.create('starfall_staff', 'irons_spells_js:magic_sword').addDefaultSpell('irons_spellbooks:starfall', 1)
  event.create('netherite_sceptor', 'irons_spells_js:magic_sword').addDefaultSpell('irons_spellbooks:flaming_strike', 2)
})

StartupEvents.registry('block', event => {
  event.create('rough_spinel_block').material('stone').displayName('Block of Rough Spinel').soundType('stone').hardness(3).tagBlock('minecraft:mineable/pickaxe')
  event.create('rough_spinel_bricks').material('stone').displayName('Rough Spinel Bricks').soundType('stone').hardness(3).tagBlock('minecraft:mineable/pickaxe')
  event.create('rough_spinel_brick_stairs', 'stairs').material('stone').displayName('Rough Spinel Brick Stairs').soundType('stone').textureAll('kubejs:block/rough_spinel_bricks').hardness(2.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:stairs')
  event.create('rough_spinel_brick_slab', 'slab').material('stone').displayName('Rough Spinel Brick Slab').soundType('stone').textureAll('kubejs:block/rough_spinel_bricks').hardness(2.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:slabs')

  event.create('rough_lazurite_bricks').material('stone').displayName('Rough Lazurite Bricks').soundType('stone').hardness(3).tagBlock('minecraft:mineable/pickaxe')
  event.create('rough_lazurite_brick_stairs', 'stairs').material('stone').displayName('Rough Lazurite Brick Stairs').soundType('stone').textureAll('kubejs:block/rough_lazurite_bricks').hardness(2.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:stairs')
  event.create('rough_lazurite_brick_slab', 'slab').material('stone').displayName('Rough Lazurite Brick Slab').soundType('stone').textureAll('kubejs:block/rough_lazurite_bricks').hardness(2.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:slabs')

  event.create('rough_diamond_bricks').material('stone').displayName('Rough Diamond Bricks').soundType('stone').hardness(3).tagBlock('minecraft:mineable/pickaxe')
  event.create('rough_diamond_brick_stairs', 'stairs').material('stone').displayName('Rough Diamond Brick Stairs').soundType('stone').textureAll('kubejs:block/rough_diamond_bricks').hardness(2.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:stairs')
  event.create('rough_diamond_brick_slab', 'slab').material('stone').displayName('Rough Diamond Brick Slab').soundType('stone').textureAll('kubejs:block/rough_diamond_bricks').hardness(2.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:slabs')

  event.create('grave_metal_plates').material('metal').displayName('Grave Metal Plates').soundType('metal').hardness(2.5).tagBlock('minecraft:mineable/pickaxe')
  event.create('grave_metal_plate_stairs', 'stairs').material('metal').displayName('Grave Metal Plate Stairs').soundType('metal').textureAll('kubejs:block/grave_metal_plates').hardness(2.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:stairs')
  event.create('grave_metal_plate_slab', 'slab').material('metal').displayName('Grave Metal Plate Slab').soundType('metal').textureAll('kubejs:block/grave_metal_plates').hardness(2.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:slabs')

  event.create('raw_silver_bricks').material('metal').displayName('Raw Silver Bricks').soundType('stone').hardness(3.5).tagBlock('minecraft:mineable/pickaxe')
  event.create('raw_silver_brick_stairs', 'stairs').material('metal').displayName('Raw Silver Brick Stairs').soundType('stone').textureAll('kubejs:block/raw_silver_bricks').hardness(3.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:stairs')
  event.create('raw_silver_brick_slab', 'slab').material('metal').displayName('Raw Silver Brick Slab').soundType('stone').textureAll('kubejs:block/raw_silver_bricks').hardness(3.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:slabs')

  event.create('raw_zinc_bricks').material('metal').displayName('Raw Zinc Bricks').soundType('stone').hardness(3.5).tagBlock('minecraft:mineable/pickaxe')
  event.create('raw_zinc_brick_stairs', 'stairs').material('metal').displayName('Raw Zinc Brick Stairs').soundType('stone').textureAll('kubejs:block/raw_zinc_bricks').hardness(3.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:stairs')
  event.create('raw_zinc_brick_slab', 'slab').material('metal').displayName('Raw Zinc Brick Slab').soundType('stone').textureAll('kubejs:block/raw_zinc_bricks').hardness(3.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:slabs')
})


