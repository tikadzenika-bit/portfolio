# Gridline — პორტფოლიო

ერთგვერდიანი საიტი, რომელიც აჩვენებს ჩვენს დემო საიტებს თბილისის ბიზნესებისთვის (ქართული / English).

ცოცხალი: https://tikadzenika-bit.github.io/portfolio/

## როგორ გავხსნა

ორჯერ დააწკაპუნე `index.html`-ზე, ან `python -m http.server 8349` და გახსენი `http://localhost:8349/`.
ენა: ღილაკი ზედა მარჯვენა კუთხეში ან `?lang=en`.

## რა სად არის

- `assets/js/data.js` — მთელი შინაარსი: `CONTACT` (კონტაქტი), `PROJECTS` (ნამუშევრები), `FEATURES`, `STEPS`, ინგლისური ტექსტები `I18N`-ში.
- `index.html` — ქართული ტექსტები და სტრუქტურა. `assets/css/site.css` — იერი. `assets/js/site.js` — ლოგიკა.
- `assets/shots/` — კომპიუტერის სქრინშოტები (1100×688), `assets/thumbs/` — პატარები რგოლისთვის, `assets/phone/` — ტელეფონის (480×600).

## კონტაქტის დამატება

`data.js` → `CONTACT`: ჩაწერე `whatsapp` (მაგ. `9955XXXXXXXX`), `phoneLabel`, `email`. ცარიელი ველი საიტზე არ ჩანს.

## ახალი ნამუშევრის დამატება

1. გადაიღე საიტის სქრინშოტები: კომპიუტერი 1440×900 (`<id>-d0.jpg` … ) და ტელეფონი (`<id>-m0.jpg`), შეამცირე ზემოთ ნახსენებ ზომებზე.
2. `PROJECTS`-ში დაამატე ჩანაწერი (`id`, `type`: `barber` / `salon` / `guest` / `shop` / `food` / `kids`, `tier`: `a` / `b` / `c`, `price` ლარში, `name`, `url`, `shots` — რამდენი `d` ფაილია, ტექსტები `ka` და `en`).

## ფასები (2026-11-20)

`data.js` → `TIERS` (სექცია „ფასები“) და თითო პროექტის `price` („ამ დონის საიტი … ₾“):
- **a — სავიზიტო, 800–1 000 ₾:** Mad Men 800, Impress 900, Lea / Umbrella / When in Tbilisi / Lampino 1 000.
- **b — ინტერაქტიული, 1 100–1 300 ₾:** Spaguletti 1 100, Matasse1822 1 100, Khurjini 1 200, Hostel in Isani 1 200.
- **c — ადმინ პანელით, 1 400–1 700 ₾:** Two Brothers 1 400, Liberty 1 500, Gentleman 1 600, AniHoe 1 700.

## წესები

ნაჩვენები საიტები დემო ვერსიებია და ასე წერია გვერდზეც. ბიზნესებს „კლიენტებს“ არ ვეძახით, სანამ საიტი არ შეუკვეთავთ.
