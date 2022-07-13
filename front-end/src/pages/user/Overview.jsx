import React from "react";
import { useSelector } from 'react-redux';
import { useParams } from "react-router";
import overviewImage from "./assets/overviewImage.svg";

export default function Overview() {
  const overviewData = [
    {
      id: 1,
      cardName: "DONATIONS",
    },
    { id: 2, cardName: "AMOUNT DONATED" },
    { id: 3, cardName: "CAMPAIGNS" },
    { id: 4, cardName: "GIVEPOINTS" },
  ];

  const { id } = useParams();

  return (
    <div>
      <div className="py-20 px-10 wholeWrapper">
        <div className="flex items-center pageHead">
          <h1 className="text-white font-bold overview">Overview</h1>
          <div className="accountNo ml-7" style={{textAlign:"center"}}>
            {id && <h2>{id.toString().substring(0, 6)+"..."+id.toString().substring(38, 42)}</h2>}
          </div>
        </div>

        <div className="cardWrapper flex justify-between gap-x-4">
          {overviewData.map((e) => {
            return (
              <div className="oveviewCards w-full" key={e.id}>
                <div className="flex justify-between items-center">
                  <h1 className="text-white font-bold text-lg">{e.cardName}</h1>
                  <svg
                    width="22"
                    height="16"
                    viewBox="0 0 22 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.949 10.5396C14.3802 10.5396 17.31 11.0836 17.31 13.2604C17.31 15.4362 14.399 16 10.949 16C7.51785 16 4.58809 15.456 4.58809 13.2802C4.58809 11.1034 7.49904 10.5396 10.949 10.5396ZM16.4351 9.22888C17.7468 9.20456 19.1571 9.38468 19.6782 9.51257C20.7823 9.72962 21.5084 10.1727 21.8093 10.8166C22.0636 11.3453 22.0636 11.9586 21.8093 12.4864C21.349 13.4851 19.8654 13.8058 19.2887 13.8886C19.1696 13.9066 19.0738 13.8031 19.0864 13.6833C19.3809 10.9157 17.0377 9.60353 16.4315 9.30183C16.4055 9.28832 16.4002 9.2676 16.4028 9.255C16.4046 9.24599 16.4154 9.23158 16.4351 9.22888ZM5.31858 9.22701L5.5656 9.22924C5.5853 9.23194 5.59515 9.24635 5.59694 9.25446C5.59962 9.26796 5.59425 9.28778 5.56918 9.30219C4.9621 9.60389 2.61883 10.9161 2.91342 13.6827C2.92595 13.8034 2.83104 13.9061 2.71195 13.889C2.13531 13.8061 0.651629 13.4855 0.191392 12.4867C-0.0637974 11.9581 -0.0637974 11.3457 0.191392 10.817C0.492248 10.1731 1.21752 9.72998 2.32156 9.51203C2.84358 9.38504 4.25294 9.20492 5.5656 9.22924L5.31858 9.22701ZM10.949 0C13.2851 0 15.1583 1.88227 15.1583 4.23285C15.1583 6.58253 13.2851 8.4666 10.949 8.4666C8.61292 8.4666 6.73974 6.58253 6.73974 4.23285C6.73974 1.88227 8.61292 0 10.949 0ZM16.6634 0.705896C18.9198 0.705896 20.6918 2.84123 20.0883 5.21974C19.6809 6.82102 18.2062 7.88463 16.5631 7.8414C16.3984 7.8369 16.2363 7.82159 16.0796 7.79457C15.9659 7.77476 15.9086 7.64597 15.973 7.55051C16.5998 6.62288 16.9571 5.50703 16.9571 4.30922C16.9571 3.05918 16.5667 1.8938 15.8889 0.938252C15.8674 0.908532 15.8513 0.862601 15.8728 0.828378C15.8907 0.800459 15.9238 0.78605 15.9551 0.778845C16.1835 0.732013 16.4181 0.705896 16.6634 0.705896ZM5.33593 0.705806C5.58127 0.705806 5.81586 0.731923 6.04509 0.778755C6.07553 0.78596 6.10956 0.80127 6.12746 0.828288C6.14806 0.862511 6.13284 0.908442 6.11135 0.938162C5.43353 1.89371 5.04313 3.05909 5.04313 4.30913C5.04313 5.50694 5.4004 6.62279 6.02718 7.55042C6.09165 7.64588 6.03434 7.77467 5.92063 7.79448C5.76304 7.8224 5.60186 7.83681 5.43711 7.84131C3.79404 7.88454 2.31932 6.82093 1.91191 5.21965C1.30751 2.84114 3.07951 0.705806 5.33593 0.705806Z"
                      fill="#EBEDF7"
                    />
                  </svg>
                </div>
                <h1 className="count">60</h1>
              </div>
            );
          })}
        </div>

        <div className="flex gap-x-24 welcomeSect">
          <img src={overviewImage} alt="" />

          <div className="flex flex-col items-center justify-center w-2/5 overDesc">
            <h1 className="giveHeading">Welcome to GiveStation</h1>
            <p className="giveP">
              A layer 2 crowdfunding platform that reward you for donating.
            </p>
            <button className="exploreBtn">Explore Campaigns</button>
          </div>
        </div>
      </div>

      <div className="footer flex justify-center items-center">
        <img width={92} height={76} src="/images/logo.png" alt="logo" />
        <h1 className="text-white font-bold text-xl ml-16">GiveDAO</h1>
        <h1 className="text-white font-bold text-xl ml-12">About</h1>
        <h1 className="text-white font-bold text-xl ml-12">How it works</h1>
      </div>
    </div>
  );
}
