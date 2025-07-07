
    const { createApp } = Vue;

    createApp({
      data() {
        return {
          activeTab: 'Event',
          activeVideoSubTab: 'MusicFestival',
          previewImage: null,
          tabs: ['Event', 'Food', 'Portrait', 'Video'],
          images: {
           Event: [
              'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/1.jpg?updatedAt=1751136689337',
              'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/2.jpg?updatedAt=1751137491380',
              'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/3.jpg?updatedAt=1751137528531',
              'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/4.jpg?updatedAt=1751137546484',
              'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/5.jpg?updatedAt=1751137613580',
              'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/6.jpg?updatedAt=1751137635902',
              'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/7.jpg?updatedAt=1751137665008',
              'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/8.jpg?updatedAt=1751137688247',
              'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/9.jpg?updatedAt=1751137699925',
              'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/10.jpg?updatedAt=1751137776941',
              'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/11.jpg?updatedAt=1751138298633',

            ],
            Food: [
              'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130324/A_jqmjpt.jpg',
              'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130319/B_ap4htt.jpg',
              'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130324/C_cspzqe.jpg',
              'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130318/D_spby1j.jpg',
              'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130327/E_jcpckf.jpg',
              'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130327/F_mib8qr.jpg',
              'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130320/G_qkqnxi.jpg',
              'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130320/H_ivypsb.jpg',
              'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130323/I_qgkauv.jpg',
              'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130322/J_fgqry2.jpg',
              'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130324/K_ineron.jpg',
              'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130332/L_egb1zf.jpg',
              'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130335/M_uf3qk5.jpg',
            ],
            Portrait: [
              'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751132099/A_todtoh.jpg',
              'https://ik.imagekit.io/StructUX/1/1.jpeg?updatedAt=1751138374388',
              'https://ik.imagekit.io/StructUX/1/2.jpeg?updatedAt=1751138392214',
              'https://ik.imagekit.io/StructUX/1/3.jpeg?updatedAt=1751138438058',
              'https://ik.imagekit.io/StructUX/1/4.jpeg?updatedAt=1751138453792',
              'https://ik.imagekit.io/StructUX/1/5.jpeg?updatedAt=1751138461890',
              'https://ik.imagekit.io/StructUX/1/6.jpeg?updatedAt=1751138513034',
              'https://ik.imagekit.io/StructUX/1/7.jpeg?updatedAt=1751138523274',
              'https://ik.imagekit.io/StructUX/1/8.jpeg?updatedAt=1751138535150',
              'https://ik.imagekit.io/StructUX/1/9.jpeg?updatedAt=1751138544328',
              'https://ik.imagekit.io/StructUX/1/10.jpeg?updatedAt=1751138565478',
              'https://ik.imagekit.io/StructUX/1/11.jpeg?updatedAt=1751138576127',
              'https://ik.imagekit.io/StructUX/1/12.jpg?updatedAt=1751138599013',
              'https://ik.imagekit.io/StructUX/1/13.jpg?updatedAt=1751138599403',
              'https://ik.imagekit.io/StructUX/1/14.jpg?updatedAt=1751138612904',
              'https://ik.imagekit.io/StructUX/1/15.jpg?updatedAt=1751138631913',
              'https://ik.imagekit.io/StructUX/1/16.jpg?updatedAt=1751138632074',
              'https://ik.imagekit.io/StructUX/1/17.jpeg?updatedAt=1751138659277',
              'https://ik.imagekit.io/StructUX/1/18.jpeg?updatedAt=1751138702863',
              'https://ik.imagekit.io/StructUX/1/19.jpeg?updatedAt=1751138702614',
              'https://ik.imagekit.io/StructUX/1/20.jpeg?updatedAt=1751138703173',
              'https://ik.imagekit.io/StructUX/1/21.jpeg?updatedAt=1751138703438',
              'https://ik.imagekit.io/StructUX/1/22.jpeg?updatedAt=1751138723329',
              'https://ik.imagekit.io/StructUX/1/23.jpeg?updatedAt=1751138740479',
              'https://ik.imagekit.io/StructUX/1/24.jpeg?updatedAt=1751138740758',
            ],
          },

          videos: {
  MusicFestival: [
    { url: "https://youtu.be/WFnCMgbIKJI", title: "INNELLEA | AFTERMOVIE" },
    { url: "https://youtu.be/wBwl34ZpAvM", title: "LAST MINUTE INDIA | ZOMALAND | DIRECTOR'S CUT" },
    { url: "https://youtu.be/0tJzgC4IGaQ", title: "DIKSHANT | GULDASTA TOUR | CUT 03" },
    { url: "https://youtu.be/l7V-NMIFTks?si=Ebi4_vShTeFlvDK5", title: "Nobo festival | Techno Aftermovie" }
  ],
  ArtJewellery: [
    { url: "https://youtu.be/Dybuga8AbRM", title: "AstaGuru | Two Stellar Auctions coming up this September 2022" },
    { url: "https://youtu.be/oHM7W5lsXBc", title: "MV Dhurandhar and the Magic of Realism | Modern Indian Art| AstaGuru" },
    { url: "https://youtu.be/Yo25wjX84XY", title: "Tyeb Mehta's Diagonal Series | Masterpieces of Modern Indian Art | AstaGuru" },
    { url: "https://youtu.be/6REnLmtLuUY", title: "Featuring Rare Zambian Emeralds in our Upcoming Auction titled The Exceptionals" }, 

    { url: "https://youtu.be/UvhXJhQ3uf0", title: "Iconic Masterpieces of Modern Indian Art featuring in our Upcoming Auction" },
    { url: "https://youtu.be/W6BbZWDm6Ng", title: "Historic Masterpieces | AstaGuru" }
  ],
  MusicVideo: [
    { url: "https://youtu.be/KmATz5mD8Po", title: "Ashu Shukla - Nayaab" },
    { url: "https://youtu.be/VqMl-8wDgyQ?si=y-P-nVta7Z3Fg-6w", title: "Dikshant - Befikra" },
    { url: "https://youtu.be/8CkmynRi0Ko", title: "Dikshant - Mera Chaand" },
    { url: "https://youtu.be/R3E3jpxR6Y0", title: "Ishq Fakiri - Preet Gajra" }
  ],
  AdFilms: [
    { url: "https://www.youtube.com/watch?v=1VIj4FDGqR8", title: "#ARKSClub" },
    { url: "https://youtu.be/FqO354mYfEU?si=bnB-ViupcZeRoYyN", title: "Bewakoof | Brand Film | Ishaan Khattar" },
    { url: "https://www.youtube.com/watch?v=_C_S9TYO4Vs", title: "Dhvani Bhanushali x Closeup" },
    { url: "https://youtu.be/OAhJ0JN6eSo?si=qgNq8LaaxNyl2wj1", title: "TP GLOBAL FX" },
    { url: "https://youtu.be/TogkqesczHY?si=rAAlM2oMqiD-uSPr", title: "Trading Platform" },
    { url: "https://www.youtube.com/watch?v=q62jK9Yh9Vg", title: "Oven Story" },
    { url: "https://www.youtube.com/watch?v=obideWDXqIc", title: "Hatke Pizzas with Hatke Toppings | HAT-TRICK Offer | 3 Pizzas @ Rs.199 each | Oven Story Pizza" },
    { url: "https://www.youtube.com/watch?v=r1KtA3210x0", title: "Investing in ETF is as simple as trading stocks. Start investing today!" },
    { url: "https://www.youtube.com/watch?v=VcDDL3bQkRg", title: "Start learning about ABCDETF to discover a world of opportunities! Investing in ETF made easy!" },
    { url: "https://youtu.be/QnhwzR_744U?si=qkAvKfmwTistEl9D", title: "Sadak Foods | Ad Film | Vinod Singh, Chanchal Bajaj" },
    { url: "https://www.youtube.com/watch?v=EJ0VucVDUsU", title: "Learn about ABCDETF | ETF | Start investing today!" },
    { url: "https://www.youtube.com/watch?v=h_Nb01yqXyw", title: "Learn about ABCDETF | ETF | Start investing today!" },
    { url: "https://www.youtube.com/watch?v=E2NOR57-6NA", title: "Times Fresh Face Contestant Profile Video | Season 14" },
  ],
  FoodFestivals: [
    { url: "https://youtube.com/shorts/KQbM-Wf9Pds?si=PEo4L_Pp1-5ohg0Q", title: "Chef Sweety Singh |  Punjabi Food festival | Westin Mumbai Garden city" },
    { url: "https://youtube.com/shorts/Y5OsNerFtSs?si=-WzUaZdrgXwNoSKd", title: "Shake reel | Westin" },
    { url: "https://youtube.com/shorts/S4rK0MDq5aA?si=mXcFfLsQP8FkoL6G", title: "Grand Brunch | Westin Mumbai Garden City" },
    { url: "https://youtube.com/shorts/yvWBa-dyv9U?si=-eUtXDDJnGCAHRJd", title: "Himachali Food Festival | Chef Sherry | Westin Mumbai Garden City" }
  ],
  Reels: [
    { url: "https://youtube.com/shorts/aSJSjOTdc7s?si=NyWE3vTDAQHUn6EG", title: "AYCS | 2023" },
    { url: "https://youtube.com/shorts/7ONXGi3kzr4?si=NfbEIX9B6l2PA9DS", title: "Shambhavi Thakur | Atharva college of engineering | Aftermovie" },
    { url: "https://youtube.com/shorts/l6qEL3MFZ4Q?si=pcVUXoX59n9mtPak", title: "KASHISH KOLLISION | GLOCAL JUNTION | AFTERMOVIE" },
    { url: "https://youtube.com/shorts/iKTrpGf7TWs?si=3uAo7oDibLCFpo3W", title: "SOLE SEARCH | Store opening |" },
    { url: "https://youtube.com/shorts/T16oacxsHOs?si=_ROHfkRg_y6AI9zF", title: "LAST MINUTE INDIA | MAX FIELD FESTIVAL" }
  ]
}


        };
      },
      methods: {
        transformCloudinaryUrl(url) {
          if (url.includes('res.cloudinary.com')) {
            return url.replace('/upload/', '/upload/f_auto,q_auto,w_1000/');
          }
          return url;
        },
        getYoutubeThumbnail(url) {
  const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop().split("?")[0];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
},
        openPreview(imgUrl) {
          this.previewImage = imgUrl;
        },
        closePreview() {
          this.previewImage = null;
        }
      }
    }).mount('#app');