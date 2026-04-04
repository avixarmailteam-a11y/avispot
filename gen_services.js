const fs = require('fs');
const path = require('path');

const services = [
    {
        name: 'İkinci El Mobilya',
        slug: 'ikinci-el-mobilya',
        title: 'Kayseri İkinci El Mobilya Alanlar | Aygül Spot',
        desc: 'Kayseri\'de ikinci el mobilya alan yerler mi arıyorsunuz? Eski mobilyalarınızı, letgo, dolap uğraşmadan değerinde nakit alıyoruz. En ucuz spot mobilyalar.',
        keywords: 'kayseri ikinci el mobilya, ikinci el mobilya alanlar kayseri, kayseri spot mobilya, 2.el koltuk takımı kayseri, kayseri mobilya alan yerler',
        content: `
            <p>Mobilyalar, evimizin en temel yapı taşları ve en çok bütçe ayrılan eşya gruplarıdır. Beklentileriniz ister evinizdeki kullanılmış ancak sağlam kalmış bir mobilyayı nakte çevirmek olsun, ister yeni kurduğunuz evinize uygun fiyatlı lüks bir salon takımı satın almak olsun; <strong>Kayseri Aygül Spot İkinci El Mobilya</strong> merkezinde aradığınız tüm garantili çözümleri bulursunuz.</p>
            
            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Kayseri'de İkinci El Mobilyanızı Nasıl Alıyoruz?</h3>
            <p>Bazalı yataklardan çekyatlara, yemek odası masalarından gardırop ve vestiyerlere kadar geniş bir mobilya yelpazesi ile çalışıyoruz. Ahşap kalitesi, kumaş yırtığı durumu ve sünger yay sağlığı gibi temel unsurlar expertiz ekibimiz tarafından dakikalar içinde incelenir. "Acaba bu ürünü nakit yapar mıyım?" diye düşünmeyin! Satmak istediğiniz Kayseri içi tüm mobilyalar için bize model fotoğraflarını göndermeniz yeterlidir. Kabul etmeniz durumunda anında nakit veya banka transeferi ile kapınızda ürünün satın alım işlemini tamamlıyoruz.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Aygül Spot Mobilya Güvencesi Neler Sağlar?</h3>
            <ul style="margin-left: 1.5rem; margin-top:0.8rem; color:var(--text-gray); line-height:1.7;">
                <li style="margin-bottom:0.5rem;"><strong>Hasarsız Taşıma İçin Demontaj Hizmeti:</strong> İkinci el mobilyaların büyük olmaları söküm işlerini zorlaştırır. Özel takımlarımızla kapıları ve köşeleri çizmeden, profesyonel sökerek asansörlü araçlarımıza yüklüyoruz. Montaj ve demontaj işlemi kesinlikle fiyattan düşülmez.</li>
                <li style="margin-bottom:0.5rem;"><strong>Sıfır Gibi Tertemiz Spot Mobilyalar:</strong> Genelde 2. el mobilya denince akla eski, yıpranmış ürünler gelebilir. Aygül Spot vitrinlerinde ancak testten geçmiş, lekesiz, yırtıksız ve hijyen standartlarını karşılaşan mobilyalar yer alır.</li>
                <li style="margin-bottom:0.5rem;"><strong>Ev Kurmada Tasarruf:</strong> Kayseri gibi düğün ve taşınma rotasyonunun sert olduğu illerde çeyiz niteliğindeki mobilyalara servet ödemeden harika kombinasyonlar yakalayabilirsiniz.</li>
            </ul>
        `
    },
    {
        name: 'İkinci El Buzdolabı',
        slug: 'ikinci-el-buzdolabi',
        title: 'Kayseri İkinci El Buzdolabı Alan Yerler | Aygül Spot',
        desc: 'Kayseri 2. el buzdolabı alım satım noktası. Bosch, Arçelik, Beko ve Profilo spot buzdolaplarınız kapınızdan en iyi fiyat garantisiyle alınır.',
        keywords: 'kayseri ikinci el buzdolabı, 2.el buzdolabı alanlar kayseri, kayseri spot buzdolabı fiyatları, buzdolabı alan yer',
        content: `
            <p>Evin en hayati cihazı olan buzdolabı, hem satın alınırken hem de satılırken uzmanlık gerektiren hassas bir beyaz eşyadır. Buzdolabınız garantili bile olsa kimi zaman model değiştirmek isteyebilir, daha geniş hacimli bir No-Frost'a veya gardırop tipi (çift kapılı) bir buzdolabına geçiş yapmak isteyebilirsiniz. Kayseri genelinde <strong>ikinci el buzdolabı satmak</strong> veya tamamen işlevsel sorunsuz bir spot buzdolabı almak istiyorsanız <strong>Aygül Spot</strong> sizin tek adresinizdir.</p>
            
            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Buzdolabınızı Satarken Zarar Etmeyin!</h3>
            <p>Kullanılmış bir buzdolabının değeri sadece markasıyla değil, soğutma performansıyla, motor sesiyle ve kozmetik (dış yüzey kırık/ezik) temizliğiyle ölçülür. Arçelik, Bosch, Beko, Profilo, Vestel veya Samsung... Markası ne olursa olsun cihazınızı piyasa taban fiyatlarına hurdacı mantığı ile değil, son tüketici için kullanılabilir donanım değerinde (spot piyasasında) fiyatlandırıyoruz. Kayseri’nin hangi ilçesinde olursanız olun ağır ve taşıması güç olan buzdolabınızı aynı gün adresinizden çıkartıyoruz.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Spot Buzdolabı Satın Alırken Kazandıran Fırsatlar</h3>
            <ul style="margin-left: 1.5rem; margin-top:0.8rem; color:var(--text-gray); line-height:1.7;">
                <li style="margin-bottom:0.5rem;"><strong>Teknik Test ve Soğutma Garantisi:</strong> Aygül Spot üzerinden alacağınız tüm ikinci el buzdolapları önceden 48 saatlik soğutma suyu testinden geçer, motor ve gaz kontrolleri teknik birimce onaylanır. Cihaz kapınıza temiz teslim edilir.</li>
                <li style="margin-bottom:0.5rem;"><strong>Dik ve Güvenli Sevkiyat:</strong> Kapalı kasa özel nakliye araçlarımız sayesinde cihazınız yatırılmadan, gaz kilitlenmesi yaşanmadan evinize taşınır ve fişi talimatlara uygun şekilde bağlanır.</li>
                <li style="margin-bottom:0.5rem;"><strong>Makul Ev Bütçesi:</strong> Üst segment No-Frost bir buzdolabını neredeyse mağaza fiyatının 4'te 1'i rakamlarına mağazamızdan tedarik edebilirsiniz.</li>
            </ul>
        `
    },
    {
        name: 'Trend Spot Eşya',
        slug: 'spot-esya',
        title: 'Kayseri Spot Eşya ve Spotçular Merkezi | Aygül Spot',
        desc: 'Kayseri spotçu arayışınıza son! Kutusunda ya da çok az kullanılmış sıfır ayarında elektronik, beyaz eşya ve mobilya için lider spot mağazası.',
        keywords: 'kayseri spot eşya, kayseri spotçular, sıfır ayarı eşya, defolu eşya kayseri, kayseri ucuz evkur, kayseri spot pazar',
        content: `
            <p>Gelişen teknolojiler ve değişen tasarım modaları her geçen gün sıfır eşya fiyatlarını oldukça yukarılara çekmektedir. Ancak <strong>Spot Eşya</strong> dünyasında durum tam tersidir. Spot eşya, kutusu hiç açılmamış mağaza fazlası ürünlerden, teşhir olarak kısa bir süre raflarda sergilenmiş cihazlardan veya çok az kullanılıp ihtiyaç fazlası kalmış yeni gibi eşyalardan oluşur. <strong>Kayseri Aygül Spot</strong>, müşterilerine tam da bu zengin ürün kalitesini çok ekonomik fiyatlara sunan lokomotif mağazadır.</p>
            
            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Spot Piyasanın Size Kazandırdığı Artılar</h3>
            <p>Evinizi tamamen baştan dekore ederken çamaşır makinesi, bulaşık makinesi, lcd televizyon veya bir koltuk takımı almanız gerektiğinde normal mağazalar sizleri çok yüksek bedellerle karşılar. Spot bayileri ise hızlı sürüm mantığı ile kar payı düşük, tüketiciye ise bir o kadar dostane fiyatlar sunar. Biz de Kayseri merkezde binlerce defolu beyaz eşyayı veya model değişikliğinden ambalajında kalmış elektronikleri sizlerle dev fırsat garantisiyle kavuşturuyoruz.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Kayserililerin Lider Spotçusu: Aygül Spot</h3>
            <ul style="margin-left: 1.5rem; margin-top:0.8rem; color:var(--text-gray); line-height:1.7;">
                <li style="margin-bottom:0.5rem;"><strong>Mağaza Sınıfında Alışveriş:</strong> Ürün seçerken sokaktaki esnaflarda dolaşıyormuş gibi değil, tertemiz kurumsal bir mağazada aileniz ile garantili cihaz seçiyormuş hissini yaşarsınız.</li>
                <li style="margin-bottom:0.5rem;"><strong>Sürekli Güncellenen Vitrin:</strong> Kayseri içinde geniş bir şahıs ve kurum satın alım bağımız olduğu için mağazamıza her gün yeni bir spot fırın, led tv, çeyiz paketi ya da ankastre takım gelir.</li>
                <li style="margin-bottom:0.5rem;"><strong>Hediye Alanlara Açık Fiyat:</strong> Satmak istediğiniz, nakde sıkıştığınız ve elinizde kutusuyla bulunan faturalı yeni eşyalarınız için Kayseri'deki diğer noktalara kıyasla net kar oranları teklif eder, el emeğinizi sömürmeyiz.</li>
            </ul>
        `
    },
    {
        name: 'İkinci El Beyaz Eşya',
        slug: 'ikinci-el-beyaz-esya',
        title: 'Kayseri İkinci El Beyaz Eşya Alan Yerler | Spot Beyaz Eşya',
        desc: 'Kayseri garantili ikinci el beyaz eşya alanı: Çamaşır makinesi, bulaşık makinesi, ankastre ocak ve fırınları piyasa değerinde satın alıyoruz.',
        keywords: 'kayseri ikinci el beyaz eşya, spot beyaz eşya kayseri, ikinci el bulaşık makinesi, ikinci el çamaşır makinesi, beyaz eşya alanlar',
        content: `
            <p>Modern şehir yaşamında onsuz yapamayacağımız cihazlardan oluşan beyaz eşya kategorisi; ev aletleri, soğutucular, yıkayıcılar ve pişiriciler olmak üzere ana ev temellerini meydana getirir. Çoğu tüketici ev taşıma, eşya değişimi veya tek eşyası arzı verdiğinde çamaşır ve bulaşık makinesini ne yapacağını şaşırır. <strong>Kayseri Aygül İkinci El ve Spot Evkur</strong> tam burada profesyonel bir "Alım ve Satım Borsası" organizasyonu üreterek eşya karmaşasını hızlıca sonuçlandırır.</p>
            
            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Beyaz Eşyalarınız Paraya veya Yeni Modele Dönüşsün</h3>
            <p>Evinizde atıl duran bir derin dondurucu, yeni teknoloji ile değiştirdiğiniz eski model bir çamaşır makinesi, düğün çeyizinde yenilendiği için kullanılmayan kurutma makinesi ve sağlam durumdaki ankastre pişiriciniz için dükkan dükkan gezmenize ve değer kaybı yaşamanıza katiyen izin vermiyoruz. Beyaz eşyalarınız mekanikten daha çok elektronik tabanlıdır ve doğru bakılmadığında hızla eskir, o yüzden eşyanızı ne kadar hızlı paraya çevirirseniz o kadar kazanırsınız. Sadece Whatsapp'tan ilgili beyaz eşyanın 2 fotoğrafını atarak anında tahsilat yapabilirsiniz.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Neden Spot Beyaz Eşyada Bizi Seçiyorsunuz?</h3>
            <ul style="margin-left: 1.5rem; margin-top:0.8rem; color:var(--text-gray); line-height:1.7;">
                <li style="margin-bottom:0.5rem;"><strong>Söküm Kolaylığı (Su ve Tesisat):</strong> Bir çamaşır makinesini sökerken su vanası ya da atık giderine zarar vermek an meselesidir. Kendi bünyemizde barındırdığımız güvenilir nakliye personelleri tüm bu teknik boru-bağlantı iptallerini güvenle sökerek araca yükler.</li>
                <li style="margin-bottom:0.5rem;"><strong>Öğrenci ve Memur Paketleri:</strong> Bütçesi dar olan kamu çalışanları ya da Erciyes Üniversitesi tayfası için çok ekonomik tam paket (Çamaşır, Bulaşık, Buzdolabı) spot setler barındırırız.</li>
                <li style="margin-bottom:0.5rem;"><strong>Yüksek Teklif Nakit Ödeme:</strong> Yalan vaatler, veresiyeler ve taksitlerle eşyanızı vadeli satın alma tuzağına bizim şeffaf ticaretimiz ile düşmezsiniz.</li>
            </ul>
        `
    },
    {
        name: 'İkinci El Televizyon',
        slug: 'ikinci-el-televizyon',
        title: 'Kayseri İkinci El Televizyon Alanlar | LCD, LED, Smart TV',
        desc: 'Kayseri ikinci el ve spot televizyon ticareti. Kırığı/çiziği olmayan dev ekran oled, smart veya led tv ürünlerinizi evinizden değerine anında alıyoruz.',
        keywords: 'kayseri ikinci el televizyon, 2.el tv alanlar kayseri, ikinci el smart tv satmak, kayseri spot led tv',
        content: `
            <p>Teknoloji hiç durmaz! Ekran çözünürlükleri büyür, Smart TV'ler yerini yapay zeka destekli 4K-8K Android televizyonlara bırakırken hepimiz oturma odamıza daha güncel ve daha büyük bir ekran asmak isteriz. Ancak mevcut durumda hala harika çalışan bir televizyonunuz varken ne yapacaksınız? Cevap çok basit: <strong>Kayseri Aygül Spot Televizyon Birimi</strong> sayesinde eskiyen ama sağlam olan televizyonlarınızı yepyeni bir tv bütçesi için saniyeler içinde nakte çevireceksiniz.</p>
            
            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Ekranlarınızı Değerinde Konuşturuyoruz!</h3>
            <p>Elinizdeki Samsung, LG, Philips, Vestel, Sony ya da Toshıba markalı LCD, LED ve Smart Televizyonlar; inç değerlerine, panel sağlıklarına, ölü piksel veya ekran gölgelenmesine sahip olmamalarına göre ciddi bir ikinci el fiyat pazarını elinde bulundurur. Ekranda vuruk / kırık olmadığı müddetçe eskiyen televizyonunuz gerçek bir varlıktır. Biz Kayseri'nin evkur lideri olarak teknolojik cihazlara gerçek teknoloji değeriyle teklif yapıyor; anlaşılan meblağı da anında cebinize havale ediyoruz.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">2.El Alış ve Satışta Avantajlı Televizyon Ticareti</h3>
            <ul style="margin-left: 1.5rem; margin-top:0.8rem; color:var(--text-gray); line-height:1.7;">
                <li style="margin-bottom:0.5rem;"><strong>Oda Odası Fiyatına Dev Ekran:</strong> Mağazamız stoklarında sıkıntısız, internete doğrudan giren (wifi), YouTube ve Netflix özellikli temiz LCD veya LED televizyonları, piyasa mağazalarından çok çok ucuz rakamlarla edinerek ev sinemanızı kurabilirsiniz.</li>
                <li style="margin-bottom:0.5rem;"><strong>Hassas Nakliye (Paketleme):</strong> Bir cihazı alırken en korkutucu süreç nakliyedir. Kendi elemanlarımız hassas streç filmler ve koruyucu havalı naylonlarla ekranı paketler asansörden öyle indirirler. Size gram uğraş vermek yoktur.</li>
                <li style="margin-bottom:0.5rem;"><strong>Duvar Askı ve Ayaklar:</strong> Ekstra satılan orijinal ayak ve askı aparatlarını da cihazla beraber teslim etmeniz durumunda televizyonunuz ek prim ile fiyatlandırılır. Tüketici her daim bizden karlı çıkar.</li>
            </ul>
        `
    },
    {
        name: 'İkinci El Yatak Odası',
        slug: 'ikinci-el-yatak-odasi',
        title: 'Kayseri İkinci El Yatak Odası Takımı | Mobilya Spot',
        desc: 'İkinci el yatak odası takımları, gardıroplar, şifonyerler ve temiz bazalar Kayseri genelinden nakliye desteği ile alınır ve sıfır spot yatak odaları çok ucuza satılır.',
        keywords: 'kayseri ikinci el yatak odası, yatak odası takımı alan yerler, baza yatak alanlar kayseri, ikinci el dolap',
        content: `
            <p>Günümüzün neredeyse üçte birini geçirdiğimiz yatak odaları, ev dekorasyonunun hem konfor hem de görsellik açısından en vazgeçilmez grubudur. Yatağı çökmüş bir baza, kapağı kapanmayan bir gardırop ya da aynası sırını dökmüş bir şifonyer hem ruh halinizi bozar hem de düzeninizi yok eder. Kayseri'de evinizin yeni enerjisi için kullanmaktan vazgeçtiğiniz <strong>yatak odası takımlarını</strong> çok iyi fiyatlarla bize satabilir ve mağazamızdan son moda, lekesiz <strong>ikinci el ve spot yatak odalarına</strong> güvenle sahip olabilirsiniz.</p>
            
            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">MDF veya Sunta, Değerini Bilerek Alıyoruz!</h3>
            <p>Mobilyaların birleşim malzemelerine (Mdf-Lam, Sunta-Lam, Masif Kayın, Meşe vb.) göre ve yatak/baza mekanizmalarındaki demir sağlamlığına göre ekspertiz yapmaktayız. Taşınirken "Bu dolabı kargo firması sökerse bir daha takamayız, atalım gitsin" diye düşünmeyin! Kayseri içindeki herhangi bir ilçede iseniz bizim ustalarımız dolabınızın sökümünü yaparak ahşap patlamalarına olanak vermeden eşyanızı alacak ve paranızı adresinizde peşinen sayacaktır.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Sorunsuz ve Rahat Çözümler (Neden Aygül Spot?)</h3>
            <ul style="margin-left: 1.5rem; margin-top:0.8rem; color:var(--text-gray); line-height:1.7;">
                <li style="margin-bottom:0.5rem;"><strong>Değersiz Algısına Son:</strong> Yatak odası sadece bir eşya değil çok parçalı dev bir tasarımdır. Karyola, dolap, komodin ve aynalık set halinde eksiksiz sağlandığında ek özel fiyat listesi çıkartılır, eşyanız kıymetlenir.</li>
                <li style="margin-bottom:0.5rem;"><strong>Hijyen Her Şeydir:</strong> Sattığımız spot veya az kullanılmış bazaların demir içleri ve yaylı yataklar özel detaylı (buhar vb.) dezenfektasyondan geçmiş gibi vitrinimize temiz şekilde yansır, size hiçbir suretle kirli sürprizler üretilmez.</li>
                <li style="margin-bottom:0.5rem;"><strong>Evden Al Eve Ver:</strong> Sizi asla yormayız. Marangoz ve kurulum operasyonlarını ücretsiz sağladığımız uzman ekiplerimizle yükünüzü sırtlıyor ve evlerinize modernliği zahmetsiz taşıyoruz.</li>
            </ul>
        `
    },
    {
        name: 'İkinci El Salon Takımı',
        slug: 'ikinci-el-salon-takimi',
        title: 'Kayseri İkinci El Salon ve Oturma Takımı Alanlar',
        desc: 'Kayseri sınırları içinden ikinci el koltuk takımı, chester salon grubu, L oturma grubu alımlarında en garantili, güvenli, kapıdan anında ödeme yapan firma.',
        keywords: 'ikinci el salon takımı kayseri, ikinci el oturma grubu kayseri, 2.el koltuk alan yer, spot chester koltuk, köşe takımı spot',
        content: `
            <p>Dostların ağırlandığı, aile bağlarının paylaşılarak güçlendiği evlerin vitrini: Salonlar. Mobilya ve kumaş modasının yıldan yıla son sürat evrildiği sektörde salon veya oturma grubunuzdan kısa zamanda sıkılabilirsiniz. Yeni evin salonuna eskisinin rengi uymayabilir ya da köşe mizanpajı yanlış kalabilir. Peki ya çöpe atmayacak kadar değerli olan bu takımlara ne olacak? İşte <strong>Aygül Spot Kayseri Koltuk ve Salon Takımı uzmanlığı</strong> tam orada sahneye çıkmaktadır.</p>
            
            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Koltuk ve L Gruplarınızı Nasıl Satarsınız?</h3>
            <p>Oturma odası takımında öncelikli fiyatımız; kumaşın (tay tüyü, keten, pamuklu, suni deri) sağlamlık durumuna, sigara yanığı olmamasına, minderde iskelet çökmesi varlığına bakılarak hesaplanır. Modern chester kasalar, spor koltuklar veya avangart dev salon modelleri fark etmeksizin; işlevselliği yerinde olan her türlü mobilyanızı adresten teslim alarak paranızı takdim ediyoruz.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Oturma Grubu Seçiminizde Kusursuz Konfor ve Ucuzluk</h3>
            <ul style="margin-left: 1.5rem; margin-top:0.8rem; color:var(--text-gray); line-height:1.7;">
                <li style="margin-bottom:0.5rem;"><strong>Hacimli ve Modern Salonlar Mümkün:</strong> Kayseri vitrinlerimizde mağaza poşetinde duran defolu ürünler yepyeni olmakla beraber, 2. el olanlar bile üstün özenle alınmış lekesiz modern ürünlerdir. Piyasanın en az yarı fiyatına muhteşem L köşe takımlarına sahip olarak cebinizi kurtarırsınız.</li>
                <li style="margin-bottom:0.5rem;"><strong>Dert Etmeyin, Taşıyoruz:</strong> Özellikle asansörsüz apartmanlara dar girişli evlere koca bir koltuğu, üçlüyü çıkarmak tam bir işkencedir. Siz hiç gerilmeyin, Aygül Spot nakliye ekibi ürünlerinizi sizin adınıza sırtlar, montajı yerinde yapıp sizi dinlenmeye bırakır.</li>
                <li style="margin-bottom:0.5rem;"><strong>Doğru Fiyat Teklifi:</strong> Ne ölü fiyata eşya alan acımasız sistemlere tabisiniz ne de size yalan vaatler veren internet ilanlarına! Bir telefon üzerinden Whatsapp aracılığıyla "kırpmasız" dürüst en yüksek nakit limitlerini size sunuyoruz.</li>
            </ul>
        `
    }
];

const templatePath = path.join(__dirname, 'public');

for(const serv of services) {
    const htmlContent = `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${serv.title}</title>
    <meta name="description" content="${serv.desc}">
    <meta name="keywords" content="${serv.keywords}">
    <meta name="robots" content="index, follow">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <main id="main-content">
    <!-- PAGE HERO -->
    <section class="page-hero">
        <h1>${serv.name}</h1>
        <p>Kayseri'de garantili nakit alım satım ve cazip spot alışverişi.</p>
        <div class="breadcrumb">
            <a href="/">Ana Sayfa</a>
            <span>/</span>
            <a href="/hizmetlerimiz.html">Hizmetlerimiz</a>
            <span>/</span>
            <a href="/${serv.slug}.html">${serv.name}</a>
        </div>
    </section>

    <!-- CONTENT -->
    <section class="section">
        <div class="container fade-in">
            <div class="about-content" style="gap:2rem;">
                <div class="about-text" style="grid-column: span 2;">
                    <span class="badge" style="color:var(--primary); background:rgba(27,94,32,0.1); padding:4px 10px; border-radius:10px; font-weight:bold; font-size:0.8rem; margin-bottom:1rem; display:inline-block;">Hizmetlerimiz</span>
                    <h2 style="font-family:'Playfair Display', serif; font-size:2.2rem; margin-bottom:1.5rem;">Kayseri ${serv.name} Ticareti</h2>
                    
                    <div class="seo-long-text" style="color:var(--text-gray); line-height:1.8; font-size:1.05rem;">
                        ${serv.content}
                    </div>
                    
                    <div style="margin-top:2.5rem; background:rgba(230, 81, 0, 0.05); padding:2rem; border-radius:16px; border:1px solid rgba(230, 81, 0, 0.1);">
                        <h4 style="font-size:1.2rem; margin-bottom:1rem;">${serv.name} İhtiyacınız mı Var?</h4>
                        <p style="color:var(--text-gray); margin-bottom:1.5rem;">Eski eşyanızı satarak hemen nakit paraya çevirmek veya uygun fiyata spot garantili bir yeni eşya bularak yüzünüzü güldürmek için hemen bizimle iletişime geçin. Ekibimiz Kayseri'nin tamamına aynı gün ulaşım sağlar.</p>
                        <div style="display:flex; gap:1rem; flex-wrap:wrap;">
                            <a href="https://wa.me/905393190959?text=Merhaba,%20${serv.name}%20hakkında%20bilgi/fiyat%20almak%20istiyorum." target="_blank" class="btn-primary">💬 Hemen WhatsApp İle Sor</a>
                            <a href="tel:+905393190959" class="btn-secondary" style="color:var(--text-dark); border-color:#e5e7eb; background:white;">📞 0539 319 09 59</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- BÖLGEYE ÖZEL ÜRÜNLER (JS ile çekilen genel liste showcase) -->
    <section class="section section-dark pt-0">
        <div class="container">
            <div class="section-header fade-in" style="margin-bottom:2rem;">
                <h2>Günün En Çok İlgi Gören İlanları</h2>
                <p>Belki de ${serv.name} kategorisinde aradığınız o inanılmaz tasarımlı uygun fiyatlı eşya hemen aşağıda duruyor!</p>
            </div>
            <div id="loading" class="loading-spinner" style="display:none;"></div>
            <div class="products-grid stagger" id="products-list-grid"></div>
            <div class="text-center mt-2">
                <a href="/urun-listesi.html" class="btn-primary btn-lg">Tüm İlanları (Kataloğu) Göster →</a>
            </div>
        </div>
    </section>

        </main>
<script src="/js/main.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', async () => {
            const grid = document.getElementById('products-list-grid');
            const spinner = document.getElementById('loading');
            try {
                spinner.style.display = 'block';
                // Eger kategoriye ozel urun isterseniz fetch('/api/products?limit=6&category=X') yapılabilir fakat sitemin geneli bir listeleme yapıyor:
                let fetchUrl = '/api/products?limit=6';
                const catMap = {
                    'ikinci-el-mobilya': 'mobilya',
                    'ikinci-el-buzdolabi': 'buzdolabi',
                    'spot-esya': 'spot-esya',
                    'ikinci-el-beyaz-esya': 'beyaz-esya',
                    'ikinci-el-televizyon': 'televizyon',
                    'ikinci-el-yatak-odasi': 'yatak-odasi',
                    'ikinci-el-salon-takimi': 'salon-takimi'
                };
                const mappedCategory = catMap['${serv.slug}'];
                if(mappedCategory) fetchUrl += '&category=' + mappedCategory;

                const res = await fetch(fetchUrl); 
                let products = await res.json();
                
                // eger o kategoride urun yoksa, fallback olarak rastgele urunleri getir (API paramsuz)
                if(products.length === 0) {
                    const resAll = await fetch('/api/products?limit=6');
                    products = await resAll.json();
                }

                spinner.style.display = 'none';
                
                if (products.length === 0) {
                    grid.innerHTML = '<p class="empty-state">Şu an aktif ürün bulunmamaktadır.</p>';
                } else {
                    grid.innerHTML = products.map(p => createProductCardHTML(p)).join('');
                    grid.classList.add('visible'); // anims
                }
            } catch (error) {
                console.error(error);
            }
        });
    </script>
</body>
</html>`;
    fs.writeFileSync(path.join(templatePath, `${serv.slug}.html`), htmlContent);
}

console.log('7 adet SEO optimize edilmiş HİZMET sayfası başarıyla public/ içine kaydedildi.');
