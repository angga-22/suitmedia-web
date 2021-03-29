import careers from '../../JSONdata/careers/careers.json';


export default (req, res) => {
    res.statusCode = 200,
        res.setHeader("Content-Type", "application-json"),
        res.end(
            JSON.stringify(
                careers.map(({ id, label, role, responsible, qualify, note }) => {
                    return { id, label, role, responsible, qualify, note }
                })
            )
        )
}