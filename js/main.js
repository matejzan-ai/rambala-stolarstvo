/* ==========================================================================
   Rambala Stolarstvo - Main JavaScript
   ========================================================================== */

(function () {
    'use strict';

    /* ---- Translations ---- */
    const translations = {
        sk: {
            'nav.about': 'O nás',
            'nav.services': 'Služby',
            'nav.projects': 'Naša práca',
            'nav.testimonials': 'Referencie',
            'nav.contact': 'Kontakt',
            'nav.cta': 'Nezáväzná ponuka',

            'hero.badge': 'Rodinné stolárstvo od roku 2004',
            'hero.title1': 'Dizajnový nábytok',
            'hero.title2': 'na mieru',
            'hero.subtitle': 'Precízne spracovanie a detaily, na ktorých nám záleží. Premieňame vaše predstavy na unikátne kusy nábytku.',
            'hero.cta': 'Nezáväzná cenová ponuka',
            'hero.cta2': 'Pozrite našu prácu',
            'hero.quote': 'Hľadali sme niekoho, kto si potrpí na detaily. Kvalita spracovania dreva a presnosť montáže sú na špičkovej úrovni.',

            'about.label': 'O nás',
            'about.title1': 'Majstri na detaily',
            'about.title2': 'a poctivé drevo',
            'about.expLabel': 'rokov skúseností',
            'about.text': 'Sme rodinné stolárstvo, ktoré mení vaše predstavy na skutočnosť s dôrazom na precíznosť a kvalitu. Vďaka rokom skúseností s výrobou kuchýň, vstavaných skríň a interiérového nábytku prinášame do vašich domovov remeslo, ktoré vydrží generácie.',
            'about.stat1': 'Rokov praxe',
            'about.stat2': 'Hotových projektov',
            'about.stat3': 'Spokojní klienti',

            'services.label': 'Služby',
            'services.title': 'Čomu sa venujeme',
            'services.subtitle': 'Vyberte si zo širokej ponuky stolárskych prác prispôsobených vašim potrebám.',
            'services.s1.title': 'Kuchyne na mieru',
            'services.s1.text': 'Navrhujeme a vyrábame kuchyne, ktoré sú srdcom domova. Čistý moderný dizajn alebo nadčasová klasika – dbáme na ergonómiu, kvalitné kovania a precíznu montáž.',
            'services.s2.title': 'Vstavané skrine a šatníky',
            'services.s2.text': 'Maximálne využitie každého centimetra. Navrhneme vám úložné priestory, ktoré dokonale splynú s interiérom a poskytnú vám potrebný poriadok a komfort.',
            'services.s3.title': 'Interiérový nábytok',
            'services.s3.text': 'Od dizajnových obývacích stien a komôd až po postele a nočné stolíky. Vyrábame kusy nábytku, ktoré dávajú priestoru charakter a vydržia celé generácie.',
            'services.s4.title': 'Dvere a zárubne',
            'services.s4.text': 'Kvalitné interiérové aj vchodové dvere s dôrazom na bezpečnosť a estetiku. Drevené masívne dvere dodajú vášmu bývaniu pocit luxusu a tepla.',
            'services.s5.title': 'Schody a zábradlia',
            'services.s5.text': 'Realizujeme samonosné drevené schodiská alebo obklady betónových schodov. Každý schod je precízne opracovaný, aby bol bezpečný a vizuálne príťažlivý.',
            'services.s6.title': 'Exteriérové práce',
            'services.s6.text': 'Práca s drevom v exteriéri od A po Z. Drevené fasády, terasy, altánky či pergoly, ktoré odolajú počasiu a spríjemnia váš čas na záhrade.',

            'projects.label': 'Projekty',
            'projects.title': 'Inšpirujte sa našou prácou',
            'projects.subtitle': 'Pozrite sa, ako sme premenili predstavy našich klientov na poctivé kusy nábytku.',
            'projects.p1.tag': 'Kuchyňa',
            'projects.p1.time': '4 týždne',
            'projects.p1.title': 'Moderná kuchyňa na mieru',
            'projects.p1.text': 'Premena kuchynského priestoru na moderné a funkčné miesto pre rodinu. Použili sme kombináciu prírodného dubu s matnými tmavými povrchmi.',
            'projects.p1.quote': '„Naša nová kuchyňa je nielen krásna, ale aj nesmierne praktická. Komunikácia bola od začiatku jasná a výsledok je špičkový."',
            'projects.p2.tag': 'Renovácia',
            'projects.p2.time': '2 týždne',
            'projects.p2.title': 'Renovácia historických dverí',
            'projects.p2.text': 'Kompletná obnova vchodových dverí v historickom centre mesta. Cieľom bolo vrátiť dverám ich pôvodnú eleganciu a zároveň modernizovať ich funkčnosť.',
            'projects.p2.quote': '„Renovácia našich dverí dopadla na jednotku. Pán stolár mal zmysel pre detail."',
            'projects.p3.tag': 'Kúpeľňa',
            'projects.p3.time': '3 týždne',
            'projects.p3.title': 'Kúpeľňový nábytok z prémiového dreva',
            'projects.p3.text': 'Pre túto kúpeľňu sme navrhli a vyrobili nábytok, ktorý spája luxus s odolnosťou. Použili sme špeciálne upravené drevo, ktoré hravo zvláda vlhkosť.',
            'projects.p3.quote': '„Kvalita vypracovania drevených detailov je špičková a nábytok vyzerá fantasticky aj po roku používania."',

            'process.label': 'Postup',
            'process.title': 'Ako pracujeme',
            'process.step1.title': 'Konzultácia',
            'process.step1.text': 'Stretneme sa, vypočujeme vaše potreby a spoločne naplánujeme váš projekt.',
            'process.step2.title': 'Návrh',
            'process.step2.text': 'Pripravíme detailný návrh s vizualizáciou a presnou cenovou ponukou.',
            'process.step3.title': 'Výroba',
            'process.step3.text': 'V našej dielni precízne vyrábame každý kus podľa schváleného návrhu.',
            'process.step4.title': 'Montáž',
            'process.step4.text': 'Profesionálna montáž priamo u vás doma s dôrazom na každý detail.',

            'testimonials.label': 'Referencie',
            'testimonials.title': 'Čo o nás hovoria klienti',
            'testimonials.t1.text': 'S novou kuchyňou sme nadmieru spokojní. Remeselné spracovanie je na špičkovej úrovni a prístup bol od začiatku až do konca maximálne profesionálny.',
            'testimonials.t1.project': 'Kuchyňa na mieru',
            'testimonials.t2.text': 'Skvelá komunikácia a dodržanie termínov. Tím presne pochopil našu predstavu o drevených detailoch v kúpeľni a výsledok vyzerá ešte lepšie ako na vizualizácii.',
            'testimonials.t2.project': 'Kúpeľňový nábytok',
            'testimonials.t3.text': 'Hľadali sme niekoho na náročné riešenie do podkrovia. Zmysel pre detail a kvalita materiálov nás milo prekvapili.',
            'testimonials.t3.project': 'Podkrovný nábytok',
            'testimonials.t4.text': 'Pán stolár nám kompletne zmenil terasu a vonkajšie sedenie. Práca bola hotová presne načas a výsledný vzhľad dreva je proste dokonalý.',
            'testimonials.t4.project': 'Terasa a exteriér',
            'testimonials.t5.text': 'Od prvej konzultácie až po poslednú lištu – všetko prebehlo podľa plánu. Naše bývanie je teraz vďaka nábytku na mieru priestranné, moderné a útulné.',
            'testimonials.t5.project': 'Kompletný interiér',
            'testimonials.t6.text': 'Fantastické remeslo! Renovácia našich vchodových dverí bola urobená s nesmiernou precíznosťou. Priestor teraz pôsobí luxusne.',
            'testimonials.t6.project': 'Renovácia dverí',

            'contact.label': 'Kontakt',
            'contact.title': 'Ozvite sa nám',
            'contact.text': 'Máte nápad na projekt alebo otázky k našej práci? Neváhajte nás kontaktovať – radi s vami prekonzultujeme vašu víziu.',
            'contact.workshop': 'Dielňa',
            'contact.phone': 'Telefón',
            'contact.form.name': 'Meno a priezvisko',
            'contact.form.email': 'E-mail',
            'contact.form.phone': 'Telefónne číslo',
            'contact.form.message': 'Správa',
            'contact.form.consent': 'Súhlasím so spracovaním osobných údajov podľa <a href="legal/privacy.html">zásad ochrany súkromia</a>.',
            'contact.form.submit': 'Odoslať správu',
            'contact.form.success': 'Správa bola úspešne odoslaná. Ďakujeme!',

            'footer.desc': 'Dizajnový nábytok na mieru s dôrazom na kvalitu a precíznosť.',
            'footer.links': 'Odkazy',
            'footer.legal': 'Právne informácie',
            'footer.privacy': 'Ochrana súkromia',
            'footer.terms': 'Obchodné podmienky',
            'footer.cookies': 'Cookie politika',
            'footer.impressum': 'Impressum',
            'footer.contactTitle': 'Kontakt',
            'footer.rights': 'Všetky práva vyhradené.',
            'footer.eu': 'Táto stránka spĺňa požiadavky GDPR (EU 2016/679) a ePrivacy direktívy.',

            'cookie.title': 'Používame cookies',
            'cookie.text': 'Táto stránka používa cookies na zlepšenie vášho zážitku. Funkcionálne cookies sú nevyhnutné pre správne fungovanie stránky.',
            'cookie.necessary': 'Nevyhnutné',
            'cookie.analytics': 'Analytické',
            'cookie.reject': 'Odmietnuť',
            'cookie.acceptSelected': 'Prijať vybrané',
            'cookie.acceptAll': 'Prijať všetky',
            'cookie.moreInfo': 'Viac informácií',
        },
        en: {
            'nav.about': 'About',
            'nav.services': 'Services',
            'nav.projects': 'Our Work',
            'nav.testimonials': 'Reviews',
            'nav.contact': 'Contact',
            'nav.cta': 'Get a Quote',

            'hero.badge': 'Family carpentry since 2004',
            'hero.title1': 'Custom-made',
            'hero.title2': 'furniture',
            'hero.subtitle': 'Precision craftsmanship and attention to detail. We transform your ideas into unique pieces of furniture.',
            'hero.cta': 'Get a Free Quote',
            'hero.cta2': 'View Our Work',
            'hero.quote': 'We were looking for someone who pays attention to detail. The quality of woodwork and precision of assembly are top-notch.',

            'about.label': 'About Us',
            'about.title1': 'Masters of detail',
            'about.title2': 'and honest wood',
            'about.expLabel': 'years of experience',
            'about.text': 'We are a family-owned carpentry workshop that turns your ideas into reality with emphasis on precision and quality. With years of experience in manufacturing kitchens, built-in wardrobes and interior furniture, we bring craftsmanship that lasts generations to your home.',
            'about.stat1': 'Years of experience',
            'about.stat2': 'Completed projects',
            'about.stat3': 'Satisfied clients',

            'services.label': 'Services',
            'services.title': 'What we offer',
            'services.subtitle': 'Choose from a wide range of carpentry services tailored to your needs.',
            'services.s1.title': 'Custom Kitchens',
            'services.s1.text': 'We design and build kitchens that are the heart of every home. Clean modern design or timeless classics – we focus on ergonomics, quality fittings and precise installation.',
            'services.s2.title': 'Built-in Wardrobes',
            'services.s2.text': 'Maximum use of every centimeter. We design storage solutions that perfectly blend with your interior and provide the order and comfort you need.',
            'services.s3.title': 'Interior Furniture',
            'services.s3.text': 'From designer living room walls and dressers to beds and nightstands. We create furniture pieces that give spaces character and last generations.',
            'services.s4.title': 'Doors & Frames',
            'services.s4.text': 'Quality interior and entrance doors with emphasis on safety and aesthetics. Solid wood doors add a feeling of luxury and warmth to your home.',
            'services.s5.title': 'Stairs & Railings',
            'services.s5.text': 'We build self-supporting wooden staircases or concrete stair cladding. Every step is precisely crafted to be safe and visually appealing.',
            'services.s6.title': 'Exterior Work',
            'services.s6.text': 'Woodwork for outdoor spaces from A to Z. Wooden facades, terraces, gazebos and pergolas that withstand the weather and make your garden time enjoyable.',

            'projects.label': 'Projects',
            'projects.title': 'Get inspired by our work',
            'projects.subtitle': 'See how we turned our clients\' visions into honest pieces of furniture.',
            'projects.p1.tag': 'Kitchen',
            'projects.p1.time': '4 weeks',
            'projects.p1.title': 'Modern Custom Kitchen',
            'projects.p1.text': 'Transforming a kitchen space into a modern and functional place for the family. We used a combination of natural oak with matte dark surfaces.',
            'projects.p1.quote': '"Our new kitchen is not only beautiful but incredibly practical. Communication was clear from the start and the result is outstanding."',
            'projects.p2.tag': 'Renovation',
            'projects.p2.time': '2 weeks',
            'projects.p2.title': 'Historic Door Renovation',
            'projects.p2.text': 'Complete restoration of entrance doors in the historic city center. The goal was to restore the doors\' original elegance while modernizing their functionality.',
            'projects.p2.quote': '"The renovation of our doors was perfect. The carpenter had an eye for detail."',
            'projects.p3.tag': 'Bathroom',
            'projects.p3.time': '3 weeks',
            'projects.p3.title': 'Premium Wood Bathroom Furniture',
            'projects.p3.text': 'For this bathroom, we designed and built furniture that combines luxury with durability. We used specially treated wood that handles moisture with ease.',
            'projects.p3.quote': '"The quality of the wooden details is outstanding and the furniture looks fantastic even after a year of use."',

            'process.label': 'Process',
            'process.title': 'How we work',
            'process.step1.title': 'Consultation',
            'process.step1.text': 'We meet, listen to your needs and plan your project together.',
            'process.step2.title': 'Design',
            'process.step2.text': 'We prepare a detailed design with visualization and precise pricing.',
            'process.step3.title': 'Production',
            'process.step3.text': 'In our workshop, we precisely craft every piece according to the approved design.',
            'process.step4.title': 'Installation',
            'process.step4.text': 'Professional installation at your home with attention to every detail.',

            'testimonials.label': 'Reviews',
            'testimonials.title': 'What our clients say',
            'testimonials.t1.text': 'We are extremely satisfied with our new kitchen. The craftsmanship is top-notch and the approach was maximally professional from start to finish.',
            'testimonials.t1.project': 'Custom Kitchen',
            'testimonials.t2.text': 'Great communication and deadlines were met. The team understood our vision for wooden details in the bathroom and the result looks even better than the visualization.',
            'testimonials.t2.project': 'Bathroom Furniture',
            'testimonials.t3.text': 'We were looking for someone for a challenging attic solution. The attention to detail and material quality pleasantly surprised us.',
            'testimonials.t3.project': 'Attic Furniture',
            'testimonials.t4.text': 'The carpenter completely transformed our terrace and outdoor seating. The work was done right on time and the wood finish is simply perfect.',
            'testimonials.t4.project': 'Terrace & Exterior',
            'testimonials.t5.text': 'From the first consultation to the last trim – everything went according to plan. Our home is now spacious, modern and cozy thanks to custom furniture.',
            'testimonials.t5.project': 'Complete Interior',
            'testimonials.t6.text': 'Fantastic craftsmanship! The renovation of our entrance doors was done with incredible precision. The space now feels luxurious.',
            'testimonials.t6.project': 'Door Renovation',

            'contact.label': 'Contact',
            'contact.title': 'Get in touch',
            'contact.text': 'Have a project idea or questions about our work? Don\'t hesitate to contact us – we\'ll be happy to discuss your vision.',
            'contact.workshop': 'Workshop',
            'contact.phone': 'Phone',
            'contact.form.name': 'Full name',
            'contact.form.email': 'Email',
            'contact.form.phone': 'Phone number',
            'contact.form.message': 'Message',
            'contact.form.consent': 'I agree to the processing of personal data according to the <a href="legal/privacy.html">privacy policy</a>.',
            'contact.form.submit': 'Send message',
            'contact.form.success': 'Message sent successfully. Thank you!',

            'footer.desc': 'Custom furniture with emphasis on quality and precision.',
            'footer.links': 'Links',
            'footer.legal': 'Legal',
            'footer.privacy': 'Privacy Policy',
            'footer.terms': 'Terms & Conditions',
            'footer.cookies': 'Cookie Policy',
            'footer.impressum': 'Impressum',
            'footer.contactTitle': 'Contact',
            'footer.rights': 'All rights reserved.',
            'footer.eu': 'This website complies with GDPR (EU 2016/679) and the ePrivacy Directive.',

            'cookie.title': 'We use cookies',
            'cookie.text': 'This website uses cookies to improve your experience. Functional cookies are necessary for the proper functioning of the site.',
            'cookie.necessary': 'Necessary',
            'cookie.analytics': 'Analytics',
            'cookie.reject': 'Reject',
            'cookie.acceptSelected': 'Accept selected',
            'cookie.acceptAll': 'Accept all',
            'cookie.moreInfo': 'More information',
        },
        de: {
            'nav.about': '\u00DCber uns',
            'nav.services': 'Leistungen',
            'nav.projects': 'Projekte',
            'nav.testimonials': 'Referenzen',
            'nav.contact': 'Kontakt',
            'nav.cta': 'Angebot anfordern',

            'hero.badge': 'Familientischlerei seit 2004',
            'hero.title1': 'Ma\u00DFgefertigte',
            'hero.title2': 'M\u00F6bel',
            'hero.subtitle': 'Pr\u00E4zise Verarbeitung und Liebe zum Detail. Wir verwandeln Ihre Vorstellungen in einzigartige M\u00F6belst\u00FCcke.',
            'hero.cta': 'Kostenloses Angebot',
            'hero.cta2': 'Unsere Arbeit ansehen',
            'hero.quote': 'Wir suchten jemanden, der auf Details achtet. Die Qualit\u00E4t der Holzverarbeitung und die Pr\u00E4zision der Montage sind erstklassig.',

            'about.label': '\u00DCber uns',
            'about.title1': 'Meister der Details',
            'about.title2': 'und ehrliches Holz',
            'about.expLabel': 'Jahre Erfahrung',
            'about.text': 'Wir sind eine Familientischlerei, die Ihre Vorstellungen mit Schwerpunkt auf Pr\u00E4zision und Qualit\u00E4t in die Realit\u00E4t umsetzt. Dank unserer langj\u00E4hrigen Erfahrung in der Herstellung von K\u00FCchen, Einbauschr\u00E4nken und Innenm\u00F6beln bringen wir Handwerk, das Generationen \u00FCberdauert.',
            'about.stat1': 'Jahre Erfahrung',
            'about.stat2': 'Fertige Projekte',
            'about.stat3': 'Zufriedene Kunden',

            'services.label': 'Leistungen',
            'services.title': 'Was wir anbieten',
            'services.subtitle': 'W\u00E4hlen Sie aus unserem breiten Angebot an Tischlerarbeiten, die auf Ihre Bed\u00FCrfnisse zugeschnitten sind.',
            'services.s1.title': 'Ma\u00DFK\u00FCchen',
            'services.s1.text': 'Wir entwerfen und fertigen K\u00FCchen, die das Herz des Hauses sind. Klares modernes Design oder zeitlose Klassik \u2013 wir achten auf Ergonomie, hochwertige Beschl\u00E4ge und pr\u00E4zise Montage.',
            'services.s2.title': 'Einbauschr\u00E4nke',
            'services.s2.text': 'Maximale Nutzung jedes Zentimeters. Wir entwerfen Stauraum, der perfekt mit dem Interieur verschmilzt und Ihnen Ordnung und Komfort bietet.',
            'services.s3.title': 'Innenm\u00F6bel',
            'services.s3.text': 'Von Designer-Wohnw\u00E4nden und Kommoden bis hin zu Betten und Nachttischen. Wir fertigen M\u00F6belst\u00FCcke, die R\u00E4umen Charakter verleihen.',
            'services.s4.title': 'T\u00FCren & Zargen',
            'services.s4.text': 'Hochwertige Innen- und Eingangst\u00FCren mit Schwerpunkt auf Sicherheit und \u00C4sthetik. Massive Holzt\u00FCren verleihen Ihrem Zuhause ein Gef\u00FChl von Luxus.',
            'services.s5.title': 'Treppen & Gel\u00E4nder',
            'services.s5.text': 'Wir realisieren freitragende Holztreppen oder Verkleidungen f\u00FCr Betontreppen. Jede Stufe ist pr\u00E4zise gefertigt.',
            'services.s6.title': 'Au\u00DFenarbeiten',
            'services.s6.text': 'Holzarbeiten im Au\u00DFenbereich von A bis Z. Holzfassaden, Terrassen, Pavillons und Pergolen, die dem Wetter standhalten.',

            'projects.label': 'Projekte',
            'projects.title': 'Lassen Sie sich inspirieren',
            'projects.subtitle': 'Sehen Sie, wie wir die Visionen unserer Kunden in ehrliche M\u00F6belst\u00FCcke verwandelt haben.',
            'projects.p1.tag': 'K\u00FCche',
            'projects.p1.time': '4 Wochen',
            'projects.p1.title': 'Moderne Ma\u00DFK\u00FCche',
            'projects.p1.text': 'Umgestaltung eines K\u00FCchenraums in einen modernen und funktionalen Ort f\u00FCr die Familie. Wir verwendeten eine Kombination aus nat\u00FCrlicher Eiche mit matten dunklen Oberfl\u00E4chen.',
            'projects.p1.quote': '\u201EUnsere neue K\u00FCche ist nicht nur sch\u00F6n, sondern auch unglaublich praktisch. Die Kommunikation war von Anfang an klar.\u201C',
            'projects.p2.tag': 'Renovierung',
            'projects.p2.time': '2 Wochen',
            'projects.p2.title': 'Historische T\u00FCrenrenovierung',
            'projects.p2.text': 'Komplette Restaurierung von Eingangst\u00FCren im historischen Stadtzentrum. Ziel war es, die urspr\u00FCngliche Eleganz wiederherzustellen.',
            'projects.p2.quote': '\u201EDie Renovierung unserer T\u00FCren war perfekt. Der Tischler hatte ein Auge f\u00FCrs Detail.\u201C',
            'projects.p3.tag': 'Badezimmer',
            'projects.p3.time': '3 Wochen',
            'projects.p3.title': 'Premium-Badezimmerm\u00F6bel',
            'projects.p3.text': 'F\u00FCr dieses Badezimmer haben wir M\u00F6bel entworfen, die Luxus mit Langlebigkeit verbinden. Speziell behandeltes Holz, das Feuchtigkeit spielend bew\u00E4ltigt.',
            'projects.p3.quote': '\u201EDie Qualit\u00E4t der Holzdetails ist erstklassig und die M\u00F6bel sehen auch nach einem Jahr Nutzung fantastisch aus.\u201C',

            'process.label': 'Ablauf',
            'process.title': 'So arbeiten wir',
            'process.step1.title': 'Beratung',
            'process.step1.text': 'Wir treffen uns, h\u00F6ren Ihre Bed\u00FCrfnisse und planen gemeinsam Ihr Projekt.',
            'process.step2.title': 'Entwurf',
            'process.step2.text': 'Wir erstellen einen detaillierten Entwurf mit Visualisierung und genauem Kostenvoranschlag.',
            'process.step3.title': 'Fertigung',
            'process.step3.text': 'In unserer Werkstatt fertigen wir jedes St\u00FCck pr\u00E4zise nach dem genehmigten Entwurf.',
            'process.step4.title': 'Montage',
            'process.step4.text': 'Professionelle Montage direkt bei Ihnen zu Hause mit Liebe zum Detail.',

            'testimonials.label': 'Referenzen',
            'testimonials.title': 'Was unsere Kunden sagen',
            'testimonials.t1.text': 'Mit unserer neuen K\u00FCche sind wir \u00FCberaus zufrieden. Die handwerkliche Verarbeitung ist erstklassig und der Ansatz war von Anfang bis Ende maximal professionell.',
            'testimonials.t1.project': 'Ma\u00DFK\u00FCche',
            'testimonials.t2.text': 'Hervorragende Kommunikation und Einhaltung der Termine. Das Team verstand unsere Vorstellung von Holzdetails im Bad perfekt.',
            'testimonials.t2.project': 'Badezimmerm\u00F6bel',
            'testimonials.t3.text': 'Wir suchten jemanden f\u00FCr eine anspruchsvolle Dachgeschossl\u00F6sung. Das Gesp\u00FCr f\u00FCr Details und die Materialqualit\u00E4t haben uns positiv \u00FCberrascht.',
            'testimonials.t3.project': 'Dachgeschossm\u00F6bel',
            'testimonials.t4.text': 'Der Tischler hat unsere Terrasse komplett ver\u00E4ndert. Die Arbeit war p\u00FCnktlich fertig und das Holzfinish ist einfach perfekt.',
            'testimonials.t4.project': 'Terrasse & Au\u00DFen',
            'testimonials.t5.text': 'Von der ersten Beratung bis zur letzten Leiste \u2013 alles lief nach Plan. Unser Zuhause ist jetzt dank Ma\u00DFm\u00F6beln ger\u00E4umig, modern und gem\u00FCtlich.',
            'testimonials.t5.project': 'Komplettes Interieur',
            'testimonials.t6.text': 'Fantastisches Handwerk! Die Renovierung unserer Eingangst\u00FCren wurde mit unglaublicher Pr\u00E4zision durchgef\u00FChrt.',
            'testimonials.t6.project': 'T\u00FCrenrenovierung',

            'contact.label': 'Kontakt',
            'contact.title': 'Kontaktieren Sie uns',
            'contact.text': 'Haben Sie eine Projektidee oder Fragen zu unserer Arbeit? Z\u00F6gern Sie nicht, uns zu kontaktieren.',
            'contact.workshop': 'Werkstatt',
            'contact.phone': 'Telefon',
            'contact.form.name': 'Vor- und Nachname',
            'contact.form.email': 'E-Mail',
            'contact.form.phone': 'Telefonnummer',
            'contact.form.message': 'Nachricht',
            'contact.form.consent': 'Ich stimme der Verarbeitung personenbezogener Daten gem\u00E4\u00DF der <a href="legal/privacy.html">Datenschutzerkl\u00E4rung</a> zu.',
            'contact.form.submit': 'Nachricht senden',
            'contact.form.success': 'Nachricht erfolgreich gesendet. Vielen Dank!',

            'footer.desc': 'Ma\u00DFgefertigte M\u00F6bel mit Schwerpunkt auf Qualit\u00E4t und Pr\u00E4zision.',
            'footer.links': 'Links',
            'footer.legal': 'Rechtliches',
            'footer.privacy': 'Datenschutz',
            'footer.terms': 'AGB',
            'footer.cookies': 'Cookie-Richtlinie',
            'footer.impressum': 'Impressum',
            'footer.contactTitle': 'Kontakt',
            'footer.rights': 'Alle Rechte vorbehalten.',
            'footer.eu': 'Diese Website entspricht der DSGVO (EU 2016/679) und der ePrivacy-Richtlinie.',

            'cookie.title': 'Wir verwenden Cookies',
            'cookie.text': 'Diese Website verwendet Cookies, um Ihr Erlebnis zu verbessern. Funktionale Cookies sind f\u00FCr das ordnungsgem\u00E4\u00DFe Funktionieren der Website erforderlich.',
            'cookie.necessary': 'Notwendig',
            'cookie.analytics': 'Analytisch',
            'cookie.reject': 'Ablehnen',
            'cookie.acceptSelected': 'Ausgew\u00E4hlte akzeptieren',
            'cookie.acceptAll': 'Alle akzeptieren',
            'cookie.moreInfo': 'Mehr Informationen',
        },
        pl: {
            'nav.about': 'O nas',
            'nav.services': 'Us\u0142ugi',
            'nav.projects': 'Realizacje',
            'nav.testimonials': 'Opinie',
            'nav.contact': 'Kontakt',
            'nav.cta': 'Bezp\u0142atna wycena',

            'hero.badge': 'Rodzinne stolarstwo od 2004',
            'hero.title1': 'Meble na',
            'hero.title2': 'wymiar',
            'hero.subtitle': 'Precyzyjne wykonanie i dba\u0142o\u015B\u0107 o detale. Zamieniamy Twoje pomys\u0142y w unikalne meble.',
            'hero.cta': 'Bezp\u0142atna wycena',
            'hero.cta2': 'Zobacz nasze prace',
            'hero.quote': 'Szukali\u015Bmy kogo\u015B, kto przywi\u0105zuje wag\u0119 do detali. Jako\u015B\u0107 obr\u00F3bki drewna i precyzja monta\u017Cu s\u0105 na najwy\u017Cszym poziomie.',

            'about.label': 'O nas',
            'about.title1': 'Mistrzowie detali',
            'about.title2': 'i uczciwe drewno',
            'about.expLabel': 'lat do\u015Bwiadczenia',
            'about.text': 'Jeste\u015Bmy rodzinnym stolarstwem, kt\u00F3re zamienia Twoje pomys\u0142y w rzeczywisto\u015B\u0107 z naciskiem na precyzj\u0119 i jako\u015B\u0107. Dzi\u0119ki wieloletniemu do\u015Bwiadczeniu w produkcji kuchni, szaf wn\u0119kowych i mebli wn\u0119trzarskich dostarczamy rzemios\u0142o, kt\u00F3re przetrwa pokolenia.',
            'about.stat1': 'Lat do\u015Bwiadczenia',
            'about.stat2': 'Uko\u0144czonych projekt\u00F3w',
            'about.stat3': 'Zadowolonych klient\u00F3w',

            'services.label': 'Us\u0142ugi',
            'services.title': 'Co oferujemy',
            'services.subtitle': 'Wybierz z szerokiej oferty prac stolarskich dostosowanych do Twoich potrzeb.',
            'services.s1.title': 'Kuchnie na wymiar',
            'services.s1.text': 'Projektujemy i produkujemy kuchnie, kt\u00F3re s\u0105 sercem domu. Czysty nowoczesny design lub ponadczasowa klasyka \u2013 dbamy o ergonomi\u0119, jako\u015Bciowe okucia i precyzyjny monta\u017C.',
            'services.s2.title': 'Szafy wn\u0119kowe',
            'services.s2.text': 'Maksymalne wykorzystanie ka\u017Cdego centymetra. Zaprojektujemy przestrzenie do przechowywania, kt\u00F3re idealnie wkomponuj\u0105 si\u0119 w wn\u0119trze.',
            'services.s3.title': 'Meble wn\u0119trzarskie',
            'services.s3.text': 'Od designerskich meblo\u015Bcianek i komód po \u0142\u00F3\u017Cka i szafki nocne. Tworzymy meble, kt\u00F3re nadaj\u0105 pomieszczeniom charakter.',
            'services.s4.title': 'Drzwi i o\u015Bcie\u017Cnice',
            'services.s4.text': 'Wysokiej jako\u015Bci drzwi wewn\u0119trzne i wej\u015Bciowe z naciskiem na bezpiecze\u0144stwo i estetyk\u0119. Lite drewniane drzwi dodaj\u0105 poczucia luksusu.',
            'services.s5.title': 'Schody i balustrady',
            'services.s5.text': 'Realizujemy samoNo\u015Bne schody drewniane lub ok\u0142adziny schod\u00F3w betonowych. Ka\u017Cdy stopie\u0144 jest precyzyjnie wykonany.',
            'services.s6.title': 'Prace zewn\u0119trzne',
            'services.s6.text': 'Prace z drewnem na zewn\u0105trz od A do Z. Drewniane elewacje, tarasy, altany i pergole, kt\u00F3re wytrzymaj\u0105 ka\u017Cd\u0105 pogod\u0119.',

            'projects.label': 'Realizacje',
            'projects.title': 'Zainspiruj si\u0119 nasz\u0105 prac\u0105',
            'projects.subtitle': 'Zobacz, jak zamienili\u015Bmy wizje naszych klient\u00F3w w solidne meble.',
            'projects.p1.tag': 'Kuchnia',
            'projects.p1.time': '4 tygodnie',
            'projects.p1.title': 'Nowoczesna kuchnia na wymiar',
            'projects.p1.text': 'Przekszta\u0142cenie przestrzeni kuchennej w nowoczesne i funkcjonalne miejsce dla rodziny. Zastosowali\u015Bmy po\u0142\u0105czenie naturalnego d\u0119bu z matowymi ciemnymi powierzchniami.',
            'projects.p1.quote': '\u201ENasza nowa kuchnia jest nie tylko pi\u0119kna, ale te\u017C niezwykle praktyczna. Komunikacja by\u0142a jasna od pocz\u0105tku.\u201D',
            'projects.p2.tag': 'Renowacja',
            'projects.p2.time': '2 tygodnie',
            'projects.p2.title': 'Renowacja zabytkowych drzwi',
            'projects.p2.text': 'Kompletna odnowa drzwi wej\u015Bciowych w historycznym centrum miasta. Celem by\u0142o przywr\u00F3cenie pierwotnej elegancji drzwi.',
            'projects.p2.quote': '\u201ERenowacja naszych drzwi by\u0142a perfekcyjna. Stolarz mia\u0142 oko do detali.\u201D',
            'projects.p3.tag': '\u0141azienka',
            'projects.p3.time': '3 tygodnie',
            'projects.p3.title': 'Meble \u0142azienkowe z drewna premium',
            'projects.p3.text': 'Dla tej \u0142azienki zaprojektowali\u015Bmy meble \u0142\u0105cz\u0105ce luksus z trwa\u0142o\u015Bci\u0105. Specjalnie obrobione drewno, kt\u00F3re \u015Bwietnie radzi sobie z wilgoci\u0105.',
            'projects.p3.quote': '\u201EJako\u015B\u0107 drewnianych detali jest najwy\u017Cszej klasy, a meble wygl\u0105daj\u0105 fantastycznie nawet po roku u\u017Cytkowania.\u201D',

            'process.label': 'Proces',
            'process.title': 'Jak pracujemy',
            'process.step1.title': 'Konsultacja',
            'process.step1.text': 'Spotykamy si\u0119, s\u0142uchamy Twoich potrzeb i wsp\u00F3lnie planujemy projekt.',
            'process.step2.title': 'Projekt',
            'process.step2.text': 'Przygotowujemy szczeg\u00F3\u0142owy projekt z wizualizacj\u0105 i dok\u0142adn\u0105 wycen\u0105.',
            'process.step3.title': 'Produkcja',
            'process.step3.text': 'W naszym warsztacie precyzyjnie wykonujemy ka\u017Cdy element wed\u0142ug zatwierdzonego projektu.',
            'process.step4.title': 'Monta\u017C',
            'process.step4.text': 'Profesjonalny monta\u017C bezpo\u015Brednio u Ciebie w domu z dba\u0142o\u015Bci\u0105 o ka\u017Cdy detal.',

            'testimonials.label': 'Opinie',
            'testimonials.title': 'Co m\u00F3wi\u0105 nasi klienci',
            'testimonials.t1.text': 'Z nowej kuchni jeste\u015Bmy niezwykle zadowoleni. Rzemie\u015Blnicze wykonanie jest na najwy\u017Cszym poziomie, a podej\u015Bcie by\u0142o od pocz\u0105tku do ko\u0144ca maksymalnie profesjonalne.',
            'testimonials.t1.project': 'Kuchnia na wymiar',
            'testimonials.t2.text': '\u015Awietna komunikacja i dotrzymanie termin\u00F3w. Zesp\u00F3\u0142 dok\u0142adnie zrozumia\u0142 nasz\u0105 wizj\u0119 drewnianych detali w \u0142azience.',
            'testimonials.t2.project': 'Meble \u0142azienkowe',
            'testimonials.t3.text': 'Szukali\u015Bmy kogo\u015B do wymagaj\u0105cego rozwi\u0105zania na poddasze. Wyczucie detali i jako\u015B\u0107 materia\u0142\u00F3w mi\u0142o nas zaskoczy\u0142y.',
            'testimonials.t3.project': 'Meble na poddasze',
            'testimonials.t4.text': 'Stolarz kompletnie zmieni\u0142 nasz taras i miejsce do siedzenia na zewn\u0105trz. Praca by\u0142a gotowa dok\u0142adnie na czas.',
            'testimonials.t4.project': 'Taras i exterior',
            'testimonials.t5.text': 'Od pierwszej konsultacji do ostatniej listwy \u2013 wszystko przebiega\u0142o wed\u0142ug planu. Nasze mieszkanie jest teraz przestronne, nowoczesne i przytulne.',
            'testimonials.t5.project': 'Kompletne wn\u0119trze',
            'testimonials.t6.text': 'Fantastyczne rzemios\u0142o! Renowacja naszych drzwi wej\u015Bciowych zosta\u0142a wykonana z niesamowit\u0105 precyzj\u0105.',
            'testimonials.t6.project': 'Renowacja drzwi',

            'contact.label': 'Kontakt',
            'contact.title': 'Skontaktuj si\u0119 z nami',
            'contact.text': 'Masz pomys\u0142 na projekt lub pytania dotycz\u0105ce naszej pracy? Nie wahaj si\u0119 z nami skontaktowa\u0107.',
            'contact.workshop': 'Warsztat',
            'contact.phone': 'Telefon',
            'contact.form.name': 'Imi\u0119 i nazwisko',
            'contact.form.email': 'E-mail',
            'contact.form.phone': 'Numer telefonu',
            'contact.form.message': 'Wiadomo\u015B\u0107',
            'contact.form.consent': 'Wyra\u017Cam zgod\u0119 na przetwarzanie danych osobowych zgodnie z <a href="legal/privacy.html">polityk\u0105 prywatno\u015Bci</a>.',
            'contact.form.submit': 'Wy\u015Blij wiadomo\u015B\u0107',
            'contact.form.success': 'Wiadomo\u015B\u0107 wys\u0142ana pomy\u015Blnie. Dzi\u0119kujemy!',

            'footer.desc': 'Meble na wymiar z naciskiem na jako\u015B\u0107 i precyzj\u0119.',
            'footer.links': 'Linki',
            'footer.legal': 'Informacje prawne',
            'footer.privacy': 'Polityka prywatno\u015Bci',
            'footer.terms': 'Regulamin',
            'footer.cookies': 'Polityka cookies',
            'footer.impressum': 'Impressum',
            'footer.contactTitle': 'Kontakt',
            'footer.rights': 'Wszelkie prawa zastrze\u017Cone.',
            'footer.eu': 'Ta strona jest zgodna z RODO (UE 2016/679) i dyrektyw\u0105 ePrivacy.',

            'cookie.title': 'U\u017Cywamy plik\u00F3w cookie',
            'cookie.text': 'Ta strona u\u017Cywa plik\u00F3w cookie w celu poprawy jako\u015Bci korzystania. Funkcjonalne pliki cookie s\u0105 niezb\u0119dne do prawid\u0142owego dzia\u0142ania strony.',
            'cookie.necessary': 'Niezb\u0119dne',
            'cookie.analytics': 'Analityczne',
            'cookie.reject': 'Odrzu\u0107',
            'cookie.acceptSelected': 'Akceptuj wybrane',
            'cookie.acceptAll': 'Akceptuj wszystkie',
            'cookie.moreInfo': 'Wi\u0119cej informacji',
        }
    };

    let currentLang = localStorage.getItem('rambala-lang') || 'sk';

    /* ---- Language Switching ---- */
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('rambala-lang', lang);
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            var text = translations[lang] && translations[lang][key];
            if (text) {
                if (text.includes('<a ')) {
                    el.innerHTML = text;
                } else {
                    el.textContent = text;
                }
            }
        });

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            setLanguage(this.dataset.lang);
        });
    });

    /* ---- Preloader ---- */
    window.addEventListener('load', function () {
        var preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(function () {
                preloader.classList.add('hidden');
                /* Trigger logo entrance — same timing as anim-fade-up images */
                setTimeout(function () {
                    document.querySelectorAll('.logo-anim').forEach(function (el) {
                        el.classList.add('visible');
                    });
                    /* Also reveal hero photo if present */
                    document.querySelectorAll('.hero-photo-reveal').forEach(function (el) {
                        el.classList.add('visible');
                    });
                }, 100);
            }, 1200);
        }
        setLanguage(currentLang);
    });

    /* ---- Navbar Scroll ---- */
    var navbar = document.getElementById('navbar');
    var backToTop = document.getElementById('back-to-top');

    function onScroll() {
        var scrollY = window.scrollY;
        if (navbar) {
            navbar.classList.toggle('scrolled', scrollY > 50);
        }
        if (backToTop) {
            backToTop.classList.toggle('visible', scrollY > 600);
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backToTop) {
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---- Mobile Menu ---- */
    var menuToggle = document.getElementById('menu-toggle');
    var mobileOverlay = document.getElementById('mobile-nav-overlay');

    if (menuToggle && mobileOverlay) {
        menuToggle.addEventListener('click', function () {
            var isOpen = mobileOverlay.classList.contains('open');
            mobileOverlay.classList.toggle('open');
            menuToggle.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', !isOpen);
            document.body.style.overflow = isOpen ? '' : 'hidden';
        });

        mobileOverlay.querySelectorAll('.mobile-nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileOverlay.classList.remove('open');
                menuToggle.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    /* ---- Smooth Scroll for Anchor Links ---- */
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* ---- Scroll Animations (Intersection Observer) ---- */
    var animElements = document.querySelectorAll('.anim-fade-up, .anim-fade-right, .anim-fade-left');

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10);
                    setTimeout(function () {
                        entry.target.classList.add('visible');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        animElements.forEach(function (el) { observer.observe(el); });
    } else {
        animElements.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ---- Animated Counters ---- */
    var counters = document.querySelectorAll('.stat-number[data-count]');

    if ('IntersectionObserver' in window && counters.length) {
        var counterObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function (el) { counterObserver.observe(el); });
    }

    function animateCounter(el) {
        var target = parseInt(el.getAttribute('data-count'), 10);
        var duration = 2000;
        var start = 0;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target;
            }
        }
        requestAnimationFrame(step);
    }

    /* ---- Active Nav Link on Scroll ---- */
    var sections = document.querySelectorAll('section[id]');

    function setActiveNav() {
        var scrollY = window.scrollY + 120;
        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');
            var link = document.querySelector('.nav-link[href="#' + id + '"]');
            if (link) {
                link.classList.toggle('active', scrollY >= top && scrollY < top + height);
            }
        });
    }
    window.addEventListener('scroll', setActiveNav, { passive: true });

    /* ---- Cookie Consent ---- */
    var cookieBanner = document.getElementById('cookie-banner');
    var cookieAcceptAll = document.getElementById('cookie-accept-all');
    var cookieAcceptSelected = document.getElementById('cookie-accept-selected');
    var cookieReject = document.getElementById('cookie-reject');
    var cookieAnalytics = document.getElementById('cookie-analytics');

    function getCookieConsent() {
        try { return JSON.parse(localStorage.getItem('rambala-cookies')); }
        catch (e) { return null; }
    }

    function setCookieConsent(consent) {
        localStorage.setItem('rambala-cookies', JSON.stringify(consent));
        dismissCookieBanner();
    }

    function dismissCookieBanner() {
        if (cookieBanner) {
            cookieBanner.classList.add('dismissed');
            setTimeout(function () { cookieBanner.hidden = true; }, 400);
        }
    }

    if (!getCookieConsent() && cookieBanner) {
        cookieBanner.hidden = false;
    }

    if (cookieAcceptAll) {
        cookieAcceptAll.addEventListener('click', function () {
            setCookieConsent({ necessary: true, analytics: true, timestamp: Date.now() });
        });
    }
    if (cookieAcceptSelected) {
        cookieAcceptSelected.addEventListener('click', function () {
            setCookieConsent({
                necessary: true,
                analytics: cookieAnalytics ? cookieAnalytics.checked : false,
                timestamp: Date.now()
            });
        });
    }
    if (cookieReject) {
        cookieReject.addEventListener('click', function () {
            setCookieConsent({ necessary: true, analytics: false, timestamp: Date.now() });
        });
    }

    /* ---- Contact Form ---- */
    var contactForm = document.getElementById('contact-form');
    var formSuccess = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            /* Basic client-side validation */
            var name = document.getElementById('form-name');
            var email = document.getElementById('form-email');
            var message = document.getElementById('form-message');
            var consent = document.getElementById('form-consent');

            if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
                return;
            }
            if (!consent.checked) {
                consent.focus();
                return;
            }

            /* In production, send data to a server. For now, show success. */
            if (formSuccess) {
                formSuccess.hidden = false;
            }
            contactForm.reset();
            setTimeout(function () {
                if (formSuccess) formSuccess.hidden = true;
            }, 5000);
        });
    }

    /* ---- Parallax on Hero (subtle) ---- */
    var heroContent = document.querySelector('.hero-content');
    window.addEventListener('scroll', function () {
        if (heroContent && window.scrollY < window.innerHeight) {
            var offset = window.scrollY * 0.3;
            heroContent.style.transform = 'translateY(' + offset + 'px)';
            heroContent.style.opacity = 1 - (window.scrollY / window.innerHeight) * 0.6;
        }
    }, { passive: true });

    /* ---- Flip Cards ---- */
    document.querySelectorAll('.service-flip').forEach(function (card) {
        var inner = card.querySelector('.service-flip-inner');
        var flipTimer = null;

        card.addEventListener('click', function () {
            clearTimeout(flipTimer);
            inner.classList.toggle('flipped');
        });

        card.addEventListener('mouseleave', function () {
            if (inner.classList.contains('flipped')) {
                flipTimer = setTimeout(function () {
                    inner.classList.remove('flipped');
                }, 3000);
            }
        });

        card.addEventListener('mouseenter', function () {
            clearTimeout(flipTimer);
        });
    });

})();
