import { CategoryComponent } from './category/category.component';

export interface Product{
  id:number;
  category_id:number;
  name:string,
  price:string;
  description:string,
  image: string,
  link:string,
  button:string
}

export const products = [
  {
    id:1,
    category_id:1,
    name: 'Разработка бизнес-плана',
    price: 'от 50 000 тенге',
    description: 'Разработка бизнес-планов для привлечения банковского кредита либо инвестиций.Для любого банка второго уровня, фонда "Даму", дочерний предприятий "КазАгро" и др. финансовых институтов либо частных инвесторов.Опыт работы более 8 лет.Работаем индивидуально, от начала до конца.',
    image:'https://s3.amazonaws.com/mentoring.redesign/s3fs-public/styles/aspect_ratio__4_3/public/GettyImages-970408560.jpg',
    link:'https://www.olx.kz/obyavlenie/razrabotka-biznes-plana-IDiAe9r.html#f4d609b714',
    buttonn:'https://api.whatsapp.com/send?phone=77075145613&text=Look+at+this+product+${product.name}+${product.link}'
  },
  {
    id:2,
    category_id:1,
    name: 'Юридические услуги',
    price: 'Цены договорные!',
    description: 'Открытие ТОО ,ИП. Составление устава, открытие счета в банке,составление договоров.Также беру на удаленный контроль сопровождение документации малых предприятий,то есть составление и исполнение договоров,подготовка коммерческих предложений,грамотное составление писем для гос. Структур, Нац.компаний ,юридических лиц.Опыт работы в данной сфере более 4 лет.',
    image:'https://zhazhda.biz/wp-content/uploads/2016/11/Biznes-ideya-yuridicheskie-uslugi-960x960.png',
    link:'https://www.olx.kz/obyavlenie/yuridicheskie-uslugi-IDiqbRx.html#f4d609b714'
  },
  {
    id:3,
    category_id:1,
    name: 'Услуги переводчика',
    price: 'Оплата на каспий.',
    description: 'С русского на казахский. Срочный перевод писем и документов и не только. Курсовые работы, дипломные, диссертаций.Цена для писем и документов до 100 символов = 50 тенге. От 101 до 200 символов=100 тенге. От 201 до 300 символов=300 тенге. От 301 до 400 символов 500 тенге.Перевод курсовых и дипломных,диссертаций с русского на казахский по цене 1000 тенге за 1 лист А4(интервал 1, шрифт 14, стандартного вверх, слева, справа). ',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/qw4dcuqyoki63-KZ/image;s=644x461',
    link:'https://www.olx.kz/obyavlenie/uslugi-perevodchika-IDiAe38.html#f4d609b714'
  },
  {
    id:4,
    category_id:1,
    name: 'Набор текста',
    price: 'Цена за страницу 200тг.',
    description: 'Делаем быстро. Качественно. Если много страниц есть скидка. Также набираем книги. Делаем перевод с русского на казахский и наоборот.Образование педагогическое. Качество гарантировано. Делаем через уатсап, также можете прийти. Находимся в жилом доме около экспресс.',
    image:'https://myrouble.ru/wp-content/uploads/2018/03/1-nabor-texta.jpg',
    link:'https://www.olx.kz/obyavlenie/nabor-teksta-IDijcmU.html#f4d609b714'

  },
  {
    id:5,
    category_id:1,
    name: 'Бухгалтерский, налоговый учет',
    price: 'Договорная цена.',
    description: 'Ведение бухгалтерского, налогового учета, восстановление учета, составление финансовой отчетности по МСФО, сопровождение, стаж в финансовой отрасли 16 лет. Своевременная сдача всех налоговых, статистических отчетов. Подготовка и сдача годовой, квартальной налоговой отчетности.',
    image:'http://mik.kh.ua/wp-content/uploads/23-9-680x453.jpg',
    link:'https://www.olx.kz/obyavlenie/buhgalterskiy-nalogovyy-uchet-IDepGvm.html#f4d609b714'
  },
  {
    id:6,
    category_id:1,
    name: 'Дизайн, разработка логотипа',
    price: 'Договорная цена.',
    description: 'Если вашей компании нужны: ЛОГОТИП, Рекламные БАННЕР и ВЫВЕСКА, ВИЗИТКА, Особенный СЕРТИФИКАТ,Оформление ИНСТАГРАМ STORIES и ПУБЛИКАЦИЙ,Качественное МЕНЮ и ОБЛОЖКИ, ОБЕРТКА,оформление ПРОДУКЦИИ, БЛАНКИ, ФЛАЕРЫ И ЛИСТОВКИ, ФИРМЕННЫЙ СТИЛЬ,Другое',
    image:'https://faqindecor.com/wp-content/uploads/2019/04/1464881337_top_bannerg-peredelannyy1_.jpg',
    link:'https://www.olx.kz/obyavlenie/dizayn-razrabotka-logotipa-IDiAdL3.html#f4d609b714'

  },
  {
    id:7,
    category_id:1,
    name: 'Создаю сайты на Тильде (лендинг)',
    price: 'Цена договорная.',
    description: 'Помогу создать простые сайты на платформе Тильда, пример работы: http://project2237755.tilda.ws/',
    image:'https://d2xzmw6cctk25h.cloudfront.net/post/1738/og_cover_image/970fe5a36401ee376059ec3370a08279',
    link:'https://www.olx.kz/obyavlenie/sozdayu-sayty-na-tilde-lending-IDiAdMt.html#f4d609b714'

  },
  {
    id:8,
    category_id:1,
    name: 'Разработка и Продвижение сайта, Контекстная реклама, Таргетинг',
    price: 'Договорная цена.',
    description: 'Специалист с большим опытом (18 лет) в сфере маркетинга.Что я умею делать быстро и высокопрофессионально:Создание сайтов, более 1,000 кейсов.Упаковка продукта во франшизу, 9 проектов.Интеграция AmoCRM, наличие сертификата официального партнёра.Продвижение, детальная настройка контекстной и таргетированной рекламы.WhatsApp рассылка без блокировок по уникальной базе.Экспресс онлайн обучение SMM на базе собственной школы.Оптимизация и автоматизация бизнеса под онлайн формат.Разработка презентаций проекта, фирменного стиля.Маркетинг-кит.Имею опыт вывода проектов на уровень пассивного дохода с оптимизацией расходов, включая ФОТ.',
    image:'https://nika-web.ru/images/blog/2017/23_03/main3.jpg',
    link:'https://www.olx.kz/obyavlenie/razrabotka-i-prodvizhenie-sayta-kontekstnaya-reklama-targeting-IDizbFg.html#dd09dff651;promoted'

  },
  {
    id:9,
    category_id:1,
    name: 'Ремонт компьютеров и оргтехники! Заправка картриджей! Создание сайтов',
    price: 'Договорная цена.',
    description: 'Предоставляем услуги по ремонту компьютеров и оргтехники. *Компьютеры: Сборка, Настройка, Обслуживание (чистка, Антивирусы), Ремонт (диагностика, переустановка, пайка); *Оргтехника: Ремонт (пайка, прошивка), Обслуживание (чистка), Заправка картриджей; *Сети (ЛВС и интернет) : Монтаж, Настройка, Ремонт; ',
    image:'https://12.img.avito.st/640x480/4793224612.jpg',
    link:'https://www.olx.kz/obyavlenie/remont-kompyuterov-i-orgtehniki-zapravka-kartridzhey-sozdanie-saytov-IDixmbl.html#dd09dff651;promoted'

  },
  {
    id:10,
    category_id:1,
    name: 'Услуги SMM, социальные сети, создание сайта',
    price: 'Договорная цена.',
    description: 'Создание/оформление акаунтов; Создание Landing page- сайт прямого продажа: Разработка и согласование контент-плана;Публикация 20-ти постов в течении месяца (копирайтинг, рерайтинг); Дублирование постов в Stories;Работа с комментариями и вопросами пользователей, ответы на них. Чистка страниц от спама;Полное администрирование и модерация страницы;Подготовка и проведение акций и розыгрышей (1 - 2 акции в месяц, по согласованию с заказчиком);Привлечение целевой аудитории (только живые люди);Настройка, запуск, ведение таргетирование рекламы (1-2 рекламы месяц, по согласованию с заказчиком);Предоставление отчета о результатах',
    image:'https://askerweb.by/wp-content/uploads/2017/12/18889271_435218126850031_5718123624565571584_n.jpg',
    link:'https://www.olx.kz/obyavlenie/uslugi-smm-sotsialnye-seti-sozdanie-sayta-IDhIM8D.html#dd09dff651'

  },
  {
    id:11,
    category_id:2,
    name: 'Продам процессор i5 6600 с материнской платой',
    price: '75 000 тг.',
    description: 'Продам процессов i5 6600 3.2 Ghz turbo boost 3.9Ghz Skylake, Lga 1151 , и материнская плата Asus z170 -k',
    image:'data:image/jpeg;base64,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',
    link:'https://www.olx.kz/obyavlenie/prodam-protsessor-i5-6600-s-materinskoy-platoy-IDiA8Ay.html#2d91f6110e;promoted'

  },
  {
    id:12,
    category_id:2,
    name: 'Компьютеры в комллекте со столом',
    price: '15 000 тг.',
    description: 'Компьютеры в комплекте: процессор, монитор, клавиатура в количестве 20шт.Столы компьютерные 20шт. Стоимость столов в цене. Все в хорошем состоянии местонахожнеие в городе Костанай!!!',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/m7yyxeqlakwa3-KZ/image;s=1000x700',
    link:'https://www.olx.kz/obyavlenie/kompyutery-v-komllekte-so-stolom-IDiA8av.html#2d91f6110e;promoted'

  },
  {
    id:13,
    category_id:2,
    name: 'Распродажа мониторов для компьютеров и для видеонаблюдения',
    price: '5 000 тг.',
    description: 'Характеристики: Диагональ 17 / 19 / 19,5 / 20; Разрешение 1366х768 (16:9); Техника уцененная (имеется незначительные деффекты, на работу не влияют).',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/w9uzscfb8ufh3-KZ/image;s=1000x700',
    link:'https://www.olx.kz/obyavlenie/rasprodazha-monitorov-dlya-kompyuterov-i-dlya-videonablyudeniya-IDiw3ZP.html#2d91f6110e;promoted'

  },
  {
    id:14,
    category_id:2,
    name: 'ДОСТАВКА Игровые и офисные мышки с подсветкой, игротекам ОПТОМ',
    price: '1 490 тг.',
    description: 'Игровые и офисные качественные мышки от китайских брендов не имеющих отличий с оригиналом. Все игровые мышки имеют качественный тканевый USB шнур, высокую точность DPI и подсвечиваются разными цветами. Особенно эффектно выглядит ночью.',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/4li0y7kuh3rr3-KZ/image;s=1000x700',
    link:'https://www.olx.kz/obyavlenie/dostavka-igrovye-i-ofisnye-myshki-s-podsvetkoy-igrotekam-optom-IDd5kxV.html#2d91f6110e;promoted'

  },
  {
    id:15,
    category_id:2,
    name: 'Продам материнскую плату сокет 1150',
    price: '15 000 тг.',
    description: 'Материнская плата сокет 1150 б/у 5мес.',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/ina9gwtxkym4-KZ/image;s=1000x700;r=270',
    link:'https://www.olx.kz/obyavlenie/prodam-materinskuyu-platu-soket-1150-IDiAibl.html#af2878f6fa'

  },
  {
    id:16,
    category_id:2,
    name:'Продам роутер алтел',
    price:'16 000 тг.',
    description:'Продам роутер алтел в идеальном состоянии, цена 16000 тг',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/slaviyzg60yl2-KZ/image;s=1000x700',
    link:'https://www.olx.kz/obyavlenie/prodam-router-altel-IDiAi64.html#af2878f6fa'
  },
  {
    id:17,
    category_id:2,
    name:'Веб-камера Logitech HD Webcam C270',
    price:'5 990 тг.',
    description:'Веб-камера Logitech HD Webcam C270 в идеальном состояний. Пользовались пару раз.',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/s0jtn0nv94uq2-KZ/image;s=1000x700',
    link:'https://www.olx.kz/obyavlenie/veb-kamera-logitech-hd-webcam-c270-IDiAi6s.html#af2878f6fa'
  },
  {
    id:18,
    category_id:2,
    name:'Продаю жёсткие диски',
    price:'3 000 тг.',
    description:'Хороший жёсткий диск на 320гб. Торг',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/oi6wk4lcrwy-KZ/image;s=1000x700;r=270',
    link:'https://www.olx.kz/obyavlenie/prodayu-zhestkie-diski-IDiahIy.html#af2878f6fa'
  },
  {
    id:19,
    category_id:2,
    name:'Стабилизатор напряжения + UPS',
    price:'8 000 тг. ',
    description:'UPS + стабилизатор напряжения, полностью в рабочем состоянии, управляемый, с ЖК дисплеем. Без батарей. 1500 и 700 Вт. Цена отдельно за каждый.',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/7ouoj6fvwilm1-KZ/image;s=1000x700',
    link:'https://www.olx.kz/obyavlenie/stabilizator-napryazheniya-ups-IDismDv.html#af2878f6fa'
  },
  {
    id:20,
    category_id:3,
    name:'Курьер/Ежедневная оплата/Выдаём пропуск на время карантина',
    price:'Оплата - от 850 ТГ за адрес+премия за переработки',
    description:'В связи с ситуацией в сфере здравоохранения требуются курьеры для доставки средств зашиты для населения.После успешного собеседования вам предоставляют пропуск и оформляют страховку!',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/wowgkdiannfc-KZ/image;s=644x461',
    link:'https://www.olx.kz/obyavlenie/kurer-ezhednevnaya-oplata-vydaem-propusk-na-vremya-karantina-IDiAbbM.html#802b4419da;promoted'
  },
  {
    id:21,
    category_id:3,
    name:'Яндекс Такси Астана ЗАРАБОТОК ОТ 250,000 ТЕНГЕ В МЕСЯЦ!',
    price:'250 000 - 600 000 тг./За месяц',
    description:'СРОЧНО ТРЕБУЮТСЯ ВОДИТЕЛИ С ЛИЧНЫМ АВТОБИЛЕМ В ГОРОДЕ НУР-СУЛТАН (АСТАНА)!    Крупнейший партнер Яндекс Такси в Центральной Азии (Таксопарк iTaxi) срочно ищет водителей с личным автомобилем в городе Астана (Нур-Султан)!',
    image:'https://prodengi.kz/images/cms/data/kaz_0256_jpg1.jpg',
    link:'https://www.olx.kz/obyavlenie/yandeks-taksi-astana-zarabotok-ot-250-000-tenge-v-mesyats-IDdYHIv.html#802b4419da;promoted'
  },
  {
    id:22,
    category_id:3,
    name:'Требуется Сушист',
    price:'120 000 - 150 000 тг./За месяц',
    description:'В службу доставки еды требуется Сушист с опытом работы. График: В день с 9.00 утра до 21.00 вечера. Или в ночь с 21.00 вечера до 9.00 утра',
    image:'https://photos-mt.kcdn.kz/a2/a25bc6eb-697d-498b-9d2d-7bbc325f1cef/1-760x450.jpg',
    link:'https://www.olx.kz/obyavlenie/trebuetsya-sushist-IDhpOdK.html#802b4419da;promoted'
  },
  {
    id:23,
    category_id:3,
    name:'Реальная возможность заработать или улучшить свой доход!',
    price:'8.90',
    description:'Темирлан таксопарк, официальный партнёр ЯндексТакси ведёт набор водителей с личным автотранспортом!Бесплатная и быстрая регистрация онлайн, и круглосуточно по ватсап, в течении 10-20минут.Пополнение баланса (бонус при регистрации 500 тенге)',
    image:'https://shopuchet.kz/wp-content/uploads/2016/10/fotolia_2892778_s.jpg',
    link:'https://www.olx.kz/obyavlenie/realnaya-vozmozhnost-zarabotat-ili-uluchshit-svoy-dohod-IDhVwe8.html#802b4419da;promoted'
  },
  {
    id:24,
    category_id:3,
    name:'Требуется прораб на строительный участок',
    price:'170 000 тг./За месяц',
    description:'На строительную площадку требуется прораб с опытом работы в сфере строительства. Оплата высокая, своевременная. Соц.пакет. Обращаться с 9.00 до 20.00 часов по номеру 87016061281 Георгий.',
    image:'https://lh3.googleusercontent.com/proxy/NlIN8qZI_cF2v2xrXpBgaze9_7SJd9jsEwow12FZ-zrxCF6FG47EHgwUPhuJ3rOUDR6StLMNI_oxEogwCqjAgprNpwd7vhINuh2aNr-NHeydVaoeuaCpUw',
    link:'https://www.olx.kz/obyavlenie/trebuetsya-prorab-na-stroitelnyy-uchastok-IDgCw5V.html#802b4419da;promoted'
  },
  {
    id:25,
    category_id:3,
    name:'Домработница.',
    price:'800 тг./За час',
    description:'Требуется домработница в селе Караоткель. Обязанности уборка.Прошу писать с 09:00 до 16:00.',
    image:'https://photos-mt.kcdn.kz/c0/c0b0674e-6aca-4797-b3f2-2cdee4e138a0/1-760x450.jpg',
    link:'https://www.olx.kz/obyavlenie/domrabotnitsa-IDiAszK.html#802b4419da;promoted'
  },
  {
    id:26,
    category_id:3,
    name:'Помощник по документации на постоянной основе',
    price:'150 000 тг./За месяц',
    description:'Помощник по документации на постоянной основе. Обязанности: ведение документации, отчетности, регистратуры.Без возрастных ограничении.Требования: ответственность, четкость и знание ПК.Условия: пятидневный рабочий график. Официальное оформление.',
    image:'https://photos-mt.kcdn.kz/d9/d93d0bbd-8ffc-4071-8d2d-d541150ae39a/1-760x450.jpg',
    link:'https://www.olx.kz/obyavlenie/pomoschnik-po-dokumentatsii-na-postoyannoy-osnove-IDihEnQ.html#802b4419da;promoted'
  },
  {
    id:27,
    category_id:3,
    name:'Требуются торговые представители, можно без опыта',
    price:'120 000 - 180 000 тг./За месяц',
    description:'Требуются в оптовую организацию торговые представители, можно без опыта.Прием оптовых заказов без прямых продаж, небольшая документация.Постоянная работа в офисе СРОЧНО! Обучим и покажем.',
    image:'https://abmdd.com/wp-content/uploads/2017/07/teaserbox_2443699231.jpg',
    link:'https://www.olx.kz/obyavlenie/trebuyutsya-torgovye-predstaviteli-mozhno-bez-opyta-IDihEld.html#802b4419da;promoted'
  },
  {
    id:28,
    category_id:3,
    name:'Требуется администратор в оздоровительный центр',
    price:'Цены договорные!',
    description:'Требуется администратор в оздоровительный центр.Требования: Опытный пользователь MC Office и оргтехники; Уверенный пользователь ПК (Excel‚ Word);Личные качества: ответственность‚ коммуникабельность‚ организованность‚ аккуратность‚ точность‚ внимательность‚ трудолюбие‚ исполнительность;',
    image:'data:image/jpeg;base64,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',
    link:'https://www.olx.kz/obyavlenie/trebuetsya-administrator-v-ozdorovitelnyy-tsentr-IDishGH.html#802b4419da'
  },
  {
    id:29,
    category_id:3,
    name:'Требуются мастера в студию красоты',
    price:1.70,
    description:'Приглашаются мастера по наращиванию ресниц и татуажу для создания дружного коллектива.Предоставляется:теплое, светлое и оборудованное рабочее место, уборка, охранная сигнализация (включено в аренду) , столовая на цокольном этаже, гибкий график работы , на полный день или день через день,офис находится в Центре города, удобная развязка и местоположение',
    image:'https://lh3.googleusercontent.com/proxy/51pGFR6ycFDPRXFRaeY_n6I3aCSRopXqyzXg5xpNkNcm2-SwJrOLKwYVb_tMtYcu-X4qUooqSL0rECs9Ds4xF8gGVVM-HNYPYhZIbNMV2xnQV84ohraX',
    link:'https://www.olx.kz/obyavlenie/trebuyutsya-mastera-v-studiyu-krasoty-IDiAxKM.html#802b4419da'
  },
  {
    id:30,
    category_id:4,
    name:'Велосипеды оптом и в розницу',
    price:'22 000 тг.',
    description:'Реализуем велосипеды оптом и розницу по всему Казахстану.Топовые модели велосипедов, спортивные, городские, горные.Скоростные велосипеды полной комплектации.Успейте купить велосипеды по акции.',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/uy5q907lcmq02-KZ/image;s=1000x700',
    link:'https://www.olx.kz/obyavlenie/velosipedy-optom-i-v-roznitsu-IDivPep.html#59ecf24d03;promoted'
  },
  {
    id:31,
    category_id:4,
    name:'Беговая Дорожка GENAU TR 50. Рассрочка 0%. Немецкий Бренд',
    price:'175 890 тг.',
    description:'Эта превосходная модель очень проста в использовании и великолепна в дизайне. Скорость до 14.8 км/ч и 3 варианта угла наклона позволят тренироваться максимально эффективно.Технология амортизации уменьшит воздействие вашей тренировки на суставы и обеспечит мягкую, но прочную поверхность для ходьбы и бега.',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/zamj2phpq8ht-KZ/image;s=1000x700',
    link:'https://www.olx.kz/obyavlenie/begovaya-dorozhka-genau-tr-50-rassrochka-0-nemetskiy-brend-IDidcDL.html#59ecf24d03;promoted'
  },
  {
    id:32,
    category_id:4,
    name:'Укулеле РАСПРОДАЖА. Струны. Каподастр. Чехол',
    price:'14 990 тг.',
    description:'Укулеле. Распродажа.У Нас Отличное качество!Работаем до 23:00. Адрес: Петрова 2 (возле Орбиты);Вход со двора. Звоните!',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/huh5f4q007q33-KZ/image;s=1000x700',
    link:'https://www.olx.kz/obyavlenie/ukulele-rasprodazha-struny-kapodastr-chehol-IDgvKH1.html#59ecf24d03;promoted'
  },
  {
    id:33,
    category_id:4,
    name:'Новый студийный комплект Focusrite Scarlett 2i2 Studio 3Gen',
    price:'135 000 тг.',
    description:'Новый. Гарантия 1год. Отправка в любой регион РК. 1 Focusrite Scarlett 2i2 3rd Gen USB аудиоинтерфейс нового поколения 1; 2 Focusrite Scarlett CM25 MkIII студийный конденсаторный микрофон с креплением для стойки 1; 3 Focusrite Scarlett HP60 MkIII студийные контрольные наушники закрытого типа 1; 4 XLR-XLR шнур; 3-х метроый шнур для подключения микрофона 1 ;5 USB шнур тип C-A длинной 1 метр. 1',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/lz9nplexugjf3-KZ/image;s=1000x700',
    link:'https://www.olx.kz/obyavlenie/novyy-studiynyy-komplekt-focusrite-scarlett-2i2-studio-3gen-IDiAyGk.html#59ecf24d03'
  },
  {
    id:34,
    category_id:4,
    name:'Напульсник спортивная повязка на голову фитнес для волос бандана',
    price:'4 990 тг.',
    description:'Отличная повязка на голову, противоскользязая и дышащая. Подходит как девушкам так и парням. Остался только серый цвет. Возможна доставка по Астане. Звоните, ОЛХ редко читаем.',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/631ifysl2kk91-KZ/image;s=1000x700',
    link:'https://www.olx.kz/obyavlenie/napulsnik-sportivnaya-povyazka-na-golovu-fitnes-dlya-volos-bandana-IDiAyGd.html#59ecf24d03'
  },
  {
    id:35,
    category_id:4,
    name:'Турник 3 в 1 Турник Брусья Пресс в Атырау Каждому клиенту ПОДАРОК',
    price:'12 000 тг.',
    description:'Турник-Брусья-Пресс.Гарантия 2 года! Официальный дилер! О товаре: Выдерживает нагрузку - 255 кг, Вид крепления - К стене, Страна производитель - Россия. Характеристики турника:Вынос от стены турника - 470 мм,Длина перекладины - 950 мм',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/lcn2la0zaypd2-KZ/image;s=1000x700',
    link:'https://www.olx.kz/obyavlenie/turnik-3-v-1-turnik-brusya-press-v-atyrau-kazhdomu-klientu-podarok-IDiqv9E.html#8ab581c63e;promoted'
  },
  {
    id:36,
    category_id:4,
    name:'Вело шлем RockBros',
    price:'18 000 тг.',
    description:'Бренд: RockBros;Размер: 56-62 см;Материал: PC, Внутри: EPS;Вес: 251 г',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/pedzpon1z5ku3-KZ/image;s=1000x700',
    link:'https://www.olx.kz/obyavlenie/velo-shlem-rockbros-IDhd9WQ.html#8ab581c63e'
  },
  {
    id:37,
    category_id:4,
    name:'Жгут Trx',
    price:'9 000 тг.',
    description:'Работа мышц: Квадрицепс, ягодичные мышцы, двуглавая мышца бедра.Исходное положение: Стоя лицом в направлении TRX, удерживая рукоятки в нейтральном положении. Приподнимите одну ногу, найдите подходящий угол наклона тела и равномерно распределите вес тела по всей площади опорной ноги.',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/nzszq7nlkcy22-KZ/image;s=1000x700',
    link:'https://www.olx.kz/obyavlenie/zhgut-trx-IDizinT.html#8ab581c63e'
  },
  {
    id:38,
    category_id:4,
    name:'Виниловые пластинки',
    price:'10 000 тг.',
    description:'Виниловые пластинки оптом',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/wcxruemjoxt42-KZ/image;s=1000x700',
    link:'https://www.olx.kz/obyavlenie/vinilovye-plastinki-IDit8mj.html#59ecf24d03'
  }








];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
