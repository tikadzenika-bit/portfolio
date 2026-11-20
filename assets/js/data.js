/* პორტფოლიოს მთელი შინაარსი. ახალი ნამუშევრის დასამატებლად: დაამატე ჩანაწერი PROJECTS-ში
   და ჩააგდე სქრინშოტები assets/shots, assets/thumbs, assets/phone საქაღალდეებში. */

// კონტაქტი: ცარიელი ველი საიტზე არ ჩანს.
var CONTACT = {
  whatsapp: '',   // მაგ. '9955XXXXXXXX' (პლუსის გარეშე)
  phoneLabel: '', // მაგ. '+995 5XX XX XX XX'
  email: '',
  github: 'https://github.com/tikadzenika-bit'
};

var LIVE = 'https://tikadzenika-bit.github.io/';

// ფასი (price) ლარში: საიტის დონის მიახლოებითი ფასი. tier: 'a' სავიზიტო, 'b' ინტერაქტიული, 'c' ადმინ პანელით.
var PROJECTS = [
  { id: 'joker', type: 'barber', tier: 'c', price: 1700, name: 'JOKER Barbershop', url: LIVE + 'joker-barbershop/', shots: 7, langs: 'KA · EN · RU',
    ka: { cat: 'ბარბერშოპების ქსელი', place: 'ორი ფილიალი: ბახტრიონი და ყაზბეგი', what: 'სერვისები და ფასები, ბარბერები, ფილიალები, ნამუშევრები, ჩაწერა WhatsApp-ით, ადმინ პანელი ელფოსტით და პაროლით' },
    en: { cat: 'barbershop chain', place: 'Two branches: Bakhtrioni and Kazbegi', what: 'Services and prices, barbers, branches, work gallery, WhatsApp booking, admin panel with email login' } },
  { id: 'gentleman', type: 'barber', tier: 'c', price: 1600, name: 'Gentleman Barbershop', url: LIVE + 'gentleman-barbershop/', shots: 7, langs: 'KA · EN · RU',
    ka: { cat: 'ბარბერშოპი', place: 'საბურთალო, ბიძინა კვერნაძის 13', what: 'სლაიდები, პრაისი, ბარბერის არჩევა, ჩაწერა WhatsApp-ით, ადმინ პანელი' },
    en: { cat: 'barbershop', place: 'Saburtalo, 13 Bidzina Kvernadze St', what: 'Slides, price list, pick a barber, WhatsApp booking, admin panel' } },
  { id: 'liberty', type: 'barber', tier: 'c', price: 1500, name: 'Liberty Barbershop', url: LIVE + 'liberty-barbershop/', shots: 7, langs: 'KA · EN · RU',
    ka: { cat: 'ბარბერშოპი', place: 'ქეთევან დედოფლის გამზ. 64', what: 'პრაისი, ბარბერის არჩევა, ჩაწერა WhatsApp-ით, ადმინ პანელი' },
    en: { cat: 'barbershop', place: '64 Ketevan Dedopali Ave', what: 'Price list, pick a barber, WhatsApp booking, admin panel' } },
  { id: 'twobrothers', type: 'barber', tier: 'c', price: 1400, name: 'Two Brothers Barbershop', url: LIVE + 'two-brothers-barbershop/', shots: 7, langs: 'KA · EN · RU',
    ka: { cat: 'ბარბერშოპი', place: 'მუხიანი', what: 'სლაიდები, პრაისი, ჩაწერა WhatsApp-ით, ადმინ პანელი' },
    en: { cat: 'barbershop', place: 'Mukhiani', what: 'Slides, price list, WhatsApp booking, admin panel' } },
  { id: 'khurjini', type: 'shop', tier: 'b', price: 1200, name: 'Khurjini', url: LIVE + 'khurjini/', shots: 7, langs: 'EN · KA · RU',
    ka: { cat: 'სანელებლების მაღაზია', place: 'ძველი თბილისი, ანტონ კათალიკოსის 27', what: 'რამდენიმე ნივთის არჩევა და სიის გაგზავნა WhatsApp-ით, სანელებლების გზამკვლევი, სასაჩუქრე ნაკრებები' },
    en: { cat: 'spice shop', place: 'Old Tbilisi, 27 Anton Katalikosi St', what: 'Pick several items and send the list on WhatsApp, spice guide, gift sets' } },
  { id: 'spaguletti', type: 'food', tier: 'b', price: 1100, name: 'Spaguletti', url: LIVE + 'spaguletti/', shots: 7, langs: 'KA · EN · RU',
    ka: { cat: 'ნაყინი და ვაფლი', place: 'ვაშლოვანის 1 / კოსტავას 21', what: 'გემოების მენიუ, „ააწყე შენი ჭიქა“ და შეკვეთა WhatsApp-ით, „ღიაა ახლა“' },
    en: { cat: 'ice cream & waffles', place: '1 Vashlovani / 21 Kostava St', what: 'Flavour menu, build-your-cup with WhatsApp order, open-now badge' } },
  { id: 'matasse', type: 'food', tier: 'b', price: 1100, name: 'Matasse1822', url: LIVE + 'matasse/', shots: 7, langs: 'KA · EN · RU',
    ka: { cat: 'საკონდიტრო', place: 'ძველი თბილისი, ვერცხლის 40', what: 'ვიტრინა საათის მიხედვით, დესერტის გადადება WhatsApp-ით, ინტერიერი ალისის თემით' },
    en: { cat: 'patisserie', place: 'Old Tbilisi, 40 Vertskhli St', what: 'Display case by time of day, keep-a-dessert on WhatsApp, Alice-themed interior' } },
  { id: 'lampino', type: 'shop', tier: 'a', price: 1000, name: 'Lampino', url: LIVE + 'lampino/', shots: 7, langs: 'KA · EN',
    ka: { cat: 'ხელნაკეთი ლამპები', place: 'ანტონ ფურცელაძის 30', what: 'კოლექცია ფილტრით, შეკვეთა WhatsApp-ით ნივთის სახელით, ინდივიდუალური შეკვეთა' },
    en: { cat: 'handmade lamps', place: '30 Anton Purtseladze St', what: 'Collection with filters, WhatsApp order that names the item, custom orders' } },
  { id: 'lea', type: 'guest', tier: 'a', price: 1000, name: 'Guest House Lea', url: LIVE + 'lea/', shots: 7, langs: 'EN · KA · RU',
    ka: { cat: 'სასტუმრო სახლი', place: 'ძველი თბილისი, გრიშაშვილის 25', what: 'თარიღების არჩევა და მოთხოვნა WhatsApp-ით, რა არის ახლოს' },
    en: { cat: 'guest house', place: 'Old Tbilisi, 25 Grishashvili St', what: 'Pick dates and ask on WhatsApp, what is nearby' } },
  { id: 'umbrella', type: 'guest', tier: 'a', price: 1000, name: 'Guest House Umbrella', url: LIVE + 'umbrella/', shots: 7, langs: 'EN · KA · RU',
    ka: { cat: 'სასტუმრო სახლი', place: 'ისანი, გუჯარეთის 35', what: 'თარიღების არჩევა და მოთხოვნა WhatsApp-ით, როგორ მოვიდე' },
    en: { cat: 'guest house', place: 'Isani, 35 Gujareti St', what: 'Pick dates and ask on WhatsApp, getting around' } },
  { id: 'whenin', type: 'guest', tier: 'a', price: 1000, name: 'When in Tbilisi', url: LIVE + 'when-in-tbilisi/', shots: 7, langs: 'EN · KA · RU',
    ka: { cat: 'სასტუმრო სახლი', place: 'ჩუღურეთი, გოგი დოლიძის 18', what: 'თარიღების არჩევა და მოთხოვნა WhatsApp-ით, სტუმრების შეფასებები' },
    en: { cat: 'guest house', place: 'Chugureti, 18 Gogi Dolidze St', what: 'Pick dates and ask on WhatsApp, guest ratings' } },
  { id: 'impress', type: 'salon', tier: 'a', price: 900, name: 'Impress Beauty Club', url: LIVE + 'Impress-beauty-salon/index-2.html', shots: 7, langs: 'EN',
    ka: { cat: 'სილამაზის სალონი', place: 'ვაკე', what: 'სერვისები და ფასები კატეგორიებით, ონლაინ ჩაწერა, კითხვები' },
    en: { cat: 'beauty salon', place: 'Vake', what: 'Services and prices by category, online booking, FAQ' } },
  { id: 'madmen', type: 'barber', tier: 'a', price: 800, name: 'Mad Men', url: LIVE + 'Mad-Men-Barbershop/', shots: 5, langs: 'KA',
    ka: { cat: 'ბარბერშოპი', place: 'გლდანი, ილია ვეკუას 16ა', what: 'ფასების დაფა, ონლაინ ჩაწერა, რუკა' },
    en: { cat: 'barbershop', place: 'Gldani, 16a Ilia Vekua St', what: 'Price board, online booking, map' } }
];

// ფასების დონეები
var TIERS = [
  { id: 'a', from: 800, to: 1000, ex: ['madmen', 'impress', 'lea', 'lampino'],
    ka: ['სავიზიტო საიტი', 'ერთი გვერდი: სერვისები ან მენიუ, ფოტოები, რუკა, საათები და WhatsApp-ის ღილაკები. ერთი-სამი ენა.'],
    en: ['Showcase site', 'One page: services or menu, photos, map, hours and WhatsApp buttons. One to three languages.'] },
  { id: 'b', from: 1100, to: 1300, ex: ['spaguletti', 'matasse', 'khurjini'],
    ka: ['ინტერაქტიული საიტი', 'სამი ენა და ერთი „ცოცხალი“ ინსტრუმენტი: შეკვეთის ამწყობი, ნივთების სია, მარშრუტები ან ფასის დათვლა. შეკვეთა მზა ტექსტით WhatsApp-ში მოდის.'],
    en: ['Interactive site', 'Three languages plus one live tool: an order builder, an item list, routes or a price calculator. Orders arrive as ready WhatsApp text.'] },
  { id: 'c', from: 1400, to: 1700, ex: ['twobrothers', 'liberty', 'gentleman', 'joker'],
    ka: ['საიტი ადმინ პანელით', 'ჩაწერა ოსტატით, დღით და საათით, ჯავშნების სია და ადმინ პანელი, საიდანაც ფასს, ფოტოს და საათებს თავად ცვლით.'],
    en: ['Site with admin panel', 'Booking by master, day and time, a booking list and an admin panel where you change prices, photos and hours yourself.'] }
];

var FEATURES = {
  a: [
    { ka: ['სამი ენა', 'ქართული, ინგლისური და რუსული; ვიზიტორი ენას ზედა მენიუდან ცვლის.'], en: ['Three languages', 'Georgian, English and Russian; the visitor switches from the top menu.'] },
    { ka: ['ტელეფონზე მორგებული', 'ყველა სექცია ცალკეა აწყობილი ვიწრო ეკრანისთვის.'], en: ['Built for phones', 'Every section has its own layout for a narrow screen.'] },
    { ka: ['„ღიაა ახლა“', 'საიტი თბილისის დროით ითვლის, ღია ხართ თუ არა და რომელ საათამდე.'], en: ['Open now', 'The site works out in Tbilisi time whether you are open and until when.'] },
    { ka: ['პრაისი', 'სერვისები კატეგორიებად, ფასით და ხანგრძლივობით.'], en: ['Price list', 'Services by category, with price and duration.'] },
    { ka: ['გალერეა', 'თქვენი სალონის ფოტოები ერთნაირ ჩარჩოებში.'], en: ['Gallery', 'Photos of your place in matching frames.'] },
    { ka: ['შეფასებები', 'რეიტინგი და კლიენტების სიტყვები, წყაროს მითითებით.'], en: ['Reviews', 'Your rating and what guests say, with the source named.'] },
    { ka: ['რუკა', 'მისამართი რუკაზე და ღილაკი „როგორ მოვიდე“.'], en: ['Map', 'Your address on a map with a directions button.'] },
    { ka: ['Google-ისთვის მზად', 'სათაურები, აღწერა და schema.org მონაცემები, რომ ძიებაში სწორად გამოჩნდეთ.'], en: ['Ready for Google', 'Titles, description and schema.org data so search shows you correctly.'] }
  ],
  b: [
    { ka: ['სერვისის არჩევა', 'პრაისის სტრიქონზე დაჭერა ფორმას თავად ავსებს.'], en: ['Pick a service', 'A tap on a price row fills the form by itself.'] },
    { ka: ['ოსტატის არჩევა', 'კლიენტი ირჩევს, ვისთან უნდა ჩაწერა.'], en: ['Pick a master', 'The client chooses who they want to book with.'] },
    { ka: ['დღე და საათი', 'საათები ითვლება თქვენი სამუშაო დროიდან და სერვისის ხანგრძლივობიდან.'], en: ['Day and time', 'Slots come from your opening hours and the length of the service.'] },
    { ka: ['გასული საათები იმალება', 'დღევანდელი გასული დრო ფორმაში აღარ ჩანს.'], en: ['Past hours hidden', 'Times that have already passed today are not offered.'] },
    { ka: ['თარიღები სასტუმროსთვის', 'ჩამოსვლა, გამგზავრება და ღამეების რაოდენობა.'], en: ['Dates for guest houses', 'Check-in, check-out and the number of nights.'] },
    { ka: ['WhatsApp-ში მზა ტექსტი', 'მოთხოვნა თქვენს ნომერზე მოდის, შუამავლისა და საკომისიოს გარეშე.'], en: ['Ready WhatsApp text', 'The request lands on your number, with no middleman and no commission.'] }
  ],
  c: [
    { ka: ['ფასების შეცვლა', 'ფასი იცვლება ერთი ველით და საიტზე მაშინვე ჩანს.'], en: ['Change prices', 'One field changes a price and the site shows it at once.'] },
    { ka: ['ფოტოების ატვირთვა', 'სლაიდები და გალერეა, ფოტო თავად მცირდება.'], en: ['Upload photos', 'Slides and gallery; the photo is resized for you.'] },
    { ka: ['საათები და კონტაქტი', 'სამუშაო საათები, ტელეფონი, მისამართი.'], en: ['Hours and contact', 'Opening hours, phone, address.'] },
    { ka: ['ოსტატები', 'დამატება, წაშლა, ფოტო, აღწერა და ენები.'], en: ['Team', 'Add, remove, photo, description and languages.'] },
    { ka: ['ჯავშნების სია', 'სტატუსი: ახალი, დადასტურებული, გაუქმებული; ფილტრი ოსტატით.'], en: ['Booking list', 'Status: new, confirmed, cancelled; filter by master.'] },
    { ka: ['სექციის ჩართვა და გამორთვა', 'რაც არ გჭირდებათ, ერთი ჩამრთველით ქრება.'], en: ['Switch sections on and off', 'What you do not need disappears with one toggle.'] },
    { ka: ['ექსპორტი და იმპორტი', 'მთელი შინაარსი ერთ ფაილად, სარეზერვო ასლისთვის.'], en: ['Export and import', 'All content in one file, as a backup.'] }
  ]
};

var STEPS = [
  { img: 'liberty-m0', ka: ['ვპოულობთ', 'ვეძებთ ბიზნესს, რომელსაც კარგი შეფასებები აქვს, საიტი კი არა, მხოლოდ სოციალური გვერდი.'], en: ['We find you', 'We look for a business with good ratings and no site of its own, only a social page.'] },
  { img: 'impress-m0', ka: ['ვაკეთებთ დემოს', 'ღია წყაროებიდან ვიღებთ მისამართს, საათებს და სერვისებს და ვაწყობთ საიტს. უფასოდ.'], en: ['We build a demo', 'We take the address, hours and services from public sources and build the site. Free.'] },
  { img: 'lea-m1', ka: ['თქვენ ათვალიერებთ', 'გიგზავნით ბმულს. ხსნით ტელეფონზე და ცდით ჩაწერას.'], en: ['You look at it', 'We send you the link. You open it on your phone and try a booking.'] },
  { img: 'twobrothers-m1', ka: ['ვამატებთ ნამდვილს', 'ნიმუში ფასები და ფოტოები იცვლება თქვენით; ლოგოც თქვენი დგება.'], en: ['We add the real things', 'Sample prices and photos are replaced with yours; your logo goes in.'] },
  { img: 'madmen-m0', ka: ['ვუშვებთ', 'საიტი იდება თქვენს მისამართზე, Google-ისთვის მომზადებული.'], en: ['We launch', 'The site goes live on your address, prepared for Google.'] },
  { img: 'umbrella-m1', ka: ['თავად მართავთ', 'ფასს და ფოტოს ადმინ პანელიდან ცვლით, როცა გინდათ.'], en: ['You run it', 'You change prices and photos from the admin panel whenever you like.'] }
];

var I18N = {
  en: {
    'nav.work': 'Work', 'nav.inside': 'What is inside', 'nav.how': 'How we work', 'nav.contact': 'Contact',
    'hero.l1': 'Websites for', 'hero.l2': 'Tbilisi businesses',
    'hero.sub': 'Three languages, WhatsApp booking and an admin panel where you change prices yourself. Thirteen demos are live.',
    'hero.cta': 'See the work',
    'work.h': 'Work',
    'work.note': 'All thirteen are demo versions built for real businesses; prices and photos on them are placeholders. Under each one: what a site of that level costs.',
    'f.all': 'All', 'f.barber': 'Barbershops', 'f.salon': 'Salon', 'f.guest': 'Guest houses', 'f.shop': 'Shops', 'f.food': 'Cafés & sweets', 'f.kids': 'Kids',
    'nav.prices': 'Prices', 'pr.h': 'Prices', 'pr.ex': 'For example:',
    'pr.note': 'Prices are approximate and depend on the content. Included: design, up to three languages, preparation for Google, launch and the first edits. A .ge domain is paid separately; hosting on GitHub Pages is free.',
    'price': 'Site of this level',
    'open': 'Open the site',
    'in.h': 'What a site includes', 'in.a': 'The site', 'in.b': 'Booking', 'in.c': 'Admin panel',
    'in.a.sum': 'One page that reads as well on a phone as on a computer.',
    'in.b.sum': 'The client chooses and a ready message lands in your WhatsApp.',
    'in.c.sum': 'You change a price, a photo or the hours yourself, without a developer.',
    'in.hint': 'Point at a name and its meaning shows here.',
    'how.h': 'How we work',
    'c.say': 'Good ratings but no website? Write to us and we will show you a demo for free.',
    'c.q': 'Want a site like these?', 'c.meta': 'Tbilisi · we reply the same day',
    'c.wa': 'Write on WhatsApp', 'c.gh': 'See the code on GitHub',
    'ft.say': 'A site the owner runs without help.',
    'ft.legal': '© 2026 Gridline. The sites shown are demo versions.',
    'ft.city': 'Tbilisi', 'ft.code': 'The code is open on GitHub', 'ft.go': 'Write to us for a demo',
    'title': 'Gridline — websites for Tbilisi businesses'
  },
  ka: { 'pr.ex': 'მაგალითად:', 'price': 'ამ დონის საიტი', 'open': 'გახსენი საიტი', 'c.wa': 'მოგვწერეთ WhatsApp-ზე', 'c.gh': 'ნახეთ კოდი GitHub-ზე', 'title': 'Gridline — საიტები თბილისის ბიზნესისთვის' }
};
