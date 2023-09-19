import React, { useEffect, useState } from 'react';
import './index.css';
import Title_v from './components/Title_v';
import Genre_v from './components/Genre_v';
import Time_v from './components/Time_v';
import Date_v from './components/Date_v';
import Language_v from './components/Language_v';
import Subtitle_v from './components/Subtitle_v';
import Actor_v from './components/Actor_v';
import Director_v from './components/Director_v';
import Summary_v from './components/Summary_v';



const DetailPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = '91a39b3bf521ebd37d4af372928b74598e626bf66b78075654f883d2457fbbae20848d8dd2d80de5b0d072be291e3ecb73ef16ae3c19912d1223b2ecb3be12236ed7c71b6b2fe03e77bbce7c044d8d297842508cb35520f16f35232223417236fc988b7c654a8af5c86031067f42de1d7074bde45afea3259a0d5e84364757de';
  const apiUrl = 'http://localhost:1337/api/details';

  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  };

  const disaricikar=()=>{
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
	      let { Title, Text_Subtitle } = data;

        console.log('API verisi:', data);

        setData({
          Title: data.Title,
          Text_Subtitle: data.Text_Subtitle,
          Genre: data.Genre,
          Time: data.Time,
          Date: data.Date,
          Language:data.Language,
          Subtitle:data.Subtitle,
          Director: data.Director,
          Actor: data.Actor,
          Summary: data.Summary
        });
        setLoading(false);
      })
      .catch(error => {
        console.error('Bir hata oluştu:', error);
        setLoading(false);
      });
  }

  useEffect(() => {
    if(!data) {
      disaricikar()
    }

    
  }, []);
  
  return (
    <div list-type="VERTICAL" focusable-group="true" className="outer" first-focus-index="1" style={{ top: '0px', backgroundColor: 'black', overflow: 'hidden' }}>
      <div className="details" style={{ zIndex: 2, position: 'relative' }}>
      <Title_v title={data?.Title} text_subtitle={data?.Text_Subtitle} />
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
        <Genre_v genre={data?.Genre} />
        <Time_v time={data?.Time} />
        <Date_v date={data?.Date} />
        <Language_v language={data?.Language} />
        <Subtitle_v subtitle={data?.Subtitle} />
        </div>
        <div className="row" focusable-group="true" list-type="HORIZANTAL" style={{ left: '0px' }}>
        <Director_v director={data?.Director} />
        <Actor_v actor={data?.Actor} />
        </div>
        <div className="row hide">
        <Summary_v summary={data?.Summary} />
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
      <video autoPlay  muted id="id1">
        <source src="images/trailer.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default DetailPage;
