import { Response, Request } from "express"
import { allLocales, en, Faker } from "@faker-js/faker"
import { ID_MAX } from "../constants/constants"

export const getUsers = async (req: Request, res: Response) => {
  const { locale, countryLocal, seed, page } = req.query
  const localizedFaker = new Faker({
    locale: [allLocales[locale as keyof typeof allLocales], en]
  })

  localizedFaker.seed(parseInt(seed + "0" + page))

  const users = Array.from({ length: 10 }, () => ({
    id: localizedFaker.number.int({ min: 1, max: ID_MAX }),
    fullName: localizedFaker.person.fullName(),
    address:
      countryLocal +
      ", " +
      localizedFaker.location.state() +
      ", " +
      localizedFaker.location.city() +
      ", " +
      localizedFaker.location.street() +
      ", " +
      localizedFaker.location.zipCode(),
    phone: localizedFaker.phone.number()
  }))

  res.json(users)
}
