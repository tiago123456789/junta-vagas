const extractJobsSitesBackendBr = require("../crawlers/extractJobsSiteBackendbr");
const extractJobsSiteFrontendBr = require("../crawlers/extractJobsSiteFrontendbr");
const extractJobsSiteRemoveOk = require("../crawlers/extractJobsSiteRemoveOk");
const { insertJobs } = require("../services/job");
const extractJobsSiteStartec = require("../crawlers/extractJobsSiteStartec");
const extractJobsSiteProgramathor = require("../crawlers/extractJobsSiteProgramathor");

module.exports = async () => {
  console.log("Init extraction the jobs");
  const results = await Promise.all([
    extractJobsSiteFrontendBr(),
    extractJobsSiteRemoveOk(),
    extractJobsSitesBackendBr(),
    // extractJobsSiteStartec(),
    extractJobsSiteProgramathor(),
  ]);
  const jobs = [
    ...results[0],
    ...results[1],
    ...results[2],
    ...results[3],
    // ...results[4],
  ];
  console.log("Init insertation the jobs extracted in database");
  await insertJobs(jobs);
  console.log("Inserted jobs extracted in database with success");
};
