import teamBusiness from '../../JSONdata/about/teamBusiness.json';


export default (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
        JSON.stringify(
            teamBusiness.map(({ id, title, name, img }) => {
                return { id, title, name, img }
            })
        )
    )
}
