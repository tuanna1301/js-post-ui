import postApi from './api/postApi'

function createPostElement(post) {
  if (!post) return
  try {
    //find and clone template
    const postTemplate = document.getElementById('postItemTemplate')
    if (!postTemplate) return

    const liElement = postTemplate.content.firstElementChild.cloneNode(true)
    if (!liElement) return

    //update title,author,desc,image,thumnail
    const titleElement = liElement.querySelector('[data-id ="title"]')
    if (titleElement) titleElement.textContent = post.title

    const descriptionElement = liElement.querySelector('[data-id ="description"]')
    if (descriptionElement) descriptionElement.textContent = post.description

    const authorElement = liElement.querySelector('[data-id ="author"]')
    if (authorElement) authorElement.textContent = post.author

    //attach event
    return liElement
  } catch (error) {
    console.log('Error', error)
  }
}

function renderPostList(postList) {
  if (!Array.isArray() || postList.length === 0) return

  const ulElement = document.getElementById('postList')
  if (!ulElement) return
  postList.forEach((post) => {
    const liElement = createPostElement(post)
    ulElement.appendChild(liElement)
  })
}

;(async () => {
  try {
    const queryParams = {
      _page: 1,
      limit: 6,
    }
    const { data, pagination } = await postApi.getAll(queryParams)
    renderPostList(data)

    console.log(data)
  } catch (error) {
    console.log('get all failed', error)
  }
})()
