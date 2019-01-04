export default function({$axios}) {
    $axios.setHeader('AUTHO', 'passing bearertoken')
    $axios.onRequest(config => {
        console.log('---------------Making request to ' + config.url)
    })
}
