import { TagContainer } from './styles'
type TagSize = 'small' | 'big'

export type Props = {
  size?: TagSize
  children: string | string[]
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>
    {Array.isArray(children) ? children.join(' ') : children}
  </TagContainer>
)

export default Tag
