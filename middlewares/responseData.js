const responseData = (req, res, next) => {
        /**
         * (default status 200)
         * Success response
         */
        res.success = function ({data={}, status=200, totalData=0, message=""}) {
            return res.json({
                data,
                status,
                totalData,
                message
            })
        }
      
        /**
         * Custom error response
         */
        res.error = function({status=400, message="", data={}}) {
            return res.status(200).json({status, message, data })
        }
      
        /**
         * (status 403)
         * Bad request response
         */
        res.badreq = function({status=400, message="", data={}}) {
            return res.status(200).json({status, message, data })
        }
      
        /**
         * (status 403)
         * Forbidden request response
         */
        res.forbidden = function({status=403, message="", data={}}) {
            return res.status(200).json({status, message, data })
        }
        
        /**
         * (status 401)
         * Unauthorize request response
         */
        res.unauth = function({status=401, message="", data={}}) {
            return res.status(200).json({status, message, data })
        }
      
        /**
         * (status 500)
         * Internal request response
         */
        
        res.internal = function({status=500, message="", data={}}) {
            return res.status(200).json({status, message, data })
        }

        /**
         * (status 412)
         * Fail Validate
         */
        res.failvalidate = function(data={}) {
            return res.status(412).json({ 'status': 412, 'message': 'Validation Failed!', data })
        }
      
        next()
}

export default responseData