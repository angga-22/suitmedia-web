import teamCreative from '../../JSONdata/about/teamCreative.json';


export default (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
        JSON.stringify(
            teamCreative.map(({ id, title, name, img }) => {
                return { id, title, name, img }
            })
        )
    )
}
