import digitalAgency from '../../digitalAgency.json';

export default (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
        JSON.stringify(
            digitalAgency.map(({ name, desc, img }) => {
                return { name, desc, img }
            })
        )
    )
}