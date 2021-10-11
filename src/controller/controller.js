const API_KEY = 'd8455d5ff2e84726a810e6fea3e1337d'
const axious = require("axios")

exports.renderHomePage = (req, res) => {
    res.render("index", {
        title: "Covid Information",
    })
}

exports.getCovidInfo = (req,res) => {
    const info = req.body.state
    const url = `https://localcoviddata.com/covid19/v1/cases/jhu?state=${info}&daysInPast=3`
    axious.get(url).then((response)=>{
       res.render('index',{
           date1: response.data.historicData[0].date,
           date2: response.data.historicData[1].date,
           date3: response.data.historicData[2].date,
           deathCt1: response.data.historicData[0].deathCt,
           deathCt2: response.data.historicData[1].deathCt,
           deathCt3: response.data.historicData[2].deathCt,
           PositiveCasesCt1: response.data.historicData[0].peoplePositiveCasesCt,
           PositiveCasesCt2: response.data.historicData[1].peoplePositiveCasesCt,
           PositiveCasesCt3: response.data.historicData[2].peoplePositiveCasesCt
       })
    })
}