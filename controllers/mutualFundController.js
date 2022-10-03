const axios = require("axios");
const fs = require("fs").promises;
var json2xls = require("json2xls");
const db = require("../connection/db");

const loginDetails = async (req, res, next) => {
  try {
    let { UserName, UserType, password, Email, Mobile, Source } = req.body;
    // console.log(UserName, UserType, password, Email, Mobile, Source);
    const _data = await db.formDetails.create({
      UserName: UserName,
      UserType: UserType,
      password: password,
      Email: Email,
      Mobile: Mobile,
      Source: Source,
    });
    res.status(200).send({ _data, status: true, msg: "Data Add Successfully." });
  } catch (error) {
    console.log(error);
    res.status(404).send({ status: false, err: error });
  }
};

const getProductData = async (req, res, next) => {
  try {
    const _data = await db.ProductDetails.findAll();
   if(!_data){
      console.log("somting went wrong");
   };
   res.status(200).send( _data );
  } catch (error) {
    console.log(error);
    res.status(404).send({ status: false, err: error });
  }
};

const allProducts = async (req, res, next) => {
  try {
    let userFullnames = obj.map(function (element) {
      return `${element.firstName} ${element.lastName}`;
    });
    let mfReturn = [];
    let fdd = [];
    let mfPortfolioData, mfRatioData, data;
    // console.log(myobj);
    for (let i = 0; i < myobj.length; i++) {
      mfPortfolioData = myobj[i].mfPortfolio;
      mfRatioData = myobj[i].mfRatio;
      data = myobj[i].mfReturn;
    }
    fdd.push(mfRatioData);
    // console.log(fdd);
    for (let i = 0; i < fdd.length; i++) {
      console.log(fdd[i].semisd_x);
    }
    mfReturn.push(data);
    res.send({
      mfReturn: mfReturn,
      mfPortfolio: mfPortfolioData,
      mfRatio: mfRatioData,
    });
    res.send({});
    const result = await axios.get("https://api.mfapi.in/mf");
    for (let i = 0; i < result.data.length; i++) {
      ans.push(result.data[i]);
    }
    // res.status(200).json({success: true, ans, });
    var xls = json2xls(ans);
    const fileName = "FundMasterData" + ".xlsx";
    fs1.writeFileSync(fileName, xls, "binary");
    res.xls("FundMasterData.xlsx", ans);
  } catch (error) {
    console.error(error);
    let message = error.message;
    if (!message) message = error;
    res.status(500).send({ status: false, message });
  }
};

const getDataBYID = async (req, res, next) => {
  try {
    const { id } = req.body;
    const final = [];
    const obj = {};
    const result = await axios.get("https://api.mfapi.in/mf");
    // console.log(result);
    const found = result.data.find((element) => element.schemeCode === id);
    if (found) {
      let result1 = await axios.get(`https://api.mfapi.in/mf/${id}`);
      const da = result1.data.data;
      const ress = da.map((a) => Object.values(a)).flat();
      console.log(ress);
      const objj = { ...ress };

      console.log("not working ");
      const meta = result1.data.meta;
      let data1 = result1.data.data;
      const obj1 = { ...objj, ...meta };
      for (let i = 0; i < result1.data.length; i++);
      {
        final.push(obj1);
      }

      var xls = json2xls(final);
      const fileName = "FundData0" + ".xlsx";
      fs1.writeFileSync(fileName, xls, "binary");
      res.xls("FundData0.xlsx", final);

      res.status(200).json({
        success: true,
        final,
      });
    } else {
      console.log("Not Found");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getDataBYID,
  allProducts,
  loginDetails,
  getProductData
};

// {
//   "_id": {
//     "$oid": "63342350d8de286f557ea7fb"
//   },
//   "amc_code": "400001",
//   "amc": "Baroda BNP Paribas Asset Management India Pvt. Ltd.",
//   "fund": "Baroda BNP Paribas Mutual Fund",
//   "srno": "1",
//   "office_type": "Registered Office",
//   "add1": "Crescenzo, 7th Floor,",
//   "add2": "G-Block, Bandra Kurla Complex,",
//   "add3": "Mumbai - 400051",
//   "email": "customer.care@bnpparibasmf.in",
//   "phone": "91-22-3370 4000",
//   "fax": "91-22-3370 4294",
//   "webiste": "https://www.barodabnpparibasmf.in",
//   "setup_date": "2004-04-15 00:00:00.000",
//   "mf_type": "Pvt. Sector - Joint Ventures ( Foreign)",
//   "trustee_name": "Baroda BNP Paribas Trustee India Pvt. Ltd.",
//   "sponsor_name": "BNP Paribas Asset Management Asia Limited",
//   "amc_inc_date": "2003-11-04 00:00:00.000",
//   "s_name": "Baroda BNP Paribas",
//   "amc_symbol": "BNPP MF",
//   "city": "Mumbai",
//   "rtamccode": "M",
//   "flag": "A",
//   "createdAt": {
//     "$date": {
//       "$numberLong": "1664361296380"
//     }
//   },
//   "updatedAt": {
//     "$date": {
//       "$numberLong": "1664361296380"
//     }
//   },
//   "__v": 0
// }