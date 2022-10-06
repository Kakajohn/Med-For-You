const formidable = require('formidable');
const validator = require('validator');
const registerModel = require('../models/authModel');
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const console = require('console');

module.exports.userRegister = (req, res) => {
  const form = formidable();
  form.parse(req, async (err, fields, files) => {
    const { userName, email, password, confirmPassword } = fields;

    const { image } = files;
    const error = [];

    if (!userName) {
      error.push('User name field can not be empty');
    }
    if (!email) {
      error.push('Email field can not be empty');
    }
    if (email && !validator.isEmail(email)) {
      error.push('Invalid email');
    }
    if (!password) {
      error.push('Password field can not be empty');
    }
    if (!confirmPassword) {
      error.push('Confirm  password field can not be empty');
    }
    if (password && confirmPassword && password !== confirmPassword) {
      error.push('Passwords do not match');
    }
    if (password && password.length < 6) {
      error.push('Too weak password');
    }
    if (Object.keys(files).length === 0) {
      error.push('Profile picture needed');
    }
    if (error.length > 0) {
      res.status(400).json({
        error: {
          errorMessage: error
        }
      });
    } else {
      const getImageName = files.image.originalFilename;
      const randNumber = Math.floor(Math.random() * 99999);
      const newImageName = randNumber + getImageName;
      files.image.originalFilename = newImageName;

      const newPath = __dirname + `../../../frontend/public/image/${files.image.originalFilename}`;

      try {
        const checkUser = await registerModel.findOne({
          email: email
        });
        if (checkUser) {
          res.status(404).json({
            error: {
              errorMessage: ['Email already exists']
            }
          });
        } else {
          fs.copyFile(files.image.filepath, newPath, async error => {
            if (!error) {
              const userCreate = await registerModel.create({
                userName,
                email,
                password: await bcrypt.hash(password, 10),
                image: files.image.originalFilename
              });

              const token = jwt.sign(
                {
                  id: userCreate._id,
                  email: userCreate.email,
                  userName: userCreate.userName,
                  image: userCreate.image,
                  registerTime: userCreate.createdAt
                },
                process.env.SECRET,
                {
                  expiresIn: process.env.TOKEN_EXP
                }
              );

              const options = { expires: new Date(Date.now() + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000) };

              res.status(201).cookie('authToken', token, options).json({
                successMessage: 'Welcome',
                token
              });
            } else {
              res.status(500).json({
                error: {
                  errorMessage: ['Interanl Server Error']
                }
              });
            }
          });
        }
      } catch (error) {
        res.status(500).json({
          error: {
            errorMessage: ['Interanl Server Error']
          }
        });
      }
    }
  }); // end Formidable
};

module.exports.userLogin = async (req, res) => {
  const error = [];
  const { email, password } = req.body;
  if (!email) {
    error.push('Please provide your Email');
  }
  if (!password) {
    error.push('Please provide your Passowrd');
  }
  if (email && !validator.isEmail(email)) {
    error.push('Please provide your Valid Email');
  }
  if (error.length > 0) {
    res.status(400).json({
      error: {
        errorMessage: error
      }
    });
  } else {
    try {
      const checkUser = await registerModel
        .findOne({
          email: email
        })
        .select('+password');

      if (checkUser) {
        const matchPassword = await bcrypt.compare(password, checkUser.password);

        if (matchPassword) {
          const token = jwt.sign(
            {
              id: checkUser._id,
              email: checkUser.email,
              userName: checkUser.userName,
              image: checkUser.image,
              registerTime: checkUser.createdAt
            },
            process.env.SECRET,
            {
              expiresIn: process.env.TOKEN_EXP
            }
          );
          const options = { expires: new Date(Date.now() + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000) };

          res.status(200).cookie('authToken', token, options).json({
            successMessage: 'Your Login Successful',
            token
          });
        } else {
          res.status(400).json({
            error: {
              errorMessage: ['Your Password not Valid']
            }
          });
        }
      } else {
        res.status(400).json({
          error: {
            errorMessage: ['Your Email Not Found']
          }
        });
      }
    } catch {
      res.status(404).json({
        error: {
          errorMessage: ['Internal Sever Error']
        }
      });
    }
  }
};

module.exports.userLogout = (req, res) => {
  res.status(200).cookie('authToken', '').json({
    success: true
  });
};
