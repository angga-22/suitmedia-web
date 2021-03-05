import ideas from '../../ideas.json';


export default (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
        JSON.stringify(
            ideas.map(({ id, link, title, date, img }) => {
                return { id, link, title, date, img }
            })
        )
    )
}
