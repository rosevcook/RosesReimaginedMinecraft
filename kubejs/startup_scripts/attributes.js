let $Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')
let $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')

ForgeEvents.onEvent('net.minecraftforge.event.ItemAttributeModifierEvent', event => {
    if (event.itemStack.id == 'oreganized:electrum_helmet' && event.slotType == 'head') {
        event.removeAttribute("minecraft:generic.movement_speed")
        event.addModifier("minecraft:generic.movement_speed", new $AttributeModifier(UUID.fromString('4cbad1f0-1d16-404c-a4bd-c3bf2f9980a7'), 'Speed modifier', 0.1, 'multiply_base'))
    } else if (event.itemStack.id == 'oreganized:electrum_chestplate' && event.slotType == 'chest') {
        event.removeAttribute("minecraft:generic.movement_speed")
        event.addModifier("minecraft:generic.movement_speed", new $AttributeModifier(UUID.fromString('4cbad1f0-2d16-404c-a4bd-c3bf2f9980a7'), 'Speed modifier', 0.1, 'multiply_base'))
    } else if (event.itemStack.id == 'oreganized:electrum_leggings' && event.slotType == 'legs') {
        event.removeAttribute("minecraft:generic.movement_speed")
        event.addModifier("minecraft:generic.movement_speed", new $AttributeModifier(UUID.fromString('4cbad1f0-3d16-404c-a4bd-c3bf2f9980a7'), 'Speed modifier', 0.1, 'multiply_base'))
    } else if (event.itemStack.id == 'oreganized:electrum_boots' && event.slotType == 'feet') {
        event.removeAttribute("minecraft:generic.movement_speed")
        event.addModifier("minecraft:generic.movement_speed", new $AttributeModifier(UUID.fromString('4cbad1f0-4d16-404c-a4bd-c3bf2f9980a7'), 'Speed modifier', 0.1, 'multiply_base'))
    } else if (event.itemStack.id == 'caverns_and_chasms:silver_helmet' && event.slotType == 'head') {
        event.addModifier("irons_spellbooks:max_mana", new $AttributeModifier(UUID.fromString('4cbad1f0-1d16-404c-a4bd-c3bf2f9980a7'), 'Mana modifier', 0.1, 'multiply_base'))
    } else if (event.itemStack.id == 'caverns_and_chasms:silver_chestplate' && event.slotType == 'chest') {
        event.addModifier("irons_spellbooks:max_mana", new $AttributeModifier(UUID.fromString('4cbad1f0-2d16-404c-a4bd-c3bf2f9980a7'), 'Mana modifier', 0.1, 'multiply_base'))
    } else if (event.itemStack.id == 'caverns_and_chasms:silver_leggings' && event.slotType == 'legs') {
        event.addModifier("irons_spellbooks:max_mana", new $AttributeModifier(UUID.fromString('4cbad1f0-3d16-404c-a4bd-c3bf2f9980a7'), 'Mana modifier', 0.1, 'multiply_base'))
    } else if (event.itemStack.id == 'caverns_and_chasms:silver_boots' && event.slotType == 'feet') {
        event.addModifier("irons_spellbooks:max_mana", new $AttributeModifier(UUID.fromString('4cbad1f0-4d16-404c-a4bd-c3bf2f9980a7'), 'Mana modifier', 0.1, 'multiply_base'))
    } else if (event.itemStack.id == 'undead_unleashed:shadow_helmet' && event.slotType == 'head') {
        event.addModifier("irons_spellbooks:cast_time_reduction", new $AttributeModifier(UUID.fromString('4cbad1f0-1d16-404c-a4bd-c3bf2f9980a7'), 'Mana modifier', 0.05, 'multiply_base'))
    } else if (event.itemStack.id == 'undead_unleashed:shadow_chestplate' && event.slotType == 'chest') {
        event.addModifier("irons_spellbooks:cast_time_reduction", new $AttributeModifier(UUID.fromString('4cbad1f0-2d16-404c-a4bd-c3bf2f9980a7'), 'Mana modifier', 0.05, 'multiply_base'))
    } else if (event.itemStack.id == 'undead_unleashed:shadow_leggings' && event.slotType == 'legs') {
        event.addModifier("irons_spellbooks:cast_time_reduction", new $AttributeModifier(UUID.fromString('4cbad1f0-3d16-404c-a4bd-c3bf2f9980a7'), 'Mana modifier', 0.05, 'multiply_base'))
    } else if (event.itemStack.id == 'undead_unleashed:shadow_boots' && event.slotType == 'feet') {
        event.addModifier("irons_spellbooks:cast_time_reduction", new $AttributeModifier(UUID.fromString('4cbad1f0-4d16-404c-a4bd-c3bf2f9980a7'), 'Mana modifier', 0.05, 'multiply_base'))
    }
})