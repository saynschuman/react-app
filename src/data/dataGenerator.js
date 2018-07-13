import { postData } from '../postData'
import { normalize, schema } from 'normalizr';

const comment = new schema.Entity('comments')
const article = new schema.Entity('articles', { comments: [comment] })
const articlesListSchema = [article]
const normalizedData = normalize(postData, articlesListSchema)

export function articlesGenerator() {
  return normalizedData.entities.articles
}

export function commentsGenerator() {
  return normalizedData.entities.comments
}

export function articleIdGenerator() {
  return normalizedData.result
}