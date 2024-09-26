ItemEvents.modification(event => {
  event.modify('neapolitan:strawberry_cake', item => item.maxStackSize = 64)
  event.modify('neapolitan:vanilla_cake', item => item.maxStackSize = 64)
  event.modify('neapolitan:banana_cake', item => item.maxStackSize = 64)
})