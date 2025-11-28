const postsData = [
    {
        id: 11,
        username: "yerelbodrum",
        avatar: "assets/hardal_clean_cover.png",
        location: "Bodrum Narenciye Bahçeleri",
        likes: 288,
        caption: `Kışın sarı güneşi: Yabani Hardal (Sinapis arvensis). 🌿

Mandalina bahçelerinin altını sarıya boyayan bu bitki, hem gözümüze hem damağımıza hitap eder. Hafif acımsı tadı, Ege'nin zeytinyağıyla buluştuğunda şifalı bir lezzete dönüşür.

🌿 **Kimlik:** Turpgiller ailesinden, sarı çiçekli, tüylü yapraklı yıllık bitki.
🏛 **Tarih:** Binlerce yıldır hem baharat hem de sebze olarak tüketilmektedir.
🍽 **Mutfak:** Haşlama salatası, yumurtalı kavurması yapılır.
🤲 **Toplama:** Çiçeklenmeden önceki taze yaprakları en lezzetli halidir.

#BodrumOtları #HardalOtu #SinapisArvensis #EgeMutfağı #YenilebilirOtlar #BotanicalArt`,
        references: "Davis, P.H. (1965). Flora of Turkey.",
        timestamp: "Şimdi",
        comments: [
            { user: "nanobanana_bot", text: "Style Consistency: All images generated using 'Copperplate engraving style, fine ink lines, soft watercolor tint' for a unified scientific aesthetic." }
        ],
        slides: [
            {
                type: 'composite',
                src: 'assets/hardal_clean_cover.png',
                overlays: [
                    { text: "Sinapis arvensis", style: "top: 10%; left: 50%; transform: translateX(-50%); font-family: 'Playfair Display'; font-style: italic; font-size: 1.5rem; color: #2c3e50; border-bottom: 1px solid #2c3e50; padding-bottom: 5px;" },
                    { text: "HARDAL OTU", style: "bottom: 15%; left: 50%; transform: translateX(-50%); font-family: 'Montserrat'; font-weight: 700; font-size: 2.2rem; letter-spacing: 3px; color: #2c3e50;" }
                ]
            },
            {
                type: 'composite',
                src: 'assets/hardal_clean_habitat.png',
                overlays: [
                    { text: "YAŞAM ALANI", style: "top: 10%; left: 50%; transform: translateX(-50%); font-family: 'Montserrat'; font-size: 1.2rem; letter-spacing: 2px; color: #556b2f;" },
                    { text: "Mandalina Bahçeleri", style: "bottom: 15%; left: 50%; transform: translateX(-50%); font-family: 'Playfair Display'; font-size: 1.3rem; color: #2c3e50; background: rgba(255,255,255,0.6); padding: 5px 10px;" }
                ]
            },
            {
                type: 'composite',
                src: 'assets/hardal_clean_parts.png',
                overlays: [
                    { text: "BİTKİ KISIMLARI", style: "top: 8%; left: 50%; transform: translateX(-50%); font-family: 'Montserrat'; font-size: 1.2rem; letter-spacing: 2px; color: #556b2f;" },
                    { text: "Yaprak", style: "top: 40%; left: 15%; font-family: 'Playfair Display'; font-size: 1rem; color: #2c3e50;" },
                    { text: "Çiçek", style: "top: 40%; right: 15%; font-family: 'Playfair Display'; font-size: 1rem; color: #2c3e50;" },
                    { text: "Tohum", style: "bottom: 25%; left: 50%; transform: translateX(-50%); font-family: 'Playfair Display'; font-size: 1rem; color: #2c3e50;" }
                ]
            },
            {
                type: 'composite',
                src: 'assets/hardal_clean_harvest.png',
                overlays: [
                    { text: "HASAT ZAMANI", style: "top: 10%; left: 50%; transform: translateX(-50%); font-family: 'Montserrat'; font-size: 1.2rem; letter-spacing: 2px; color: #556b2f;" },
                    { text: "Kış Sonu - İlkbahar Başı", style: "bottom: 15%; left: 50%; transform: translateX(-50%); font-family: 'Playfair Display'; font-size: 1.2rem; color: #2c3e50;" }
                ]
            },
            {
                type: 'composite',
                src: 'assets/hardal_clean_culinary.png',
                overlays: [
                    { text: "MUTFAK", style: "top: 10%; left: 50%; transform: translateX(-50%); font-family: 'Montserrat'; font-size: 1.2rem; letter-spacing: 2px; color: #556b2f;" },
                    { text: "Hardal Otu Salatası", style: "bottom: 15%; left: 50%; transform: translateX(-50%); font-family: 'Playfair Display'; font-style: italic; font-size: 1.5rem; color: #2c3e50;" }
                ]
            }
        ]
    },
    {
        id: 10,
        username: "yerelbodrum",
        avatar: "assets/sevketi_cover.png",
        location: "Bodrum Tarlaları",
        likes: 405,
        caption: `Toprağın derinliklerinden gelen lezzet: Şevketi Bostan (Gundelia tournefortii). 🌿

Dikenli zırhının altında sakladığı beyaz kökleri ve taze yapraklarıyla Ege mutfağının en kıymetli hazinelerinden biri. Hem şifası hem de Girit usulü kuzu etli yemeğiyle sofraların baş tacıdır.

🌿 **Kimlik:** Papatyagiller ailesinden, dikenli, sütlü ve çok yıllık otsu bir bitki.
🏛 **Tarih:** Adını Fransız botanikçi Tournefort'tan alır. Antik çağdan beri bilinir.
🍽 **Mutfak:** En meşhur tarifi, kuzu etiyle yapılan terbiyeli yemeğidir.
🤲 **Toplama:** Kökü derindir, "kenker çivisi" ile çıkarılır. Aşırı toplanmamalıdır.

#BodrumOtları #ŞevketiBostan #GundeliaTournefortii #Kenker #EgeMutfağı #GastroBotanical`,
        references: "Ertuğ, F. (2004). Wild Edible Plants of the Bodrum Area.",
        timestamp: "Şimdi",
        comments: [
            { user: "nanobanana_bot", text: "Cover Prompt: Masterpiece botanical poster of Gundelia tournefortii (Şevketi Bostan). Text 'GUNDELIA TOURNEFORTII' in elegant arched serif font at top. Text 'ŞEVKETİ BOSTAN' in bold vintage typography in center. Text 'Kenker' in italic script at bottom. Highly detailed steel engraving style, hand-colored, thorny thistle leaves, thick root, creamy parchment background, professional composition, 8k resolution." },
            { user: "nanobanana_bot", text: "Habitat Prompt: Atmospheric landscape illustration of Gundelia tournefortii growing in a traditional Bodrum field. Background features a white-washed stone windmill and olive trees under a soft spring sky. Text 'YAŞAM ALANI' in elegant vintage font at the bottom. Intricate etching style with watercolor wash, high detail, masterpiece." },
            { user: "nanobanana_bot", text: "Cycle Prompt: Detailed botanical science diagram of Gundelia tournefortii life cycle. Three distinct phases: 1. Winter Rosette (flat on ground), 2. Spring Spines (thorny bush), 3. Summer Seeds (dry). Text labels 'Kış', 'İlkbahar', 'Yaz' integrated elegantly. Parchment background, encyclopedia plate style, high definition." },
            { user: "nanobanana_bot", text: "Harvest Prompt: Vintage illustration of the Şevketi Bostan harvest. A traditional 'Kenker Çivisi' (foraging tool) lying next to a freshly dug, thick white root and green thorny leaves. Text 'HASAT: KÖK VE YAPRAK' at bottom. Realistic texture, earthy tones, dramatic lighting, parchment background." },
            { user: "nanobanana_bot", text: "History Prompt: Historical illustration of French botanist Tournefort examining a plant in the Aegean. Old map of the Greek Islands in the background. Text 'TARİHÇE: TOURNEFORT' in antique font. Sepia tones, highly detailed etching, vintage encyclopedia aesthetic." },
            { user: "nanobanana_bot", text: "Culinary Prompt: Gourmet food illustration of 'Girit Usulü Şevketi Bostan'. A ceramic bowl filled with the creamy lamb stew, lemon slices, and fresh herbs on a rustic wooden table. Text 'GİRİT MUTFAĞI' elegant typography at top. Appetizing, high contrast, warm lighting, vintage cookbook style." },
            { user: "nanobanana_bot", text: "Foraging Prompt: Visual guide to sustainable foraging of Gundelia. A diagram showing a knife cutting the root at an angle to leave a piece in the soil. Text 'SÜRDÜRÜLEBİLİR HASAT' at top. Text 'Kökün Bir Kısmını Bırakın' at bottom. Instructional sketch style, clear and detailed, parchment background." }
        ],
        slides: [
            { type: 'image_only', src: 'assets/sevketi_cover.png' },
            { type: 'image_only', src: 'assets/sevketi_habitat.png' },
            { type: 'image_only', src: 'assets/sevketi_cycle.png' },
            { type: 'image_only', src: 'assets/sevketi_harvest.png' },
            { type: 'image_only', src: 'assets/sevketi_history.png' },
            { type: 'image_only', src: 'assets/sevketi_culinary.png' },
            { type: 'image_only', src: 'assets/sevketi_foraging.png' }
        ]
    },
    {
        id: 9,
        username: "yerelbodrum",
        avatar: "assets/kapari_clean_cover.png",
        location: "Bodrum Taş Duvarları",
        likes: 312,
        caption: `Bodrum'un inatçı güzeli: Kapari (Capparis spinosa). 🌿

Kurak yaz aylarında taş duvarlardan fışkıran bu mucizevi bitki, hem antik bir şifa kaynağı hem de mutfağımızın turşuluk lezzetidir.

🌿 **Kimlik:** Kaparigiller ailesinden, dikenli, sürünücü çalı.
🏛 **Tarih:** Evliya Çelebi, "Gebre" olarak bahseder ve şifalarını anlatır.
🍽 **Mutfak:** Tomurcukları ve meyveleri turşu yapılarak tüketilir.
🤲 **Toplama:** Tomurcuklar çiçek açmadan, sabah serinliğinde toplanır.

#BodrumOtları #Kapari #CapparisSpinosa #GebreOtu #EgeMutfağı #Foraging`,
        references: "Ertuğ, F. (2004). Wild Edible Plants of the Bodrum Area.",
        timestamp: "Şimdi",
        comments: [
            { user: "nanobanana_bot", text: "Generated using 'Clean Image + CSS Overlay' technique. Visuals are pure AI art; Text is rendered via HTML/CSS for perfect legibility and blending." }
        ],
        slides: [
            { 
                type: 'composite',
                src: 'assets/kapari_clean_cover.png',
                overlays: [
                    { text: "Capparis spinosa", style: "top: 10%; left: 50%; transform: translateX(-50%); font-family: 'Playfair Display'; font-style: italic; font-size: 1.4rem; color: #2c3e50; opacity: 0.9;" },
                    { text: "KAPARİ", style: "top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: 'Montserrat'; font-weight: 700; font-size: 3rem; letter-spacing: 4px; color: #2c3e50; mix-blend-mode: multiply;" },
                    { text: "Gebre Otu", style: "bottom: 15%; left: 50%; transform: translateX(-50%); font-family: 'Playfair Display'; font-style: italic; font-size: 1.2rem; color: #8f9779;" }
                ]
            },
            {
                type: 'composite',
                src: 'assets/kapari_clean_habitat.png',
                overlays: [
                    { text: "YAŞAM ALANI", style: "top: 8%; left: 50%; transform: translateX(-50%); font-family: 'Montserrat'; font-weight: 600; font-size: 1.2rem; letter-spacing: 2px; color: #c07d64; border-bottom: 1px solid #c07d64; padding-bottom: 5px;" },
                    { text: "Taş Duvarlar & Kurak Yamaçlar", style: "bottom: 10%; left: 50%; transform: translateX(-50%); width: 80%; text-align: center; font-family: 'Playfair Display'; font-size: 1.1rem; color: #2c3e50; background: rgba(244, 241, 234, 0.8); padding: 10px; border-radius: 4px;" }
                ]
            },
            {
                type: 'composite',
                src: 'assets/kapari_clean_cycle.png',
                overlays: [
                    { text: "YAŞAM DÖNGÜSÜ", style: "top: 5%; left: 50%; transform: translateX(-50%); font-family: 'Montserrat'; font-weight: 600; font-size: 1.2rem; color: #c07d64;" },
                    { text: "Tomurcuk", style: "top: 35%; left: 20%; font-family: 'Playfair Display'; font-size: 1rem; color: #2c3e50;" },
                    { text: "Çiçek", style: "top: 35%; right: 20%; font-family: 'Playfair Display'; font-size: 1rem; color: #2c3e50;" },
                    { text: "Meyve (Karpuz)", style: "bottom: 25%; left: 50%; transform: translateX(-50%); font-family: 'Playfair Display'; font-size: 1rem; color: #2c3e50;" },
                    { text: "İlkbahar - Yaz", style: "bottom: 5%; left: 50%; transform: translateX(-50%); font-family: 'Montserrat'; font-size: 0.8rem; color: #8f9779;" }
                ]
            },
            {
                type: 'composite',
                src: 'assets/kapari_clean_harvest.png',
                overlays: [
                    { text: "HASAT REHBERİ", style: "top: 8%; left: 50%; transform: translateX(-50%); font-family: 'Montserrat'; font-weight: 600; font-size: 1.2rem; letter-spacing: 2px; color: #c07d64;" },
                    { text: "Zaman: Mayıs - Ağustos", style: "bottom: 20%; left: 10%; font-family: 'Playfair Display'; font-size: 1rem; color: #2c3e50; background: rgba(255,255,255,0.7); padding: 5px;" },
                    { text: "Hedef: Açılmamış Tomurcuk", style: "bottom: 12%; left: 10%; font-family: 'Playfair Display'; font-size: 1rem; color: #2c3e50; background: rgba(255,255,255,0.7); padding: 5px;" }
                ]
            },
            {
                type: 'composite',
                src: 'assets/kapari_clean_culinary.png',
                overlays: [
                    { text: "MUTFAK", style: "top: 8%; left: 50%; transform: translateX(-50%); font-family: 'Montserrat'; font-weight: 600; font-size: 1.2rem; letter-spacing: 2px; color: #c07d64;" },
                    { text: "Kapari Turşusu", style: "bottom: 15%; right: 10%; font-family: 'Playfair Display'; font-style: italic; font-size: 1.5rem; color: #2c3e50;" }
                ]
            }
        ]
    },
    {
        id: 8,
        username: "yerelbodrum",
        avatar: "assets/ebegumeci_science_cover.png",
        location: "Bodrum Botanik Bahçesi",
        likes: 245,
        caption: `Bodrum Florası No. 5: Ebegümeci (Malva sylvestris). 🌿📚

Antik Halikarnassos'un şifacılarından günümüze uzanan bir miras. "Gaba" adıyla bildiğimiz bu bitki, hem tıbbi hem de gastronomik değeriyle Bodrum kültürünün ayrılmaz bir parçasıdır.

#BodrumFlorası #Ebegümeci #MalvaSylvestris`,
        references: "Davis, P.H. (1967). Flora of Turkey and the East Aegean Islands.",
        timestamp: "2 saat önce",
        comments: [],
        slides: [
            { type: 'image_only', src: 'assets/ebegumeci_science_cover.png' },
            { type: 'image_only', src: 'assets/ebegumeci_science_habitat.png' },
            { type: 'image_only', src: 'assets/ebegumeci_science_cycle.png' },
            { type: 'image_only', src: 'assets/ebegumeci_science_harvest.png' },
            { type: 'image_only', src: 'assets/ebegumeci_science_history.png' },
            { type: 'image_only', src: 'assets/ebegumeci_science_culinary.png' },
            { type: 'image_only', src: 'assets/ebegumeci_science_foraging.png' }
        ]
    },
    {
        id: 7,
        username: "yerelbodrum",
        avatar: "assets/ebegumeci_cover.png",
        location: "Bodrum Bahçeleri",
        likes: 184,
        caption: `Antik çağlardan bugüne bir şifa deposu: Ebegümeci (Malva sylvestris). 🌿`,
        references: "Ertuğ, F. (2004).",
        timestamp: "3 saat önce",
        comments: [],
        slides: [
            { type: 'image_only', src: 'assets/ebegumeci_cover.png' },
            { type: 'image_only', src: 'assets/ebegumeci_habitat.png' },
            { type: 'image_only', src: 'assets/ebegumeci_cycle.png' },
            { type: 'image_only', src: 'assets/ebegumeci_harvest.png' },
            { type: 'image_only', src: 'assets/ebegumeci_history.png' },
            { type: 'image_only', src: 'assets/ebegumeci_culinary.png' },
            { type: 'image_only', src: 'assets/ebegumeci_foraging.png' }
        ]
    },
    {
        id: 6,
        username: "yerelbodrum",
        avatar: "assets/tilkisen_watercolor.png",
        location: "Maki Çalılıkları, Bodrum",
        likes: 58,
        caption: `Makiye gizlenmiş hazine: Tilkişen. 🌿`,
        references: "Sanatsal yorumlama.",
        timestamp: "5 saat önce",
        comments: [],
        slides: [{ type: 'image_only', src: 'assets/tilkisen_watercolor.png' }]
    },
    {
        id: 5,
        username: "yerelbodrum",
        avatar: "assets/tilkisen.png",
        location: "Bodrum Makilikleri",
        likes: 132,
        caption: `Baharın dikenli müjdecisi: Tilkişen (Asparagus acutifolius). 🌿`,
        references: "Ertuğ, F. (2004).",
        timestamp: "6 saat önce",
        comments: [],
        slides: [
            { type: 'image_only', src: 'assets/tilkisen.png' },
            { type: 'image_only', src: 'assets/tilkisen_cycle.png' },
            { type: 'image_only', src: 'assets/tilkisen_dish.png' }
        ]
    },
    {
        id: 4,
        username: "yerelbodrum",
        avatar: "assets/arapsaci_watercolor.png",
        location: "Bodrum Kırları",
        likes: 42,
        caption: `Doğanın suluboya paleti: Arapsaçı tarlaları. 🎨`,
        references: "Sanatsal yorumlama.",
        timestamp: "1 gün önce",
        comments: [],
        slides: [{ type: 'image_only', src: 'assets/arapsaci_watercolor.png' }]
    },
    {
        id: 3,
        username: "yerelbodrum",
        avatar: "assets/arapsaci.png",
        location: "Yol Kenarları, Bodrum",
        likes: 156,
        caption: `Bodrum’un anason kokulu rüyası: Arapsaçı (Foeniculum vulgare). 🌿`,
        references: "Ertuğ, F. (2004).",
        timestamp: "1 gün önce",
        comments: [],
        slides: [
            { type: 'image_only', src: 'assets/arapsaci.png' },
            { type: 'image_only', src: 'assets/arapsaci_cycle.png' },
            { type: 'image_only', src: 'assets/arapsaci_dish.png' }
        ]
    },
    {
        id: 2,
        username: "yerelbodrum",
        avatar: "assets/sedum.png",
        location: "Kayalık Yamaçlar, Bodrum",
        likes: 89,
        caption: `Kayaların kırmızı mücevheri: Kaya Üzümü (Sedum rubens). 🌿`,
        references: "Ertuğ, F. (2004).",
        timestamp: "2 gün önce",
        comments: [],
        slides: [
            { type: 'cover', src: 'assets/sedum.png', latin: 'Sedum rubens', turkish: 'KAYA ÜZÜMÜ', local: 'Kaya Koruğu' },
            { type: 'growth', title: 'Yaşam Döngüsü', src: 'assets/sedum_cycle.png', timeline: [{ label: 'Filizlenme', season: 'Kış Sonu' }, { label: 'Çiçeklenme', season: 'İlkbahar' }, { label: 'Kuruma', season: 'Yaz' }] },
            { type: 'harvest', title: 'Hasat Rehberi', illustration: 'assets/sedum.png', weather: 'Serin Sabahlar', region: 'Kayalıklar', form: 'Etli Yapraklar' }
        ]
    },
    {
        id: 1,
        username: "yerelbodrum",
        avatar: "assets/salicornia.png",
        location: "Tuzlu Bataklıklar, Bodrum",
        likes: 124,
        caption: `Ege'nin tuzlu sularından sofralarımıza: Deniz Börülcesi (Salicornia europaea). 🌊`,
        references: "Ertuğ, F. (2004).",
        timestamp: "3 gün önce",
        comments: [],
        slides: [
            { type: 'cover', src: 'assets/salicornia.png', latin: 'Salicornia europaea', turkish: 'DENİZ BÖRÜLCESİ', local: 'Tuz Otu' },
            { type: 'growth', title: 'Yaşam Döngüsü', src: 'assets/salicornia_cycle.png', timeline: [{ label: 'Filizlenme', season: 'İlkbahar' }, { label: 'Hasat', season: 'Yaz Başı' }, { label: 'Tohum', season: 'Sonbahar' }] },
            { type: 'harvest', title: 'Hasat Rehberi', illustration: 'assets/salicornia.png', weather: 'Güneşli ve Kuru', region: 'Kıyı Şeridi', form: 'Taze Sürgünler' }
        ]
    }
];

function renderFeed() {
    const container = document.getElementById('feed-container');

    postsData.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        // Generate Slides HTML
        let slidesHTML = '';
        let dotsHTML = '';

        post.slides.forEach((slide, index) => {
            const activeClass = index === 0 ? 'active' : '';
            dotsHTML += `<div class="dot ${activeClass}" data-index="${index}"></div>`;

            if (slide.type === 'composite') {
                const overlaysHTML = slide.overlays.map(o => `
                    <div style="position: absolute; ${o.style} pointer-events: none;">${o.text}</div>
                `).join('');
                
                slidesHTML += `
                    <div class="carousel-slide composite-slide" id="slide-${post.id}-${index}">
                        <div style="position: relative; width: 100%; height: 100%;">
                            <img class="full-slide-image" src="${slide.src}" alt="Slide Image" style="width:100%; height:100%; object-fit:cover;">
                            ${overlaysHTML}
                        </div>
                        <button onclick="downloadSlide('slide-${post.id}-${index}')" style="position: absolute; top: 10px; right: 10px; z-index: 50; background: rgba(0,0,0,0.5); color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.7rem;">
                            <i class="fas fa-download"></i> İndir
                        </button>
                    </div>
                `;
            } else if (slide.type === 'image_only') {
                 slidesHTML += `
                    <div class="carousel-slide">
                         <img class="full-slide-image" src="${slide.src}" alt="Slide Image" style="width:100%; height:100%; object-fit:cover;">
                    </div>
                `;
            } else if (slide.type === 'cover') {
                slidesHTML += `
                    <div class="carousel-slide">
                        <div class="parchment-slide">
                            <div class="cover-header">
                                <div class="cover-latin">${slide.latin}</div>
                                <div class="cover-turkish">${slide.turkish}</div>
                                <div class="cover-local">"${slide.local}"</div>
                            </div>
                            <img class="slide-illustration" src="${slide.src}" alt="Cover Illustration">
                        </div>
                    </div>
                `;
            } else if (slide.type === 'growth') {
                const timelineHTML = slide.timeline.map(t => `
                    <div class="timeline-item">
                        <div class="timeline-label">${t.label}</div>
                        <div class="timeline-season">${t.season}</div>
                    </div>
                `).join('');
                slidesHTML += `
                    <div class="carousel-slide">
                        <div class="parchment-slide">
                            <div class="slide-title">${slide.title}</div>
                            <img class="slide-illustration" src="${slide.src}" alt="Growth Cycle">
                            <div class="growth-timeline">${timelineHTML}</div>
                        </div>
                    </div>
                `;
            } else if (slide.type === 'harvest') {
                slidesHTML += `
                    <div class="carousel-slide">
                        <div class="parchment-slide">
                            <div class="slide-title">${slide.title}</div>
                            <img class="slide-illustration" src="${slide.illustration}" alt="Harvest Illustration">
                            <div class="info-grid">
                                <div class="info-item"><span class="info-label">Hava</span><span>${slide.weather}</span></div>
                                <div class="info-item"><span class="info-label">Bölge</span><span>${slide.region}</span></div>
                                <div class="info-item" style="grid-column: span 2;"><span class="info-label">Toplanacak Form</span><span>${slide.form}</span></div>
                            </div>
                        </div>
                    </div>
                `;
            } else { // type === 'info'
                slidesHTML += `
                    <div class="carousel-slide">
                        <div class="parchment-slide">
                            <div class="slide-title">${slide.title}</div>
                            <img class="slide-illustration" src="${slide.illustration}" alt="Illustration">
                            <div class="slide-content">${slide.content}</div>
                        </div>
                    </div>
                `;
            }
        });

        postElement.innerHTML = `
            <div class="post-header">
                <div class="user-info">
                    <img src="${post.avatar}" alt="Avatar" class="user-avatar">
                    <div>
                        <div class="username">${post.username}</div>
                        <div style="font-size: 0.75rem; font-weight: 400;">${post.location}</div>
                    </div>
                </div>
                <i class="fas fa-ellipsis-h"></i>
            </div>
            
            <div class="carousel-container" id="carousel-${post.id}">
                <div class="carousel-track">
                    ${slidesHTML}
                </div>
                <button class="carousel-nav nav-prev" onclick="moveCarousel(${post.id}, -1)"><i class="fas fa-chevron-left"></i></button>
                <button class="carousel-nav nav-next" onclick="moveCarousel(${post.id}, 1)"><i class="fas fa-chevron-right"></i></button>
                <div class="carousel-dots">
                    ${dotsHTML}
                </div>
            </div>

            <div class="post-actions">
                <div class="action-left">
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                    <i class="far fa-paper-plane"></i>
                </div>
                <div class="action-right">
                    <i class="far fa-bookmark"></i>
                </div>
            </div>

            <div class="likes">${post.likes} beğenme</div>

            <div class="caption-section">
                <div class="caption-text">
                    <span class="username">${post.username}</span>${post.caption}
                </div>
                <div class="references">
                    <div class="ref-title">Kaynaklar:</div>
                    ${post.references}
                </div>
                ${post.comments && post.comments.length > 0 ? `
                <div class="comments-section" style="margin-top: 8px; font-size: 0.85rem;">
                    <div style="color: #8e8e8e; margin-bottom: 4px; cursor: pointer;">${post.comments.length} yorumun tümünü gör</div>
                    ${post.comments.map(comment => `
                        <div class="comment" style="margin-bottom: 4px;">
                            <span style="font-weight: 600; margin-right: 4px;">${comment.user}</span>
                            <span>${comment.text}</span>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
                <div class="timestamp" style="margin-top: 8px; font-size: 0.65rem; color: #8e8e8e; text-transform: uppercase;">
                    ${post.timestamp || '2 GÜN ÖNCE'}
                </div>
            </div>
        `;
        container.appendChild(postElement);
    });
}

const carouselState = {};

function moveCarousel(postId, direction) {
    if (!carouselState[postId]) {
        carouselState[postId] = 0;
    }
    const post = postsData.find(p => p.id === postId);
    const maxSlides = post.slides.length;
    let current = carouselState[postId];
    let next = current + direction;
    if (next < 0) next = 0;
    if (next >= maxSlides) next = maxSlides - 1;
    carouselState[postId] = next;
    const track = document.querySelector(`#carousel-${postId} .carousel-track`);
    const dots = document.querySelectorAll(`#carousel-${postId} .dot`);
    track.style.transform = `translateX(-${next * 100}%)`;
    dots.forEach((dot, index) => {
        if (index === next) dot.classList.add('active');
        else dot.classList.remove('active');
    });
}

function renderProfileGrid() {
    const gridContainer = document.getElementById('profile-grid');
    const gridPosts = [...postsData, ...postsData, ...postsData];
    gridPosts.forEach(post => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        const thumbSrc = post.slides[0].src;
        item.innerHTML = `<img src="${thumbSrc}" alt="Post Thumbnail">`;
        gridContainer.appendChild(item);
    });
}

function setupNavigation() {
    const homeBtn = document.querySelector('.fa-home');
    const profileBtn = document.querySelector('.profile-icon');
    const feedView = document.getElementById('feed-view');
    const profileView = document.getElementById('profile-view');
    homeBtn.addEventListener('click', () => {
        feedView.style.display = 'block';
        profileView.style.display = 'none';
        homeBtn.classList.add('active');
    });
    profileBtn.addEventListener('click', () => {
        feedView.style.display = 'none';
        profileView.style.display = 'block';
        homeBtn.classList.remove('active');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderFeed();
    renderProfileGrid();
    setupNavigation();
});

window.downloadSlide = function(elementId) {
    const element = document.getElementById(elementId);
    const btn = element.querySelector('button');
    if(btn) btn.style.display = 'none';
    html2canvas(element, { useCORS: true, scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = `yerelbodrum_post_${elementId}.png`;
        link.href = canvas.toDataURL();
        link.click();
        if(btn) btn.style.display = 'block';
    }).catch(err => {
        console.error('Download failed:', err);
        if(btn) btn.style.display = 'block';
    });
};