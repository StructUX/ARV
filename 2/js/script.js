const { createApp } = Vue;

createApp({
  data() {
    return {
      activeTab: 'Photo',
      activePhotoSubTab: 'Event',
      activeVideoSubTab: 'MusicFestival',
      previewImage: null,
      tabs: ['Photo', 'Video'],
      photoSubTabs: ['Event', 'Food', 'Portrait'],
      images: {
         Event: [
          { url: 'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/1.jpg', title: 'Event 1' },
          { url: 'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/2.jpg', title: 'Event 2' },
          { url: 'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/3.jpg', title: 'Event 3' },
          { url: 'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/4.jpg?updatedAt=1751137546484', title: 'Event 4' },
          { url: 'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/5.jpg?updatedAt=1751137613580', title: 'Event 5' },
          { url: 'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/6.jpg?updatedAt=1751137635902', title: 'Event 6' },
          { url: 'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/7.jpg?updatedAt=1751137665008', title: 'Event 7' },
          { url: 'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/8.jpg?updatedAt=1751137688247', title: 'Event 8' },
          { url: 'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/9.jpg?updatedAt=1751137699925', title: 'Event 9' },
          { url: 'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/10.jpg?updatedAt=1751137776941', title: 'Event 10' },
          { url: 'https://ik.imagekit.io/StructUX/AD%20RIOT%20VISUALZ/11.jpg?updatedAt=1751138298633', title: 'Event 11' }
        ],
         Food: [
          { url: 'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130324/A_jqmjpt.jpg', title: 'Food A' },
          { url: 'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130319/B_ap4htt.jpg', title: 'Food B' },
          { url: 'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130324/C_cspzqe.jpg', title: 'Food C' },
          { url: 'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130318/D_spby1j.jpg', title: 'Food D' },
          { url: 'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130327/E_jcpckf.jpg', title: 'Food E' },
          { url: 'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130327/F_mib8qr.jpg', title: 'Food F' },
          { url: 'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130320/G_qkqnxi.jpg', title: 'Food G' },
          { url: 'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130320/H_ivypsb.jpg', title: 'Food H' },
          { url: 'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130323/I_qgkauv.jpg', title: 'Food I' },
          { url: 'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130322/J_fgqry2.jpg', title: 'Food J' },
          { url: 'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130324/K_ineron.jpg', title: 'Food K' },
          { url: 'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130332/L_egb1zf.jpg', title: 'Food L' },
          { url: 'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751130335/M_uf3qk5.jpg', title: 'Food M' }
        ],
        Portrait: [
          { url: 'https://res.cloudinary.com/dwq1cx3is/image/upload/v1751132099/A_todtoh.jpg', title: 'Portrait A' },
          { url: 'https://ik.imagekit.io/StructUX/1/1.jpeg', title: 'Portrait B' },
          { url: 'https://ik.imagekit.io/StructUX/1/2.jpeg?updatedAt=1751138392214', title: 'Portrait C' },
          { url: 'https://ik.imagekit.io/StructUX/1/3.jpeg?updatedAt=1751138438058', title: 'Portrait D' },
          { url: 'https://ik.imagekit.io/StructUX/1/4.jpeg?updatedAt=1751138453792', title: 'Portrait E' },
          { url: 'https://ik.imagekit.io/StructUX/1/5.jpeg?updatedAt=1751138461890', title: 'Portrait F' },
          { url: 'https://ik.imagekit.io/StructUX/1/6.jpeg?updatedAt=1751138513034', title: 'Portrait G' },
          { url: 'https://ik.imagekit.io/StructUX/1/7.jpeg?updatedAt=1751138523274', title: 'Portrait H' },
          { url: 'https://ik.imagekit.io/StructUX/1/8.jpeg?updatedAt=1751138535150', title: 'Portrait I' },
          { url: 'https://ik.imagekit.io/StructUX/1/9.jpeg?updatedAt=1751138544328', title: 'Portrait J' },
          { url: 'https://ik.imagekit.io/StructUX/1/10.jpeg?updatedAt=1751138565478', title: 'Portrait K' },
          { url: 'https://ik.imagekit.io/StructUX/1/11.jpeg?updatedAt=1751138576127', title: 'Portrait L' },
          { url: 'https://ik.imagekit.io/StructUX/1/12.jpg?updatedAt=1751138599013', title: 'Portrait M' },
          { url: 'https://ik.imagekit.io/StructUX/1/13.jpg?updatedAt=1751138599403', title: 'Portrait N' },
          { url: 'https://ik.imagekit.io/StructUX/1/14.jpg?updatedAt=1751138612904', title: 'Portrait O' },
          { url: 'https://ik.imagekit.io/StructUX/1/15.jpg?updatedAt=1751138631913', title: 'Portrait P' },
          { url: 'https://ik.imagekit.io/StructUX/1/16.jpg?updatedAt=1751138632074', title: 'Portrait Q' },
          { url: 'https://ik.imagekit.io/StructUX/1/17.jpeg?updatedAt=1751138659277', title: 'Portrait R' },
          { url: 'https://ik.imagekit.io/StructUX/1/18.jpeg?updatedAt=1751138702863', title: 'Portrait S' },
          { url: 'https://ik.imagekit.io/StructUX/1/19.jpeg?updatedAt=1751138702614', title: 'Portrait T' },
          { url: 'https://ik.imagekit.io/StructUX/1/20.jpeg?updatedAt=1751138703173', title: 'Portrait U' },
          { url: 'https://ik.imagekit.io/StructUX/1/21.jpeg?updatedAt=1751138703438', title: 'Portrait V' },
          { url: 'https://ik.imagekit.io/StructUX/1/22.jpeg?updatedAt=1751138723329', title: 'Portrait W' },
          { url: 'https://ik.imagekit.io/StructUX/1/23.jpeg?updatedAt=1751138740479', title: 'Portrait X' },
          { url: 'https://ik.imagekit.io/StructUX/1/24.jpeg?updatedAt=1751138740758', title: 'Portrait Y' }
        ]
      },
      videos: {
        MusicFestival: [
              { url: "https://youtu.be/WFnCMgbIKJI", title: "INNELLEA | AFTERMOVIE" },
              { url: "https://youtu.be/wBwl34ZpAvM", title: "LAST MINUTE INDIA | ZOMALAND" },
              { url: "https://youtu.be/0tJzgC4IGaQ", title: "DIKSHANT | GULDASTA TOUR" },
              { url: "https://youtu.be/l7V-NMIFTks?si=Ebi4_vShTeFlvDK5", title: "Nobo Festival | Aftermovie" }
            ],
        ArtJewellery: [
              { url: "https://youtu.be/Dybuga8AbRM", title: "AstaGuru | September Auctions" },
              { url: "https://youtu.be/oHM7W5lsXBc", title: "MV Dhurandhar | Realism Art" },
              { url: "https://youtu.be/Yo25wjX84XY", title: "Tyeb Mehta's Diagonal Series" },
              { url: "https://youtu.be/6REnLmtLuUY", title: "Zambian Emeralds Auction" },
              { url: "https://youtu.be/UvhXJhQ3uf0", title: "Iconic Masterpieces" },
              { url: "https://youtu.be/W6BbZWDm6Ng", title: "Historic Masterpieces" }
            ],
        MusicVideo: [
              { url: "https://youtu.be/KmATz5mD8Po", title: "Ashu Shukla - Nayaab" },
              { url: "https://youtu.be/VqMl-8wDgyQ", title: "Dikshant - Befikra" },
              { url: "https://youtu.be/8CkmynRi0Ko", title: "Dikshant - Mera Chaand" },
              { url: "https://youtu.be/R3E3jpxR6Y0", title: "Ishq Fakiri - Preet Gajra" }
            ],
        AdFilms: [
              { url: "https://www.youtube.com/watch?v=1VIj4FDGqR8", title: "#ARKSClub" },
              { url: "https://youtu.be/FqO354mYfEU", title: "Bewakoof | Ishaan Khattar" },
              { url: "https://www.youtube.com/watch?v=_C_S9TYO4Vs", title: "Dhvani Bhanushali x Closeup" },
              { url: "https://youtu.be/OAhJ0JN6eSo", title: "TP GLOBAL FX" },
              { url: "https://youtu.be/TogkqesczHY", title: "Trading Platform" },
              { url: "https://www.youtube.com/watch?v=q62jK9Yh9Vg", title: "Oven Story" },
              { url: "https://www.youtube.com/watch?v=obideWDXqIc", title: "Hatke Pizzas | Oven Story" },
              { url: "https://www.youtube.com/watch?v=r1KtA3210x0", title: "ETF Made Simple" },
              { url: "https://www.youtube.com/watch?v=VcDDL3bQkRg", title: "Invest in ETF" },
              { url: "https://youtu.be/QnhwzR_744U", title: "Sadak Foods | Ad Film" },
              { url: "https://www.youtube.com/watch?v=EJ0VucVDUsU", title: "Learn ABCDETF" },
              { url: "https://www.youtube.com/watch?v=h_Nb01yqXyw", title: "Start ETF Investing" },
              { url: "https://www.youtube.com/watch?v=E2NOR57-6NA", title: "Times Fresh Face | Video" }
            ],
        FoodFestivals: [
              { url: "https://youtube.com/shorts/KQbM-Wf9Pds", title: "Punjabi Food Fest | Westin" },
              { url: "https://youtube.com/shorts/Y5OsNerFtSs", title: "Shake Reel | Westin" },
              { url: "https://youtube.com/shorts/S4rK0MDq5aA", title: "Grand Brunch | Westin" },
              { url: "https://youtube.com/shorts/yvWBa-dyv9U", title: "Himachali Food | Chef Sherry" }
            ],
        Reels: [
              { url: "https://youtube.com/shorts/aSJSjOTdc7s", title: "AYCS 2023" },
              { url: "https://youtube.com/shorts/7ONXGi3kzr4", title: "Shambhavi Thakur | Aftermovie" },
              { url: "https://youtube.com/shorts/l6qEL3MFZ4Q", title: "KASHISH KOLLISION | GLOCAL" },
              { url: "https://youtube.com/shorts/iKTrpGf7TWs", title: "SOLE SEARCH | Store Opening" },
              { url: "https://youtube.com/shorts/T16oacxsHOs", title: "LMI | Max Field Festival" }
            ]
      }
    };
  },
  methods: {
    transformCloudinaryUrl(url) {
      if (url.includes('cloudinary.com')) {
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