import { postData } from '../postData'
import { normalize, schema } from 'normalizr';

const comment = new schema.Entity('comments')
const article = new schema.Entity('articles', { comments: [comment] })
const articlesListSchema = [article]
export const normalizedData = normalize(postData, articlesListSchema)
