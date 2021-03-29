import whatwedo from '../../JSONdata/about/whatwedo.json';


export default (req, res) => {
    res.statusCode = 200,
        res.setHeader("Content-Type", "application-json"),
        res.end(
            JSON.stringify(
                whatwedo.map(({ id, label, desc, img }) => {
                    return { id, label, desc, img }
                })
            )
        )
}