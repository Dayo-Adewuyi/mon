import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractAddress } from "../constants/constants";
import abi from "../constants/abi.json";
import Web3Modal from "web3modal";
import { useAccount } from "wagmi";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const { isConnected } = useAccount();

  const [contract, setContract] = useState(null);

  const createContract = async () => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi.abi, signer);
      setContract(contract);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isConnected) {
      createContract();
    }
  }, [isConnected]);

  return (
    <AppContext.Provider value={{ contract }}>{children}</AppContext.Provider>
  );
};
