export const calculateSummaries = (users) => {
  const differentNationality = users.length
    ? new Set(users.map((user) => user.nat)).size
    : 0

  const countFemale = users.filter((user) => user.gender === 'female').length
  const countMale = users.filter((user) => user.gender === 'male').length
  const mostGender = countFemale >= countMale ? 'Female' : 'Male'

  const averageAge = users.length
    ? Math.round(
        users.reduce((sum, user) => sum + user.dob.age, 0) / users.length
      )
    : 0

  const averageMembership = users.length
    ? Math.round(
        users.reduce((sum, user) => {
          const regDate = new Date(user.registered.date)
          const diffYears =
            (Date.now() - regDate.getTime()) / (1000 * 60 * 60 * 24 * 365)
          return sum + diffYears
        }, 0) / users.length
      )
    : 0

  return {
    differentNationality,
    mostGender,
    averageAge,
    averageMembership
  }
}
