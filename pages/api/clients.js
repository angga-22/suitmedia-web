import clients from '../../JSONdata/work/clients.json';


export default (req, res) => {
    res.statusCode = 200,
        res.setHeader("Content-Type", "application-json"),
        res.end(
            JSON.stringify(
                clients.map(({ id, label, items }) => {
                    return { id, label, items }
                })
            )
        )
}