const LoggingMdw = (req, res, next) => {
    console.log(`Call made to resource ${req.url} with method ${req.method}`);
  
    console.log(`Authorization: ${req.get("Authorization")}`);
  
    next();
  };

export default {LoggingMdw};