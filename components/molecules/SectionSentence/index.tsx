import React from 'react'
import Text from '../../atoms/Text'
interface SectionSentenceProps {
  badge?: string
  title?: string
  paragraph?: string
  badgeStyle?: 'success' | 'error'
}
const SectionSentence = ({
  title = '',
  paragraph = '',
  badge = '',
  badgeStyle = 'success',
}: SectionSentenceProps) => {
  return (
    <article className="space-y-6">
      {title == '' && badge == '' ? (
        ''
      ) : (
        <div className="space-y-1">
          {badge == '' ? (
            ''
          ) : (
            <Text
              value={badge}
              textStyle={
                badgeStyle == 'success' ? 'SectionBadge' : 'SectionBadgeError'
              }
            />
          )}
          {title == '' ? '' : <Text value={title} textStyle="SectionTitle" />}
        </div>
      )}
      {paragraph == '' ? (
        ''
      ) : (
        <Text value={paragraph} textStyle="SectionParagraph" />
      )}
    </article>
  )
}

export default SectionSentence
