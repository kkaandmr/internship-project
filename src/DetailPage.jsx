import React, { useEffect, useState } from 'react';
import './index.css';
import Title_v from './components/Title_v';


const DetailPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = '91a39b3bf521ebd37d4af372928b74598e626bf66b78075654f883d2457fbbae20848d8dd2d80de5b0d072be291e3ecb73ef16ae3c19912d1223b2ecb3be12236ed7c71b6b2fe03e77bbce7c044d8d297842508cb35520f16f35232223417236fc988b7c654a8af5c86031067f42de1d7074bde45afea3259a0d5e84364757de';
    const apiUrl = 'http://localhost:1337/api/details';

    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    };

    fetch(apiUrl, {
      method: 'GET',
      headers: headers
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP hata! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(apiData => {
        let data=apiData.data[0].attributes;

        console.log(apiData.data[0]);
        setData({
          Title: data.Title,
          Text_Subtitle: data.Text_Subtitle,
        });
        setLoading(false);
      })
      .catch(error => {
        console.error('Bir hata oluştu:', error);
        setLoading(false);
      });
  }, []);
  
  return (
    <div list-type="VERTICAL" focusable-group="true" className="outer" first-focus-index="1" style={{ top: '0px', backgroundColor: 'black', overflow: 'hidden' }}>
      <div className="details" style={{ zIndex: 2, position: 'relative' }}>
      <Title_v title={data?.Title} text_subtitle={data?.Text_Subtitle} />
        {/* Buraya props olarak gönderdik */}
        <div className="row">
          
          <div className="rtuk-item">
            <img src="https://tv-static-cdn.tvplus.com.tr/bigscreen/smarttv/assets/icons/rtuk-v3/VH.svg" alt="siddet" />
          </div>
          <div className="rtuk-item">
            <img src="https://tv-static-cdn.tvplus.com.tr/bigscreen/smarttv/assets/icons/rtuk-v3/IB.svg" alt="olumsuz" />
          </div>
          <div className="rtuk-item">
            <img src="https://tv-static-cdn.tvplus.com.tr/bigscreen/smarttv/assets/icons/rtuk-v3/18.svg" alt="18uzeri" />
          </div>
        </div>
        <div className="row" style={{ display: 'inline-flex' }}>
          <div className="text text-with-label">
            <span className="name"></span>
            <span className="value" id="tur" style={{ display: 'inline-flex' }}>
              Bilim Kurgu, Gerilim, Macera, Fantastik
            </span>
          </div>
          <div className="text text-with-label" style={{ display: 'inline-flex' }}>
            <span className="name"></span>
            <span className="value" id="dk">110 dk</span>
          </div>
          <div className="text text-with-label">
            <span className="name"></span>
            <span className="value" id="tarih">2016</span>
          </div>
          <div className="text text-with-label">
            <span className="name" style={{ fontSize: '15px', color: 'grey',marginRight:'10px'}}>Dil</span>
            <span className="value" style={{ fontSize: '15px', color: 'azure', marginRight: '20px' }}>
              Türkçe, İngilizce
            </span>
          </div>
          <div className="text text-with-label">
            <span className="name" style={{ fontSize: '15px', color: 'grey',marginRight:'10px'}}>Altyazı</span>
            <span className="value" style={{ fontSize: '15px', color: 'azure', marginRight: '20px' }}>
              Türkçe, İngilizce
            </span>
          </div>
        </div>
        <div className="row" focusable-group="true" list-type="HORIZANTAL" style={{ left: '0px' }}>
          <div className="text text-with-label" style={{ paddingLeft: '55px', marginTop: '10px' }}>
            <span className="name name1" style={{ fontSize: '15px', color: 'grey' }}>Yönetmen</span>
            <div className="vertical-list">
              <span focusable="true" className="value" style={{ fontSize: '15px', color: 'azure'}}>Justin Kurzel</span>
            </div>
          </div>
          <div className="text text-with-label" style={{ paddingLeft: '150px' }}>
            <span className="name name1" id="oyuncu" style={{ fontSize: '15px', color: 'grey',marginLeft:'10px'}}>Oyuncular</span>
            <div className="vertical-list">
              <span className="value" id="oyuncu1" style={{ fontSize: '15px', color: 'azure',marginLeft:'10px'}}>Michael Fassbender</span>
              <span className="value" id="oyuncu2" style={{ fontSize: '15px', color: 'azure',marginRight:'10px'}}>Marion Cotillard</span>
              <span className="value" id="oyuncu3" style={{ fontSize: '15px', color: 'azure',marginRight:'10px' }}>Jeremy Irons</span>
            </div>
          </div>
        </div>
        <div className="row hide">
          <div className="text paragraph" id="paragraph">
            Genetik kodunun kilidini kırması ile atalarının hatıralarına erişim sağlayabilen Callum Lynch, 15. yüzyıl İspanya'sında yaşayan atası Aguilar'ın maceralarını kendi hafızalarında yer alacak kadar canlı bir şekilde deneyimler. Gizli bir topluluk olan Suikastçiler'in soyundan geldiğini öğrenen genç adam yeni kazandığı beceriler ile baskıcı ve güçlü organizasyon Templer'ın karşısına çıkar. Callum, günümüzde de varolan Templar organizasyonunu alt etmek için geçmişindeki bilgi ve tecrübesini kullanacaktır.
          </div>
        </div>
        <div className="inner">
          <div className="scroller-container has-bookmark" focusable-group="true" list-type="VERTICAL">
            <div list-type="HORIZANTAL" focusable-group="true" className="row btn-row"></div>
            <div focusable="true" className="btn primary btn-play" id="box"></div>
            <div>
              <div>
                <img src="https://tv-static-cdn.tvplus.com.tr/bigscreen/smarttv/assets/icons/icons-v2/play.svg" id="box1" style={{marginRight:'10px'}} />
                <span id="box2">Hemen İzle</span>
              </div>
            </div>
            <div focusable="true" className="btn icon-btn" id="fragman1">
              <img src="https://tv-static-cdn.tvplus.com.tr/bigscreen/smarttv/assets/icons/icons-v2/watch-trailer.svg " id="fragman2" />
            </div>
            <div className="tooltip">
              <div>
                <div className="arrow"></div>
              </div>
            </div>
            <div className="btn-group" id="listeme-ekle">
              <div focusable="true" className="btn icon-btn " id="liste1">
                <img src="https://tv-static-cdn.tvplus.com.tr/bigscreen/smarttv/assets/icons/icons-v2/add-to-list-white.svg" id="liste2" />
                <div className="tooltip">
                  <div>
                    <div className="arrow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <video autoPlay loop muted id="id1">
        <source src="images/trailer.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default DetailPage;
