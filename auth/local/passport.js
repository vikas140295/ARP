const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Op } = require("sequelize");
exports.setup = (User, Role, config) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password" // this is the virtual field on the model
      },

      (email, password, done) => {
          User.findOne(
          {
            where:{
              [Op.or]: [
              { email: email },
              { username: email },
            ],
            isDeleted: false,
          }
          }).then(
          (user) => {
            //return done(err);
              console.log('here'+JSON.stringify(user))
              if (!user) {
               return done(null, false, {
                 message: "This email is not registered."
               });
            }
            if (user.password!=password) {
               return done(null, false, {
                 message: "This password is not correct."
               });
            }
            Role.findOne(
              {
                where:{
                  name: user.role
              }
              }).then(
              (role) => {
                //if (err) 
                //return done(err);

                console.log('coming here'+JSON.stringify(role));
                  if (!role) {
                   return done(null, false, {
                     message: "This role does not exist."
                   });
                }
                var permissions=role.permissions.split(',');
                user.permissions = permissions;
                return done(null, user);
              }
            );
          }
        );
      }
    )
  );
};




// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;

// exports.setup = (User, Role, config) => {
//   passport.use(
//     new LocalStrategy(
//       {
//         usernameField: "email",
//         passwordField: "password" // this is the virtual field on the model
//       },

//       (email, password, done) => {
//         User.findOne(
//           {
//             $or: [{ email: email.toLowerCase() }, { name: email.toLowerCase() }]
//           },
//           (err, user) => {
//             if (err) return done(err);

//             if (!user) {
//               return done(null, false, {
//                 message: "This email is not registered."
//               });
//             }
//             if (!user.authenticate(password)) {
//               return done(null, false, {
//                 message: "This password is not correct."
//               });
//             }
//             Role.findOne(
//               {
//                 name: user.role
//               },
//               (err, role) => {
//                 if (err) return done(err);

//                 if (!role) {
//                   return done(null, false, {
//                     message: "This role does not exist."
//                   });
//                 }
//                 user.permissions = role.permissions;
//                 return done(null, user);
//               }
//             );
//           }
//         );
//       }
//     )
//   );
// };
