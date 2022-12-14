import phone_1 from '../images/phone_1-min.jpg'
import phone_2 from '../images/phone_2-min.jpg'
import phone_3 from '../images/phone_3-min.jpg'
import phone_4 from '../images/phone_4-min.jpg'
import phone_5 from '../images/phone_5-min.jpg'
import phone_6 from '../images/phone_6-min.jpg'
import phone_7 from '../images/phone_7-min.jpg'
import phone_8 from '../images/phone_8-min.jpg'

export const storePhones = [
  {
    id: 1,
    title: 'Google Pixel 3',
    img: phone_1,
    price: 799,
    company: 'Google Inc.',
    info:
      'Staying too far from your loved ones? Video call them for hours on end. The weather is romantic? Listen to your favourite playlists all day long. Don’t want to go out this weekend? Then binge watch your favourite series on the Internet. The Pixel 3 ensures that there’s never a dull moment, all thanks to its powerful battery, impressive cameras and its expansive bezel-less display.',
    specs: {
      body: '145.6 x 68.2 x 7.9 mm (5.73 x 2.69 x 0.31 in)',
      display: '5.5 inches, 1080 x 2160 pixels, 18:9 ratio (~443 ppi density)',
      platform: 'OS Android 9.0 (Pie)',
      chipset: 'Qualcomm SDM845 Snapdragon 845 (10 nm)',
      memory: '64/128 GB, 4 GB RAM',
      camera: {
        main: '12.2 MP (wide) dual pixel',
        selfie: '8 MP (ultrawide), no AF',
        features: 'Dual-LED flash, Auto-HDR, panorama',
      },
      battery: 'Non-removable Li-Po 2915 mAh battery',
      features:
        'NFC, USB 3.1 Type-C 1.0, fingerprint (rear-mounted), fast battery charging, Gorilla Glass 5, aluminum frame, IP68 dust/water resistant, Always-on display, HDR',
    },
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 2,
    title: 'Samsung Note 9',
    img: phone_2,
    price: 999,
    company: 'Samsung Electronics',
    info:
      'Galaxy Note 9 puts powerful technology in the hands of pioneers who demand more. Innovative features and design make it the only phone to keep up with the next generation of achievers.',
    specs: {
      body: '161.9 x 76.4 x 8.8 mm (6.37 x 3.01 x 0.35 in)',
      display:
        '6.4 inches, 1440 x 2960 pixels, 18.5:9 ratio (~516 ppi density)',
      platform: 'Android 8.1 (Oreo), upgradable to Android 9.0 (Pie); One UI',
      chipset: 'Exynos 9810 Octa (10 nm)',
      memory: '512 GB/8 GB RAM or 128 GB/6 GB RAM',
      camera: {
        main:
          '12 MP, f/1.5-2.4, 26mm (wide), 1/2.55", 1.4µm, dual pixel PDAF, OIS + 12 MP, f/2.4, 52mm (telephoto), 1/3.4", 1.0µm, AF, OIS, 2x optical zoom',
        selfie: '8 MP, f/1.7, 25mm (wide), 1/3.6", 1.22µm, AF',
        features: 'LED flash, auto-HDR, panorama',
      },
      battery: 'Non-removable Li-Ion 4000 mAh battery',
      features:
        'NFC, front/back glass (Gorilla Glass 5), aluminum frame, S Pen, Samsung Pay, IP68 dust/water proof, Always-on display, USB 3.1 Type-C 1.0, Iris scanner, fingerprint (rear-mounted), Samsung DeX (desktop experience support), Fast battery charging (Quick Charge 2.0), Bixby natural language commands and dictation',
    },
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 3,
    title: 'Apple iPhone XS',
    img: phone_3,
    price: 999,
    company: 'Apple Inc.',
    info:
      'Welcome to the big screens! Super Retina in two sizes — including the largest display ever on an iPhone. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough dual‑camera system. iPhone XS is everything you love about iPhone. Taken to the extreme.',
    specs: {
      body: '143.6 x 70.9 x 7.7 mm (5.65 x 2.79 x 0.30 in)',
      display:
        'Super AMOLED, 5.8 inches, 1125 x 2436 pixels, 19.5:9 ratio (~458 ppi density)',
      platform: 'iOS 12, upgradable to iOS 12.1.3',
      chipset: 'Apple A12 Bionic (7 nm)',
      memory: '64/256/512 GB, 4 GB RAM',
      camera: {
        main: '12 MP (wide) + 12 MP (telephoto), 2x optical zoom',
        selfie: '7 MP (standard)',
        features: 'Quad-LED dual-tone flash, HDR (photo/panorama)',
      },
      battery: 'Non-removable Li-Ion 2658 mAh battery',
      features:
        'NFC, Face ID, fast battery charging, stainless steel frame, IP68 dust/water resistant, Apple Pay, Dolby Vision, HDR10, Wide color gamut, 3D Touch, Siri',
    },
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 4,
    title: 'Samsung Galaxy S9+',
    img: phone_4,
    price: 840,
    company: 'Samsung Electronics',
    info:
      'The perfect formula of a gorgeous 5.8-inch screen, sexy dual-curved design and terrific camera. Whiplash-fast speeds, wireless charging and water resistance complete the package.',
    specs: {
      body: '158.1 x 73.8 x 8.5 mm (6.22 x 2.91 x 0.33 in)',
      display:
        'Super AMOLED, 6.2 inches, 1440 x 2960 pixels, 18.5:9 ratio (~529 ppi density)',
      platform: 'Android 8.0 (Oreo)',
      chipset:
        'Exynos 9810 Octa (10 nm)/Qualcomm SDM845 Snapdragon 845 (10 nm)',
      memory: '64/128/256 GB, 6 GB RAM',
      camera: {
        main: '12 MP (wide) Dual Pixel + 12 MP (telephoto), 2x optical zoom',
        selfie: '8 MP, AF',
        features: 'LED flash, auto-HDR, panorama',
      },
      battery: 'Non-removable Li-Ion 3500 mAh battery',
      features:
        'Iris scanner, fingerprint (rear-mounted), heart rate, NFC, front/back glass (Gorilla Glass 5), aluminum frame, Samsung Pay, IP68 dust/water proof, HDR10, 3D Touch (home button only), Always-on display, Samsung DeX, Quick Charge 2.0, Qi/PMA wireless charging, Bixby, ANT+',
    },
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 5,
    title: 'Pocophone F1',
    img: phone_5,
    price: 300,
    company: 'Xiaomi Inc.',
    info:
      "Pocophone F1 runs on the Qualcomm® Snapdragon™ 845 mobile platform, meaning you get Snapdragon's powerful AI engine on their most advanced flagship 10nm class chip. Enjoy unbeatable performance and lower power consumption.",
    specs: {
      body: '155.5 x 75.3 x 8.8 mm (6.12 x 2.96 x 0.35 in)',
      display:
        'IPS LCD, 6.18 inches, 1080 x 2246 pixels, 18.7:9 ratio (~403 ppi density)',
      platform:
        'Android 8.1 (Oreo), upgradable to Android 9.0 (Pie); MIUI 10.2 POCO',
      chipset: 'Qualcomm SDM845 Snapdragon 845 (10 nm)',
      memory: '256 GB, 8 GB RAM or 64/128 GB, 6 GB RAM',
      camera: {
        main: '12 MP dual pixel + 5 MP, depth sensor',
        selfie: '20 MP',
        features: 'Dual-LED flash, HDR, panorama',
      },
      battery: 'Non-removable Li-Po 4000 mAh battery',
      features:
        'USB 2.0 Type-C 1.0, infrared face recognition, fingerprint (rear-mounted), fast battery charging (Quick Charge 3.0), Gorilla Glass',
    },
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 6,
    title: 'Xiaomi Mi 8',
    img: phone_6,
    price: 400,
    company: 'Xiaomi Inc.',
    info:
      'Astonishing value, insane performance, awesome photography, a larger than ever 18.7:9 AMOLED display and a cool new 3D Face recognition feature are all reasons why it is an amazing phone.',
    specs: {
      body: '154.9 x 74.8 x 7.6 mm (6.10 x 2.94 x 0.30 in)',
      display:
        'Super AMOLED, 6.21 inches, 1080 x 2248 pixels (~402 ppi density)',
      platform:
        'Android 8.1 (Oreo), upgradable to Android 9.0 (Pie); MIUI 10.1',
      chipset: 'Qualcomm SDM845 Snapdragon 845 (10 nm)',
      memory: '64/128/256 GB, 6 GB RAM or 128 GB, 8 GB RAM',
      camera: {
        main: '12 MP dual pixel + 12 MP (telephoto), AF, 2x optical zoom',
        selfie: '20 MP',
        features: 'Dual-LED flash, HDR, panorama',
      },
      battery: 'Non-removable Li-Po 3400 mAh battery',
      features:
        'NFC, USB Type-C 1.0, infrared face recognition, fingerprint (rear-mounted), fast battery charging (Quick Charge 4.0+), Gorilla Glass 5, aluminum frame',
    },
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 7,
    title: 'Huawei Mate 10 Pro',
    img: phone_7,
    price: 800,
    company: 'Huawei Technologies Co.',
    info:
      'Supported by the revolutionary GPU Turbo technology, the image processing speed is greatly accelerated to bring you a smooth and immersive visual experience.',
    specs: {
      body: '154.2 x 74.5 x 7.9 mm (6.07 x 2.93 x 0.31 in)',
      display:
        'AMOLED, 6.0 inches, 1080 x 2160 pixels, 18:9 ratio (~402 ppi density)',
      platform: 'Android 8.0 (Oreo), upgradable to Android 9.0 (Pie); EMUI 8',
      chipset: 'HiSilicon Kirin 970 (10 nm)',
      memory: '128 GB, 6 GB RAM or 64 GB, 4 GB RAM',
      camera: {
        main:
          '12 MP (wide), laser AF + 20 MP (wide), 2x lossless zoom, PDAF & laser AF',
        selfie: '8 MP (wide), AF',
        features: 'Leica optics, dual-LED dual-tone flash, panorama, HDR',
      },
      battery: 'Non-removable Li-Po 4000 mAh battery',
      features:
        'NFC, USB 3.1 Type-C 1.0, fingerprint (rear-mounted), fast battery charging, Gorilla Glass, front/back glass, aluminum frame, IP67 dust/water resistant',
    },
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 8,
    title: 'Honor 10 Lite',
    img: phone_8,
    price: 330,
    company: 'Huawei Technologies Co.',
    info:
      'The Honor 10 Lite is a fashion icon you can hold in the palm of your hand. Inspired by the beautiful color of the sky, HONOR chose a youthful, energetic and natural design that fades gradually from light to dark – Sky Blue.',
    specs: {
      body: '154.8 x 73.6 x 8 mm (6.09 x 2.90 x 0.31 in)',
      display:
        'IPS LCD, 6.21 inches, 1080 x 2340 pixels, 19.5:9 ratio (~415 ppi density)',
      platform: 'Android 9.0 (Pie); EMUI 9',
      chipset: 'Hisilicon Kirin 710 (12 nm)',
      memory: '64/128 GB, 6 GB RAM or 64 GB, 4 GB RAM',
      camera: {
        main: '13 MP (wide) + 2 MP, depth sensor',
        selfie: '24 MP (wide)',
        features: 'LED flash, HDR, panorama',
      },
      battery: 'Non-removable Li-Po 3400 mAh battery',
      features:
        'NFC, microUSB 2.0, USB On-The-Go, fingerprint (rear-mounted), HDR',
    },
    inCart: false,
    count: 0,
    total: 0,
  },
]
