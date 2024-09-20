ItemEvents.tooltip(event => {
  event.add(['minecraft:ender_eye'], "§7Locates the Ancient City")

  event.addAdvanced('minecraft:wooden_pickaxe', (item, advanced, text) => text.add(1, Text.of("§7Can Mine: Stone, Coal, Copper")))
  event.addAdvanced('metalworks:copper_pickaxe', (item, advanced, text) => text.add(1, Text.of("§7Can Mine: Iron, Zinc")))
  event.addAdvanced('minecraft:iron_pickaxe', (item, advanced, text) => text.add(1, Text.of("§7Can Mine: Gold, Silver, Deepslate")))
  event.addAdvanced(['minecraft:golden_pickaxe', 'caverns_and_chasms:silver_pickaxe'], (item, advanced, text) => text.add(1, Text.of("§7Can Mine: Diamond")))
  event.addAdvanced('minecraft:diamond_pickaxe', (item, advanced, text) => text.add(1, Text.of("§7Can Mine: Obsidian, Ancient Debris")))

})
