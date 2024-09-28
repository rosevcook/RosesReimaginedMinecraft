Ponder.registry((event) => {
    event.create('farmersdelight:rope').scene('rope', 'Using Rope', (scene, util) => {
        scene.showStructure();
        scene.idle(10);
        scene.world.createEntity('environmental:yak', [2.5, 1, 2.5]);
        scene
	    .text(60, 'im gay', [2.0, 2.5, 2.5])
            .placeNearTarget()
            .attachKeyFrame();
        scene
            .showControls(60, [2.5, 3, 2.5], 'down')
            .rightClick()
            .withItem('minecraft:shears')
            .whileSneaking()
            .whileCTRL();
    })
})