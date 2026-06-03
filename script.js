/* ══════════════════════════════════════════ */
const i18n={
  es:{
    'nav.hotel':'El Hotel','nav.gallery':'Galería','nav.rooms':'Habitaciones','nav.book':'Reservar',
    'hero.subtitle':'Hotel boutique entre el manglar y el mar',
    'hero.location':'3 min de la playa',
    'hero.eyebrow':'Mazunte, Oaxaca, México',
    'hero.cta.primary':'Reservar vía WhatsApp','hero.cta.secondary':'Ver habitaciones',
    'hero.scroll':'Descubrir',
    'trust.1':'Bungalows con cocina privada','trust.2':'WiFi & estacionamiento gratis',
    'trust.3':'Baño privado en todas las hab.','trust.4':'Disponible en Booking & Airbnb',
    'features.tag':'El lugar',
    'features.title':'Un refugio <em>lleno de vida</em><br>en el corazón de Mazunte',
    'gallery.tag':'Galería',
    'gallery.title':'Nuestra casa&nbsp;<em>es tu casa</em>',
    'gal.all':'Todo','gal.common':'Áreas Comunes','gal.kitchen':'Cocina','gal.mazunte':'Mazunte',
    'feat1.title':'Rodeados del manglar',
    'feat1.desc':'Despierta con el sonido de los pájaros. Nuestras áreas comunes con hamacas, sillas y mesas crean el ambiente perfecto para descansar y conectar.',
    'feat2.title':'A pocos pasos de la playa',
    'feat2.desc':'Playa El Rinconcito y Playa Mazunte a 3 minutos caminando. Punta Cometa —el punto más al sur de México— a solo 10 minutos caminando.',
    'feat3.title':'Cocina equipada',
    'feat3.desc':'Los bungalows cuentan con cocina privada. Las habitaciones en planta alta tienen acceso a nuestra cocina compartida totalmente equipada y café gratis por las mañanas.',
    'feat4.title':'Tortugas & delfines',
    'feat4.desc':'Tours de liberación de tortugas, avistamiento de delfines, ballenas y mantarrayas. La costa oaxaqueña en su forma más auténtica.',
    'feat5.title':'Bienestar & cultura',
    'feat5.desc':'Masajes, terapias alternativas, meditación, clases de danza y surf. Mazunte es un destino para reconectar con uno mismo.',
    'feat6.title':'Accesible a pie',
    'feat6.desc':'Todo Mazunte se recorre caminando. Restaurantes a 20 metros, el Museo de la Tortuga a 10 minutos. Las playas de San Agustinillo a 12 minutos.',
    'rooms.tag':'Alojamiento',
    'rooms.title':'Seis habitaciones,<br><em>una sola experiencia</em>',
    'rooms.booking.title':'Reserva directa — sin comisiones',
    'bf.help':'Selecciona tus datos y te enviamos la solicitud por WhatsApp',
    'bf.room':'Habitación','bf.guests':'Huéspedes','bf.checkin':'Llegada','bf.checkout':'Salida',
    'bf.select':'Seleccionar','bf.btn':'Confirmar disponibilidad vía WhatsApp',
    'bf.name':'Nombre','bf.phone':'Teléfono','bf.pay':'Método de pago',
    'bf.name.ph':'Tu nombre','bf.phone.ph':'+52 958 113 4155',
    'bf.pay1':'Transferencia bancaria','bf.pay2':'Depósito','bf.pay3':'Tarjeta de crédito/débito',
    'terms.accept':'Acepto los términos y condiciones. Se requiere el pago total y comprobante para confirmar la reserva.',
    'room1.type':'Bungalow Tierra · Planta baja','room1.name':'Bungalow Tierra con cocina privada',
    'room1.price':'desde <strong>$1,800</strong> MXN / noche <span style="display:block;font-size:.7rem;font-style:normal;opacity:.7">Precio base 2 personas · $300 por persona extra</span>',
    'room1.a1':'Capacidad hasta 4 personas','room1.a2':'Cocina privada completa',
    'room1.a3':'Refrigerador, microondas, cafetera','room1.a4':'Baño privado, A/C, ventilador',
    'room1.a5':'Acceso para movilidad reducida',
    'room2.type':'Doble estándar · Planta alta','room2.name':'Habitación doble con balcón',
    'room2.price':'desde <strong>$1,000</strong> MXN / noche <span style="display:block;font-size:.7rem;font-style:normal;opacity:.7">Precio base 2 personas · $300 por persona extra</span>',
    'room2.a1':'Capacidad hasta 2 personas','room2.a2':'Balcón privado',
    'room2.a3':'Cocina compartida equipada','room2.a4':'Café gratis cada mañana',
    'room2.a5':'Baño privado reducido pero funcional',
    'room3.type':'Familiar · Planta alta','room3.name':'Habitación familiar',
    'room3.price':'desde <strong>$1,300</strong> MXN / noche <span style="display:block;font-size:.7rem;font-style:normal;opacity:.7">Precio base 2 personas · $300 por persona extra</span>',
    'room3.a1':'Capacidad hasta 3 personas','room3.a2':'Cocina compartida equipada',
    'room3.a3':'Café gratis cada mañana','room3.a4':'Baño privado, A/C, ventilador',
    'room3.a5':'Mosquiteros incluidos',
    'room4.type':'Superior · Planta alta','room4.name':'Habitación superior',
    'room4.price':'desde <strong>$1,600</strong> MXN / noche <span style="display:block;font-size:.7rem;font-style:normal;opacity:.7">Precio base 2 personas · $300 por persona extra</span>',
    'room4.a1':'Capacidad hasta 4 personas','room4.a2':'Cocina compartida equipada',
    'room4.a3':'Café gratis cada mañana','room4.a4':'Baño privado, A/C, ventilador',
    'room4.a5':'Niños bienvenidos',
    'room5.type':'Bungalow Cielo · Planta baja','room5.name':'Bungalow Cielo con cocina privada',
    'room5.price':'desde <strong>$1,900</strong> MXN / noche <span style="display:block;font-size:.7rem;font-style:normal;opacity:.7">Precio base 2 personas · $300 por persona extra</span>',
    'room5.a1':'Capacidad hasta 4 personas','room5.a2':'Cocina privada completa',
    'room5.a3':'Refrigerador, microondas, cafetera','room5.a4':'Baño privado, A/C, ventilador',
    'room5.a5':'Ligeramente más amplio',
    'room6.type':'Doble Deluxe · Planta alta','room6.name':'Habitación doble Deluxe con balcón',
    'room6.price':'desde <strong>$1,100</strong> MXN / noche <span style="display:block;font-size:.7rem;font-style:normal;opacity:.7">Precio base 2 personas · $300 por persona extra</span>',
    'room6.a1':'Capacidad hasta 2 personas','room6.a2':'Balcón privado',
    'room6.a3':'Cocina compartida equipada','room6.a4':'Café gratis cada mañana',
    'room6.a5':'Baño amplio',
    'stats.rooms':'Habitaciones','stats.beach':'Min a la playa',
    'stats.cometa':'Min a Punta Cometa','stats.airport':'Km del aeropuerto',
    'cta.title':'¿Listo para tu<br><em>escapada a Mazunte?</em>',
    'cta.text':'Escríbenos por WhatsApp para reserva directa 15% más barato que en las plataformas. Te respondemos con disponibilidad y tarifas al momento.',
    'cta.btn.primary':'Reserva por WhatsApp y ahorra hasta un 15%',
    'cta.btn.secondary':'Buscar en Booking',
    'cta.checkin':'Check-in 14:00–20:00 · Check-out 11:00<br>Requiere aviso previo de llegada e identificación oficial de todos los huéspedes',
    'footer.desc':'Hotel boutique de estilo mexicano rodeado de manglar, entre las playas de Mazunte y la selva oaxaqueña.',
    'footer.nav':'Navegar','footer.reservations':'Reservas','footer.hotel':'El Hotel',
    'footer.gallery':'Galería','footer.rooms':'Habitaciones','footer.contact':'Contacto',
    'footer.awards':'Premios','footer.whatsapp':'WhatsApp directo',
    'footer.copy':'© 2026 Casa Mazunte Tierra Viva · Mazunte, Santa María Tonameca, Oaxaca, México',
    'footer.policies':'Por respeto a fauna local no se admiten mascotas · Niños de todas las edades son bienvenidos · Se puede fumar solo en espacios abiertos',
    'theme.label':'🌙'
  },
  en:{
    'nav.hotel':'The Hotel','nav.gallery':'Gallery','nav.rooms':'Rooms','nav.book':'Book Now',
    'hero.eyebrow':'Mazunte, Oaxaca, Mexico',
    'hero.subtitle':'Boutique hotel between the mangrove and the sea',
    'hero.location':'3 min from the beach',
    'hero.cta.primary':'Book via WhatsApp','hero.cta.secondary':'View Rooms',
    'hero.scroll':'Discover',
    'trust.1':'Bungalows with private kitchen','trust.2':'Free WiFi & parking',
    'trust.3':'Private bathroom in all rooms','trust.4':'Also on Booking & Airbnb',
    'features.tag':'The Place',
    'features.title':'A refuge <em>full of life</em><br>in the heart of Mazunte',
    'feat1.title':'Surrounded by mangrove',
    'feat1.desc':'Wake up to the sound of birds. Our common areas with hammocks, chairs and tables create the perfect setting to truly rest and reconnect.',
    'feat2.title':'Steps from the beach',
    'feat2.desc':'El Rinconcito and Mazunte Beach just 3 minutes on foot. Punta Cometa — Mexico\'s southernmost tip — only 10 minutes away.',
    'feat3.title':'Equipped kitchen',
    'feat3.desc':'Bungalows have a full private kitchen. Upstairs rooms share a fully equipped communal kitchen with complimentary morning coffee.',
    'feat4.title':'Turtles & dolphins',
    'feat4.desc':'Turtle release tours, dolphin, whale and manta ray watching. The Oaxacan coast in its most authentic form.',
    'feat5.title':'Wellness & culture',
    'feat5.desc':'Massages, alternative therapies, meditation, dance classes and surf. Mazunte is a destination to reconnect with yourself.',
    'feat6.title':'Walkable',
    'feat6.desc':'All of Mazunte is walkable. Restaurants 20 meters away, the Turtle Museum 10 minutes on foot. San Agustinillo and Mermejita beaches 12 minutes.',
    'rooms.tag':'Accommodation',
    'rooms.title':'Six rooms,<br><em>one single experience</em>',
    'rooms.booking.title':'Direct booking — no commissions',
    'bf.help':'Fill in your details and we\'ll send you the request via WhatsApp',
    'bf.room':'Room','bf.guests':'Guests','bf.checkin':'Check-in','bf.checkout':'Check-out',
    'bf.select':'Select','bf.btn':'Confirm availability via WhatsApp',
    'bf.name':'Name','bf.phone':'Phone','bf.pay':'Payment method',
    'bf.name.ph':'Your name','bf.phone.ph':'+52 958 113 4155',
    'bf.pay1':'Bank transfer','bf.pay2':'Deposit','bf.pay3':'Credit/debit card',
    'terms.accept':'I accept the terms and conditions. Full payment and proof of payment are required to confirm the reservation.',
    'gallery.tag':'Gallery',
    'gallery.title':'Make yourself&nbsp;<em>at home</em>',
    'gal.all':'All','gal.common':'Common Areas','gal.kitchen':'Kitchen','gal.mazunte':'Mazunte',
    'room1.type':'Bungalow Tierra · Ground floor','room1.name':'Bungalow Tierra with private kitchen',
    'room1.price':'from <strong>$1,800</strong> MXN / night <span style="display:block;font-size:.7rem;font-style:normal;opacity:.7">Base price 2 guests · $300 per extra guest</span>',
    'room1.a1':'Up to 4 guests','room1.a2':'Full private kitchen',
    'room1.a3':'Fridge, microwave, coffee maker','room1.a4':'Private bathroom, A/C, fan',
    'room1.a5':'Reduced mobility access',
    'room2.type':'Double standard · Upper floor','room2.name':'Double room with balcony',
    'room2.price':'from <strong>$1,000</strong> MXN / night <span style="display:block;font-size:.7rem;font-style:normal;opacity:.7">Base price 2 guests · $300 per extra guest</span>',
    'room2.a1':'Up to 2 guests','room2.a2':'Private balcony',
    'room2.a3':'Shared equipped kitchen','room2.a4':'Free coffee every morning',
    'room2.a5':'Compact but functional private bathroom',
    'room3.type':'Family room · Upper floor','room3.name':'Family room',
    'room3.price':'from <strong>$1,300</strong> MXN / night <span style="display:block;font-size:.7rem;font-style:normal;opacity:.7">Base price 2 guests · $300 per extra guest</span>',
    'room3.a1':'Up to 3 guests','room3.a2':'Shared equipped kitchen',
    'room3.a3':'Free coffee every morning','room3.a4':'Private bathroom, A/C, fan',
    'room3.a5':'Mosquito nets included',
    'room4.type':'Superior room · Upper floor','room4.name':'Superior room',
    'room4.price':'from <strong>$1,600</strong> MXN / night <span style="display:block;font-size:.7rem;font-style:normal;opacity:.7">Base price 2 guests · $300 per extra guest</span>',
    'room4.a1':'Up to 4 guests','room4.a2':'Shared equipped kitchen',
    'room4.a3':'Free coffee every morning','room4.a4':'Private bathroom, A/C, fan',
    'room4.a5':'Children welcome',
    'room5.type':'Bungalow Cielo · Ground floor','room5.name':'Bungalow Cielo with private kitchen',
    'room5.price':'from <strong>$1,900</strong> MXN / night <span style="display:block;font-size:.7rem;font-style:normal;opacity:.7">Base price 2 guests · $300 per extra guest</span>',
    'room5.a1':'Up to 4 guests','room5.a2':'Full private kitchen',
    'room5.a3':'Fridge, microwave, coffee maker','room5.a4':'Private bathroom, A/C, fan',
    'room5.a5':'Slightly more spacious',
    'room6.type':'Double Deluxe · Upper floor','room6.name':'Double Deluxe room with balcony',
    'room6.price':'from <strong>$1,100</strong> MXN / night <span style="display:block;font-size:.7rem;font-style:normal;opacity:.7">Base price 2 guests · $300 per extra guest</span>',
    'room6.a1':'Up to 2 guests','room6.a2':'Private balcony',
    'room6.a3':'Shared equipped kitchen','room6.a4':'Free coffee every morning',
    'room6.a5':'Spacious bathroom',
    'stats.rooms':'Rooms','stats.beach':'Min to the beach',
    'stats.cometa':'Min to Punta Cometa','stats.airport':'Km from airport',
    'cta.title':'Ready for your<br><em>Mazunte escape?</em>',
    'cta.text':'Message us on WhatsApp for a direct booking, 15% cheaper than on platforms. We reply instantly with availability and rates.',
    'cta.btn.primary':'Book on WhatsApp — save up to 15%',
    'cta.btn.secondary':'Search on Booking',
    'cta.checkin':'Check-in 2:00–8:00 PM · Check-out 10:30–11:00 AM<br>Advance notice of arrival and valid photo ID are required for all guests',
    'footer.desc':'Mexican-style boutique hotel surrounded by mangrove, between the beaches of Mazunte and the Oaxacan jungle.',
    'footer.nav':'Navigate','footer.reservations':'Bookings','footer.hotel':'The Hotel',
    'footer.gallery':'Gallery','footer.rooms':'Rooms','footer.contact':'Contact',
    'footer.awards':'Awards','footer.whatsapp':'Direct WhatsApp',
    'footer.copy':'© 2026 Casa Mazunte Tierra Viva · Mazunte, Santa María Tonameca, Oaxaca, Mexico',
    'footer.policies':'Out of respect for the local wildlife, pets are not allowed · Children of all ages are welcome · Smoking is permitted only in open areas',
    'theme.label':'🌙'
  },
  fr:{
    'nav.hotel':'L\'Hôtel','nav.gallery':'Galerie','nav.rooms':'Chambres','nav.book':'Réserver',
    'hero.eyebrow':'Mazunte, Oaxaca, Mexique',
    'hero.subtitle':'Hôtel boutique entre la mangrove et la mer',
    'hero.location':'3 min de la plage',
    'hero.cta.primary':'Réserver via WhatsApp','hero.cta.secondary':'Voir les chambres',
    'hero.scroll':'Découvrir',
    'trust.1':'Bungalows avec cuisine privée','trust.2':'WiFi & parking gratuits',
    'trust.3':'Salle de bain privée dans toutes les chambres','trust.4':'Disponible sur Booking & Airbnb',
    'features.tag':'Le lieu',
    'features.title':'Un refuge <em>plein de vie</em><br>au cœur de Mazunte',
    'feat1.title':'Entourés de mangrove',
    'feat1.desc':'Réveillez-vous au son des oiseaux. Nos espaces communs avec hamacs, chaises et tables créent l\'ambiance parfaite pour se reposer et se retrouver.',
    'feat2.title':'À deux pas de la plage',
    'feat2.desc':'Plage El Rinconcito et Plage Mazunte à 3 minutes à pied. Punta Cometa — la pointe la plus au sud du Mexique — à seulement 10 minutes.',
    'feat3.title':'Cuisine équipée',
    'feat3.desc':'Les bungalows disposent d\'une cuisine privée complète. Les chambres à l\'étage ont accès à une cuisine commune entièrement équipée avec café gratuit le matin.',
    'feat4.title':'Tortues & dauphins',
    'feat4.desc':'Tours de libération de tortues, observation de dauphins, baleines et raies mantas. La côte oaxacaine dans sa forme la plus authentique.',
    'feat5.title':'Bien-être & culture',
    'feat5.desc':'Massages, thérapies alternatives, méditation, cours de danse et surf. Mazunte est une destination pour se reconnecter à soi-même.',
    'feat6.title':'Accessible à pied',
    'feat6.desc':'Tout Mazunte se fait à pied. Restaurants à 20 mètres, le Musée de la Tortue à 10 minutes. Plages de San Agustinillo et Mermejita à 12 minutes.',
    'rooms.tag':'Hébergement',
    'rooms.title':'Six chambres,<br><em>une seule expérience</em>',
    'rooms.booking.title':'Réservation directe — sans commission',
    'bf.help':'Remplissez vos données et nous vous envoyons la demande par WhatsApp',
    'bf.room':'Chambre','bf.guests':'Personnes','bf.checkin':'Arrivée','bf.checkout':'Départ',
    'bf.select':'Choisir','bf.btn':'Confirmer la disponibilité par WhatsApp',
    'bf.name':'Nom','bf.phone':'Téléphone','bf.pay':'Moyen de paiement',
    'bf.name.ph':'Votre nom','bf.phone.ph':'+52 958 113 4155',
    'bf.pay1':'Virement bancaire','bf.pay2':'Dépôt','bf.pay3':'Carte de crédit/débit',
    'terms.accept':'J\'accepte les termes et conditions. Le paiement total et le justificatif sont requis pour confirmer la réservation.',
    'gallery.tag':'Galerie',
    'gallery.title':'Faites comme&nbsp;<em>chez vous</em>',
    'gal.all':'Tout','gal.common':'Espaces Communs','gal.kitchen':'Cuisine','gal.mazunte':'Mazunte',
    'room1.type':'Bungalow Tierra · Rez-de-chaussée','room1.name':'Bungalow Tierra avec cuisine privée',
    'room1.price':'à partir de <strong>$1 800</strong> MXN / nuit <span style="display:block;font-size:.7rem;font-style:normal;opacity:.7">Prix de base 2 personnes · 300 $ par personne supplémentaire</span>',
    'room1.a1':'Jusqu\'à 4 personnes','room1.a2':'Cuisine privée complète',
    'room1.a3':'Réfrigérateur, micro-ondes, cafetière','room1.a4':'Salle de bain privée, A/C, ventilateur',
    'room1.a5':'Accès mobilité réduite',
    'room2.type':'Double standard · Étage','room2.name':'Chambre double avec balcon',
    'room2.price':'à partir de <strong>$1 000</strong> MXN / nuit <span style="display:block;font-size:.7rem;font-style:normal;opacity:.7">Prix de base 2 personnes · 300 $ par personne supplémentaire</span>',
    'room2.a1':'Jusqu\'à 2 personnes','room2.a2':'Balcon privé',
    'room2.a3':'Cuisine commune équipée','room2.a4':'Café gratuit chaque matin',
    'room2.a5':'Salle de bain réduite mais fonctionnelle',
    'room3.type':'Familiale · Étage','room3.name':'Chambre familiale',
    'room3.price':'à partir de <strong>$1 300</strong> MXN / nuit <span style="display:block;font-size:.7rem;font-style:normal;opacity:.7">Prix de base 2 personnes · 300 $ par personne supplémentaire</span>',
    'room3.a1':'Jusqu\'à 3 personnes','room3.a2':'Cuisine commune équipée',
    'room3.a3':'Café gratuit chaque matin','room3.a4':'Salle de bain privée, A/C, ventilateur',
    'room3.a5':'Moustiquaires incluses',
    'room4.type':'Supérieure · Étage','room4.name':'Chambre supérieure',
    'room4.price':'à partir de <strong>$1 600</strong> MXN / nuit <span style="display:block;font-size:.7rem;font-style:normal;opacity:.7">Prix de base 2 personnes · 300 $ par personne supplémentaire</span>',
    'room4.a1':'Jusqu\'à 4 personnes','room4.a2':'Cuisine commune équipée',
    'room4.a3':'Café gratuit chaque matin','room4.a4':'Salle de bain privée, A/C, ventilateur',
    'room4.a5':'Enfants bienvenus',
    'room5.type':'Bungalow Cielo · Rez-de-chaussée','room5.name':'Bungalow Cielo avec cuisine privée',
    'room5.price':'à partir de <strong>$1 900</strong> MXN / nuit <span style="display:block;font-size:.7rem;font-style:normal;opacity:.7">Prix de base 2 personnes · 300 $ par personne supplémentaire</span>',
    'room5.a1':'Jusqu\'à 4 personnes','room5.a2':'Cuisine privée complète',
    'room5.a3':'Réfrigérateur, micro-ondes, cafetière','room5.a4':'Salle de bain privée, A/C, ventilateur',
    'room5.a5':'Légèrement plus spacieux',
    'room6.type':'Double Deluxe · Étage','room6.name':'Chambre double Deluxe avec balcon',
    'room6.price':'à partir de <strong>$1 100</strong> MXN / nuit <span style="display:block;font-size:.7rem;font-style:normal;opacity:.7">Prix de base 2 personnes · 300 $ par personne supplémentaire</span>',
    'room6.a1':'Jusqu\'à 2 personnes','room6.a2':'Balcon privé',
    'room6.a3':'Cuisine commune équipée','room6.a4':'Café gratuit chaque matin',
    'room6.a5':'Salle de bain spacieuse',
    'stats.rooms':'Chambres','stats.beach':'Min de la plage',
    'stats.cometa':'Min de Punta Cometa','stats.airport':'Km de l\'aéroport',
    'cta.title':'Prêt pour votre<br><em>escapade à Mazunte?</em>',
    'cta.text':'Écrivez-nous sur WhatsApp pour une réservation directe, 15% moins cher que sur les plateformes. Nous répondons instantanément.',
    'cta.btn.primary':'Réservez sur WhatsApp — économisez 15%',
    'cta.btn.secondary':'Chercher sur Booking',
    'cta.checkin':'Check-in 14h00–20h00 · Check-out 11h00<br>Avis d\'arrivée préalable requis et une pièce d\'identité officielle pour tous les clients',
    'footer.desc':'Hôtel boutique de style mexicain entouré de mangrove, entre les plages de Mazunte et la jungle oaxacaine.',
    'footer.nav':'Navigation','footer.reservations':'Réservations','footer.hotel':'L\'Hôtel',
    'footer.gallery':'Galerie','footer.rooms':'Chambres','footer.contact':'Contact',
    'footer.awards':'Récompenses','footer.whatsapp':'WhatsApp direct',
    'footer.copy':'© 2026 Casa Mazunte Tierra Viva · Mazunte, Santa María Tonameca, Oaxaca, Mexique',
    'footer.policies':'Par respect pour la faune locale, les animaux de compagnie ne sont pas admis<br>Les enfants de tous âges sont les bienvenus<br>Il est permis de fumer uniquement dans les espaces extérieurs',
    'theme.label':'🌙'
  }
};

let currentLang='es';

function setLang(lang){
  currentLang=lang;
  document.documentElement.lang=lang;
  // Update text nodes
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    if(i18n[lang][key]!==undefined) el.textContent=i18n[lang][key];
  });
  // Update HTML nodes
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const key=el.getAttribute('data-i18n-html');
    if(i18n[lang][key]!==undefined) el.innerHTML=i18n[lang][key];
  });
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key=el.getAttribute('data-i18n-placeholder');
    if(i18n[lang][key]!==undefined) el.placeholder=i18n[lang][key];
  });
  // Update lang buttons
  document.querySelectorAll('[data-lang-btn]').forEach(btn=>{
    btn.classList.toggle('active',btn.getAttribute('data-lang-btn')===lang);
  });
  // Save preference
  localStorage.setItem('tv-lang',lang);
}

/* ── THEME ── */
let isDark=false;
function toggleTheme(){
  isDark=!isDark;
  document.documentElement.setAttribute('data-theme',isDark?'dark':'light');
  const icon=isDark?'☀️':'🌙';
  const themeBtn=document.getElementById('theme-btn');
  const mobileThemeBtn=document.getElementById('mobile-theme-btn');
  if(themeBtn) themeBtn.textContent=icon;
  if(mobileThemeBtn) mobileThemeBtn.textContent=isDark?'☀️ Tema claro':'🌙 Tema oscuro';
  localStorage.setItem('tv-theme',isDark?'dark':'light');
}

/* ── INIT preferences ── */
(function initPrefs(){
  const savedTheme=localStorage.getItem('tv-theme');
  if(savedTheme==='dark'){isDark=true;document.documentElement.setAttribute('data-theme','dark');const b=document.getElementById('theme-btn');if(b)b.textContent='☀️';}
  const savedLang=localStorage.getItem('tv-lang');
  if(savedLang&&i18n[savedLang]) setLang(savedLang);
})();

/* ── LOADER ── */
window.addEventListener('load',()=>{
  setTimeout(()=>document.getElementById('loader').classList.add('hidden'),1100);
});

/* ── VIDEO FADE IN ── */
const heroVideo=document.getElementById('hero-video');
if(heroVideo){
  heroVideo.addEventListener('canplay',()=>{heroVideo.style.opacity='.8';});
}

/* ── NAVBAR SCROLL ── */
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{
  navbar.classList.toggle('scrolled',window.scrollY>60);
},{passive:true});

/* ── MOBILE MENU ── */
const toggle=document.getElementById('nav-toggle');
const mobileMenu=document.getElementById('nav-mobile');
const closeBtn=document.getElementById('nav-close');
function closeMobile(){
  toggle.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow='';
}
if(toggle){
  toggle.addEventListener('click',()=>{
    toggle.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow=mobileMenu.classList.contains('open')?'hidden':'';
  });
  closeBtn.addEventListener('click',closeMobile);
  document.querySelectorAll('.mobile-link').forEach(a=>a.addEventListener('click',closeMobile));
}

/* ── CURSOR ── */
const cur=document.getElementById('cursor');
const ring=document.getElementById('cursor-ring');
if(cur&&ring&&window.matchMedia('(pointer:fine)').matches){
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{
    mx=e.clientX;my=e.clientY;
    cur.style.left=mx+'px';cur.style.top=my+'px';
  });
  (function animRing(){
    rx+=(mx-rx)*.12;ry+=(my-ry)*.12;
    ring.style.left=rx+'px';ring.style.top=ry+'px';
    requestAnimationFrame(animRing);
  })();
  document.querySelectorAll('a,button,.feat-card,.room-card').forEach(el=>{
    el.addEventListener('mouseenter',()=>{cur.classList.add('hover');ring.classList.add('hover')});
    el.addEventListener('mouseleave',()=>{cur.classList.remove('hover');ring.classList.remove('hover')});
  });
}

/* ── PARALLAX HERO ── */
const heroContent=document.getElementById('hero-content');
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  if(y<window.innerHeight){
    if(heroContent) heroContent.style.transform=`translateY(${y*.26}px)`;
    if(heroVideo) heroVideo.style.transform=`translateY(${y*.1}px) scale(1.04)`;
  }
},{passive:true});

/* ── SCROLL REVEAL ── */
const revealEls=document.querySelectorAll('.reveal');
const revealIO=new IntersectionObserver(entries=>{
  let d=0;
  entries.forEach(e=>{
    if(e.isIntersecting){
      setTimeout(()=>e.target.classList.add('visible'),d);
      d+=80;revealIO.unobserve(e.target);
    }
  });
},{threshold:.1,rootMargin:'0px 0px -30px 0px'});
revealEls.forEach(el=>revealIO.observe(el));

/* ── COUNTERS ── */
function animCounter(el,target,dur=1400){
  let s=null;
  const ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
  const step=ts=>{
    if(!s)s=ts;const p=Math.min((ts-s)/dur,1);
    el.textContent=Math.floor(ease(p)*target);
    if(p<1)requestAnimationFrame(step);else el.textContent=target;
  };
  requestAnimationFrame(step);
}
const statIO=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){animCounter(e.target,+e.target.dataset.target);statIO.unobserve(e.target);}
  });
},{threshold:.5});
document.querySelectorAll('.stat-number[data-target]').forEach(el=>statIO.observe(el));

/* ── TILT 3D ── */
document.querySelectorAll('.room-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=((e.clientX-r.left)/r.width-.5)*10;
    const y=-((e.clientY-r.top)/r.height-.5)*10;
    card.style.transform=`perspective(900px) rotateY(${x}deg) rotateX(${y}deg) translateZ(8px)`;
  });
  card.addEventListener('mouseleave',()=>{
    card.style.transform='perspective(900px) rotateY(0) rotateX(0) translateZ(0)';
  });
});

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const href = a.getAttribute('href');
    // ignore empty hashes ("#") or missing hrefs
    if(!href || href === '#') return;
    let t = null;
    try{ t = document.querySelector(href); }catch(err){ t = null; }
    if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth',block:'start'}); }
  });
});

/* ══════════════════════════════════════════
   GALLERY FILTER
══════════════════════════════════════════ */
document.querySelectorAll('.gal-filter').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const filter=btn.dataset.filter;
    // update active button
    document.querySelectorAll('.gal-filter').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    // show/hide items
    document.querySelectorAll('.gal-item').forEach(item=>{
      const match=filter==='all'||item.dataset.cat===filter;
      item.classList.toggle('gal-hidden',!match);
    });
  });
});

/* ══════════════════════════════════════════
   LIGHTBOX
══════════════════════════════════════════ */
const lb=document.getElementById('lightbox');
const lbImg=document.getElementById('lb-img');
const lbCaption=document.getElementById('lb-caption');
const lbCounter=document.getElementById('lb-counter');

// collect all gallery items
let lbItems=[];
let lbCurrent=0;

function buildLbItems(){
  lbItems=[...document.querySelectorAll('.gal-item:not(.gal-hidden)')];
}

function openLightbox(el){
  buildLbItems();
  lbCurrent=lbItems.indexOf(el);
  showLbSlide(lbCurrent);
  lb.classList.add('open');
  document.body.style.overflow='hidden';
}

function showLbSlide(idx){
  const item=lbItems[idx];
  if(!item) return;
  const img=item.querySelector('img');
  const full=item.dataset.full||img.src;
  lbImg.src=full;
  lbImg.alt=img.alt;
  lbCaption.textContent=item.dataset.caption||'';
  lbCounter.textContent=`${idx+1} / ${lbItems.length}`;
}

function closeLightbox(){
  lb.classList.remove('open');
  document.body.style.overflow='';
  setTimeout(()=>{lbImg.src='';},350);
}

document.getElementById('lb-close').addEventListener('click',closeLightbox);
lb.addEventListener('click',e=>{if(e.target===lb)closeLightbox();});

document.getElementById('lb-prev').addEventListener('click',()=>{
  lbCurrent=(lbCurrent-1+lbItems.length)%lbItems.length;
  showLbSlide(lbCurrent);
});
document.getElementById('lb-next').addEventListener('click',()=>{
  lbCurrent=(lbCurrent+1)%lbItems.length;
  showLbSlide(lbCurrent);
});

document.addEventListener('keydown',e=>{
  if(!lb.classList.contains('open'))return;
  if(e.key==='Escape')closeLightbox();
  if(e.key==='ArrowLeft'){lbCurrent=(lbCurrent-1+lbItems.length)%lbItems.length;showLbSlide(lbCurrent);}
  if(e.key==='ArrowRight'){lbCurrent=(lbCurrent+1)%lbItems.length;showLbSlide(lbCurrent);}
});

/* ══════════════════════════════════════════
   ROOM PHOTO CAROUSELS
══════════════════════════════════════════ */
document.querySelectorAll('[data-carousel]').forEach(carousel=>{
  const slides=carousel.querySelector('.room-slides');
  const dots=[...carousel.querySelectorAll('.room-photo-dot')];
  const total=dots.length;
  let cur=0;
  let startX=0;
  let dragging=false;

  function goTo(idx){
    cur=(idx+total)%total;
    slides.style.transform=`translateX(-${cur*100}%)`;
    dots.forEach((d,i)=>d.classList.toggle('active',i===cur));
  }

  carousel.querySelector('.room-photo-prev').addEventListener('click',e=>{
    e.stopPropagation();goTo(cur-1);
  });
  carousel.querySelector('.room-photo-next').addEventListener('click',e=>{
    e.stopPropagation();goTo(cur+1);
  });
  dots.forEach((d,i)=>d.addEventListener('click',e=>{e.stopPropagation();goTo(i);}));

  // touch swipe support
  slides.addEventListener('touchstart',e=>{startX=e.touches[0].clientX;dragging=true;},{passive:true});
  slides.addEventListener('touchend',e=>{
    if(!dragging)return;dragging=false;
    const dx=e.changedTouches[0].clientX-startX;
    if(Math.abs(dx)>40) dx<0?goTo(cur+1):goTo(cur-1);
  });
});

/* ══════════════════════════════════════════
   BOOKING FORM → WHATSAPP
══════════════════════════════════════════ */
const maxGuests={
  'Bungalow Tierra ($1,800)':4,
  'Bungalow Cielo ($1,900)':4,
  'Doble estándar con balcón ($1,000)':2,
  'Doble Deluxe con balcón ($1,100)':2,
  'Habitación familiar ($1,300)':3,
  'Habitación superior ($1,600)':4
};

const bfRoom=document.getElementById('bf-room');
const bfGuests=document.getElementById('bf-guests');
const bfCheckin=document.getElementById('bf-checkin');
const bfCheckout=document.getElementById('bf-checkout');
const ppEl=document.getElementById('price-preview');
const ppNight=document.getElementById('pp-night');
const ppGuests=document.getElementById('pp-guests');
const ppNights=document.getElementById('pp-nights');
const ppTotal=document.getElementById('pp-total');

function calcPrice(){
  const room=bfRoom.value;
  const guests=parseInt(bfGuests.value);
  const ci=bfCheckin.value,co=bfCheckout.value;
  if(!room||!ci||!co){ppEl.style.display='none';return}
  const nights=Math.round((new Date(co)-new Date(ci))/86400000);
  if(nights<1){ppEl.style.display='none';return}
  const base=parseInt(room.match(/\((\$)?([\d,]+)\)/)?.[2]?.replace(',','')||'0',10);
  const extra=Math.max(0,guests-2);
  const pn=base+extra*300;
  const total=pn*nights;
  ppNight.textContent=pn.toLocaleString('es-MX');
  ppGuests.textContent=guests;
  ppNights.textContent=nights;
  ppTotal.textContent=total.toLocaleString('es-MX');
  ppEl.style.display='block';
}

bfRoom.addEventListener('change',function(){
  const max=maxGuests[this.value]||4;
  const cur=parseInt(bfGuests.value);
  bfGuests.innerHTML='';
  for(let i=1;i<=max;i++){
    const opt=document.createElement('option');
    opt.value=i;opt.textContent=i;
    if(i===Math.min(cur||2,max)) opt.selected=true;
    bfGuests.appendChild(opt);
  }
  calcPrice();
});
bfGuests.addEventListener('change',calcPrice);
bfCheckin.addEventListener('change',calcPrice);
bfCheckout.addEventListener('change',calcPrice);

function sendBooking(e){
  e.preventDefault();
  const room=bfRoom.value;
  const guests=parseInt(bfGuests.value);
  const name=document.getElementById('bf-name').value.trim();
  const phone=document.getElementById('bf-phone').value.trim();
  const pay=document.getElementById('bf-pay').value;
  const checkin=bfCheckin.value;
  const checkout=bfCheckout.value;
  if(!room||!checkin||!checkout||!name||!phone) return false;
  const max=maxGuests[room]||4;
  if(guests>max){alert(`Esta habitación admite máximo ${max} persona(s).`);return false}
  const fmt=d=>{const p=d.split('-');return `${p[2]}/${p[1]}/${p[0]}`};
  const nights=Math.round((new Date(checkout)-new Date(checkin))/86400000);
  if(nights<1){alert('La salida debe ser después de la llegada.');return false}
  const base=parseInt(room.match(/\((\$)?([\d,]+)\)/)?.[2]?.replace(',','')||'0',10);
  const extra=Math.max(0,guests-2);
  const pn=base+extra*300;
  const total=pn*nights;
  const totFmt=total.toLocaleString('es-MX');
  const terms=i18n[currentLang]?.['terms.accept']||i18n['es']['terms.accept'];
  const msg=`Hola, quiero reservar en Casa Mazunte Tierra Viva.%0A%0A`+
    `Nombre: ${name}%0A`+
    `Teléfono: ${phone}%0A`+
    `Habitación: ${room}%0A`+
    `Llegada: ${fmt(checkin)}%0A`+
    `Salida: ${fmt(checkout)}%0A`+
    `Huéspedes: ${guests}%0A`+
    `Noches: ${nights}%0A`+
    `Método de pago: ${pay}%0A%0A`+
    `Total estimado: $${totFmt} MXN%0A%0A`+
    `${terms}`;
  window.open(`https://wa.me/529581134155?text=${msg}`,'_blank');
  return false;
}
// Set min date on booking form inputs to today
(function(){const t=new Date();const d=t.toISOString().split('T')[0];if(bfCheckin){bfCheckin.min=d}if(bfCheckout){bfCheckout.min=d}})();
