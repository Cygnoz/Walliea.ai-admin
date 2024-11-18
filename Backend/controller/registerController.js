const User = require('../model/registerSchema')

const getUser = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).send(err);
    }
  };


module.exports={
    getUser,
}
