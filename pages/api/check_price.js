export default  function checkPrice(req, res) {
    fetch("https://mobile.southwest.com/api/air-misc/v1/air-misc/page/air/manage-reservation/view", 
    {
        method: "POST",
        headers: { 
            "X-Api-Key": "l7xx944d175ea25f4b9c903a583ea82a1c4c",
            "X-Channel-Id": "southwest",
            "Content-Type": "application/json",
            "Host": "mobile.southwest.com"
        },
        body: req.body
    }).then((response) => {
        console.log("response", response)
        res.status(200).json(response)
    }).catch((error) => {
        console.log("error", error)
        res.status(400).json(error)
    })
}