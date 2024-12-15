StartupEvents.registry('item', event => {
  event.create('silver_sheet').displayName('Silver Sheet').texture('kubejs:item/silver_sheet').group('transportation')
  event.create('zinc_sheet').displayName('Zinc Sheet').texture('kubejs:item/zinc_sheet').group('transportation')
  event.create('lead_sheet').displayName('Lead Sheet').texture('kubejs:item/lead_sheet').group('transportation')
  event.create('rough_spinel').displayName('Rough Spinel').texture('kubejs:item/rough_spinel').group('transportation')
  event.create('silver_feather').displayName('Silver Feather').texture('kubejs:item/silver_feather').group('transportation')
  event.create('copper_wire').displayName('Copper Wire').texture('kubejs:item/copper_wire').group('transportation')
  event.create('power_coil').displayName('Power Coil').texture('kubejs:item/power_coil').group('transportation')
  event.create('torn_elytra_fragment').displayName('Torn Elytra Fragment').texture('kubejs:item/torn_elytra_fragment').group('transportation')
  event.create('ice_rod').displayName('Ice Rod').parentModel('item/handheld').texture('kubejs:item/ice_rod').group('transportation')
  event.create('wadjet_tail').displayName('Wadjet Tail').texture('kubejs:item/wadjet_tail').rarity('uncommon').group('transportation')
  event.create('dry_moss').displayName('Dry Moss').texture('kubejs:item/dry_moss').group('transportation')
})

StartupEvents.registry('block', event => {
  event.create('rough_spinel_block').material('stone').displayName('Block of Rough Spinel').soundType('stone').hardness(3).tagBlock('minecraft:mineable/pickaxe')
  event.create('rough_spinel_bricks').material('stone').displayName('Rough Spinel Bricks').soundType('stone').hardness(3).tagBlock('minecraft:mineable/pickaxe')
  event.create('rough_spinel_brick_stairs', 'stairs').material('stone').displayName('Rough Spinel Brick Stairs').soundType('stone').textureAll('kubejs:block/rough_spinel_bricks').hardness(2.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:stairs')
  event.create('rough_spinel_brick_slab', 'slab').material('stone').displayName('Rough Spinel Brick Slab').soundType('stone').textureAll('kubejs:block/rough_spinel_bricks').hardness(2.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:slabs')

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


