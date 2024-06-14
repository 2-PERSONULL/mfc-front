'use server'

export default async function getPost(offset: number, limit: number) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=${limit}`,
    )

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}
