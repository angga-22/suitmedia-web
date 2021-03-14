import featuredclients from '../../JSONdata/featuredclients.json';

export default (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
        JSON.stringify(
            featuredclients.map(({ id, img }) => {
                return { id, img }
            })
        )
    )
}