const SERVER_SECRET = "SecretoQueSoloConoceElServer";

import passport  from "passport";
import passportJwt from "passport-jwt";
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: SERVER_SECRET,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);

const jwtValidMDW = passport.authenticate("jwt", { session: false });

const userIsAdminMDW = (req, res, next) => {
  return passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      console.err(err);
      return next(err);
    }

    if (user.role === "Admin") {
      req.user = user;
      return next();
    }

    res.status(401).json({ error: "User not Admin" });
  })(req, res, next);
};

const _jwtValidMDW = jwtValidMDW;
export { _jwtValidMDW as jwtValidMDW };
const _userIsAdminMDW = userIsAdminMDW;
export { _userIsAdminMDW as userIsAdminMDW };
