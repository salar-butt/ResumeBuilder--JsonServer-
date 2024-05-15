import React from "react";
import { userProfile } from "../../UserProfile";

const HomeUserProfile = () => {
  return (
    <div className="pt-[155px]">
      <h1 className="text-[36px] font-bold tracking-tighter text-center">
        User profiles
      </h1>
      <div className="flex flex-wrap justify-center px-[235px] pt-[60px]">
        {userProfile.map((ele, i) => {
          return (
            <div key={i} className="w-[25%] pt-[16px]">
              <div className="flex items-center justify-center gap-[16px]">
                <img src="https://tse2.mm.bing.net/th?id=OIP.GqGVPkLpUlSo5SmeDogUdwHaHa&pid=Api&P=0&h=220" alt="" className="h-[20px] w-[20px] rounded-2xl"/>
                <h2 className="text-[16px] leading-[20px] text-[#373737]">
                  {ele.name}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeUserProfile;
