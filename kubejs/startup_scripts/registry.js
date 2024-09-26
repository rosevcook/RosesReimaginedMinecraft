StartupEvents.registry('item', event => {
  event.create('silver_sheet').displayName('Silver Sheet').texture('kubejs:item/silver_sheet')
  event.create('copper_wire').displayName('Copper Wire').texture('kubejs:item/copper_wire')
  event.create('power_coil').displayName('Power Coil').texture('kubejs:item/power_coil')
  event.create('silver_feather').displayName('Silver Feather').texture('kubejs:item/silver_feather')
  event.create('torn_elytra_fragment').displayName('Torn Elytra Fragment').texture('kubejs:item/torn_elytra_fragment')
  event.create('ice_rod').displayName('Ice Rod').parentModel('item/handheld').texture('kubejs:item/ice_rod')
})

StartupEvents.registry('block', event => {
  event.create('grave_metal_plates').material('metal').displayName('Grave Metal Plates').soundType('metal').hardness(3.0).tagBlock('minecraft:mineable/pickaxe')
  event.create('grave_metal_plate_stairs', 'stairs').material('metal').displayName('Grave Metal Plate Stairs').soundType('metal').textureAll('kubejs:block/grave_metal_plates').hardness(3.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:stairs')
  event.create('grave_metal_plate_slab', 'slab').material('metal').displayName('Grave Metal Plate Slab').soundType('metal').textureAll('kubejs:block/grave_metal_plates').hardness(3.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:slabs')
})


