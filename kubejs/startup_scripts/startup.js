Platform.mods.kubejs.name = 'RRM'

StartupEvents.registry('item', event => {
  event.create('silver_sheet').displayName('Silver Sheet').texture('kubejs:item/silver_sheet')
  event.create('copper_wire').displayName('Copper Wire').texture('kubejs:item/copper_wire')
  event.create('power_coil').displayName('Power Coil').texture('kubejs:item/power_coil')
  event.create('silver_feather').displayName('Silver Feather').texture('kubejs:item/silver_feather')
  event.create('torn_elytra_fragment').displayName('Torn Elytra Fragment').texture('kubejs:item/torn_elytra_fragment')
})


