(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var KA = {}; // ქართული ტექსტები HTML-დან ინახება აქ, რომ ენის დაბრუნება შეიძლებოდეს
  $$('[data-i18n]').forEach(function (el) { if (!(el.dataset.i18n in KA)) KA[el.dataset.i18n] = el.textContent; });

  var lang = 'ka';
  try {
    var q = new URLSearchParams(location.search).get('lang');
    lang = q || localStorage.getItem('nnn.lang') || 'ka';
  } catch (e) {}
  if (lang !== 'en') lang = 'ka';

  function t(key) {
    if (lang === 'en' && I18N.en[key]) return I18N.en[key];
    return I18N.ka[key] || KA[key] || '';
  }
  var ARROW = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3 13 13 3M5 3h8v8" fill="none" stroke="currentColor" stroke-width="2"/></svg>';

  /* ---------- hero ring ---------- */
  var ring = $('#ring'), heroSub = $('#heroSub');
  function buildRing() {
    var frames = [];
    PROJECTS.forEach(function (p) {
      frames.push([p, 'd0', 'land'], [p, 'm0', 'port'], [p, 'd1', 'land']);
    });
    var n = frames.length;
    ring.innerHTML = frames.map(function (f, i) {
      var a = (-90 + (360 / n) * i).toFixed(1);
      var land = f[2] === 'land';
      return '<a class="' + f[2] + (i % 2 ? ' x' : '') + '" style="--a:' + a + 'deg;--i:' + i + '" href="#p-' + f[0].id +
        '" data-p="' + f[0].id + '" tabindex="-1"><img src="assets/thumbs/' + f[0].id + '-' + f[1] + '.jpg" alt="" width="' +
        (land ? 320 : 200) + '" height="' + (land ? 200 : 267) + '"></a>';
    }).join('');
  }
  function hot(id) {
    $$('a', ring).forEach(function (a) { a.classList.toggle('hot', a.dataset.p === id); });
    ring.classList.toggle('has-hot', !!id);
    if (id) {
      var p = PROJECTS.filter(function (x) { return x.id === id; })[0];
      heroSub.textContent = p.name + ' · ' + p[lang].cat + ' · ' + p[lang].place;
    } else heroSub.textContent = t('hero.sub');
  }
  ring.addEventListener('pointerover', function (e) { var a = e.target.closest('a'); if (a && e.pointerType === 'mouse') hot(a.dataset.p); });
  ring.addEventListener('pointerleave', function () { hot(null); });

  /* ---------- projects ---------- */
  var box = $('#projects');
  function buildProjects() {
    box.innerHTML = PROJECTS.map(function (p) {
      var L = p[lang], imgs = '';
      for (var i = 0; i < p.shots; i++) {
        imgs += '<img src="assets/shots/' + p.id + '-d' + i + '.jpg" width="1100" height="688" loading="lazy" alt="' +
          p.name + ': ' + (lang === 'en' ? 'screen ' : 'ეკრანი ') + (i + 1) + '"' + (i === 0 ? ' class="mid"' : '') + '>';
      }
      return '<article class="project rv" id="p-' + p.id + '" data-type="' + p.type + '">' +
        '<div class="strip" tabindex="0" aria-label="' + p.name + '">' + imgs + '</div>' +
        '<div class="facts"><h3>' + p.name + ' <span>' + L.cat + '</span></h3><p class="place">' + L.place +
        '</p><p class="langs">' + p.langs + '</p><p class="what">' + L.what + '</p>' +
        '<p class="price"><span>' + t('price') + '</span> ' + money(p.price) + '</p></div>' +
        '<a class="open" href="' + p.url + '" target="_blank" rel="noopener">' + t('open') + ARROW + '</a></article>';
    }).join('');
    $$('.strip', box).forEach(function (s) {
      var imgs = $$('img', s), raf = 0;
      function mark() {
        var c = s.scrollLeft + s.clientWidth / 2, best = null, bd = 1e9;
        imgs.forEach(function (im) {
          var d = Math.abs(im.offsetLeft + im.offsetWidth / 2 - c);
          if (d < bd) { bd = d; best = im; }
        });
        imgs.forEach(function (im) { im.classList.toggle('mid', im === best); });
      }
      s.addEventListener('scroll', function () { cancelAnimationFrame(raf); raf = requestAnimationFrame(mark); }, { passive: true });
      s.addEventListener('click', function (e) {
        var im = e.target.closest('img'); if (!im) return;
        if (im.classList.contains('mid')) window.open(s.parentNode.querySelector('.open').href, '_blank', 'noopener');
        else s.scrollTo({ left: im.offsetLeft + im.offsetWidth / 2 - s.clientWidth / 2, behavior: 'smooth' });
      });
    });
    applyFilter();
    observe();
  }
  var filter = 'all';
  function applyFilter() {
    $$('.project', box).forEach(function (p) { p.hidden = filter !== 'all' && p.dataset.type !== filter; });
  }
  $$('.filter button').forEach(function (b) {
    b.addEventListener('click', function () {
      filter = b.dataset.f;
      $$('.filter button').forEach(function (x) { x.classList.toggle('on', x === b); });
      applyFilter();
    });
  });

  /* ---------- prices ---------- */
  function money(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ').replace(/\s/g, '\u00a0') + '\u00a0₾'; }
  function buildTiers() {
    $('#tiers').innerHTML = TIERS.map(function (T) {
      var ex = T.ex.map(function (id) { var p = PROJECTS.filter(function (x) { return x.id === id; })[0];
        return '<a href="#p-' + id + '">' + p.name + '</a>'; }).join(', ');
      return '<div class="tier rv"><p class="amount">' + money(T.from) + ' – ' + money(T.to) + '</p><div><h3>' + T[lang][0] + '</h3><p>' + T[lang][1] + '</p><p class="ex">' + t('pr.ex') + ' ' + ex + '</p></div></div>';
    }).join('');
    observe();
  }

  /* ---------- features ---------- */
  var desc = $('#desc');
  function buildFeatures() {
    ['a', 'b', 'c'].forEach(function (k) {
      $('#in-' + k).innerHTML = FEATURES[k].map(function (f) {
        return '<li tabindex="0" data-d="' + f[lang][1].replace(/"/g, '&quot;') + '">' + f[lang][0] + '</li>';
      }).join('');
    });
    desc.textContent = t('in.hint');
  }
  function showDesc(e) {
    var li = e.target.closest('li[data-d]'); if (!li) return;
    $$('.col li.on').forEach(function (x) { x.classList.remove('on'); });
    li.classList.add('on'); desc.textContent = li.dataset.d;
  }
  $('.cols').addEventListener('pointerover', showDesc);
  $('.cols').addEventListener('focusin', showDesc);

  /* ---------- steps ---------- */
  var row = $('#howRow'), bar = $('#howBar');
  function buildSteps() {
    row.innerHTML = STEPS.map(function (s) {
      return '<div class="step"><h3>' + s[lang][0] + '</h3><p>' + s[lang][1] + '</p><div class="pic"><img src="assets/phone/' +
        s.img + '.jpg" width="480" height="600" loading="lazy" alt="' + (lang === 'en' ? 'A demo site on a phone screen' : 'დემო საიტი ტელეფონის ეკრანზე') + '"></div></div>';
    }).join('');
    progress();
  }
  function progress() {
    var max = row.scrollWidth - row.clientWidth;
    var seen = row.clientWidth / row.scrollWidth;
    bar.style.width = Math.min(100, (seen + (1 - seen) * (max > 0 ? row.scrollLeft / max : 1)) * 100) + '%';
  }
  row.addEventListener('scroll', progress, { passive: true });
  window.addEventListener('resize', progress);
  $('#howPrev').addEventListener('click', function () { row.scrollBy({ left: -312, behavior: 'smooth' }); });
  $('#howNext').addEventListener('click', function () { row.scrollBy({ left: 312, behavior: 'smooth' }); });

  /* ---------- contact ---------- */
  function buildContact() {
    var h = '';
    if (CONTACT.whatsapp) h += '<a href="https://wa.me/' + CONTACT.whatsapp + '" rel="noopener">' + t('c.wa') + '</a>';
    if (CONTACT.phoneLabel) h += '<a href="tel:' + CONTACT.phoneLabel.replace(/\s/g, '') + '">' + CONTACT.phoneLabel + '</a>';
    if (CONTACT.email) h += '<a href="mailto:' + CONTACT.email + '">' + CONTACT.email + '</a>';
    if (CONTACT.github) h += '<a href="' + CONTACT.github + '" rel="noopener">' + t('c.gh') + '</a>';
    $('#cLinks').innerHTML = h;
  }

  /* ---------- language ---------- */
  function applyLang() {
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.dataset.i18n); });
    document.title = t('title');
    $('#lang').textContent = lang === 'en' ? 'ქარ' : 'EN';
    buildProjects(); buildTiers(); buildFeatures(); buildSteps(); buildContact();
  }
  $('#lang').addEventListener('click', function () {
    lang = lang === 'en' ? 'ka' : 'en';
    try { localStorage.setItem('nnn.lang', lang); } catch (e) {}
    applyLang();
  });

  /* ---------- entrances ---------- */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' }) : null;
  function observe() {
    $$('.rv:not(.in)').forEach(function (el) { if (io) io.observe(el); else el.classList.add('in'); });
  }
  [['.work-head > *', 1], ['.prices h2', 0], ['.pr-note', 0], ['.inside h2', 0], ['.col', 1], ['.desc', 0], ['.how-top', 0], ['.progress', 0], ['.row', 0],
   ['.contact > *', 1], ['.tile', 1]].forEach(function (g) {
    $$(g[0]).forEach(function (el, i) { el.classList.add('rv'); if (g[1]) el.style.setProperty('--d', i % 6); });
  });

  /* ---------- Tbilisi clock ---------- */
  function tick() {
    try {
      $('#clock').textContent = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Tbilisi', hour: '2-digit', minute: '2-digit' }).format(new Date());
    } catch (e) {}
  }
  tick(); setInterval(tick, 20000);

  buildRing();
  applyLang();
})();
