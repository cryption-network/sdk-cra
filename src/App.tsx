import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Farm from "./views/Farm";
import useEagerConnect from "./utils/useEagerConnect";
import Navbar from "./Navbar";
import "./App.css";

const CreatePool = lazy(() => import("./views/Pool"));
const CreateERC20 = lazy(() => import("./views/ERC20"));
const CreateIVCO = lazy(() => import("./views/IVCO"));
const CreateLiquidityLocker = lazy(() => import("./views/LiquidityLocker"));
const CreateVesting = lazy(() => import("./views/Vesting"));
const CreateNFT = lazy(() => import("./views/NFT"));

const App = () => {
  useEagerConnect();
  return (
    <div className="App-Main">
      <Navbar />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/createPool" element={<CreatePool />} />
          <Route path="/createIvco" element={<CreateIVCO />} />
          <Route
            path="/createLiquidityLocker"
            element={<CreateLiquidityLocker />}
          />
          <Route path="/createVesting" element={<CreateVesting />} />
          <Route path="/createErc20" element={<CreateERC20 />} />
          <Route path="/createNFT" element={<CreateNFT />} />
          <Route path="/" element={<Farm />} />
          <Route path="/createFarm" element={<Navigate to="/createFarm" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
