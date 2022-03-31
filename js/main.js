import postApi from './api/postApi'

async function main() {
  const queryParams = {
    _page: 1,
    limit: 10,
  }
  const respone = await postApi.getAll(queryParams)
  console.log(respone)
}

main()
