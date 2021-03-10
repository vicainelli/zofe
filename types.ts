export type EpisodeGuide = {
  title: string
  timestamp: string
  url: string
}

export type Episode = {
  slug: string
  episodeNumber: number
  title: string
  postText: string
  audioUrl: string
  duration: string
  publishDate?: string
  episodeGuideCollection: {
    items: EpisodeGuide[]
  }
}