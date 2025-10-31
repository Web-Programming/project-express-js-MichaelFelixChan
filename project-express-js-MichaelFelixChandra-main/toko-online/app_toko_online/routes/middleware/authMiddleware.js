exports.adminOnly = (req, res, next) => {
    const isAdmin = req.body.isAdmin;

    if(isAdmin===true){
        console.log('Middleware Akses Admin Diberikan');
        next();
    }else{
        return res.status(403).json({
            success: false,
            message: "Akses ditolak. Endpoint ini membutuhkan hak admin"
        });
    }
};