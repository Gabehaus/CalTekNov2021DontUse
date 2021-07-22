import asyncHandler from "express-async-handler"

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const testControllerFunction = asyncHandler(async (req, res) => {
  const user = "Test route is working"

  if (user) {
    res.send(user)
  } else {
    res.status(404)
    throw new Error("route not working")
  }
})

export { testControllerFunction }
