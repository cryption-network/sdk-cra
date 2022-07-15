import { Button } from "cryption-uikit-v2";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "./ThemeContext";

const Topnav = styled.div`
  overflow: hidden;
  background-color: #1a1b23;
  border-bottom: 2px solid black;
  margin-bottom: 20px;
`;
const StyledLink = styled(Link)`
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

  &:hover {
    background-color: #ddd;
    color: black;
  }

  &:active {
    background-color: #0415aa;
    color: white;
  }
`;

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Topnav>
      <StyledLink to="/">Farm</StyledLink>
      <StyledLink to="/createPool">Pool</StyledLink>
      <StyledLink to="/createVesting">Vesting</StyledLink>
      <StyledLink to="/createIvco">IVCO</StyledLink>
      <StyledLink to="/createErc20">ERC20</StyledLink>
      <StyledLink to="/createLiquidityLocker">Liquidity Lockers</StyledLink>
      <StyledLink to="/createPredictionMarkets">Prediction Markets</StyledLink>
      {/*<StyledLink to="/createNft">NFT</StyledLink>*/}
      <Button onClick={() => toggleTheme()}>Toggle Theme</Button>
    </Topnav>
  );
};

export default Navbar;
