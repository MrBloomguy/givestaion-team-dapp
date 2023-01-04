import React from "react";
import { useNavigate } from "react-router";
import UserFooter from "../../components/user/UserFooter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { backendURL } from "../../config";
import { chains } from "../../smart-contract/chains_constants";
import { updateDonations } from "../../store/actions/auth.actions";
import PageHeader from "../../components/user/PageHeader";
import Sidebar1 from "../../components/user/Sidebar1";
import Header from "../../components/HeaderHome";
import Card from "../../components/user/Card";
import parse from 'html-react-parser';

export default function Donations() {
  const chainId = useSelector((state) => state.auth.currentChainId);
  const account = useSelector((state) => state.auth.currentWallet);
  const globalWeb3 = useSelector((state) => state.auth.globalWeb3);
  const donations = useSelector((state) => state.auth.donations);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  useEffect(() => {
    const getDonationInfo = async () => {
      if (globalWeb3 && account && chainId) {
        await axios({
          method: "post",
          url: `${backendURL}/api/donation/getDonationsOfUser`,
          data: {
            user: account || "",
            chainId: chainId || "",
          },
        })
          .then((res) => {
            if (res.data && res.data.code === 0) {
              dispatch(updateDonations(res.data.data));
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    getDonationInfo();
  }, [globalWeb3, account, chainId]);

  useEffect(() => {
    setRefresh(!refresh);
  }, [donations]);

  const subStr = (string) => {
    return string.length > 116 ? `${string.substring(0, 116)}...` : string;
  };

  return (
    <div className=" dark:bg-[#242A38] duration-300 ease-out	 bg-[#fff] min-h-screen">
      <div className="font-Jura ">
        <Sidebar1
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <div className=" lg:ml-72 lg:main">
          <Header
            setIsSideBarOpen={setIsSideBarOpen}
            isSideBarOpen={isSideBarOpen}
          />
          <div className="px-5 mt-8 lg:px-8">
            <div>
              <PageHeader heading={"Donations"} />

              <div className="py-5 space-y-2">
                {donations.length > 0 &&
                  donations.map((item, index) => (
                    <Card
                      key={index}
                      imgSrc={
                        `${backendURL}/${item.campaign?.imageURL}` || "spin"
                      }
                      desc={
                        parse(subStr(item.campaign?.description) || "") ||
                        ""
                      }
                      title={item.campaign?.name || ""}
                      btnText={item.amount > 0 ? item.amount : "0"}
                      camId={item?.campaign? item.campaign?.address : ""}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
