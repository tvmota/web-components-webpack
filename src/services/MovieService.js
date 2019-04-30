import { Api } from './Api'

const apikey = '0a74cea179b42ea0fd1daaba8b7e80b7'

export async function listMovies() {
  let resp = (await Api.get(`/discover/movie?sort_by=popularity.desc&api_key=${apikey}&language=pt-BR`)).data

  return resp
}
