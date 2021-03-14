import digitalAgency from '../../JSONdata/digitalAgency.json';

export default (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
        JSON.stringify(
            digitalAgency.map(({ id, name, desc, img }) => {
                return { id, name, desc, img }
            })
        )
    )
}

