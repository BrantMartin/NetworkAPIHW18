const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
} = require('../../controllers/userController');


router.route('/').get(getUsers).post(createUser);


router.route('/:userId').get(getSingleUser).delete(deleteUser);


router.route('/:thoughtId/reactions').post(addReaction);


router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
