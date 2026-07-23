const BASE_URL = 'https://api.agcnewsnet.com'

async function fetchData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error)
    throw error
  }
}

export const getTopStories = () => fetchData('/api/general/top-stories')
export const getLatestStories = () => fetchData('/api/general/stories/latest-stories')
export const getEditorPicks = () => fetchData('/api/general/editor-picks/')
export const getFeaturedStories = () => fetchData('/api/general/stories/featured-stories')
export const getMissedStories = () => fetchData('/api/general/stories/missed-stories')
export const getCategories = () => fetchData('/api/general/categories')
export const getCategoryStories = (categoryId, page = 1) => fetchData(`/api/general/categories/${categoryId}/stories?page=${page}`)
export const getStory = (story) => fetchData(`/api/general/stories/${story}`)
