import content from '../../JSONdata/work/content.json';


export default (req, res) => {
    res.statusCode = 200,
        res.setHeader("Content-Type", "application-json"),
        res.end(
            JSON.stringify(
                content.map(({ id, title, img, link }) => {
                    return { id, title, img, link }
                })
            )
        )
}