const axios = require("axios");
const fs1 = require("fs");
const fs = require("fs").promises;
var json2xls = require("json2xls");

const allProducts = async (req, res, next) => {
  try {
    let ans = [];
    const result = await axios.get("https://api.mfapi.in/mf");

    for (let i = 0; i < result.data.length; i++) {
      ans.push(result.data[i]);
    }
    // await db.MutuleFundData.create(ans);
    // const found = result.data.find((element) => element);
    res.status(200).json({
      success: true,
      ans,
    });
    // var xls = json2xls(ans);
    // const fileName = "FundData" + ".xlsx";
    // fs1.writeFileSync(fileName, xls, "binary");
    // res.xls("FundData.xlsx", ans);
    // res.send(ans);
  } catch (error) {
    console.error(error);
    let message = error.message;
    if (!message) message = error;
    res.status(500).send({ status: false, message });
  }
};

const getDataByIds = async (req, res, next) => {
  try {
    const { id } = req.body;
    const data = await allProducts();
    const arr = [];
    let ans;

    for (let i = 0; i < data.length; i++) {
      if (data[i].schemeCode == id);
      {
        let result = await axios.get(`https://api.mfapi.in/mf/${id}`);
        ans = result.data;
        res.send(ans);
        arr.push(ans);
      }
    }
    // var xls = json2xls(ans);
    // const fileName = "mdDataFile" + ".xlsx";
    // fs1.writeFileSync(fileName, xls, "binary");
    // res.xls("mdDataFile.xlsx", ans);

    console.log(arr, "a1");
    console.log("122343434");
    res.status(200).json({
      success: true,
      _data: arr,
    });

    // console.log("hello", data);
  } catch (error) {
    console.error(error);
    let message = error.message;
    if (!message) message = error;
    res.status(500).send({ status: false, message });
  }
};

const getDataById = async (req, res, next) => {
  try {
    const { id } = req.body;
    const ans = [];

    const result = await axios.get("https://api.mfapi.in/mf");

    const found = result.data.find((element) => element.schemeCode === id);
    // console.log(found);

    if (found) {
      let result1 = await axios.get(`https://api.mfapi.in/mf/${id}`);
      // let ans1 = result1.data;
      //   console.log(ans1);
      for (let i = 0; i < result1.data.length; i++) {
        console.log(result1.data);
        ans.push(result1.data[i]);
      }
      console.log(ans, "==============");

      //   res.status(200).json({
      //     success: true,
      //     ans,
      //   });

      //   var xls = json2xls(ans);
      //   const fileName = "FundDataids" + ".xlsx";
      //   fs1.writeFileSync(fileName, xls, "binary");
      //   res.xls("FundDataids.xlsx", ans);
      //   res.send(ans);
    } else {
      console.log("Not found");
    }
  } catch (error) {
    console.error(error);
    let message = error.message;
    if (!message) message = error;
    res.status(500).send({ status: false, message });
  }
};
// {
//     campaign_id: 123,
//     campaign_name: SomeName,
//     subcampaigns: [
//       {country: Australia, impressions: 12000, cost: 12},
//       {country: Australia, impressions: 14000, cost: 17},
//       {country: Singapore, impressions: 10000, cost: 7},
//       {country: Singapore, impressions: 7000, cost: 6}
//     ]
//   }
// [{
//     campaign_name: SomeName,
//     country: Australia,
//     impressions: 36000
//     cost: 29
//   },
//   {
//     campaign_name: SomeName,
//     country: Singapore
//     impressions: 17000
//     cost: 13
//   }]
var groupedSubcampaigns = _.groupBy(data.subcampaigns, "country");
var summator = function (memo, el) {
  return memo + el;
};
var result = _.map(groupedSubcampaigns, function (group, country) {
  return {
    campaign_name: data.campaign_name,
    country: country,
    impressions: _.reduce(_.pluck(group, "impressions"), summator, 0),
    cost: _.reduce(_.pluck(group, "cost"), summator, 0),
  };
});

letdata = {
  2000: [
    {
      _id: 0,
      name: "Jeff",
      value: 130,
      year: 2000,
    },
    {
      _id: 1,
      name: "Bill",
      value: 30,
      year: 2000,
    },
  ],
  2001: [
    {
      _id: 0,
      name: "Jeff",
      value: 20,
      year: 2001,
    },
    {
      _id: 1,
      name: "Bill",
      value: 100,
      year: 2001,
    },
  ],
};
let final = Object.entries(data).map(([year, year_data]) => ({
  year,
  year_data: year_data.map(({ year, ...rest }) => rest),
}));

console.log(final);
console.log(result);
module.exports = { allProducts, getDataById, getDataByIds };

var contacts = [
  {
    name: "Bob",
    lastName: "Smith",
  },
  {
    name: "James",
    lastname: "David",
  },
];

const obj = [
           [{ foo: 1, bar: 2}, { foo: 3, bar: 4}, { foo: 5, bar: 6} ],
           [{ date: '29-05-2008', nav: '10.72050' },{ date: '28-05-2008', nav: '10.72500' }],
             { date: '27-05-2008', nav: '10.72160' },
            ]
const da = {
  data: [
    {
      meta: {
        fund_house: "Standard Chartered Mutual Fund",
        scheme_type: "Open Ended Schemes",
        scheme_category: "Income",
        scheme_code: 100027,
        scheme_name:
          "Grindlays Super Saver Income Fund-GSSIF-Half Yearly Dividend",
      },
      data: [
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
      ],
    },
  ],
};
