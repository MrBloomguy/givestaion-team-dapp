import React, { useState } from "react";
import { useParams } from "react-router";
import UserFooter from "../../components/user/UserFooter";

const GivePoints = () => {
  const [claimed, setClaimed] = useState(false);
  const {id} = useParams();

  return (
    <div>
      <div className="py-20 px-10 wholeWrapper">
        <div className="flex items-center pageHead">
          <h1 className="text-slate-900 dark:text-white font-bold overview">GivePOINTS</h1>
          <div className="accountNo ml-7" style={{textAlign:"center"}}>
            {id && <h2>{id.toString().substring(0, 6)+"..."+id.toString().substring(38, 42)}</h2>}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="pointsCard">
            <h3>CLAIM YOUR GIVE POINTS</h3>

            <div className="flex items-start pointDetails">
              <h1 className="w-1/2">
                You have earned <span>50 GIVE</span>POINTS for donating to 3
                <span> campaigns</span>.
              </h1>

              <div className="flex justify-center items-center w-1/2">
                {claimed === true ? (
                  <button className="claimedBtn">CLAIMED</button>
                ) : (
                  <button onClick={() => setClaimed(true)} className="claimBtn">
                    CLAIM
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <UserFooter/>
    </div>
  );
};

export default GivePoints;