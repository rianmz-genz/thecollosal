import Text from '../../../atoms/Text'
import LazyCard, {LazyCardProps} from '../../../atoms/LazyCard'
import ButtonLink from '../../../atoms/Button/ButtonLink'
import Button from '../../../atoms/Button'

interface ProjectCardProps extends LazyCardProps {
  title: string
  description: string
}
const ProjectCard = ({
  title,
  description,
  bottomSquareSize = 'small',
  height = 450,
}: ProjectCardProps) => {
  return (
    <div className="w-full">
      <LazyCard bottomSquareSize={bottomSquareSize} height={height} />
      <div className="flex flex-col place-items-center text-center mt-10">
        <div className="mb-2.5">
          <Text value={title} textStyle="ProjectTitle" />
        </div>
        <div className="mb-9">
          <Text value={description} textStyle="ProjectDescription" />
        </div>
        <div className="">
          <ButtonLink
            value="Detail"
            color="white"
            radius="pill"
            style="outline"
            href="/project/detail"
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
