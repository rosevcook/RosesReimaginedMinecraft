Ponder.registry((event) => {
    event.create('farmersdelight:rope').scene('rope', 'Using Rope', (scene, util) => {
        scene.showStructure();
        scene.idle(10);
        scene.world.createEntity('upgrade_aquatic:goose', [2.5, 1, 2.5]);
        scene.idle(10);
        scene
	    .text(60, 'this goose...', [2.0, 2.5, 2.5])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(20);
        scene
	    .text(60, 'is GAY!!', [2.0, 1.5, 2.5])
            .placeNearTarget()
            .attachKeyFrame();
    })
})