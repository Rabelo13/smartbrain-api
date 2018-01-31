const handleProfile = (req, res, db) => {
  const {id} = req.params;
  db.select('*').from('users').where({
    id: id
  }).then(user => {
    if(user.length) {
      res.json(user[0])
    }

  }).catch(err => rex.status(400).json('error getting user'));
}

module.exports = {
  handleProfile: handleProfile
}
