/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { VariableDebtToken } from "./VariableDebtToken";

export class VariableDebtTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<VariableDebtToken> {
    return super.deploy(overrides) as Promise<VariableDebtToken>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): VariableDebtToken {
    return super.attach(address) as VariableDebtToken;
  }
  connect(signer: Signer): VariableDebtTokenFactory {
    return super.connect(signer) as VariableDebtTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VariableDebtToken {
    return new Contract(address, _abi, signerOrProvider) as VariableDebtToken;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_previousBalance",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_currentBalance",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_balanceIncrease",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "burnDebt",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_previousBalance",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_currentBalance",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_balanceIncrease",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "mintDebt",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "getUserIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string"
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "_underlying",
        type: "address"
      },
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "_addressesProvider",
        type: "address"
      }
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "principalBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "underlyingAssetAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611132806100206000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806381e75277116100a2578063a457c2d711610071578063a457c2d71461023b578063a9059cbb1461045a578063c634dfaa14610486578063dd62ed3e146104ac578063ee9907a4146104da5761010b565b806381e75277146102bb57806389d1a0fc1461040257806395d89b41146104265780639dc29fac1461042e5761010b565b8063313ce567116100de578063313ce5671461021d578063395093511461023b57806340c10f191461026757806370a08231146102955761010b565b806306fdde0314610110578063095ea7b31461018d57806318160ddd146101cd57806323b872dd146101e7575b600080fd5b610118610500565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561015257818101518382015260200161013a565b50505050905090810190601f16801561017f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101b9600480360360408110156101a357600080fd5b506001600160a01b03813516906020013561058d565b604080519115158252519081900360200190f35b6101d56105d5565b60408051918252519081900360200190f35b6101b9600480360360608110156101fd57600080fd5b506001600160a01b038135811691602081013590911690604001356105db565b610225610623565b6040805160ff9092168252519081900360200190f35b6101b96004803603604081101561025157600080fd5b506001600160a01b03813516906020013561062c565b6102936004803603604081101561027d57600080fd5b506001600160a01b03813516906020013561067b565b005b6101d5600480360360208110156102ab57600080fd5b50356001600160a01b03166107db565b610293600480360360a08110156102d157600080fd5b8101906020810181356401000000008111156102ec57600080fd5b8201836020820111156102fe57600080fd5b8035906020019184600183028401116401000000008311171561032057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561037357600080fd5b82018360208201111561038557600080fd5b803590602001918460018302840111640100000000831117156103a757600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505060ff8335169350506001600160a01b036020830135811692604001351690506108e8565b61040a6109cd565b604080516001600160a01b039092168252519081900360200190f35b6101186109e1565b6102936004803603604081101561044457600080fd5b506001600160a01b038135169060200135610a39565b6101b96004803603604081101561047057600080fd5b506001600160a01b0381351690602001356105db565b6101d56004803603602081101561049c57600080fd5b50356001600160a01b0316610bd4565b6101d5600480360360408110156104c257600080fd5b506001600160a01b038135811691602001351661062c565b6101d5600480360360208110156104f057600080fd5b50356001600160a01b0316610bef565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105855780601f1061055a57610100808354040283529160200191610585565b820191906000526020600020905b81548152906001019060200180831161056857829003601f168201915b505050505081565b6040805162461bcd60e51b81526020600482015260166024820152751054141493d5905317d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b60005481565b6040805162461bcd60e51b81526020600482015260166024820152751514905394d1915497d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b60035460ff1681565b6040805162461bcd60e51b815260206004820152601760248201527f414c4c4f57414e43455f4e4f545f535550504f525445440000000000000000006044820152905160009181900360640190fd5b6004546001600160a01b031633146106c45760405162461bcd60e51b81526004018080602001828103825260328152602001806110cb6032913960400191505060405180910390fd5b60008060006106d285610c0a565b9250925092506106e28585610c84565b600480546003546040805163386497fd60e01b81526001600160a01b036101009093048316948101949094525191169163386497fd916024808301926020929190829003018186803b15801561073757600080fd5b505afa15801561074b573d6000803e3d6000fd5b505050506040513d602081101561076157600080fd5b50516001600160a01b03861660008181526006602090815260409182902084905581519283528201879052818101869052606082018590526080820184905260a082019290925290517f94ba3ac5ed6fee7b49ed817c5ee964eed9bd5da6860344f95fc56997e920381d9181900360c00190a15050505050565b6001600160a01b038116600090815260056020526040812054610800575060006108e3565b6001600160a01b038083166000908152600660209081526040918290205460048054600354855163386497fd60e01b815261010090910487169281019290925293516108e0956108db9593946108cf949091169263386497fd9260248083019392829003018186803b15801561087557600080fd5b505afa158015610889573d6000803e3d6000fd5b505050506040513d602081101561089f57600080fd5b50516001600160a01b0387166000908152600560205260409020546108c390610ce2565b9063ffffffff610cf816565b9063ffffffff610d4516565b610d7d565b90505b919050565b84516108fb90600190602088019061100e565b50835161090f90600290602087019061100e565b506003805460ff191660ff851617610100600160a81b0319166101006001600160a01b03858116919091029190911790915560408051630261bf8b60e01b8152905191831691630261bf8b91600480820192602092909190829003018186803b15801561097b57600080fd5b505afa15801561098f573d6000803e3d6000fd5b505050506040513d60208110156109a557600080fd5b5051600480546001600160a01b0319166001600160a01b039092169190911790555050505050565b60035461010090046001600160a01b031681565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156105855780601f1061055a57610100808354040283529160200191610585565b6004546001600160a01b03163314610a825760405162461bcd60e51b81526004018080602001828103825260328152602001806110cb6032913960400191505060405180910390fd5b6000806000610a9085610c0a565b925092509250610aa08585610d9d565b83821415610ac6576001600160a01b038516600090815260066020526040812055610b61565b600480546003546040805163386497fd60e01b81526001600160a01b036101009093048316948101949094525191169163386497fd916024808301926020929190829003018186803b158015610b1b57600080fd5b505afa158015610b2f573d6000803e3d6000fd5b505050506040513d6020811015610b4557600080fd5b50516001600160a01b0386166000908152600660205260409020555b6001600160a01b038516600081815260066020908152604091829020548251938452908301879052828201869052606083018590526080830184905260a0830152517fc57f977ee00c44453a91f798753002bf12fca5f5ca2ee8db560720f51d4b0f629181900360c00190a15050505050565b6001600160a01b031660009081526005602052604090205490565b6001600160a01b031660009081526006602052604090205490565b6001600160a01b0381166000908152600560205260408120548190819080610c3c575060009250829150819050610c7d565b6000610c5782610c4b886107db565b9063ffffffff610ddb16565b9050610c638682610c84565b81610c74818363ffffffff610e1d16565b90955093509150505b9193909250565b600054610c97908263ffffffff610e1d16565b60009081556001600160a01b038316815260056020526040902054610cc2908263ffffffff610e1d16565b6001600160a01b0390921660009081526005602052604090209190915550565b60006108e082633b9aca0063ffffffff610e7716565b6000610d3c6b033b2e3c9fd0803ce8000000610d30610d1d868663ffffffff610e7716565b6b019d971e4fe8401e7400000090610e1d565b9063ffffffff610ed016565b90505b92915050565b600060028204610d7583610d30610d68876b033b2e3c9fd0803ce8000000610e77565b849063ffffffff610e1d16565b949350505050565b6000631dcd6500610d96633b9aca00610d308386610e1d565b9392505050565b600054610db0908263ffffffff610ddb16565b60009081556001600160a01b038316815260056020526040902054610cc2908263ffffffff610ddb16565b6000610d3c83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610f12565b600082820183811015610d3c576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600082610e8657506000610d3f565b82820282848281610e9357fe5b0414610d3c5760405162461bcd60e51b81526004018080602001828103825260218152602001806110aa6021913960400191505060405180910390fd5b6000610d3c83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610fa9565b60008184841115610fa15760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610f66578181015183820152602001610f4e565b50505050905090810190601f168015610f935780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008183610ff85760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610f66578181015183820152602001610f4e565b50600083858161100457fe5b0495945050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061104f57805160ff191683800117855561107c565b8280016001018555821561107c579182015b8281111561107c578251825591602001919060010190611061565b5061108892915061108c565b5090565b6110a691905b808211156110885760008155600101611092565b9056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775468652063616c6c6572206f6620746869732066756e6374696f6e206d7573742062652061206c656e64696e6720706f6f6ca26469706673582212205eb273895711cfca3593a94311cf13f9c13bbe4a457e4121181f0e0abdc3ec4c64736f6c63430006080033";
