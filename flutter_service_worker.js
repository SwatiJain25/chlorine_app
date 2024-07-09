'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "53665d0affb9179ca2c67cafa06bd18f",
"version.json": "3d4b50643d08763b12045984ba02f820",
"index.html": "de4b5902bcd5d1b2bc41ce40dca6177f",
"/": "de4b5902bcd5d1b2bc41ce40dca6177f",
"main.dart.js": "2a546cbe0259fa990b9f87d90158d501",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a24087895a8fd396fe9ef1c6364b6e01",
".git/config": "ba0abde9aa66d8580679ef5db581b0e3",
".git/objects/61/8caaff2856f742389cc5a9393481cb52276021": "27079761dbddc2365c01a59b38c71b54",
".git/objects/66/2e3d6294ecba33fb34929c4539bd64aa0b02e1": "2aabb3a7944d96becc027e1a787e997c",
".git/objects/3e/5376897d767ef9891b12f2657b508f945859e5": "696e87bac07b9ad0220e9a63b79bc90d",
".git/objects/57/02e5c57c80be4f3a70d52fd5838a1f174a4755": "bde1c10c30f31bdd2165d3d3f19a23d3",
".git/objects/6a/636413fe3149103e010b521d0a14141e738f4c": "58feb5cf15a3b6c1de4699144ee0b3eb",
".git/objects/69/798106a6e011c27725d118d744f2a0c0cf5a71": "941cacb9a960949f8ba1ec4a4afd8cc3",
".git/objects/69/f480a1572515b2608891616b672c7e31dbf998": "d74716076198fec8ee86b91e02061943",
".git/objects/58/26001125a71e46af9331f1fd58c5d55137565c": "61f96c3efdda89336e3502c40009c784",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/6e6f95081aae229a8d57a3c0dc170797d5a785": "54a7e195fd8b0114a9e7d969b6f11d13",
".git/objects/67/ab0043eb7560816634bc8dc5788e2a078408ae": "cd58cc0cfef9924255cdcb38f99f3077",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/60/fb406f73c5529d94f91a29fb81321146a943b1": "fc9f378a6b1257b24d3b4061083fca0e",
".git/objects/34/0226b52e981255cdbcd8465ffa65cb9ab93c38": "1a4cede56b6e9cdc294ef3e19eb5366f",
".git/objects/33/8a8a1573f8858add788831cb7ba55941f01ede": "d3deb99195a6badd583d2a9433536507",
".git/objects/9d/11a88c4a0154e02468477e1b9e741b341315a0": "b5545ea02f7ee803d6aee4b911fa42fb",
".git/objects/ac/0c4be2eeff19c3568c5c83fdc70265c6581559": "cd1ccdffe0e1231019c812ddb90643f6",
".git/objects/d7/e5b6c3260db3005b708f6fc7b2ca3e5bdb7eb3": "6c6b7a36566917cc0ec0636696f79d1a",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b3/0ab09541603094c4ce6745955b5a7ca48c6e8d": "2123a82c33a5cb2438a5726914f8beaf",
".git/objects/df/2a7275490736ddae475c547b605c924b960fe1": "bcfc8c448638167a8cda271b78afe415",
".git/objects/da/45f554451cf1b85e6e7e49a9ea7a8a9414223b": "9fcafece25754d63efa77ae1d4ae6194",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/ca0ab595b0f7f85021ce27b4db915cb61b96a1": "a8613045e31c3a0ea3a573dd1f7bbda1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/646652d5811d7ade0b7690e9b09bc4db530aa4": "34324d1986681e5b61c6bf871a5e38c6",
".git/objects/e2/367f6f18dc4ecf6d372961e77d30b871bff765": "db9ced6d01838be918abbe544ef66d10",
".git/objects/f4/d57e79218ede2ea14b5d304cb7aefbbb147467": "0652091efb14c19fae21f3d239e191ae",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/0b2a7e21c509b7964765b1aaa9ce13baa1187d": "ca5ad639707da2864e91a133b66c070f",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/fe/db34a6d93240d275dcc3d238e8e10a6770de84": "ef721016e57c9b8f5857c9f8a4765410",
".git/objects/ec/11a546b1af88e0f4c773ab669b47de7e228fb7": "5f00837da46b9dad3aee5fc5148ee240",
".git/objects/ec/55495adb44c76cf9fa52e0cc7c731d6255efd1": "b19a1ccd8a8db4457eb6dc2fe93ecefe",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cf5125e298a58f7c649eb10d47afdbf7f383f1": "6ffbd0b4284e1be2938e83bc9f3037db",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/7c/32fcace5f3b48563f55066d32549cb698cdd6e": "67a463eef43105af18c05183aba45f23",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/7b3ab9eac3144f588b04deb2c2fe661da7ea02": "8f4e7af527b35077be10da2b7a306457",
".git/objects/16/cc3b4411c2f2c904de5398508b1ca9da6138d7": "953c628448db6d121be89a8acdba449d",
".git/objects/16/2fc5ec887b682bac3c504a9b03597b89022a6f": "d651c9a42924441a106788c837430cfc",
".git/objects/16/7c234b15ecc410d8f4284b246068243d6a076c": "1fb115b367df63237a022df89c20032e",
".git/objects/89/9971a2d68bc02f8d7a090a58d5bd35944e61c9": "07aec7c208c469cfad2cb325cdcca687",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/80/dbed90a1465893b008d3faeb69ed014349c5cd": "5cde20a2a2b1a1a2f99fb41f50045f5c",
".git/objects/28/17707a55b42b12cd0e57d4f0e4902449fd2813": "3c302dbed5eec52ea7ddb35f908b8e75",
".git/objects/17/592c32e0d4ce59c0da77f7509c907f646c7e2f": "50dabcdf511edc76956324fb15fdf2ef",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/0b04ca2b2286003a3fbd8979535e24ba84c3ef": "966040def0e3ecdf01fb13bcb3f991fb",
".git/objects/10/4ebf312f0c3835704af11b351f6d564acf4277": "caa06a9b8bb3376a3fc70a2d00de674a",
".git/objects/72/d588b26c57b525788e6b4e9c48bc95d0f75ced": "dac658a9e209015491ff050e6573edab",
".git/objects/2f/44274a4d26020b64b68cb70465fe62787e2c9d": "dac3fc14137fc3b136a9656c4d0f0664",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/52de7372cfb4867003599fc9835fc3f9fafeb3": "21c5ebb2d96fa3ea6767325f9a27b06d",
".git/objects/9a/cb3aab75cbf3f982a1eba0441db4f2ed369c92": "8698071ae0f5983549b487535b4b2cbe",
".git/objects/9a/fc49175e7309cf2e76fe6a66e356ec90500903": "e38a014f448d4da4ed8346e2767b2ba7",
".git/objects/5c/815bfaf2cc783a5ab89ed407e6d4605d8f06b1": "40cebca2a4de8c1f4359bb8ed9553c11",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/96/ac855383ccac4c94ee35e4c99fad35cd5a68d3": "2a3ad475a42c5f64b7ae66c8cd96934b",
".git/objects/3a/1f0b71c2cdc933ba3cf2e135c9663eb5fbce29": "2c57f2c5be15c93d3767d7ff6907b587",
".git/objects/30/ef6010fea183967b8bcf5c732108c184a69b5e": "f8c71e271c95a3dfd2ef261a0aa53ade",
".git/objects/5e/5ee7510b5285f24cd7c313c43e5cfef4bce4b8": "e22b5f4cf8cd69c7d3de4f54af93a2b7",
".git/objects/5b/b611b2a76da6c2b239ebd3f7946a8efaff4913": "89e81f65af09f3c0cad6ef3fe8d50f9e",
".git/objects/63/96df3b63178863476e7c69ed03e01da97e356b": "99a1d2041cfcc9ad1d2f817075360e6a",
".git/objects/0f/0977fa238cef601529a3f777191f2d07cf5ea4": "57f58076b6199594a356f229510b794b",
".git/objects/64/9bbf463fe72b4ebbbf6d34940d25ca91232884": "3480ea6da51f7452da106e6c796c3d85",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/f275fb2288192a664ef830d557a9fb03b111bd": "d689e55e91d11ba150532ed0ef863d24",
".git/objects/ba/0bfd09017cffa00d6daad112dee9227f018752": "1111b0884d9bfcf8aac82072bfd6cfca",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/82234ce87a23cc7ee80cf18fb02ba16e75e3d4": "1153452aeb60125123edcb06f454dcf5",
".git/objects/a0/26266a545c33c26e160f90c1432dec0094534f": "071683c69a87df41bab2d69547c3f42e",
".git/objects/b1/8fa197c53300545795de18ce69dc389eac80fc": "2fe81ae5e7e138920fb0c7aeda86285f",
".git/objects/dc/0ba2034d112ec129fc8b9f337176d1efc1e3c5": "5dd2817c661e03423673d84924fa3b9c",
".git/objects/b6/751dc3c67425629a0bef5b999baa16f7b52d31": "f3dc0c4904218e0f4a661632027751cf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c3f540b08a2924f4c841214e27d285de589ed3": "d94e12059dae1e0dcac5b1cd3ddd1fa6",
".git/objects/c3/941a267af4b8fbfdcb29e8e2ec3c626596617b": "a0ee92529bdaca0b21984c01a1d01fcc",
".git/objects/c4/c42bc76aac0e1f4490f8554e921a668520eb56": "695c5d2832d3024eed4e7a8c12a88741",
".git/objects/ea/29e4b2039cb2f26f229d6aa1937d0375d66c89": "8bb6da77d99a96653da2f12e77cff46a",
".git/objects/e1/5bbc9fb38b29449ebc4c183bb8bc64513cdbae": "b947cb067c14659c9d9ee8fd8b348028",
".git/objects/cd/2f3298d40fd2f8c783fc1cff4b5c7b4900f849": "b2b9c6f57caeca505113e8980af2ec9c",
".git/objects/f9/662da67beee3cca509d6d4a3154deee5310a88": "b7cefd763bcc91d1c83e0d249ab65e6b",
".git/objects/f0/5722ba1c71265dfb6f8a837b1eb7b025fd013b": "7d131c141fe7a33f95f5f997dcea63eb",
".git/objects/c5/73177a92fa1c6c8a21de4d09208c621449a9db": "e8cc3f6fb4da06c771352472f18260f1",
".git/objects/e7/90f1fcfd03508889923408a2f837f4e96fea89": "757870ab445f7b54af27431768519af3",
".git/objects/cb/064276ca7bf5ec3b33ed54f8c21be536a07961": "5ac612b56f556ea77bedbda6cb1e8251",
".git/objects/ce/767703b336f280825008b5c6a507eeab4ab9ca": "0a200a0eaa613889acfa5bbed2b22826",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/182fff08ac8ba36734b654ff8adfec011783ba": "9ec5e4808bc3c3b603e02474f5804d4c",
".git/objects/24/6c8dc5256bd93423610daf62fd1b9a66ce903d": "6692c86421f04926452c27ce8e865f02",
".git/objects/15/71f88b24dcec36ffd125c6c25b5cac90c2e898": "773e0b9f6b00366a67d29c41a404c152",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/f142625cbe370b5defcce5e20e3a77bc4d3f48": "42983802c3a8bdc65e6f94a8d9a52898",
".git/objects/13/8f35b17e80c34090b07e9e827e2096861238cc": "0c02e08e4162f04899888c37c9a8aff3",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5ccc5b99ae607d9beb05a8d7fcc44ef7",
".git/logs/refs/heads/main": "e61608ed0ba5d727f00c242f20505517",
".git/logs/refs/remotes/origin/main": "3d7219698e968d4d3ef155bacfe9fe88",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ff07c9c7cf7e76f31210d188618ceb70",
".git/refs/remotes/origin/main": "ff07c9c7cf7e76f31210d188618ceb70",
".git/index": "7ec3f9dcbc4aa5c8cd4335803714f97f",
".git/COMMIT_EDITMSG": "251faf6493464d5a3b018f3ddd5ccbaa",
"assets/AssetManifest.json": "f3621d239e9879684c217d9c70538c49",
"assets/NOTICES": "46a7cffbdc37b17cd4a8b7d6ffc6c6bf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "4185bef0b153d5fc97e42befae10f08f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d7e5deeed72503b791378bb278dc0227",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/awadh_logo3.png": "fe345a43215d073ad22791dedd50fee3",
"assets/assets/images/new2.png": "203d5a4c99ca547efc673a46bedbe770",
"assets/assets/images/new2.jpg": "055f40ba356ebd06fde3ffde90b27b92",
"assets/assets/images/landing.gif": "7b7aa4cdfd2ac570bc5817b291e3ce69",
"assets/assets/images/landing_page.jpg": "793340b386459b26fcdca97777dab18d",
"assets/assets/images/deshraj_sir.png": "1d713a72fc2dc881c000490b81b9197c",
"assets/assets/images/login.png": "70d4c169754258233072fb3bb399a03a",
"assets/assets/images/swati.jpeg": "73fdc4d93d130819d52f81aad0e3859f",
"assets/assets/images/signup.gif": "107e4aa94514fe91aebebb2814445346",
"assets/assets/images/happy_black.png": "d03c459fb8e2574fb30dc5fb2e4d2cac",
"assets/assets/images/sad_black.png": "177bcd9c0693aaf9cb2a8a2fa97ed5b8",
"assets/assets/images/register.png": "9be6775185b2178e08206cd9335a73c7",
"assets/assets/images/login_page2.png": "c9cc7c3cdd0212d42460152796fa3e45",
"assets/assets/images/waterdrink.jpg": "d08fe3ac3749b9a21319acbb0bf5ee3d",
"assets/assets/images/login_page1.png": "e136187ed9ce71db3f7c10aab71b43c8",
"assets/assets/images/chlorine.jpg": "0335af71782743b6069453400e044dd3",
"assets/assets/images/login_page.jpg": "72b732f08591348779fda27af96d4471",
"assets/assets/images/login_page.png": "dea61ec570ef1c88a351cee1d5626638",
"assets/assets/images/drink.jpg": "12f29f32c36682c4818dca36e5b2b546",
"assets/assets/images/chlorine_bg.png": "4173d956fe44abb8b3ba6f39b7e4a6c4",
"assets/assets/images/signup1.gif": "4afa575686f7bfa8c78e704c34f803d3",
"assets/assets/images/landing.png": "49dbff3ee5affc8e2dc3d658afaaa8b2",
"assets/assets/images/home_page.jpg": "bcbd668685c438a9a99fca8af269bbed",
"assets/assets/images/login.gif": "0d2e2f66d05338af22ae31f0e27fc048",
"assets/assets/images/signup.png": "08fa05c0638186dc69b4dbd68ee8f91c",
"assets/assets/images/about_bg.png": "7d7955150610b5771f9855a1acd3d21e",
"assets/assets/images/sad_white.png": "d4dc47de6dc2a13267a66db0e9449cf2",
"assets/assets/images/happy_white.png": "b9cb9df91bd26ba9a850b448217e6378",
"assets/assets/images/new.png": "15ca559dfc5d644e7c2ef93614fe901d",
"assets/assets/images/new.jpg": "f8e6a4b900e8bf60acb4e96e43157874",
"assets/assets/images/signup_bg.png": "58391aa1244cb0256bdbf31410d432fd",
"assets/assets/images/drink2.png": "e37d12e5060f3ba94b0c0d011b56c100",
"assets/assets/images/white.png": "82ede29ff97b161b6ccbc991cd730776",
"assets/assets/images/background.gif": "10d14b90d20c819a1fa04325c2f373a2",
"assets/assets/assets/images/awadh_logo3.png": "fe345a43215d073ad22791dedd50fee3",
"assets/assets/assets/images/new2.png": "203d5a4c99ca547efc673a46bedbe770",
"assets/assets/assets/images/new2.jpg": "055f40ba356ebd06fde3ffde90b27b92",
"assets/assets/assets/images/landing.gif": "7b7aa4cdfd2ac570bc5817b291e3ce69",
"assets/assets/assets/images/landing_page.jpg": "793340b386459b26fcdca97777dab18d",
"assets/assets/assets/images/deshraj_sir.png": "1d713a72fc2dc881c000490b81b9197c",
"assets/assets/assets/images/login.png": "70d4c169754258233072fb3bb399a03a",
"assets/assets/assets/images/swati.jpeg": "73fdc4d93d130819d52f81aad0e3859f",
"assets/assets/assets/images/signup.gif": "107e4aa94514fe91aebebb2814445346",
"assets/assets/assets/images/happy_black.png": "d03c459fb8e2574fb30dc5fb2e4d2cac",
"assets/assets/assets/images/sad_black.png": "177bcd9c0693aaf9cb2a8a2fa97ed5b8",
"assets/assets/assets/images/register.png": "9be6775185b2178e08206cd9335a73c7",
"assets/assets/assets/images/login_page2.png": "c9cc7c3cdd0212d42460152796fa3e45",
"assets/assets/assets/images/waterdrink.jpg": "d08fe3ac3749b9a21319acbb0bf5ee3d",
"assets/assets/assets/images/login_page1.png": "e136187ed9ce71db3f7c10aab71b43c8",
"assets/assets/assets/images/chlorine.jpg": "0335af71782743b6069453400e044dd3",
"assets/assets/assets/images/login_page.jpg": "72b732f08591348779fda27af96d4471",
"assets/assets/assets/images/login_page.png": "dea61ec570ef1c88a351cee1d5626638",
"assets/assets/assets/images/drink.jpg": "12f29f32c36682c4818dca36e5b2b546",
"assets/assets/assets/images/chlorine_bg.png": "4173d956fe44abb8b3ba6f39b7e4a6c4",
"assets/assets/assets/images/signup1.gif": "4afa575686f7bfa8c78e704c34f803d3",
"assets/assets/assets/images/landing.png": "49dbff3ee5affc8e2dc3d658afaaa8b2",
"assets/assets/assets/images/home_page.jpg": "bcbd668685c438a9a99fca8af269bbed",
"assets/assets/assets/images/login.gif": "0d2e2f66d05338af22ae31f0e27fc048",
"assets/assets/assets/images/signup.png": "08fa05c0638186dc69b4dbd68ee8f91c",
"assets/assets/assets/images/about_bg.png": "7d7955150610b5771f9855a1acd3d21e",
"assets/assets/assets/images/sad_white.png": "d4dc47de6dc2a13267a66db0e9449cf2",
"assets/assets/assets/images/happy_white.png": "b9cb9df91bd26ba9a850b448217e6378",
"assets/assets/assets/images/new.png": "15ca559dfc5d644e7c2ef93614fe901d",
"assets/assets/assets/images/new.jpg": "f8e6a4b900e8bf60acb4e96e43157874",
"assets/assets/assets/images/signup_bg.png": "58391aa1244cb0256bdbf31410d432fd",
"assets/assets/assets/images/drink2.png": "e37d12e5060f3ba94b0c0d011b56c100",
"assets/assets/assets/images/white.png": "82ede29ff97b161b6ccbc991cd730776",
"assets/assets/assets/images/background.gif": "10d14b90d20c819a1fa04325c2f373a2",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
