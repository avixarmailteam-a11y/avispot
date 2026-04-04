const fs = require('fs');
const path = require('path');

const regions = [
    {
        name: 'Talas',
        slug: 'talas',
        title: 'Talas İkinci El Eşya Alım Satım | Aygül Spot Kayseri',
        desc: 'Talas ikinci el eşya alan yerler arıyorsanız Aygül Spot yanınızda! Öğrenci kenti Talas bölgesinde yüksek fiyat teklifleri ve aynı gün ücretsiz nakliye ile mobilya ve beyaz eşya alıyoruz.',
        keywords: 'talas ikinci el eşya, talas spotçu, kayseri talas evkur, talas ikinci el mobilya, talas kullanılmış eşya alanlar, talas beyaz eşya alan yerler',
        content: `
            <p>Talas, Kayseri'nin en dinamik, nüfus hareketliliği en yüksek ve özellikle Erciyes Üniversitesi'nin varlığı sebebiyle öğrencilerin yoğun olarak yaşadığı ilçesidir. Sık sık gerçekleşen ev taşımaları, tayinler, mezuniyetler veya ev yenileme telaşları, Talas bölgesinde ciddi bir ikinci el eşya sirkülasyonu yaratır. İşte bu yoğun eşya trafiğinde <strong>Aygül Spot</strong> olarak, Talas halkına, öğrencilere ve memurlara kesintisiz, hızlı ve güvenilir bir ikinci el eşya pazar yeri sunuyoruz.</p>
            
            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Talas İkinci El Beyaz Eşya ve Mobilya Alanlar</h3>
            <p>Kullanmadığınız, evinize sığmayan veya modelini değiştirmek istediğiniz mobilya gruplarını (yatak odası, salon takımı, çekyat, gardırop) ve beyaz eşyalarınızı (buzdolabı, çamaşır makinesi, bulaşık makinesi, TV) yok pahasına elden çıkarmak yerine bizimle iletişime geçebilirsiniz. Talas Anayurt, Yenidoğan, Mevlana, Bahçelievler gibi tüm mahallelere anında ekspertiz hizmeti sunarak, eşyalarınızı piyasa değerinde değerlendiriyoruz.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Neden Talas'ta Aygül Spot'u Seçmelisiniz?</h3>
            <ul style="margin-left: 1.5rem; margin-top:0.8rem; color:var(--text-gray); line-height:1.7;">
                <li style="margin-bottom:0.5rem;"><strong>Öğrenci Dostu Fiyatlar:</strong> Yeni bir öğrenci evi mi kuruyorsunuz? A'dan Z'ye temiz, bakımlı ve bütçe dostu spot eşyalar için en doğru adres biziz.</li>
                <li style="margin-bottom:0.5rem;"><strong>Aynı Gün Nakit Ödeme:</strong> Satmak istediğiniz eşyalarda WhatsApp üzerinden veya yerinde fiyat tespiti yapıyor, anında elden nakit ödeme sağlıyoruz.</li>
                <li style="margin-bottom:0.5rem;"><strong>Ücretsiz ve Hızlı Nakliyat:</strong> "Acaba eşyaları nasıl taşıyacağım?" derdine son. Aygül Spot'un alanında uzman taşıma ekibi, Talas ilçesindeki tüm apartman ve binalara asansörlü veya asansörsüz ücretsiz nakliyat operasyonları sunar. Eşyalarınız profesyonelce sökülür ve taşınır.</li>
                <li><strong>Kurumsal İletişim & Güvenilirlik:</strong> Satış sonrasında karşılaştığınız herhangi bir sorunda her zaman bir muhatabınız bulunur. Aygül Spot sözünün arkasındadır.</li>
            </ul>
            <p style="margin-top:1.5rem;">Ev ihtiyaçlarınızı ertelemeyin ya da fazlalık eşyalarınızın evinizi daraltmasına izin vermeyin. Talas bölgesi için bizimle iletişime geçin, Kayseri'nin en dürüst evkur ticaretiyle hemen tanışın.</p>
        `
    },
    {
        name: 'İldem',
        slug: 'ildem',
        title: 'İldem İkinci El Eşya Alanlar ve Satanlar | Aygül Spot',
        desc: 'Kayseri İldem zweite el eşya alım satımı. Beyaz eşya, çekyat, yatak odası gibi spot ürün arayışlarınızda İldem bölgesi için ücretsiz kapıdan alım sunuyoruz.',
        keywords: 'ildem ikinci el eşya, ildem spot eşya kayseri, ildem beyaz eşya alanlar, ildem ikinci el koltuk takımı, ildem eşya satmak',
        content: `
            <p>Kayseri'nin gözde ve hızla kalabalıklaşan modern semtlerinden olan İldem, gerek yeni konut projeleri gerekse devam eden yoğun nüfus artışı ile eşya sirkülasyonunun merkezi konumundadır. Yeni ev sahiplerinin yeni eşyalar alma isteğiyle elde kalan sağlam mobilyalar veya yeni evlenecek çiftlerin bütçelerini dengelemek adına tertemiz ikinci el ürünler arayışı İldem'de oldukça fazladır. <strong>Aygül Spot</strong>, tüm bu ihtiyaç sarmalında İldem bölgesi insanı için şeffaf ticaretin kapılarını aralıyor.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">İldem Spot ve İkinci El Ev Eşyası Uzmanı</h3>
            <p>Eşya değişim süreçleri genellikle streslidir. İkinci el eşya mağazamız sayesinde İldem Fatih, İldem Cumhuriyet, Beyazşehir ve TOKİ bölgelerindeki satılık ev eşyalarınız için ilan vermek, uzun süre beklemek veya güvensiz alıcılarla zaman kaybetmek zorunda değilsiniz. Satmak istediğiniz televizyon, buzdolabı, L koltuk, yatak odası mobilyası veya çamaşır makinesi gibi eşyalar için ekibimiz kapınıza kadar gelmektedir.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">İldem Bölgesindeki Avantajlarımız</h3>
            <ul style="margin-left: 1.5rem; margin-top:0.8rem; color:var(--text-gray); line-height:1.7;">
                <li style="margin-bottom:0.5rem;"><strong>Adresten Hızlı Alım:</strong> İldem ve bölgelerine aktif sevkiyatlarımız olduğu için aradığınız gün içinde personelimizi ekspertiz için evinize yönlendirebiliyoruz.</li>
                <li style="margin-bottom:0.5rem;"><strong>Değerinde Gerçek Fiyat:</strong> Kullanılmış eşyalarınızı ölü fiyatlara değil, güncel sağlamlık ve marka değerlerine göre en iyi spot piyasası üzerinden değerlendiriyoruz. Amacımız sadece alırken değil, müşterilerimizi uzun vadede kazanmaktır.</li>
                <li style="margin-bottom:0.5rem;"><strong>Geniş Spot Ürün Yelpazesi:</strong> İldem'deki yeni evinize geçiyor ve evkur ürünleri arıyorsanız, mağazamızda A'dan Z'ye kalite kontrolü yapılmış garantili çamaşır makinesinden yemek odası takımına kadar pek çok ürünü bulabilirsiniz.</li>
            </ul>
            <p style="margin-top:1.5rem;">İldem sınırları içerisinde sıfır hata, sıfır zahmet mottosuyla 2. el eşyalarınızı paraya çevirmek için yorulmayın. Bırakın taşıma ve nakliye masraflarını Aygül Spot çözsün, siz yalnızca yerinizin ferahlığının çıkarın.</p>
        `
    },
    {
        name: 'Erkilet',
        slug: 'erkilet',
        title: 'Erkilet İkinci El Eşya Alım Satım - Ücretsiz Nakliye | Aygül Spot',
        desc: 'Kayseri Erkilet spot eşya dünyası. Arızasız, tertemiz ikinci el beyaz eşya ve kullanmadığınız mobilyalarınızı değerinde Erkilet genelinden nakit alıyoruz.',
        keywords: 'erkilet spotçu, erkilet ikinci el eşya kayseri, erkilet 2. el eşya alan yerler, erkilet ikinci el buzdolabı',
        content: `
            <p>Kayseri'nin huzurlu ve hızla yapılaşan bölgelerinden olan Erkilet, geniş ve yeni daire projeleri ile adından sıkça söz ettirmektedir. Yeni eve geçerken mevcut mobilyalarının ölçülerinin veya tarzının yeni mekanınıza uymaması son derece olağandır. <strong>Aygül Spot İkinci El</strong> ailesi olarak Erkilet Dere, Erkilet Osmangazi, Erkilet Ertuğrulgazi ve çevresinden bizlere ulaşan tüm eşya satım ilanlarına en hızlı geri dönüşleri sağlıyoruz.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Erkilet Bölgesinde Mobilya ve Beyaz Eşyanın Doğru Adresi</h3>
            <p>Mağazamız, Kayseri genelinde uzun yıllara dayanan kalitesi ile beyaz eşya (Buzdolabı, Çamaşır ve Bulaşık Makineleri, Derin Dondurucular, Mini Fırınlar), Elektronik Ürünler (LED, LCD, Smart OLED Televizyonlar, Ankastre Setler) ve Mobilyalar (Yatak Odası takımları, Yemek Odası Takımları, Çekyat, Baza ve Ranza Modelleri) alanlarında çalışmaktadır. Erkilet bölgesine giden özel rotalarımız sayesinde bölge sakinlerine günlerce bekleme süresi vermeden aynı gün hizmet götürülmektedir.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Erkilet'e Neden Çok Hızlıyız? Neden Tercih Sebebi Oluyoruz?</h3>
            <ul style="margin-left: 1.5rem; margin-top:0.8rem; color:var(--text-gray); line-height:1.7;">
                <li style="margin-bottom:0.5rem;"><strong>Süreçte Kolaylık:</strong> Erkilet'te oturuyorsanız yapmanız gereken tek şey bize eşyalarınızın birkaç net fotoğrafını ve genel durumlarını WhatsApp üzerinden bildirmektir. Zamanınız sizin için değerli, dijital kanallardan hemen fiyat belirliyoruz.</li>
                <li style="margin-bottom:0.5rem;"><strong>Nakit Akışı (Anında Ödeme):</strong> Verdiğimiz teklifi kabul ettiğiniz anda anlaşılan tutar eşyalar kapıdan çıkmadan elden nakit olarak ya da IBAN adresinize havale ile ödenir. Güvenli ticaretten asla taviz vermiyoruz.</li>
                <li style="margin-bottom:0.5rem;"><strong>Titiz İşçilik ile Demontaj:</strong> Evinizin parkelerine, yeni veya eski binanızın asansör ve merdiven boşluklarına en ufak bir zarar gelmemesi adına profesyonel personelimiz tüm üniteleri dikkatlice söker ve kaplar.</li>
            </ul>
            <p style="margin-top:1.5rem;">Yüksek müşteri memnuniyeti profiline sahip Aygül Spot, Erkilet bölgesindeki ihtiyaçlarda ve satışlarda size dost hane çözümleri sunar. Satmak istediğiniz herhangi ev eşyası için piyasa araştırması yaparken mutlaka bize danışmayı unutmayın.</p>
        `
    },
    {
        name: 'Melikgazi',
        slug: 'melikgazi',
        title: 'Melikgazi İkinci El Eşya Merkezi | Spot Alanlar | Aygül Spot',
        desc: 'Kayseri Melikgazi ikinci el spot eşya firması. Melikgazi merkezi anında nakit işlemiyle kullanılmayan mobilya, televizyon ve ev eşyalarınız anında alınır.',
        keywords: 'melikgazi ikinci el eşya, melikgazi spot kayseri, melikgazi eşya alan yerler, melikgazi spot pazar',
        content: `
            <p>Melikgazi, Kayseri ticaretinin ve gündelik yaşamının merkez noktasıdır. Oldukça kalabalık bir yapıya ve farklı kültürlerin harmanlandığı büyük mahallelere sahip olması, ikinci el ile spot eşya alışverişini bir lüksten ziyade zaruri bir kolaylık haline getirmektedir. Ticaretin böylesine dinamik döndüğü Melikgazi ilçesinde <strong>Aygül Spot</strong>, ana mağazasının ve dev lojistik ağının verdiği güçle lider spotçunuz konumundadır.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Melikgazi Geneli Komple Eşya ve Ofis Mobilyası Hizmeti</h3>
            <p>Melikgazi bölgesi genelindeki hanelerden sadece beyaz eşya ve salon takımları almakla kalmıyor, aynı zamanda kapanan veya yenilenen ofislere, iş yerlerine, kafe ve yurtlara ait toplu eşya, masa, sandalye, endüstriyel mutfak ekipmanları ve ofis takımlarını da anında nakde çevirebilme potansiyeli yaratıyoruz. Tecrübemiz sayesinde her bir malın edebi piyasa değerini hızla bilir ve teklifimizi iletiriz.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Aygül Spot'un Melikgazi Müşterilerine Sunduğu Ayrılacalıklar</h3>
            <ul style="margin-left: 1.5rem; margin-top:0.8rem; color:var(--text-gray); line-height:1.7;">
                <li style="margin-bottom:0.5rem;"><strong>Lokasyon Avantajı:</strong> Bize zaten çok yakınsınız! Bu sayede bir ürün satın aldığınızda Melikgazi sokak ve caddelerine teslimatlarımız birkaç saat içerisinde bile gerçekleşebilmektedir.</li>
                <li style="margin-bottom:0.5rem;"><strong>7/24 Kesintisiz İletişim:</strong> Eşya bulma, satın alma garantili ticareti gibi konularda mesai dinlemiyoruz. Sabah 09.00 - Akşam 19.00 mağaza çalışma saatlerimiz haricinde bile dijital dünyada sizlere geri dönüş yapıyoruz.</li>
                <li style="margin-bottom:0.5rem;"><strong>Kalite Filtresi:</strong> Melikgazi'deki müşterilerimizden veya spot borsalarından satın aldığımız her cihaz (çamaşır makinesi, buzdolabı vb.) teknik olarak test edilmeden ve onarılardan geçirilmeden asla mağazamızda yeni bir müşteriye sunulmaz. Aygül Spot markası kalitesi ile yaşar.</li>
            </ul>
            <p style="margin-top:1.5rem;">İster Alparslan mahallesinde, ister Mimarsinan'da ya da Çarşı merkezde olun, Melikgazi'nin her bir taşına ayak basıyor ve bütçenizi ferahlatacak garantili spot alım işlerinize talip oluyoruz.</p>
        `
    },
    {
        name: 'Hacılar',
        slug: 'hacilar',
        title: 'Hacılar İkinci El ve Spot Eşya Alan Yerler | Aygül Spot Kayseri',
        desc: 'Hacılar bölgesi ikinci el beyaz eşya ve kullanılmış mobilya alım satımı. Dağlık arazi ve bağ evlerine kadar hizmet. Üstün kaliteli eşyaları Aygül Spotta bulun.',
        keywords: 'hacılar spot eşya, hacılar ikinci el mobilya, kayseri hacılar evkur, hacılar 2. el eşyacı',
        content: `
            <p>Erciyes'in eteklerinde kurulan kendine has coğrafyası, geniş bağlık arazileri ve lüks villa/bağ evi yapılanmaları ile Kayseri'nin en müstesna bölgelerinden Hacılar için uzun yıllardır özel hizmet modelleri yönetiyoruz. Sıklıkla yaz dönemlerinde veya bağ sezonlarında talep patlaması yaşanan Hacılar'da, ek beyaz eşya, klima kışlık mobilya kurulumu ya da kullanılmayan eski eşyaların nakit olarak satışı işlemleri için <strong>Aygül Spot</strong> yanınızda.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Bağ Evi veya Yeni Villa Düzenlemelerinde Profesyonel İkinci El</h3>
            <p>Hacılar bölgesindeki bir evin tüm ihtiyaçlarını aynı anda spot mağazamızdan tedarik edebilmeniz mümkündür. Bağlık ve bağ evi konsepti için çekyat, baza, ikinci ya da üçüncü bir temiz buzdolabı, fırınlı ocak, mini televizyon ya da yemek masası ihtiyaçlarınızı en ucuz fiyatlarla karşılamanızı sağlarız. Üstelik sıfırına tonlarca ödeme yapıp kısa süre için kullanacağınız eşyalardan sizi korumuş oluruz. Aynı şekilde Hacılar bölgesinden şehir merkezine dönerken artık kullanmak istemediğiniz temiz ürünleri değer kaybettirmeksizin kapıdan alım şartıyla satın alıyoruz.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Hacılar İçin Aygül Spot'un Değer Önermesi</h3>
            <ul style="margin-left: 1.5rem; margin-top:0.8rem; color:var(--text-gray); line-height:1.7;">
                <li style="margin-bottom:0.5rem;"><strong>Özel Nakliyat Kapasitesi:</strong> Hacılar yokuşları veya bağ yolları nakliyat açısından uzmanlık gerektirebilir. Yılların tecrübesi olan şoför ve personel kadromuz hiçbir zorluk yaşamadan eşyalarınızı hasarsız taşıma garantisi verir.</li>
                <li style="margin-bottom:0.5rem;"><strong>Mevsimsel Esneklik:</strong> Yaz aylarında bağlardan inerken ya da ilkbaharda çıkarken eşya kalabalıklarından, eskimiş dolaplarınızdan kurtulmak istediğinizde, size bütçe kazandırarak hızlı çözümler üretiyoruz.</li>
                <li style="margin-bottom:0.5rem;"><strong>Müşteri Yorumları Garantisi:</strong> Bugüne kadar Hacılar bölgesine yürüttüğümüz binlerce alım / satım görevinde her daim güven aşılamanın haklı gururunu taşıyoruz.</li>
            </ul>
            <p style="margin-top:1.5rem;">Mekanınıza ve cebinize dost olmak ilkemizdir. Hacılar ilçesinde bulunan evinizin spot eşya eksiklerini listelemek ve en cazip fiyat tarifelerimizden faydalanmak için bizlerle hemen sağ altta duran WhatsApp veya telefon butonundan iletişim kurmaktan çekinmeyin.</p>
        `
    },
    {
        name: 'Develi',
        slug: 'develi',
        title: 'Develi İkinci El Cihaz Eşya Alım ve Spot Mağazası Kayseri | Aygül Spot',
        desc: 'Kayseri Merkeze bağlı kalmadan Develi ilçesine uzanan nakliye ağımız sayesinde de ikinci el eşya alan yerler aramanıza gerek kalmadı. Nakit spot evkur hizmeti.',
        keywords: 'develi ikinci el eşya, develi spot kayseri, develi eşya satmak, develi evkur alanlar',
        content: `
            <p>Kayseri şehir merkezine belirli bir mesafede yer alıyor olması, pek çok insanın Develi'den eşya alıp satmanın zor ya da imkânsız olduğunu düşünmesine sebep olabilir, ancak <strong>Aygül Spot İkinci El ve Evkur</strong> için mesafe aşılabilir küçük bir detaydır! Geliştirdiğimiz yaygın lojistik ve iş ağımız sayesinde Develi ilçesini ve samimi sokaklarını hizmet alanımıza büyük bir hevesle dâhil etmiş durumdayız.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Develi İçin Zahmetsiz Eşya Satış ve Alış Rehberi</h3>
            <p>Yaşam alanlarınızdaki çekyat, L tipi kanepe, elbise dolabı, ankastre fırın grupları ve televizyon gibi eşyaları değiştirmeye karar vermeniz durumunda Develi'de ilan asma, alıcı bekleme ya da internet ilanlarında fiyat kırma gibi can sıkıcı yöntemlere katlanmanıza lüzum yok. Elinizdeki eşyanın kalitesini koruduğunu, onarım gerektirmediğini ve sağlam olduğunu düşünüyorsanız hemen Aygül Spot WhatsApp hattına detaylı fotoğraflarını göndermeniz ilk adım için yeterlidir. Eşyalarınıza uzman ekspertiz yapılarak size piyasanın üst bandından bir ödeme teklifi iletilir.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Bizim İle Çalışmanın Bölgeye Sağladığı Büyük Fırsatlar</h3>
            <ul style="margin-left: 1.5rem; margin-top:0.8rem; color:var(--text-gray); line-height:1.7;">
                <li style="margin-bottom:0.5rem;"><strong>Mesafe Bedeli Yok:</strong> Satış işlemlerinde genellikle uzaklık sebebi ile taşıma ücreti düşülerek kullanıcı mağdur edilir. Aygül Spot toplu alım ya da makul değerdeki evden alımlarda size hiçbir sürpriz masraf yansıtmaz ve taahhüt ettiği tam tutarı nakit öder.</li>
                <li style="margin-bottom:0.5rem;"><strong>Süreç Süratini Arttırın:</strong> Develi ile Kayseri merkez arasında periyodik kurduğumuz nakliye köprüleriyle randevulaştığımız gün eşyaların sökümünü ve teslimatını tamamlarız.</li>
                <li style="margin-bottom:0.5rem;"><strong>Uygun Ev Dizme Operasyonu:</strong> Develi'ye yeni atanan bir öğretmen ya da memur musunuz? Uygun fiyata temiz ev kurmak için Kayseri merkezli mağazamızdan seçeceğiniz toplu ev eşyası ürünlerini, cüzi fiyatlara ve garanti konseptiyle evinize kadar ulaştırıp kuruyoruz.</li>
            </ul>
            <p style="margin-top:1.5rem;">Mekanların kalitesini değiştirmek, ihtiyaçları değerinde alım-satım politikaları ile gerçekleştirmek isterseniz Aygül Spot Develi spot ve evkur hizmetinize her an hazır pozisyonda sizleri bekliyor.</p>
        `
    },
    {
        name: 'Belsin',
        slug: 'belsin',
        title: 'Belsin İkinci El Eşya Alanlar | Nakit Ödeme Spot Eşya',
        desc: 'Kayseri Belsin ikinci el eşya alanlar olarak bilinen Aygül Spot, Anafartalar, Tınaztepe, Şeker gibi semtlerden anında temiz ve kullanılmayan ev eşyalarınızı fiyatta anlaşarak alır.',
        keywords: 'belsin ikinci el eşya, belsin spotçu kayseri, belsin ev eşyası, belsin mobilya alanlar 2.el',
        content: `
            <p>Modern yerleşim dokusu, yüksek öğrenci yurdu yapıları ve Organize Sanayi yoluna olan yakınlığı ile Kayseri'nin can damarlarından biri olan Belsin; Anafartalar, Tınaztepe, Keykubat ve Selçuklu mahallelerine yayılan geniş bir kitleyi barındırır. Bu kalabalık yerleşkede ortaya çıkan en mühim ihtiyaçlardan olan tayin, evlilik veya ev değiştirme gereksinimlerinde <strong>Belsin ikinci el eşya</strong> uzmanı olarak Aygül Spot markası kalite ve değer yaratır.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Belsin Spot Pazarı'nda Lider Güven Çemberi</h3>
            <p>Herkes 2. el eşyalarını alırken "Bu güvenilir mi? Yarı yolda bırakır mı?" gibi şüphelere veya satarken "Az mı para verdim, evimi temiz taşıyıp duvarlara zarar verirler mi?" gibi korkulara sahip olabilir. Aygül Spot'un yetkin ticareti yıllardır tam olarak bu endişeleri silmeyi başarmıştır. Belsin bölgesinde oturuyor ve özellikle temiz görünümlü, iyi çalışır vaziyette yatak odaları, oturma grupları (l, chester, kanepe) ve akıllı ev teknolojileri arıyorsanız, aradığınız sıfır ayarında seçenekler bizim vitrinimizde yer alır. Benzer şekilde eşyalarınızı paraya dönüştürmek istediğinizde Belsin pazarının en dolgun teklifleri ile size ulaşıyoruz.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Belsin Mahallelerinde Spot Alışverişinin İncelikleri</h3>
            <ul style="margin-left: 1.5rem; margin-top:0.8rem; color:var(--text-gray); line-height:1.7;">
                <li style="margin-bottom:0.5rem;"><strong>Sanayi ve Öğrenci Bandı Güvencesi:</strong> Sürekli gelişen bir mahalle dokusu olduğundan, ev arkadaşı olan öğrenciler veya meslek hayatına yeni başlayan bireyler için maliyeti en aza indirecek paket ev dizme projelerimiz oldukça meşhurdur. Uygun, temiz ve çalışır garantili beyaz eşyaları Belsin merkezli tüm evlere kuruyoruz.</li>
                <li style="margin-bottom:0.5rem;"><strong>Adresten Hızlı Temin:</strong> Uzun süre kullanılmayan ancak yer kaplayan ikinci el buzdolabı ve çamaşır makinesi ürünlerini aynı gün içinde Belsin'deki tüm durak ve sokak adreslerinden şoförlerimiz ile teslim alıyor, paranızı siz çayınızı içmeden nakit ödüyoruz.</li>
                <li style="margin-bottom:0.5rem;"><strong>Profesyonel Ağ:</strong> Bizimle çalışmak hem vaktinizden tasarruf sağlar hem de dolandırıcılık veya kötü niyetli alıcılardan sizi korur.</li>
            </ul>
            <p style="margin-top:1.5rem;">Güven odaklı, sürdürülebilir, nakit ve hızlı ödeme çözümleri arıyorsanız, Belsin sakinleri için sadece bir arama kadar uzağınızdayız. Gelin eski eşyalarınızı nakit berekete dönüştürelim!</p>
        `
    },
    {
        name: 'Altınoluk',
        slug: 'altinoluk',
        title: 'Altınoluk İkinci El Eşya Alım Satım | Kayseri Aygül Spot Evkur',
        desc: 'Altınoluk mahallesi sınırlarında satılık veya alınacak 2. el ev eşyalarınız (mobilya, beyaz eşya, televizyon) için Kayseri Aygül Spot en hızlı değerinde fiyat sağlayan çözüm merkezidir.',
        keywords: 'altınoluk spot eşya, kayseri altınoluk ikinci el, altınoluk evkur, altınoluk mobilya alan yer',
        content: `
            <p>Müstakil ve site yapılı modern mimari akımların birleştiği, Kayseri'nin refahı giderek yükselen ve yeni daire projelerinin hız kazandığı Altınoluk mahallesinde emlak sirkülasyonu aynı zamanda harika bir ikinci el pazarı potansiyeli yaratmaktadır. Genellikle daha ferah, geniş metrekareye sahip yüksek apartmanlara çıkan Altınoluk bölge halkı, yaşam alanlarına daha stil sahibi görünüm kazandırmak için mevcut ev eşyalarından çok temiz olmasına rağmen vazgeçebilir. <strong>Aygül Spot İkinci El Ticareti</strong> tam burada harika bir çözüm köprüsü görevi ifa eder.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Eşyalarınız Altınoluk'ta Altın Değerinde!</h3>
            <p>Koltuk takımlarınız eskimedi ama yeni perdenizle uyuşmuyor mu? Buzdolabınız taşınma esnasında çok temiz kullanılmış olmasına rağmen yeni ankastre mutfak dolaplarına sığmadı mı? Altınoluk bölgesinden bizlere en fazla gelen teklifler bu niteliktedir. Çok kaliteli ve özenle kullanılan ürünler satılmak istendiğinde piyasada çoğu yer ölü maliyet biçebilirken, Aygül Spot adil bir yaklaşım sergileyerek ürünlerin ikinci el piyasa ederinde reel tekliflerde bulunur ve size asgari zarar - azami yarar sağlar.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Aygül Spot Altınoluk Seçkin Hizmetleri</h3>
            <ul style="margin-left: 1.5rem; margin-top:0.8rem; color:var(--text-gray); line-height:1.7;">
                <li style="margin-bottom:0.5rem;"><strong>Süper Lüks Ürün Yelpazesi İçin Talepler:</strong> Mevcut eşyalarınızı alırken sadece basit ev eşyaları olarak düşünmeyin, çok lüks avangard mobilyaları, ultra hd 4k smart oled dev ekran televizyonları bile nakit bütçemizin gücüyle anında işletmemize alıp ödemenizi yapabiliyoruz.</li>
                <li style="margin-bottom:0.5rem;"><strong>Kolaylık ve Demontaj Garantisi:</strong> Taşıma sırasındaki montaj kırım ve zedeleme risklerini tamamen yok ediyoruz. Altınoluk sınırlarındaki lüks ve titiz siteler alanlarında apartman ve site yönetim kurallarına uygun biçimde profesyonel, gürültüsüz söküm ve nakliye organize ediyoruz.</li>
                <li style="margin-bottom:0.5rem;"><strong>Uygun Ve Sıfır Ayarında Tedarik:</strong> Mağazamızın güncel stoğundan talep ettiğiniz çamaşır makinesi gibi yüksek elzem aletlerin sevkiyatı ve test işlemleri teknik ekibimizle birlikte aynı gün gerçekleştirilir.</li>
            </ul>
            <p style="margin-top:1.5rem;">Gerek tarz değişikliği yapmak isteyen ailelerin, gerekse de çok temiz ve garantili yeni gibi ürünlere bütçesini ayırmak isteyen çiftlerin Altınoluk'taki ilk durağı olmak için var gücümüzle çalışıyoruz.</p>
        `
    },
    {
        name: 'Mimsin',
        slug: 'mimsin',
        title: 'Mimsin İkinci El Eşya Piyasası | Spot Mobilya Alanlar ve Satanlar',
        desc: 'Mimsin (Şirinevler) bölgesi spot ikinci el ev eşyası ihtiyaçları, eşya alan yerler ve Kayseri içi değerinde nakit ödemeli güvenilir ticareti Aygül Spot mağazasında keşfedin.',
        keywords: 'mimsin spotçu, mimsin 2.el eşya, mimsin kayseri spot, mimsin eşya almak',
        content: `
            <p>İldem'e uzanan hat üzerinde yer alan, köklü blokları, yoğun site dokusu ile yüzlerce aileye ve bekara ev sahipliği yapan Mimsin bölgesi (Şirinevler) emlak mobilitesi ile ön plandadır. Taşınma süreçleri, eski döküntü eşyaların yenilenmesi, sıfır veya sıfıra çok yakın ürünlerle ev ekonomisinin dengelenmek istenmesi mimsin piyasında büyük ve dinamik bir sirkülasyon gereği barındırır. Kayseri'de sektöre yön veren marka ismiyle <strong>Aygül Spot</strong>, Mimsin sınırlarında da bu güven eksikliğini ve ekonomik yükü kusursuzca doldurmaktadır.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Mimsin Bölgesi'nde Güvenilir 2. El Alışverişi Nedir?</h3>
            <p>Mimsin mahallerindeki binalarda kat sayısı yoğunluğuna göre taşıma bazen problem olabilir ancak yıllarını sahada eskiten usta ekibimiz için bu durum bir engel değil, sadece bir rutindir! Koltuk, derin dondurucu, çeyiz seti, inoks buzdolabı veya modern tv sehpaları... Eski eşyalarınızın kullanılabilirlik durumuna göre anında en yüksek eksper fiyat veriyor; anlaşma halinde Mimsin bölgesine gelerek hem eşya sökümü, paranın teslimi işlemlerini evinizin kapısında tamamlıyoruz. Sıfır bir eşyaya ödeyeceğiniz uçuk rakamların çok altına mağazamızdan Mimsin'e garantili yeni gibi eşyalar gönderebiliriz.</p>

            <h3 style="margin-top:1.5rem; font-size:1.4rem; color:var(--text-dark);">Mimsin Eşya Ticaretinde Sunulan Katma Değer</h3>
            <ul style="margin-left: 1.5rem; margin-top:0.8rem; color:var(--text-gray); line-height:1.7;">
                <li style="margin-bottom:0.5rem;"><strong>Nakit Veya Havale (Ödeme Garantisi):</strong> Fiyatta anlaşılmış bir mobilya grubunda fiyatı daha da kırmak veya vadeli satın alım söylemleri bizim şirketimizde tamamen karşı çıkılan anlayışlardır. Her zaman nakit veya dilediğiniz an EFT yapılarak paranız garanti altındadır.</li>
                <li style="margin-bottom:0.5rem;"><strong>Ücretsiz Lojistik ve İletişim Kolaylığı:</strong> Nakliye süreçleri satıcıyı ve alıcıyı aşırı yorar. Aygül Spot size zahmet çıkartmaz. Güncel iletişim numaramız (0539 319 09 59) ile direkt yetkiliye ulaşıp tek tuşla, Mimsin içinden ücretsiz taşımacılık randevunuzu talep edebilirsiniz.</li>
                <li style="margin-bottom:0.5rem;"><strong>Doğru Yönlendirme İle Karlı Satış:</strong> Hangi eşyalar daha caziptir ve neler talep görmektedir konusunda ücretsiz analiz yapıyor, eşya tasfiyesinde müşteriyi dinleyerek en güvenli planı kurguluyoruz.</li>
            </ul>
            <p style="margin-top:1.5rem;">Uygun ticarette hem paranızı hem de eşyanızın kıymetini saklamak, yepyeni teknoloji ve mobilya dizaynlarını bütçeyi yakmayan spot piyasalardan çözmek istiyorsanız Mimsin bölgesinde en yakınınız Aygül Spot firmasıdır!</p>
        `
    }
];

const templatePath = path.join(__dirname, 'public');

for(const reg of regions) {
    const htmlContent = `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${reg.title}</title>
    <meta name="description" content="${reg.desc}">
    <meta name="keywords" content="${reg.keywords}">
    <meta name="robots" content="index, follow">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
        <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <main id="main-content">
    <!-- PAGE HERO -->
    <section class="page-hero">
        <h1>${reg.name} İkinci El Eşya</h1>
        <p>Kayseri ${reg.name} bölgesinin en güvenilir alım satım mağazası.</p>
        <div class="breadcrumb">
            <a href="/">Ana Sayfa</a>
            <span>/</span>
            <a href="/${reg.slug}-ikinci-el-esya.html">${reg.name} Bölgesi</a>
        </div>
    </section>

    <!-- BÖLGE SEO İÇERİK -->
    <section class="section">
        <div class="container fade-in">
            <div class="about-content" style="gap:2rem;">
                <div class="about-text" style="grid-column: span 2;">
                    <span class="badge" style="color:var(--primary); background:rgba(27,94,32,0.1); padding:4px 10px; border-radius:10px; font-weight:bold; font-size:0.8rem; margin-bottom:1rem; display:inline-block;">Aygül Spot ${reg.name}</span>
                    <h2 style="font-family:'Playfair Display', serif; font-size:2.2rem; margin-bottom:1.5rem;">${reg.name} Bölgesinde İkinci El Eşya Çözümleri</h2>
                    
                    ${reg.content}
                    
                    <div style="margin-top:2.5rem; background:rgba(27, 94, 32, 0.05); padding:2rem; border-radius:16px; border:1px solid rgba(27, 94, 32, 0.1);">
                        <h4 style="font-size:1.2rem; margin-bottom:1rem;">${reg.name} İçin Fiyat Alın!</h4>
                        <p style="color:var(--text-gray); margin-bottom:1.5rem;">${reg.name} bölgesinden kullanmadığınız eşyalarınız varsa bize şimdi Whatsapp üzerinden veya arayarak ulaşabilirsiniz. Hızlıca fiyatlandıralım, araç gönderelim.</p>
                        <div style="display:flex; gap:1rem; flex-wrap:wrap;">
                            <a href="https://wa.me/905393190959?text=Merhaba,%20${reg.name}%20konumundan%20eşyalarım%20için%20teklif%20almak%20istiyorum." target="_blank" class="btn-primary">💬 Hemen WhatsApp'tan Fotoğraf Gönder</a>
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
                <h2>Satılık En Güncel Eşyalarımız</h2>
                <p>Mağazamızda bulunan ikinci el ve spot ürünleri detaylıca inceleyebilirsiniz.</p>
            </div>
            <div id="loading" class="loading-spinner" style="display:none;"></div>
            <div class="products-grid stagger" id="products-list-grid"></div>
            <div class="text-center mt-2">
                <a href="/urun-listesi.html" class="btn-primary btn-lg">Tüm Katalog İçin →</a>
            </div>
        </div>
    </section>

        </main>
<script src="/js/main.js" defer></script>
    <script>
        document.addEventListener('DOMContentLoaded', async () => {
            const grid = document.getElementById('products-list-grid');
            const spinner = document.getElementById('loading');
            try {
                spinner.style.display = 'block';
                // Fetch the latest active products limit 6
                const res = await fetch('/api/products?limit=6'); 
                const products = await res.json();
                spinner.style.display = 'none';
                
                if (products.length === 0) {
                    grid.innerHTML = '<p class="empty-state">Şu an aktif ürün bulunmamaktadır.</p>';
                } else {
                    grid.innerHTML = products.map(p => createProductCardHTML(p)).join('');
                    grid.classList.add('visible'); // enable stagger animation if needed
                }
            } catch (error) {
                console.error(error);
            }
        });
    </script>
</body>
</html>`;
    fs.writeFileSync(path.join(templatePath, `${reg.slug}-ikinci-el-esya.html`), htmlContent);
}

console.log('9 adet genişletilmiş detaylı bölge SEO sayfası başarıyla public/ içine kaydedildi.');
