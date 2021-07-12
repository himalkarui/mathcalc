const router = express.Router()

const serverRenderer = (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('An error occurred')
        }
        return res.send(
            data
                .replace(
                    '<div id="root"></div>',
                    `<div id="root">${ReactDOMServer.renderToNodeStream(<App />)}</div>`
                )
        )
    })
}

router.use(express.static(path.resolve(__dirname, '..', 'build')));

router.use('^/$', serverRenderer);

router.use((req, res, next) => {
    return serverRenderer(req, res, next);
})