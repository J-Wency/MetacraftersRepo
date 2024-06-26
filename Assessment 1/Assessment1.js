/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_data, _moreData, _evenMoreData, _tooMuchData) {
    const NFT = {
        "data": _data,
        "moreData":_moreData,
        "evenMoreData":_evenMoreData,
        "tooMuchData":_tooMuchData
    } 
    NFTs.push(NFT)
    console.log("Minted data: " + _data + "\n");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let iter = 0; iter <NFTs.length; iter++){
        console.log("NFT "+ (iter + 1) + " contains the following metadata.")
        console.log(NFTs[iter].data);
        console.log(NFTs[iter].moreData);
        console.log(NFTs[iter].evenMoreData);
        console.log(NFTs[iter].tooMuchData + "\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Supply is currently at " + NFTs.length);
}

// call your functions below this line
mintNFT("tracking", "fingerprinting", "ip address", "verifier");
mintNFT("cookie", "browser version", "15.32.222.12", "real");
mintNFT("access token", "region", "192.168.1.1", "local");
listNFTs();
getTotalSupply();
