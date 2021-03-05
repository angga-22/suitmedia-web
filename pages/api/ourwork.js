import ourwork from '../../ourwork.json';

export default (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
        JSON.stringify(
            ourwork.map(({ id, title, link, img }) => {
                return { id, title, link, img }
            })
        )
    )
}