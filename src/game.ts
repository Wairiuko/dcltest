// Define a reusable box shape
let collideBox = new BoxShape()
collideBox.withCollisions = true

// Define a reusable plane shape
let planeShape = new PlaneShape()
planeShape.withCollisions = true

//Define reusable sphere shape
let sphere = new SphereShape()
sphere.withCollisions = true

/*/ Define fixed walls
const wall1 = new Entity()
wall1.addComponent(new Transform({
  position: new Vector3(5, 0, 8),
  scale: new Vector3(10, 10, 0.15)
}))
wall1.addComponent(collideBox)
engine.addEntity(wall1)
//Add a dada collectible 1st nft
const dadaCollectible = new Entity();
const collComponent = new NFTShape(
  "ethereum://0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0/6054",
  {
    color: Color3.Green(),
    style: PictureFrameStyle.Gold_Carved,
  }
)
//add pointer down event
dadaCollectible.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0/6054"
    )
  })
)

dadaCollectible.addComponent(collComponent)
dadaCollectible.addComponent(new Transform({
  position: new Vector3(0.75, 2, 7),
  scale: new Vector3(2, 2, 2)
}))

engine.addEntity(dadaCollectible)

//Add a dada collectible 2nd nft
const dadaCollectible2 = new Entity();
const collComponent2 = new NFTShape(
  "ethereum://0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0/6348",
  {
    color: Color3.Green(),
    style: PictureFrameStyle.Gold_Carved,
  }
)
//add pointer down event
dadaCollectible2.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0/6348"
    )
  })
)

dadaCollectible2.addComponent(collComponent2)
dadaCollectible2.addComponent(new Transform({
  position: new Vector3(2.05, 2, 7),
  scale: new Vector3(2, 2, 2)
}))

engine.addEntity(dadaCollectible2)
//Add a dada collectible 3rd nft
const dadaCollectible3 = new Entity();
const collComponent3 = new NFTShape(
  "ethereum://0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0/6067",
  {
    color: Color3.Green(),
    style: PictureFrameStyle.Gold_Carved,
  }
)
//add pointer down event
dadaCollectible3.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0/6067"
    )
  })
)

dadaCollectible3.addComponent(collComponent3)
dadaCollectible3.addComponent(new Transform({
  position: new Vector3(3.35, 2, 7),
  scale: new Vector3(2, 2, 2)
}))

engine.addEntity(dadaCollectible3)

//Add a dada collectible 4th nft
const dadaCollectible4 = new Entity();
const collComponent4 = new NFTShape(
  "ethereum://0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0/5636",
  {
    color: Color3.Green(),
    style: PictureFrameStyle.Gold_Carved,
  }
)
//add pointer down event
dadaCollectible4.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0/5636"
    )
  })
)

dadaCollectible4.addComponent(collComponent4)
dadaCollectible4.addComponent(new Transform({
  position: new Vector3(4.65, 2, 7),
  scale: new Vector3(2, 2, 2)
}))

engine.addEntity(dadaCollectible4)

//TEST USING EXTERNAL CONVO
//add first drawing by Sparrow
const sparrow1 = new Entity()
const spTextr = new Texture("https://dada-media.s3.amazonaws.com/uploads/visual_status/src/Wk5O0C0O_Y48M8TPnUmw6w/preview_foo20210222-17323-8wp31q.png")
const spMat = new BasicMaterial()
spMat.texture = spTextr
sparrow1.addComponent(new Transform({
  position: new Vector3(0.75, 3.5, 7),
  scale: new Vector3(1.3, 1, 0.05)
}))
sparrow1.addComponent(collideBox)
sparrow1.addComponent(spMat)
engine.addEntity(sparrow1)
//add second drawing by Ilan
const ilan1 = new Entity()
const ilTextr = new Texture("https://dada-media.s3.amazonaws.com/uploads/visual_status/src/r7BJ2PcyjJiq1F3HgtKKAA/preview_foo20210222-21083-s4tbao.png")
const ilMat = new BasicMaterial()
ilMat.texture = ilTextr
ilan1.addComponent(new Transform({
  position: new Vector3(2.05, 3.5, 7),
  scale: new Vector3(1.3, 1, 0.05)
}))
ilan1.addComponent(collideBox)
ilan1.addComponent(ilMat)
engine.addEntity(ilan1)

//Add third drawing by Sparrow
const sp2 = new Entity()
const sptxtr = new Texture("https://dada-media.s3.amazonaws.com/uploads/visual_status/src/HGLwmKTYiCeST7cxveMrRw/preview_foo20210223-18018-1vc5w2r.png")
const sp2Mat = new BasicMaterial()
sp2Mat.texture = sptxtr
sp2.addComponent(new Transform({
  position: new Vector3(3.35, 3.5, 7),
  scale: new Vector3(1.3, 1, 0.05)
}))
sp2.addComponent(collideBox)
sp2.addComponent(sp2Mat)
engine.addEntity(sp2)

//Add forth drawing by Ilan
const ilan3 = new Entity()
const ilantxtr = new Texture("https://dada-media.s3.amazonaws.com/uploads/visual_status/src/aZbrlEH8m_VF8EHZhd221A/preview_foo20210224-30340-3t8re3.png")
const ilanMat = new BasicMaterial()
ilanMat.texture = ilantxtr
ilan3.addComponent(new Transform({
  position: new Vector3(4.65, 3.5, 7),
  scale: new Vector3(1.3, 1, 0.05)
}))
ilan3.addComponent(collideBox)
ilan3.addComponent(ilanMat)
engine.addEntity(ilan3)
//Add fifth drawing by Sparrow
const sp3 = new Entity()
const sp3txr = new Texture("https://dada-media.s3.amazonaws.com/uploads/visual_status/src/9Jis_9diRWR-V7gvkP_Shw/preview_foo20210225-17740-zk4vxg.png")
const sp3Mat = new BasicMaterial()
sp3Mat.texture = sp3txr
sp3.addComponent(new Transform({
  position: new Vector3(5.95, 3.5, 7),
  scale: new Vector3(1.3, 1, 0.05)
}))
sp3.addComponent(collideBox)
sp3.addComponent(sp3Mat)
engine.addEntity(sp3)
//add sixth drawing by Ilan
const testConvo = new Entity()
const testTexture = new Texture("https://dada-media.s3.amazonaws.com/uploads/visual_status/src/VvJCSjCqdYsrsk_lxjbzTg/preview_foo20210225-11717-1ujbhva.png")
const testMat = new BasicMaterial();
testMat.texture = testTexture
testConvo.addComponent(new Transform({
  position: new Vector3(7.25, 3.5, 7),
  scale: new Vector3(1.3, 1, 0.05)
}))
testConvo.addComponent(collideBox)
testConvo.addComponent(testMat)
engine.addEntity(testConvo)

//Add text
const descHeader = new Entity()
const descText = new TextShape("Today's Drink and Draw at https://dada.art/pa/129111. \nDrawings by DADAkins Sparrow and Ilan Katin")
descText.fontSize = 12
descText.color = Color3.Black()
//descText.resizeToFit = false
descHeader.addComponent(descText)
descHeader.addComponent(new Transform({
  position: new Vector3(1.5, 4.5, 7),
  scale: new Vector3(0.1, 0.1, 0.1)
}))
engine.addEntity(descHeader)*/

//add dcl gallery
const dadaGallery = new Entity()

dadaGallery.addComponent(new GLTFShape("models/dclgallery3.glb"))
dadaGallery.addComponent(new Transform({
  position: new Vector3(8, 2, 8),
  scale: new Vector3(0.45, 0.5, 0.5)
}))
engine.addEntity(dadaGallery)