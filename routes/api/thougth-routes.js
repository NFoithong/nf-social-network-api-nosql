const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    addReaction,
    updateThought,
    deleteThought,
    removeReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought)
    .post(createThought)

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:thoughtId/reactionId')
    .delete(removeReaction)

module.exports = router;