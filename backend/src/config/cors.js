module.exports = function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS, DELETE, PUT')
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, X-Requested-With')
    next()
}