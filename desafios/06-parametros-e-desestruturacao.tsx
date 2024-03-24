function updateUserRoute(data, params) {
  const { name, email, password } = data
  const { id } = params
  updateUserController({ name, email, password }, { id: 1 })
}

function updateUserController({ data, params }) {
  const { name, email, password } = data
  const { id } = params,

  userRepository.update({
    data: { name, email, password },
    params: { id: 1 },
  })
}

const userRepository = {
  update: ({ name, email, password }, { id }) => {},
}
