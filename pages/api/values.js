import values from '../../JSONdata/careers/values.json';

export default (req, res) => {
    res.statusCode = 200,
        res.setHeader("Content-Type", "application-json"),
        res.end(
            JSON.stringify(
                values.map(({ id, label, desc, img }) => {
                    return { id, label, desc, img }
                })
            )
        )
}