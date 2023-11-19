/**
Array.from(document.querySelectorAll('.product-block')).map(product => {
    const [background, detailImage, image] = Array.from(product.querySelectorAll('img')).map(img => img.src);
    const title = product.querySelector('.title').textContent;
    const price = product.querySelector('.price').textContent;
    const isNew = Boolean(product.querySelector('.new'));

    return {
        image,
        background,
        detailImage,
        title,
        price,
        isNew
    }
})
*/

export const items = [
  {
    image:
      'https://store.figma.com/cdn/shop/products/figma-store_design-in-bloom-tee_01_600x.jpg?v=1670516592',
    background: 'https://store.figma.com/cdn/shop/files/pattern-27_600x.png?v=1651180902',
    detailImage:
      'https://store.figma.com/cdn/shop/files/figma-store_design-in-bloom-tee_rollover_600x.png?v=1670516565',
    title: 'Design in bloom tee',
    price: '$25',
    isNew: true
  },
  {
    image:
      'https://store.figma.com/cdn/shop/products/figma-store_washi-tape-green_01_600x.jpg?v=1670520424',
    background: 'https://store.figma.com/cdn/shop/files/pattern-25_600x.png?v=1636143252',
    detailImage:
      'https://store.figma.com/cdn/shop/files/figma-store_washi-tape-green_rollover_02_600x.png?v=1670597359',
    title: 'Gridlock washi tape',
    price: '$1',
    isNew: true
  },
  {
    image:
      'https://store.figma.com/cdn/shop/products/figma-store_version-history-jacket_01_600x.jpg?v=1670519561',
    background:
      'https://store.figma.com/cdn/shop/files/pattern-1_1e67f092-49de-4857-8ce1-b3185e8566da_600x.png?v=1651180902',
    detailImage:
      'https://store.figma.com/cdn/shop/files/figma-store_version-history-jacket.png_rollover_600x.png?v=1670519524',
    title: 'Version history coach jacket',
    price: '$45',
    isNew: true
  },
  {
    image:
      'https://store.figma.com/cdn/shop/products/figma-store_best-bud-pin_01_600x.jpg?v=1670520788',
    background: 'https://store.figma.com/cdn/shop/files/pattern-24_600x.png?v=1636143252',
    detailImage:
      'https://store.figma.com/cdn/shop/files/figma-store_best-bud-pin_rollover_600x.png?v=1670520766',
    title: 'Best bud pin',
    price: '$2',
    isNew: true
  },
  {
    image:
      'https://store.figma.com/cdn/shop/products/figma-store_tool-kit-pin_01_600x.jpg?v=1670520907',
    background: 'https://store.figma.com/cdn/shop/files/pattern-15_600x.png?v=1636143251',
    detailImage:
      'https://store.figma.com/cdn/shop/files/figma-store_tool-kit-pin_rollover_600x.png?v=1670520872',
    title: 'Toolkit pin',
    price: '$2',
    isNew: true
  },
  {
    image:
      'https://store.figma.com/cdn/shop/products/figma-store_on-brand-hat_01_600x.jpg?v=1670519718',
    background: 'https://store.figma.com/cdn/shop/files/pattern-22_600x.png?v=1636143252',
    detailImage:
      'https://store.figma.com/cdn/shop/files/figma-store_on-brand-hat_rollover_600x.png?v=1670519690',
    title: 'On brand hat',
    price: '$25',
    isNew: true
  },
  {
    image:
      'https://store.figma.com/cdn/shop/products/figma-store_shape-up-tee_013_1200x.png?v=1678114580',
    background: 'https://store.figma.com/cdn/shop/files/pattern-2_1200x.png?v=1636143050',
    detailImage:
      'https://store.figma.com/cdn/shop/files/figma-store_shape-up-tee_rollover_1200x.png?v=1670516450',
    title: 'Shape up tee',
    price: '$20',
    isNew: true
  },
  {
    image:
      'https://store.figma.com/cdn/shop/products/figma-store_band-together-socks_01_1200x.jpg?v=1670519923',
    background: 'https://store.figma.com/cdn/shop/files/pattern-2_1200x.png?v=1636143050',
    detailImage:
      'https://store.figma.com/cdn/shop/files/figma-store_band-together-socks_rollover_1200x.png?v=1670519884',
    title: 'Band together socks',
    price: '$10',
    isNew: true
  },
  {
    image:
      'https://store.figma.com/cdn/shop/products/figma-store_dress-code-hat_01_600x.png?v=1677707527',
    background: 'https://store.figma.com/cdn/shop/files/Hover_-_Pattern_600x.png?v=1641321309',
    detailImage:
      'https://store.figma.com/cdn/shop/files/figma-store_dress-code-hat_rollover_600x.png?v=1670519799',
    title: 'Dress code hat',
    price: '$20',
    isNew: true
  },
  {
    image:
      'https://store.figma.com/cdn/shop/products/figma-store_power-points-pin_01_600x.jpg?v=1670520537',
    background:
      'https://store.figma.com/cdn/shop/files/pattern-1_2462bce6-2629-4568-a70d-77d06bddd9e1_600x.png?v=1636143251',
    detailImage:
      'https://store.figma.com/cdn/shop/files/figma-store_power-points-pin_rollover_600x.png?v=1670520514',
    title: 'Power points pin',
    price: '$2',
    isNew: true
  },
  {
    image:
      'https://store.figma.com/cdn/shop/products/figma-store_framework-tee_01_600x.jpg?v=1670515454',
    background: 'https://store.figma.com/cdn/shop/files/pattern-10_600x.png?v=1636143251',
    detailImage:
      'https://store.figma.com/cdn/shop/files/figma-store_framework-tee_rollover_600x.png?v=1670515569',
    title: 'Framework tee',
    price: '$20',
    isNew: true
  },
  {
    image:
      'https://store.figma.com/cdn/shop/products/figma-store_meet-n-greet-pin_01_600x.jpg?v=1670520677',
    background: 'https://store.figma.com/cdn/shop/files/pattern-12_600x.png?v=1636143252',
    detailImage:
      'https://store.figma.com/cdn/shop/files/figma-store_meet-n-greet-pin_rollover_600x.png?v=1670520645',
    title: "Meet n' greet pin",
    price: '$2',
    isNew: true
  },
  {
    image:
      'https://store.figma.com/cdn/shop/products/figma-store_tool-kit-mug_01_600x.jpg?v=1670520016',
    background: 'https://store.figma.com/cdn/shop/files/pattern-12_600x.png?v=1636143252',
    detailImage:
      'https://store.figma.com/cdn/shop/files/figma-store_tool-kit-mug_rollover_600x.png?v=1670520001',
    title: 'Toolkit mug',
    price: '$35',
    isNew: true
  },
  {
    image:
      'https://store.figma.com/cdn/shop/products/figma-store_washi-tape-tan_01_600x.jpg?v=1670520306',
    background: 'https://store.figma.com/cdn/shop/files/pattern-14_600x.png?v=1636143252',
    detailImage:
      'https://store.figma.com/cdn/shop/files/figma-store_washi-tape-tan_rollover_02_600x.png?v=1670597321',
    title: 'Pick of the bunch washi tape',
    price: '$1',
    isNew: true
  },
  {
    image:
      'https://store.figma.com/cdn/shop/products/figma-store_tidy-up-tee_01_600x.jpg?v=1670516715',
    background:
      'https://store.figma.com/cdn/shop/files/pattern-14_e1362380-a908-44c4-bc76-e5751953a5de_600x.png?v=1651180902',
    detailImage:
      'https://store.figma.com/cdn/shop/files/figma-store_tidy-up-tee_rollover_600x.png?v=1670516673',
    title: 'Tidy up tee',
    price: '$25',
    isNew: true
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-1096_600x.jpg?v=1636599836',
    background: 'https://store.figma.com/cdn/shop/files/pattern-10_600x.png?v=1636143251',
    detailImage: 'https://store.figma.com/cdn/shop/files/Rainbow-logo-tee_600x.png?v=1636143026',
    title: 'Rainbow logo tee',
    price: '$20',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-3403_1200x.jpg?v=1636598385',
    background: 'https://store.figma.com/cdn/shop/files/pattern-18_1200x.png?v=1636143252',
    detailImage:
      'https://store.figma.com/cdn/shop/files/Notebook_54df7006-77df-4397-a719-c2b49bc9df74_1200x.png?v=1636147218',
    title: 'Comments notebook',
    price: '$10',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-414-Edit_1200x.jpg?v=1636599254',
    background: 'https://store.figma.com/cdn/shop/files/pattern-17_1200x.png?v=1636143252',
    detailImage: 'https://store.figma.com/cdn/shop/files/figma-logo-hat_1200x.png?v=1636145926',
    title: 'Figma logo hat',
    price: '$20',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-1616_600x.jpg?v=1636599719',
    background: 'https://store.figma.com/cdn/shop/files/pattern-12_600x.png?v=1636143252',
    detailImage:
      'https://store.figma.com/cdn/shop/files/rainbow-cursor-pin_517323d3-6aff-4e24-ab7c-94107df5a187_600x.png?v=1636146982',
    title: 'Multicursor pin',
    price: '$2',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-2327_600x.jpg?v=1636599425',
    background: 'https://store.figma.com/cdn/shop/files/pattern-24_600x.png?v=1636143252',
    detailImage:
      'https://store.figma.com/cdn/shop/files/Flocked-logo-dimensions-tee_600x.png?v=1636143033',
    title: 'Logo dimensions tee',
    price: '$25',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-630_600x.jpg?v=1636598228',
    background: 'https://store.figma.com/cdn/shop/files/pattern-9_600x.png?v=1636143251',
    detailImage:
      'https://store.figma.com/cdn/shop/files/waterbottle_c970529b-0a45-4d21-b0d8-296aeed449c0_600x.png?v=1636146364',
    title: 'Bezier water bottle',
    price: '$20',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-1224_600x.jpg?v=1636599461',
    background: 'https://store.figma.com/cdn/shop/files/pattern-3_600x.png?v=1636143251',
    detailImage:
      'https://store.figma.com/cdn/shop/files/Hug-contents-tee_e300a456-bdd8-470f-9c15-3031ff12d110_600x.png?v=1636143026',
    title: 'Hug contents tee',
    price: '$20',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-2091_600x.jpg?v=1636598619',
    background: 'https://store.figma.com/cdn/shop/files/pattern-20_600x.png?v=1636143251',
    detailImage:
      'https://store.figma.com/cdn/shop/files/figma-logo-pin_d9be32db-3162-4e6b-a1b5-6dce15c40cad_600x.png?v=1636146982',
    title: 'Figma logo pin',
    price: '$2',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-366_600x.jpg?v=1636598498',
    background: 'https://store.figma.com/cdn/shop/files/pattern-10_600x.png?v=1636143251',
    detailImage:
      'https://store.figma.com/cdn/shop/files/Elevated-workflows-tee_600x.png?v=1636143031',
    title: 'Elevated workflows tee',
    price: '$25',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-2379_600x.jpg?v=1636598272',
    background: 'https://store.figma.com/cdn/shop/files/pattern-15_600x.png?v=1636143251',
    detailImage:
      'https://store.figma.com/cdn/shop/files/Black-arrow-icon-socks_600x.png?v=1636144149',
    title: 'Black arrow socks',
    price: '$10',
    isNew: false
  },
  {
    image:
      'https://store.figma.com/cdn/shop/products/Figma-Store-3116_efa5ec4c-b900-401d-a7fc-d184d47ec4b9_600x.jpg?v=1636599330',
    background: 'https://store.figma.com/cdn/shop/files/pattern-25_600x.png?v=1636143252',
    detailImage: 'https://store.figma.com/cdn/shop/files/kinto-bottle_600x.png?v=1636146662',
    title: 'Figma travel tumbler',
    price: '$35',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-1600_600x.jpg?v=1636599757',
    background:
      'https://store.figma.com/cdn/shop/files/pattern-1_2462bce6-2629-4568-a70d-77d06bddd9e1_600x.png?v=1636143251',
    detailImage: 'https://store.figma.com/cdn/shop/files/plugins-hat_600x.png?v=1636145926',
    title: '<code/> cap',
    price: '$20',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-1242_600x.jpg?v=1636600007',
    background: 'https://store.figma.com/cdn/shop/files/pattern-5_600x.png?v=1636143251',
    detailImage:
      'https://store.figma.com/cdn/shop/files/White-pen-tool-icon-socks_600x.png?v=1636144376',
    title: 'White pen tool socks',
    price: '$10',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-1469_600x.jpg?v=1636598538',
    background: 'https://store.figma.com/cdn/shop/files/pattern-11_600x.png?v=1636143251',
    detailImage:
      'https://store.figma.com/cdn/shop/files/Figma-embroidered-hoodie_600x.png?v=1636143387',
    title: 'Figma hoodie',
    price: '$45',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-2008_600x.jpg?v=1636598330',
    background: 'https://store.figma.com/cdn/shop/files/pattern-4_600x.png?v=1636143252',
    detailImage: 'https://store.figma.com/cdn/shop/files/blue-figma-hat_600x.png?v=1636145926',
    title: 'Blue Figma hat',
    price: '$20',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-2662_600x.jpg?v=1636599962',
    background: 'https://store.figma.com/cdn/shop/files/pattern-25_600x.png?v=1636143252',
    detailImage: 'https://store.figma.com/cdn/shop/files/Blanket_600x.png?v=1636145515',
    title: 'Throw blanket',
    price: '$80',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-2894_600x.jpg?v=1636598662',
    background: 'https://store.figma.com/cdn/shop/files/pattern-6_600x.png?v=1636143252',
    detailImage: 'https://store.figma.com/cdn/shop/files/Figma-logo-tee_600x.png?v=1636143022',
    title: 'Figma logo tee',
    price: '$18',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-3504_600x.jpg?v=1636599916',
    background: 'https://store.figma.com/cdn/shop/files/pattern-11_600x.png?v=1636143251',
    detailImage:
      'https://store.figma.com/cdn/shop/files/smiley-pin_a948a00a-6e53-4bbd-b5c6-68da942ffcd8_600x.png?v=1636146983',
    title: 'Smiley pin',
    price: '$2',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-3215_600x.jpg?v=1636598458',
    background: 'https://store.figma.com/cdn/shop/files/pattern-1_600x.png?v=1636142910',
    detailImage: 'https://store.figma.com/cdn/shop/files/Detach-instance-tee_600x.png?v=1636142947',
    title: 'Detach instance tee',
    price: '$20',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-4050-Edit_600x.jpg?v=1636598157',
    background: 'https://store.figma.com/cdn/shop/files/pattern-2_600x.png?v=1636143050',
    detailImage: 'https://store.figma.com/cdn/shop/files/Bezier-logo-tee_600x.png?v=1636143029',
    title: 'Bezier logo tee',
    price: '$25',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-3423_600x.jpg?v=1636599871',
    background: 'https://store.figma.com/cdn/shop/files/pattern-16_600x.png?v=1636143251',
    detailImage:
      'https://store.figma.com/cdn/shop/files/red-burst-pin_20fbc189-9a07-4aa8-a362-1e82c86a6479_600x.png?v=1636146983',
    title: 'Vector network pin',
    price: '$2',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-4136_600x.jpg?v=1636599515',
    background: 'https://store.figma.com/cdn/shop/files/pattern-25_600x.png?v=1636143252',
    detailImage:
      'https://store.figma.com/cdn/shop/files/Light-grey-comment-icon-socks_600x.png?v=1636144377',
    title: 'Light grey comment socks',
    price: '$10',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-2953_600x.jpg?v=1636598421',
    background: 'https://store.figma.com/cdn/shop/files/pattern-25_600x.png?v=1636143252',
    detailImage:
      'https://store.figma.com/cdn/shop/files/detach-instance-pin_cad395ad-d8d9-4a3b-8753-2db4838f8ec4_600x.png?v=1636146981',
    title: 'Detach instance pin',
    price: '$2',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-3600-Edit_600x.jpg?v=1636599551',
    background: 'https://store.figma.com/cdn/shop/files/pattern-18_600x.png?v=1636143252',
    detailImage:
      'https://store.figma.com/cdn/shop/files/Meet-me-in-the-browser-tee_25519412-0726-41e8-9c52-b1a267fe1d19_600x.png?v=1636641906',
    title: 'Meet me in the browser tee',
    price: '$25',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-3814_600x.jpg?v=1636599369',
    background: 'https://store.figma.com/cdn/shop/files/pattern-22_600x.png?v=1636143252',
    detailImage: 'https://store.figma.com/cdn/shop/files/Figma-wordmark-tee_600x.png?v=1636143026',
    title: 'Figma wordmark tee',
    price: '$18',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-3751-Edit_600x.jpg?v=1636599807',
    background: 'https://store.figma.com/cdn/shop/files/pattern-8_600x.png?v=1636143251',
    detailImage: 'https://store.figma.com/cdn/shop/files/plugins-mug_600x.png?v=1636146662',
    title: 'Plugins mug',
    price: '$32',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/GiftCard-PLP_600x.png?v=1641323873',
    background:
      'https://store.figma.com/cdn/shop/files/Figma_Store_Pattern_1_600x.png?v=1635541659',
    detailImage: 'https://store.figma.com/cdn/shop/files/GiftCard-PLPHover_600x.png?v=1641324383',
    title: 'The Figma Store gift card',
    price: '$25',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/Figma-Store-1375_600x.jpg?v=1643228355',
    background: 'https://store.figma.com/cdn/shop/files/pattern-10_600x.png?v=1636143251',
    detailImage:
      'https://store.figma.com/cdn/shop/files/Figma-Store-123-Cut-Out_600x.png?v=1643228318',
    title: 'Figma sticker pack',
    price: '$1',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/IMG_9207_600x.png?v=1651177999',
    background:
      'https://store.figma.com/cdn/shop/files/pattern-1_1e67f092-49de-4857-8ce1-b3185e8566da_600x.png?v=1651180902',
    detailImage: 'https://store.figma.com/cdn/shop/files/IMG_0036_600x.png?v=1651181016',
    title: 'Pixel perfect dark mode tee',
    price: '$25',
    isNew: false
  },
  {
    image: 'https://store.figma.com/cdn/shop/products/FigmaStore_Tote-25_600x.jpg?v=1657055226',
    background: 'https://store.figma.com/cdn/shop/files/Hover_-_Pattern_600x.png?v=1641321309',
    detailImage: 'https://store.figma.com/cdn/shop/files/Hover_ToteBag_600x.png?v=1657054965',
    title: 'Cursor tote bag',
    price: '$20',
    isNew: false
  }
]
