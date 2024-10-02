import React from 'react';
import { useState } from 'react';
import '../styles/namesOfAllah.css';
import Header from './Header';

const NAMES = [{ id: 1, name: "Allah", meaning: "Her şeyin sahibi olan tek ilah", arabic: "ٱللَّٰهُ" },
{ id: 2, name: "Er-Rahman", meaning: "Merhameti sonsuz olan", arabic: "ٱلرَّحْمَـٰنُ" },
{ id: 3, name: "Er-Rahim", meaning: "Çok merhametli", arabic: "ٱلرَّحِيمُ" },
{ id: 4, name: "El-Melik", meaning: "Mülkün gerçek sahibi", arabic: "ٱلْمَلِكُ" },
{ id: 5, name: "El-Kuddüs", meaning: "Her türlü eksiklikten uzak", arabic: "ٱلْقُدُّوسُ" },
{ id: 6, name: "Es-Selam", meaning: "Barış ve esenlik veren", arabic: "ٱلسَّلَامُ" },
{ id: 7, name: "El-Mümin", meaning: "Güven veren", arabic: "ٱلْمُؤْمِنُ" },
{ id: 8, name: "El-Müheymin", meaning: "Her şeyi gözetip koruyan", arabic: "ٱلْمُهَيْمِنُ" },
{ id: 9, name: "El-Aziz", meaning: "İzzet sahibi, her şeye galip", arabic: "ٱلْعَزِيزُ" },
{ id: 10, name: "El-Cebbar", meaning: "Dilediğini zorla yaptıran", arabic: "ٱلْجَبَّارُ" },
{ id: 11, name: "El-Mütekebbir", meaning: "Büyüklükte eşi olmayan", arabic: "ٱلْمُتَكَبِّرُ" },
{ id: 12, name: "El-Halık", meaning: "Her şeyi yaratan", arabic: "ٱلْخَالِقُ" },
{ id: 13, name: "El-Bari", meaning: "Her şeyi kusursuz yaratan", arabic: "ٱلْبَارِئُ" },
{ id: 14, name: "El-Musavvir", meaning: "Her şeye bir biçim veren", arabic: "ٱلْمُصَوِّرُ" },
{ id: 15, name: "El-Gaffar", meaning: "Çok bağışlayan", arabic: "ٱلْغَفَّارُ" },
{ id: 16, name: "El-Kahhar", meaning: "Her şeye, her istediğini yapacak şekilde galip olan", arabic: "ٱلْقَهَّارُ" },
{ id: 17, name: "El-Vehhab", meaning: "Karşılıksız nimetler veren", arabic: "ٱلْوَهَّابُ" },
{ id: 18, name: "Er-Rezzak", meaning: "Rızık veren", arabic: "ٱلرَّزَّاقُ" },
{ id: 19, name: "El-Fettah", meaning: "Her türlü zorluğu açan, kolaylaştıran", arabic: "ٱلْفَتَّاحُ" },
{ id: 20, name: "El-Alim", meaning: "Her şeyi bilen", arabic: "ٱلْعَلِيمُ" },
{ id: 21, name: "El-Kabid", meaning: "Rızkı daraltan", arabic: "ٱلْقَابِضُ" },
{ id: 22, name: "El-Basit", meaning: "Rızkı genişleten", arabic: "ٱلْبَاسِطُ" },
{ id: 23, name: "El-Hafid", meaning: "Dereceleri alçaltan", arabic: "ٱلْخَافِضُ" },
{ id: 24, name: "Er-Rafi", meaning: "Dereceleri yükselten", arabic: "ٱلرَّافِعُ" },
{ id: 25, name: "El-Muizz", meaning: "Dilediğini aziz eden", arabic: "ٱلْمُعِزُّ" },
{ id: 26, name: "El-Muzill", meaning: "Dilediğini zillete düşüren", arabic: "ٱلْمُذِلُّ" },
{ id: 27, name: "Es-Semi", meaning: "Her şeyi işiten", arabic: "ٱلسَّمِيعُ" },
{ id: 28, name: "El-Basir", meaning: "Her şeyi gören", arabic: "ٱلْبَصِيرُ" },
{ id: 29, name: "El-Hakem", meaning: "Mutlak hükmeden", arabic: "ٱلْحَكَمُ" },
{ id: 30, name: "El-Adl", meaning: "Adaletli olan", arabic: "ٱلْعَدْلُ" },
{ id: 31, name: "El-Latif", meaning: "En ince işleri bilen lütuf sahibi", arabic: "ٱللَّطِيفُ" },
{ id: 32, name: "El-Habir", meaning: "Her şeyden haberdar olan", arabic: "ٱلْخَبِيرُ" },
{ id: 33, name: "El-Halim", meaning: "Yumuşak davranan", arabic: "ٱلْحَلِيمُ" },
{ id: 34, name: "El-Azim", meaning: "Büyüklükte eşi olmayan", arabic: "ٱلْعَظِيمُ" },
{ id: 35, name: "El-Gafur", meaning: "Çok bağışlayan", arabic: "ٱلْغَفُورُ" },
{ id: 36, name: "Eş-Şekur", meaning: "Az iyiliğe çok mükafat veren", arabic: "ٱلشَّكُورُ" },
{ id: 37, name: "El-Aliyy", meaning: "Yüceler yücesi", arabic: "ٱلْعَلِيُّ" },
{ id: 38, name: "El-Kebir", meaning: "Büyüklükte benzeri yok", arabic: "ٱلْكَبِيرُ" },
{ id: 39, name: "El-Hafiz", meaning: "Her şeyi koruyan", arabic: "ٱلْحَفِيظُ" },
{ id: 40, name: "El-Mukit", meaning: "Her varlığın rızkını veren", arabic: "ٱلْمُقِيتُ" },
{ id: 41, name: "El-Hasib", meaning: "Her şeyin hesabını bilen", arabic: "ٱلْحَسِيبُ" },
{ id: 42, name: "El-Celil", meaning: "Celalet ve ululuk sahibi", arabic: "ٱلْجَلِيلُ" },
{ id: 43, name: "El-Kerim", meaning: "Çok cömert", arabic: "ٱلْكَرِيمُ" },
{ id: 44, name: "Er-Rakib", meaning: "Her şeyi gözetip kontrol eden", arabic: "ٱلرَّقِيبُ" },
{ id: 45, name: "El-Mucib", meaning: "Dualara karşılık veren", arabic: "ٱلْمُجِيبُ" },
{ id: 46, name: "El-Vasi", meaning: "İlmi ve rahmeti geniş olan", arabic: "ٱلْوَاسِعُ" },
{ id: 47, name: "El-Hakim", meaning: "Hikmet sahibi", arabic: "ٱلْحَكِيمُ" },
{ id: 48, name: "El-Vedud", meaning: "Sevgi ve merhamet gösteren", arabic: "ٱلْوَدُودُ" },
{ id: 49, name: "El-Mecid", meaning: "Şanı büyük ve yüksek", arabic: "ٱلْمَجِيدُ" },
{ id: 50, name: "El-Bais", meaning: "Ölüleri dirilten", arabic: "ٱلْبَاعِثُ" },
{ id: 51, name: "Eş-Şehid", meaning: "Her şeye şahit olan", arabic: "ٱلشَّهِيدُ" },
{ id: 52, name: "El-Hakk", meaning: "Gerçek olan", arabic: "ٱلْحَقُّ" },
{ id: 53, name: "El-Vekil", meaning: "İşleri en iyi yoluna koyan", arabic: "ٱلْوَكِيلُ" },
{ id: 54, name: "El-Kaviyy", meaning: "Pek güçlü olan", arabic: "ٱلْقَوِيُّ" },
{ id: 55, name: "El-Metin", meaning: "Çok sağlam olan", arabic: "ٱلْمَتِينُ" },
{ id: 56, name: "El-Veliyy", meaning: "İnananların dostu", arabic: "ٱلْوَلِيُّ" },
{ id: 57, name: "El-Hamid", meaning: "Övülmeye layık olan", arabic: "ٱلْحَمِيدُ" },
{ id: 58, name: "El-Muhsi", meaning: "Her şeyi sayıp bilen", arabic: "ٱلْمُحْصِي" },
{ id: 59, name: "El-Mubdi", meaning: "Mahlukatı örneksiz yaratan", arabic: "ٱلْمُبْدِئُ" },
{ id: 60, name: "El-Muid", meaning: "Yarattıklarını yok edip tekrar dirilten", arabic: "ٱلْمُعِيدُ" },
{ id: 61, name: "El-Muhyi", meaning: "Can veren, dirilten", arabic: "ٱلْمُحْيِي" },
{ id: 62, name: "El-Mümit", meaning: "Can alıcı", arabic: "ٱلْمُمِيتُ" },
{ id: 63, name: "El-Hayy", meaning: "Diri, canlı", arabic: "ٱلْحَيُّ" },
{ id: 64, name: "El-Kayyum", meaning: "Her şeyi ayakta tutan", arabic: "ٱلْقَيُّومُ" },
{ id: 65, name: "El-Vacid", meaning: "Dilediğini bulan", arabic: "ٱلْوَاجِدُ" },
{ id: 66, name: "El-Macid", meaning: "Şanı yüce olan", arabic: "ٱلْمَاجِدُ" },
{ id: 67, name: "El-Vahid", meaning: "Tek olan", arabic: "ٱلْوَاحِدُ" },
{ id: 68, name: "Es-Samed", meaning: "Her şey ona muhtaç, O hiçbir şeye muhtaç değil", arabic: "ٱلصَّمَدُ" },
{ id: 69, name: "El-Kadir", meaning: "Gücü yeten", arabic: "ٱلْقَادِرُ" },
{ id: 70, name: "El-Muktedir", meaning: "Her şeye gücü yeten", arabic: "ٱلْمُقْتَدِرُ" },
{ id: 71, name: "El-Mukaddim", meaning: "Öne alan", arabic: "ٱلْمُقَدِّمُ" },
{ id: 72, name: "El-Muahhir", meaning: "Geride bırakan", arabic: "ٱلْمُؤَخِّرُ" },
{ id: 73, name: "El-Evvel", meaning: "İlk olan", arabic: "ٱلْأَوَّلُ" },
{ id: 74, name: "El-Ahir", meaning: "Son olan", arabic: "ٱلْآخِرُ" },
{ id: 75, name: "Ez-Zahir", meaning: "Aşikâr olan", arabic: "ٱلظَّاهِرُ" },
{ id: 76, name: "El-Batın", meaning: "Gizli olan", arabic: "ٱلْبَاطِنُ" },
{ id: 77, name: "El-Vali", meaning: "Her şeyi yöneten", arabic: "ٱلْوَالِي" },
{ id: 78, name: "El-Müteali", meaning: "Yüceler yücesi", arabic: "ٱلْمُتَعَالِي" },
{ id: 79, name: "El-Berr", meaning: "İyilik ve ihsan sahibi", arabic: "ٱلْبَرُّ" },
{ id: 80, name: "Et-Tevvab", meaning: "Tevbeleri kabul eden", arabic: "ٱلتَّوَّابُ" },
{ id: 81, name: "El-Müntakim", meaning: "Suçluları adaletiyle cezalandıran", arabic: "ٱلْمُنْتَقِمُ" },
{ id: 82, name: "El-Afüvv", meaning: "Affeden", arabic: "ٱلْعَفُوُّ" },
{ id: 83, name: "Er-Rauf", meaning: "Çok merhametli", arabic: "ٱلرَّؤُوفُ" },
{ id: 84, name: "Malik-ül Mülk", meaning: "Mülkün gerçek sahibi", arabic: "مَالِكُ ٱلْمُلْكُ" },
{ id: 85, name: "Zül-Celali ve'l-İkram", meaning: "Celal ve ikram sahibi", arabic: "ذُو ٱلْجَلَالِ وَٱلْإِكْرَامِ" },
{ id: 86, name: "El-Muksit", meaning: "Adaletle hükmeden", arabic: "ٱلْمُقْسِطُ" },
{ id: 87, name: "El-Cami", meaning: "İstediğini bir araya toplayan", arabic: "ٱلْجَامِعُ" },
{ id: 88, name: "El-Ganiyy", meaning: "Hiçbir şeye muhtaç olmayan", arabic: "ٱلْغَنِيُّ" },
{ id: 89, name: "El-Mugni", meaning: "Zengin eden", arabic: "ٱلْمُغْنِيُّ" },
{ id: 90, name: "El-Mani", meaning: "Dilemediği şeye mani olan", arabic: "ٱلْمَانِعُ" },
{ id: 91, name: "Ed-Darr", meaning: "Elem ve zarar verici şeyleri yaratan", arabic: "ٱلضَّارَّ" },
{ id: 92, name: "En-Nafi", meaning: "Fayda veren", arabic: "ٱلنَّافِعُ" },
{ id: 93, name: "En-Nur", meaning: "Alemlerin nuru", arabic: "ٱلنُّورُ" },
{ id: 94, name: "El-Hadi", meaning: "Doğru yolu gösteren", arabic: "ٱلْهَادِي" },
{ id: 95, name: "El-Bedi", meaning: "Eşi ve benzeri olmayan", arabic: "ٱلْبَدِيعُ" },
{ id: 96, name: "El-Baki", meaning: "Varlığının sonu olmayan", arabic: "ٱلْبَاقِي" },
{ id: 97, name: "El-Varis", meaning: "Her şeyin asıl sahibi olan", arabic: "ٱلْوَارِثُ" },
{ id: 98, name: "Er-Reşid", meaning: "Her şeyi dosdoğru yapan", arabic: "ٱلرَّشِيدُ" },
{ id: 99, name: "Es-Sabur", meaning: "Çok sabırlı", arabic: "ٱلصَّبُورُ" }
];

export default function NamesOfAllah() {
    const [esmaUlHusna] = useState(NAMES);
    return (
        <div className='namesOfAllah'>
            <div className="header">
                <Header />
            </div>
            <div className="esmaUlHusna">
                {esmaUlHusna.map((esma, idx) => (
                    <div key={esma.id} className='names'>
                        <h2>{esma.arabic}</h2>
                        <h3>{idx + 1}-{esma.name}</h3>
                        <p>{esma.meaning}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}