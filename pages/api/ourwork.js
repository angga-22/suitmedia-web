import ourwork from '../../JSONdata/homepage/ourwork.json'

export default (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
        JSON.stringify(
            ourwork.map(({ id, title, img }) => {
                return { id, title, img }
            })
        )
    )
}