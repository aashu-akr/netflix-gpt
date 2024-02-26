const Header = () => {
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
      <img
        className="w-44 mx-20"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix-Logo"
      />
      <div className="flex p-2">
        <img
          className="w-12 h-12 mt-1 rounded-sm"
          src="https://occ-0-3783-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
          alt="UserIcon"
        />
        <button className="font-bold text-white p-1">(Sign Out)</button>
      </div>
    </div>
  );
};

export default Header;
