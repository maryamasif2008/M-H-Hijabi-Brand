// Get URL parameter (e.g., ?type=classic)
const params = new URLSearchParams(window.location.search);
const type = params.get('type'); // 'classic', 'chiffon', or 'luxury'

// Get HTML elements
const productGrid = document.getElementById('product-grid');
const title = document.getElementById('collection-title');

// ✅ Product data
const productData = {
  classic: {
    name: "Classic Hijabs",
    items: [
      {
  name: "Soft Cotton Black",
  image: "https://hivastyle.ca/cdn/shop/files/2-17.jpg?v=1722483835",
  rating: 4.5,
  price: 499,
  description: "Crafted from premium soft cotton, this black hijab offers all-day comfort and breathability. Its lightweight and non-slip fabric makes it ideal for both everyday wear and special occasions, providing elegance with ease."
},
{
  name: "Soft Cotton Brown",
  image: "https://hivastyle.ca/cdn/shop/files/2-49.jpg?v=1722483856",
  rating: 4.5,
  price: 499,
  description: "Crafted from premium soft cotton, this brown hijab offers all-day comfort and breathability. Its lightweight and non-slip fabric makes it ideal for both everyday wear and special occasions, providing elegance with ease."
},
{ name: "Soft Cotton Dark Green", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4i2YxTa_HjuGt_xxgdQCDlgAgvN6fN_2zX2QwYnKvCwgyMKhPct70PqqZKYhlDt2A_k&usqp=CAU", 
  rating: 4.5,
  price: 499,
  description: "Crafted from premium soft cotton, this dark green hijab offers all-day comfort and breathability. Its lightweight and non-slip fabric makes it ideal for both everyday wear and special occasions, providing elegance with ease."
},
{ name: "Soft Cotton Mahroon", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScgTppUDzI1I2a6aJmpZ0wrjpjGedPP1yefIT9hjRh2rqri0MTM24iLGbRgOdDA8Hl1GU&usqp=CAU",
  rating: 4.5,
  price: 499,
  description: "Crafted from premium soft cotton, this mahroon hijab offers all-day comfort and breathability. Its lightweight and non-slip fabric makes it ideal for both everyday wear and special occasions, providing elegance with ease."
},
{ name: "Soft Cotton Pink", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0lPrb7Rw0-xTFgBfMGBi9IPeDfm39BAuOf2t9BgpppEspZ_7F4ka7O7pIhQYEt28FkpU&usqp=CAU",
  rating: 4.5,
  price: 499,
  description: "Crafted from premium soft cotton, this pink hijab offers all-day comfort and breathability. Its lightweight and non-slip fabric makes it ideal for both everyday wear and special occasions, providing elegance with ease."
},
{ name: "Soft Cotton Gray", 
  image: "https://hivastyle.ca/cdn/shop/files/2-18.jpg?v=1722483881",
  rating: 4.5,
  price: 499,
  description: "Crafted from premium soft cotton, this gray hijab offers all-day comfort and breathability. Its lightweight and non-slip fabric makes it ideal for both everyday wear and special occasions, providing elegance with ease."
},


{
  name: "Daily Wear Gray",
  image: "https://folmoda.com/cdn/shop/files/Premium-non-slip-chiffon-hijab-lavender-gray.jpg?v=1730300254",
  rating: 4.7,
  price: 599,
  description: "A lightweight, non-slip chiffon hijab in an elegant gray shade—perfect for daily wear. Designed to stay in place all day, it offers breathability and a soft drape for a polished look with minimal effort."
},
{ name: "Daily Wear Blue", 
  image: "https://folmoda.com/cdn/shop/files/Premium-non-slip-chiffon-hijab-dusty-blue.jpg?v=1730300256",
  rating: 4.7,
  price: 599,
  description: "A lightweight, non-slip chiffon hijab in an elegant blue shade—perfect for daily wear. Designed to stay in place all day, it offers breathability and a soft drape for a polished look with minimal effort."
},
{ name: "Daily Wear Purple", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuSWA1wIinIYmDoQVRvZ-x412ZQCAF5bYPb1SAxm14sV5-UCQFvvJNsSym57adLoKlYGo&usqp=CAU",
  rating: 4.7,
  price: 599,
  description: "A lightweight, non-slip chiffon hijab in an elegant purple shade—perfect for daily wear. Designed to stay in place all day, it offers breathability and a soft drape for a polished look with minimal effort."
},
{ name: "Daily Wear White", 
  image: "https://folmoda.com/cdn/shop/files/Premium-non-slip-chiffon-hijab-white_79955695-680c-42c8-995d-9acc95ead582.jpg?v=1730300244",
  rating: 4.7,
  price: 599,
  description: "A lightweight, non-slip chiffon hijab in an elegant white shade—perfect for daily wear. Designed to stay in place all day, it offers breathability and a soft drape for a polished look with minimal effort."
},
{ name: "Daily Wear Pink", 
  image: "https://folmoda.com/cdn/shop/files/Premium-non-slip-chiffon-hijab-pale-pink.jpg?v=1730300275",
  rating: 4.7,
  price: 599,
  description: "A lightweight, non-slip chiffon hijab in an elegant pink shade—perfect for daily wear. Designed to stay in place all day, it offers breathability and a soft drape for a polished look with minimal effort."
},
{ name: "Daily Wear Red", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Sil6O8IlaD4RIe_kbL1v6lI8mWGVi6WVaCF8E1pJ6xPV3E5D7fV52DMoa2h1NxoWEDI&usqp=CAU",
  rating: 4.7,
  price: 599,
  description: "A lightweight, non-slip chiffon hijab in an elegant red shade—perfect for daily wear. Designed to stay in place all day, it offers breathability and a soft drape for a polished look with minimal effort."
},
      

{
  name: "Plain White",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqnOYHIbsOOEuOlaEjfi5DBYhoASa_LglIzfHebMXA1jN8W4SOy1y2bMDCBci_LSpZvA&usqp=CAU",
  rating: 4.6,
  price: "399",
  description:"A lightweight, non-slip chiffon hijab in a timeless white shade—ideal for everyday elegance. Designed to stay securely in place, it offers breathability and a graceful drape for a clean, polished look with minimal effort."
},
{ name: "Plain Sky Blue", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrto3S90UHl5OLPs6vuiBSZ3GR6Y-eO0R1lg&s,",
  rating: 4.6,
  price: "399",
  description:"A lightweight, non-slip chiffon hijab in a timeless sky blue shade—ideal for everyday elegance. Designed to stay securely in place, it offers breathability and a graceful drape for a clean, polished look with minimal effort." 
},
{ name: "Plain Mint Green", 
  image: "https://scarfs.pk/cdn/shop/files/Georgette_Hijab_Mint_Green.jpg?v=1739787955",
  rating: 4.6,
  price: "399",
  description:"A lightweight, non-slip chiffon hijab in a timeless mint green shade—ideal for everyday elegance. Designed to stay securely in place, it offers breathability and a graceful drape for a clean, polished look with minimal effort." 
},
{ name: "Plain Light Red", 
  image: "https://scarf.pk/wp-content/uploads/2021/05/Premium-Georgette-Hijab-Cherry.jpg",
  rating: 4.6,
  price: "399",
  description:"A lightweight, non-slip chiffon hijab in a timeless light red shade—ideal for everyday elegance. Designed to stay securely in place, it offers breathability and a graceful drape for a clean, polished look with minimal effort." 
},
{ name: "Plain Blue", 
  image: "https://scarfs.pk/cdn/shop/files/Georgette_Hijab_Blue.jpg?v=1739787933",
  rating: 4.6,
  price: "399",
  description:"A lightweight, non-slip chiffon hijab in a timeless blue shade—ideal for everyday elegance. Designed to stay securely in place, it offers breathability and a graceful drape for a clean, polished look with minimal effort."
},
{ name: "Plain Navy Blue", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KJti7BxxiOD3ybDGrQp9P7NJFHh6yLJ90XikG4pHyzH5ON0SeGO-7wUxFtFXI8KJ3so&usqp=CAU",
    rating: 4.6,
  price: "399",
  description:"A lightweight, non-slip chiffon hijab in a timeless navy blue shade—ideal for everyday elegance. Designed to stay securely in place, it offers breathability and a graceful drape for a clean, polished look with minimal effort." 
},
    ]
  },
  chiffon: {
    name: "Chiffon Styles",
    items: [
{
  name: "Chiffon Rose Pink",
  image: "https://hijabi.pk/cdn/shop/products/2298c.gif?v=1662993611",
  rating: 4.5,
  price: "499",
  description: "A soft, non-slip chiffon hijab in a delicate rose pink shade—perfect for adding a touch of elegance to everyday or occasion wear. Lightweight and breathable, it drapes beautifully and stays in place all day."
},
{ name: "Chiffon Dark Purple", 
  image: "https://hijabi.pk/cdn/shop/products/2326c.jpg?v=1664355279",
  rating: 4.5,
  price: "499",
  description: "A soft, non-slip chiffon hijab in a delicate dark purple shade—perfect for adding a touch of elegance to everyday or occasion wear. Lightweight and breathable, it drapes beautifully and stays in place all day." 
},
{ name: "Chiffon Sandy", 
  image: "https://hijabi.pk/cdn/shop/products/2320c.gif?v=1662994646",
  rating: 4.5,
  price: "499",
  description: "A soft, non-slip chiffon hijab in a delicate sandy shade—perfect for adding a touch of elegance to everyday or occasion wear. Lightweight and breathable, it drapes beautifully and stays in place all day."
},
{ name: "Chiffon Scarlet", 
  image: "https://hijabi.pk/cdn/shop/products/2303c.gif?v=1662993795",
  rating: 4.5,
  price: "499",
  description: "A soft, non-slip chiffon hijab in a delicate scarlet shade—perfect for adding a touch of elegance to everyday or occasion wear. Lightweight and breathable, it drapes beautifully and stays in place all day."
},
{ name: "Chiffon Dusky", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjCUg2dCFZXlpyUQphmWahbNcufYaO46sbCBWzNi4EckdK7mnyv4VI5plzvBZ4McgrgpA&usqp=CAU",
  rating: 4.5,
  price: "499",
  description: "A soft, non-slip chiffon hijab in a delicate dusky shade—perfect for adding a touch of elegance to everyday or occasion wear. Lightweight and breathable, it drapes beautifully and stays in place all day."
},
{ name: "Chiffon Orange", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0lM0sivZEyD9Pz2OmbJAeHlV23LMFJbea0RrFK073yXurCeA2vAnY_3frHjr1zu5wNoU&usqp=CAU",
  rating: 4.5,
  price: "499",
  description: "A soft, non-slip chiffon hijab in a delicate orange shade—perfect for adding a touch of elegance to everyday or occasion wear. Lightweight and breathable, it drapes beautifully and stays in place all day."
},
   

 {
  name: "Evening Blush",
  image: "https://arabiannites.co.uk/cdn/shop/files/p_e215a514-e3f8-46ff-99a7-0250c725a580.jpg?v=1724073923&width=3024",
  rating: 4.8,
  price: "529",
  description: "Lightweight and elegant chiffon hijab in a blush tone. Highly praised for its beautiful drape and color accuracy. Some users mention that chiffon can be slippery, so an undercap or pins are recommended for secure wear. Fabric is breathable and ideal for both casual and formal settings. Similar products average a 4.5/5 rating across online stores."
},
{ name: "Pink Blush", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7sO_gjWMYGV0Pf4JzvUDjDM0UvuPBv0S2M1aR2qgCmqs9erwTmD9rCQLGuOjT2AVRLaA&usqp=CAU",
  rating: 4.8,
  price: "529",
  description: "Lightweight and elegant chiffon hijab in a blush tone. Highly praised for its beautiful drape and color accuracy. Some users mention that chiffon can be slippery, so an undercap or pins are recommended for secure wear. Fabric is breathable and ideal for both casual and formal settings. Similar products average a 4.5/5 rating across online stores."
},
{ name: "Dark Steel Blush", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ElrFE5rDnHXm6jIfn2VgJwztIlg2jSPEWUa7IKHIxEdqwsxvcDzkZDaXiGhrjpDKiKY&usqp=CAU",
  rating: 4.8,
  price: "529",
  description: "Lightweight and elegant chiffon hijab in a blush tone. Highly praised for its beautiful drape and color accuracy. Some users mention that chiffon can be slippery, so an undercap or pins are recommended for secure wear. Fabric is breathable and ideal for both casual and formal settings. Similar products average a 4.5/5 rating across online stores." 
},
{ name: "Deep Red Blush", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZhBRjF9IWtM-7CA6coQ5HY5ya3ZbwClzVeQLBubP7hF6vPEaL4fiqvJCqxLrsGW6nM1E&usqp=CAU",
  rating: 4.8,
  price: "529",
  description: "Lightweight and elegant chiffon hijab in a blush tone. Highly praised for its beautiful drape and color accuracy. Some users mention that chiffon can be slippery, so an undercap or pins are recommended for secure wear. Fabric is breathable and ideal for both casual and formal settings. Similar products average a 4.5/5 rating across online stores." 
},
{ name: "Model Blush", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafdP4VPbABvdUucM6itddGduH80yg60-avAAE8GnRkw5CywwuaYTRKYwJTsRNfaPNY6Y&usqp=CAU",
  rating: 4.8,
  price: "529",
  description: "Lightweight and elegant chiffon hijab in a blush tone. Highly praised for its beautiful drape and color accuracy. Some users mention that chiffon can be slippery, so an undercap or pins are recommended for secure wear. Fabric is breathable and ideal for both casual and formal settings. Similar products average a 4.5/5 rating across online stores."
},
{ name: "Grey Blush", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfuwuVIrfkCyzuwpApC9N7HXJhrZ3SCPybuLKb9ueJgdIHTLuPMod_Fb8_kd9yESllohI&usqp=CAU",
  rating: 4.8,
  price: "529",
  description: "Lightweight and elegant chiffon hijab in a blush tone. Highly praised for its beautiful drape and color accuracy. Some users mention that chiffon can be slippery, so an undercap or pins are recommended for secure wear. Fabric is breathable and ideal for both casual and formal settings. Similar products average a 4.5/5 rating across online stores."
},
   

{ name: "Light Sky Blue", 
  image: "https://m.media-amazon.com/images/I/61KirS-DWrL._UY350_.jpg", 
  rating: 4.7,
  price:"399",
  description: "Soft chiffon hijab in a light sky blue shade. Known for its refreshing, cool-toned color that suits all skin tones. Fabric is lightweight and breathable, making it ideal for summer wear. Similar hijabs receive praise for being easy to style and comfortable, though some users recommend wearing an undercap for better grip. Average rating is around 4.6/5 across fashion retailers."
},
{ name: "Classic Solid", 
  image: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/1eb3300e504275f77d418635421f9913.jpg?imageView2/2/w/500/q/60/format/webp",
  rating: 4.7,
  price:"399",
  description: "Soft chiffon hijab in a classic solid shade. Known for its refreshing, cool-toned color that suits all skin tones. Fabric is lightweight and breathable, making it ideal for summer wear. Similar hijabs receive praise for being easy to style and comfortable, though some users recommend wearing an undercap for better grip. Average rating is around 4.6/5 across fashion retailers." 
},
{ name: "Gray", 
  image: "https://m.media-amazon.com/images/I/616AIoby4QL._UY350_.jpg",
  rating: 4.7,
  price:"399",
  description: "Soft chiffon hijab in a gray shade. Known for its refreshing, cool-toned color that suits all skin tones. Fabric is lightweight and breathable, making it ideal for summer wear. Similar hijabs receive praise for being easy to style and comfortable, though some users recommend wearing an undercap for better grip. Average rating is around 4.6/5 across fashion retailers."
 },
{ name: "Light Purple",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg8_jsFGawc_XEQj16vKoDYO6xfwN39Ukif8aCqtkX-5OmixnXkkv__CRy5qTXYBzfaaI&usqp=CAU",
  rating: 4.7,
  price:"399",
  description: "Soft chiffon hijab in a light purple shade. Known for its refreshing, cool-toned color that suits all skin tones. Fabric is lightweight and breathable, making it ideal for summer wear. Similar hijabs receive praise for being easy to style and comfortable, though some users recommend wearing an undercap for better grip. Average rating is around 4.6/5 across fashion retailers."
},
{ name: "Light Brown", 
  image: "https://m.media-amazon.com/images/I/61+n4Glo9DL._UY350_.jpg",
  rating: 4.7,
  price:"399",
  description: "Soft chiffon hijab in a light brown shade. Known for its refreshing, cool-toned color that suits all skin tones. Fabric is lightweight and breathable, making it ideal for summer wear. Similar hijabs receive praise for being easy to style and comfortable, though some users recommend wearing an undercap for better grip. Average rating is around 4.6/5 across fashion retailers."
 },
{ name: "White", 
  image: "https://img.kwcdn.com/product/fancy/29c27ea9-fbae-465c-89d0-86638bd7e045.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
  rating: 4.7,
  price:"399",
  description: "Soft chiffon hijab in a white shade. Known for its refreshing, cool-toned color that suits all skin tones. Fabric is lightweight and breathable, making it ideal for summer wear. Similar hijabs receive praise for being easy to style and comfortable, though some users recommend wearing an undercap for better grip. Average rating is around 4.6/5 across fashion retailers."
},
    ]
  },
  luxury: {
    name: "Luxury Editions",
    items: [
{ name: "Satin Sand", 
  image: "https://hijabinist.com/cdn/shop/files/DSC01379_1080x.jpg?v=1751149101",
  rating: 4.15,
  price:"999",
  description: "Soft, neutral‑tone chiffon hijab in a sandy beige shade. Similar ‘Sand’‑toned chiffon hijabs average around 4.1–4.2 stars based on regional brand feedback. Users praise the breathable and elegant drape, though some warn that chiffon can slip; best paired with an underscarf or magnets for stability."
},
{ name: "Satin Creame", 
  image: "https://samzhijabi.com/cdn/shop/files/7D6F8304-D661-4C96-B3BC-61C0E7C7E356.jpg?v=1705941120&width=1946",
  rating: 4.15,
  price:"999",
  description: "Soft, neutral‑tone chiffon hijab in a creamy beige shade. Similar ‘Creamy’‑toned chiffon hijabs average around 4.1–4.2 stars based on regional brand feedback. Users praise the breathable and elegant drape, though some warn that chiffon can slip; best paired with an underscarf or magnets for stability."
},
{ name: "Satin Silver", 
  image: "https://scarf.pk/wp-content/uploads/2021/02/Satin-Hijab-Silver.jpg",
  rating: 4.15,
  price:"999",
  description: "Soft, neutral‑tone chiffon hijab in a silver beige shade. Similar ‘Silver’‑toned chiffon hijabs average around 4.1–4.2 stars based on regional brand feedback. Users praise the breathable and elegant drape, though some warn that chiffon can slip; best paired with an underscarf or magnets for stability."
},
{ name: "Satin Mint", 
  image: "https://samzhijabi.com/cdn/shop/files/IMG_20240122_165633.jpg?v=1734775893",
  rating: 4.15,
  price:"999",
  description: "Soft, neutral‑tone chiffon hijab in a mint beige shade. Similar ‘Mint’‑toned chiffon hijabs average around 4.1–4.2 stars based on regional brand feedback. Users praise the breathable and elegant drape, though some warn that chiffon can slip; best paired with an underscarf or magnets for stability."
},
{ name: "Satin Forest Green", 
  image: "https://hijabinist.com/cdn/shop/files/DSC01375_1080x.jpg?v=1751149095",
  rating: 4.15,
  price:"999",
  description: "Soft, neutral‑tone chiffon hijab in a forest green beige shade. Similar ‘Forest Green’‑toned chiffon hijabs average around 4.1–4.2 stars based on regional brand feedback. Users praise the breathable and elegant drape, though some warn that chiffon can slip; best paired with an underscarf or magnets for stability."
},
{ name: "Satin Midnight Blue", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3w-YNyIMY_p-icVuTotK3SsCYQ-hYl8-IFttjGIZad6HZFJ-akroUoodwZq4GQQvfgXE&usqp=CAU",
  rating: 4.15,
  price:"999",
  description: "Soft, neutral‑tone chiffon hijab in a midnight blue beige shade. Similar ‘Midnight Blue’‑toned chiffon hijabs average around 4.1–4.2 stars based on regional brand feedback. Users praise the breathable and elegant drape, though some warn that chiffon can slip; best paired with an underscarf or magnets for stability."
},

      
{ name: "Silk Midnight", 
  image: "https://i0.wp.com/clothifydotpk.com/wp-content/uploads/2025/07/Crinkle-Silk_0953.webp?fit=620%2C620&ssl=1",
  rating: 4.25,
  price:"2500",
  description: "Elegant crinkle‑silk hijab in a rich midnight tone, offering a subtle sheen and delicate texture. Similar ‘Midnight Blue’ crinkle silk hijabs have received positive reviews — e.g., one store reports **100% positive feedback** from its lone reviewer :contentReference[oaicite:0]{index=0}. On average, crinkle silk scarves in Pakistan show ratings between **80–85% positive**, which translates roughly to a **4.2–4.3/5** rating across listings :contentReference[oaicite:1]{index=1}. Users frequently praise the lightweight, breathable, iron‑free nature and elegant drape; the crinkled texture also helps with better grip than smooth fabrics :contentReference[oaicite:2]{index=2}."
},
{ name: "Silk Midnight", 
  image: "https://i0.wp.com/clothifydotpk.com/wp-content/uploads/2025/07/Crinkle-Silk_0963.webp?fit=620%2C620&ssl=1",
  rating: 4.25,
  price:"2500",
  description: "Elegant crinkle‑silk hijab in a rich midnight tone, offering a subtle sheen and delicate texture. Similar ‘Midnight Blue’ crinkle silk hijabs have received positive reviews — e.g., one store reports **100% positive feedback** from its lone reviewer :contentReference[oaicite:0]{index=0}. On average, crinkle silk scarves in Pakistan show ratings between **80–85% positive**, which translates roughly to a **4.2–4.3/5** rating across listings :contentReference[oaicite:1]{index=1}. Users frequently praise the lightweight, breathable, iron‑free nature and elegant drape; the crinkled texture also helps with better grip than smooth fabrics :contentReference[oaicite:2]{index=2}."
},
{ name: "Silk Midnight", 
  image: "https://sc04.alicdn.com/kf/Hf262d5fd56b1420ebb1dba2438b2738cW.jpg_250x250.jpg",
  rating: 4.25,
  price:"2500",
  description: "Elegant crinkle‑silk hijab in a rich midnight tone, offering a subtle sheen and delicate texture. Similar ‘Midnight Blue’ crinkle silk hijabs have received positive reviews — e.g., one store reports **100% positive feedback** from its lone reviewer :contentReference[oaicite:0]{index=0}. On average, crinkle silk scarves in Pakistan show ratings between **80–85% positive**, which translates roughly to a **4.2–4.3/5** rating across listings :contentReference[oaicite:1]{index=1}. Users frequently praise the lightweight, breathable, iron‑free nature and elegant drape; the crinkled texture also helps with better grip than smooth fabrics :contentReference[oaicite:2]{index=2}."
},
{ name: "Silk Midnight", 
  image: "https://sc04.alicdn.com/kf/H07de0b83156e49f6b75df4495813a654F.jpg_250x250.jpg",
  rating: 4.25,
  price:"2500",
  description: "Elegant crinkle‑silk hijab in a rich midnight tone, offering a subtle sheen and delicate texture. Similar ‘Midnight Blue’ crinkle silk hijabs have received positive reviews — e.g., one store reports **100% positive feedback** from its lone reviewer :contentReference[oaicite:0]{index=0}. On average, crinkle silk scarves in Pakistan show ratings between **80–85% positive**, which translates roughly to a **4.2–4.3/5** rating across listings :contentReference[oaicite:1]{index=1}. Users frequently praise the lightweight, breathable, iron‑free nature and elegant drape; the crinkled texture also helps with better grip than smooth fabrics :contentReference[oaicite:2]{index=2}."
},
{ name: "Silk Midnight", 
  image: "https://sc04.alicdn.com/kf/H9ca7d24fb60248e2956d2e3a9cf31b3cR.jpg",
  rating: 4.25,
  price:"2500",
  description: "Elegant crinkle‑silk hijab in a rich midnight tone, offering a subtle sheen and delicate texture. Similar ‘Midnight Blue’ crinkle silk hijabs have received positive reviews — e.g., one store reports **100% positive feedback** from its lone reviewer :contentReference[oaicite:0]{index=0}. On average, crinkle silk scarves in Pakistan show ratings between **80–85% positive**, which translates roughly to a **4.2–4.3/5** rating across listings :contentReference[oaicite:1]{index=1}. Users frequently praise the lightweight, breathable, iron‑free nature and elegant drape; the crinkled texture also helps with better grip than smooth fabrics :contentReference[oaicite:2]{index=2}."
},
{ name: "Silk Midnight", 
  image: "https://sc04.alicdn.com/kf/H66fb2288154f48279526033099d46fa60.jpg",
  rating: 4.25,
  price:"2500",
  description: "Elegant crinkle‑silk hijab in a rich midnight tone, offering a subtle sheen and delicate texture. Similar ‘Midnight Blue’ crinkle silk hijabs have received positive reviews — e.g., one store reports **100% positive feedback** from its lone reviewer :contentReference[oaicite:0]{index=0}. On average, crinkle silk scarves in Pakistan show ratings between **80–85% positive**, which translates roughly to a **4.2–4.3/5** rating across listings :contentReference[oaicite:1]{index=1}. Users frequently praise the lightweight, breathable, iron‑free nature and elegant drape; the crinkled texture also helps with better grip than smooth fabrics :contentReference[oaicite:2]{index=2}."
},

      
{ name: "Velvet Burgundy", 
  image: "https://sahijabs.pk/cdn/shop/files/image_1024x1024_2x_c8a99fd5-7b1c-44aa-81d4-e619032e44e9.jpg?v=1712046107",
  rating: 5.0,
  price:"2,999",
  description:"Elegant velvet-style hijab in a deep burgundy shade, offering a luxurious, soft texture. Similar burgundy pieces in georgette or velvet blends often receive rave feedback—e.g., one Premium Georgette Burgundy listing shows 100% positive reviews from 3 customers, praising its comfort and texture. Deep burgundy tones are well-loved, described as flattering and rich. Velvet textures often provide a nice grip, reducing slippage compared to silky fabrics."
},
{ name: "Velvet Burgundy", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31W3Affmwb1xPZJi9GwWW5hei9Zy65ms1xB6lbmRDaVbfi_6y26jn8da1Dm4DoTMXR9k&usqp=CAU",
  rating: 5.0,
  price:"2,999",
  description:"Elegant velvet-style hijab in a deep burgundy shade, offering a luxurious, soft texture. Similar burgundy pieces in georgette or velvet blends often receive rave feedback—e.g., one Premium Georgette Burgundy listing shows 100% positive reviews from 3 customers, praising its comfort and texture. Deep burgundy tones are well-loved, described as flattering and rich. Velvet textures often provide a nice grip, reducing slippage compared to silky fabrics."
},
{ name: "Velvet Burgundy", 
  image: "https://alburda.co/cdn/shop/files/Georgette16-emerald_300x300.jpg?v=1703094258",
  rating: 5.0,
  price:"2,999",
  description:"Elegant velvet-style hijab in a deep burgundy shade, offering a luxurious, soft texture. Similar burgundy pieces in georgette or velvet blends often receive rave feedback—e.g., one Premium Georgette Burgundy listing shows 100% positive reviews from 3 customers, praising its comfort and texture. Deep burgundy tones are well-loved, described as flattering and rich. Velvet textures often provide a nice grip, reducing slippage compared to silky fabrics."
},
{ name: "Velvet Burgundy", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLf5a1RlI3A_pgiy2sIPnX2-tSdxuTLIcXqFQhcHcnK5bLGYFknwThY6MLVLCmhezSvNA&usqp=CAU",
  rating: 5.0,
  price:"2,999",
  description:"Elegant velvet-style hijab in a deep burgundy shade, offering a luxurious, soft texture. Similar burgundy pieces in georgette or velvet blends often receive rave feedback—e.g., one Premium Georgette Burgundy listing shows 100% positive reviews from 3 customers, praising its comfort and texture. Deep burgundy tones are well-loved, described as flattering and rich. Velvet textures often provide a nice grip, reducing slippage compared to silky fabrics."
},
{ name: "Velvet Burgundy", 
  image: "https://alburda.co/cdn/shop/products/Georgette2-Ocean_1024x1024_2x_378f2c36-3d3b-490b-9b10-f299197aba0e_300x300.jpg?v=1641923968",
  rating: 5.0,
  price:"2,999",
  description:"Elegant velvet-style hijab in a deep burgundy shade, offering a luxurious, soft texture. Similar burgundy pieces in georgette or velvet blends often receive rave feedback—e.g., one Premium Georgette Burgundy listing shows 100% positive reviews from 3 customers, praising its comfort and texture. Deep burgundy tones are well-loved, described as flattering and rich. Velvet textures often provide a nice grip, reducing slippage compared to silky fabrics."
},
{ name: "Velvet Burgundy", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiL8706vJTxtwyH0jwSSLOWEI0GKMgiJPMH1wGFByPLqzectOx2Yt8fw4KoC8aEJt2Hc&usqp=CAU",
  rating: 5.0,
  price:"2,999",
  description:"Elegant velvet-style hijab in a deep burgundy shade, offering a luxurious, soft texture. Similar burgundy pieces in georgette or velvet blends often receive rave feedback—e.g., one Premium Georgette Burgundy listing shows 100% positive reviews from 3 customers, praising its comfort and texture. Deep burgundy tones are well-loved, described as flattering and rich. Velvet textures often provide a nice grip, reducing slippage compared to silky fabrics."
},
    ]
  }
};

// ✅ Render products
if (productData[type]) {
  title.textContent = productData[type].name;

  productData[type].items.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
    `;

    // Modal open event
    card.addEventListener('click', () => {
      showProductModal(product);
    });

    productGrid.appendChild(card);
  });
} else {
  title.textContent = "Collection Not Found";
}

// ✅ Modal functionality
function showProductModal(product) {
  const modal = document.getElementById('product-modal');
  const modalContent = document.getElementById('modal-content');

  modalContent.innerHTML = `
    <span id="close-modal" style="cursor:pointer; float:right; font-size:24px;">&times;</span>
    <img src="${product.image}" alt="${product.name}" style="width:100%; max-height:300px; object-fit:cover;">
    <h2>${product.name}</h2>
    <p style="color:black;">⭐ ${product.rating} Rating</p>
    <p style="color:black; font-weight:bold;">Price: Rs ${product.price}</p>
    <p style="color:black;">${product.description}</p>
  `;

  modal.style.display = 'block';

  document.getElementById('close-modal').onclick = function () {
    modal.style.display = 'none';
  };
}
